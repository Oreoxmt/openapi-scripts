FROM node:16
WORKDIR /app
COPY package.json yarn.lock ./src/ .
RUN yarn install
ENTRYPOINT ["node", "/app/main.js"]
