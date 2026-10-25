# Sanrio Ops

Alliance operations site for Last War: Survival.

Static Astro site focused on weekly routine, announcement templates, and short guides. Server time uses fixed UTC-2 (no DST). Content is intentionally thin and should be verified by the alliance before relying on it.

## Development

```bash
npm install
npm run dev
```

## Design notes

- Matches the in-game UI: slate header bars, tab-style nav, light list panels, orange event banners, Bangers display font
- Orange marks current state only (today's row, the live Arms Race phase), as in game
- Small focused pages with secondary nav for days
- Avoid common AI design patterns (no purple gradients, glass, uniform heavy rounding, etc.)

## Contributing

Prefer small, accurate pages. Verify current game mechanics before adding strategic detail.
