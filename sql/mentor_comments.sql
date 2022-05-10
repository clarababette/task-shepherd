create table mentor_comments (
  id serial not null primary key,
	assigned_task_id INT,
	mentor_id INT,
	comment TEXT,
	timestamp TIMESTAMP,
  foreign key (assigned_task_id) REFERENCES assigned_tasks(id),
  foreign key (mentor_id) REFERENCES mentors(id)
);
insert into mentor_comments (assigned_task_id, mentor_id, comment, timestamp) values (1, 1, 'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.', '2021-10-20T10:39:16Z');
insert into mentor_comments (assigned_task_id, mentor_id, comment, timestamp) values (1, 2, 'Morbi non quam nec dui luctus rutrum.', '2021-11-15T06:13:07Z');
insert into mentor_comments (assigned_task_id, mentor_id, comment, timestamp) values (1, 3, 'Vestibulum rutrum rutrum neque.', '2021-07-08T21:21:22Z');
insert into mentor_comments (assigned_task_id, mentor_id, comment, timestamp) values (1, 4, 'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.', '2022-03-21T21:29:08Z');
insert into mentor_comments (assigned_task_id, mentor_id, comment, timestamp) values (5, 5, 'Vivamus vel nulla eget eros elementum pellentesque.', '2021-11-09T18:24:31Z');
insert into mentor_comments (assigned_task_id, mentor_id, comment, timestamp) values (6, 6, 'Vestibulum ac est lacinia nisi venenatis tristique.', '2021-08-18T04:48:13Z');
insert into mentor_comments (assigned_task_id, mentor_id, comment, timestamp) values (7, 7, 'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.', '2021-08-16T23:24:10Z');
insert into mentor_comments (assigned_task_id, mentor_id, comment, timestamp) values (8, 8, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', '2021-10-18T06:31:24Z');
insert into mentor_comments (assigned_task_id, mentor_id, comment, timestamp) values (9, 9, 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.', '2021-05-18T07:46:46Z');
insert into mentor_comments (assigned_task_id, mentor_id, comment, timestamp) values (10, 10, 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '2021-09-02T15:12:52Z');