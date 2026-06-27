export const siteConfig = {
  name: "Ismart Skills",
  nameCompact: "IsmartSkills",
  nameLegal: "IsmartSkills Ltd",
  tagline: "Industry-Ready IT Training",
  email: "info@ismartskills.uk",
  phone: {
    display: "020 3819 0333",
    tel: "02038190333",
  },
  whatsapp: {
    display: "07388 669345",
    tel: "447388669345",
  },
  address: {
    line1: "Suite-G, 58-60, Weller House",
    line2: "Longbridge Rd, Barking",
    postcode: "IG11 8RT",
    full: "Suite-G, 58-60, Weller House, Longbridge Rd, Barking IG11 8RT",
    mapsUrl: "https://maps.app.goo.gl/73wiN7gpA4X6ex4j6",
    mapsEmbed:
      "https://maps.google.com/maps?q=Suite-G,+Weller+House,+58-60+Longbridge+Rd,+Barking+IG11+8RT&hl=en&z=16&output=embed",
  },
  colors: {
    primary: "#004890",
    accent: "#FF9E0D",
    signal: "#4DA3D9",
  },
} as const;

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(
    message ?? "Hi, I'm interested in your IT training programmes",
  );
  return `https://wa.me/${siteConfig.whatsapp.tel}?text=${text}`;
}
