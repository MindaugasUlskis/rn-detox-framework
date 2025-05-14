import fs from "fs";

type DetoxTestResult = {
  numTotalTests: number;
  numPassedTests: number;
  numFailedTests: number;
  numPendingTests: number;
  numTotalTestSuites: number;
  numPassedTestSuites: number;
  numFailedTestSuites: number;
  numPendingTestSuites: number;
  success: boolean;
  testResults: {
    assertionResults: {
      fullName: string;
      status: string;
    }[];
    name: string;
    status: string;
  }[];
};

const androidArtifactPath: string =
  "./test-results/android/detox-android-report.json";
const iosArtifactPath: string = "./test-results/ios/detox-ios-report.json";

const androidReport = parseFileToObject(androidArtifactPath);
const iosReport = parseFileToObject(iosArtifactPath);

const summary = `
${formatSummary(iosReport, "iOS")}
${formatSummary(androidReport, "Android")}
`;

if (!process.env.GITHUB_STEP_SUMMARY) {
  console.error("GITHUB_STEP_SUMMARY ENV not found");
  process.exit(1);
}
fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);

function parseFileToObject(reportFile: string): DetoxTestResult {
  if (!reportFile || !fs.existsSync(reportFile)) {
    console.error(`Report file not found: ${reportFile}`);
    process.exit(1);
  }

  const fileContent = fs.readFileSync(reportFile, "utf-8");
  try {
    const parsed: DetoxTestResult = JSON.parse(fileContent);
    return parsed;
  } catch (error) {
    console.error(`Failed to parse report file: ${error}`);
    process.exit(1);
  }
}

function formatSummary(report: DetoxTestResult, platform: string): string {
  return `
  - *${platform}*
  - **Suites**
    - Total: ${report.numTotalTestSuites}
    - Passed: ${report.numPassedTestSuites}
    - Failed: ${report.numFailedTestSuites}
    - Pending: ${report.numPendingTestSuites}
  
  - **Tests**
    - Total: ${report.numTotalTests}
    - Passed: ${report.numPassedTests}
    - Failed: ${report.numFailedTests}
    - Skipped: ${report.numPendingTests}
  
  - **Status**: ${report.success ? "✅ All Passed" : "❌ Failures Detected"}
  `;
}
