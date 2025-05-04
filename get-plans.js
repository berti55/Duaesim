
exports.handler = async function(event, context) {
  const API_KEY = "b761727e92c8408182f2cb008ebc2fde";  // API key from eSIMAccess

  try {
    const response = await fetch("https://api.esimaccess.com/api/v1/plans", {
      headers: {
        "Authorization": `Bearer ${API_KEY}`
      }
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch plans", detail: err.message })
    };
  }
};
