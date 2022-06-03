# Netlify Publish

Publish Netlify deploy.

## Inputs

### `netlifyToken`

_Required._ Netlify personal API token.

### `siteId`

_Required._ Netlify site ID.

### `deployId`

_Required._ Netlify deploy ID to publish.

## Example usage

```yaml
uses: perdoo/netlify-publish@main
with:
  netlifyToken: ${{ secrets.NETLIFY_AUTH_TOKEN }}
  siteId: foo
  deployId: bar
```
