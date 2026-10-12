import { readFile } from 'node:fs/promises';
import { expect, test } from '@playwright/test';

test('contact link addresses Diego with the exact requested email message', async ({ page }) => {
  await page.goto('/');
  const href = await page.getByRole('link', { name: 'Contact Me', exact: true }).getAttribute('href');
  const mailto = new URL(href ?? '');
  expect(mailto.protocol).toBe('mailto:');
  expect(mailto.pathname).toBe('diegoqr2000@gmail.com');
  expect(mailto.searchParams.get('body')).toBe('Hello Diego, we are interested in your curriculum and we would like to know if we can schedule a meeting with you.');
});

test('downloads the actual CV PDF from the production build', async ({ page }) => {
  await page.goto('/');
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download My CV', exact: true }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('Diego-Quinones-CV.pdf');
  expect(await download.failure()).toBeNull();
  const downloadPath = await download.path();
  if (!downloadPath) throw new Error('The CV download did not produce a file.');
  const downloadedCv = await readFile(downloadPath);
  const originalCv = await readFile(new URL('../assets/CV/Diego Quinones - CV.pdf', import.meta.url));
  expect(downloadedCv.equals(originalCv)).toBe(true);
});
