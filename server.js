const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;

// 静态文件服务
app.use(express.static(path.join(__dirname, 'public')));

// 路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/page2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index2.html'));
});

app.get('/page3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index3.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
