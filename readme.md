# 🧪 Cucumber + Playwright Test Automation Framework


A modern, scalable end-to-end testing framework using [Cucumber.js](https://github.com/cucumber/cucumber-js) and [Playwright](https://playwright.dev/), based on the Page Object Model (POM) pattern.

---

## ⚙️ Tech Stack

- **Playwright** – Cross-browser automation (Chromium, Firefox, WebKit)
- **Cucumber.js** – BDD with Gherkin syntax
- **Node.js** – JavaScript runtime
- **Dotenv** – Manage environment variables
- **Pretty Formatter** – Clean CLI output
- **HTML + JUnit Reports** – Auto-generated test reports

---

## 📁 Project Structure

```
project-root/
│
├── tests/
│   ├── a-pages/            # Page Object Model (POM) classes
│   ├── b-features/         # Gherkin feature files
│   └── c-steps/            # Step definitions bound to features
│
├── support/                # Hooks and custom world setup
│   ├── cucumberhooks.js
│   └── customworld.js
│
├── .github/
│   └── workflows/          # GitHub Actions CI configs (e.g., test.yml)
│
├── reports/                # HTML and JUnit test reports
├── cucumber.js             # Cucumber configuration
├── package.json            # Scripts and dependencies
└── .env                    # Local environment settings (not committed)
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/edimc2000/pw_cucumber_proj.git
cd pw_cucumber_proj
```

### 2. Install dependencies

```bash
npm install
npx playwright install
```

---

## 🧪 Run Tests

Run **all** scenarios:
```bash
npm test
```

Run only `@Smoke` tests:
```bash
npm run test:smoke
```

Run only `@Regression` tests:
```bash
npm run test:regression
```

Run only `@Only` tagged tests:
```bash
npm run only
```

---

## 📄 Example Feature: Dynamic Tables

Located in `tests/b-features/`

```gherkin
@FrontendTesting
Feature: Dynamic Tables

  Background:
    Given the user is on "https://techglobal-training.com/frontend/dynamic-tables/"

  Scenario: Validate default inventory table
    Then the user should see the “Inventory” heading
    And the user should see the table with the headers below
      | Quantity | Product | Price $ | Total $ |
    And the user should see the table with the rows below
      | 1 | iPhone  | 1,000 | 1,000 |
      | 3 | Airpods | 100   | 300   |
      | 2 | iPad    | 500   | 1,000 |
    And the user should see the “ADD PRODUCT” button is enabled
    And the user should see the “Total = $2,300” text displayed
```

---

## ✍️ Example Step Definitions

Located in `tests/c-steps/`

```js
Then(/^the user should see the “([^”]+)” heading$/, async function (heading) {
  expect(await this.dynamicTablesPage.getHeaderMain).toHaveText(heading)
});

Then(/^the user should see the “([^”]+)” button is enabled$/, async function (buttonName) {
  buttonName === 'X'
    ? expect(await this.page.locator('[aria-label="close"]').isEnabled()).toBe(true)
    : expect(await this.page.getByRole('button', { name: buttonName }).isEnabled()).toBe(true)
});
```

---

## 🧾 Test Reports

After each run, test results are automatically generated in the `reports/` folder:

- **HTML Report:** `cucumber-report.html`
- **JUnit XML Report:** `cucumber-report.xml`

---

## 🔐 Environment Configuration

Create a `.env` file in the root to store environment variables:

```env
BASE_URL=https://example.com
USERNAME=testuser
PASSWORD=secret123
```

These are accessed using `process.env` and loaded via the `dotenv` package.

---

## 🚀 CI/CD with GitHub Actions

This project uses GitHub Actions (`.github/workflows/test.yml`) for automated test execution on every push or pull request.

✅ Automatically runs:
- `npm install`
- `npx playwright install`
- `npm test`

🔗 [GitHub Actions Dashboard](https://github.com/edimc2000/pw_cucumber_proj/actions)

---

## 📚 Best Practices

- Use **tags** to group tests (`@Smoke`, `@Regression`, `@Only`)
- Encapsulate UI logic in **POM classes** under `a-pages/`
- Keep Gherkin steps readable and business-focused
- Keep logic out of step definitions — delegate to page objects

---

## 🤝 Contributing

We welcome contributions! To get started:

1. Fork this repository
2. Create a feature branch
3. Commit your changes
4. Submit a Pull Request

---

## 📄 License

Licensed under the [ISC License](https://opensource.org/licenses/ISC)

---

## 🙌 Acknowledgments

- [Playwright](https://playwright.dev/)
- [Cucumber.js](https://github.com/cucumber/cucumber-js)
- [Dotenv](https://github.com/motdotla/dotenv)
