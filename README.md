# mern-todo-api

### CIT MERN 2308 TODO API

Step1

- Install all dependencies

```bash
npm install
```

- Change the Mongo DB Connection String in `/config/mongo.config.js` file

Step 2

- Start The Server

```bash
npm start
```

### All Available Endpoints

- `GET Method: http://localhost:8000/` <br>

Responce

```bash
{
  msg: 'Welcome to Republic of Legends Server',
  serverip: 'http://localhost:8000'
}

```

- `GET Method: http://localhost:8000/todos` <br>

Responce

```js
[
    {
  _id : id
  task : task
},
{
  _id : id
  task : task
}
]
```

- `GET Method: http://localhost:8000/todos/getone/:id` <br>

Parameters:

```js
id: id;
```

Responce

```bash
{
  _id : id
  task : task
}

```

- `Post Method: http://localhost:8000/todos/add/` <br>

Request Body Parameters:

```js
task: task;
```

Responce

```bash
{
  _id : id
  task : task
}

```

- `Patch Method: http://localhost:8000/todos/update/:id` <br>

Request Parameters:

```js
id: id;
```

Request Body Parameters:

```js
task: yournewTask;
```

Responce

```bash
{
  _id : id
  task : task
}

```

- `Delete Method: http://localhost:8000/todos/delete/:id` <br>

Request Parameters:

```js
id: id;
```

Responce

```bash
{
  _id : id
  task : task
}

```
