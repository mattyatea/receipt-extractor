# Suica Automation Project

## Overview
This project is an automation tool that automatically retrieves Mobile Suica usage history and charge receipts, organizing and saving them as PDFs for expense reporting.

## Key Features

### 1. Usage History Extraction and Grouping
- **Monthly History Extraction**: Automatically retrieves usage history for specified year/month
- **Charge-based Grouping**: Automatically groups charge records with subsequent usage transactions
- **Cross-month Support**: Includes previous month's charge records when necessary
- **Automated PDF Generation**: Generates PDFs for each group with appropriate naming conventions

### 2. Charge Receipt Retrieval
- **Individual Receipt Downloads**: Downloads individual PDF receipts for each charge
- **Recipient Configuration**: Automatically fills in company name and other recipient details
- **Batch Monthly Processing**: Retrieves all charge receipts for specified month in one operation

### 3. File Naming Conventions
- **Usage History PDFs**: `{YYYYMM}_{MMDD}_{amount}円_suica.pdf`
  - Example: `202408_0828_2910円_suica.pdf`
- **Charge Receipt PDFs**: `{YYYYMM}_{MMDD}_{amount}円_suica.pdf`
  - Example: `202408_0820_2700円_suica.pdf`
- **Orphan Transaction Reports**: `{YYYYMM}_orphan_transactions.md`

## Project Structure

```
suica0/
├── src/
│   ├── module/
│   │   └── suica/
│   │       ├── index.ts          # Main module
│   │       ├── auth.ts           # Authentication handling
│   │       ├── inOutExtractor.ts # Usage history extraction
│   │       └── chargeExtractor.ts # Charge receipt extraction
│   ├── utilitys/
│   │   └── log.ts               # Logging utility
│   └── docs/
│       ├── prompts/             # Specifications
│       └── examples/            # HTML samples
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies
├── playwright.config.ts         # Playwright configuration
└── .env.example                # Environment variables template
```

## Technology Stack
- **TypeScript**: Type-safe development
- **Playwright**: Browser automation
- **Node.js**: Runtime environment

## Core Classes

### InOutExtractor (Usage History Extraction)
```typescript
class InOutExtractor {
  extractAllHistory(targetMonth?: {year: number, month: number}): Promise<SuicaHistoryItem[]>
  groupHistoryByCharge(history: SuicaHistoryItem[]): {groups: SuicaHistoryGroup[], orphanTransactions: SuicaHistoryItem[]}
  extractAndDownloadGroups(targetMonth?: {year: number, month: number}): Promise<void>
}
```

### ChargeExtractor (Charge Receipt Extraction)
```typescript
class ChargeExtractor {
  navigateToChargeRecords(): Promise<void>
  setRecipient(companyName?: string): Promise<void>
  setDateRange(year: number, month: number): Promise<void>
  extractChargeRecords(): Promise<ChargeRecord[]>
  extractAndDownloadAllCharges(targetMonth?: {year: number, month: number}): Promise<void>
}
```

## Usage

### Basic Usage
```typescript
import { suicaModule } from "@module/suica";

// Execute both processes (default)
await suicaModule('both');

// Usage history only
await suicaModule('history');

// Charge receipts only
await suicaModule('charge');
```

### Environment Variables Setup
Create a `.env` file with the following information:
```env
JRE_USER_ID=your_jre_user_id
JRE_USER_PASS=your_jre_password
RECIPIENT_COMPANY=Your Company Ltd.
```

## Operating Hours Restriction
- **Available Hours**: 5:00 AM - 12:50 AM (JST)
- Considers Mobile Suica system maintenance windows

## Distinctive Features

### 1. Smart Grouping
- Automatically groups usage transactions based on charge records
- Clarifies the "charge → usage" flow required for expense reporting

### 2. Error Handling
- Outputs transactions without associated charge records to separate Markdown file
- Proper error handling for login failures

### 3. Absolute Path Imports
- Uses aliases like `@module/`, `@utilitys/`
- Resilient design against project structure changes

## Security Considerations
- Authentication credentials managed via environment variables
- Login information should not be hardcoded (recommended)
- PDF files saved with appropriate permissions

## Future Enhancements
- [ ] Multi-account support
- [ ] Automatic cloud storage upload
- [ ] Integration with expense reporting systems
- [ ] Enhanced report generation features
- [ ] GUI/Web interface addition

## Troubleshooting

### Common Issues
1. **Login Failure**: Verify JRE ID and password
2. **Out-of-hours Error**: Execute between 5:00 AM - 12:50 AM
3. **PDF Save Failure**: Check write permissions
4. **Selector Errors**: Verify Mobile Suica UI changes

## Architecture Details

### Data Flow
1. **Authentication**: Login to Mobile Suica using JRE credentials
2. **Navigation**: Navigate to appropriate pages (history/charge records)
3. **Extraction**: Parse HTML and extract relevant data
4. **Processing**: Group transactions and organize data
5. **Output**: Generate PDFs with proper naming conventions

### Module Dependencies
```
index.ts
├── auth.ts (Authentication)
├── inOutExtractor.ts (History Processing)
├── chargeExtractor.ts (Charge Processing)
└── log.ts (Logging)
```

### Key Algorithms

#### Transaction Grouping Algorithm
- Processes transactions in chronological order
- Creates new group when charge record is encountered
- Associates subsequent transactions with most recent charge
- Handles orphan transactions separately

#### Date Range Handling
- Automatically calculates month boundaries
- Includes previous month's final charge if needed
- Respects JST timezone for accurate date processing

## API Reference

### suicaModule(mode)
Main entry point for the automation.

**Parameters:**
- `mode`: `'history'` | `'charge'` | `'both'` (default: `'both'`)

**Returns:** `Promise<void>`

### Environment Variables
| Variable | Description | Required |
|----------|-------------|----------|
| JRE_USER_ID | JRE account user ID | Yes |
| JRE_USER_PASS | JRE account password | Yes |
| RECIPIENT_COMPANY | Company name for receipts | No |

## Performance Considerations
- Implements delays between PDF downloads to prevent rate limiting
- Uses `waitForLoadState('networkidle')` for reliable page loading
- Batch processes transactions for efficiency

## Testing
```bash
# Run TypeScript compilation check
npx tsc --noEmit

# Run Playwright tests
npx playwright test
```

## License
[License information to be added]

## Contributing
[Contributing guidelines to be added]

## Contact
[Contact information to be added]