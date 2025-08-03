module.exports = {
  ci: {
    collect: {
      startServerCommand: "cd web && npm start",
      startServerReadyPattern: "ready",
      startServerReadyTimeout: 30000,
      url: [
        "http://localhost:3000",
        "http://localhost:3000/login",
        "http://localhost:3000/signup"
      ]https://github.com/Abhay2133/dsa-tracker.git
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "categories:performance": ["warn", {"minScore": 0.7}],
        "categories:accessibility": ["error", {"minScore": 0.9}],
        "categories:best-practices": ["warn", {"minScore": 0.8}],
        "categories:seo": ["warn", {"minScore": 0.8}]
      }
    },
    upload: {
      target: "temporary-public-storage"
    }
  }
};
