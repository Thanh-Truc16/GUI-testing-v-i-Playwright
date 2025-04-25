const { test, expect } = require('@playwright/test');

test('Test đăng nhập thành công', async ({ page }) => {
  await page.goto('https://demoqa.com/login');
  
  // Điền thông tin đăng nhập
  await page.fill('#userName', 'testuser');
  await page.fill('#password', 'Password123!');
  
  // Click nút login
  await page.click('#login');
  
  // Verify đăng nhập thành công
  await expect(page.locator('#userName-value')).toHaveText('testuser');
  await expect(page).toHaveURL(/profile/);
});

test('Test đăng nhập thất bại', async ({ page }) => {
  await page.goto('https://demoqa.com/login');
  
  await page.fill('#userName', 'wronguser');
  await page.fill('#password', 'wrongpass');
  await page.click('#login');
  
  // Verify thông báo lỗi
  await expect(page.locator('#name')).toHaveText('Invalid username or password!');
});