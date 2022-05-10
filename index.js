const express = require('express');
const path = require('path')
const {ConnectionString} = require('connection-string');

const app = express();
require('dotenv').config();
const PgPromise = require('pg-promise');

const cors = require('cors');
const APIRoutes = require('./services');

const PORT = process.env.PORT || 4017;

app.use(express.static(path.join(__dirname, 'dist')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const { DATABASE_URL } = process.env;

console.log(DATABASE_URL)

const cs = new ConnectionString(DATABASE_URL);

function get_PostgreSQL_connection() {
    return {
        host: cs.hostname,
        port: cs.port,
        database: cs.path?.[0],
        user: cs.user,
        password: cs.password,
        ssl: cs.params?.ssl ? Boolean(cs.params.ssl) : undefined,
        application_name: cs.params?.application_name

        /* etc, other parameters supported by the driver */

    };
}

const pgp = PgPromise({});
const db = pgp(get_PostgreSQL_connection());

const API = APIRoutes(db);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/assign/task/:taskId', API.getCodersWithStatus);
app.get('/api/coders', API.getCoders);
app.get('/api/tasks', API.getTasks);
app.get('/api/tasks/coder/:coderId', API.getCoderTasks);
app.get('/api/assigned_tasks', API.getAssignedTasks);
app.get('/api/task/:taskId/comments', API.getComments);
app.get('/api/edit-task/:taskId', API.getTaskWithCoders);
app.get('/api/task/coders/:taskId', API.getTaskWithCoders);

app.post('/api/task/:task_id/requestFeedback', API.requestFeedback);
app.post('/api/task/:taskId/url_update', API.updateURL);
app.post('/api/create-task', API.createTask);
app.post('/api/assign/task/:taskId', API.assignTask);

app.put('/api/edit-task/:taskId', API.editTask);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App started on port ${PORT}`);
});
