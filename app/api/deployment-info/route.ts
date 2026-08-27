export const dynamic = "force-dynamic";

export function GET() {
  const payload = {
    commitSha: process.env.RAILWAY_GIT_COMMIT_SHA ?? "local",
    branch: process.env.RAILWAY_GIT_BRANCH ?? "local",
    environment: process.env.RAILWAY_ENVIRONMENT_NAME ?? "local",
    service: process.env.RAILWAY_SERVICE_NAME ?? "local",
  };

  return Response.json(payload, {
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
