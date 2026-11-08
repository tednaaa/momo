# SSH hardening

> [!CAUTION]
> create the admin user with a key and `sudo` before `PermitRootLogin no` - keep the current session open, check from a new terminal

> [!WARNING]
> without `KbdInteractiveAuthentication no`, PAM still asks for a password

`/etc/ssh/sshd_config.d/10-hardening.conf` - first value wins, so `10-` beats the cloud image's `50-cloud-init.conf`:

```
PasswordAuthentication no
KbdInteractiveAuthentication no
PubkeyAuthentication yes
PermitRootLogin no
```

```fish
sudo sshd -T | grep -Ei 'passwordauthentication|kbdinteractive|permitrootlogin'
sudo sshd -t && sudo systemctl restart ssh.socket ssh.service
```

- `sshd -T` shows the effective config - `sshd_config` is mostly commented defaults
- `sshd -t` validates first, Ubuntu 24.04 also runs `ssh.socket`
- from the laptop, both expect `Permission denied (publickey)`:

```fish
ssh -o PreferredAuthentications=password -o PubkeyAuthentication=no <user>@<host>
ssh root@<host>
```
