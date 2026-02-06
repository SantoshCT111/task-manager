import express from 'express'; // bring the tools
const app      = express();  //init the app
const port = 3000; // define he app



//simple route 
app.get("/",(req,res) => {
    res.send("the server is awake")
})




// this is setting up the server to start listening 
app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`)
})