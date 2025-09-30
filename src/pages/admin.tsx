import { useState } from 'react';
import Navbar from '@/components/Navbar';
import styles from './admin.module.css';

interface ApiResponse {
  message: string;
  timestamp: string;
  status: string;
  data?: any;
  receivedData?: any;
  parameter?: string;
}

export default function AdminPage() {
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const callApi = async (endpoint: string, method: 'GET' | 'POST' = 'GET', body?: any) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (body) {
        options.body = JSON.stringify(body);
      }

      const res = await fetch(endpoint, options);
      
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await res.text();
        throw new Error(`Expected JSON response but got: ${text.substring(0, 100)}...`);
      }

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const testHelloWorld = () => callApi('/api/hello');
  
  const testHelloPost = () => callApi('/api/hello', 'POST');

  return (
    <>
      <Navbar />
      <div className={styles.adminContainer}>
        <div className={styles.adminContent}>
          <h1 className={styles.title}>DarcOS Admin Panel</h1>
          <p className={styles.subtitle}>Test API Endpoints</p>

          <div className={styles.testSection}>
            <h2 className={styles.sectionTitle}>API Testing</h2>
            
            <div className={styles.buttonGroup}>
              <button 
                onClick={testHelloWorld}
                disabled={loading}
                className={styles.button}
              >
                Test Hello World (GET)
              </button>
              
              <button 
                onClick={testHelloPost}
                disabled={loading}
                className={styles.button}
              >
                Test Hello World (POST)
              </button>
            </div>
          </div>

          {loading && (
            <div className={styles.loading}>
              <div className={styles.spinner}></div>
              <p>Calling API...</p>
            </div>
          )}

          {error && (
            <div className={styles.error}>
              <h3>Error:</h3>
              <p>{error}</p>
            </div>
          )}

          {response && (
            <div className={styles.response}>
              <h3>API Response:</h3>
              <pre className={styles.jsonResponse}>
                {JSON.stringify(response, null, 2)}
              </pre>
            </div>
          )}

          <div className={styles.info}>
            <h3>Available Endpoints:</h3>
            <ul className={styles.endpointList}>
              <li><code>GET /api/hello</code> - Returns {`{text: "hello world response"}`}</li>
              <li><code>POST /api/hello</code> - Returns {`{text: "hello world response"}`}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
