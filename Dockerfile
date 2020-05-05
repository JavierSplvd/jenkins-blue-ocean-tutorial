FROM node:10-alpine

USER node

EXPOSE 8080

CMD [ "node", "app.js" ]