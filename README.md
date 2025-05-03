# Frontend Technical Test Master

## Input

- URL: `https://api.github.com/repos/[OWNER]/[REPO]`

## Expected Output

- List of file extensions and their occurrence count across all directories and levels.

## Requirements

- The GitHub repository must have at least three levels of depth.
- Do not use the `?recursive=1` parameter in the fetch.
- Apply principles of hexagonal architecture, testing, and clean code.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alexcumplido/frontend-technical-test-master
   ```
2. Navigate to the project directory:
   ```bash
   cd frontend-technical-test-master
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the root directory with the following content:

```
REACT_APP_GITHUB_TOKEN=your_github_token_here
```

Replace `your_github_token_here` with your personal GitHub token.

## Usage

1. Start the development server:
   ```bash
   npm run start
   ```
2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Running Tests

1. Checkout to the testing branch

   ```bash
   git checkout testing
   ```

2. Run the following command to execute tests:
   ```bash
   npm test
   ```
