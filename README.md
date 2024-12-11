# Multi-Language Next.js Application

A Next.js application with multi-language support using subdomain-based routing.

## Setup

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build
```

## Environment Variables

Create a `.env` file with:

```
NODE_ENV=development
NEXT_PUBLIC_URL=your-domain.com
```

## Language Configuration

The application supports multiple languages via subdomain routing:

- English: en.domain.com
- Russian: ru.domain.com
- Persian: fa.domain.com
- Chinese: zh.domain.com

### Adding Translations

1. Translations are stored in `/messages/{locale}.json`
2. Supported locales: `en`, `ru`, `fa`, `zh`

### Modifying Subdomain Configuration

To modify subdomain mapping, update `src/i18n/routing.ts`:

```typescript
{
  domain: process.env.NODE_ENV === "development"
    ? "customsubdomain.localhost:3000"
    : `customsubdomain.${process.env.NEXT_PUBLIC_URL!}`,
  defaultLocale: "locale",
  locales: ["locale"],
}
```

### Development URL Rewrites

The project uses Next.js rewrites in development to handle subdomain routing. These are configured in `next.config.js`:

```javascript
// Development rewrites
beforeFiles: [
  {
    source: "/:path*",
    has: [{ type: "host", value: "ru.localhost:3000" }],
    destination: "/ru/:path*",
  },
  // Similar rules for en, zh, fa
];
```

Note: These rewrites only apply in development mode (`NODE_ENV=development`).

### Local Development

Access different languages locally via:

- English: en.localhost:3000
- Russian: ru.localhost:3000
- Persian: fa.localhost:3000
- Chinese: zh.localhost:3000

## Production Deployment

1. Set `NODE_ENV=production`
2. Set `NEXT_PUBLIC_URL` to your domain
3. Configure DNS for subdomains
4. Deploy application
