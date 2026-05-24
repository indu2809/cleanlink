import { useState } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/shorten",
        {
          originalUrl: url,
        }
      );

      setShortUrl(response.data.shortUrl);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1>CleanLink</h1>

      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
        }}
      />

      <button onClick={handleShorten}>
        Shorten
      </button>

      {shortUrl && (
        <a href={shortUrl} target="_blank">
          {shortUrl}
        </a>
      )}
    </div>
  );
}

export default App;