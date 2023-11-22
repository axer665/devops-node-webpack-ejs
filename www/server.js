const express = require('express');

const app = express();
const path = require('path');
const fs = require("fs");

const DIST_DIR = __dirname + "/dist/";
const HTML_FILE = path.join(DIST_DIR, 'index.html');

//if main catalog is dist!
//app.use(express.static(DIST_DIR));
app.use(express.static(__dirname));

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

const filePath = "users.json";

/*app.get('/main', (req, res) => {
    res.sendFile(HTML_FILE);
})*/

app.get('/', (req, res) => {
    const fileUsers = fs.readFileSync(filePath,"utf8");
    const users = JSON.parse(fileUsers);
    res.render('index', {users: users});
});

app.listen(3000, () => {
    console.log('Express is listening on port 3000!')
})