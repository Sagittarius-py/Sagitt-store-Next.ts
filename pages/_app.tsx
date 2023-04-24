import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect, useState} from 'react';

function App({ Component, pageProps }: AppProps) {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);

  
  return (
    render ? 
      <div suppressHydrationWarning>
        <Component {...pageProps} />
      </div>
     : null
  );
}

export default App;