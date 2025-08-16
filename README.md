# Theme Toggle App (React + Vite)

A simple React application built with Vite that demonstrates theme toggling (light/dark mode) using React Context and Reducer.

## Features

- Toggle between light and dark themes
- Global theme state managed via [`ThemeContext`](src/context/ThemeContext.jsx)
- Modern React setup with Vite for fast development
- ESLint integration for code quality

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

## Project Structure

- [`src/App.jsx`](src/App.jsx): Main UI and theme toggle button
- [`src/context/ThemeContext.jsx`](src/context/ThemeContext.jsx): Theme context and reducer logic
- [`src/main.jsx`](src/main.jsx): Entry point, wraps app in ThemeProvider
- [`src/App.css`](src/App.css), [`src/index.css`](src/index.css): Styling

## Usage

Click the "Toggle Theme" button to switch between light and dark modes. The theme state is managed globally using React Context, ensuring a consistent theme across the application. The reducer function in `ThemeContext.jsx` handles the toggling logic, and the `ThemeProvider` component makes the theme state available to all components in the app.
