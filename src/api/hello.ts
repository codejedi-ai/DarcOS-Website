import { defineApi } from 'ice';

export default defineApi({
  // GET /api/hello
  'GET /api/hello': async (req, res) => {
    try {
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
    } catch (error) {
      res.status(500).json({
        message: 'Internal server error',
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  },

  // POST /api/hello
  'POST /api/hello': async (req, res) => {
    try {
      const { name } = req.body || {};
      
      res.status(200).json({
        message: `Hello ${name || 'World'} from DarcOS API!`,
        timestamp: new Date().toISOString(),
        status: 'success',
        receivedData: req.body
      });
    } catch (error) {
      res.status(500).json({
        message: 'Internal server error',
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  },

  // GET /api/hello/:name
  'GET /api/hello/:name': async (req, res) => {
    try {
      const { name } = req.params || {};
      
      res.status(200).json({
        message: `Hello ${name} from DarcOS API!`,
        timestamp: new Date().toISOString(),
        status: 'success',
        parameter: name
      });
    } catch (error) {
      res.status(500).json({
        message: 'Internal server error',
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }
});
