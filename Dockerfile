FROM node:22-slim
WORKDIR /app

COPY . .
RUN npm install

EXPOSE ${PORT}

CMD ["npm", "run", "start"]
