const express = require('express');

const Song = require('./../models/song');
const Artist = require('./../models/artist');
const Paragraphs = require('./../models/paragraphs');

const router = express.Router();

// GET queries

router.get('/artists', (req, res) => {
  Artist.find()
    .then((data) => res.json({ data }))
    .catch(() => res.json({ data: null, message: 'There was an error.' }))
});

router.get('/songs', (req, res) => {
  const { artistId } = req.query;
  if (artistId) {
    Song.find({ artistId })
      .then((data) => res.json({ data }))
      .catch(() => res.json({ data: null, message: 'There was an error.' }))
  } else {
    res.status(400).json({ message: 'No artist provided!' });
  }
});

router.get('/song', async (req, res) => {
  const { songId } = req.query;
  if (songId) {
    const song = await Song.findOne({ _id: songId });
    const paragraphs = await Paragraphs.findOne({ _id: song.paragraphId });
    res.json({ data: {
      ...song.toJSON(),
      paragraphs,
    }});
  } else {
    res.status(400).json({ message: 'No artist provided!' });
  }
});

// POST queries

router.post('/artist', (req, res) => {
  const NewArtist = new Artist({
    name: 'Babymetal',
  });

  NewArtist.save()
    .then(() => res.json({
      message: 'Artist created successfully!',
      data: NewArtist.toJSON(),
    }));
})

router.post('/songs', async (req, res) => {
  const { artistId } = req.query;
  if (artistId) {
    const NewParagraph = new Paragraphs({
      japanese: ['あたたたたた ずっきゅん!\nわたたたたた どっきゅん!\n\nずきゅん! どきゅん!\nずきゅん! どきゅん!\nヤダ! ヤダ! ヤダ! ヤダ!\nNEVER! NEVER! NEVER!'],
      romanji: ['Ata tata tata zukkyun!\nWa tata tatata dokkyun!\nZukyun! Dokyun!\nZukyun! Dokyun!\nYada! Yada! Yada! Yada!\nNEVER! NEVER! NEVER!'],
      translation: ['Ata tata tata zukkyun!\nWa tata tatata dokkyun!\nZukyun! Dokyun!\nZukyun! Dokyun!\nI won’t! Won’t! Won’t! Won’t!\nNever! Never! Never!'],
    });
    const NewSong = new Song({
      name: 'Gimme Chocolate!!',
      artistId,
      paragraphId: NewParagraph._id,
    });
    
    await NewSong.save()
    await NewParagraph.save()
    res.json({ message: 'Song created successfully!' });
  } else {
    res.status(400).json({ message: 'No artist provided!' });
  }
});

// DELETE queries

router.delete('/song', (req, res) => {
  const { songId } = req.query;

  if (songId) {
    Song.findOneAndDelete({ _id: songId })
      .then(() => res.json({ message: 'Deleted!' }))
      .catch(() => res.status(404).json({ message: 'No such song!' }));
  } else {
    res.status(400).json({ message: 'No song provided!' });
  }
})

router.delete('/artist', (req, res) => {
  const { artistId } = req.query;

  if (artistId) {
    Artist.findOneAndDelete({ _id: artistId })
      .then(() => res.json({ message: 'Deleted!' }))
      .catch(() => res.status(404).json({ message: 'No such artist!' }));
  } else {
    res.status(400).json({ message: 'No song provided!' });
  }
})

module.exports = router;
