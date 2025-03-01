# delmodules 🗑️

A simple CLI tool to recursively clean up `node_modules` directories in your Node.js projects. Written in TypeScript for better type safety and developer experience.

## Features

- 📁 Finds and deletes `node_modules` directories
- 🌳 Optional recursive deletion with `--all` flag
- 🚀 Fast and efficient cleanup
- ⚡ Easy to use
- 🔒 Safe deletion process
- 📘 Written in TypeScript
- 🛡️ Type definitions included
- 🧶 Yarn support

## Installation

You can install the package using npm:

```bash
npm install -g delmodules
```

Or using yarn:

```bash
yarn global add delmodules
```

Or directly from GitHub:

```bash
# Using npm
npm install -g github:oktayparlak/delmodules

# Using yarn
yarn global add https://github.com/oktayparlak/delmodules.git
```

## Repository

GitHub: [https://github.com/oktayparlak/delmodules](https://github.com/oktayparlak/delmodules)

## Usage

### Clean Current Directory Only

To delete the `node_modules` directory in your current location:

```bash
delmodules
```

### Clean All Subdirectories Recursively

To recursively delete all `node_modules` directories in the current directory and all its subdirectories:

```bash
delmodules --all
```

## Development

### Prerequisites

- Node.js (>= 12.0.0)
- npm or yarn

### Setup

1. Clone the repository:

```bash
git clone https://github.com/oktayparlak/delmodules.git
cd delmodules
```

2. Install dependencies:

```bash
# Using npm
npm install

# Using yarn
yarn install
```

### Available Scripts

```bash
# Build the project
npm run build
# or
yarn build

# Development mode with watch
npm run dev
# or
yarn dev

# Clean build files
npm run clean
# or
yarn clean

# Start the compiled app
npm start
# or
yarn start
```

This will compile the TypeScript code to JavaScript in the `dist` directory.

## How It Works

1. Without `--all` flag:

   - Checks only the current directory for a `node_modules` folder
   - If found, safely deletes it

2. With `--all` flag:
   - Starts from the current directory
   - Recursively scans all subdirectories
   - Deletes each `node_modules` directory it finds
   - Notifies when the operation is complete

## Types

Type definitions are included in the package. TypeScript users will get full type support when using this package.

## License

MIT

## Author

Oktay

## Contributing

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
