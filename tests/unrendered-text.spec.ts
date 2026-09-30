import { test, expect } from '@playwright/test';

test('unslotted text is not part of the accessible name', async ({ page }) => {
  await page.setContent(`
    <div role=button>Light</div>
    <script>
      document.querySelector('div').attachShadow({ mode: 'open' }).innerHTML = 'Shadow';
    </script>
  `);
  await expect(page.getByRole('button', { name: 'Shadow', exact: true })).toBeVisible();
});

test('text inside a closed details is not in the aria snapshot', async ({ page }) => {
  await page.setContent(`
    <details>
      <summary>Summary</summary>
      Details
    </details>
  `);
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - group: Summary
  `);
});
