# This project template provides a fast, minimal setup for building React applications with TypeScript and Vite, including HMR (Hot Module Replacement) for instant updates during development.

✅ What’s Included
1.Vite — lightning-fast build tool and dev server.

2.React — modern UI library.

3.TypeScript — static type checking.

4.ESLint — configurable linting with type-aware rules.

📦 Installation

# 1. Install dependencies

npm install

# 2. Run the development server

npm run dev

# 3. Build for production

npm run build

# 4. Preview production build locally

npm run preview
⚙️ Recommended ESLint Setup
For type-aware linting in production:

1️⃣ Replace the basic tseslint.configs.recommended with:

...tseslint.configs.recommendedTypeChecked
or

...tseslint.configs.strictTypeChecked
2️⃣ Optionally, add style rules:

...tseslint.configs.stylisticTypeChecked
3️⃣ For better React linting:

import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
reactX.configs['recommended-typescript'],
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
},
},
])
⚖️ Trade-offs

📂 Project Structure

src/
├── components/ # React components
├── assets/ # Images, icons, etc.
├── App.tsx # Root component
├── main.tsx # Entry point
