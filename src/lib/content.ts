import { getCollection, getEntry } from "astro:content";

export const categoryLabels = {
  fotografia: "Fotografía",
  retratos: "Retratos",
  videoclips: "Videoclips",
  eventos: "Eventos",
  "diseno-grafico": "Diseño gráfico",
} as const;

export async function getPublishedWorks() {
  const [works, orderEntries] = await Promise.all([
    getCollection("works", ({ data }) => data.published),
    getCollection("galleryOrder"),
  ]);
  const order = orderEntries[0]?.data.items ?? [];
  const byId = new Map(works.map((work) => [work.id, work]));
  const ordered = order.flatMap((id) => {
    const work = byId.get(id);
    if (work) byId.delete(id);
    return work ? [work] : [];
  });
  return [...ordered, ...[...byId.values()].sort((a, b) => b.data.date.localeCompare(a.data.date))];
}

export async function getFeaturedWorks() {
  const [works, featuredEntries] = await Promise.all([
    getCollection("works", ({ data }) => data.published),
    getCollection("featured"),
  ]);
  const byId = new Map(works.map((work) => [work.id, work]));
  return (featuredEntries[0]?.data.items ?? []).flatMap((id) => {
    const work = byId.get(id);
    return work ? [work] : [];
  });
}

export async function getSiteSettings() {
  const entries = await getCollection("settings");
  if (!entries[0]) throw new Error("Falta configurar src/content/data/site-settings.json");
  return entries[0].data;
}

export async function getBrandList() {
  const entries = await getCollection("brands");
  return entries[0]?.data.items ?? [];
}

export async function getWork(id: string) {
  const work = await getEntry("works", id);
  return work?.data.published ? work : undefined;
}

export function getVideoEmbedUrl(rawUrl?: string) {
  if (!rawUrl) return null;
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" || url.username || url.password) return null;

  if (url.hostname === "youtu.be") {
    const id = url.pathname.slice(1);
    return id ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}` : null;
  }
  if (url.hostname === "www.youtube.com" || url.hostname === "youtube.com") {
    const id = url.searchParams.get("v");
    return id ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}` : null;
  }
  if (url.hostname === "www.youtube-nocookie.com") {
    return url.pathname.startsWith("/embed/") ? url.href : null;
  }
  if (url.hostname === "vimeo.com" || url.hostname === "www.vimeo.com") {
    const id = url.pathname.split("/").filter(Boolean).pop();
    return id && /^\d+$/.test(id) ? `https://player.vimeo.com/video/${id}` : null;
  }
  if (url.hostname === "player.vimeo.com" && /^\/video\/\d+$/.test(url.pathname)) return url.href;
  return null;
}

export function getWhatsAppUrl(number: string, message = "") {
  const digits = number.replace(/\D/g, "");
  if (!digits) return "https://wa.me/";
  return `https://wa.me/${digits}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}

export function safeExternalUrl(value?: string) {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}
