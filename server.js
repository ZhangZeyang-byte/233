const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;

// 静态文件服务
app.use(express.static(path.join(__dirname, 'public')));

// 主页路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 健康检查端点
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Current working directory: ${process.cwd()}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});

// 优雅关闭
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    console.log('HTTP server closed')
  })
});
