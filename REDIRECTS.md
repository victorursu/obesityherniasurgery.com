# Redirects Configuration

This document explains how to configure redirects for the website.

## File: `redirects.json`

The `redirects.json` file defines 301 (permanent) and 302 (temporary) redirects.

### Format

```json
{
  "source": "/old-path",
  "destination": "/new-path",
  "permanent": true
}
```

### Fields

- **source**: The path to redirect from (e.g., `/appointment-schedule`)
- **destination**: The path to redirect to (e.g., `/booking`)
- **permanent**: 
  - `true` = 301 (permanent redirect) - Use for permanent URL changes
  - `false` = 302 (temporary redirect) - Use for temporary redirects

### Examples

```json
[
  {
    "source": "/appointment-schedule",
    "destination": "/booking",
    "permanent": true
  },
  {
    "source": "/old-page",
    "destination": "/new-page",
    "permanent": true
  },
  {
    "source": "/temp-page",
    "destination": "/new-page",
    "permanent": false
  }
]
```

### How It Works

1. The `next.config.js` file reads `redirects.json` during build time
2. Next.js automatically handles the redirects based on the configuration
3. 301 redirects tell search engines that the URL has permanently moved
4. 302 redirects indicate a temporary move

### Adding Redirects

1. Edit `redirects.json`
2. Add a new redirect object to the array
3. Restart the Next.js dev server (`npm run dev`) or rebuild (`npm run build`)

### Notes

- Redirects are case-sensitive
- Trailing slashes matter (e.g., `/page` vs `/page/`)
- External redirects are supported (use full URL in `destination`)
- Multiple redirects can be defined in the array

