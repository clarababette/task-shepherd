create table coder_comments (
  id serial not null primary key,
	assigned_task_id INT,
	comment TEXT,
	timestamp TIMESTAMP,
  foreign key (assigned_task_id) REFERENCES assigned_tasks(id)
);
insert into coder_comments (assigned_task_id, comment, timestamp) values (14, 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.', '2021-07-21T11:36:37Z');
insert into coder_comments (assigned_task_id, comment, timestamp) values (14, 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '2021-07-11T22:43:48Z');
insert into coder_comments (assigned_task_id, comment, timestamp) values (14, 'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.', '2021-06-06T15:54:20Z');
insert into coder_comments (assigned_task_id, comment, timestamp) values (14, 'Proin interdum mauris non ligula pellentesque ultrices.', '2021-10-31T20:06:48Z');
insert into coder_comments (assigned_task_id, comment, timestamp) values (14, 'Quisque ut erat. Curabitur gravida nisi at nibh.', '2021-08-07T15:48:34Z');
insert into coder_comments (assigned_task_id, comment, timestamp) values (14, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.', '2021-07-19T06:04:55Z');
insert into coder_comments (assigned_task_id, comment, timestamp) values (14, 'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.', '2022-03-14T15:09:38Z');
insert into coder_comments (assigned_task_id, comment, timestamp) values (14, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.', '2021-11-10T23:49:45Z');
insert into coder_comments (assigned_task_id, comment, timestamp) values (14, 'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.', '2022-01-19T12:21:39Z');
insert into coder_comments (assigned_task_id, comment, timestamp) values (14, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.', '2021-06-11T14:10:00Z');