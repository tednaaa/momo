# Security updates

> [!WARNING]
> `unattended-upgrades` takes only Ubuntu's `-security` - Docker, GitLab Runner and other third-party repositories update by hand

- a new kernel or libc needs a reboot - `/etc/apt/apt.conf.d/52reboot`:

```
Unattended-Upgrade::Automatic-Reboot "true";
Unattended-Upgrade::Automatic-Reboot-Time "04:00";
```

- it reboots only when `/var/run/reboot-required` exists - and kills a CI job running then

```fish
sudo unattended-upgrade --dry-run -d
```
