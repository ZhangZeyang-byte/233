const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 80;

// 静态文件服务
app.use(express.static(path.join(__dirname, 'public')));

// 调试中间件
app.use((req, res, next) => {
  console.log(`Received request for: ${req.url}`);
  next();
});

// 路由
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'index.html');
  console.log(`Attempting to send file: ${filePath}`);
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    console.log(`File not found: ${filePath}`);
    res.status(404).send('File not found');
  }
});

app.get('/page2', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'index2.html');
  console.log(`Attempting to send file: ${filePath}`);
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    console.log(`File not found: ${filePath}`);
    res.status(404).send('File not found');
  }
});

app.get('/page3', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'index3.html');
  console.log(`Attempting to send file: ${filePath}`);
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    console.log(`File not found: ${filePath}`);
    res.status(404).send('File not found');
  }
});

// 处理 404 错误
app.use((req, res) => {
  console.log(`404 Not Found: ${req.url}`);
  res.status(404).send('页面未找到');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Application is accessible at https://cn-shenductlist-mjhpteeeqg.cn-shenzhen.sae.run/`);
  console.log(`Current working directory: ${process.cwd()}`);
  console.log(`Contents of public directory:`);
  fs.readdirSync(path.join(__dirname, 'public')).forEach(file => {
    console.log(file);
  });
});
