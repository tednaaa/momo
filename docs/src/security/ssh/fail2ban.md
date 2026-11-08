# fail2ban

> [!WARNING]
> put your IP into `ignoreip` - a failing key bans you

- with key-only login it mostly keeps `auth.log` readable
- `backend = systemd` needs `python3-systemd`

```fish
sudo fail2ban-client status sshd
sudo fail2ban-client set sshd unbanip <ip>
```
