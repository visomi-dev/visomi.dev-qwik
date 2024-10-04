# Dockerfile for run the website

FROM imbios/bun-node:latest-current-slim AS build
WORKDIR /usr/src/app
COPY . .
RUN bun install --frozen-lockfile
RUN bun run website:build

FROM oven/bun:distroless
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/apps/website/dist ./
COPY --from=build /usr/src/app/apps/website/server ./
EXPOSE 8080
ENTRYPOINT [ "bun", "server/entry.bun.js" ]
