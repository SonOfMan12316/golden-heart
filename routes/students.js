const express = require('require');
const router = express.Router();


router.get('/', (req, res, next) =>{
    res.send('response with a resource');
});

module.exports = router;