import mongoose from 'mongoose';

const musicSchema = new mongoose.Schema(
  {
    title: String,
    artist: String,
  },
  {
    timestamps: true,
  },
);

const Music = mongoose.model('Music', musicSchema);

export const getAllMusic = async () => {
  try {
    return await Music.find();
  } catch (error) {
    throw Error(error);
  }
};

export const getMusicResourceById = async (id) => {
  try {
    return await Music.findById(id);
  } catch (error) {
    throw Error(error);
  }
};

export const createMusicResource = async (data) => {
  const { title, artist } = data;

  try {
    return await Music.create({ title, artist });
  } catch (error) {
    throw Error(
      `Unable to save ${JSON.stringify(data)} on database, ${error}.`,
    );
  }
};

export const updateMusicResource = async (id, data) => {
  try {
    return await Music.findByIdAndUpdate(id, { ...data });
  } catch (error) {
    throw Error(
      `Unable to save ${JSON.stringify(data)} on database, ${error}.`,
    );
  }
};

export const deleteMusicResource = async (id) => {
  try {
    return await Music.findOneAndDelete(id);
  } catch (error) {
    throw Error(error);
  }
};

export default Music;
