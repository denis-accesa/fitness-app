# Use the official Node.js 18 image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy the root-level files essential for dependency management
COPY package.json yarn.lock turbo.json ./

# Install Yarn and Turbo globally (adjust version if needed)
RUN npm install -g yarn@latest turbo@1.10.14 --force

# Install dependencies
RUN yarn install

# Copy the entire project, excluding node_modules
COPY . .

# Ensure all packages and their dependencies are built
RUN npx turbo run build --include-dependencies --filter=api

# Specify the command to run your application
CMD ["yarn", "turbo", "run", "start", "--filter=api"]
