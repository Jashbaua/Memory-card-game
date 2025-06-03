<!DOCTYPE html>
<html lang="en">
<body>

  <h1>Memory Card Game</h1>
  
  <p>
    A simple React-based memory card game that uses hooks to manage state and fetch images
    from an external API. The goal is to flip cards, remember their positions, and match pairs.
    Track your current score and best score, and enjoy a new shuffle every time you click a card!
  </p>
  
  <h2>Features</h2>
  <ul>
    <li>Displays a grid of cards with images fetched from an external API (e.g., Giphy or Pokémon).</li>
    <li>Randomizes (shuffles) cards on initial load and whenever a card is clicked.</li>
    <li>Scoreboard showing the current score and the best score achieved in past sessions.</li>
    <li>Responsive design that works on desktop and mobile.</li>
  </ul>
  
  <h2>Demo</h2>
  <p>
    <img src="https://github.com/user-attachments/assets/f1defffa-2abc-4ba4-8f73-280756d7eae3" width=600/>
    <a href="https://Jashbaua.github.io/Memory-card-game" target="_blank">
      Memory card game
    </a>

  </p>
  
  <h2>Getting Started</h2>
  <p>Clone the repository and install dependencies:</p>
  <pre><code>git clone https://github.com/Jashbaua/Memory-card-game.git
cd Memory-card-game

npm install</code></pre>
  
  <p>Start the development server:</p>
  <pre><code>npm start</code></pre>
  
  <p>Open <code>http://localhost:3000</code> in your browser to view the game.</p>
  
  <h2>Project Structure</h2>
  <ul>
    <li><code>public/</code> – Static files and <code>index.html</code>.</li>
    <li><code>src/</code>
      <ul>
        <li><code>components/</code> – Reusable React components like <code>Card</code>, <code>Scoreboard</code>, etc.</li>
        <li><code>hooks/</code> – Custom hooks for fetching data and managing game logic.</li>
        <li><code>App.js</code> – Main entry point for rendering the game board and managing state.</li>
        <li><code>index.js</code> – Renders the <code>App</code> component into the DOM.</li>
      </ul>
    </li>
    <li><code>package.json</code> – Project metadata and dependencies.</li>
  </ul>
  
  <h2>How It Works</h2>
  <ol>
    <li>On mount, the <code>App</code> component fetches a set of images (e.g., 8–12 unique images) from an external API.</li>
    <li>Each image is duplicated to form pairs, then all cards are shuffled.</li>
    <li>When a user clicks on a card:
      <ul>
        <li>The card flips to reveal the image.</li>
        <li>State updates to track which cards are currently flipped.</li>
        <li>If two cards match, they stay revealed; if not, they flip back after a short delay.</li>
        <li>The score increments with each successful match, and <strong>Best Score</strong> updates if the current score exceeds it.</li>
        <li>Cards are reshuffled for a fresh challenge each turn.</li>
      </ul>
    </li>
    <li>Game continues until all pairs are found.</li>
  </ol>
  
  <h2>Technologies Used</h2>
  <ul>
    <li>React (using <code>create-react-app</code>)</li>
    <li>React Hooks (<code>useState</code>, <code>useEffect</code>)</li>
    <li>Fetch API (or <code>axios</code>) for external data fetching</li>
    <li>CSS Modules / Styled Components / Plain CSS (your choice)</li>
  </ul>
</body>
</html>
