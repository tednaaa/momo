# Labels

> [!WARNING]
> labels aren't exclusive - nothing stops two `priority:` labels on one issue, scoped `priority::high` is Premium

- type - `type: feature`, `type: bug`
- area - `area: frontend`, `area: backend`, `area: devops`, filters one discipline across products

## Status

No status means `Open` - not started.

- `status: in progress` - developer works in a branch
- `status: blocked` - waits on another issue or a person
- `status: in review` - merge request waits for review
- `status: passed review` - approved, waits for merge
- `status: in staging` - QA tests it
- `status: ready to release` - QA passed, goes out with the next release

## Priority

Set by PM only for a non-ordinary issue, a bug by how much it hurts.

- `priority: critical` - drop everything, today
- `priority: high` - this sprint
- no label - ordinary, in turn
- `priority: low` - when there is time
