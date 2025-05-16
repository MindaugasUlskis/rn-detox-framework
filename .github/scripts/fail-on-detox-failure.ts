import * as fs from "fs";

type DetoxTestResult = {
  success: boolean;
};
const reportPath = process.argv[2];

if (!reportPath || !fs.existsSync(reportPath)) {
  process.stderr.write(`Report file not found: ${reportPath}`);
  process.exit(1);
}

const content = fs.readFileSync(reportPath, "utf-8");
const result = JSON.parse(content) as DetoxTestResult;

if (!result.success) {
  process.stderr.write(`Detox tests failed: ${reportPath}`);
  process.exit(1);
}

process.stderr.write(`Detox tests passed: ${reportPath}`);
