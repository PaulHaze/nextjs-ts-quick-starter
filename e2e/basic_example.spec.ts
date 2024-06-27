import { test, expect } from '@playwright/test';

test('should show the home page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Barebones TW Next Starter');
});
