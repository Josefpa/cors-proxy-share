module.exports = {
  reactStrictMode: true,
}

  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }, // Adjust the value as necessary
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, PATCH, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" }
        ],
      },
    ]
  },
}
