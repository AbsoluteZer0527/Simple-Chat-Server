# Simple-Chat-Server
*Here is a video showing what it looks like on localhost and the details in the code (Since I don't have the money to run and maintain this on a public cloud server) : TBC

- A Simple Chat Room that can run on your local computer developed using Next.js and Socket.io.
- Anonymous users, chat messages display across all screens.
- Different message displays to distinguish between users.
- Connection header to demonstrate server status.

## File Explanation: 
- **index.js**: The frontend file of the chat server using Tailwind CSS and React in Next.js. I started by using the command `npx create-next-app chatroom-app` to create a chatroom-app directory. To recreate this project on your local computer, just replace the index.js file with the one in this repository. ![image](https://github.com/user-attachments/assets/03403ab4-a700-461f-b31d-c3809e1e1a9c)
To run the local test server, use the command `npm run dev` in the terminal while inside the chat-server repository. I customized the webpage into a monochromatic yellow tone to give out a joyful vibe.

- **Chatroom-server**: This is used to run Socket.io, the main changes to which are located in **server.js**. How to run the server is referencing the official website, which I used some of the code given on the webpage: https://socket.io/docs/v4/server-installation/. I used nodemon to make the server up-to-date, so I no longer needed to restart the server every time I changed my code.![image](https://github.com/user-attachments/assets/fb91db6c-9c04-4045-803f-3d49ce85ce55) To get the server running, use `npm run dev`. Every time a user sends a message, it can be viewed in the terminal.

## Credit/Reference: 
This project is referening to the video by Coding Startup.
Source: https://b23.tv/HKYaC26 
