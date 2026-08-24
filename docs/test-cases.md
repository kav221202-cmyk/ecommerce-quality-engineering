# Authentication Test Cases

## TC-AUTH-001 — Successful Login

**Module:** Authentication
**Priority:** High
**Test Type:** Positive
**Precondition:** User is on the SauceDemo login page.

**Test Data:**

* Username: `standard_user`
* Password: `secret_sauce`

**Steps:**

1. Open the SauceDemo login page.
2. Enter `standard_user` in the Username field.
3. Enter `secret_sauce` in the Password field.
4. Click the **Login** button.

**Expected Result:**
The user should be successfully authenticated and redirected to the Products page.

**Status:** PASS

---

## TC-AUTH-002 — Login With Invalid Credentials

**Module:** Authentication
**Priority:** High
**Test Type:** Negative
**Precondition:** User is on the SauceDemo login page.

**Test Data:**

* Username: `invalid_user`
* Password: `invalid_password`

**Steps:**

1. Open the SauceDemo login page.
2. Enter an invalid username.
3. Enter an invalid password.
4. Click the **Login** button.

**Expected Result:**
The user should not be logged in. An appropriate error message should be displayed.

**Status:** PASS

---

## TC-AUTH-003 — Login With Empty Username

**Module:** Authentication
**Priority:** High
**Test Type:** Negative
**Precondition:** User is on the SauceDemo login page.

**Test Data:**

* Username: Empty
* Password: `secret_sauce`

**Steps:**

1. Open the SauceDemo login page.
2. Leave the Username field empty.
3. Enter `secret_sauce` in the Password field.
4. Click the **Login** button.

**Expected Result:**
Login should fail and an appropriate validation/error message should be displayed indicating that the username is required.

**Status:** PASS

---

## TC-AUTH-004 — Login With Empty Password

**Module:** Authentication
**Priority:** High
**Test Type:** Negative
**Precondition:** User is on the SauceDemo login page.

**Test Data:**

* Username: `standard_user`
* Password: Empty

**Steps:**

1. Open the SauceDemo login page.
2. Enter `standard_user` in the Username field.
3. Leave the Password field empty.
4. Click the **Login** button.

**Expected Result:**
Login should fail and an appropriate validation/error message should be displayed indicating that the password is required.

**Status:** PASS

---

## TC-AUTH-005 — Login With Both Fields Empty

**Module:** Authentication
**Priority:** High
**Test Type:** Negative
**Precondition:** User is on the SauceDemo login page.

**Test Data:**

* Username: Empty
* Password: Empty

**Steps:**

1. Open the SauceDemo login page.
2. Leave the Username field empty.
3. Leave the Password field empty.
4. Click the **Login** button.

**Expected Result:**
Login should fail and an appropriate validation/error message should be displayed.

**Status:** PASS

---

## TC-AUTH-006 — Login With Locked-Out User

**Module:** Authentication
**Priority:** High
**Test Type:** Negative
**Precondition:** User is on the SauceDemo login page.

**Test Data:**

* Username: `locked_out_user`
* Password: `secret_sauce`

**Steps:**

1. Open the SauceDemo login page.
2. Enter `locked_out_user` in the Username field.
3. Enter `secret_sauce` in the Password field.
4. Click the **Login** button.

**Expected Result:**
The user should not be allowed to log in. An appropriate message indicating that the user has been locked out should be displayed.

**Status:** PASS

---

## TC-AUTH-007 — Valid Username With Invalid Password

**Module:** Authentication
**Priority:** High
**Test Type:** Negative
**Precondition:** User is on the SauceDemo login page.

**Test Data:**

* Username: `standard_user`
* Password: `wrong_password`

**Steps:**

1. Open the SauceDemo login page.
2. Enter `standard_user` in the Username field.
3. Enter an incorrect password.
4. Click the **Login** button.

**Expected Result:**
The user should not be authenticated and an appropriate error message should be displayed.

**Status:** PASS

---

## TC-AUTH-008 — Invalid Username With Valid Password

**Module:** Authentication
**Priority:** High
**Test Type:** Negative
**Precondition:** User is on the SauceDemo login page.

**Test Data:**

* Username: `invalid_user`
* Password: `secret_sauce`

**Steps:**

1. Open the SauceDemo login page.
2. Enter an invalid username.
3. Enter `secret_sauce` in the Password field.
4. Click the **Login** button.

**Expected Result:**
The user should not be authenticated and an appropriate error message should be displayed.

**Status:** PASS

---

## TC-AUTH-009 — Password Field Masks Password

**Module:** Authentication
**Priority:** Medium
**Test Type:** UI/Functional
**Precondition:** User is on the SauceDemo login page.

**Test Data:**

* Password: `secret_sauce`

**Steps:**

1. Open the SauceDemo login page.
2. Click the Password field.
3. Enter `secret_sauce`.

**Expected Result:**
The password characters should be masked and should not be displayed as readable text.

**Status:** PASS

---

## TC-AUTH-010 — Login Button Functionality

**Module:** Authentication
**Priority:** High
**Test Type:** Functional
**Precondition:** User is on the SauceDemo login page.

**Test Data:**

* Valid username
* Valid password

**Steps:**

1. Open the SauceDemo login page.
2. Enter valid credentials.
3. Click the **Login** button.

**Expected Result:**
The Login button should respond to the user's action and initiate the authentication process.

**Status:** PASS

---

## TC-AUTH-011 — Successful Logout

**Module:** Authentication
**Priority:** High
**Test Type:** Positive
**Precondition:** User is successfully logged in.

**Steps:**

1. Log in using valid credentials.
2. Open the application menu.
3. Click **Logout**.

**Expected Result:**
The user should be logged out and redirected to the login page.

**Status:** PASS

---

## TC-AUTH-012 — Access Protected Page After Logout

**Module:** Authentication
**Priority:** High
**Test Type:** Security/Negative
**Precondition:** User has successfully logged in and then logged out.

**Steps:**

1. Log in using valid credentials.
2. Log out.
3. Use browser navigation to attempt to return to the previously authenticated page.

**Expected Result:**
The application should not allow an unauthenticated user to access protected content.


**Status:** PASS

---

## TC-AUTH-013 — Login Page UI Elements

**Module:** Authentication
**Priority:** Medium
**Test Type:** UI
**Precondition:** User opens the SauceDemo login page.

**Steps:**

1. Open the SauceDemo login page.
2. Verify the Username field.
3. Verify the Password field.
4. Verify the Login button.
5. Verify the page logo.
6. Verify the overall page layout.

**Expected Result:**
All required login page elements should be visible, correctly positioned, readable and usable.

**Status:** PASS

---

## TC-AUTH-014 — Username Field Accepts User Input

**Module:** Authentication
**Priority:** Medium
**Test Type:** Functional
**Precondition:** User is on the SauceDemo login page.

**Steps:**

1. Click the Username field.
2. Enter `standard_user`.

**Expected Result:**
The Username field should accept and display the entered username.

**Status:** PASS

---

## TC-AUTH-015 — Password Field Accepts User Input

**Module:** Authentication
**Priority:** Medium
**Test Type:** Functional
**Precondition:** User is on the SauceDemo login page.

**Steps:**

1. Click the Password field.
2. Enter `secret_sauce`.

**Expected Result:**
The Password field should accept the entered password while masking the characters.

**Status:** PASS

---

## TC-AUTH-016 — Login Using Keyboard

**Module:** Authentication
**Priority:** Medium
**Test Type:** Usability/Functional
**Precondition:** User is on the SauceDemo login page.

**Steps:**

1. Enter a valid username.
2. Enter a valid password.
3. Use the keyboard to submit the login form instead of clicking the Login button.

**Expected Result:**
The login form should be submitted successfully using keyboard interaction.

**Status:** PASS

---

## TC-AUTH-017 — Error Message Is Displayed For Failed Login

**Module:** Authentication
**Priority:** High
**Test Type:** Negative/UI
**Precondition:** User is on the SauceDemo login page.

**Steps:**

1. Enter invalid login credentials.
2. Click the **Login** button.

**Expected Result:**
An appropriate error message should be displayed clearly to the user.

**Status:** PASS

---

## TC-AUTH-018 — Error Message Can Be Dismissed

**Module:** Authentication
**Priority:** Low
**Test Type:** UI/Functional
**Precondition:** An authentication error message is displayed.

**Steps:**

1. Perform an invalid login attempt.
2. Locate the error message.
3. Click the close/dismiss control if available.

**Expected Result:**
The error message should be dismissed and removed from the interface.

**Status:** PASS

---

## TC-AUTH-019 — Login After Correcting Invalid Credentials

**Module:** Authentication
**Priority:** High
**Test Type:** Positive/Negative
**Precondition:** An invalid login attempt has been made.

**Steps:**

1. Enter invalid login credentials.
2. Click Login.
3. Verify the error message.
4. Replace the invalid credentials with valid credentials.
5. Click Login again.

**Expected Result:**
The previous failed attempt should not prevent the user from successfully logging in with valid credentials.

**Status:** PASS

---

## TC-AUTH-020 — Multiple Consecutive Invalid Login Attempts

**Module:** Authentication
**Priority:** Medium
**Test Type:** Negative/Security
**Precondition:** User is on the login page.

**Steps:**

1. Enter invalid credentials.
2. Click Login.
3. Repeat the invalid login attempt several times.

**Expected Result:**
The application should consistently reject invalid credentials and remain responsive without unexpected behavior.

**Status:** PASS



# Products Test Cases

## TC-PROD-001 — Products Page Displayed After Login

**Priority:** High  
**Type:** Positive  
**Precondition:** User has successfully logged in.

**Steps:**
1. Log in using valid credentials.
2. Observe the Products page.

**Expected Result:**
The Products page should be displayed successfully and available products should be visible.


**Status:** PASS

---

## TC-PROD-002 — Product Names Are Displayed

**Priority:** Medium  
**Type:** UI  
**Precondition:** User is on the Products page.

**Steps:**
1. Observe the products displayed.
2. Check each product.

**Expected Result:**
Each product should have a clearly visible product name.


**Status:** PASS

---

## TC-PROD-003 — Product Prices Are Displayed

**Priority:** Medium  
**Type:** UI  
**Precondition:** User is on the Products page.

**Steps:**
1. Observe the products.
2. Check the displayed prices.

**Expected Result:**
Each product should display a price clearly.


**Status:** PASS

---

## TC-PROD-004 — Product Images Are Displayed

**Priority:** Medium  
**Type:** UI  
**Precondition:** User is on the Products page.

**Steps:**
1. Observe each product.
2. Check the product image.

**Expected Result:**
Each product should display the correct product image without broken-image indicators.

**Status:** PASS

---

## TC-PROD-005 — Product Descriptions Are Displayed

**Priority:** Medium  
**Type:** UI  
**Precondition:** User is on the Products page.

**Steps:**
1. Observe the product cards.
2. Check the product descriptions.

**Expected Result:**
Each product should have a visible and readable description.


**Status:** PASS

---

## TC-PROD-006 — Open Product Details

**Priority:** High  
**Type:** Functional  
**Precondition:** User is on the Products page.

**Steps:**
1. Select a product.
2. Click the product name or image.

**Expected Result:**
The selected product's details page should open and display the correct product information.

**Status:** PASS

---

## TC-PROD-007 — Product Details Match Product Listing

**Priority:** High  
**Type:** Functional  
**Precondition:** User is on the Products page.

**Steps:**
1. Note the name and price of a product.
2. Open the product details page.
3. Compare the product information.

**Expected Result:**
The product name, price, image and description should match the information displayed on the Products page.


**Status:** PASS

---

## TC-PROD-008 — Sort Products By Name A to Z

**Priority:** Medium  
**Type:** Functional  
**Precondition:** User is on the Products page.

**Steps:**
1. Open the sorting dropdown.
2. Select Name (A to Z).
3. Observe the product order.

**Expected Result:**
Products should be displayed in alphabetical order from A to Z.

**Status:** PASS

---

## TC-PROD-009 — Sort Products By Name Z to A

**Priority:** Medium  
**Type:** Functional  
**Precondition:** User is on the Products page.

**Steps:**
1. Open the sorting dropdown.
2. Select Name (Z to A).
3. Observe the product order.

**Expected Result:**
Products should be displayed in reverse alphabetical order.

**Status:** PASS

---

## TC-PROD-010 — Sort Products By Price Low to High

**Priority:** Medium  
**Type:** Functional  
**Precondition:** User is on the Products page.

**Steps:**
1. Open the sorting dropdown.
2. Select Price (low to high).
3. Observe the product order.

**Expected Result:**
Products should be displayed from the lowest price to the highest price.


**Status:** PASS

---

## TC-PROD-011 — Sort Products By Price High to Low

**Priority:** Medium  
**Type:** Functional  
**Precondition:** User is on the Products page.

**Steps:**
1. Open the sorting dropdown.
2. Select Price (high to low).
3. Observe the product order.

**Expected Result:**
Products should be displayed from the highest price to the lowest price.


**Status:** PASS

---

## TC-PROD-012 — Product Add To Cart Button

**Priority:** High  
**Type:** Functional  
**Precondition:** User is on the Products page.

**Steps:**
1. Select a product.
2. Click Add to Cart.

**Expected Result:**
The product should be added to the shopping cart and the cart indicator should update.

**Status:** PASS


# Shopping Cart Test Cases

## TC-CART-001 — Add One Product To Cart

**Priority:** High  
**Type:** Positive  
**Precondition:** User is logged in and on the Products page.

**Steps:**
1. Select a product.
2. Click Add to Cart.
3. Open the shopping cart.

**Expected Result:**
The selected product should appear in the cart with the correct name and price.

**Status:** PASS

---

## TC-CART-002 — Add Multiple Products To Cart

**Priority:** High  
**Type:** Positive  
**Precondition:** User is on the Products page.

**Steps:**
1. Add two or more different products to the cart.
2. Open the cart.

**Expected Result:**
All selected products should appear in the cart with the correct information.

**Status:** PASS

---

## TC-CART-003 — Cart Item Count

**Priority:** Medium  
**Type:** Functional  
**Precondition:** User is logged in.

**Steps:**
1. Add one product to the cart.
2. Observe the cart badge.
3. Add another product.
4. Observe the cart badge again.

**Expected Result:**
The cart badge should accurately represent the number of products added.

**Status:** PASS

---

## TC-CART-004 — Remove Product From Cart

**Priority:** High  
**Type:** Functional  
**Precondition:** Cart contains at least one product.

**Steps:**
1. Open the cart.
2. Click Remove for a product.

**Expected Result:**
The selected product should be removed from the cart and the cart count should update.

**Status:** PASS

---

## TC-CART-005 — Cart Displays Correct Product Information

**Priority:** High  
**Type:** Functional  
**Precondition:** A product has been added to the cart.

**Steps:**
1. Add a product to the cart.
2. Open the cart.
3. Compare the product with its original listing.

**Expected Result:**
Product name, price and other relevant information should match the original product.

**Status:** PASS

---

## TC-CART-006 — Empty Cart

**Priority:** Medium  
**Type:** Functional  
**Precondition:** User has no products in the cart.

**Steps:**
1. Open the shopping cart.

**Expected Result:**
The cart should not display products that have not been added.

**Status:** PASS

---

## TC-CART-007 — Continue Shopping

**Priority:** Medium  
**Type:** Functional  
**Precondition:** User is on the cart page.

**Steps:**
1. Click Continue Shopping.

**Expected Result:**
The user should be returned to the Products page.

**Status:** PASS

---

## TC-CART-008 — Proceed To Checkout

**Priority:** High  
**Type:** Functional  
**Precondition:** Cart contains at least one product.

**Steps:**
1. Open the cart.
2. Click Checkout.

**Expected Result:**
The user should be redirected to the checkout information page.

**Status:** PASS


# Checkout Test Cases

## TC-CHK-001 — Open Checkout

**Priority:** High  
**Type:** Functional  
**Precondition:** Cart contains a product.

**Steps:**
1. Open the cart.
2. Click Checkout.

**Expected Result:**
The checkout information page should be displayed.

**Status:** PASS

---

## TC-CHK-002 — Successful Checkout Information Submission

**Priority:** High  
**Type:** Positive  
**Precondition:** User is on the checkout information page.

**Test Data:**
- First Name: John
- Last Name: Smith
- Postal Code: 20000

**Steps:**
1. Enter the first name.
2. Enter the last name.
3. Enter the postal code.
4. Click Continue.

**Expected Result:**
The user should proceed to the checkout overview page.

**Status:** PASS

---

## TC-CHK-003 — Empty First Name

**Priority:** High  
**Type:** Negative  
**Precondition:** User is on the checkout information page.

**Steps:**
1. Leave First Name empty.
2. Enter a valid Last Name.
3. Enter a valid Postal Code.
4. Click Continue.

**Expected Result:**
The checkout should not continue and an appropriate validation message should be displayed.

**Status:** PASS

---

## TC-CHK-004 — Empty Last Name

**Priority:** High  
**Type:** Negative  
**Precondition:** User is on the checkout information page.

**Steps:**
1. Enter a valid First Name.
2. Leave Last Name empty.
3. Enter a valid Postal Code.
4. Click Continue.

**Expected Result:**
The checkout should not continue and an appropriate validation message should be displayed.

**Status:** PASS

---

## TC-CHK-005 — Empty Postal Code

**Priority:** High  
**Type:** Negative  
**Precondition:** User is on the checkout information page.

**Steps:**
1. Enter a valid First Name.
2. Enter a valid Last Name.
3. Leave Postal Code empty.
4. Click Continue.

**Expected Result:**
The checkout should not continue and an appropriate validation message should be displayed.

**Status:** PASS

---

## TC-CHK-006 — All Checkout Fields Empty

**Priority:** High  
**Type:** Negative  
**Precondition:** User is on the checkout information page.

**Steps:**
1. Leave all fields empty.
2. Click Continue.

**Expected Result:**
Checkout should not continue and an appropriate validation message should be displayed.

**Status:** PASS

---

## TC-CHK-007 — Checkout Overview Displays Correct Product

**Priority:** High  
**Type:** Functional  
**Precondition:** A product has been added to the cart.

**Steps:**
1. Proceed through checkout.
2. Observe the checkout overview.

**Expected Result:**
The overview should display the correct product, quantity and price.

**Status:** PASS

---

## TC-CHK-008 — Checkout Total Calculation

**Priority:** High  
**Type:** Functional  
**Precondition:** User has proceeded to checkout overview.

**Steps:**
1. Add one or more products to the cart.
2. Proceed to checkout.
3. Observe the item total, tax and final total.

**Expected Result:**
The displayed totals should be calculated correctly based on the selected products and applicable tax.

**Status:** PASS

---

## TC-CHK-009 — Cancel Checkout

**Priority:** Medium  
**Type:** Functional  
**Precondition:** User is on the checkout information page.

**Steps:**
1. Click Cancel.

**Expected Result:**
The user should be returned to the appropriate previous page without completing the order.

**Status:** PASS

---

## TC-CHK-010 — Complete Order

**Priority:** Critical  
**Type:** Positive/End-to-End  
**Precondition:** User has valid checkout information and at least one product in the cart.

**Steps:**
1. Add a product to the cart.
2. Open the cart.
3. Click Checkout.
4. Enter valid customer information.
5. Click Continue.
6. Verify the order summary.
7. Click Finish.

**Expected Result:**
The order should be successfully completed and the order confirmation page should be displayed.

**Status:** PASS

---

## TC-CHK-011 — Order Confirmation Message

**Priority:** High  
**Type:** UI/Functional  
**Precondition:** An order has been successfully completed.

**Steps:**
1. Complete a valid order.
2. Observe the confirmation page.

**Expected Result:**
A clear order confirmation message should be displayed.


**Status:** PASS

---

## TC-CHK-012 — Return To Products After Order

**Priority:** Medium  
**Type:** Functional  
**Precondition:** User has completed an order.

**Steps:**
1. Complete an order.
2. Click the button to return to the products page.

**Expected Result:**
The user should be returned to the Products page.

**Status:** PASS



# Navigation Test Cases

## TC-NAV-001 — Open Shopping Cart From Products Page

**Priority:** High  
**Type:** Functional

**Steps:**
1. Log in.
2. Click the shopping cart icon.

**Expected Result:**
The cart page should open successfully.

**Status:** PASS

---

## TC-NAV-002 — Open Menu

**Priority:** Medium  
**Type:** Functional

**Steps:**
1. Log in.
2. Click the menu button.

**Expected Result:**
The navigation menu should open and available options should be displayed.

**Status:** PASS

---

## TC-NAV-003 — Logout From Menu

**Priority:** High  
**Type:** Functional

**Steps:**
1. Log in.
2. Open the menu.
3. Click Logout.

**Expected Result:**
The user should be logged out and returned to the login page.

**Status:** PASS

---

## TC-NAV-004 — Continue Shopping From Cart

**Priority:** Medium  
**Type:** Functional

**Steps:**
1. Add a product to the cart.
2. Open the cart.
3. Click Continue Shopping.

**Expected Result:**
The user should return to the Products page.

**Status:** PASS