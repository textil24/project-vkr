# FROM dockerhub.timeweb.cloud/node:20

# WORKDIR /app

# COPY ./package.json .
# RUN npm cache clean --force
# RUN npm install
# COPY . .

# EXPOSE 4001

# # CMD npm start
# CMD [ "node", "./src/index.js" ]

FROM dockerhub.timeweb.cloud/node:20
ENV TZ="Europe/Moscow"
WORKDIR /app
COPY package.json ./
# COPY prisma ./prisma/
COPY .env ./
COPY tsconfig.json ./
COPY . .
RUN npm config set strict-ssl false
RUN npm install
#RUN npx prisma generate --schema=./prisma/schema.prisma

# RUN npm run migrate
# CMD ["npm", "start"]
