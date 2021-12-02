// We import the express module and the "CORS" module
import express from "express";
import cors from "cors";

const PORT = 3000;
const app = express();

// These lines are for express configuration, check the docs for more info
// We won't focus on these at the moment
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This function will be called everytime we make a request to the server
// It will log the requested url in the terminal
app.use((req, res, next) => {
    console.log(req.url);

    // The next keyword means that, once this function is executed,
    // express will go on to the next one
    next();
});

// If we go to the root of the server (localhost:3000/) with a browser
// we should get a warm welcome message
app.get("/", (req, res, next) => res.send({ info: "Welcome!" }));

// We tell our server to remain open, and listen to every incoming request
app.listen(PORT, () => console.log(`server started`));

app.get('/testText', function (req, res) {
    res.send('This is a test text')
})

app.get('/testDiv', function (req, res) {
    res.send('<div> Hello World </div>')
})

app.post('/post', function (req, res) {
    res.send('Got a POST request')
})

app.use(express.static('public'))
app.use(express.static('files'))