# Docker

> [!CAUTION]
> published ports bypass `ufw` - publish to `127.0.0.1:<port>` and let a reverse proxy reach the container

- Docker Engine from Docker's repository, not Ubuntu's `docker.io`
- one reverse proxy owns `80` and `443` - a proxy per service fights over them
- pin image tags - `latest` upgrades on any `pull`, without a backup first
