# Flow

> [!CAUTION]
> `Create merge request` writes `Closes #N`, so the issue closes on merge, before QA - in every project uncheck `Settings` → `Repository` → `Branch defaults` → `Auto-close referenced issues on default branch`

- labels don't enforce the order - dragging a card only swaps labels
- `status: blocked` replaces any status - say why in a comment, restore the previous one after

## QA on staging

QA after the merge, on one shared stand. A closed issue means released.

- `Open` with a milestone - in the sprint →
- `status: in progress` →
- `status: in review` →
- `status: passed review` →
- merge to `main` - deployed to staging →
- `status: in staging` - QA tests →
- `status: ready to release` →
- tag on `main` - production, the issue closes

A bug on staging - back to `status: in progress`, the fix is a new merge request.

## QA on review apps

A temporary stand per merge request, QA before the merge - `main` holds only tested code.

- `Open` with a milestone - in the sprint →
- `status: in progress` →
- `status: in review` →
- `status: passed review` →
- `status: in staging` - QA tests the review app →
- `status: ready to release` →
- merge to `main` - the issue closes, the review app goes →
- tag `1.4.0-rc.1` - staging accepts the whole release →
- tag `1.4.0` - production

A bug on the review app is fixed in the same branch, a regression on staging is a new merge request and the next `rc`.

> Needs:

- a runner, a Docker host or k8s cluster for the stands
- wildcard DNS `*.review.example.com` and a wildcard certificate
- `environment: review/$CI_COMMIT_REF_SLUG` with an `on_stop` job in every `.gitlab-ci.yml`
- frontend - a static build calling the staging backend, cheap
- backend - its own database per merge request, the most work and cost

> start with review apps for frontends only
