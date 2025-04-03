FROM node:20.16.0-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install your Node.js dependencies
RUN npm ci
#RUN npx playwright install --with-deps

# Copy the rest of your application code
COPY . .

# By default, we'll run the tests, but you can open a bash shell if needed
CMD ["npm", "test"]
