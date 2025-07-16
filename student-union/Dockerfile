FROM node:19

WORKDIR /app

COPY student-union/package*.json ./

RUN npm install

COPY student-union/ .

RUN npm run build

RUN npm install --global serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]