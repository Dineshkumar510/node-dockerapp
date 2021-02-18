const express =  require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send("Hello world From Dinesh to Docker world!!@");
});

app.listen(port, ()=> {
    console.log(`App is running at Port:${port}`)
})

