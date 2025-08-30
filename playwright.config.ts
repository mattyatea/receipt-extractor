import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  fullyParallel: true,
  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
    ]
});
