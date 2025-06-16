# Personal Color Test - Unit Tests

This directory contains comprehensive unit tests for the Personal Color Test application.

## Test Coverage

### UploadContext Tests (`UploadContext.test.tsx`)

Tests the React Context implementation that manages the application's global state:

- **Provider Tests**: Verifies that the `UploadProvider` correctly initializes and manages state
- **Hook Tests**: Tests the `useUpload` custom hook functionality and error handling
- **State Management**: Tests all state operations including:
  - `uploadedFiles` - File upload management
  - `analysisResult` - Color analysis results storage
  - `isAnalyzing` - Loading state management
  - `clearData` - State reset functionality
- **Edge Cases**: Tests error conditions, null values, and rapid state updates

## Setup and Installation

1. Navigate to the test directory:
   ```bash
   cd personalcolortest/tst
   ```

2. Install test dependencies:
   ```bash
   npm install
   ```

## Running Tests

### Run all tests once:
```bash
npm test
```

### Run tests in watch mode (re-runs on file changes):
```bash
npm run test:watch
```

### Run tests with coverage report:
```bash
npm run test:coverage
```

## Test Structure

The tests are organized using Jest and React Testing Library:

- **Jest**: Test runner and assertion library
- **React Testing Library**: React component testing utilities
- **@testing-library/jest-dom**: Additional DOM matchers
- **TypeScript**: Full TypeScript support for tests

## Mock Data

The tests use realistic mock data that matches the application's interfaces:

- Mock `AnalyzeResult` objects with color analysis data
- Mock `File` objects for testing file uploads
- Proper TypeScript typing for all mock data

## Coverage Goals

The tests aim to achieve:

- **100% function coverage** for the UploadContext
- **100% branch coverage** for conditional logic
- **100% line coverage** for all executable code
- **Error case coverage** for all error conditions

## Adding New Tests

When adding new components or services to the main application:

1. Create corresponding test files in this directory
2. Follow the naming convention: `ComponentName.test.tsx`
3. Use the same mock data patterns established here
4. Ensure TypeScript compatibility
5. Update this README with new test descriptions

## Configuration Files

- `jest.config.js` - Jest test runner configuration
- `jest.setup.js` - Global test setup and mocks
- `tsconfig.json` - TypeScript configuration for tests
- `package.json` - Test dependencies and scripts