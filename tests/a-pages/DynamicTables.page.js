export class DynamicTablesPage {
  constructor(page) {
    this.page = page

    //locators
    this.getHeaderMain = this.page.locator('h1.is-size-3')
    this.getTableHeaders = this.page.locator('th')
    this.getTableContent = this.page.locator('tbody tr')
    this.getTextTotalAmount = this.page.locator('#total_amount')

    // locators modal
    this.getTextModalTitle = this.page.locator('#modal_title')

  }

  // Reusable methods
  async goto(url) {
    await this.page.goto(url);
  }

  async waitForUrlToContain(str) {
    await this.page.waitForURL(`**/${str}`);
  }

  async getTitle() {
    return await this.page.title();
  }

  async wait(ms) {
    await this.page.waitForTimeout(ms);
  }
}