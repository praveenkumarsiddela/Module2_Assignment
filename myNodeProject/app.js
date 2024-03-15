const { urlencoded } = 'body-parser';
const express = require('express');
const app = express();
// Set EJS as templating engine
app.set( 'view engine', 'ejs');
// Your code here...
// Start server
app.listen(3000, () => {
console.log ("Server is running on port 3000");
10
});

// Serve the form
app. get('/', (rea, res) => {
res. render( 'form');
}) ;
// Handle form submissions
app.post('/submit', (req, res) => {
console.log(req.body); // This will log form data to console res.redirect('/');
});

app.use(express.urlencoded({extended:true}));