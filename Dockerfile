FROM node:14-buster-slim
WORKDIR /rest-api

# Default Ports Used
EXPOSE 5000

# Copy needed files
COPY package.json ./

# Install dependencies
RUN npm install

COPY tsconfig.json ./
COPY src ./src/

# Transpile TS => JS
RUN npm run compile
RUN npm prune --production

# set the user to non-root
USER node

CMD ["node", "./dist/index.js"]