# Registration Module

[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)](https://www.typescriptlang.org/)
[![MUI](https://img.shields.io/badge/MUI-5.11.12-blue)](https://mui.com/)
[![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-7.43.5-blue)](https://react-hook-form.com/)
[![Yup](https://img.shields.io/badge/Yup-1.0.2-blue)](https://github.com/jquense/yup)

A simple, user-friendly and fully responsive registration module built using React 18, TypeScript 5, MUI 5, React Hook Form 7, and Yup. This project features a two-step registration form with various required fields and an optional one, on top of a summary window to review the inputted information. It was written as a recruitment task for an internship at Euvic.

## Demo Link

Acess the app at https://registration-module.wozniakkamil.com

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)

## Features

- Two-step registration form
  - Step 1: Fill out the Email, Password, Confirm Password, NIP Number, Select Role, and an optional Phone Number field
  - Step 2: Summary window with a "view-only" mode for the inputted information
- Ability to go back and edit the data
- Animations for changing the step;
- Animated loading icon after submitting the form
- Error message displayed after the loading icon (as there is no backend API integration)

## Screenshots

![Registration Module](./assets/registration-module-screenshot.png)

![Registration module presentation](./assets/registration-module-presentation.gif)

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/WoXuS/registration-module.git
cd registration-module
npm install
```

## Usage

To start the development server, run:
```bash
npm start
```

Open http://localhost:3000 to view the registration module in your browser.