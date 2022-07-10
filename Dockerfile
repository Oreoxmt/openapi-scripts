FROM node:16
COPY package.json yarn.lock ./src/ .
RUN yarn install
ENTRYPOINT ["node", "main.js"]
