# Layer cache

- every line is cached, the first changed line rebuilds everything below it
- rarely changing lines first: dependency manifests, install, then the code

```dockerfile
FROM node:20-alpine
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
```

> [!WARNING]
> `COPY . .` above the install reinstalls every dependency on any code edit
