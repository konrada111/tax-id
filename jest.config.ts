module.exports = {
  setupFiles: ["<rootDir>/src/setupTests.ts"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*/*.d.ts",
    "!src/**/*/Loadable.{js,jsx,ts,tsx}",
    "!src/**/*/messages.ts",
    "!src/reportWebVitals.ts",
    "!src/**/*/types.ts",
    "!src/index.tsx",
  ],
}
