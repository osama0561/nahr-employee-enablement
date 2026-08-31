const { test, expect } = require('@playwright/test');

for (const viewport of [{width:1440,height:1000},{width:390,height:844},{width:320,height:700}]) {
  test(`live site verifies at ${viewport.width}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('https://nahr-employee-enablement.vercel.app/', { waitUntil: 'networkidle' });
    await expect(page).toHaveTitle(/نهر/);
    await expect(page.getByRole('img', { name: 'نهر' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'من نخدم' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'القطاع الحكومي' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'القطاع الخاص' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'القطاع غير الربحي' })).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);
    const html = await page.content();
    for (const marker of ['ملفات نهر','PowerPoint','Excel','Markdown','lovable','v0.dev','bolt.new']) {
      expect(html).not.toContain(marker);
    }
  });
}
