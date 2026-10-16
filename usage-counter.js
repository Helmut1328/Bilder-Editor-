/*
 * Bilder zusammenfügen – Nutzungszähler
 * Sendet nur ein app_start-Ereignis. Bilder und Bearbeitungsdaten werden nicht übertragen.
 * Bei Offline-/Netzwerkfehlern bleibt der Editor unbeeinträchtigt.
 */
(() => {
  "use strict";
  const COUNTER_URL =
    "https://lqfplicjfqmtehffqhjw.supabase.co/functions/v1/bilder-zaehler";
  try {
    fetch(COUNTER_URL, {
      method: "POST",
      mode: "cors",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: "app_start" }),
      keepalive: true
    }).catch(() => {});
  } catch (_) {}
})();
