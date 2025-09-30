import { defineApi } from 'ice';

export default defineApi({
  // GET /api/hello
  'GET /api/hello': async (req, res) => {
    res.json({
      message: 'Hello World from DarcOS API!',
      timestamp: new Date().toISOString(),
      status: 'success',
      data: {
        version: '1.0.0',
        framework: 'ICE.js',
        environment: process.env.NODE_ENV || 'development'
      }
    });
  },

  // POST /api/hello
  'POST /api/hello': async (req, res) => {
    const { name } = req.body;
    
    res.json({
      message: `Hello ${name || 'World'} from DarcOS API!`,
      timestamp: new Date().toISOString(),
      status: 'success',
      receivedData: req.body
    });
  },

  // GET /api/hello/:name
  'GET /api/hello/:name': async (req, res) => {
    const { name } = req.params;
    
    res.json({
      message: `Hello ${name} from DarcOS API!`,
      timestamp: new Date().toISOString(),
      status: 'success',
      parameter: name
    });
  }
});
