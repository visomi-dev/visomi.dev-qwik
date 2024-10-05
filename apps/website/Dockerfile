# Dockerfile for run the website

FROM imbios/bun-node:latest-current-slim AS build
WORKDIR /usr/src/app
COPY . .
RUN bun install --frozen-lockfile
RUN bun run website:build

FROM oven/bun:debian AS deps
WORKDIR /usr/src/app
COPY apps/website/package.json .
RUN bun install --production

FROM oven/bun:distroless
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/apps/website/dist ./dist
COPY --from=build /usr/src/app/apps/website/server ./server
COPY --from=deps /usr/src/app/node_modules ./node_modules
EXPOSE 8080
ENTRYPOINT [ "bun", "server/entry.bun.js" ]
