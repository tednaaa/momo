# Fresh install

> [!CAUTION]
> sign-ups are open to the internet - `Admin` → `Settings` → `General` → `Sign-up restrictions`

- without runners, Auto DevOps pipelines hang as `stuck` - `Admin` → `Settings` → `CI/CD` → uncheck `Default to Auto DevOps pipeline for all projects`
- `gitlab-ee` without a license runs as Free, Premium is a license key later - `gitlab-ce` takes none
- a failed first install of the Linux package leaves a self-signed certificate - with `letsencrypt['enable'] = true`:

```fish
sudo dpkg --configure -a
sudo gitlab-ctl renew-le-certs
```
