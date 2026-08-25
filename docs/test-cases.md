# E-Commerce QA Test Cases

## 1. Document Overview

This document contains the functional, negative, UI, checkout, and API test cases designed for the E-Commerce Quality Engineering and Test Automation project.

The test cases are organized according to the major application areas:

- Authentication
- Products
- Shopping Cart
- Checkout
- API Testing

The test cases are used as the basis for both manual validation and automated Playwright testing where applicable.

---

# 2. Test Case Format

| Field | Description |
|---|---|
| Test Case ID | Unique identifier for the test case |
| Test Scenario | Description of the functionality being tested |
| Preconditions | Conditions required before execution |
| Test Steps | Actions required to execute the test |
| Expected Result | Expected application behaviour |
| Priority | Business/testing priority |
| Type | Positive, Negative, Validation, etc. |
| Automation Status | Whether the test is automated |
| Execution Status | Current execution result |

### Priority Levels

- **High** — Critical functionality or major user workflow
- **Medium** — Important functionality with moderate impact
- **Low** — Minor functionality or edge case

---

# 3. Authentication Test Cases

| ID | Test Scenario | Preconditions | Test Steps | Expected Result | Priority | Type | Automation Status | Execution Status |
|---|---|---|---|---|---|---|---|---|
| TC-AUTH-001 | Login with valid credentials | Login page is accessible | Enter valid username and password, then click Login | User is successfully logged in and redirected to the Products page | High | Positive | Automated | PASS |
| TC-AUTH-002 | Login with invalid username | Login page is accessible | Enter an invalid username and valid password, then click Login | Appropriate authentication error message is displayed | High | Negative | Automated | PASS |
| TC-AUTH-003 | Login with invalid password | Login page is accessible | Enter a valid username and invalid password, then click Login | Appropriate authentication error message is displayed | High | Negative | Automated | PASS |
| TC-AUTH-004 | Login with both invalid credentials | Login page is accessible | Enter invalid username and invalid password, then click Login | Authentication fails and an error message is displayed | High | Negative | Automated | PASS |
| TC-AUTH-005 | Login with empty username | Login page is accessible | Leave username empty, enter password, click Login | Required username validation message is displayed | High | Validation | Automated | PASS |
| TC-AUTH-006 | Login with empty password | Login page is accessible | Enter username, leave password empty, click Login | Required password validation message is displayed | High | Validation | Automated | PASS |
| TC-AUTH-007 | Login with both fields empty | Login page is accessible | Leave both fields empty and click Login | Required field validation is displayed | High | Validation | Automated | PASS |
| TC-AUTH-008 | Login using locked-out user | Login page is accessible | Enter credentials for a locked user and click Login | Appropriate locked-user error message is displayed | High | Negative | Automated | PASS |
| TC-AUTH-009 | Password field masks entered characters | Login page is accessible | Enter a password into the password field | Password characters are masked | Medium | UI Validation | Automated | PASS |
| TC-AUTH-010 | Username field accepts valid input | Login page is accessible | Enter a valid username | Username is entered successfully | Medium | Validation | Automated | PASS |
| TC-AUTH-011 | Password field accepts valid input | Login page is accessible | Enter a valid password | Password is entered successfully | Medium | Validation | Automated | PASS |
| TC-AUTH-012 | Login button is visible | Login page is accessible | Open the login page | Login button is displayed and available | Medium | UI Validation | Automated | PASS |
| TC-AUTH-013 | Login page loads correctly | Application is accessible | Navigate to the application URL | Login page and required elements are displayed | High | Smoke | Automated | PASS |
| TC-AUTH-014 | Invalid login does not navigate to Products | Login page is accessible | Enter invalid credentials and submit | User remains on login page | High | Negative | Automated | PASS |
| TC-AUTH-015 | Valid login navigates to Products page | Valid credentials are available | Log in using valid credentials | Products page is displayed | High | Positive | Automated | PASS |
| TC-AUTH-016 | Login error message is visible | Invalid credentials are submitted | Submit invalid credentials | Error message is displayed to the user | High | Negative | Automated | PASS |
| TC-AUTH-017 | Login error can be dismissed | Error message is displayed | Click the error close button | Error message is removed | Medium | UI Validation | Manual / To Verify | NOT VERIFIED |
| TC-AUTH-018 | Login after correcting invalid credentials | Invalid login has failed | Replace invalid credentials with valid credentials and submit | User successfully logs in | High | Positive | Automated | PASS |
| TC-AUTH-019 | Multiple consecutive invalid login attempts | Login page is accessible | Submit invalid credentials multiple times | Application continues to handle invalid authentication appropriately | Medium | Negative | Manual / To Verify | NOT VERIFIED |
| TC-AUTH-020 | Logout after successful login | User is logged in | Select Logout | User is returned to the login page | High | Positive | Automated | PASS |

---

# 4. Product Test Cases

| ID | Test Scenario | Preconditions | Test Steps | Expected Result | Priority | Type | Automation Status | Execution Status |
|---|---|---|---|---|---|---|---|---|
| TC-PROD-001 | Products page loads successfully | User is logged in | Navigate to Products page | Products page is displayed | High | Smoke | Automated | PASS |
| TC-PROD-002 | Products are displayed | User is on Products page | Inspect product listing | Available products are displayed | High | Functional | Automated | PASS |
| TC-PROD-003 | Product names are displayed | User is on Products page | Inspect product cards | Product names are displayed | Medium | UI Validation | Automated | PASS |
| TC-PROD-004 | Product prices are displayed | User is on Products page | Inspect product cards | Product prices are displayed | Medium | UI Validation | Automated | PASS |
| TC-PROD-005 | Product images are displayed | User is on Products page | Inspect product cards | Product images are displayed | Low | UI Validation | Automated | PASS |
| TC-PROD-006 | Add product to cart | User is on Products page | Select Add to Cart for a product | Product is added to the cart | High | Positive | Automated | PASS |
| TC-PROD-007 | Cart badge updates after adding product | Product has been added | Inspect cart badge | Cart badge reflects the number of selected products | High | Functional | Automated | PASS |
| TC-PROD-008 | Product sorting by price | User is on Products page | Select price sorting option | Products are sorted according to selected price order | Medium | Functional | Automated | PASS |
| TC-PROD-009 | Product sorting by name | User is on Products page | Select name sorting option | Products are sorted alphabetically according to selected order | Medium | Functional | Automated | PASS |
| TC-PROD-010 | Product details can be opened | User is on Products page | Select a product | Product details are displayed | Medium | Functional | Automated | PASS |
| TC-PROD-011 | Product details contain required information | Product details page is open | Inspect product details | Name, description and price are displayed | Medium | Validation | Automated | PASS |
| TC-PROD-012 | Navigation to cart from Products page | User is on Products page | Select cart icon | Cart page is displayed | High | Navigation | Automated | PASS |

---

# 5. Shopping Cart Test Cases

| ID | Test Scenario | Preconditions | Test Steps | Expected Result | Priority | Type | Automation Status | Execution Status |
|---|---|---|---|---|---|---|---|---|
| TC-CART-001 | Open empty cart | User is logged in | Navigate to Cart | Cart page is displayed with no products | Medium | Positive | Automated | PASS |
| TC-CART-002 | Add one product to cart | User is on Products page | Add one product to cart and open cart | Selected product appears in cart | High | Positive | Automated | PASS |
| TC-CART-003 | Add multiple products to cart | User is on Products page | Add multiple products and open cart | All selected products appear in cart | High | Positive | Automated | PASS |
| TC-CART-004 | Remove product from cart | Product exists in cart | Select Remove | Product is removed from cart | High | Positive | Automated | PASS |
| TC-CART-005 | Cart badge reflects product count | Products have been added | Inspect cart badge | Badge shows correct product count | Medium | Validation | Automated | PASS |
| TC-CART-006 | Continue shopping from cart | User is on Cart page | Select Continue Shopping | User is returned to Products page | Medium | Navigation | Automated | PASS |
| TC-CART-007 | Proceed to checkout from cart | Product exists in cart | Select Checkout | Checkout information page is displayed | High | Navigation | Automated | PASS |
| TC-CART-008 | Cart preserves selected product information | Product exists in cart | Inspect product information in cart | Product name, price and relevant details are correct | High | Validation | Automated | PASS |

---

# 6. Checkout Test Cases

| ID | Test Scenario | Preconditions | Test Steps | Expected Result | Priority | Type | Automation Status | Execution Status |
|---|---|---|---|---|---|---|---|---|
| TC-CHECKOUT-001 | Navigate to checkout | Product exists in cart | Select Checkout | Checkout information page is displayed | High | Positive | Automated | PASS |
| TC-CHECKOUT-002 | Checkout with valid customer information | Product exists in cart | Enter valid first name, last name and postal code and continue | Checkout overview page is displayed | High | Positive | Automated | PASS |
| TC-CHECKOUT-003 | Checkout with empty first name | Checkout page is open | Leave first name empty and submit | Required field error is displayed | High | Negative | Automated | PASS |
| TC-CHECKOUT-004 | Checkout with empty last name | Checkout page is open | Leave last name empty and submit | Required field error is displayed | High | Negative | Automated | PASS |
| TC-CHECKOUT-005 | Checkout with empty postal code | Checkout page is open | Leave postal code empty and submit | Required field error is displayed | High | Negative | Automated | PASS |
| TC-CHECKOUT-006 | Verify checkout overview | Valid customer information has been entered | Continue to checkout overview | Correct product and checkout information is displayed | High | Validation | Automated | PASS |
| TC-CHECKOUT-007 | Verify order summary | Checkout overview is displayed | Inspect subtotal, tax and total | Subtotal, tax and total values are displayed correctly | High | Validation | Automated | PASS |
| TC-CHECKOUT-008 | Verify product price in checkout | Checkout overview is displayed | Inspect selected product | Product price is displayed correctly | High | Validation | Automated | PASS |
| TC-CHECKOUT-009 | Complete order | Checkout overview is displayed | Select Finish | Order is successfully completed | High | Positive | Automated | PASS |
| TC-CHECKOUT-010 | Verify order confirmation | Order has been completed | Inspect confirmation page | Order confirmation message is displayed | High | Validation | Automated | PASS |
| TC-CHECKOUT-011 | Cancel checkout | Checkout page is open | Select Cancel | User is returned to the previous appropriate page | Medium | Navigation | Automated | PASS |
| TC-CHECKOUT-012 | Verify checkout workflow end-to-end | Valid product and customer information available | Login → select product → cart → checkout → finish | Complete workflow executes successfully | High | End-to-End | Automated | PASS |

---

# 7. API Test Cases

The API test suite validates REST API behaviour using Playwright API requests.

| ID | Test Scenario | Preconditions | Test Steps | Expected Result | Priority | Type | Automation Status | Execution Status |
|---|---|---|---|---|---|---|---|---|
| TC-API-001 | Retrieve products list | API is accessible | Send GET request to `/products` | Response returns successfully and contains product data | High | Positive | Automated | PASS |
| TC-API-002 | Retrieve a specific product | API is accessible | Send GET request to `/products/1` | Correct product response is returned | High | Positive | Automated | PASS |
| TC-API-003 | Request non-existent product | API is accessible | Send GET request to an invalid product ID | API returns an appropriate error/not-found response | High | Negative | Automated | PASS |
| TC-API-004 | Validate products response status | API is accessible | Send GET request to `/products` | HTTP status code indicates successful request | High | Validation | Automated | PASS |
| TC-API-005 | Validate product response structure | API is accessible | Request a product and inspect JSON response | Required product fields are present | High | Validation | Automated | PASS |
| TC-API-006 | Validate product ID | API is accessible | Request a known product | Returned product ID matches requested product | Medium | Validation | Automated | PASS |

---

# 8. Smoke Test Suite

The following tests represent the critical workflows that should be executed first when validating the application.

| ID | Scenario | Priority |
|---|---|---|
| TC-AUTH-001 | Login with valid credentials | High |
| TC-PROD-001 | Products page loads successfully | High |
| TC-PROD-006 | Add product to cart | High |
| TC-CART-007 | Proceed to checkout | High |
| TC-CHECKOUT-002 | Checkout with valid customer information | High |
| TC-CHECKOUT-009 | Complete order | High |
| TC-API-001 | Retrieve products list | High |
| TC-API-002 | Retrieve a specific product | High |

---

# 9. Regression Test Suite

The complete automated test suite can be used as a regression suite.

Regression testing verifies that existing functionality continues to work after:

- Code changes
- Test framework changes
- Configuration changes
- Locator changes
- Dependency updates
- CI/CD changes

The complete suite can be executed using:

```bash
npx playwright test