const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
const myNotes = [
    {
        id: 1,
        title: 'Titlu 1',
        description: 'Descriere 1',
    },
    {
        id: 2,
        title: 'Titlu 2',
        description: 'Descriere 2'
    },
    {
        id: 3,
        title: 'Titlu 3',
        description: 'Descriere 3'
    },
    {
        id: 4,
        title: 'Titlu 4',
        description: 'Descriere 4'
    },
    {
        id: 5,
        title: 'Titlu 5',
        description: 'Descriere 5'
    }
]

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
})

app.get('/notes', function(req, res) {
    res.render('notes', { notez: myNotes });
})

app.get('/notes/:id', function(req, res){
    const note = myNotes.filter(note => note.id === Number(req.params.id))

    if(note.length > 0)
        res.render('note', { note: note[0]});
    else
        res.send('Not found')
})

app.post('/notes', function(req, res) {
    const newNote = req.body;
    myNotes.push(newNote);

    res.render('notes', { notez: myNotes });
})

app.delete('/notes', function(req, res) {

})

app.listen(9090);


// { key1: value1,  key2: value2,  }