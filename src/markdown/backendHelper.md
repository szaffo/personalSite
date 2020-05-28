<!-- extends layouts/mdLayout.pug -->
 
<!-- block title -->
<!-- ++title("Backend helper") -->

<!-- block menu -->
<!-- ++menu("Projektek") -->

<!-- block mdContent -->

# Backend ZH helper

- [Backend ZH helper](#backend-zh-helper)
  - [Linkek](#linkek)
  - [Package install guide](#package-install-guide)
  - [Guides](#guides)
    - [Websocket server](#websocket-server)
    - [Apollo server & GraphQL](#apollo-server--graphql)
  - [Commands](#commands)

## Linkek

- [Feathers guide](https://docs.feathersjs.com/guides/)
- [Sequalize docs](https://sequelize.org/v5/)
- [Apollo server](https://www.apollographql.com/docs/)
- [Axios docs](https://www.npmjs.com/package/axios)
- [Socket IO docs](https://socket.io/docs/)
- [Socket IO emit cheet sheet](https://socket.io/docs/emit-cheatsheet/)


## Package install guide

```bash
# Sequalize
$ npm install sequelize

# Feathers
$ npm install @feathersjs/feathers @feathersjs/cli 

# sqlite3
$ npm install sqlite3 

# Apollo server*
$ npm install apollo-server 

# Axios
$ npm install axios 

# Nodemon
$ npm install --save-dev nodemon 
```


## Guides

### Websocket server

**server.js**
```js
const app = require('http').createServer(handler)
const io = require('socket.io')(app);
const fs = require('fs');

app.listen(8000);

function handler(req, res) {
    const fileName = (req.url.includes(".js")) ? (__dirname + '/client.js') : (__dirname + '/index.html');
    console.log(fileName);
    fs.readFile(fileName,
        (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}

io.on('connection',(socket) => {

    console.log(`User with ${socket.id} has been connected.`);
    socket.on('disconnect',(socket)=>{
        console.log(`User with ${socket.id} has been disconnected.`);
    });
});
```

**client.js**
```js
const socket = io('http://localhost:8000');

socket.on(...)
```

**index.html**
```html
&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;CLIENT&lt;/title&gt;
    &lt;/head&gt;

    &lt;body&gt;
        &lt;h1&gt;Client&lt;/h1&gt;
    &lt;/body&gt;
    &lt;script src=&quot;/socket.io/socket.io.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;/client.js&quot;&gt;&lt;/script&gt;
&lt;/html&gt;
```

### Apollo server & GraphQL

**server.js**
```js
const { ApolloServer , gql } = require('apollo-server');
// const models = require('./models'); // for Sequalize 
const axios = require('axios').default;

// Example axios fetch
const getItems = async (pageCap = 10000, page = 1) => {
    const response = await axios.get(`https://diakkedvezmeny.com/items?pageCapacity=${pageCap}&page=${page}`);
    return response.data.result;
}

const schema = gql`
    type Query {
        greeting(name: String): String
    }

`

const resolvers = {
    Query: {
        greeting: (parent, {name}) => `Hello ${name}`,

    }
}


async function run() {
    // await models.sequelize.sync(); // optional
    const server = new ApolloServer({
        typeDefs: schema,
        resolvers

// If you want db
        // context: {
        //     tracks: models.Track,
        //     projects: models.Project,
        //     users: models.User,
        //     filters: models.Filter
        // }
    });
    server.listen().then(r => console.log("OK Server is running"));

}
run();
```

## Commands

```bash
# Sequalize generate model
$ npx sequalize generate:model --name dogs --attributes name:string 

# Feathers
$ npx feathers init
$ npx feathers generate service
```