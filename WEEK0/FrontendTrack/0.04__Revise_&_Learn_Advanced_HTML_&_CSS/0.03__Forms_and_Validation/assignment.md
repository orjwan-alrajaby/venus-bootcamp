# Assignment — Forms & Validation 📝

## Login • Signup • Checkout

In this assignment, you will build **3 fully functional forms** with proper validation, accessibility, keyboard navigation, and meaningful user feedback.

You are provided with starter code containing:

* HTML
* CSS
* JavaScript

You may ONLY edit:

* `index.html`
* `app.js`

The `styles.css` file must remain untouched **except for modal-related styles**.

---

## Forms You Must Build

### 1. Login Form

Users should be able to log in using:

* username OR email
* password

---

### 2. Signup Form

Your signup form must contain:

* First name
* Last name
* Date of birth
* Email
* Confirm email
* Password
* Confirm password

---

### 3. Checkout Form

Your checkout form must contain a mix of different input types.

Required fields:

* Full name
* Email
* Phone number
* Country (`select`)
* Payment method (`radio`)
* Card number
* Expiry date
* CVV
* Terms & conditions checkbox

The goal is to practice working with:

* text inputs
* email inputs
* password inputs
* date inputs
* selects
* radio buttons
* checkboxes

---

## Goal 🎯

By the end of this assignment, you should understand:

* semantic HTML forms
* accessibility basics
* HTML validation
* JavaScript validation
* keyboard navigation
* user feedback systems
* production-ready form flows

---

## Important Rules ⚠️

* You may only edit:

  * `index.html`
  * `app.js`

* You may NOT:

  * modify existing CSS styles
  * redesign the UI

* You ARE allowed to:

  * add modal-related CSS
  * add semantic HTML
  * add accessibility attributes
  * add validation logic

* Your forms must work with the existing design system already provided.

---

## Your Task 🧩

Your final result should:

### Be semantic & accessible ♿

Your forms must:

* use proper labels
* use correct input types
* support keyboard-only navigation
* support screen readers
* use accessible validation messaging
* allow submission using Enter

Use accessibility attributes where appropriate:

* `aria-invalid`
* `aria-describedby`
* `aria-live`

Think about users who:

* cannot use a mouse
* cannot see the screen
* rely on keyboards or assistive technologies

---

### Enforce validation & data security 🔒

HTML validation alone is not enough.

You must also use JavaScript validation.

You are expected to:

* create reasonable validation rules
* justify your decisions in documentation
* decide WHEN validation should happen:

  * while typing
  * on blur
  * on submit
  * or a combination

You may use:

* Regex
* string methods
* custom validation functions

---

### Offer meaningful feedback 💬

If a field is invalid:

* show an error message below it
* highlight the input
* avoid breaking the layout

If a field becomes valid:

* remove the error automatically

When a form submits successfully:

* show a modal
* display submitted data clearly
* allow the modal to close via:

  * keyboard
  * close button
  * “Ok” button

The modal should follow the existing design system.

---

### Avoid bugs 🐛

Your final result should feel production-ready.

That means:

* no broken layouts
* no inaccessible flows
* no dead buttons
* no impossible keyboard navigation

Real users should be able to complete every flow comfortably.

---

## Keyboard Testing 🧪

Unplug your mouse and test:

* tab navigation
* switching tabs using keyboard only
* submitting forms using Enter
* modal navigation
* validation feedback

If anything becomes confusing or unusable, fix it.

---

## Deliverables 📦

Submit:

* Completed `HTML`.
* untouched `CSS`.
* Completed `JS`.
* Documentation of decisions.

--- 

## Resources

- Learn HTML Forms in 25 mins: https://youtu.be/fNcJuPIZ2WE?si=2iu_PS_OMFEUMt2h
- Form validation with JavaScript: https://youtu.be/In0nB0ABaUk?si=VNjHxB76-mUArfrd
- (optional watch) 10 Form validation tricks: https://youtu.be/EQrUGEvnCzY?si=SYPX8ZflcrPT8wId
- CSS positioning: https://youtu.be/J9xTcc53cdU?si=HA0pkYJCi_TWU6CH