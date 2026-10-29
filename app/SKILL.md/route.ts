import { knowledgeResponse } from "@/lib/agent-http";
export const runtime = "nodejs";
export function GET(request: Request) { return knowledgeResponse(request, "SKILL.md"); }
