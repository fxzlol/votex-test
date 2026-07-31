const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

// ... твои остальные маршруты и логика (например, регистрация, логин, сообщения)
// Если у тебя был какой-то код в server.js, вставь его сюда, 
// но убедись, что в конце вместо app.listen(3000) стоит:

server.listen(PORT, () => {
  console.log(`✅ Cut-A-Rote server running on http://localhost:${PORT}`);
});
