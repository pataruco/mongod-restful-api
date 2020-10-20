# RESTful API with MVC patterns

## What is it?

Is a simple server exposing the following endpoints:

| CRUD   | Endpoints                         | HTTP verb | Payload                                             | Result                                |
| ------ | --------------------------------- | --------- | --------------------------------------------------- | ------------------------------------- |
| READ   | `http://localhost:5000/music`     | GET       | NA                                                  | All music resources                   |
| READ   | `http://localhost:5000/music/:id` | GET       | NA                                                  | A single music resource               |
| CREATE | `http://localhost:5000/music/:id` | POST      | `{ "title": "Title song", "artist": "artist name"}` | The creation of single music resource |
| UPDATE | `http://localhost:5000/music/:id` | PUT       | `{ "title": "Title song", "artist": "artist name"}` | The update of single music resource   |
| DELETE | `http://localhost:5000/music/:id` | DELETE    | NA                                                  | The deletion of single music resource |

## How to install

1. Navigate to development

```sh
cd ~/development
```

2. Copy the contents of this folder into development

```sh
cp -R  ~/development/01-classwork/week-08/tuesday/afternoon/restful-api .
```

3. Navigate to `restful-api` folder

```sh
cd restful-api
```

4. Install dependencies

```sh
yarn
```

## How to run

1. Start server with

```sh
yarn start
```

2. Go To Postman and try the requests decribed above
