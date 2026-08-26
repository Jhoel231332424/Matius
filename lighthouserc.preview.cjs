const previewUrl = process.env.PREVIEW_URL;

if (!previewUrl) {
  throw new Error("PREVIEW_URL is required for live preview Lighthouse QA.");
}

module.exports = {
  ci: {
    collect: {
      url: [previewUrl],
      numberOfRuns: 1,
      settings: {
        formFactor: "mobile",
        skipAudits: ["is-crawlable"],
        screenEmulation: {
          mobile: true,
          width: 390,
          height: 844,
          deviceScaleFactor: 1,
          disabled: false,
        },
      },
    },
    assert: {
      assertions: {
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.95 }],
        "categories:performance": ["warn", { minScore: 0.75 }],
        "largest-contentful-paint": ["warn", { maxNumericValue: 4000 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.1 }],
        "total-blocking-time": ["warn", { maxNumericValue: 350 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: ".lighthouseci-preview",
    },
  },
};
