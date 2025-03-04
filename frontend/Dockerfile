FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install react-redux @reduxjs/toolkit axios styled-components
RUN npm install
COPY . .
CMD ["npm", "start"]