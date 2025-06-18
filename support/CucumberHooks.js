import { After, AfterAll, Before, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from '@playwright/test';
import { DynamicTablesPage } from "../tests/a-pages/DynamicTables.page.js";


// This file runs before/after anything else in the steps folder
setDefaultTimeout(60000);

BeforeAll(async function () {
  global.browser = await chromium.launch({
    headless: process.env.CI ? true : false,
  });
});

Before(async function () {
  this.browser = global.browser;
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();

  //page objects 
  this.dynamicTablesPage = new DynamicTablesPage(this.page)
});

After(async function () {
  await this.page.close();
  await this.context.close();
});

AfterAll(async function () {
  await this.browser?.close();
  // process.exit()


  setTimeout(() => {
    console.log("Timeout reached, exiting process.");
    process.exit(0); // Exit with a non-zero code to indicate an error/timeout
  }, 5000); // Exit after 5000 milliseconds (5 seconds)

  console.log("Process started, waiting for timeout...");
});