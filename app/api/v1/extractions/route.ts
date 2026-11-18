import { extract, errorResponse, jsonlResponse, parseGet, parsePost } from "@/lib/english-extractions";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const headers = {"Cache-Control":"no-store", "Access-Control-Allow-Origin":"*"};
export function GET(request: Request) {
  try {
    const result = extract(parseGet(request));
    return result.selection.format === "jsonl" ? jsonlResponse(result) : Response.json(result, {headers});
  } catch (error) { return errorResponse(error); }
}
export async function POST(request: Request) {
  try {
    const result = extract(await parsePost(request));
    return result.selection.format === "jsonl" ? jsonlResponse(result) : Response.json(result, {headers});
  } catch (error) { return errorResponse(error); }
}
export function OPTIONS() {
  return new Response(null, {status:204, headers:{...headers, "Access-Control-Allow-Methods":"GET, POST, OPTIONS", "Access-Control-Allow-Headers":"Content-Type", "Access-Control-Max-Age":"600"}});
}
