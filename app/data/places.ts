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
    subtitle: "warm, leicht, salzige Luft",

    // 👇 WICHTIG – hier dein neuer Dateiname
    cover: "/images/places/thailand/coverThailand.avif",

    hero: "/images/places/thailand/hero.jpg",

    collage: [
      { src: "/images/places/thailand/1.jpg", alt: "Thailand 1" },
      { src: "/images/places/thailand/2.jpg", alt: "Thailand 2" },
      { src: "/images/places/thailand/3.jpg", alt: "Thailand 3" },
    ],

    day: {
      morning: "Früher Kaffee, Barfuß, langsam ankommen.",
      noon: "Märkte, Schatten suchen, treiben lassen.",
      evening: "Golden Hour, ein langer Spaziergang.",
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
    subtitle: "Nordsee, Wind, Weite",

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
