FROM node:16 AS build
WORKDIR /build
COPY . .
RUN yarn install && yarn run build

FROM node:16
COPY --from=build /build/dist/main.js ./
ENTRYPOINT ["node", "main.js"]
