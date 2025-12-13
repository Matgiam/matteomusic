# Matteo Music Portfolio

An immersive 3D music portfolio website showcasing musical instruments and interactive experiences built with React Three Fiber and GSAP.

## 🎵 Features

- **Interactive 3D Room**: Explore a virtual music room with various instruments
- **Smooth Animations**: Powered by GSAP for seamless scrolling and transitions
- **Multiple Sections**: Home, About, Video, World, and Discover sections
- **3D Models**: Detailed 3D models of instruments including:
  - Piano and Grand Piano
  - Guitar and accessories
  - Drums and drumsticks
  - Microphone and headphones
  - Vinyl player and records
  - And much more!

## 🛠️ Tech Stack

- **Frontend**: React 19.2.0
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: GSAP with React integration
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Post-processing**: React Three Postprocessing

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd matteomusic
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── Group/           # Instrument group components
│   ├── lights/          # Lighting setup
│   ├── models/          # 3D model components
│   ├── GlobeComponent.jsx
│   └── Room.jsx
├── sections/            # Page sections
│   ├── AboutSection.jsx
│   ├── DiscoverSection.jsx
│   ├── HomeSection.jsx
│   ├── RoomSection.jsx
│   ├── VideoSection.jsx
│   └── WorldSection.jsx
├── constants/
│   └── index.js         # Constants and configurations
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles

public/
├── models/              # 3D model files (.glb)
├── images/              # Static images
├── icons/               # Icon files
├── sounds/              # Audio files
└── videos/              # Video content
```

## 🎨 Components Overview

### 3D Room Components
- **Room.jsx**: Main 3D room container
- **GlobeComponent.jsx**: Interactive globe element
- **Group Components**: Organized 3D instrument groups (Drums, Guitar, Piano, etc.)

### Section Components
- **HomeSection**: Landing section with introduction
- **AboutSection**: Information about the artist
- **VideoSection**: Video showcase
- **WorldSection**: Interactive 3D world experience
- **DiscoverSection**: Music discovery features