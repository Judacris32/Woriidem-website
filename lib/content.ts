// All site copy and data lives here so it can be updated in one place.
// Facts come from Gerald’s own documents, the NotjustOk feature (Feb 2025),
// The Independent (Dec 2023) and the public Spotify pages for each song.

export const site = {
  name: "Woriidem",
  fullName: "Uzochi Gerald Ihenacho",
  roles: "Songwriter · Composer · Artist Developer",
  email: "igerald278@gmail.com",
  location: "London, United Kingdom",
  label: "Woriidem Entertainment Ltd",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://woriidem.vercel.app",
  description:
    "Woriidem is a London-based songwriter, composer and artist developer, co-writer of songs with over 9 million Spotify streams, GMA Fan Choice Award winner and founder of Woriidem Entertainment Ltd.",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/credits", label: "Credits" },
  { href: "/music", label: "Music" },
  { href: "/about", label: "About" },
  { href: "/label", label: "Label" },
  { href: "/press", label: "Press" },
  { href: "/gallery", label: "Gallery" },
] as const;

export const socials = [
  { label: "SoundCloud", href: "https://soundcloud.com/worii_dem1_ng", icon: "soundcloud" },
  { label: "Email", href: `mailto:${site.email}`, icon: "mail" },
] as const;

export const stats = [
  { value: 9, suffix: "M+", label: "Spotify streams on songs I co-wrote" },
  { value: 100, suffix: "+", label: "Songs written and composed" },
  { value: 2023, suffix: "", label: "GMA Fan Choice Award, Season 5" },
  { value: 1, suffix: "", label: "Record label, built from scratch" },
];

export type Credit = {
  slug: string;
  title: string;
  artists: string;
  release: string;
  year: number;
  streams: string;
  role: string;
  cover: string;
  spotifyId: string;
  note: string;
  people: { name: string; instagram?: string }[];
};

export const credits: Credit[] = [
  {
    slug: "soul",
    title: "Soul",
    artists: "Salle × T.I Blaze",
    release: "Single",
    year: 2022,
    streams: "5M+",
    role: "Co-writer",
    cover: "/covers/soul.jpg",
    spotifyId: "7zzmZjmKamKniH1Lp6U0Lx",
    note:
      "Salle and T.I Blaze brought this one to life, and people never let it go. Five million plays later, it’s still the record I get asked about the most.",
    people: [
      { name: "Salle", instagram: "https://www.instagram.com/callmesalle" },
      { name: "T.I Blaze", instagram: "https://www.instagram.com/ti_blaze_" },
    ],
  },
  {
    slug: "gbana",
    title: "Gbana",
    artists: "Naka, Mekamzee",
    release: "Single",
    year: 2023,
    streams: "4.3M+",
    role: "Co-writer",
    cover: "/covers/gbana.jpg",
    spotifyId: "0yfeVj1PT3ZbM16eF12dN1",
    note:
      "Two minutes and nineteen seconds. Short enough that you play it again, and people did, more than four million times.",
    people: [{ name: "Naka" }, { name: "Mekamzee" }],
  },
  {
    slug: "forever",
    title: "Forever",
    artists: "Krrystal",
    release: "Rollercoaster",
    year: 2024,
    streams: "4K+",
    role: "Co-writer",
    cover: "/covers/forever.jpg",
    spotifyId: "1cJ5ONl7agFJtQHfcwHwp9",
    note:
      "I wrote this with Krrystal for Rollercoaster. Working with artists who are still building is the part of this job I’d never give up.",
    people: [{ name: "Krrystal", instagram: "https://www.instagram.com/kristanova" }],
  },
  {
    slug: "ebelebe",
    title: "Ebelebe",
    artists: "Blazer Q",
    release: "Years With Anna",
    year: 2019,
    streams: "4K+",
    role: "Co-writer",
    cover: "/covers/ebelebe.jpg",
    spotifyId: "1a9B71ekH2iEWVgJIjdwU8",
    note:
      "One of the first records I ever had my hands on, from Blazer Q’s Years With Anna. A lot of what I do now started in sessions like this.",
    people: [{ name: "Blazer Q", instagram: "https://www.instagram.com/iamblazer_q" }],
  },
];

export const collaborators = ["Salle", "T.I Blaze", "Naka", "Mekamzee", "Krrystal", "Blazer Q", "FAYAH"];

export const upcoming = {
  title: "Eddie Rose",
  artist: "FAYAH",
  detail: "Seven tracks I co-wrote with FAYAH. It’s finished and sitting tight until the time is right. Trust me, it’s worth the wait.",
};

export const hxppier = {
  title: "Hxppier 25",
  type: "Seven-track project",
  status: "Private preview",
  tracks: ["Stalling", "Choose", "Pose", "Abobi", "Stay Alive", "Deserve", "Pay Me"],
  soundcloud: "https://soundcloud.com/worii_dem1_ng",
};

export const quote = {
  text:
    "Songwriting goes far beyond words and melodies. I focus on understanding an artist’s core message and their emotions, then turning that into music people can truly relate to.",
  by: "Woriidem",
};

export const award = {
  title: "GMA Fan Choice Award",
  body: "Galaxy Music Awards, Season 5",
  date: "8 December 2023",
  place: "Port Harcourt, Rivers State",
  link: "https://galaxymusicawards.com/award-winners/2023-winners/",
  summary:
    "Of every category on the night, this is the one that means the most to me, because it’s decided by the people who actually listen. The fans voted, and at the fifth Galaxy Music Awards in Port Harcourt, the Fan Choice Award came home with me.",
};

export const press = [
  {
    outlet: "NotjustOk",
    title: "Woriidem Opens Up on the Realities of Running a Record Label",
    author: "Idris Adeleye",
    date: "3 February 2025",
    href: "https://notjustok.com/article/interviews/woriidem-on-the-realities-of-running-a-record-label/",
    excerpt:
      "I sat down with Idris Adeleye and talked honestly about songwriting, developing young artists and what it really costs, in time, money and patience, to keep an independent label going.",
  },
  {
    outlet: "The Independent",
    title: "Woriidem Wins GMA Fan Choice Award at the 5th Galaxy Music Awards",
    author: "Abisola Shojobi",
    date: "9 December 2023",
    href: "https://independent.ng/woriidem-wins-gma-fan-choice-award-at-the-5th-galaxy-music-awards-2/",
    excerpt:
      "The report from Port Harcourt the night after the fifth Galaxy Music Awards, when the Fan Choice Award went my way.",
  },
];

export const timeline = [
  { year: "2019", title: "Ebelebe", text: "I co-write Ebelebe for Blazer Q’s Years With Anna. One of my first real credits." },
  { year: "2022", title: "Soul", text: "Soul by Salle and T.I Blaze comes out and keeps growing, all the way past five million Spotify plays." },
  { year: "2023", title: "Gbana", text: "I co-write Gbana for Naka and Mekamzee. It’s now past four million plays." },
  { year: "Dec 2023", title: "Fan Choice Award", text: "The fans vote me the winner of the GMA Fan Choice Award at the fifth Galaxy Music Awards in Port Harcourt." },
  { year: "2024", title: "Forever", text: "I co-write Forever for Krrystal’s Rollercoaster." },
  { year: "Feb 2025", title: "NotjustOk feature", text: "I sit down with NotjustOk to talk about songwriting, artist development and running a label." },
  { year: "2025", title: "Hxppier 25", text: "I put my own voice on a record. Hxppier 25, seven tracks, is in private preview." },
];

export const shortBio =
  "Woriidem (Uzochi Gerald Ihenacho) is a London-based songwriter, composer and artist developer. He has written or composed more than 100 songs and co-written records for Salle, T.I Blaze, Naka, Mekamzee, Krrystal and Blazer Q, with over 9 million Spotify streams between them. He won the GMA Fan Choice Award in 2023 and runs Woriidem Entertainment Ltd.";

export type Photo = { src: string; alt: string; w: number; h: number };

export const photos: Photo[] = [
  { src: "/images/stage-mic-raised.jpg", alt: "Woriidem on stage in a purple floral shirt, microphone raised to the crowd", w: 1080, h: 720 },
  { src: "/images/portrait-couch.jpg", alt: "Woriidem seated on an amber sofa in a white sweatshirt and black cap", w: 608, h: 1080 },
  { src: "/images/stage-vest.jpg", alt: "Woriidem performing in a black puffer vest under red and pink stage lights", w: 720, h: 1080 },
  { src: "/images/stage-pointing.jpg", alt: "Woriidem pointing out to the crowd from a festival stage", w: 1080, h: 720 },
  { src: "/images/portrait-denim.jpg", alt: "Woriidem in a denim-print two-piece walking past an orange shipping container", w: 720, h: 1080 },
  { src: "/images/portrait-porch.jpg", alt: "Woriidem in sunglasses and a black graphic tee on a white porch", w: 720, h: 1080 },
  { src: "/images/crowd-moment.jpg", alt: "Woriidem with fans after a festival set", w: 1080, h: 720 },
  { src: "/images/stage-cash-throw.jpg", alt: "Woriidem performing as notes fly through the air above the stage", w: 720, h: 1080 },
  { src: "/images/portrait-beanie.jpg", alt: "Woriidem in a black beanie and vest, looking into the camera", w: 720, h: 1080 },
  { src: "/images/stage-smiling.jpg", alt: "Woriidem smiling on stage with the band behind him", w: 1080, h: 722 },
  { src: "/images/portrait-studio.jpg", alt: "Woriidem in a white sweatshirt and black cap, finger to his temple", w: 940, h: 1359 },
  { src: "/images/stage-arm-out.jpg", alt: "Woriidem with his arm outstretched mid-performance", w: 1080, h: 720 },
  { src: "/images/portrait-porch-smile.jpg", alt: "Woriidem laughing on a white porch", w: 720, h: 1080 },
  { src: "/images/stage-vest-chest.jpg", alt: "Woriidem singing with a hand on his chest", w: 720, h: 1080 },
  { src: "/images/portrait-sofa-wide.jpg", alt: "Woriidem on a sofa, phone in hand, in a quiet room", w: 720, h: 1080 },
  { src: "/images/stage-walkout.jpg", alt: "Woriidem walking towards the band on a lit stage", w: 1080, h: 720 },
];
