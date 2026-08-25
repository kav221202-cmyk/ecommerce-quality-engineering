# E-Commerce Quality Engineering & Test Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-2E2E2E?logo=playwright)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-2088FF?logo=github-actions&logoColor=white)

## Overview

This project is an end-to-end Quality Engineering and Test Automation framework developed using Playwright and TypeScript.

The project automates functional UI testing and API testing for an e-commerce application. It demonstrates practical QA engineering concepts including Page Object Model, test data management, API testing, assertions, negative testing, failure investigation, test reporting, and CI/CD integration using GitHub Actions.

The goal of this project is to build a maintainable and scalable automation framework while applying real-world software testing practices.

---

## Technologies Used

- Playwright
- TypeScript
- Node.js
- JavaScript/TypeScript Assertions
- REST API Testing
- Git
- GitHub
- GitHub Actions
- HTML Test Reporting
- Screenshots, Videos and Traces

---

## Application Under Test

The UI automation is performed against:

**SauceDemo**

The API automation is performed against:

**DummyJSON**

---

# Testing Scope

## 1. Authentication Testing

Automated scenarios include:

- Login with valid credentials
- Login with invalid credentials
- Login with empty username
- Login with empty password
- Login with both fields empty
- Authentication validation

---

## 2. Product Testing

Automated scenarios include:

- Product page navigation
- Product visibility
- Product information validation
- Product selection
- Product sorting/filtering scenarios

---

## 3. Shopping Cart Testing

Automated scenarios include:

- Adding products to cart
- Removing products from cart
- Cart item validation
- Cart quantity validation
- Cart total/product information validation

---

## 4. Checkout Testing

Automated scenarios include:

- Checkout navigation
- Customer information validation
- Required field validation
- Checkout overview validation
- Product information validation
- Subtotal validation
- Tax validation
- Total validation
- Order completion
- Checkout negative scenarios

---

# API Testing

API automation is implemented using Playwright's API request functionality.

The API test suite validates:

- HTTP status codes
- JSON response headers
- Response body structure
- Product data
- Required response fields
- Product IDs
- Negative API scenarios
- Non-existent product handling

### API Endpoints Tested

```text
GET /products
GET /products/1
GET /products/99999