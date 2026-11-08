# Resend

> [!CAUTION]
> the free plan is 100 emails per day, not only 3 000 per month

> [!WARNING]
> without SPF, DKIM and DMARC mail lands in spam - DMARC is marked optional, add it anyway

- send from a subdomain like `app.example.com` - a damaged reputation stays there
- copy values with the copy button - the dashboard shortens them with `[...]`, `TXT` goes without quotes
- DigitalOcean appends the root domain to `Hostname` - paste `Name` as is
- until `Verify` passes, mail goes only from `onboarding@resend.dev` to your own address
- click and open tracking off - rewritten links look like spam
- the API key is the SMTP password and is shown once, `from` is on the verified domain
- DMARC to `p=quarantine` after a few weeks without delivery problems

```toml
host = "smtp.resend.com"
port = 465 # or 587 with STARTTLS
username = "resend"
password = "re_..."
```

Check: Gmail → `Show original` - `SPF`, `DKIM` and `DMARC` all `PASS`.
