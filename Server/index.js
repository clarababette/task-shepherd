const express = require('express');
const path = require('path')
const { ConnectionString } = require('connection-string');
import cookieParser from 'cookie-parser';
import { handleLogin } from '../authController';
import { githubLogin, githubUser } from '../githubAuth';

const app = express();
require('dotenv').config();
const PgPromise = require('pg-promise');

const cors = require('cors');
const APIRoutes = require('./services');

const PORT = process.env.PORT || 4017;

app.use(express.static(path.join(__dirname, 'Server/dist')));


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
app.use(cookieParser())

app.get('/login/github', githubLogin);
app.get('/github/user', githubUser)
app.get('/user/:github', API.findUser, handleLogin)

app.get('/api/assign/task/:taskId', API.getCodersWithStatus);
app.get('/api/coders', API.getCoders);
app.get('/api/tasks', API.getTasks);
app.get('/api/project/:taskId', API.getProject)
app.get('/api/tasks/coder/:coderId', API.getCoderTasks);
app.get('/api/task/coder/:taskId', API.getCoderTask);
app.get('/api/assigned_tasks', API.getAssignedTasks);
app.get('/api/task/:taskId/comments', API.getComments);
app.get('/api/edit-task/:taskId', API.getTaskWithCoders);
app.get('/api/task/coders/:taskId', API.getTaskWithCoders);
app.post('/api/task/:task_id/requestFeedback', API.requestFeedback);
app.post('/api/task/:taskId/url_update', API.updateURL);
app.post('/api/create-task', API.createTask);
app.post('/api/user/login', API.getUser);
app.post('/api/assign/task/:taskId', API.assignTask);
app.post('/api/update/feedback', API.updateFeedback);

app.put('/api/edit-task/:taskId', API.editTask);
app.get('/*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App started on port ${PORT}`);
});