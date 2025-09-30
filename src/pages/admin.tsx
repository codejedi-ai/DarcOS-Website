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
  const [name, setName] = useState('');

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
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'API call failed');
      }

      setResponse(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const testHelloWorld = () => callApi('/api/hello');
  
  const testHelloWithName = () => {
    if (!name.trim()) {
      setError('Please enter a name');
      return;
    }
    callApi(`/api/hello/${encodeURIComponent(name)}`);
  };

  const testHelloPost = () => {
    if (!name.trim()) {
      setError('Please enter a name');
      return;
    }
    callApi('/api/hello', 'POST', { name });
  };

  return (
    <>
      <Navbar />
      <div className={styles.adminContainer}>
        <div className={styles.adminContent}>
          <h1 className={styles.title}>DarcOS Admin Panel</h1>
          <p className={styles.subtitle}>Test API Endpoints</p>

          <div className={styles.testSection}>
            <h2 className={styles.sectionTitle}>API Testing</h2>
            
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Name (for personalized endpoints):</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className={styles.input}
              />
            </div>

            <div className={styles.buttonGroup}>
              <button 
                onClick={testHelloWorld}
                disabled={loading}
                className={styles.button}
              >
                Test Hello World (GET)
              </button>
              
              <button 
                onClick={testHelloWithName}
                disabled={loading || !name.trim()}
                className={styles.button}
              >
                Test Hello with Name (GET)
              </button>
              
              <button 
                onClick={testHelloPost}
                disabled={loading || !name.trim()}
                className={styles.button}
              >
                Test Hello with Name (POST)
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
              <li><code>GET /api/hello</code> - Basic hello world</li>
              <li><code>GET /api/hello/:name</code> - Hello with name parameter</li>
              <li><code>POST /api/hello</code> - Hello with name in request body</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
