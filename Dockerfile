FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# 复制应用程序代码和公共文件
COPY . .

EXPOSE 80

CMD [ "node", "server.js" ]
