FROM node:alpine3.20 as build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build


FROM nginx:latest
COPY --from=build /app/build/ /usr/share/nginx/html
EXPOSE 80