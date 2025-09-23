// 1. Core business data used across the app (contact, hours, location, rating)
export const businessInfo = {
  name: "Hydrowax Mobile Valeting",
  yearsInBusiness: 5, // numeric for easy usage in UI
  yearsOfGuarantee: null, // satisfaction guarantee in years
  phone: "+44 148 226 22 40", // 38 41 it's her personal phone so she would like to receive SMS on 22 40
  timezone: "Europe/London",
  email: "hydrowax22@gmail.com",
  websiteUrl: "https://hydrowax-mobile-valeting.co.uk",
  yellPagesUrl: "https://www.yell.com/biz/hydrowax-mobile-valeting-and-detailing-hull-901774196/",
  logoUrl: "/logo.jpg",
  cta: "Contact us - get response in 2mins",

  // 2. Location / map
  address: {
    street: "Pasture View, Kingswood",
    city: "Hull",
    county: "East Riding of Yorkshire",
    postalCode: "HU7 3AH",
    country: "United Kingdom",
  },
  coordinates: {
    latitude: 53.799588,
    longitude: -0.347902,
  },
  mapUrl:
    "https://www.google.com/maps/place/Hydrowax+Mobile+Valeting/@53.8742525,-0.4773261,13.99z/data=!4m16!1m7!3m6!1s0xa18c5587c123c57d:0x8c5c0eaee3e2766b!2sHydrowax+Mobile+Valeting!8m2!3d53.8742525!4d-0.4773261!16s%2Fg%2F11ckvg1dmb!3m7!1s0xa18c5587c123c57d:0x8c5c0eaee3e2766b!8m2!3d53.8742525!4d-0.4773261!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu",

  // 3. Hours & service area
  businessHours: {
    monday: { opens: "00:00", closes: "23:59" },
    tuesday: { opens: "00:00", closes: "23:59" },
    wednesday: { opens: "00:00", closes: "23:59" },
    thursday: { opens: "00:00", closes: "23:59" },
    friday: { opens: "00:00", closes: "23:59" },
    saturday: { opens: "00:00", closes: "23:59" },
    sunday: { opens: "00:00", closes: "23:59" },
  },
  areasServed: ["Yorkshire and the Humber"],

  // 4. High-level services (used for meta / schema)
  primaryServices: [
    {
      name: "Full Valet (Mobile)",
      includes: [
        "Exterior wash & wax",
        "Wheels, arches & tyres cleaned",
        "Vacuum (seats, carpets & boot)",
        "Dashboard, console & plastics wiped",
        "Glass cleaned inside & out",
        "Door shuts & sills cleaned",
        "Light hand polish",
      ],
    },
    {
      name: "Leather Treatment",
      includes: [
        "Deep leather cleaning",
        "Stain & dirt removal",
        "Conditioning & moisturising",
        "UV protection & anti-crack treatment",
        "Matte factory finish",
      ],
    },
    {
      name: "Engine Bay Cleaning",
      includes: [
        "Degreasing of engine components",
        "Brushing & agitation of plastics and metals",
        "Safe low-pressure rinse or steam clean",
        "Drying with air or microfiber",
        "Plastic & rubber dressing for protection",
      ],
    },
  ],

  // 5. socials & business meta
  facebookUrl: "https://www.facebook.com/profile.php?id=100086449658386#",
  instagramUrl: "",
  foundingYear: 2020,
  founders: ["Soo"],
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
