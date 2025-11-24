# Inventory Management Application
This is an web application to management inventory of a grocery store.  Full list of product will be displayed with basic information such as product name, quantity and price.  

## Table of Contents
Features  
Installation  
Usage  
Project Structure  

### Features
Written with react and Typescript without CSS frameworks.  The initial project is scaffolded using "npm create vite@latest CS601_HW5_YAN -- --template react-ts".  

### Installation
Clone the repository:

bash  
git clone https://github.com/whyanbu/CS601_HW5_YAN.git  
cd CS601_HW5_YAN
run the application locally using "npm run dev" in terminal.

### Usage
Start the app locally by "npm run dev" in terminal.  For deployment, use "npm run build".

### Project Structure
```
CS601_HW5_YAN
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── inventory.json
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── components
│   │   ├── Footer.css
│   │   ├── Footer.tsx
│   │   ├── Header.css
│   │   ├── Header.tsx
│   │   ├── InventoryItem.css
│   │   ├── InventoryItem.tsx
│   │   ├── InventoryList.tsx
│   │   └── type.ts
│   ├── index.css
│   └── main.tsx
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
