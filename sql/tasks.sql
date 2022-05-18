create table tasks(
	id serial not null primary key,
	name text,
	required_urls text [],
	info_urls text [],
	description text
);

insert into tasks (name, required_urls, description, info_urls) values ('Gembucket', array ['GitHub','Heroku'], 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', array ['https://google.it/cursus.html','http://dropbox.com/aliquam.jpg']);
insert into tasks (name, required_urls, description, info_urls) values ('Solarbreeze', array ['GitHub','Heroku'], 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', array ['https://nydailynews.com/id/pretium/iaculis/diam.png','http://vk.com/imperdiet.json']);
insert into tasks (name, required_urls, description, info_urls) values ('Fixflex', array ['GitHub','Heroku'], 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', array ['http://google.cn/eget/vulputate.js','http://techcrunch.com/curae/nulla/dapibus/dolor/vel.aspx']);
insert into tasks (name, required_urls, description, info_urls) values ('Fintone', array ['GitHub','Heroku'], 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', array ['https://slate.com/ipsum/aliquam.js','https://businessinsider.com/posuere/felis/sed/lacus/morbi/sem.xml']);
insert into tasks (name, required_urls, description, info_urls) values ('Tin', array ['GitHub','Heroku'], 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', array ['https://home.pl/praesent/id/massa/id/nisl/venenatis.js','https://quantcast.com/platea/dictumst/morbi/vestibulum/velit.jpg']);
insert into tasks (name, required_urls, description, info_urls) values ('Stronghold', array ['GitHub','Heroku'], 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', array ['https://ebay.com/penatibus/et/magnis/dis/parturient/montes.js','http://posterous.com/sed/magna/at/nunc/commodo/placerat.xml']);
insert into tasks (name, required_urls, description, info_urls) values ('Flexidy', array ['GitHub','Heroku'], 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', array ['https://mlb.com/leo/odio/porttitor.aspx','http://cyberchimps.com/ac/tellus.js']);
insert into tasks (name, required_urls, description, info_urls) values ('Fintone', array ['GitHub','Heroku'], 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', array ['https://engadget.com/potenti/cras/in/purus/eu.xml','https://biglobe.ne.jp/in/felis/donec/semper.html']);
insert into tasks (name, required_urls, description, info_urls) values ('Fix San', array ['GitHub','Heroku'], 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', array ['https://msn.com/justo/aliquam/quis/turpis.xml','http://craigslist.org/nulla.jsp']);
insert into tasks (name, required_urls, description, info_urls) values ('Flexidy', array ['GitHub','Heroku'], 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', array ['http://com.com/eu/est/congue/elementum/in/hac.jsp','http://woothemes.com/enim/sit/amet/nunc/viverra.xml']);
insert into tasks (name, required_urls, description, info_urls) values ('Stim', array ['GitHub','Heroku'], 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', array ['http://wikia.com/eu/orci/mauris/lacinia/sapien.png','http://twitpic.com/orci/luctus/et.xml']);
insert into tasks (name, required_urls, description, info_urls) values ('Voyatouch', array ['GitHub','Heroku'], 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', array ['https://soup.io/nulla.html','https://google.de/natoque/penatibus/et/magnis/dis/parturient.json']);
insert into tasks (name, required_urls, description, info_urls) values ('Daltfresh', array ['GitHub','Heroku'], 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', array ['http://163.com/elementum/in.html','https://friendfeed.com/diam/nam/tristique/tortor/eu/pede.json']);
insert into tasks (name, required_urls, description, info_urls) values ('Regrant', array ['GitHub','Heroku'], 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', array ['https://over-blog.com/lectus/in/est/risus/auctor.aspx','https://businesswire.com/vitae/quam/suspendisse/potenti/nullam/porttitor.png']);
insert into tasks (name, required_urls, description, info_urls) values ('Regrant', array ['GitHub','Heroku'], 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', array ['http://gravatar.com/in/lectus.js','http://va.gov/duis.jsp']);
insert into tasks (name, required_urls, description, info_urls) values ('Matsoft', array ['GitHub','Heroku'], 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', array ['https://blogger.com/nulla.json','http://mayoclinic.com/cras.js']);
insert into tasks (name, required_urls, description, info_urls) values ('Wrapsafe', array ['GitHub','Heroku'], 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', array ['https://networkadvertising.org/in/sapien/iaculis.jpg','http://dmoz.org/massa.jsp']);
insert into tasks (name, required_urls, description, info_urls) values ('Rank', array ['GitHub','Heroku'], 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', array ['http://yolasite.com/mauris/ullamcorper.xml','https://xing.com/ipsum/primis/in/faucibus/orci.png']);
insert into tasks (name, required_urls, description, info_urls) values ('Alpha', array ['GitHub','Heroku'], 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', array ['http://cpanel.net/vestibulum/quam.png','http://xrea.com/dui/maecenas/tristique/est.xml']);
insert into tasks (name, required_urls, description, info_urls) values ('Tin', array ['GitHub','Heroku'], 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', array ['https://huffingtonpost.com/posuere/metus/vitae.xml','https://imdb.com/dui/maecenas/tristique.png']);
