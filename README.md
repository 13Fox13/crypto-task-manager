# Task & Cryptocurrency Dashboard Web Application

This project is a web application that combines a task management system with a real-time cryptocurrency dashboard. The app enables users to manage tasks with filtering capabilities and display live cryptocurrency data using a doughnut chart and additional coin information. The application is built with Next.js, Material UI, TypeScript, Redux, and Gulp for SCSS compilation.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Gulp Setup](#gulp-setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [License](#license)

## Technologies Used
- **Frontend Framework**: Next.js
- **State Management**: Redux with @reduxjs/toolkit
- **UI Framework**: Material UI with custom theme
- **Styling**: SCSS with Gulp.js for compilation, alongside Material UI’s `sx` prop where necessary
- **Charting Library**: Chart.js (using the Doughnut component)
- **Programming Language**: TypeScript
- **Data Fetching**: Axios

## Features
- **Task Management**: Add, filter, and mark tasks as complete or incomplete using a centralized task management system.
- **Cryptocurrency Dashboard**: View real-time data for selected cryptocurrencies (e.g., Ethereum, Tether, USD Coin) in a doughnut chart.
- **Responsive Design**: Optimized layout for both desktop and mobile views.

## Getting Started
Follow these steps to set up and run the project locally.

### Prerequisites
Make sure you have the following installed on your local machine:
- **Node.js** (v14 or later)
- **npm** (v6 or later) or **yarn**
- **Git**

### Installation
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd task-crypto-dashboard
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application
1. **Start the Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at `http://localhost:3000`.

### Gulp Setup
The project uses **Gulp** to compile SCSS to CSS.

1. **Install Gulp Globally** (if not already installed):
   ```bash
   npm install -g gulp-cli
   ```

2. **Run Gulp to Compile SCSS**
   ```bash
   npm run gulp
   ```
   This will compile the SCSS files into CSS and place them in the `public/styles` directory.

## Usage
- **Task Management**: Use the input box to add a new task. You can filter tasks using the "All", "Completed", or "Incomplete" buttons, and toggle the task completion status using the checkboxes.
- **Cryptocurrency Dashboard**: The cryptocurrency dashboard displays live data using a doughnut chart. It also lists details such as the price, market cap, and 24-hour percentage change.

## Folder Structure
```
task-crypto-dashboard/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── tasks/
│   │   │   ├── TaskManager.tsx
│   │   │   ├── TaskItem.tsx
│   │   │   ├── TaskFilter.tsx
│   │   │   └── TaskForm.tsx
│   │   ├── crypto/
│   │   │   ├── CryptoDashboard.tsx
│   │   │   ├── DoughnutChart.tsx
│   │   │   └── CryptoDetails.tsx
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── api/
│   │   │   ├── tasks.ts
│   │   │   └── crypto.ts
│   ├── redux/
│   │   ├── store.ts
│   │   ├── taskSlice.ts
│   ├── hooks/
│   │   ├── useTasks.ts
│   │   ├── useCryptoData.ts
│   ├── utils/
│   │   └── api.ts
│   ├── styles/
│   │   ├── main.scss
│   │   ├── _variables.scss
│   │   └── _mixins.scss
├── public/
│   └── styles/ (compiled CSS)
├── gulpfile.js
```
