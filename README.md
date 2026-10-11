# Task Dashboard Assignment

## File Organization
Here is the structure of my project files:
- `index.html`: Contains the basic DOM structure and buttons.
- `styles.css`: Minimal styling for the page and line-through effect for completed tasks.
- `taskManager.js`: Contains Task and TaskManager classes. I used map and filter methods to make sure the original array is not mutated.
- `api.js`: Simulates a server request with a 1.5 second delay using Promise and setTimeout.
- `main.js`: This is the main orchestration file. It handles button clicks, DOM rendering, async data fetching, and JSON parsing.

## Challenges I Faced
- Writing immutable updates in `taskManager.js` was a bit confusing at first. Using `map` and `filter` instead of just changing the array directly took some practice.
- Connecting the async server simulation (`api.js`) to the `main.js` and waiting for the data with `async/await` was challenging. 
- I also spent some time figuring out how to recreate the Task instances after parsing the JSON data, but I managed to make it work.