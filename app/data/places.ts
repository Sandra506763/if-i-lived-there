export type Place = {
  slug: "thailand" | "lofoten" | "sylt";
  title: string;
  subtitle: string;
  cover: string;
  hero: string;
  collage: { src: string; alt: string }[];
  day: {
    morning: string;
    noon: string;
    evening: string;
    note: string;
  };
};

export const places: Place[] = [
  {
    slug: "thailand",
    title: "Thailand",
    subtitle: "warm, leicht, Sonne",

    // 👇 WICHTIG – hier dein neuer Dateiname
    cover: "/images/places/thailand/coverThailand.avif",

    hero: "/images/places/thailand/hero.avif",

    collage: [
      { src: "/images/places/thailand/ElefantenThailand.webp", alt: "Thailand Elefant" },
      { src: "/images/places/thailand/RotesThaiCurryThailand.webp", alt: "Thailand Essen" },
      { src: "/images/places/thailand/MeerThailand.webp", alt: "Thailand Meer" },
      { src: "/images/places/thailand/StadtThailand.avif", alt: "Thailand Nachtleben" },
      { src: "/images/places/thailand/TempelThailand.avif", alt: "Thailand Nachtleben" },
    ],
    

    day: {
      morning: "Früher Kaffee, Barfuß am Strand, langsam ankommen.",
      noon: "Märkte, Schatten suchen, treiben lassen.",
      evening: "Golden Hour, köstliche Essen geniessen.",
      note: "07:30 – Kaffee & Meerblick.",
    },
  },

  {
    slug: "lofoten",
    title: "Lofoten",
    subtitle: "kalt, klar, still",

    cover: "/images/places/lofoten/coverLofoten.avif",

    hero: "/images/places/lofoten/hero.jpg",

    collage: [
      { src: "/images/places/lofoten/1.jpg", alt: "Lofoten 1" },
      { src: "/images/places/lofoten/2.jpg", alt: "Lofoten 2" },
      { src: "/images/places/lofoten/3.jpg", alt: "Lofoten 3" },
    ],

    day: {
      morning: "Tee, Blick aufs Wasser.",
      noon: "Wandern, klare Luft.",
      evening: "Lichter im Fenster.",
      note: "16:12 – Stille ist hier ein Ort.",
    },
  },

  {
    slug: "sylt",
    title: "Sylt",
    subtitle: "Nordsee, Wind, salzige Luft",

    cover: "/images/places/sylt/coverSylt.avif",

    hero: "/images/places/sylt/hero.jpg",

    collage: [
      { src: "/images/places/sylt/1.jpg", alt: "Sylt 1" },
      { src: "/images/places/sylt/2.jpg", alt: "Sylt 2" },
      { src: "/images/places/sylt/3.jpg", alt: "Sylt 3" },
    ],

    day: {
      morning: "Kalter Wind, klarer Kopf.",
      noon: "Dünen, Radfahren.",
      evening: "Sonnenuntergang.",
      note: "18:47 – Wind im Gesicht.",
    },
  },
];

export function getPlace(slug: string) {
  return places.find((p) => p.slug === slug);
}