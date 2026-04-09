# Tic Tac Toe (Browser Game)

A modular Tic Tac Toe game built with **HTML, CSS, and JavaScript**, focused on clean architecture and separation of concerns. This project emphasizes the use of **factory functions** and the **module pattern (IIFE)** to keep the global scope minimal and the codebase maintainable.

---

## Features

- Interactive browser-based gameplay
- Win and tie detection logic
- Player turn management
- Dynamic DOM rendering
- Player name input
- Start / Restart game functionality
- Prevention of invalid moves (no overwriting cells)

---

## Architecture & Design

This project follows a modular design approach:

### 1. Gameboard Module

- Stores the board as an array
- Handles board updates
- Provides methods to read/write board state

### 2. Player Factory

- Creates player objects
- Stores player name and marker (`X` or `O`)

### 3. Game Controller

- Controls game flow
- Switches turns
- Checks win/tie conditions
- Determines game state

### 4. Display Controller

- Manages DOM interactions
- Renders the board
- Handles user input (clicks)
- Updates UI with results

---

## Development Approach

1. **Logic First (Console-Based)**
   The game was first implemented and tested in the console:
   - Board stored as an array
   - Manual function calls to simulate gameplay
   - Win/tie logic fully validated before UI

2. **DOM Integration**
   After core logic worked:
   - Board rendering added
   - Click events implemented
   - UI synced with game state

3. **Polish & UX**
   - Player input fields
   - Restart button
   - Game result display

---

## Key Concepts Used

- Factory Functions
- IIFE (Module Pattern)
- Encapsulation
- Separation of Concerns
- Event Handling
- DOM Manipulation

---

## Project Structure

```
/project-root
│── index.html
│── style.css
│── script.js
└── README.md
```

---

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/your-username/tic-tac-toe.git
```

2. Open `index.html` in your browser.

---

## License

This project is open-source
