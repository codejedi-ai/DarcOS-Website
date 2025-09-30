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
      res.status(200).json({
        text: "hello world response"
      });
    } else if (req.method === 'POST') {
      // Handle POST /api/hello
      res.status(200).json({
        text: "hello world response"
      });
    } else {
      res.status(405).json({
        text: "Method not allowed"
      });
    }
  } catch (error) {
    res.status(500).json({
      text: "Internal server error"
    });
  }
}
