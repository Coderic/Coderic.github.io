// install with: npm install @octokit/webhooks
const { Webhooks, createNodeMiddleware } = require("@octokit/webhooks");
const webhooks = new Webhooks({
  secret: "mysecret",
});

webhooks.onAny(({ id, name, payload }) => {
  console.log(name, "event received");
});

require("http").createServer(createNodeMiddleware(webhooks, { path: '/'})).listen(3000);
// can now receive webhook events at /api/github/webhooks