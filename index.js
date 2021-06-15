//importing express package
const express = require('express');

//creating server instance
const server = express();

//request handlers
const handleLoginGetRequestType = (req, res) =>{
    res.send('voila, server responded to a get request specified on the login route');
}

const handleSignUpPostRequestType = (req, res) =>{
    res.send('Holla, sign up successful using a post method on the sign up route');
}

const handleProfilePutRequestType = (req, res) =>{
    res.send('Yeah, updated profile using the put method');
}

const handleSignUpPatchRequestType = (req, res) =>{
    res.send('voila, Did sign up againg using the patch method');
}

const handleProfileDeleteRequestType = (req, res) =>{
    res.send(`c'est bon, profile deleted successfully using the delete method`);
}

const handleHomePageGetRequestType = (req, res) =>{
    res.send('accessed homepage using the get request on the root route');
}


//server responses
server.get('/login', handleLoginGetRequestType);
server.post('/signUp', handleSignUpPostRequestType);
server.put('/profile', handleProfilePutRequestType);
server.patch('/signUp', handleSignUpPatchRequestType);
server.delete('/profile', handleProfileDeleteRequestType);
server.get('/', handleHomePageGetRequestType);

//starting express server
server.listen(3000, () => console.log('server is ready'));