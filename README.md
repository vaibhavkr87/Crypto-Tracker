Here is the uploaded Demo Video Link - https://drive.google.com/file/d/1J5aPG43l0q2WHaXyPiDzFg-jYk3jONW6/view?usp=drive_link

![Screenshot 2025-04-25 233945](https://github.com/user-attachments/assets/c7053eb9-560f-4722-8ce2-4f1c1e8334a2)


Setup instruction 
Clone the Repository git clone https://github.com/vaibhavkr87/Crypto-Tracker.git
Then cd crypto-tracker
Install Dependencies npm install 
Start the Development Server npm run dev
Open in Browser Go to: http://localhost:5173
Build for Production npm run build
In Vs code i open terminal and Install Redux Toolkit and React-Redux  npm install @reduxjs/toolkit react-redux 
Then Start working on project

🛠 Tech Stack
Frontend Framework: React
State Management: Redux Toolkit, React-Redux
Type Checking: TypeScript
Styling: Tailwind CSS
Tooling: Vite
Real-Time Updates: Polling API calls every 2 seconds

🏗 Architecture Overview

.vscode/                     # VSCode settings 
node_modules/                # Installed npm packages
public/                      # Static public assets 
src/                         # Main source code
  ├── assets/                # For images, icons
  ├── components/            # Reusable React components
  │    └── CryptoTable.tsx   # Component to display crypto prices
  ├── data/                  # Static sample/mock data
  │    └── sampleData.ts
  ├── features/crypto/       # Redux logic (Slice + API functions)
  │    └── cryptoSlice.ts
  ├── styles/                # CSS styling files
  │    └── index.css
  ├── utils/                 # Utility/helper functions
  │    └── mockData.ts
  ├── App.tsx                # Main App component
  ├── main.tsx               # React app entry point
  ├── store.ts               # Redux store configuration
  ├── vite-env.d.ts          # Vite environment typings
.gitignore                   # Git ignored files list
eslint.config.js             # ESLint configuration
index.html                   # HTML template
package.json                 # Project dependencies and scripts
package-lock.json            # Package lock file
README.md                    # Project documentation
tsconfig.app.json            # TypeScript config for app
tsconfig.json                # Root TypeScript configuration
tsconfig.node.json           # TypeScript config for Node.js files
vite.config.ts               # Vite configuration file


