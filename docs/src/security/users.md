# Users

> [!CAUTION]
> `deluser` alone leaves the person's sessions and cron jobs running - kill them first, then rotate every secret they could read with `sudo`

- an account per person, never shared, never `root`
- only their Ed25519 public key
- the `adduser` password is only for `sudo`, SSH never accepts it
- no `NOPASSWD` - a leaked key becomes root

## Onboarding

```fish
sudo adduser <user>
sudo usermod -aG sudo <user>
sudo install -d -m 700 -o <user> -g <user> /home/<user>/.ssh
echo '<public key>' | sudo install -m 600 -o <user> -g <user> /dev/stdin /home/<user>/.ssh/authorized_keys
```

## Offboarding

```fish
sudo pkill -KILL -u <user>
sudo crontab -r -u <user>
sudo deluser --remove-home <user>
```

## Audit

```fish
getent group sudo
sudo sh -c "grep -H '' /home/*/.ssh/authorized_keys"
```
