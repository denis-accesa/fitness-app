# Use the official Node.js 18 image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy the root-level files essential for dependency management
COPY ../../package.json ../../yarn.lock ../../turbo.json ./

# Install Yarn and Turbo (adjust version if needed)
RUN npm install -g yarn@3.6.1 turbo@1.10.14

# Install dependencies
RUN yarn install

# Copy the api app source code
COPY . .

# Build the NestJS application (adjust if your build script is different)
RUN yarn turbo run build --filter=api

# Specify the command to run your application
CMD ["yarn", "turbo", "run", "start", "--filter=api"]
