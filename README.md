# FleetHive

The previous landing site has been moved into [`/v1`](./v1) so the repository root is ready for a new site implementation and deployment.

## Legacy site (v1)

Everything from the original static site now lives in `v1/`, including:

- `v1/index.html`
- `v1/images/`
- `v1/site.webmanifest`
- `v1/_redirects`
- `v1/netlify.toml`
- favicon and touch icon assets

The `v1/index.html` asset paths were updated to use local `./` references so the legacy site can be hosted from the `/v1/` path.
