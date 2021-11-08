export default async function preview(req, res) {
  const secret = process.env.GRAPHQL_API_TOKEN;

  // Check the secret and next parameters
  if (secret && req.query.secret !== secret) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the homepage
  res.writeHead(307, { Location: "/" });
  res.end();
}
