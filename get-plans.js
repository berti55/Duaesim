
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      plans: [
        { name: "Test Plan 5GB", data: "5GB", price: 5.99, currency: "EUR" },
        { name: "Test Plan 10GB", data: "10GB", price: 9.99, currency: "EUR" },
        { name: "Unlimited Plan", data: "Unlimited", price: 19.99, currency: "EUR" }
      ]
    }),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  };
};
