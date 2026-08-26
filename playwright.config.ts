import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Playwright configuration for the E-Commerce QA Automation Project
 *
 * Framework: Playwright
 * Language: TypeScript
 * Application: SauceDemo
 */

export default defineConfig({
  // Test files are located inside the tests directory
  testDir: './tests',

  // Prevent tests from running in parallel
  // This makes execution easier to observe and keeps test data stable.
  fullyParallel: false,

  // Prevent accidental test.only usage in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests twice in CI
  retries: process.env.CI ? 2 : 0,

  // Use one worker in CI for stable execution
  workers: process.env.CI ? 1 : 1,

  // Generate an HTML report
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  // Shared settings
  use: {
    // Application URL from .env
    baseURL: process.env.BASE_URL,

    // Capture trace when a test fails
    trace: 'retain-on-failure',

    // Capture screenshot when a test fails
    screenshot: 'only-on-failure',

    // Record video when a test fails
    video: 'retain-on-failure',

    // Slow down actions slightly so execution is easier to observe locally
    launchOptions: {
      slowMo: 300,
    },
  },

  /**
   * Browser projects
   *
   * Currently using Chromium only.
   * Additional browsers can be enabled later for cross-browser testing.
   */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    /*
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
    */
  ],
});