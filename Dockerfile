# Stage 1: Build React app
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /react-docker-demo

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application
COPY . .

# Set environment variable for React app
ARG REACT_APP_BACKEND_HOST
ENV REACT_APP_BACKEND_HOST=$REACT_APP_BACKEND_HOST

# Build the application
RUN npm run build

# Use a smaller base image for the production environment
FROM nginx:alpine

# Delete default nginx config to replace it with custom config later
# RUN rm /etc/nginx/conf.d/default.conf

# Copy the build files to the nginx public directory
COPY --from=build /react-docker-demo/build /usr/share/nginx/html

# COPY --from=build  /react-docker-demo/conf/nginx.conf /etc/nginx/nginx.conf

# Expose the port that nginx will run on
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]