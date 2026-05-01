#!/usr/bin/env -S bun --install=force

await Bun.$`rm -rf dst`;
await Bun.$`cp -r src dst`;
await Bun.$`cd dst/img;bun icon.mjs`
