const express = require('express');
const exphbs  = require('express-handlebars');
var bodyParser = require('body-parser')
const app = express();

// Set up Handlebars as the template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
// Set up a route to display the resume form
app.get('/', (req, res) => {
  res.render('form');
});

// Set up a route to handle form submission
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const linkedin = req.body.linkedin;
  const objective = req.body.objective;
  const address = req.body.address;
  const education = req.body.education;
  const skills = req.body.skills;
  const hobbies = req.body.hobbies;
  const experience = req.body.experience;
  const resumeData = {
    name,
    email,
    phone,
    linkedin,
    objective,
    address,
    education,
    skills,
    hobbies,
    experience
  };
  res.render('resume', resumeData);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
