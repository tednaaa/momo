# Let's Encrypt

> [!CAUTION]
> 5 failed validations per domain per hour, then a one-hour block - never retry in a loop

- request only once DNS returns the new IP - until then validation hits the old one with `Timeout during connect`:

```fish
curl -4 ifconfig.me
dig +short A <domain> @8.8.8.8
```
