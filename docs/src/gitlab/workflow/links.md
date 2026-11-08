# Links

Filters live in the URL - a bookmark is a view without the 5-view limit, and a bookmark per person replaces "my issues". Parameters combine with `&`.

```
https://{gitlab_host}/groups/{company_name}/-/boards/{board_id}
https://{gitlab_host}/groups/{company_name}/-/work_items
```

## Board

- by priority - `?label_name[]=priority%3A%20critical`
- current sprint - `?milestone_title=%23started`
- bugs - `?label_name[]=type%3A%20bug`
- one area - `?label_name[]=area%3A%20frontend`
- one person - `?assignee_username={username}`

## Work items

- current sprint - `?state=opened&milestone_title=%23started`
- backlog - `?state=opened&milestone_title=None`
- next sprint - `?state=opened&milestone_title=%23upcoming`
- one sprint - `?state=opened&milestone_title=Sprint%201`
- unassigned in sprint - `?state=opened&milestone_title=%23started&assignee_id=None`
- not started - `?state=opened&milestone_title=%23started&not[label_name][]=status%3A%20in%20progress&not[label_name][]=status%3A%20blocked&not[label_name][]=status%3A%20in%20review&not[label_name][]=status%3A%20passed%20review&not[label_name][]=status%3A%20in%20staging&not[label_name][]=status%3A%20ready%20to%20release`
- in progress - `?state=opened&milestone_title=%23started&label_name[]=status%3A%20in%20progress`
- blocked - `?state=opened&milestone_title=%23started&label_name[]=status%3A%20blocked`
- waiting for review - `?state=opened&milestone_title=%23started&label_name[]=status%3A%20in%20review`
- waiting for merge - `?state=opened&milestone_title=%23started&label_name[]=status%3A%20passed%20review`
- waiting for QA - `?state=opened&milestone_title=%23started&label_name[]=status%3A%20in%20staging`
- ready to release - `?state=opened&label_name[]=status%3A%20ready%20to%20release`
- bugs - `?state=opened&label_name[]=type%3A%20bug`
- critical bugs - `?state=opened&label_name[]=type%3A%20bug&label_name[]=priority%3A%20critical`
- critical - `?state=opened&label_name[]=priority%3A%20critical`
- one person - `?state=opened&assignee_username[]={username}`
