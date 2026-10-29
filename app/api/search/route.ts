import { searchKnowledge, searchRateLimit } from "@/lib/agent-search";

export const runtime = "nodejs";
export function GET(request: Request) {
  const headers = { "Cache-Control": "no-store", "Access-Control-Allow-Origin": "*" };
  const retry = searchRateLimit(request);
  if (retry) return Response.json({ error: "Слишком много запросов", retry_after: retry }, { status: 429, headers: { ...headers, "Retry-After": String(retry) } });
  try { return Response.json(searchKnowledge(new URL(request.url).searchParams), { headers }); }
  catch (error) {
    if (error instanceof Error && /^(q |limit:|offset:|Неизвестный)/.test(error.message)) {
      return Response.json({ error: error.message }, { status: 400, headers });
    }
    throw error;
  }
}
