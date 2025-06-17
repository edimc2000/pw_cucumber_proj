import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given(/^the user is on "([^"]*)"$/, async function (url) {
    await this.dynamicTablesPage.goto(url);
})

Then(/^the user should see the “([^”]+)” heading$/, async function (heading) {
    expect(await this.dynamicTablesPage.getHeaderMain).toHaveText(heading)
});

Then(`the user should see the table with the headers below`, async function (DataTable) {
    const expectedDataArr = DataTable.rawTable[0] // array
    const pageDataArr = await this.dynamicTablesPage.getTableHeaders.allInnerTexts() // array
    expect(pageDataArr.join('')).toBe(expectedDataArr.join(''))
});

Then(`the user should see the table with the rows below`, async function (DataTable) {

    const expectedDataArr = DataTable.rawTable
    const pageDataArr = await this.dynamicTablesPage.getTableContent.allInnerTexts()
    expect(pageDataArr.join('').replace(/\s+/g, ',')).toBe(expectedDataArr.join(''))
});

Then(/^the user should see the “([^”]+)” button is enabled$/, async function (buttonName) {
    buttonName === 'X'
        ? expect(await this.page.locator('[aria-label="close"]').isEnabled()).toBe(true)
        : expect(await this.page.getByRole('button', { name: buttonName }).isEnabled()).toBe(true)
});

Then(/^the user should see the “Total = \$([\d,]+)” text displayed$/, async function (expectedAmount) {
    const pageDisplayTotal = await this.dynamicTablesPage.getTextTotalAmount.innerText()
    const expectedDisplayAmount = expectedAmount
    expect(pageDisplayTotal.slice(9)).toBe(expectedDisplayAmount)
});

When(/^the user clicks on the “([^”]+)” button$/, async function (buttonName) {
    buttonName === 'X'
        ? await this.page.locator('[aria-label="close"]').click()
        : await this.page.getByRole('button', { name: buttonName }).click()
});

Then(/^the user should see the “([^”]+)” modal with its heading$/, async function (modalTitle) {
    console.log('Modal Title: ', await this.dynamicTablesPage.getTextModalTitle.innerText()) // debugging 
    expect(await this.dynamicTablesPage.getTextModalTitle.innerText()).toBe(modalTitle)
});

Then(/^the user should see the “([^”]+)” label$/, async function (label) {
    const actualPageValues = (await this.page.locator(`#name_form label`).allInnerTexts()).join(' ')
    expect(await actualPageValues).toContain(label)
});

Then(/^the user should see the “([^”]+)” input box is enabled$/, async function (inputID) {
    const actualPageValues = await this.page.locator(`#${inputID.toLowerCase()}`)
    expect.soft(await actualPageValues.isEnabled()).toBe(true)
});

Then(`the user should not see the “Add New Product” modal`, async function () {
    expect.soft(await this.dynamicTablesPage.getTextModalTitle).not.toBeAttached()
});