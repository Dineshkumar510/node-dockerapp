FROM node:9-slim
WORKDIR /dockerapp
COPY package.json /dockerapp
RUN npm install 
COPY . /dockerapp
CMD ["npm","start"]


