When building `pixi.js/gif` it doesn't work when built in production

## Prerequisites

Install dependencies.

```
npm install
```

### Development Mode (works)

Run using Vite development server:

```
npm start
```

### Production Build (doesn't work)

Throws runtime error `TypeError: (0 , _uint.buildStream) is not a function`:

```
npm run build
npx vite preview
```
