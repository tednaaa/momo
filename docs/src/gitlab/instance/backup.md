# GitLab backup

> [!CAUTION]
> `/etc/gitlab/gitlab-secrets.json` is not in backups - without it a restore loses CI variables, tokens and 2FA. Save it again after every upgrade

- `gitlab.rb` isn't either - with the Linux package it holds S3 and SMTP credentials
- restore only on the exact version from the backup name - otherwise `GitLab version mismatch`
- secrets go back before the restore, then:

```fish
sudo gitlab-rake gitlab:doctor:secrets
```

- another domain disables WebAuthn devices - every user registers them again
