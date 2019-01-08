const router = require('express').Router();
const data = require('../public/flights.js')
router.get('/', (req, res) => {
    res.sendFile('views/index.html');
});

router.get('/info', (req, res) => {
    res.render('info', {
        data: data,
        count: data.length
    });
});

router.get('/fare', (req, res) => {
    res.render('fare', {
        data: data,
        error: null,
        count: data.length
    })
});

router.post('/compare', (req, res) => {
    var from;
    var to;
    var customData = [];
    var count = 0;
    if (req.body.from == '' && req.body.to == '') {
        res.render('fare', {
            data: data,
            error: "One field must be filled, both cannot be empty",
            count: null
        });
        return;
    } else if (req.body.from == '' && req.body.to !== '') {
        to = req.body.to;
        from = 'Anywhere';
    } else if (req.body.to == '' && req.body.from !== '') {
        from = req.body.from;
        to = 'Anywhere'
    } else {
        from = req.body.from;
        to = req.body.to;
    }
    for (var i = 0; i < data.length; i++) {
        if (from == 'Anywhere') {
            if (data[i]["To"] == to) {
                customData.push(data[i]);
                count++;
            }
        } else if (to == 'Anywhere') {
            if (data[i]["From"] == from) {
                customData.push(data[i]);
                count++;
            }
        } else {
            if (data[i]["From"] == from && data[i]["To"] == to) {
                customData.push(data[i]);
                count++;
            }
        }
    }
    res.render('fare', {
        data: customData,
        error: null,
        count: count
    })



});

router.get("*", (req, res) => {
    res.send("404 Not Found")
});

module.exports = router;