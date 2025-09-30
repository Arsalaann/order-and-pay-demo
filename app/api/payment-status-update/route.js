import { supabaseAdmin } from "../../lib/supabaseAdmin";

export async function POST(request) {
  const url=process.env.NEXT_PUBLIC_BASE_URL||"http://localhost:3000";
  const formData = await request.formData();
  const txnid = formData.get("txnid");
  const status = formData.get("status");

  if (!txnid) {
    return new Response("Missing txnid", { status: 400 });
  }

  await supabaseAdmin
    .from("orders")
    .update({ status: status === "success" ? "paid" : "failed" })
    .eq("id", txnid);

  return Response.redirect(
    `${url}/${status === "success" ? "success" : "failure"}`
  );
}
