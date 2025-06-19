# 🧪 Cucumber + Playwright Test Automation Framework

![CI](https://github.com/edimc2000/pw_cucumber_proj/actions/workflows/test.yml/badge.svg)

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
```bash
project-root/
│
├── tests/
│ ├── a-pages/ # Page Object Model (POM) classes
│ ├── b-features/ # Gherkin feature files
│ └── c-steps/ # Step definitions bound to features
│
├── support/ # Hooks and custom world setup
│ ├── cucumberhooks.js
│ └── customworld.js
│
├── .github/
│ └── workflows/ # GitHub Actions CI configs (e.g., test.yml)
│
├── reports/ # HTML and JUnit test reports
├── cucumber.js # Cucumber configuration
├── package.json # Scripts and dependencies
└── .env # Local environment settings (not committed)
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

### 3. 🧪 Run Tests
```bash
npm test
```

Run only @Smoke tests:
```bash
npm run test:smoke
```
Run only @Regression tests:
```bash
npm run test:regression
```


**📄 Example Feature: Dynamic Tables **
```bash
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