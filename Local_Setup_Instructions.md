# Innovate AI Challenge - Local Setup Guide

This document provides the necessary steps to run the Innovate AI Challenge multi-page website on any local computer.

## Prerequisites
Before you begin, ensure you have the following installed on the target PC:
1. **Node.js** (v18 or higher recommended) - Download from [nodejs.org](https://nodejs.org/)

## Step-by-Step Instructions

### Step 1: Copy the Project Files
Transfer the entire `innovate-ai-challenge` project folder to the new computer. You can do this via a USB drive, a ZIP file, or cloud storage.

### Step 2: Open Terminal / Command Prompt
Navigate into the project folder and open your terminal or command prompt.
- **Windows:** Open the folder in File Explorer, type `cmd` in the address bar, and press Enter.
- **Mac/Linux:** Open Terminal and use the `cd` command to navigate to the folder path.

### Step 3: Install Dependencies
The project relies on various libraries (like React, Tailwind CSS, Framer Motion) which need to be downloaded locally in the new environment.
Run the following command:
```bash
npm install
```
*Note: This might take a minute or two depending on your internet connection. It will create a `node_modules` folder.*

### Step 4: Start the Development Server
Once the installation is complete, you can launch the local development server by running:
```bash
npm run dev
```

### Step 5: View the Website
After running the start command, the terminal will provide a local URL (usually `http://localhost:5173/`).
1. Open your preferred web browser (Chrome, Edge, Firefox, Safari).
2. Type `http://localhost:5173/` into the address bar.
3. The Innovate AI Challenge website should now be running smoothly!

## Troubleshooting
- **Command Not Found (`npm`)**: Node.js is not properly installed or added to the system PATH. Please reinstall Node.js and restart the computer.
- **Port already in use**: If port 5173 is busy, Vite will automatically try the next available port (e.g., 5174). Always look at the terminal output for the correct URL.
