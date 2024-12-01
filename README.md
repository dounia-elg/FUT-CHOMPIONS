# FUT-CHOMPIONS

A web-based football team builder application that allows users to view a stadium layout, select players from a list, and manage the team by adding or removing players. The application features modals for displaying player details and adding new players to the list.

## Features

- **Stadium Layout**: Displays a football field where players can be selected and positioned.
- **Player Selection Modal**: Users can select players from a pre-defined list (fetched from `players.json`).
- **Add New Player**: A form to add new players, including player photo, name, rating, position, and club.
- **Responsive Design**: The layout adjusts based on screen size, from mobile to desktop.
  
## Tech Stack

- **HTML5**
- **Tailwind CSS** for styling and layout
- **JavaScript** (Vanilla)
- **JSON** for player data storage
- **Responsive Design** for mobile and desktop views

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/FUT-CHOMPIONS.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd FUT-CHOMPIONS
    ```

3. **Open the project in your browser**:
    Open the `index.html` file in your preferred browser to start using the app.

## How to Use

1. **Select a Player**: Click the `+` icon on any player spot to open a modal showing the player list.
2. **Add a Player**: Use the "Add Player" form to create a new player and add them to the list.
3. **Select Player for Position**: Click on a player in the modal to assign them to a position on the field.

## File Structure

- **index.html**: The main HTML structure of the project.
- **styles.css**: The main CSS file containing the styling and layout (using Tailwind CSS).
- **scripts.js**: JavaScript file handling player selection and form submissions.
- **players.json**: JSON file containing player data (name, photo, rating, position, club).
- **imgs/**: Directory containing images used in the project.

## Contributing

Feel free to fork this repository, create an issue, or submit a pull request if you have suggestions or improvements!


## Acknowledgements

- This project uses Tailwind CSS for styling and layout.
- This project uses a custom JSON file for player data.
- Thank you to all the developers who have contributed to open-source libraries and tools that helped in building this application.

