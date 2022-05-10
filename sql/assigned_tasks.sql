create table assigned_tasks (
  id serial not null primary key,
	task_id INT,
	coder_id INT,
	status VARCHAR(18),
	status_timestamp TIMESTAMP,
	date_assigned TIMESTAMP,
	URLs text,
  foreign key (task_id) REFERENCES tasks(id),
  foreign key (coder_id) REFERENCES coders(id)
);
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (1, 1, 'Assigned', '2022-01-19T05:26:03Z', '2021-06-18T23:00:17Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (2, 2, 'Assigned', '2021-11-30T09:21:59Z', '2022-02-06T13:22:30Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (3, 3, 'Feedback updated', '2021-08-30T04:58:05Z', '2021-07-25T04:18:05Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (4, 4, 'Feedback requested', '2022-03-13T13:40:47Z', '2021-06-30T08:24:36Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (5, 5, 'Feedback requested', '2022-01-10T23:08:41Z', '2022-01-27T07:49:01Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (6, 6, 'Completed', '2021-04-18T15:48:45Z', '2021-11-01T06:10:48Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (7, 7, 'Assigned', '2021-09-15T23:58:42Z', '2021-05-25T08:10:41Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (8, 8, 'Assigned', '2021-08-02T14:54:53Z', '2021-09-21T19:03:37Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (9, 9, 'Feedback updated', '2021-12-18T18:47:36Z', '2021-08-19T00:37:46Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (10, 10, 'Feedback updated', '2022-01-02T07:04:50Z', '2021-10-15T22:57:33Z');