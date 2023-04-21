############################
### LUIS  GARCIA GARCES
### UNIVERSIDAD INTERNACIONAL DE LA RIOJA
############################
FROM node:latest
# Working directory
WORKDIR /app
# Copy application code
COPY ./nodejs .
# Install dependencies
RUN npm init -y
RUN npm install express mongoose dotenv path --save -y
# Run applications
CMD ["npm", "start"]
