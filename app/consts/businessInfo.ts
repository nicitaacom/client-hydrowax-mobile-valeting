// 1. Core business data used across the app (contact, hours, location, rating)
export const businessInfo = {
  name: "",
  yearsInBusiness: 1, // numeric for easy usage in UI
  yearsOfGuarantee: 1, // satisfaction guarantee in years
  phone: "+44 148 226 22 40",
  timezone: "Europe/London",
  email: "fine-shine-detailing@gmail.com",
  websiteUrl: "https://fine-shine-detailing.com",
  yellPagesUrl: "",
  logoUrl: "https://i.imgur.com/s0fjF9V.png",
  cta: "get free quote",

  // 2. Location / map
  address: {
    street: "135 Deansfield Road",
    city: "Wolverhampton",
    county: "West Midlands",
    postalCode: "WV1 2JZ",
    country: "United Kingdom",
  },
  coordinates: { latitude: 52.5914, longitude: -2.11 },
  mapUrl:
    "https://www.google.com/maps/place/Hydrowax+Mobile+Valeting/@53.8742525,-0.4773261,13.99z/data=!4m16!1m7!3m6!1s0xa18c5587c123c57d:0x8c5c0eaee3e2766b!2sHydrowax+Mobile+Valeting!8m2!3d53.8742525!4d-0.4773261!16s%2Fg%2F11ckvg1dmb!3m7!1s0xa18c5587c123c57d:0x8c5c0eaee3e2766b!8m2!3d53.8742525!4d-0.4773261!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu",

  // 3. Hours & service area
  businessHours: {
    monday: { opens: "06:00", closes: "20:00" },
    tuesday: { opens: "06:00", closes: "20:00" },
    wednesday: { opens: "06:00", closes: "20:00" },
    thursday: { opens: "06:00", closes: "20:00" },
    friday: { opens: "06:00", closes: "20:00" },
    saturday: { opens: "06:00", closes: "20:00" },
    sunday: { opens: "06:00", closes: "20:00" },
  },
  areasServed: ["West Midlands"],

  // 4. High-level services (used for meta / schema)
  primaryServices: [
    {
      name: "Full Detail (Mobile)",
      includes: [
        "Exterior wash",
        "Wax",
        "Wheel & tyre clean",
        "Vacuum (seats, carpets, trunk)",
        "Dashboard & console clean",
        "Glass inside & outside",
        "Light polish",
      ],
    },
    {
      name: "Full Detail (Drop-off)",
      includes: [
        "Exterior wash",
        "Wax",
        "Wheel & tyre clean",
        "Vacuum (seats, carpets, trunk)",
        "Dashboard & console clean",
        "Interior glass",
        "Machine polish",
      ],
    },
    {
      name: "Interior Detail",
      includes: [
        "Vacuum (seats, carpets, trunk)",
        "Carpet & upholstery shampoo",
        "Leather conditioning",
        "Dashboard & console clean",
        "Trim & buttons detail",
        "Glass inside",
      ],
    },
    {
      name: "Exterior Detail",
      includes: ["Exterior wash", "Clay bar", "Wax", "Wheel & tyre clean", "Glass outside"],
    },
    {
      name: "Machine Polish",
      includes: ["Exterior wash", "Clay bar", "Machine polish", "Gloss enhancement", "Sealant"],
    },
    {
      name: "Ceramic Coating & Protection",
      includes: ["Exterior wash", "Clay bar", "Machine polish", "Ceramic coating"],
    },
  ],

  // 5. socials & business meta
  facebookUrl: "https://www.facebook.com/",
  instagramUrl: "https://www.instagram.com/",
  foundingYear: 2024,
  founders: ["Kairo"],
  priceRange: "££",
  guarantee: "Satisfaction Guarantee - If you’re not 100% satisfied, I’ll make it right before you leave.",

  // 6. Rating info (numbers, ready for structured data)
  rating: {
    average: 5,
    count: 25,
    googleMaps: 5,
    yelp: 5,
    max: 5,
  },
}
