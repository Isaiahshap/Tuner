# Guitar Tuner Web App

A sleek and responsive guitar tuner web application built with **React** and **TypeScript** using **Vite**. This app allows guitarists to tune their guitars by providing real-time pitch detection and visual feedback.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Features

- **Real-Time Pitch Detection**: Utilizes the Web Audio API and **Pitchfinder** library to access the microphone and detect the frequency of the played note.
- **Visual Tuning Indicators**: Provides intuitive visual feedback indicating whether the note is too low, too high, or in tune.
- **Note Selection**: Allows users to select which guitar string (E, A, D, G, B, E) they want to tune.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Demo

[Insert link to live demo or screenshots here.]

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- **Node.js** (version 14 or above)
- **npm** (comes with Node.js)
- A modern web browser (Chrome, Firefox, Edge)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/guitar-tuner.git
   cd guitar-tuner
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser**:

   Navigate to `http://localhost:3000` (or the port specified in your terminal) to view the app.

---

## Usage

1. **Select a String**:

   - Click on the note corresponding to the guitar string you wish to tune (E2, A2, D3, G3, B3, E4).

2. **Allow Microphone Access**:

   - When prompted, allow the app to access your microphone. This is necessary for pitch detection.

3. **Start Tuning**:

   - Play the open string on your guitar.
   - The app will display:
     - **Left Indicator (Red)**: The note is too low.
     - **Right Indicator (Yellow)**: The note is too high.
     - **Center Indicator (Green)**: The note is in tune.

4. **Adjust Your Tuning**:

   - Tighten or loosen the string accordingly until the center indicator lights up.

---

## Project Structure

```
guitar-tuner/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Tuner.tsx
│   │   ├── NoteSelector.tsx
│   │   └── Indicator.tsx
│   ├── hooks/
│   │   └── useAudioAnalyzer.ts
│   ├── utils/
│   │   └── pitchDetection.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types/
│       └── index.d.ts
├── tsconfig.json
├── package.json
└── vite.config.ts
```

- **public/**: Static public assets.
- **src/**: Main source code directory.
  - **components/**: Reusable React components.
    - `Tuner.tsx`: Handles audio processing and displays tuning indicators.
    - `NoteSelector.tsx`: Component for selecting the target note.
    - `Indicator.tsx`: Visual tuning indicators.
  - **hooks/**:
    - `useAudioAnalyzer.ts`: Custom hook for audio analysis.
  - **utils/**:
    - `pitchDetection.ts`: Functions for pitch detection algorithms.
  - `App.tsx`: Main application component.
  - `main.tsx`: Entry point of the React application.
  - `index.css`: Global CSS styles.
- **types/**: Custom TypeScript type declarations.

---

## Technologies Used

- **React** with **TypeScript**: For building the user interface.
- **Vite**: A fast development build tool for modern web projects.
- **Web Audio API**: For accessing the microphone and processing audio data.
- **Pitchfinder**: A JavaScript pitch detection library used for accurate frequency analysis.
- **CSS**: For styling the application.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**.

2. **Create a new branch**:

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Make your changes and commit them**:

   ```bash
   git commit -m 'Add some feature'
   ```

4. **Push to the branch**:

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a pull request**.

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **Pitchfinder**: Special thanks to the [Pitchfinder](https://github.com/peterkhayes/pitchfinder) library for providing robust pitch detection algorithms.
- **MDN Web Docs**: For comprehensive documentation on the Web Audio API.
- **OpenAI's ChatGPT**: Assistance in outlining and structuring the project.
- **Community Contributors**: Thanks to everyone who has contributed to improving the project.
