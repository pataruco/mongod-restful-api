import {
  createMusicResource,
  deleteMusicResource,
  getAllMusic,
  getMusicResourceById,
  updateMusicResource,
} from '../models/music.js';

// From the URL GET /music
export const listMusic = async (request, response, next) => {
  // Called a function that is declared in the resource model
  const musicList = await getAllMusic();
  // Once music is fetched we parse to JS
  const music = JSON.parse(musicList);
  response.statusCode = 200;
  // And then send it to client
  response.send(music);
};

// From the URL GET /music/:id
export const getMusicById = async (request, response, next) => {
  // From the request object we can know the URL parameters defined in the router
  const {
    params: { id },
  } = request;

  // Called a function that is declared in the resource model
  const musicResource = await getMusicResourceById(id);
  // If we have a music resource
  if (musicResource) {
    // we return resource and 200 OK status
    return response.status(200).send(musicResource);
  } else {
    // if not we sent 404 Resource not found, and a nice message
    return response.status(404).send({
      // Is important that messages that reflect errors finished with a full stop
      message: 'Error: Music resource not found.',
    });
  }
};

// POST /music with JSON payload in the body
export const createMusic = async (request, response) => {
  // we get access to the data sent it by the client
  // TODO: In this step is IMPORTANT that we assume that the payload is malign
  // so we need to confirm otherwise validating payload (Please read about Joi https://hapi.dev/tutorials/validation/?lang=en_US)

  const { body } = request;

  try {
    // Called a function that is declared in the resource model
    const newMusicResource = await createMusicResource(body);
    return response.status(201).send(newMusicResource);
  } catch (error) {
    // Because Daytabases can be in other location we can't assume that every DB request is succesful
    return response.status(500).send({
      message: `Error: not connection to database, ${error}.`,
    });
  }
};

// From the URL PUT /music/:id
export const updateMusicById = async (request, response) => {
  // we get access to the data sent it by the client
  const {
    params: { id },
    body,
  } = request;

  try {
    // Called a function that is declared in the resource model
    const musicResource = await updateMusicResource(id, body);
    return response.status(200).send(musicResource);
  } catch (error) {
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};

// From the URL DELETE /music/:id
export const deleteMusicById = async (request, response) => {
  // we get access to the data sent it by the client
  const {
    params: { id },
  } = request;

  try {
    // Called a function that is declared in the resource model
    const deleteMessage = await deleteMusicResource(id);
    return response.status(200).send({
      message: deleteMessage,
    });
  } catch (error) {
    // if resource is not found send error message
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};
