export default async function handler(req, res) {
  const webhookURL = "https://discord.com/api/webhooks/1471517813884846294/KkcPPqk1IhxeeFL2Ge6sT6N-I6OtwAFeeJ15u3VLGtFwcpscG1R2QlBG2kpgjMt79Mqq";

  if (req.method === "POST") {
    await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: "💘 KAŽKAS PASPAUDĖ YES VALENTINE!" })
    });
    return res.status(200).json({ success: true });
  }

  res.status(405).json({ error: "Method not allowed" });
}
