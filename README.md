# Unrendered text in accessible names and aria snapshots

Text that isn't rendered still ends up in accessible names and aria snapshots: light DOM text of a shadow host that isn't assigned to a slot, and text directly inside a closed details.

```
npm ci
npx playwright install
npx playwright test
```

Both tests fail in all three browsers.
