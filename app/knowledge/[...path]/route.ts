import { knowledgeResponse } from "@/lib/agent-http";

export const runtime = "nodejs";
export function GET(request: Request, context: { params: Promise<{ path: string[] }> }) {
  return context.params.then(({ path }) => knowledgeResponse(request, path.join("/")));
}
