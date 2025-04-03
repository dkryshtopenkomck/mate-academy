# Playwright Tests for mate-academy

This project contains automated end-to-end tests for the [Conduit App](https://conduit.mate.academy), built using **Playwright**.

---

## 📦 Prerequisites

- Node.js >= 16
- npm >= 8
- Git
- Google Chrome and Firefox installed (used in Playwright tests)

---

## 📁 Project Structure

```
    mate-academy/
    ├── playwright/
    │   ├── page-objects/         # Page Object Model files
    │   │   ├── *-page.ts
    │   ├── tests/                # Spec files for E2E tests
    │   │   ├── *.spec.ts
    │   └── test-results/         # Auto-generated test output (videos, traces, etc.)
    ├── playwright.config.ts      # Global Playwright config
```

---

## 📥 Install dependencies

```bash
npm install
```

Playwright dependencies (browsers) are auto-installed via `postinstall`:

```bash
npx playwright install firefox chromium --with-deps
```

---

## 🚀 Run Tests

### Run all tests in Chromium (default)
```bash
npm test
```

### Run in specific browser
```bash
npm run test:chrome
npm run test:firefox
```

### Headless mode
```bash
npm run test:chrome:headless
```

---

## 👁️ Debugging / Visual Modes

### Run with UI runner (Playwright Test UI)
```bash
npm run test:live
```

### Run with debugger
```bash
npm run test:debug
```

### Run slow motion
```bash
npm run test:slowmo
```

---

## 📊 HTML Report

Run with reporter and open report:
```bash
npm run test:report
```

---

## 🔍 Filter tests by name
```bash
npm run test:filter -g "Editor Page"
```

---

## 🧪 Generate test with Codegen
```bash
npx playwright codegen https://conduit.mate.academy
```

---

## 🧼 Clean test output and reports
```bash
npm run clean
```

---

## 🧹 Format & Lint
```bash
npm run format
npm run lint
```

---

## 🧠 Notes

- Base URL is configured as: `https://conduit.mate.academy`
- Default screen resolution: **1366×768**
- Tests use `video: on` and `trace: on-first-retry` for debugging
- Page Object files are under `playwright/page-objects/`
- Test specs are under `playwright/tests/`

---
