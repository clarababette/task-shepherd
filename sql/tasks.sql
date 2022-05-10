create table tasks(
	id serial not null primary key,
	name text,
	required_urls text [],
	info_urls text [],
	description text
);

insert into tasks (name, required_urls) values ('Wrapsafe', array ['GitHub','Heroku']);
insert into tasks (name, required_urls) values ('Cardify', array ['GitHub','Heroku']);
insert into tasks (name, required_urls) values ('Flexidy', array ['GitHub','Heroku']);
insert into tasks (name, required_urls) values ('Viva', array ['GitHub','Heroku']);
insert into tasks (name, required_urls) values ('Flexidy', array ['GitHub','Heroku']);
insert into tasks (name, required_urls) values ('Overhold', array ['GitHub','Heroku']);
insert into tasks (name, required_urls) values ('Holdlamis', array ['GitHub','Heroku']);
insert into tasks (name, required_urls) values ('Fintone', array ['GitHub','Heroku']);
insert into tasks (name, required_urls) values ('Pannier', array ['GitHub','Heroku']);
insert into tasks (name, required_urls) values ('Fixflex', array ['GitHub','Heroku']);