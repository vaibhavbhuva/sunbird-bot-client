# Stage 1: Build the Angular application
FROM node:14 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install project dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Build the Angular application
RUN npm run build:prod

# Stage 2: Serve the Angular application
FROM nginx:alpine

# Copy the built app from the previous stage to the Nginx image
COPY --from=builder /app/dist/sunbird-bot-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the nginx web server
CMD ["nginx", "-g", "daemon off;"]