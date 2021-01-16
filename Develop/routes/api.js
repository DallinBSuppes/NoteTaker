const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const db = '11-express\02-Homework\Develop\db\db.json';

function dbNotes() {
    return JSON.parse(fs.readFileSync(db, "utf-8"));
};
router.get('/notes/', (req, res) => {
    dbNotes();
    res.json(dbNotes());
});


router.post('/notes', (req, res) => {
    const notes = dbNotes();
    const newNote = { id: Date.now(), title: req.body.title, text: req.body.text }
    notes.push(newNote)
    fs.writeFile(path.join(__dirname, '11-express\02-Homework\Develop\db\db.json'), JSON.stringify(notes), (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(newNote);
        }
    })
});


router.delete('/notes/:id', (req, res) => {
    let notes = dbNotes();
    notes = notes.filter((note => note.id !== parseInt(req.params.id)));
    fs.writeFile(path.join(__dirname, '11-express\02-Homework\Develop\db\db.json'), JSON.stringify(notes), (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(notes);
        }
    })
})

module.exports = router;