<a id="readme-top"></a>

# FootyQuizMaster - Football Quiz App
<p>FootyQuizMaster is a fun and interactive web app that challenges users' football knowledge across different aspects of the game. It provides four unique quiz modes to test various aspects of a football fan's memory and trivia knowledge, making it a must-try for football enthusiasts.</p>

[![image](https://github.com/user-attachments/assets/8b31247c-6668-48d2-b362-51b4847bd01c)](https://footyquizmaster.netlify.app/)

## Features
<ul>
  <li>
    <strong>Who Am I?: </strong>Guess the player based on their career path, progressing through various clubs and leagues.
  </li>
  <li>
    <strong>Who Has More Goals?: </strong>Compare two players and guess who scored more career goals. The game continues until you lose.
  </li>
  <li>
    <strong>Who's Missing?: </strong>Given a football squad with a missing player and details about the event, match, result, and phase, guess the missing player.
  </li>
  <li>
    <strong>Guess the Result: </strong>Test your knowledge of football history by guessing the final result of completed historical matches.
  </li>
</ul>

## How It Works

<ol>
  <li>Choose one of the four quiz modes.</li>
  <li>For "Who Am I?" you'll get hints about a player's career path, and you must guess the player.</li>
  <li>In "Who Has More Goals?" you'll be given two players and must select who scored more goals. Keep going until you make a wrong choice.</li>
  <li>"Who's Missing?" presents you with a squad missing one player, with details about a significant match. Use the clues to identify the missing player.</li>
  <li>"Guess the Result" gives you the opportunity to guess the final score of a historical game.</li>
  <li>Keep track of your progress and challenge yourself to improve!</li>
</ol>

## Tech stack

<ul>
  <li><strong>ReactJS: </strong> For building the interactive UI.</li>
    <li><strong>TypeScript: </strong> For adding static typing to the project, enhancing code quality and maintainability.</li>
    <li><strong>Vite: </strong> For a fast and optimized development environment with a modern build tool.</li>
    <li><strong>Tailwind CSS: </strong> For modern styling and responsive design.</li>
    <li><strong>Firebase:</strong> For rendering pie and bar charts that represent the emotional and sentiment data.</li>
    <li><strong>Axios: </strong> For making API requests to Hugging Face models.</li>
    <li><strong>React Router DOM: </strong> For navigation between different quiz games and pages.</li>
</ul>

## Project Structure

<ul>
  <li><strong>Quiz Modes: </strong>Each quiz mode is a unique game with its own set of rules and UI.</li>
  <li><strong>Making API calls to fetch player data and match details. </strong>Making API calls to fetch player data and match details.</li>
  <li><strong>Score Tracking: </strong>Track your progress and see how far you can go in each quiz mode.</li>
</ul>

## How to Run Locally

<ol>
  <li>Clone this repository: 
    
    git clone https://github.com/belgalc/footballQuizApp.git
</li>
<li>Navigate to the project directory:

    cd footballQuizApp

</li>
<li>Install dependencies:

    npm install

</li>
<li>Create a .env file and add your Hugging Face API key:

    VITE_HF_API_KEY =your_api_key

</li>
<li>Start the development server:

    npm run dev

</li>
<li>Open the app in your browser:

    http://localhost:5173/

</li>

</ol>

## Future Features

<ul>
  <li><strong>Leaderboard: </strong> Compete with friends and see who has the highest score. </li>
  <li><strong>Difficulty Levels: </strong> Adjust the difficulty of the quizzes based on user preferences.</li>
  <li><strong>More Quiz Modes: </strong> Add new games or expand on current ones. </li>
  <li><strong>Social Media Integration: </strong> Share your scores and challenge friends directly from the app. </li>
</ul>
