import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';

export const getAllMusic = async () => {
  const musicList = await fs.readFile('./data/music.json');
  return musicList;
};

export const getMusicResourceById = async (id) => {
  const musicListFile = await fs.readFile('./data/music.json');
  const { music } = JSON.parse(musicListFile);
  const musicResource = music.find((item) => item.id === id);
  return musicResource;
};

export const createMusicResource = async (data) => {
  const musicListFile = await fs.readFile('./data/music.json');
  const { music } = JSON.parse(musicListFile);

  const newMusicResource = { ...data, id: uuidv4() };
  music.push(newMusicResource);

  await fs.writeFile(
    './data/music.json',
    JSON.stringify({
      music,
    }),
  );

  return newMusicResource;
};

export const updateMusicResource = async (id, data) => {
  // Traje todo el archivo
  const musicListFile = await fs.readFile('./data/music.json');
  // transforme la data del archivo en una coleccion de JS y destruture
  // la data de la unica propiedad del objeto llamada music que tiene
  // un array de objetos
  const { music } = JSON.parse(musicListFile);
  // Busque el objeto dentro del array
  const musicResource = music.find((item) => item.id === id);

  if (musicResource) {
    // Busque su numero de posicion para luego cambiar sus valores
    const index = music.indexOf(musicResource);
    // Cambie sus valores, pero conserve el valor de id
    music[index] = { ...data, id };
    // grabo en disco
    await fs.writeFile(
      './data/music.json',
      JSON.stringify({
        music,
      }),
    );
    // retorno el valor
    return { ...data, id };
  } else {
    throw new Error(`Resource music with ${id} is not found.`);
  }
};

export const deleteMusicResource = async (id) => {
  // Traje todo el archivo
  const musicListFile = await fs.readFile('./data/music.json');
  // transforme la data del archivo en una coleccion de JS y destruture
  // la data de la unica propiedad del objeto llamada music que tiene
  // un array de objetos
  const { music } = JSON.parse(musicListFile);
  // Busque el objeto dentro del array
  const musicResource = music.find((item) => item.id === id);

  if (musicResource) {
    // Busque su numero de posicion para luego cambiar sus valores
    const index = music.indexOf(musicResource);
    music.splice(index, 1);
    // grabo en disco
    await fs.writeFile(
      './data/music.json',
      JSON.stringify({
        music,
      }),
    );
    return `The music resource ${id} has been deleted`;
  } else {
    throw new Error(`Resource music with ${id} is not found.`);
  }
};
