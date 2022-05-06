const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 80;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>gym website</title>
        <style>
            * {
                margin: 0;
                padding: 0;
    
            }
    
            a {
                text-decoration: none;
                color: white;
                list-style: none;
    
            }
    
            ul {
                display: flex;
                padding: 3px;
                list-style: none;
            }
    
            nav {
                background-color: grey;
                top: 0;
                left: 0;
            }
    
            li {
                padding: 10px;
                margin: 3px;
                list-style: none;
    
            }
    
            .container {
                /* background-color: red; */
                height: 720px;
    
                margin: 17px auto;
            }
    
            h1 {
                text-align: center;
            }
    
            input,
            textarea {
                display: block;
                padding: 7px;
                margin: 10px auto;
                width: 60%;
    
            }
    
            body::before {
                content: "";
                background: url('https://images.unsplash.com/photo-1578874691223-64558a3ca096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80')no-repeat center center;
                height: 100%;
                width: 100%;
                position: absolute;
                z-index: -1;
                opacity: 0.5;
                top: 0px;
                left: 0px;
    
            }
    
            /* nav::before {
                content:"";
                background: url('https://images.unsplash.com/photo-1547919307-1ecb10702e6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80')no-repeat center center;
                height: 100%;
                width: 100%;
                position: absolute;
                z-index: -1;
                opacity: 0.5;
                top: 0px;
                left: 0px;
    
            } */
            .btn {
                padding: 8px;
                margin: 11px auto;
                outline: none;
                border: 2px solid black;
                border-radius: 3px;
                display: block;
                cursor:pointer;
    
            }
        </style>
    </head>
    
    <body>
        <nav>
            <ul>
                <li><a href="/">home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">contact us</a></li>
                <li><a href="#">services</a></li>
            </ul>
        </nav>
        <div class="container">
            <h1> Get your gym membership at just $60 fill this form</h1>
    
            <form action="/" id='contact'>
                <input type="text" name="name" id="name" placeholder=" enter your name">
                <input type="text" name="age" id="age" placeholder=" enter your age">
                <input type="text" name="gender" id="gender" placeholder=" enter your gender">
                <textarea name="adress" id="" cols="30" rows="10" placeholder="enter yoyr adress"></textarea>
                <textarea name="abou your self" id="" cols="30" rows="10" placeholder="few words about yourself"></textarea>
            </form>
            <button class="btn"> submit now</button>
    
    
    </body>
    
    </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
