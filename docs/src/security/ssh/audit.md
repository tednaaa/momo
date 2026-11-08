# SSH audit

> [!CAUTION]
> a compromised host gets rebuilt, not cleaned - it can't report on itself

```fish
sudo grep -h 'Accepted' /var/log/auth.log
sudo grep -oP 'from \K[\d.]+' /var/log/auth.log | sort | uniq -c | sort -rn | head
```

- only `Accepted publickey` from known users and IPs - any `Accepted password` needs investigating
- `ssh-rsa not in PubkeyAcceptedAlgorithms` on a schedule is your own automation with an old SHA-1 key - move it to Ed25519, don't re-enable `ssh-rsa`
