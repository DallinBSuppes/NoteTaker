const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// *** Creates HTML Routes
router.get('/notes/', function (req, res) {
    res.sendFile(path.join(__dirname, "11-express\02-Homework\Develop\public\notes.html"));
});

router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "11-express\02-Homework\Develop\public\index.html"));
});

module.exports = router;