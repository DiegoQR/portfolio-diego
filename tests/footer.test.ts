import { expect, test } from '@playwright/test';

test('links to the supplied social profiles and email', async ({ page }) => {
  await page.goto('/');
  const footer = page.getByRole('contentinfo');
  await expect(footer.getByRole('link', { name: 'LinkedIn', exact: true })).toHaveAttribute('href', 'https://www.linkedin.com/in/diego-alejandro-quinones-rudon/');
  await expect(footer.getByRole('link', { name: 'GitHub', exact: true })).toHaveAttribute('href', 'https://github.com/DiegoQR');
  await expect(footer.getByRole('link', { name: 'diegoqr2000@gmail.com', exact: true })).toHaveAttribute('href', 'mailto:diegoqr2000@gmail.com');
});
