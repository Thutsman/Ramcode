export type SubmitResult = { ok: true } | { ok: false; error: string };

/** Posts a form payload to the serverless endpoint (api/rfq.ts). */
export async function submitForm(payload: Record<string, unknown>): Promise<SubmitResult> {
  try {
    const res = await fetch("/api/rfq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) return { ok: true };
    const data = (await res.json().catch(() => ({}))) as { error?: string };
    return { ok: false, error: data.error ?? "Something went wrong. Please try WhatsApp or email instead." };
  } catch {
    return { ok: false, error: "Network error. Please check your connection or use WhatsApp instead." };
  }
}
