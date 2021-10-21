const express = require('express');
const cors = require('cors');
const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Wow, I am excited with this nodemon");
})

const users = [
    {
        id: 0,
        name: "Shabana",
        email: "shabana@gmail.com",
        phone: "017465626226"
    },
    {
        id: 1,
        name: "Shabnur",
        email: "shabana@gmail.com",
        phone: "017465626226"
    },
    {
        id: 2,
        name: "Shrabonti",
        email: "Shrabonti@gmail.com",
        phone: "017465626226"
    },
    {
        id: 3,
        name: "Soniya",
        email: "Soniya@gmail.com",
        phone: "017465626226"
    },
    {
        id: 4,
        name: "Susmita",
        email: "Susmita@gmail.com",
        phone: "017465626226"
    }
]

// showing data on users route and also for search query
app.get('/users', (req, res) => {
    // use query parameter
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }

})

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;

    users.push(newUser);
    console.log('hitting post', req.body)
    // res.send(JSON.stringify(newUser));

    res.json(newUser);

})

// showing dynamic data with parameter
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})


app.listen(port, () => {
    console.log("Listening from", port);
})