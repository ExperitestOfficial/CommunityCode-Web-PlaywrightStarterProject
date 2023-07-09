// @ts-check
const { test, expect } = require('@playwright/test');

test('Demo bank test', async ({ page }) => {
  await page.goto('https://demo-bank.ct.digital.ai/login');
  let userName = page.getByTestId('username').getByRole('textbox')
  await userName.type('company');
  let password = page.getByTestId('password').getByRole('textbox')
  await password.type('company');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Transfer Funds' }).click();
  
  let name = page.getByLabel('NAME');
  await name.type('John');
  let phone = page.getByLabel('PHONE');
  await phone.type('1-234-5678');
  let amount = page.getByLabel('AMOUNT');
  await amount.type('1000');
  let country = page.getByTestId('country').getByRole('textbox');
  await country.click();
  await page.getByRole('option', { name: 'India' }).click();
  await page.getByTestId('transfer-button').click();
 
});

