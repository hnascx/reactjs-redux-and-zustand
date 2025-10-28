# Video Course Player

A modern video course player application built with React, TypeScript, and Vite. This project demonstrates state management using both **Redux Toolkit** and **Zustand**, allowing you to compare and learn both approaches.

## Features

- 🎥 YouTube video integration with React Player
- 📚 Module and lesson navigation
- ⚡ Fast and responsive UI built with Tailwind CSS
- 🔄 State management with Redux Toolkit and Zustand
- 🎨 Modern UI components with Radix UI
- 📱 Fully responsive design

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Zustand** - Lightweight state management
- **Redux Toolkit** - Redux-based state management
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **React Player** - Video player component
- **Axios** - HTTP client
- **JSON Server** - Mock API server

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, pnpm, or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/hnascx/reactjs-redux-and-zustand.git
cd reactjs-redux-and-zustand
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Start the mock API server (in a separate terminal):

```bash
npm run server
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run server` - Start the JSON server API

## Project Structure

```
src/
├── components/       # React components
│   ├── Header.tsx    # Course header with current lesson info
│   ├── Module.tsx    # Module collapsible component
│   ├── Lesson.tsx    # Individual lesson item
│   └── Video.tsx     # Video player component
├── pages/
│   └── Player.tsx    # Main player page
├── store/            # Redux store configuration
│   └── slices/       # Redux slices
├── zustand-store/    # Zustand store configuration
└── lib/
    └── axios.ts      # Axios configuration
```

## State Management

This project implements state management using both libraries:

- **Zustand Store** (`src/zustand-store/index.ts`) - Currently active implementation
- **Redux Store** (`src/store/index.ts`) - Alternative implementation available

The Zustand implementation includes:

- Course data management
- Current module and lesson tracking
- Loading states
- Navigation actions (play, next)

## Key Concepts

- Proper use of `useShallow` in Zustand to prevent unnecessary re-renders
- Organized component structure with clear separation of concerns
- Type-safe state management with TypeScript
- Efficient selector patterns for optimal performance
