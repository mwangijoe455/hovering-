#  Password Input – Anti-Bot Security Monitor

A React-based password input component that tracks user **typing cadence** and **mouse hover events** to help security engineers detect bot-like behavior. Built for the “Password Input” lab, it demonstrates React event handling (`onChange`, `onMouseEnter`, `onMouseLeave`) with real‑time logging.

##  Purpose

Security engineers need to analyse how users interact with login forms. This tool captures:

- **Keystroke timing** – every character typed is logged with a timestamp and current password length.
- **Mouse movement** – when the user hovers over (and away from) the Submit button, the event is recorded.

The collected data can be used to build heuristics that differentiate human users from automated scripts.

## Features

-  **Live typing status** – shows “Typing…” while the user enters text.
-  **Hover indicator** – displays “Hovering over Submit” when the mouse is over the button.
-  **Event log** – all interactions are time‑stamped and displayed in a scrollable list.
-  **Clear logs** – one‑click to reset the event history.
-  **Visual feedback** – Submit button changes style when hovered.
- **Zero external dependencies** – uses only React and plain JavaScript.

## How It Works

| User Action | React Event | Logged Message |
|-------------|-------------|----------------|
| Type in password field | `onChange` | `Typing: length = N` |
| Mouse enters Submit button | `onMouseEnter` | `Mouse entered Submit` |
| Mouse leaves Submit button | `onMouseLeave` | `Mouse left Submit` |
| Submit form (optional) | `onSubmit` | `Submitted (length: N)` |

All logs include a timestamp (HH:MM:SS) for cadence analysis.

## Project Structure (3‑file solution)
