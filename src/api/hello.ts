// ICE.js API Route
export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (req.method === 'GET') {
      // Handle GET /api/hello
      if (req.query.name) {
        // Handle GET /api/hello?name=...
        res.status(200).json({
          message: `Hello ${req.query.name} from DarcOS API!`,
          timestamp: new Date().toISOString(),
          status: 'success',
          parameter: req.query.name
        });
      } else {
        // Handle GET /api/hello
        res.status(200).json({
          message: 'Hello World from DarcOS API!',
          timestamp: new Date().toISOString(),
          status: 'success',
          data: {
            version: '1.0.0',
            framework: 'ICE.js',
            environment: process.env.NODE_ENV || 'development'
          }
        });
      }
    } else if (req.method === 'POST') {
      // Handle POST /api/hello
      const body = req.body || {};
      const { name } = body;
      
      res.status(200).json({
        message: `Hello ${name || 'World'} from DarcOS API!`,
        timestamp: new Date().toISOString(),
        status: 'success',
        receivedData: body
      });
    } else {
      res.status(405).json({
        message: 'Method not allowed',
        status: 'error'
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
