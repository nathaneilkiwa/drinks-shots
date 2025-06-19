🍹 Drink Discovery API Project
A simple and responsive web app that allows users to explore a variety of drinks using a custom-built API. The app fetches drink data based on categories, ingredients, or search terms and displays them in an engaging, user-friendly interface.

⚙️ How It's Made
Tech Stack:

Frontend: HTML and JavaScript


API: Custom RESTful API built to serve drink data

The frontend interacts with a RESTful API that returns drink data in JSON format. I implemented fetch requests to dynamically retrieve and display drink details including name, image, ingredients, and preparation instructions. The API supports filtering by drink type, ingredients, and custom queries.

🚀 Optimizations
Implemented client-side caching using localStorage to reduce unnecessary API calls.

Optimized image loading using lazy loading and reduced payload size by excluding unused fields.

Refactored asynchronous code to improve readability and performance (reduced response time by ~50%).

📚 Lessons Learned
This project deepened my understanding of building and consuming APIs. I learned how to structure API endpoints for flexibility and scalability, handle errors gracefully on the frontend, and improve performance with caching and minimal data transfer. It also reinforced the importance of clean UI design when displaying dynamically loaded content.
