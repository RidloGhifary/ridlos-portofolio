#Build Stage 

FROM node:18-alpine AS build-stage
WORKDIR /app

COPY package*.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

COPY . .
RUN pnpm run build

#Production Stage
FROM node:18-alpine AS production-stage
WORKDIR /app

RUN npm install -g pnpm

COPY --from=build-stage /app ./
EXPOSE 4173

CMD ["pnpm", "run", "preview"]