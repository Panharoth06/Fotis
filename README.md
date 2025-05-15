Brave Search Engine Demo
A simple web-based search engine demo that uses the Brave Search API to fetch and display search results. The application supports filtering results by type: All (web), Images, Videos, and News. It consists of a Node.js/Express backend proxy server and a frontend built with HTML, JavaScript, and Tailwind CSS.
Features

Search for web content using the Brave Search API.
Filter results by type: All (web), Images, Videos, or News.
Responsive design with Tailwind CSS.
Secure API key handling using environment variables.
CORS-enabled backend for frontend access.
Error handling for invalid queries or API failures.

Prerequisites

Node.js (v18 or higher recommended).
A valid Brave Search API key.
A modern web browser (e.g., Chrome, Firefox).

Installation

Clone the repository (or download the project files):
git clone <repository-url>
cd brave-search-demo


Install dependencies:
npm install

This installs the required Node.js packages: express, cors, dotenv, and node-fetch.

Set up environment variables:

Create a .env file in the project root.
Add your Brave Search API key:BRAVE_API_KEY=your_brave_api_key_here


Replace your_brave_api_key_here with your actual API key from the Brave Search API dashboard.


Ensure the frontend file:

The frontend is a single index.html file located in the project root. No additional setup is required for the frontend.



Running the Application

Start the backend server:
node server.js

The server will run on http://localhost:5500. You should see:
Proxy server running on http://localhost:5500


Serve the frontend:

To avoid CORS issues when loading index.html, use a local web server. For example, install live-server globally:npm install -g live-server


Then, run:live-server


This will open index.html in your default browser, typically at http://localhost:8080.


Access the application:

Open your browser and navigate to the URL provided by live-server (e.g., http://localhost:8080).
Enter a search query, select a filter (All, Images, Videos, News), and click "Search" to see results.



Project Structure
brave-search-demo/
├── index.html       # Frontend HTML with JavaScript and Tailwind CSS
├── server.js        # Backend Express server
├── .env             # Environment variables (not committed)
├── package.json     # Node.js dependencies and scripts
└── README.md        # This file

Usage

Search: Type a query into the search bar and click "Search" or press Enter.
Filters: Click the filter buttons (All, Images, Videos, News) to switch between result types. The "All" filter shows web results by default.
Results: Results are displayed with thumbnails, titles, descriptions, and links (where applicable). The format varies by filter type:
All (Web): Shows web page results with titles, descriptions, and site information.
Images: Displays image thumbnails with source links.
Videos: Shows video thumbnails with durations and source links.
News: Displays news articles with publication dates and summaries.



API Details
The application uses the Brave Search API with the following endpoints:

/web/search: Web search results.
/images/search: Image search results.
/videos/search: Video search results.
/news/search: News search results.

The backend proxies requests to these endpoints, passing the API key securely via headers.
Troubleshooting

CORS Errors: Ensure the backend server is running at http://localhost:5500 and that index.html is served via a local server (e.g., live-server).
API Errors:
Verify your BRAVE_API_KEY in the .env file.
Check the Brave Search API dashboard for rate limits or account issues.
Log the API response in the browser console (console.log(data)) to debug response structures.


No Results: Some queries may return no results for certain filters (e.g., News). Try different queries or check the API response.
Thumbnails Missing: Some results may lack thumbnails. The frontend uses a fallback (empty src) in such cases.

Limitations

The Brave Search API may have rate limits depending on your plan. Check the Brave API documentation for details.
The frontend is minimal and may need additional styling for mobile responsiveness.
Pagination is not implemented; only the first page of results is shown.

Future Improvements

Add pagination support for navigating multiple result pages.
Implement a loading spinner for better UX during searches.
Enhance mobile responsiveness with additional Tailwind CSS classes.
Add input validation to prevent empty searches.
Support additional Brave Search API features (e.g., safe search, country filtering).

Contributing
Contributions are welcome! Please:

Fork the repository.
Create a feature branch (git checkout -b feature-name).
Commit your changes (git commit -m "Add feature").
Push to the branch (git push origin feature-name).
Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments

Brave Search API for providing the search functionality.
Tailwind CSS for styling.
Node.js and Express for the backend.

