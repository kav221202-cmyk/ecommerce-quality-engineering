# E-Commerce Quality Engineering Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-Automation-45ba4b)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF)
![Testing](https://img.shields.io/badge/Testing-UI%20%7C%20API-orange)

## Project Overview

This project is a Quality Assurance and Test Automation framework developed to demonstrate practical software testing and automation engineering skills.

The project uses **Playwright with TypeScript** to automate an e-commerce web application and includes structured manual test cases, automated UI testing, API testing, defect documentation, Page Object Model architecture, test tagging, HTML reporting, and CI/CD integration using GitHub Actions.

The application under test is **SauceDemo**, a web-based e-commerce application designed for software testing practice.

The project follows a structured QA workflow:


Test Planning
     ↓
Test Case Design
     ↓
Manual Testing
     ↓
Defect Identification
     ↓
Test Automation
     ↓
Page Object Model
     ↓
API Testing
     ↓
Test Tagging
     ↓
CI/CD Integration
     ↓
Test Reporting
```

---

## Application Under Test

**Application:** SauceDemo

**Application Type:** E-commerce web application

**Website:** https://www.saucedemo.com/

The application provides functionality for:

- User authentication
- Product browsing
- Product sorting
- Shopping cart management
- Checkout
- Order completion
- Logout

---

# Objectives

The main objectives of this project are to:

- Understand and apply software QA principles
- Design structured manual test cases
- Perform functional and negative testing
- Identify and document defects
- Automate critical application workflows
- Build a reusable Playwright automation framework
- Apply the Page Object Model design pattern
- Perform API testing
- Implement smoke and regression test tagging
- Integrate automated tests with CI/CD
- Generate automated test reports
- Maintain a professional GitHub-based QA project

---

# Technologies & Tools

| Technology / Tool | Purpose |
|---|---|
| Playwright | UI and API test automation |
| TypeScript | Automation programming language |
| Node.js | JavaScript runtime |
| npm | Package management |
| Git | Version control |
| GitHub | Source code repository |
| GitHub Actions | CI/CD automation |
| dotenv | Environment configuration |
| HTML Reporter | Test reporting |
| VS Code | Development environment |

---

# Testing Scope

## Functional Areas Tested

### Authentication

- Successful login
- Invalid username
- Invalid password
- Empty username
- Empty password
- Empty credentials
- Logout
- Invalid credential combinations

### Products

- Product page visibility
- Product count
- Product names
- Product prices
- Product sorting
- Price low to high
- Price high to low
- Name A-Z
- Name Z-A
- Adding products to cart
- Adding multiple products to cart

### Shopping Cart

- Added product visibility
- Product price validation
- Multiple products
- Removing products
- Cart persistence
- Continue shopping
- Proceeding to checkout

### Checkout

- Checkout information page
- Valid customer information
- Required field validation
- Product overview
- Order summary
- Subtotal
- Tax
- Total
- Checkout cancellation
- Completing purchase
- Order confirmation

### API

Automated API tests validate product-related API behavior, including:

- Successful API response
- JSON response validation
- Product data validation
- Required product fields
- Single product retrieval
- Non-existent product handling

---

# Testing Types

The project currently includes:

- Functional Testing
- Negative Testing
- Smoke Testing
- Regression Testing
- End-to-End Testing
- UI Testing
- API Testing
- Automated Testing
- CI/CD Testing

Additional testing types such as accessibility, performance, security and database validation can be added as future extensions.

---

# Test Automation Framework

The project uses **Playwright with TypeScript**.

The framework is designed around reusable components rather than placing all test logic directly inside test files.

## Page Object Model

The project uses the **Page Object Model (POM)** design pattern.

Page objects contain:

- Page locators
- Page-specific actions
- Reusable interactions

This helps reduce duplication and makes the automation framework easier to maintain.

Example structure:


Test Case
    ↓
Page Object
    ↓
Locator / Action
    ↓
Application
```

---

# Project Structure

```text
ecommerce-quality-engineering/
│
├── api-tests/
│   └── products-api.spec.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   ├── CheckoutInformationPage.ts
│   ├── CheckoutOverviewPage.ts
│   └── CheckoutCompletePage.ts
│
├── tests/
│   ├── login.spec.ts
│   ├── products.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
│
├── test-data/
├    ├── users.ts
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── defects.md
├── test-cases.md
├── test-plan.md
├── playwright.config.ts
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

> The exact page-object and test-data filenames may vary depending on the current implementation.

---

# Test Organization

The automated tests are organized by functional area.


Authentication
     │
     ├── Login
     └── Logout

Products
     │
     ├── Product validation
     ├── Sorting
     └── Add to cart

Cart
     │
     ├── Product validation
     ├── Remove product
     └── Checkout navigation

Checkout
     │
     ├── Customer information
     ├── Order overview
     ├── Order summary
     └── Order completion

API
     │
     └── Product API validation
```

---

# Test Tags

The framework uses Playwright test tags to allow selective test execution.

## Smoke Tests

Critical tests are tagged with:


@smoke


Run smoke tests using:

```bash
npx playwright test --grep "@smoke"
```

## API Tests

API tests are tagged with:


@api


Run API tests using:

```bash
npx playwright test --grep "@api"
```

## Regression Tests

Regression tests are tagged with:


@regression


Run regression tests using:

```bash
npx playwright test --grep ".*@regression.*"
```

This allows the test suite to be executed selectively depending on the testing requirement.

---

# Running the Project Locally

## 1. Clone the repository

```bash
git clone https://github.com/kav221202-cmyk/ecommerce-quality-engineering
```

Navigate into the project:

```bash
cd ecommerce-quality-engineering
```

## 2. Install dependencies

```bash
npm install
```

## 3. Install Playwright browsers

```bash
npx playwright install
```

## 4. Configure environment variables

Create a `.env` file in the project root.

Example:

```env
BASE_URL=https://www.saucedemo.com
API_BASE_URL=https://dummyjson.com
```

The `.env` file should not be committed to GitHub if it contains private or environment-specific values.

## 5. Run all tests

```bash
npx playwright test
```

## 6. Run tests in headed mode

```bash
npx playwright test --headed
```

## 7. Run smoke tests

```bash
npx playwright test --grep "@smoke"
```

## 8. Run API tests

```bash
npx playwright test --grep "@api"
```

## 9. Run regression tests

```bash
npx playwright test --grep ".*@regression.*"
```

---

# Test Reporting

The project uses the Playwright HTML Reporter.

After running the tests, the report can be opened using:

```bash
npx playwright show-report
```

The report provides information such as:

- Passed tests
- Failed tests
- Test duration
- Test steps
- Screenshots
- Videos
- Traces for failed tests

---

# Failure Investigation

Playwright is configured to collect additional debugging information when tests fail.

Depending on the configuration, this can include:

- Screenshots
- Videos
- Trace files
- Error context

A trace can be inspected using:

```bash
npx playwright show-trace <trace-file>
```

This helps investigate failures and identify whether they are caused by:

- Application behavior
- Locator issues
- Timing problems
- Environment problems
- Network issues
- Test implementation problems

---

# Defect Management

Defects identified during testing are documented in:


defects.md


The defect documentation records information such as:

- Defect ID
- Test case
- Description
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Priority
- Status

This demonstrates the complete QA process from identifying a problem to documenting it.

---

# Manual Test Documentation

Manual test cases are maintained in:


test-cases.md


The test cases cover the main functional areas of the application.

The project also contains:


test-plan.md


which defines the testing objectives, scope, environment, testing approach, entry criteria, exit criteria and deliverables.

---

# CI/CD Integration

The project uses **GitHub Actions** to automatically execute the Playwright test suite when changes are pushed to the repository.

The workflow is located at:


.github/workflows/


The CI pipeline performs tasks such as:

Checkout Repository
        ↓
Setup Node.js
        ↓
Install Dependencies
        ↓
Install Playwright Browsers
        ↓
Run Playwright Tests
        ↓
Upload Test Report
        ↓
Upload Test Results
```

This allows automated tests to run consistently in a clean environment instead of relying only on local execution.

---

# Quality Assurance Workflow

The project demonstrates a complete QA workflow:


Requirement / Application
          ↓
     Test Planning
          ↓
    Test Case Design
          ↓
     Manual Testing
          ↓
   Defect Documentation
          ↓
    Test Automation
          ↓
     Page Objects
          ↓
       API Tests
          ↓
     Test Tagging
          ↓
      CI / CD
          ↓
    Test Reporting
          ↓
 Regression Testing


---

# Skills Demonstrated

This project demonstrates practical experience with:

### Manual Testing

- Test case design
- Test scenarios
- Functional testing
- Negative testing
- Regression testing
- Smoke testing
- Defect reporting
- Test documentation

### Automation Testing

- Playwright
- TypeScript
- Locator strategies
- Assertions
- Test organization
- Page Object Model
- Reusable automation
- Test tagging
- API automation
- Automated reporting

### Software Engineering

- Git
- GitHub
- Branch/commit workflow
- npm
- Environment configuration
- CI/CD
- GitHub Actions

### QA Engineering Practices

- Test planning
- Test execution
- Failure analysis
- Defect management
- Regression testing
- Continuous testing
- Test maintainability

---

# Future Improvements

The framework can be extended with:

- Cross-browser execution using Chromium, Firefox and WebKit
- Accessibility testing
- Performance testing
- Security-focused testing
- Database validation
- Visual regression testing
- More API coverage
- Test data factories
- Improved test fixtures
- Parallel CI execution
- Scheduled regression testing
- Advanced reporting
- Integration with external defect management tools

---

# Project Status

## Completed

- [x] Test planning
- [x] Manual test cases
- [x] Defect documentation
- [x] Authentication automation
- [x] Product automation
- [x] Shopping cart automation
- [x] Checkout automation
- [x] Page Object Model
- [x] API testing
- [x] Environment configuration
- [x] Test tagging
- [x] HTML reporting
- [x] Git/GitHub integration
- [x] GitHub Actions CI/CD

---

# Author

**Kavindya Himaransi**

Computer Science Student

This project was developed as a practical Quality Assurance and Test Automation portfolio project to develop skills relevant to QA Engineer and Software Test Automation.

---

# Disclaimer

SauceDemo is used as a test application for educational and portfolio purposes.

No real customer information or financial transactions are involved in this project.