const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home')
});

router.get('/about', (req, res) => {
    res.render('about')
});

router.get('/events', (req, res) => {
    res.render('events')
});


router.get('/contact', (req, res) => {
    res.render('contact')
});

router.get('/thankyou', (req, res) => {
    res.render('thankyou')
});

module.exports = router;
