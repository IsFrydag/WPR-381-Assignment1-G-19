const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
 res.render('header')
});

router.get('/about', (req, res) => {

});

router.get('/events', (req, res) => {
});


router.get('/contact', (req, res) => {
});

router.get('/thankyou', (req, res) => {
});

module.exports = router;
