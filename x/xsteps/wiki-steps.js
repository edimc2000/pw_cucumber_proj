import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('I search for {string}', async function (query) {
  await this.wikiSearchPage.search(query);
});

Then('I see {string} in the url', async function (query) {
  await this.wikiSearchPage.waitForUrlToContain(query);
});

Then('I see {string} in the title', async function (query) {
  expect(await this.wikiSearchPage.getTitle()).toContain(query);
});

Then('I see {string} in the main heading', async function (query) {
  await expect(await this.page.getByRole('heading', { name: query }).first()).toBeVisible();
});


Then('I see following languages in order:', async function(datatable) {
  const count = await this.wikiSearchPage.topLanguageLabels.count();
  console.log('Count', count);

  for(let i = 0; i < count; i++) {
    expect(await this.wikiSearchPage.topLanguageLabels.nth(i).innerText()).toBe(datatable.rawTable[0][i]);
  }
});



Then('I verify below table', async function(datatable) {
	console.log(datatable);

  const data = datatable.rawTable;

  // First column
  for(let i = 0; i < data.length; i++) {
    console.log(data[i][0])
  }

  // First row
  console.log(data[0]);
});
