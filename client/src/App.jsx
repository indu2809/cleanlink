import { useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

function App() {

  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

const handleShorten = async () => {

  try {

    new URL(url);

  } catch {

    setError("Please enter a valid URL");
    return;
  }

  try {

    setLoading(true);
    setError("");
    setCopied(false);

    const response = await axios.post(
    `${API_URL}/api/url/shorten`,
   {
     originalUrl: url,
   }
 );
    setShortUrl(response.data.shortUrl);

  } catch (error) {

    console.log(error);
    setError("Something went wrong");

  } finally {

    setLoading(false);

  }
};
  const handleCopy = async () => {

    await navigator.clipboard.writeText(shortUrl);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">

        <h1 className="text-2xl font-bold">
          CleanLink
        </h1>

      </nav>

      {/* Hero */}
      <main className="flex-1 flex items-center justify-center px-4">

        <div className="max-w-3xl w-full text-center">

          <h1 className="text-6xl font-bold leading-tight mb-6">
            Shorten Your Links
            <span className="text-zinc-400"> Instantly</span>
          </h1>

          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            Transform long messy URLs into clean and shareable links in seconds.
          </p>

          {/* URL Box */}
          <div className="bg-zinc-900 p-4 rounded-2xl shadow-2xl">

            <div className="flex flex-col md:flex-row gap-4">

              <input
                type="text"
                placeholder="Paste your long URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 px-5 py-4 rounded-xl bg-zinc-800 outline-none"
              />

              <button
                onClick={handleShorten}
                className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
              >

                {loading ? "Loading..." : "Shorten URL"}

              </button>

            </div>

            {error && (
              <p className="text-red-400 mt-4 text-left">
                {error}
              </p>
            )}

            {shortUrl && (
              <div className="mt-6 bg-zinc-800 p-4 rounded-xl text-left">

                <p className="text-zinc-400 mb-2">
                  Your Short URL
                </p>

                <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">

                  <a
                    href={shortUrl}
                    target="_blank"
                    className="text-blue-400 break-all"
                  >
                    {shortUrl}
                  </a>

                  <button
                    onClick={handleCopy}
                    className="bg-white text-black px-5 py-2 rounded-lg font-medium"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>

                </div>

              </div>
            )}

          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">

            <div className="bg-zinc-900 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">
                Fast
              </h3>

              <p className="text-zinc-400">
                Generate short links instantly with lightning speed.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">
                Secure
              </h3>

              <p className="text-zinc-400">
                Your URLs are safely stored in the cloud.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">
                Simple
              </h3>

              <p className="text-zinc-400">
                Clean minimal experience designed for everyone.
              </p>
            </div>

          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className=" mt-10 border-t border-zinc-800 py-6 text-center text-zinc-500">

        <p>
          © 2026 CleanLink. Built with React, Node.js and MongoDB.
        </p>

      </footer>

    </div>
  );
}

export default App;