# E-Commerce QA Test Plan

## 1. Project Overview

This project focuses on Quality Assurance and Test Automation for an e-commerce web application.

The project demonstrates a structured software testing process including test planning, manual test case design, functional testing, UI automation, API testing, defect investigation, test reporting, and CI/CD integration.

The objective is to develop a maintainable automation framework while applying practical QA engineering principles.

---

## 2. Application Under Test

**Application:** SauceDemo

**Application Type:** E-commerce web application

**UI Application URL:** https://www.saucedemo.com

**API Application:** DummyJSON

**API Base URL:** https://dummyjson.com

---

## 3. Testing Objectives

The main objectives of this project are:

- Verify that core application functionality behaves as expected.
- Validate the authentication workflow.
- Validate product browsing and product-related functionality.
- Validate shopping cart functionality.
- Validate the checkout workflow.
- Verify positive and negative application scenarios.
- Identify and document defects or automation issues.
- Develop reusable automated UI tests using Playwright.
- Develop automated API tests.
- Apply the Page Object Model design pattern.
- Implement environment-based configuration.
- Generate automated test reports.
- Capture screenshots, videos, and traces for failed UI tests.
- Implement smoke and regression test tagging.
- Integrate automated testing into a CI/CD pipeline using GitHub Actions.
- Demonstrate a maintainable and scalable QA automation framework.

---

## 4. Scope

### 4.1 In Scope

The following areas are currently covered by the project:

- User authentication
- Login validation
- Logout
- Product browsing
- Product information validation
- Product sorting
- Shopping cart
- Adding products to cart
- Removing products from cart
- Cart validation
- Checkout
- Customer information validation
- Checkout overview
- Order summary validation
- Order completion
- Negative testing
- UI functional testing
- End-to-end testing
- REST API testing
- API response validation
- API negative testing
- Automated regression testing
- Smoke testing
- Test tagging
- Test reporting
- Failure evidence collection
- CI/CD execution using GitHub Actions

### 4.2 Out of Scope

The following areas are outside the current implementation:

- Real payment processing
- Real financial transactions
- Real customer data
- Production infrastructure testing
- Database-level testing
- Load and stress testing
- Full security penetration testing
- Production environment testing
- Comprehensive accessibility compliance testing

---

## 5. Testing Approach

The project follows a layered testing approach combining manual testing, UI automation, API testing, regression testing, and CI/CD execution.

### 5.1 Manual Testing

Manual test scenarios are designed to identify functional requirements and expected application behaviour.

Manual testing is used to:

- Validate application workflows.
- Identify functional issues.
- Define expected results.
- Design test scenarios for automation.
- Verify positive and negative scenarios.
- Provide a basis for regression testing.

Manual test cases are documented in:

`test-cases.md`

### 5.2 UI Automation

Playwright with TypeScript is used to automate important end-to-end user workflows.

The UI automation covers:

- Authentication
- Product functionality
- Shopping cart
- Checkout
- Order completion

The automation framework follows the **Page Object Model (POM)** design pattern to improve:

- Reusability
- Maintainability
- Readability
- Separation of test logic and page-specific implementation

### 5.3 API Testing

Playwright API request functionality is used to validate REST API endpoints.

API testing includes:

- HTTP status code validation
- Response header validation
- JSON response validation
- Response structure validation
- Required field validation
- Product ID validation
- Negative API testing

The API tests use DummyJSON as the API application under test.

### 5.4 Smoke Testing

Smoke tests are used to verify critical application functionality before broader test execution.

Tests identified as smoke tests are tagged using:

`@smoke`

Smoke tests can be executed using:

```bash
npx playwright test --grep "@smoke"