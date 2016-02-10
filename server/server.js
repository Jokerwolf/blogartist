/**
 * User: EGordina
 * Date: 08.02.16
 * Time: 14:01
 */

var express = require('express');
var path = require('path');
var app = express();

//app.use("/app",  express.static(path.join(__dirname, '../app')));
app.use("/",  express.static(path.join(__dirname, '../app')));
app.use("/assets",  express.static(path.join(__dirname, '../app/assets')));
app.use("/components",  express.static(path.join(__dirname, '../app/components')));
app.use("/images", express.static(path.join(__dirname, '../app/assets/images')));
app.listen(8081);

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../app/', 'index.html'));
});

app.get('/api/posts', function(request, response){
    var posts = [
        {id: 0, title: 'My first post', postDate: '2016-01-25T15:00:07',
            content: '<p>\
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
        Aenean sit amet vestibulum purus.\
        Nunc mattis tincidunt tempus.\
        Aliquam lacinia elementum commodo.\
        Nam rhoncus, sem vitae faucibus tincidunt, dui nibh aliquam dolor, quis suscipit metus lorem et tellus.\
        Donec feugiat nisl ut lobortis tincidunt.\
        Curabitur eleifend lectus sit amet est fermentum volutpat.\
    </p>\
    <p>\
    <img src="/images/post-pic1.jpg"/>\
    </p>\
    <p>\
        Vivamus at purus at elit mattis egestas. Vestibulum consectetur mattis arcu at aliquet.\
        Integer eros lorem, egestas vitae urna quis, ornare iaculis ligula.\
        Integer vehicula posuere convallis. In at lorem tempus, efficitur enim et, sodales elit.\
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\
        Pellentesque ex ipsum, imperdiet quis feugiat vel, facilisis non libero.\
        Aliquam ac tempor purus, eget malesuada turpis.\
        Ut tempor, magna vitae pretium condimentum, lectus mauris consequat erat, vitae lacinia dui velit vitae dui.\
        Nunc ligula turpis, tristique at risus et, eleifend pellentesque enim.\
    </p>\
    <p>\
        Aliquam tincidunt metus sed erat elementum, ac fermentum erat facilisis.\
        Vestibulum nec porttitor mauris, vel vulputate lorem.\
        Cras varius dictum velit cursus dictum.\
        Mauris elementum posuere eros, et consequat justo.\
        Quisque blandit tincidunt eleifend.\
        Suspendisse potenti.\
        Cras sagittis dolor a porta dapibus. Donec eget eros cursus, lacinia risus et, lobortis orci.\
        In at lobortis est, non tempus orci.\
    </p>'},
        {id: 1, title: 'My second post', postDate: '2016-02-03T10:24:15', content: '<p>Just this actually</p>'}
    ];
    response.json(posts);
});