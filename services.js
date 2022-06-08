/* eslint-disable no-param-reassign */
const moment = require('moment');

function APIRoutes(db) {


  const getUser = async (req, res) => {
    const email = req.body.email;
    let user = [];
    let result = await db.any('select * from coders where email = $1', email)
    if (result.length < 1) {
      result = await db.any('select * from mentors where email = $1', email);
      if (result.length > 0) {
        user = result[0];
        user.role = 'mentor'
}
    } else {
      user = result[0];
        user.role = 'coder'
    }
    res.json(user)
  };

  const getCodersWithStatus = async (req, res) => {
    const { taskId } = req.params;
    const result = await db.many(
      'select coders.id, coders.first_name, coders.last_name, assigned.status from coders left join (select coder_id, status from assigned_tasks where task_id = $1) as assigned on coders.id = assigned.coder_id',
      taskId,
    );
    res.json(result);
  };

  const getCoders = async (req, res) => {
    const result = await db.many('select * from coders');
    res.json(result);
  };

  const getTasks = async (req, res) => {
    const result = await db.many(
      'select coders.first_name, coders.last_name, tasks.name as task_name, tasks.id as task_id, assigned_tasks.id, assigned_tasks.status from assigned_tasks join coders on assigned_tasks.coder_id=coders.id join tasks on assigned_tasks.task_id = tasks.id',
    );

    const groupedTasks = result.reduce((taskTypes, assigned) => {
      let type = taskTypes.findIndex((task) => task.id == assigned.task_id);
          const status = assigned.status;
      if (type == -1) {
            const newType = {
              id: assigned.task_id,
              name: assigned.task_name,
            };
            newType[status] = [{coder: `${assigned.first_name} ${assigned.last_name}`, 'assigned_id': assigned.id}]
            taskTypes = [...taskTypes, newType];
      } else {
        taskTypes[type][status] ? taskTypes[type][status] = [...taskTypes[type][status], {coder: `${assigned.first_name} ${assigned.last_name}`, 'assigned_id': assigned.id}] : taskTypes[type][status] = [{coder: `${assigned.first_name} ${assigned.last_name}`, 'assigned_id': assigned.id}]
          }
          return taskTypes;
    },[])
    res.json(groupedTasks);
  };

const getCoderTask = async (req, res) => {
    const { taskId } = req.params;
    const query = 'select coders.first_name, coders.last_name, assigned_tasks.*, tasks.name, tasks.required_urls, tasks.info_urls, tasks.description from assigned_tasks join coders on assigned_tasks.coder_id=coders.id join tasks on assigned_tasks.task_id = tasks.id where assigned_tasks.id=$1';
    const result = await db.many(query, taskId);
    const task = result[0]
    if (task.description == '') { delete task.description };
    task.info_urls = JSON.parse(task.info_urls);
    if (!task.info_urls[0].description) { delete task.info_urls }
    if (!task.required_urls[0]) {
      delete task.required_urls;
      delete task.urls
    } else {
        task.urls = !task.urls ? [] : JSON.parse(task.urls);
        task.required_urls.forEach(descrpt => {
          if (!task.urls.find(url => url.description == descrpt)) {
            task.urls = [...task.urls, {'description': descrpt}]
          }
        });
    }
    res.json(task);
  };

  const getCoderTasks = async (req, res) => {
    const { coderId } = req.params;
    const query = 'select assigned_tasks.id, tasks.name, assigned_tasks.status from assigned_tasks join coders on assigned_tasks.coder_id=coders.id join tasks on assigned_tasks.task_id = tasks.id where coder_id=$1 order by assigned_tasks.status_timestamp desc';
    const result = await db.many(query, coderId);
    res.json(result);
  };



  const getAssignedTasks = async (req, res) => {
    const query = 'select coders.first_name, coders.last_name, tasks.name as task_name, assigned_tasks.date_assigned, assigned_tasks.id, assigned_tasks.status from assigned_tasks join coders on assigned_tasks.coder_id=coders.id join tasks on assigned_tasks.task_id = tasks.id';
    const result = await db.many(query);
    res.json(result);
  };

  const getComments = async (req, res) => {
    try {
      const { taskId } = req.params;
      const coderComments = await db.any(
        'select * from coder_comments where assigned_task_id = $1',
        taskId,
      );
      const mentorComments = await db.any(
        'select mentors.first_name, mentor_comments.* from mentor_comments join mentors on mentor_comments.mentor_id=mentors.id where assigned_task_id = $1',
        taskId,
      );

      let allComments = [...mentorComments, ...coderComments];

      allComments.sort((a, b) => {
        if (a.timestamp > b.timestamp) {
          return -1;
        }
        if (a.timestamp < b.timestamp) {
          return 1;
        }
        return 0;
      });

      allComments = allComments.map((comment) => {
        comment.timestamp = moment(comment.timestamp).fromNow();
        return comment;
      });

      res.json(allComments);
    } catch (err) {
      console.log(err)
    }
  };

  const requestFeedback = async (req, res) => {
    const taskId = req.params.task_id;
    const { comment } = req.body;
    await db.none(
      'update assigned_tasks set status = $1, status_timestamp = localtimestamp where id = $2',
      ['Feedback requested', taskId],
    );
    const result = await db.many(
      'insert into coder_comments (assigned_task_id, comment, timestamp) values ($1,$2, localtimestamp) returning *',
      [taskId, comment],
    );
    result[0].timestamp = moment(result[0].timestamp).fromNow();
    res.json(result);
  };

  const updateFeedback = async (req, res) => {
    const { taskID, mentorID, comment, complete } = req.body;
    const status = complete == 'true' ? 'Completed' : 'Feedback updated'
    console.log(req.body)
    console.log(status)
    await db.none(
      'update assigned_tasks set status = $1, status_timestamp = localtimestamp where id = $2',
      [status, taskID],
    );
    const result = await db.many(
      'insert into mentor_comments (assigned_task_id, comment, timestamp, mentor_id) values ($1,$2, localtimestamp, $3) returning *',
      [taskID, comment, mentorID],
    );
    result[0].timestamp = moment(result[0].timestamp).fromNow();
    res.json(result);
  };

  const updateURL = async (req, res) => {
    const { taskId } = req.params;
    const urls = req.body.urls;
    console.log(urls)
    const result = await db.many(
      'update assigned_tasks set urls=$1 where id=$2 returning urls',
      [JSON.stringify(urls), taskId],
    );
    res.json(result);
  };

  const createTask = async (req, res) => {
    const {
      name, description, infoURLs, coderURLs,
    } = req.body;
    const result = await db.many(
      'insert into tasks (name, required_urls, info_urls, description) values ($1,$2,$3,$4) returning id, name',
      [name, coderURLs, JSON.stringify(infoURLs), description],
    );

    res.json(result);
  };

  const assignTask = async (req, res) => {
    const { taskId } = req.params;
    const { coders } = req.body;

    await Promise.all(
      coders.map(async (coder) => {
        await db.none(
          "insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values ($1, $2, 'Assigned', localtimestamp, localtimestamp)",
          [taskId, coder.id],
        );
      }),
    );
    res.send('done');
  };

  const getTaskWithCoders = async (req, res) => {
    const { taskId } = req.params;
    const details = await db.many('select * from tasks where id = $1', [taskId]);
    let coders = await db.many(
      'select coders.id, coders.first_name, coders.last_name, assigned.id as assigned_id, assigned.status, assigned.urls from coders left join (select coder_id, status, id from assigned_tasks where task_id = $1) as assigned on coders.id = assigned.coder_id',
      taskId,
    );
    coders = coders.map(coder => {
      return {
        id: coder.id,
        name: `${coder.first_name} ${coder.last_name}`,
        assigned: coder.assigned_id == null ? false : true
      }
    })
    details[0].info_urls = JSON.parse(details[0].info_urls)
    res.json({ details, coders });
  };

  const editTask = async (req, res) => {
    const { taskId } = req.params;
    const {
      name, description, required_urls, info_urls,
    } = req.body.details;
    await db.none(
      'update tasks set name=$1, required_urls=$2, info_urls=$3, description=$4 where id=$5',
      [name, required_urls, JSON.stringify(info_urls), description, taskId],
    );
    res.send('done');
  };
  return {
    getCodersWithStatus,
    getCoders,
    getTasks,
    getCoderTasks,
    getCoderTask,
    getAssignedTasks,
    getComments,
    requestFeedback,
    updateURL,
    createTask,
    assignTask,
    getTaskWithCoders,
    editTask,
    getUser,
    updateFeedback
  };
}

module.exports = APIRoutes;
