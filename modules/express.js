const express = require('express')

const app = express()

app.get('/home', (req, res) => {
    res.contentType("application/html")
    res.status(200).send("<h1>home page</h1>");
});

app.get('/users', (req, res) => {
    const users = [
        {
            name: 'John Doe',
            email: 'john@doe.con'
        },
        {
            name: 'Jane Doe',
            email: 'jane@doe.con'
        },
    ]; 

    res.status(200).json(users);
});



const port = 8080;
app.listen(port, () => console.log(`Rodandno com Express na porta ${port}`))