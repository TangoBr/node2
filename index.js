// initializing express
const express = require(`express`);
const app = express();
const path = require(`path`);

// CRUD
//GET(READ), POST(WRITE), PUT(UPDATES), DELETE(DUH)

// routing

// @params <string> path, <function> cb(req,res)
// GET request => http://whatever.com
app.get(`/`, (req,res) => {
    // res.end(`<h1>Hoepage</h1>`)
    res.sendFile(path.join(__dir, `html`, `index.html`))
});
// GET request => http://whatever.com/about
app.get(`/about`, (req,res) => {
    // res.end(`<h1>about page</h1>`)
});

// POST request => http://whatver.com/login
// sending date to login route
app.post(`/login`, (req,res) => {});

app.post();

app.put();

app.delete();

app.get(`/style/*`, (req, res) => {
    res.sendFile(path.join(__dirname, req.url));
})

// starting server up and listening to a PORT
app.listen(3000, () =>{
    console.log(`>>>Server Running<<<`);
});

