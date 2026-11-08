# Runners

> [!CAUTION]
> Docker-in-Docker (`privileged = true`) and socket binding give every job root on the host - keep no secrets there but the runner token

- the `glrt-` token is shown once, right after `Create runner`
- `concurrent` caps jobs for the whole server, not per runner
- `config.toml` reloads every 3 seconds - no restart
- the nightly `unattended-upgrades` reboot kills a running job
- job containers and volumes fill the disk - clean weekly:

```
0 4 * * 0 root /usr/share/gitlab-runner/clear-docker-cache
```

> it keeps images - only `docker system prune` removes them
