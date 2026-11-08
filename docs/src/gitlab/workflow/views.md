# Views

Saved filters on the root group's `Work items`, all with `State = Open`.

> [!WARNING]
> `%Started` includes every open milestone that already started - close the sprint milestone when it ends

- `Shared` visibility lets others add the view through `+ Add view` - nobody gets it automatically
- 5 added views per person
- `@me` is dropped on save - "my issues" is `Your work` → `Issues`

## Filters

- current sprint - `Milestone = %Started`
- backlog - `Milestone = None`
- unassigned - `%Started`, `Assignee = None`
- not started - `%Started`, `Label !=` every `status:` label
- in progress - `%Started`, `status: in progress`
- blocked - `%Started`, `status: blocked`
- waiting for review - `%Started`, `status: in review`
- waiting for merge - `%Started`, `status: passed review`
- waiting for QA - `%Started`, `status: in staging`
- ready to release - `status: ready to release`
- next sprint - `Milestone = %Upcoming`
- bugs - `type: bug`

## By role

- PM - current sprint, backlog, unassigned, blocked, ready to release
- developer - current sprint, in progress, blocked, waiting for review, waiting for merge
- QA - current sprint, waiting for QA, bugs
