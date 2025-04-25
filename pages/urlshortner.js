import React, { useState } from 'react';
import InputBox from '../components/InputBox';

function UrlShortener() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = async () => {
    const res = await fetch('http://localhost:5000/api/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullUrl: url }),
    });
    const data = await res.json();
    setShortUrl(`http://localhost:5000/${data.shortId}`);
  };

  return (
    <div>
      <InputBox value={url} onChange={setUrl} />
      <button onClick={handleShorten}>Shorten</button>
      {shortUrl && (
        <div>
          <p>Short URL:</p>
          <a href={shortUrl}>{shortUrl}</a>
        </div>
      )}
    </div>
  );
}

export default UrlShortener;
