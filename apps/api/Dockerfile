# Use the official Node.js 18 image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy the root-level files essential for dependency management
COPY package.json yarn.lock turbo.json ./

# Install Yarn and Turbo (adjust version if needed)
RUN npm install -g yarn@latest turbo@1.10.14 --force

# Install dependencies
RUN yarn install

# Install NestJS CLI globally
RUN yarn global add @nestjs/cli

# Copy the entire project, excluding node_modules
COPY . .

# Build the entire monorepo to ensure all packages are built
RUN npx turbo run build

# Specify the command to run your application
CMD ["yarn", "turbo", "run", "start", "--filter=api"]
