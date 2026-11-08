# Flux

- bootstrap into the git repo:

```fish
flux bootstrap git \
  --url=ssh://git@gitlab.com/owner/repo \
  --branch=main \
  --private-key-file=$HOME/.ssh/personal_git \
  --path=clusters/production \
  --components-extra=image-reflector-controller,image-automation-controller
```

- a registry secret in the app namespace and in `flux-system` - a token with `read_registry` scope and `Maintainer` role:

```fish
for namespace in frontend flux-system
  kubectl create secret docker-registry docker-registry \
    --docker-server=registry.gitlab.com \
    --docker-username=<username> \
    --docker-password=<token> \
    --namespace=$namespace
end
```

- force a sync:

```fish
flux reconcile source git flux-system
```
