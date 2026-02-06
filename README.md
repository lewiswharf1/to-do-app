# To-Do App

A simple task management app built with React and Tailwind CSS.

## Features

- Add tasks with name, date, and time
- Mark tasks as complete
- Edit task names
- Remove tasks
- Separate views for outstanding and completed tasks

## Tech Stack

- React 19
- Vite
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Calendar.jsx    # Calendar icon
│   ├── Clock.jsx       # Clock icon
│   ├── Dropdown.jsx    # Options menu trigger
│   ├── InputForm.jsx   # Form for adding tasks
│   └── ToDo.jsx        # Individual task card
├── App.jsx             # Main app component
├── index.css           # Tailwind styles
└── main.jsx            # Entry point
```

## License

MIT
