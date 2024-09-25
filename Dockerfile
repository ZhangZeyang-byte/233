# 使用官方 Node.js 14 镜像作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json（如果存在）
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制应用程序代码
COPY . .

# 暴露应用程序端口
EXPOSE 80

# 启动应用
CMD [ "node", "server.js" ]
