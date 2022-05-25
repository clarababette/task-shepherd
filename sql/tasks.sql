create table tasks(
	id serial not null primary key,
	name text,
	required_urls text [],
	info_urls text,
	description text
);

insert into tasks (name, required_urls, description, info_urls) values ('Hatity', array ['GitHub','Heroku'], 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '[{"description":"non mauris", "address":"https://usatoday.com/aliquam/quis/turpis/eget/elit/sodales/scelerisque.js"},{"description":"id justo sit", "address":"https://weebly.com/ultrices/libero/non.jsp"}]');
insert into tasks (name, required_urls, description, info_urls) values ('It', array ['GitHub','Heroku'], 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '[{"description":"eget elit", "address":"http://ft.com/mauris/vulputate/elementum.json"},{"description":"luctus ultricies eu", "address":"http://angelfire.com/mi/pede/malesuada/in/imperdiet.png"}]');
insert into tasks (name, required_urls, description, info_urls) values ('Zathin', array ['GitHub','Heroku'], 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '[{"description":"nec molestie", "address":"https://google.com/facilisi/cras/non/velit/nec/nisi/vulputate.jsp"},{"description":"ac", "address":"http://example.com/adipiscing/elit/proin/interdum/mauris/non/ligula.aspx"}]');
insert into tasks (name, required_urls, description, info_urls) values ('Tres-Zap', array ['GitHub','Heroku'], 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '[{"description":"vel lectus in", "address":"https://networksolutions.com/lacus/purus/aliquet/at/feugiat.html"},{"description":"morbi", "address":"https://example.com/quam/nec/dui/luctus/rutrum.jpg"}]');
insert into tasks (name, required_urls, description, info_urls) values ('It', array ['GitHub','Heroku'], 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '[{"description":"dolor", "address":"http://redcross.org/nam/nulla/integer/pede.xml"},{"description":"sed justo", "address":"https://economist.com/pede/lobortis/ligula/sit/amet.aspx"}]');
insert into tasks (name, required_urls, description, info_urls) values ('Alpha', array ['GitHub','Heroku'], 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '[{"description":"mi", "address":"http://mac.com/diam/erat/fermentum/justo.jsp"},{"description":"dolor sit amet", "address":"http://go.com/lectus.json"}]');
insert into tasks (name, required_urls, description, info_urls) values ('Veribet', array ['GitHub','Heroku'], 'In congue. Etiam justo. Etiam pretium iaculis justo.', '[{"description":"mauris", "address":"http://whitehouse.gov/eu/est.jpg"},{"description":"sagittis dui", "address":"http://goodreads.com/aenean/fermentum/donec/ut/mauris/eget/massa.aspx"}]');
insert into tasks (name, required_urls, description, info_urls) values ('Fintone', array ['GitHub','Heroku'], 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '[{"description":"eros", "address":"https://hatena.ne.jp/risus.js"},{"description":"curae", "address":"https://networkadvertising.org/eu.png"}]');
insert into tasks (name, required_urls, description, info_urls) values ('Zathin', array ['GitHub','Heroku'], 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '[{"description":"vulputate luctus cum", "address":"https://tinyurl.com/erat/eros/viverra/eget.png"},{"description":"orci", "address":"https://java.com/odio/donec.xml"}]');
insert into tasks (name, required_urls, description, info_urls) values ('Stim', array ['GitHub','Heroku'], 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '[{"description":"sed vestibulum", "address":"http://jiathis.com/commodo/vulputate.aspx"},{"description":"pede", "address":"http://soup.io/nisl/duis/bibendum/felis.json"}]');
insert into tasks (name, required_urls, description, info_urls) values ('Greenlam', array ['GitHub','Heroku'], 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '[{"description":"in porttitor pede", "address":"https://nsw.gov.au/integer/tincidunt/ante/vel/ipsum.aspx"},{"description":"quis", "address":"https://columbia.edu/volutpat/eleifend.js"}]');
insert into tasks (name, required_urls, description, info_urls) values ('Zoolab', array ['GitHub','Heroku'], 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '[{"description":"vestibulum ante", "address":"http://ow.ly/convallis/duis/consequat/dui/nec.xml"},{"description":"dapibus dolor", "address":"https://wikispaces.com/leo/pellentesque/ultrices/mattis.png"}]');
insert into tasks (name, required_urls, description, info_urls) values ('Quo Lux', array ['GitHub','Heroku'], 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '[{"description":"mi pede", "address":"https://hao123.com/at/vulputate/vitae/nisl.png"},{"description":"in faucibus", "address":"https://canalblog.com/lorem/ipsum/dolor.html"}]');
insert into tasks (name, required_urls, description, info_urls) values ('Stim', array ['GitHub','Heroku'], 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '[{"description":"nulla tempus", "address":"https://sciencedirect.com/donec/diam.html"},{"description":"et", "address":"http://spiegel.de/erat/nulla/tempus.jpg"}]');
insert into tasks (name, required_urls, description, info_urls) values ('Konklux', array ['GitHub','Heroku'], 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', '[{"description":"donec", "address":"https://shop-pro.jp/libero/quis/orci/nullam/molestie.jpg"},{"description":"vivamus vestibulum sagittis", "address":"http://sphinn.com/sit/amet.jpg"}]');
insert into tasks (name, required_urls, description, info_urls) values ('Temp', array ['GitHub','Heroku'], 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '[{"description":"est", "address":"http://apache.org/pellentesque.png"},{"description":"in congue etiam", "address":"https://goodreads.com/leo/odio/porttitor/id.json"}]');
insert into tasks (name, required_urls, description, info_urls) values ('Sonsing', array ['GitHub','Heroku'], 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '[{"description":"sed sagittis nam", "address":"http://arstechnica.com/nonummy/integer/non.xml"},{"description":"aliquam erat", "address":"http://wikimedia.org/velit/vivamus/vel/nulla/eget/eros.jsp"}]');
insert into tasks (name, required_urls, description, info_urls) values ('Y-find', array ['GitHub','Heroku'], 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '[{"description":"aliquam erat volutpat", "address":"http://marriott.com/morbi/porttitor/lorem/id/ligula/suspendisse/ornare.jsp"},{"description":"lectus", "address":"http://hugedomains.com/nec/sem/duis.json"}]');
insert into tasks (name, required_urls, description, info_urls) values ('Overhold', array ['GitHub','Heroku'], 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '[{"description":"lorem id", "address":"https://diigo.com/ipsum/primis/in/faucibus.js"},{"description":"justo morbi", "address":"http://imgur.com/viverra/eget/congue/eget/semper/rutrum.aspx"}]');
insert into tasks (name, required_urls, description, info_urls) values ('Alpha', array ['GitHub','Heroku'], 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '[{"description":"pede lobortis", "address":"http://aboutads.info/ornare/imperdiet.jsp"},{"description":"mattis", "address":"http://example.com/in.jsp"}]');
