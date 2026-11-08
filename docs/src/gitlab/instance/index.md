# GitLab upgrade

> [!CAUTION]
> - only through required stops `x.2`, `x.5`, `x.8`, `x.11` - the route from the [Upgrade Path tool](https://gitlab-com.gitlab.io/support/toolbox/upgrade-path/)
> - snapshot the VPS first - database migrations don't roll back

- each stop on its latest patch
- the next stop only once `Admin` → `Monitoring` → `Background migrations` is empty
- in compose, `gitlab-ctl` and `gitlab-rake` run through `docker compose exec gitlab`

## Linux package

- `apt upgrade` jumps straight to the latest - keep the package on hold
- `apt` needs the full version, `gitlab-ee=19.2` is not found:

```fish
apt-cache madison gitlab-ee | grep ' 19.2.'
sudo apt-mark unhold gitlab-ee
sudo apt install gitlab-ee=19.2.3-ee.0
sudo apt-mark hold gitlab-ee
```

## Compose

- pin the tag like `gitlab/gitlab-ce:19.2.3-ce.0` - `latest` jumps over the stops on any `pull`
