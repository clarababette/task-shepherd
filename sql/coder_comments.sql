create table coder_comments (
  id serial not null primary key,
	assigned_task_id INT,
	comment TEXT,
	timestamp TIMESTAMP,
  foreign key (assigned_task_id) REFERENCES assigned_tasks(id)
);
