const express = require('express');
const path = require('path')
const { ConnectionString } = require('connection-string');
const axios = require('axios')

const app = express();
require('dotenv').config();
const PgPromise = require('pg-promise');

const cors = require('cors');
const APIRoutes = require('./services');

const PORT = process.env.PORT || 4017;

app.use(express.static(path.join(__dirname, 'dist')));




const { DATABASE_URL } = process.env;
const cs = new ConnectionString(DATABASE_URL);

function get_PostgreSQL_connection() {
    return {
        host: cs.hostname,
        port: cs.port,
        database: cs.path?.[0],
        user: cs.user,
        password: cs.password,
        ssl: DATABASE_URL.includes('localhost') ? false : {rejectUnauthorized: false},
        application_name: cs.params?.application_name
    };
}

const pgp = PgPromise({});

const db = pgp(get_PostgreSQL_connection());

const API = APIRoutes(db);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const client_id = process.env.GITHUB_CLIENT_ID
const client_secret = process.env.GITHUB_CLIENT_SECRET

app.get('/login/github', (req, res) => {
  const redirect_uri = 'http://localhost:4017/login/auth'
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${
      process.env.GITHUB_CLIENT_ID
    }&redirect_uri=${redirect_uri}`
  )
})

async function getAccessToken({ code, client_id, client_secret }) {
  const token = await axios.post(`https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`).then(res => {
    const text = res;
    let params = new URLSearchParams(text);
    const data = params.get("data");
    params = new URLSearchParams(data);
    return params.get('access_token')
  }).catch((err) => {
    return err
  })
  
  return token
}

async function fetchGitHubUser(token) {
  
  return await axios.get("https://api.github.com/user", {
    headers: {
      Authorization: "token " + token
    }
  }).then(res => {return res.data}).catch(err => { return err});
  
}

app.get('/login/auth', async (req, res) => {
  const code = req.query.code
  const access_token = await getAccessToken({ code, client_id, client_secret })
  const user = await fetchGitHubUser(access_token);
  res.json(user)
})



app.get('/api/user/login', API.getUser);
app.get('/api/assign/task/:taskId', API.getCodersWithStatus);
app.get('/api/coders', API.getCoders);
app.get('/api/tasks', API.getTasks);
app.get('/api/tasks/coder/:coderId', API.getCoderTasks);
app.get('/api/task/coder/:taskId', API.getCoderTask);
app.get('/api/assigned_tasks', API.getAssignedTasks);
app.get('/api/task/:taskId/comments', API.getComments);
app.get('/api/edit-task/:taskId', API.getTaskWithCoders);
app.get('/api/task/coders/:taskId', API.getTaskWithCoders);
app.post('/api/task/:task_id/requestFeedback', API.requestFeedback);
app.post('/api/task/:taskId/url_update', API.updateURL);
app.post('/api/create-task', API.createTask);
app.post('/api/assign/task/:taskId', API.assignTask);

app.put('/api/edit-task/:taskId', API.editTask);


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App started on port ${PORT}`);
});
