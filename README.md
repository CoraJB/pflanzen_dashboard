## BACB Dashboard - Plant Monitoring System

### Introduction

The Plant Monitoring System is a web application designed to help users monitor and manage the health of their plants especially if they need water. It provides a user-friendly interface to track sensor data, set thresholds, and add several sensors to monitor several plants.

##### Features:
* Dashboard View: 
    * Displays a snapshot of the selected plant's health status.
* Detailed Data View: 
    * Offers detailed information about historical sensor data.
* Long-Term Data View: 
    * Allows users to visualize and analyze long-term trends in plant health.
* Change Thresholds View: 
    * Enables users to customize and set thresholds for optimal plant care.
* Add New Plant View: 
    * Allows users to add new plants to the monitoring system.

##### Technologies Used:
* Frontend: React.js
* State Management: React Context API
* Styling: CSS
* Localization: react-i18next
* Containerization: Docker

##### Supported Languages:
* English 
* German
* French
* Spanish
* Italian
* Mandarin Chinese
* Hindi
* Arabic
* Portuguese
* Russian
* Japanese
* Dutch
* Korean


## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

### Getting Started

#### Prerequisites

- Node.js: [Install Node.js](https://nodejs.org/)

#### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/CoraJB/pflanzen_dashboard.git

2. Navigate to the project folder:
    ```bash
    cd pflanzen_dashboard

3. Install Dependencies
    ```bash
    npm install

#### Usage

* How to run the application locally
    ```bash
    npm start
*   Open http://localhost:3000/dashboard to view it in the browser.

#### File Structure
plant-monitoring-system
``````
├── public
│   └── index.html
├── src
│   ├── assets
│   │   ├── images and jsons
│   ├── components
│   │   ├── subComponents
│   │   │   ├── customButton
│   │   │   │   ├── customButton.css
│   │   │   │   └── customButton.tsx
│   │   │   ├── navigationBar
│   │   │   │   ├── navigationBar.css
│   │   │   │   └── navigationBar.tsx
│   │   │   ├── customMinMaxInput
│   │   │   │   ├── customMinMaxInput.css
│   │   │   │   └── customMinMaxInput.tsx
│   │   └── ...
│   ├── views
│   │   ├── addNewPlant
│   │   │   ├── addNewPlant.css
│   │   │   └── addNewPlant.tsx
│   │   ├── changeThresholds
│   │   │   ├── changeThresholdsView.css
│   │   │   └── changeThresholdsView.tsx
│   │   ├── dashboard
│   │   │   ├── dashboardView.css
│   │   │   └── dashboardView.tsx
│   │   ├── detailedData
│   │   │   ├── detailedDataView.css
│   │   │   └── detailedDataView.tsx
│   │   ├── longTermData
│   │   │   ├── longTermDataView.css
│   │   │   └── longTermDataView.tsx
│   │   └── MainView.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── AppStateContext.tsx
│   ├── index.css
│   └── index.tsx
├── .gitignore
├── package.json
├── README.md
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
└── ...
``````