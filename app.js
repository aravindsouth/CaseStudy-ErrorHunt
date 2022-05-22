const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');

const PORT = process.env.PORT || 5000
const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});

// Part 1 point 2
const bodyParser = require('body-parser'); // added body-parser module

// Part 2 Point 6 - moved into /public/js/nav.js

// const nav= [
//     {
//         link:"/books",
//         title:"Books"
//     },
//     {
//         link:"/authors",
//         title:"Authors"
//     },
//     {
//         link:"/addbook",
//         title:"Add Book"
//     },
//     {
//         link:"/addauthor",
//         title:"Add Author"
//     }
// ]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');

// Part 1 point 3
const homeRouter = require('./src/routes/homerouter'); // change homeroute to homerouter

const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

//Part 1 point 1
const app = new express(); // called the express object

// Part 2 point 7
app.use(cors()); // use cors module


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});




// Part 1 point 5, nice one :)
app.listen(PORT,()=>{
    console.log(`Server Ready on ${PORT}`); // change port no; displayed to 5000
});