import { expect, test } from '@playwright/test';

test('renders the portfolio without runtime errors or invented projects', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');

  await expect(page).toHaveTitle('Diego Quiñones | Software Developer');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Diego Quiñones');
  for (const name of ['About Me', 'Experience', 'Projects', 'Education & Courses']) {
    await expect(page.getByRole('heading', { level: 2, name, exact: true })).toBeVisible();
  }
  await expect(page.getByRole('heading', { name: 'CodeRoad', exact: true })).toBeVisible();
  await expect(page.getByText('Spanish', { exact: true })).toBeVisible();
  await expect(page.getByText('Native', { exact: true })).toBeVisible();
  await expect(page.getByText('English', { exact: true })).toBeVisible();
  await expect(page.getByText('Fluent', { exact: true })).toBeVisible();
  await expect(page.locator('#projects article')).toHaveCount(0);
  await expect(page.locator('#projects a')).toHaveCount(0);
  await expect(page.locator('#education summary')).toHaveCount(0);
  expect(errors).toEqual([]);
});

test('fits narrow and wide layouts without horizontal overflow', async ({ page }) => {
  await page.goto('/');
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(hasOverflow, `Horizontal overflow at ${width}px`).toBe(false);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  }
});

test('supports keyboard skip navigation and reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('main')).toBeFocused();
  const scrollBehavior = await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior);
  expect(scrollBehavior).toBe('auto');
});
