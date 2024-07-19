# Use the official Node.js 18 image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy the root-level files
COPY package.json yarn.lock turbo.json ./

# Install Yarn and Turbo 
RUN npm install -g yarn@latest turbo@1.10.14 --force

# Install project dependencies
RUN yarn install --frozen-lockfile

# Copy the entire project
COPY . .

# Build the entire project 
RUN yarn turbo run build

# Specify the command to run your application
CMD ["yarn", "turbo", "run", "start", "--filter=api"]
