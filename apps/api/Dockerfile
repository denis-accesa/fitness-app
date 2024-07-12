# Use the official Node.js image as a parent image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the monorepo's package.json and yarn.lock files to the working directory
COPY ../../package.json ../../yarn.lock ./

# Copy the turbo.json configuration file
COPY ../../turbo.json ./

# Install Yarn and Turbo globally
RUN corepack enable
RUN yarn set version stable

# Copy the entire monorepo
COPY ../../ ./

# Install dependencies
RUN yarn install

# Build the NestJS application
RUN yarn turbo run build --filter=api...

# Set the working directory to the api package
WORKDIR /app/apps/api

# Expose the port the app runs on
EXPOSE 3000

# Run the app
CMD ["yarn", "start:prod"]
