<!DOCTYPE html>
<html lang="en">
<body>

  <h1>Memory Card Game</h1>
  
  <p>
    A simple React-based memory card game that uses hooks to manage state and fetch images
    from an external API. The goal is to click on all unique cards exactly once
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
    <img src="https://github.com/user-attachments/assets/f1defffa-2abc-4ba4-8f73-280756d7eae3" width="600"/></br>
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
  
  <h2>How It Works</h2>
  <ol>
    <li>On mount, the <code>App</code> component fetches a set of images (e.g., 8–12 unique images) from an external API.</li>
    <li>Each image is unique.</li>
    <li>When a user clicks on a card:
      <ul>
        <li>The cards shuffle</li>
        <li>State updates to track new positions</li>
        <li>If the same card is click twice you lose</li>
        <li>The score increments with each successful unique card click, and <strong>Best Score</strong> updates if the current score exceeds it.</li>
      </ul>
    </li>
    <li>Game continues until all cards are clicked exactly once.</li>
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
