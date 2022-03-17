import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(function getAuth0IdToken(req, res) {
  try {
    const { idToken } = getSession(req, res);
    res.end(JSON.stringify(idToken));
  } catch (error) {
    res.status(error.status || 500).end(error.message);
  }
});
