# express-crash-course

## screenshots of the Express Server app.
<img width="1440" alt="Screenshot 2023-03-20 at 15 58 58" src="https://user-images.githubusercontent.com/73651340/226399649-454e486a-a122-4671-9590-fe8613375cb6.png">
<img width="1440" alt="Screenshot 2023-03-20 at 15 59 34" src="https://user-images.githubusercontent.com/73651340/226399675-e29a99a0-c903-484f-ad4f-4a18c12de439.png">
<img width="1440" alt="Screenshot 2023-03-20 at 15 59 40" src="https://user-images.githubusercontent.com/73651340/226399690-2981d488-1be0-4f85-a701-b5bff22256e1.png">
<img width="1440" alt="Screenshot 2023-03-20 at 16 00 33" src="https://user-images.githubusercontent.com/73651340/226399707-7faed456-fd62-4e81-9c25-492f91da5616.png">



## What Is Express.js?
Express.js, sometimes also referred to as “Express,” is a minimalist, fast, and Sinatra-like Node.js backend framework that provides robust features and tools for developing scalable backend applications. It gives you the routing system and simplified features to extend the framework by developing more powerful components and parts depending on your application use cases.

The framework provides a set of tools for web applications, HTTP requests and responses, routing, and middleware for building and deploying large-scale, enterprise-ready applications.

It also provides a command-line interface tool (CLI) called Node Package Manager (NPM), where developers can source for developed packages. It also forces developers to follow the Don’t Repeat Yourself (DRY) principle.

The DRY principle is aimed at reducing the repetition of software patterns, replacing it with abstractions, or using data normalizations to avoid redundancy.

## What Is Express.js Used For?
Express.js is used for a wide range of things in the JavaScript/Node.js ecosystem — you can develop applications, API endpoints, routing systems, and frameworks with it.

Below is a list of just a few of the types of applications you can build with Express.js.

Single-Page Applications
Single-Page Applications (SPAs) are the modern approach of application development in which the entire application is routed into a single index page. Express.js is an excellent framework for building an API that connects these SPA applications and consistently serves data. Some examples of Single Page Applications are Gmail, Google Maps, Airbnb, Netflix, Pinterest, Paypal, and many more. Companies are using SPAs to build a fluid, scalable experience.

Real-Time Collaboration Tools
Collaboration tools are here to ease the way businesses work and collaborate daily, and with Express.js, you can develop collaborative and real-time networking applications with ease.

Also, the framework is used to develop real-time applications such as chat and dashboard applications, where it becomes straightforward to integrate WebSocket into the framework.

Express.js handles the routing and middleware part of the process, allowing developers to concentrate on the vital business logic of these real-time features when developing live collaborative tools.

Streaming Applications
Real-time streaming applications like Netflix are complex and have many layers of data streams. To develop such an app, you need a solid framework to handle asynchronous data streams efficiently.

It’s an ideal framework for building and deploying enterprise-ready and scalable streaming applications.

Fintech Applications
Fintech is a computer program and other technology used to support or enable banking and financial services. Building a fintech application is currently the industry trend, and Express.js is the framework of choice for building highly scalable fintech applications.

If you’re thinking of building a fintech application with high users and transaction volume, then you’ll be joining companies such as Paypal and Capital One in developing and deploying your application using Express.js.

Why You Should Use Express.js
There are several reasons why you should consider using Express.js for your next project, from faster I/O for faster requests and responses to its single-thread system and asynchronous processes. It also uses the MVC structure to simplify data manipulations and routing systems.

Let’s take a closer look at some of the main reasons you should consider using Express.js.

Flexible and Speedy
Express.js is very easy-to-use and flexible, and it’s faster than any other Node.js framework. A minimalistic framework, it offers rapid application development and eases the stress of mastering the many different parts of a larger framework. It also provides rich features such as an excellent routing system, middlewares, and content negotiation right out of the box.

Part of the MEAN Stack
Express.js is the framework of choice in each stack represented with the E in any stacks, such as MERN, MEAN, and so forth. It can also easily be integrated into any stack or technology to show how vital the framework is in the MEAN stack development process.

What’s more, it can connect efficiently with a more robust database management system than the conventional MySQL and provides a seamless development process across each stack. This combination of features makes Express.js very popular among MEAN developers.

Scalability
Express.js has proven to be very scalable over the years because of the number of large companies using the framework on their server daily.

It handles user requests and responses efficiently and requires little to no extra configuration when developing a large-scale web application.

It has excellent modules, packages, and additional resources, which helps developers to create reliable and scalable web applications.

Supported by Google V8 Engine
Express.js supports many Google V8 engine packages, making the framework very powerful for building and deploying real-time, collaborative, and network-based applications at an enterprise level.

Google V8 engine is an open-source high-performance JavaScript and WebAssembly engine that supports high speed and scalability for complex and intense applications. When you use packages that use the Google V8 engine, it’s a massive performance and scalability boost to your backend application.

Community Support
Since the framework is the most popular Node.js backend framework, it has the highest number of community support, resources, and packages for any development challenges. The support from Google is also extensive, which makes the framework a popular choice amongst Node.js developers. Its open-sourced nature gives developers the opportunity to create extensible packages and resources to ease development, not just for themselves, but for all others who code with Express.js.

# Nodejs and Express Cheatsheet



nodejs works on a single thread, non blocking I/O and it handles it in a loop



## Nodejs is best to use:

- Rest API

- Microservices

- Realtime applications

- CRUD applications (blog/shopping cart)

- Tools and Utilities (command line tools as an example)



there are core module like:

- path

- filesystem (fs)

- http



to use them, you will call them in a variable (mostly they will be constants)

```javascript
const path = require('path');
```

you can also import functions that are exported to other javascript files to use them

```javascript
const myfile = require('./myfile');
```



## Starting a Nodejs project

you will start by creating a ```package.json``` file using:

```javascript
npm init 

npm init -y //this won't ask you questions to fill for the package.json file
```



if you are using a specific project on another device, you can install all of your dependencies by using 

```javascript
npm install
```

there are also dev dependencies, these dependencies only work on development enviroment not on production



to install a dependency as a dev dependency

```javascript
npm install -D nodemon
```

if you want to use elements inside of another file, you can export it

```javascript
const person = {
    name: 'John Doe',
    age: 30
}
module.exports = person;
```

then you can import it in another file

```javascript
const person = require('./person');
```

you can also export classes and functions as well

```javascript
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}
module.exports = Person;
```

then you can import it and use it

```javascript
const Person = require('./person');
const person1 = new Person('John Doe', 30);

person1.greeting(); // My name is John Doe and I am 30
```

keep in mind that nodejs doesn't support ES6 importing

```javascript
import Person from './person'
```

you have to use BabelJS or Typescript and see what is backwards compatible to ES5

## Path Module

```javascript
const path = require('path');
```

to get the name of the file (base filename)

```javascript
path.basename(__filename) //path.js
```

to get the directory name

```javascript
path.dirname(__filename) // /users/myPc/nodeFile/pathFile
```

to get the file extension

```javascript
path.extname(__filename) // .js
```

to create a path object

```javascript
path.parse(__filename)

// it will generate this object
{
    root: '/',
    dir: '/users/myPc/nodeFile/pathFile',
    ext: '.js',
    name: 'path'
}
```

since it is an object so you can use any part of it



to concatenate paths

```javascript
path.join(__dirname, 'test', 'hello.html')

// it will create a path like this:
// /users/myPc/nodeFile/pathFile/test/hello.html
```



## File system Module (fs)

```javascript
const fs = require('fs');
const path = require('path');
```

to create a folder

```javascript
fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
    if(err) throw err;
    console.log('folder created....');
})
```

keep in mind that this action is asynchronous so other tasks might happen in the background

there is a synchronous version of this command



to create and write to a file

```javascript
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', err => {
    if (err) throw err;
    console.log('File written to.....');
})
```

you can use arrow functions instead of regular functions 



to add to a file (you use it in the callback)

```javascript
fs.appendFile(path.join(__dirname, '/test','hello.txt'), 'I love Nodejs', err => {
    if(err) throw err;
});
```

to read from file

```javascript
fs.readFile(path.join(__dirname, '/test', 'hello,txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});

// Hello world! I love Nodejs
```

to rename a file

```javascript
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), err => {
    if(err) throw err;
    console.log('File renamed......');
});
```



## Operating System Module (os)

```javascript
const os = require('os');
```

to get the platform

```javascript
os.platform()

// darwin for macOS and win32 for windows
```

to get CPU architecture

```javascript
os.arch()
// x64
```

to get CPU core info

```javascript
os.cpu()

// it will return a big object with how many cores and much more
```

to get free available memory

```javascript
os.freemem()

// 122388480
```

to get total memory

```javascript
os.totalmem()

//34359738368
```

to get the home directory

```javascript
os.homedir()

// /users/myPc
```

to get uptime (time the system has been up)

```javascript
os.uptime()

// 1305116 (in seconds)
```



## Url Module (url)

```javascript
const url = require('url');
```

to create a url

```javascript
const myUrl = new url("http://myepicwebsite.com/hello.html/?id=10");
```

to serialize the url

```javascript
myUrl.href
myUrl.toString()

// http://myepicwebsite.com/hello.html/?id=10
```

to get the host

```javascript
myUrl.host

//myepicwebsite.com
```

to get the hostname (same as host but minus the port)

```javascript
myUrl.hostname

//myepicwebsite.com
```

to get the pathname

```javascript
myUrl.pathname

// /hello.html
```

to serialize a query

```javascript
myUrl.search

// ?id=10
```

generate a params object (basically queries in an array)

```javascript
myUrl.searchParams

// { 'id' => '10', 'status' => 'active'}
```

you can add to that param by appending to it

```javascript
myUrl.searchParams.append('abc', '123');

// { 'id' => '10', 'status' => 'active', 'abc' => '123'}
```

you can loop through the params

```javascript
myUrl.searchParams.forEach((value,name) => 
    console.log(`${name}: ${value}`);
);
```



## Event Emitter Module

```javascript
const EventEmitter = require('events');
```

first create a class 

```javascript
class MyEmitter extends EventEmitter {}
```

initialize an object

```javascript
const theEmitter = new MyEmitter();
```

create an event listner

```javascript
theEmitter.on('event', () => console.log('Event!'));
```

initialize an event

```javascript
theEmitter.emit('event');

// Event!
```



# Express

```javascript
const express = require('express');
```

initialize express

```javascript
const app = express();
```

create your endpoint/ route handler

```javascript
app.get('/', function(req,res){
    res.send('Hello world!');
});
```

listen to a port

```javascript
app.listen(5000);
```



basic route handling

```javascript
app.get('/', function(req,res){
    // fetch from database
    // load pages
    // return JSON
    // full access to request and response
})
```



you can set up a port variable that takes either the server's port or a port of your choice if server doesn't have a port defined to it

```javascript
const PORT = process.env.PORT || 5000;

app.listen(PORT);
```

you can parse HTML in a response

```javascript
app.get('/', (req,res) => {
    res.send('<h1> Hello world </h1>');
});
```

to send a file

```javascript
const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
```

in express, you can set up a static folder to host static content

```javascript
app.use(express.static(path.join(__dirname,'public')));
```



to return json

```javascript
const members = {
    // a object that contains users with id/name/email
    // id: 1,
    // name: 'John Doe',
    // email: 'john@doe.com'
}
app.get('/api/members',(req,res) => {
    res.json(members);
});
```

it will stringify the object in json format



creating middleware (code that works behind the scene)

```javascript
const logger = (req,res,next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
 next();
}
```

to use this middleware

```javascript
app.use(logger);
```

to use url parameters

```javascript
app.get('/api/members/:id', (req,res)=> {
    res.send(req.params.id);
});
```

to get a single member from that member's object we created before

```javascript
app.get('/api/members/:id', (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    
    if(found){
        res.json(member.filter(member => {
            member.id === parseInt(req.params.id)
        }))
    }
    else {
        res.status(400).json({msg: "member not found"});
    }
});
```

the some function returns a true/false based on the condition if it is satisfied

the filter will return an object with the elements that satisfy its condition

you parse the request parameters to integer because by default it is a string



if not found return an error json with status of 400 (bad request), majority of the requests are send with status 200 (good request) so just to make sure that it is an error you add the 400 status



express routing (you don't have to include every single route in app.js so you can use a router)



assume you created a folder called routes, inside of it a folder called api then a javascript file called member.js



so it will look like this  

routes -> api -> members.js



inside members.js

```javascript
const express = require('express');
const router = express.Router();
const members = { 
     // that object we define previously
};

router.get('/'(req,res)=> {
    res.json(members);
});

module.exports = router;
```

to use this router, in app.js

```javascript
app.use('/api/members', require('./routes/api/members'));
```

if you call now /api/members with a get request, it will give you the members



example if a post request

```javascript
router.post('/', (req,res) => {
    res.send(req.body);    
});
```

the body won't work because it is not parsed

to parse it, you add these lines to app.js

```javascript
app.use(express.json());
app.use(express.urlencoded({extended: false})); // for url encoding
```



create a member example:

```javascript
router.post('/', (req,res) => {
    const newMember = {
        id: req.body.id, // or you can use a package like uuid
        name: req.body.name,
        email: req.body.email,
        status: 'active'        
    };
    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg: "provide email or name"});
    }
    members.push(newMember);
    res.json(members);
});
```



update a member

```javascript
router.put('/:id', (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    
   if(found){
       const updateMember = req.body;
       members.forEach(member => {
           if(member.id === parseInt(req.params.id)){
               member.name = updateMember.name ? updateMember.name : member.name;
               member.email = updateMember.email ? updateMember.email : member.email;
               res.json({msg: "updated"});
           }
           else {
               req.status(400).json({msg: "didn't update, user not found"});
           }
       })
   }
});
```

delete a member

```javascript
router.delete('/:id', (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    
    if(found){
        members = members.filter(member => member.id !== parseInt(req.params.id));
        res.json({msg: "member deleted"});
    }
    else {
        res.status(400).json({msg: "cannot delete, member not found"});
    }
});
```
