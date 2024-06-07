# FROM dockerhub.timeweb.cloud/node:20

# ENV YARN_VERSION 3.4.1

# WORKDIR /app
# COPY package.json .
# COPY yarn.lock .

# RUN npm install --legacy-peer-deps
# RUN yarn install --network-timeout 100000 && yarn cache clean
# COPY . .

# CMD ["yarn", "start"]


FROM dockerhub.timeweb.cloud/node:20
ENV TZ="Europe/Moscow"
WORKDIR /app
COPY package.json ./
# COPY .env ./
COPY tsconfig.json ./
COPY . .
RUN npm config set strict-ssl false
# RUN npm install
EXPOSE 5173