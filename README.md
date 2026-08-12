# Personare — Tarot Card Reading

An interactive tarot reading built with React. The user shuffles the deck, picks a card, and the
card flips to reveal its meaning.

## About

The app loads a Marseille tarot deck from a local JSON dataset and walks the user through a
three-step reading:

1. Focus on the question or the day ahead.
2. Shuffle the deck with the "Sort Cards" button.
3. Pick a card from the spread to flip it and read its interpretation.

The deck state, the shuffle and the selected card are held in a React context (`CardContext`)
and shared across the component tree, so the header, the instructions and the card grid all read
from one source of truth. Card data is fetched once on mount and the tree renders only after it
resolves, which avoids a flash of an empty deck.

## Tech stack

- [React](https://react.dev/) with hooks and the Context API
- [Styled Components](https://styled-components.com/docs)
- [Axios](https://axios-http.com/docs/intro)

## Project structure

```
personare/
├── public/
│   └── tarot.json          # Deck data: card names, images and interpretations
└── src/
    ├── components/
    │   ├── Button/         # Shuffle action
    │   ├── Cards/          # Card grid and flip behaviour
    │   ├── Header/
    │   ├── Instructions/
    │   └── Main/
    └── contexts/
        └── CardContext.js  # Deck state, shuffle logic, selected card
```

## Running it locally

Requires Node.js.

```bash
git clone https://github.com/Brunomon2812/Personare.git
cd Personare/personare
npm install
npm start
```

The app runs on http://localhost:3000 by default.

## Author

Bruno Monteiro — [GitHub](https://github.com/Brunomon2812) · [LinkedIn](https://www.linkedin.com/in/brunoarmonteiro/)
