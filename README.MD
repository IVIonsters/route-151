# Pokémon Card Generator & Battle System

A progressive web application that evolves from a simple Pokémon card generator into a full-fledged battle system with user authentication and database integration.

![Pokémon Card Generator](https://via.placeholder.com/800x400?text=Pokemon+Card+Generator)

## Project Overview

This project follows a multi-tier development pathway designed to build skills incrementally:

1. **Tier 1**: Static Pokémon card generator with core web technologies
2. **Tier 2**: React-based implementation with component architecture
3. **Tier 3**: Full-stack battle system with authentication and database

## Features

### Tier 1: Pokémon Random Card Generator
- Random Pokémon card generation using PokeAPI
- Display of Pokémon stats, image, and information
- Save favorites functionality with Local Storage
- Responsive design with Tailwind CSS
- Clean UI with intuitive controls

### Tier 2: React Conversion
- Modular component architecture
- Global state management with Context API
- Multi-page routing
- Enhanced UI/UX with React's dynamic rendering
- Persistent favorites across sessions

### Tier 3: Battle System
- User authentication and profiles
- Save favorite Pokémon to user account
- Interactive battle system based on Pokémon stats
- Battle history and statistics
- Leaderboards and achievements

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React, Tailwind CSS
- **State Management**: Context API, React Hooks
- **Backend**: Node.js/Express (or Firebase)
- **Database**: MongoDB (or Firebase)
- **Authentication**: JWT or Firebase Auth
- **API**: PokeAPI
- **Deployment**: Netlify, Render, or AWS

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/poke-card-generator.git

# Navigate to project directory
cd poke-card-generator

# Install dependencies
npm install

# Start development server
npm start
```

## Project Structure

```
poke-card-generator/
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Roadmap

- [x] Tier 1: Static Card Generator
- [ ] Tier 2: React Implementation
- [ ] Tier 3: Battle System Integration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [PokeAPI](https://pokeapi.co/) for providing the Pokémon data
- The Pokémon Company for the inspiration
