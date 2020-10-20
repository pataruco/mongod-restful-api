import mongoose from 'mongoose';
import Music from '../models/music.js';
import { databaseURI } from '../index.js';

mongoose.connect(databaseURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const music = [
  {
    title: 'Redemption song',
    artist: 'Bob Marley',
  },
  {
    title: 'Malibu nights',
    artist: 'Lany',
  },
  {
    title: 'Nothing else matters',
    artist: 'Metallica',
  },
  {
    title: 'Ghost town',
    artist: 'The Specials',
  },
  {
    title: 'So Payaso',
    artist: 'Extremoduro',
  },
  {
    title: 'Tiembla',
    artist: 'Desorden Publico',
  },
  {
    title: 'Ares',
    artist: 'Gorillaz',
  },
];

Promise.all(
  music.map(async (musicItem) => {
    const music = await Music.create({ ...musicItem });
    console.log(`The resource music ${JSON.stringify(music)} has been created`);
  }),
);
