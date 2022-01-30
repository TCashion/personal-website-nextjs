import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { herokuProjectsUrls } from '../lib/projects/projectsData';

function App({ Component, pageProps }: AppProps) {
  const [wakeUpCalled, setWakeUpCalled] = useState(false);

  useEffect(() => {
    if (!wakeUpCalled) {
      herokuProjectsUrls.forEach((projectUrl) => {
        if (projectUrl) {
          fetch(projectUrl, { mode: 'no-cors' }).then((res) =>
            console.log(`Woke up ${projectUrl}`)
          );
        }
      });
      setWakeUpCalled(true);
    }
  }, []);

  return <Component {...pageProps} />;
}

export default App;
