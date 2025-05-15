const express = require("express");
const cors = require("cors");
require("dotenv").config();

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = 5500;
const BRAVE_API_KEY = process.env.BRAVE_API_KEY;

app.use(cors());

app.get("/search", async (req, res) => {
  const query = req.query.q;
  const type = req.query.type || "web"; // Default to web search

  if (!query) return res.status(400).json({ error: "Missing query" });

  const endpoints = {
    web: `https://api.search.brave.com/res/v1/web/search`,
    images: `https://api.search.brave.com/res/v1/images/search`,
    videos: `https://api.search.brave.com/res/v1/videos/search`,
    news: `https://api.search.brave.com/res/v1/news/search`,
  };

  const endpoint = endpoints[type] || endpoints.web; 

  try {
    const response = await fetch(`${endpoint}?q=${encodeURIComponent(query)}`, {
      headers: {
        Accept: "application/json",
        "X-Subscription-Token": BRAVE_API_KEY,
        "User-Agent": "MyBraveSearchApp/1.0",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res
        .status(response.status)
        .json({ error: "API request failed", details: errorText });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Search failed", details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
