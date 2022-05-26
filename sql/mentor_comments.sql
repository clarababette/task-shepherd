create table mentor_comments (
  id serial not null primary key,
	assigned_task_id INT,
	mentor_id INT,
	comment TEXT,
	timestamp TIMESTAMP,
  foreign key (assigned_task_id) REFERENCES assigned_tasks(id),
  foreign key (mentor_id) REFERENCES mentors(id)
);

