import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  projects: [

    // =========================
    // UI TESTS
    // =========================
    {
      name: 'chromium',
      testDir: './tests',

      use: {
        ...devices['Desktop Chrome'],
        baseURL: process.env.BASE_URL,
        trace: 'on-first-retry',
      },
    },

    // =========================
    // API TESTS
    // =========================
    {
      name: 'api',
      testDir: './api-tests',

      use: {
        trace: 'on-first-retry',
      },
    },

  ],
});