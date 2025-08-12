// Netlify function for health check
exports.handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        status: 'healthy',
        timestamp: new Date().toISOString(),
        service: 'kapunka-netlify-functions',
        version: '1.0.0'
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        status: 'unhealthy',
        error: error.message 
      }),
    };
  }
};
