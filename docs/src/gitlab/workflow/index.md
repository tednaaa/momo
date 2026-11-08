# GitLab workflow

Planning and shipping in GitLab Free.

```
{company_name}
├── platform
│   ├── ui-kit
│   ├── frontend-template
│   ├── k8s
│   └── handbook
└── {product}
    ├── backend
    ├── frontend
    └── support
```

- the root group holds labels, sprint milestones and one board - every project below inherits them
- sprints are milestones `Sprint 1`, `Sprint 2` - two weeks, Monday to Sunday, back to back
- `Planner` role for CEO, PM and analysts - they see every product without access to each
- a subgroup per product, not per team - teams change, products stay
- a contractor gets only their product's subgroup
- tickets without code, like `support`, are a project too
- the handbook is a VitePress project `platform/handbook` - group wiki is Premium, pages change through merge requests

## Planning

- `Milestone = None` on the root board is the company backlog
- estimates need weights, which are Premium - `sp: 3` labels can't be summed per sprint
