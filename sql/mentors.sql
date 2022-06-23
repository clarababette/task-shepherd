create table mentors(
	id serial not null primary key,
	first_name text,
	last_name text,
	email text,
	github text,
	unique(github)
);

insert into mentors (first_name, last_name, email) values ('Brooke', 'Lambdean', 'blambdean0@wired.com');
insert into mentors (first_name, last_name, email) values ('Hort', 'Laurentino', 'hlaurentino1@de.vu');
insert into mentors (first_name, last_name, email) values ('Mala', 'MacIlhargy', 'mmacilhargy2@wordpress.com');
insert into mentors (first_name, last_name, email) values ('Muire', 'Gurg', 'mgurg3@elpais.com');
insert into mentors (first_name, last_name, email) values ('Padgett', 'Ackenson', 'packenson4@bizjournals.com');
insert into mentors (first_name, last_name, email) values ('Elita', 'Phippen', 'ephippen5@opensource.org');
insert into mentors (first_name, last_name, email) values ('Daisi', 'Bowker', 'dbowker6@ibm.com');
insert into mentors (first_name, last_name, email) values ('Arlin', 'Navein', 'anavein7@msu.edu');
insert into mentors (first_name, last_name, email) values ('Jess', 'Chowne', 'jchowne8@jiathis.com');
insert into mentors (first_name, last_name, email) values ('Marjy', 'Snyder', 'msnyder9@shutterfly.com');