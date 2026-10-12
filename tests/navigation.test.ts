import { expect, test } from '@playwright/test';

test('navigates to sections and moves focus to the destination', async ({ page }) => {
  await page.goto('/');
  const menuButton = page.getByRole('button', { name: /menu/i });
  const isMobileMenu = await menuButton.isVisible();

  for (const section of [
    { label: 'About', heading: 'About Me', id: 'about' },
    { label: 'Experience', heading: 'Experience', id: 'experience' },
    { label: 'Projects', heading: 'Projects', id: 'projects' },
    { label: 'Education', heading: 'Education & Courses', id: 'education' },
    { label: 'Home', heading: 'Diego Quiñones', id: 'home' },
  ]) {
    if (isMobileMenu) await menuButton.click();
    await page.getByRole('navigation').getByRole('link', { name: section.label, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`#${section.id}$`));
    await expect(page.getByRole('region', { name: section.heading, exact: true })).toBeFocused();
    if (isMobileMenu) await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  }
});

test('mobile menu opens with the keyboard and closes on Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const menuButton = page.getByRole('button', { name: /menu/i });
  await menuButton.focus();
  await page.keyboard.press('Enter');
  await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Home', exact: true })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(menuButton).toBeFocused();
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Home', exact: true })).toBeHidden();
});
