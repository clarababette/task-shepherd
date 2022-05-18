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

insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (11, 2, 'Assigned', '2022-05-06T21:48:49Z', '2022-05-12T23:15:24Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (16, 9, 'Assigned', '2022-05-02T00:54:10Z', '2022-05-13T03:02:25Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (10, 5, 'Feedback requested', '2022-05-11T17:05:05Z', '2022-05-06T05:49:47Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (18, 5, 'Completed', '2022-05-04T14:38:54Z', '2022-05-08T09:47:19Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (12, 7, 'Assigned', '2022-05-02T04:11:59Z', '2022-05-12T15:48:43Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (20, 9, 'Feedback requested', '2022-05-14T01:10:08Z', '2022-05-13T21:35:18Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (7, 6, 'Feedback updated', '2022-05-02T21:10:40Z', '2022-05-14T22:28:44Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (4, 2, 'Completed', '2022-05-01T15:05:12Z', '2022-05-08T13:00:59Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (5, 5, 'Completed', '2022-05-16T15:25:47Z', '2022-05-17T14:11:35Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (5, 6, 'Feedback requested', '2022-05-01T07:34:22Z', '2022-05-05T02:30:40Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (14, 1, 'Assigned', '2022-05-13T23:08:42Z', '2022-05-15T02:05:27Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (11, 5, 'Feedback requested', '2022-05-11T23:02:13Z', '2022-05-08T12:40:37Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (4, 3, 'Assigned', '2022-05-02T11:44:28Z', '2022-05-12T20:59:42Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (16, 7, 'Feedback updated', '2022-05-09T04:22:27Z', '2022-05-02T11:13:04Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (9, 9, 'Assigned', '2022-05-04T23:43:10Z', '2022-05-16T03:59:00Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (7, 10, 'Feedback updated', '2022-05-17T09:58:10Z', '2022-05-01T09:11:20Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (3, 2, 'Feedback updated', '2022-05-11T22:02:23Z', '2022-05-11T15:17:08Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (18, 2, 'Completed', '2022-05-17T00:36:53Z', '2022-05-07T16:19:16Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (3, 2, 'Feedback updated', '2022-05-03T23:14:07Z', '2022-05-16T00:45:32Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (4, 8, 'Completed', '2022-05-03T23:42:53Z', '2022-05-04T11:36:21Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (4, 2, 'Feedback requested', '2022-05-14T12:03:24Z', '2022-05-15T08:38:00Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (20, 9, 'Assigned', '2022-05-16T16:59:54Z', '2022-05-07T10:47:06Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (8, 9, 'Completed', '2022-05-08T03:15:42Z', '2022-05-04T11:27:23Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (9, 5, 'Feedback requested', '2022-05-16T21:21:11Z', '2022-05-13T10:45:23Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (18, 2, 'Assigned', '2022-05-13T06:30:10Z', '2022-05-08T13:02:42Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (8, 4, 'Completed', '2022-05-12T02:11:23Z', '2022-05-17T18:20:52Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (7, 5, 'Feedback updated', '2022-05-06T07:22:49Z', '2022-05-15T20:35:03Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (13, 9, 'Assigned', '2022-05-17T20:29:57Z', '2022-05-10T18:55:13Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (7, 6, 'Assigned', '2022-05-12T05:21:41Z', '2022-05-01T09:28:54Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (11, 1, 'Assigned', '2022-05-08T11:39:30Z', '2022-05-17T22:35:05Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (5, 2, 'Completed', '2022-05-10T07:18:30Z', '2022-05-13T21:22:49Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (6, 5, 'Feedback requested', '2022-05-07T17:54:18Z', '2022-05-14T13:41:55Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (20, 6, 'Completed', '2022-05-03T21:21:28Z', '2022-05-04T20:51:14Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (13, 8, 'Feedback requested', '2022-05-05T22:54:08Z', '2022-05-02T18:10:28Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (1, 2, 'Feedback requested', '2022-05-14T07:58:00Z', '2022-05-14T07:30:31Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (3, 8, 'Completed', '2022-05-17T07:33:28Z', '2022-05-16T13:28:05Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (8, 10, 'Assigned', '2022-05-17T04:23:02Z', '2022-05-15T13:31:36Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (16, 5, 'Completed', '2022-05-08T10:01:50Z', '2022-05-07T23:13:07Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (3, 8, 'Feedback requested', '2022-05-15T09:43:39Z', '2022-05-10T03:16:15Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (10, 6, 'Assigned', '2022-05-09T13:29:25Z', '2022-05-04T11:02:12Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (19, 8, 'Feedback updated', '2022-05-03T06:26:38Z', '2022-05-06T16:36:35Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (2, 10, 'Feedback updated', '2022-05-15T03:27:56Z', '2022-05-08T20:17:28Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (14, 4, 'Assigned', '2022-05-17T18:10:29Z', '2022-05-11T07:58:37Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (20, 8, 'Feedback requested', '2022-05-15T03:41:49Z', '2022-05-09T18:17:45Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (15, 6, 'Completed', '2022-05-11T13:37:49Z', '2022-05-12T08:01:57Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (17, 7, 'Feedback updated', '2022-05-06T09:32:41Z', '2022-05-14T08:41:29Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (13, 6, 'Assigned', '2022-05-05T02:28:08Z', '2022-05-12T02:59:59Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (17, 10, 'Feedback requested', '2022-05-11T10:15:53Z', '2022-05-14T06:30:46Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (10, 8, 'Assigned', '2022-05-04T23:40:01Z', '2022-05-12T10:10:31Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (8, 10, 'Completed', '2022-05-05T16:05:15Z', '2022-05-03T05:15:50Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (19, 3, 'Feedback updated', '2022-05-01T16:11:00Z', '2022-05-06T07:52:21Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (17, 9, 'Feedback updated', '2022-05-13T02:38:08Z', '2022-05-08T13:58:28Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (3, 7, 'Completed', '2022-05-12T20:54:38Z', '2022-05-01T20:10:49Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (9, 5, 'Completed', '2022-05-16T22:50:18Z', '2022-05-05T00:58:33Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (15, 10, 'Feedback updated', '2022-05-14T22:34:21Z', '2022-05-05T22:54:09Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (1, 4, 'Feedback requested', '2022-05-12T20:36:57Z', '2022-05-04T19:04:12Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (10, 9, 'Completed', '2022-05-12T18:37:49Z', '2022-05-05T04:37:34Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (18, 5, 'Feedback requested', '2022-05-08T01:30:02Z', '2022-05-11T08:06:55Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (7, 2, 'Assigned', '2022-05-15T15:36:01Z', '2022-05-08T22:55:57Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (11, 1, 'Assigned', '2022-05-04T08:53:38Z', '2022-05-15T20:17:01Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (4, 7, 'Feedback updated', '2022-05-03T02:58:10Z', '2022-05-12T14:01:50Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (16, 9, 'Completed', '2022-05-02T10:18:20Z', '2022-05-15T08:52:12Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (7, 5, 'Feedback requested', '2022-05-12T20:33:35Z', '2022-05-16T00:55:37Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (14, 4, 'Assigned', '2022-05-12T05:43:03Z', '2022-05-02T22:36:14Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (12, 9, 'Feedback updated', '2022-05-01T02:57:11Z', '2022-05-05T12:07:19Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (15, 3, 'Feedback requested', '2022-05-09T10:40:02Z', '2022-05-02T23:16:25Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (7, 4, 'Completed', '2022-05-14T10:01:50Z', '2022-05-07T16:06:15Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (20, 10, 'Feedback requested', '2022-05-12T20:27:24Z', '2022-05-15T16:23:07Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (7, 4, 'Feedback requested', '2022-05-01T19:29:41Z', '2022-05-01T14:18:11Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (12, 4, 'Assigned', '2022-05-05T11:25:09Z', '2022-05-14T13:44:37Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (12, 2, 'Feedback requested', '2022-05-15T10:26:11Z', '2022-05-03T02:36:46Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (13, 3, 'Feedback updated', '2022-05-03T14:28:10Z', '2022-05-10T11:57:03Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (12, 8, 'Assigned', '2022-05-09T20:38:28Z', '2022-05-01T00:15:58Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (5, 7, 'Feedback requested', '2022-05-12T03:32:57Z', '2022-05-06T22:09:09Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (6, 7, 'Feedback requested', '2022-05-04T21:24:35Z', '2022-05-07T07:15:04Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (1, 9, 'Assigned', '2022-05-06T04:50:48Z', '2022-05-10T15:37:14Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (2, 2, 'Completed', '2022-05-02T23:54:36Z', '2022-05-13T03:20:38Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (5, 6, 'Feedback updated', '2022-05-09T09:17:24Z', '2022-05-11T05:11:16Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (13, 2, 'Completed', '2022-05-09T23:58:48Z', '2022-05-16T17:26:40Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (12, 2, 'Completed', '2022-05-14T06:39:28Z', '2022-05-17T07:51:35Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (6, 2, 'Feedback requested', '2022-05-16T11:14:10Z', '2022-05-13T03:47:09Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (18, 10, 'Feedback requested', '2022-05-08T15:10:40Z', '2022-05-12T10:56:13Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (9, 10, 'Feedback requested', '2022-05-09T23:38:36Z', '2022-05-06T02:42:39Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (3, 9, 'Feedback requested', '2022-05-15T22:12:42Z', '2022-05-06T15:23:01Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (6, 2, 'Feedback updated', '2022-05-15T13:28:45Z', '2022-05-06T13:15:22Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (7, 4, 'Feedback updated', '2022-05-03T18:38:56Z', '2022-05-12T03:44:59Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (14, 9, 'Assigned', '2022-05-05T09:15:01Z', '2022-05-07T00:35:24Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (15, 5, 'Assigned', '2022-05-11T03:27:43Z', '2022-05-13T08:13:42Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (19, 3, 'Completed', '2022-05-01T07:03:14Z', '2022-05-08T20:50:01Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (6, 2, 'Feedback requested', '2022-05-04T04:34:28Z', '2022-05-11T13:02:51Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (8, 9, 'Assigned', '2022-05-01T00:42:21Z', '2022-05-07T07:25:26Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (13, 7, 'Assigned', '2022-05-14T09:18:11Z', '2022-05-05T21:07:07Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (17, 6, 'Feedback requested', '2022-05-02T01:29:11Z', '2022-05-17T06:04:43Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (11, 4, 'Completed', '2022-05-10T00:58:18Z', '2022-05-02T01:08:52Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (4, 9, 'Assigned', '2022-05-16T08:26:57Z', '2022-05-08T15:37:52Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (9, 8, 'Completed', '2022-05-15T19:13:14Z', '2022-05-13T07:04:08Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (3, 3, 'Completed', '2022-05-03T14:05:31Z', '2022-05-11T08:01:30Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (9, 9, 'Feedback requested', '2022-05-16T09:12:44Z', '2022-05-02T02:09:58Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (12, 3, 'Feedback updated', '2022-05-02T07:57:12Z', '2022-05-07T23:39:22Z');
insert into assigned_tasks (task_id, coder_id, status, status_timestamp, date_assigned) values (4, 6, 'Feedback requested', '2022-05-11T19:59:15Z', '2022-05-13T17:07:25Z');