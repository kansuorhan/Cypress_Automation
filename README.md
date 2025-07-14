# 🚀 Cypress Automation Project – Automation Exercise

This is a modern end-to-end test automation framework built with [Cypress](https://www.cypress.io/) for 
testing the [Automation Exercise](https://automationexercise.com/) demo web application. The framework 
includes UI test coverage using custom commands, fixtures, and well-organized test structure.

## 📁 Project Structure

Automation Exercise/
├── cypress/
│   ├── fixtures/         # Test data (JSON, image files)
│   ├── support/          # Custom Cypress commands and setup
│   └── e2e/              # Your test cases (to be added here)
├── cypress.config.js     # Cypress global configuration
├── package.json          # NPM dependencies and scripts
└── README.md             # Project documentation

📦 Installation & Setup
To run this project locally:

## 1. Clone the repository
git clone https://github.com/kansuorhan/Cypress_Automation.git
cd "Automation Exercise"

## 2. Install dependencies
npm install

## 3. Run Cypress test runner (GUI mode)
npx cypress open

# or run tests in headless mode
npx cypress run

## 🧪 Example Test Case Structure
Test cases should be placed in the cypress/e2e/ directory. Here’s a sample structure:

describe('Login Test', () => {
  it('logs in with valid credentials', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/account');
  });
});

## 🧰 Tools & Features
## ✅ Cypress: End-to-end UI automation framework

🧪 Mocha + Chai: Test runner and assertions

📁 Fixtures: JSON and image data for reusable test inputs

🧩 Custom Commands: Defined in cypress/support/commands.js

🔧 Cypress Configuration
You can modify global options in the cypress.config.js file, such as timeouts, base URL, viewport size, etc.

🧹 Scripts in package.json

"scripts": {
  "test": "cypress run",
  "cypress:open": "cypress open"
}

Run tests via:


npm run test         # Headless mode
npm run cypress:open # Interactive mode

## 🤖 CI/CD Integration (Optional)
You can easily integrate with GitHub Actions or other CI tools. Here's a sample GitHub Actions workflow:

name: Cypress Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npx cypress run
      
📄 License
This project is licensed under the MIT License.


👤 Author
Orhan Kansu
🔗 GitHub: @kansuorhan
