const router = require('express').Router();
const data = require('../public/flights.js')
router.get('/', (req, res) => {
    res.sendFile('views/index.html');
});

router.get('/info', (req, res) => {
    res.render('info', {
        data
    });
});

router.get("*", (req, res) => {
    res.send("404 Not Found")
});

module.exports = router;