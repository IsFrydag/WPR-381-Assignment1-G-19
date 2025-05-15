const express = require('express');
const router = express.Router();

const teamMembers = [
    { name: 'Heiner Freitag', role: 'Team Lead & Backend Dev' },
    { name: 'Neo Rankapone', role: 'Backend Developer' },
    { name: 'Joshua Levi Visser', role: 'Frontend Developer' },
    { name: 'Lene Le Roux', role: 'Frontend Developer' }
];

const events = [
    
    { title: 'Open Mic', date: '2025-05-15', location: 'Pretoria', image:  'images/OpenMicHome.jpg'},
    { title: 'Farmers Market', date: '2025-06-01', location: 'Stellenbosch', image: 'images/FarmrsMarket.jpg'},
    { title: 'Beach Clean-Up', date: '2025-07-20', location: 'Cape Town', image: 'images/BeachCleanup.jpg'}

];

//submission storage
const submission = [];

// home page
router.get('/', (req, res) => {
    res.render('home', { events });
});

// about page
router.get('/about', (req, res) => {
    res.render('about', { teamMembers });
});

// events page
router.get('/events', (req, res) => {
    res.render('events');
});

// contact page
router.get('/contact', (req, res) => {
    res.render('contact');
});

// thank you page
router.get('/thankyou', (req, res) => {

    const {name} = req.query;
    res.render('thankyou' ,{title: 'Thank You', name});

});

router.post('/contact', (req, res) => {

    const { name, email, message } = req.body;

    const newSubmission = {

        name,
        email,
        message

    };

    submission.push(newSubmission);

    res.redirect(`/thankyou?name=${encodeURIComponent(name)}`);

    console.log(`Submitted:  ${name}, ${email}, ${message}`);
    
});

module.exports = router;