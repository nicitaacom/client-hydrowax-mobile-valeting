// 1. UI constants that reference businessInfo to avoid duplication
import { businessInfo } from "./businessInfo"

export const consts = {
  // 1. small derived values for UI (no duplicates — derive from businessInfo)
  yoe: businessInfo.yearsInBusiness,
  yog: businessInfo.yearsOfGuarantee,
  notificationBarOffer1: `Satisfaction guarantee${businessInfo.yearsOfGuarantee ? `${businessInfo.yearsOfGuarantee} — year${businessInfo.yearsOfGuarantee > 1 ? "s" : ""}` : ""}`,
  notificationBarOffer2: businessInfo.cta,

  // 2. map + socials (re-using references is OK)
  mapUrl: businessInfo.mapUrl,
  social: { facebook: businessInfo.facebookUrl, instagram: businessInfo.instagramUrl },

  // 3. Services (images + labels) for listing cards / grid
  ourServices: [
    { imgUrl: "/services/img-1.jpg", serviceName: "Full Valet" },
    { imgUrl: "/services/img-2.jpg", serviceName: "Leather treatment" },
    { imgUrl: "/services/img-3.jpg", serviceName: "Engine bay cleaning" },
  ],

  // 4. Reviews (UI-ready)
  reviews: [
    {
      usrAvatarUrl: "/reviews/user-1.png",
      username: "Emma Hetherington",
      date: "12.06.2025",
      reviewMessage:
        "Soo has made our car look brand-new! She spent three hours cleaning the car inside and out, ready to be returned to the lease company.  She fixed scratches, blacked the wheels and dealt with a tricky GB sticker that had welded itself to the back door. We are very impressed. And all thus done on our drive. Thank you for a great job!",
      amountOfStars: 5,
    },
    {
      usrAvatarUrl: "/reviews/user-2.png",
      username: "Emma Tennyson",
      date: "05.07.2025",
      reviewMessage:
        "Absolutely amazing. Sue has worked her magic. Completely over the moon with the quality and standard  of valet. My car looks brand new. I would definitely recommend Sue and will be booking her again. Thank you",
      amountOfStars: 5,
    },
    {
      usrAvatarUrl: "/reviews/user-3.png",
      username: "PAULINE MILLWARD",
      date: "19.03.2025",
      reviewMessage:
        "Amazing service today on my 10 year old car, the car seats were looking faded & some stains this morning, now after having it valeted all stains gone & all seats looking like new again. The whole inside perfect & outside it gleams once again. I also had the engine well done again excelent. I would highly recommend anyone to use this company, lovely people & have done everything I wanted. 10 out of 10 from me",
      amountOfStars: 5,
    },
    {
      usrAvatarUrl: "/reviews/user-4.png",
      username: "We Love Hu Info",
      date: "13.06.2025",
      reviewMessage:
        "Sue was able to book me in on a last minute job which I appreciate is very rare opportunity ( the heavens just were in alignment). She is fast and did a jolly good job for a large vehicle at the £70 mark was just what I needed. She is friendly professional straight to it. No mincing about. I can recommend her and will use her again in future. Thanks Sue I really needed that!!!!!",
      amountOfStars: 5,
    },
    {
      usrAvatarUrl: "/reviews/user-5.png",
      username: "Pauline Robinson",
      date: "15.05.2025",
      reviewMessage:
        "Hydrowax is a brilliant Valeting service! Soo works really hard and gets your car looking showroom standard! She comes to your home or workplace and within a large area! I would recommend this service to anyone who wants a nice clean and shiny car!",
      amountOfStars: 5,
    },
    {
      usrAvatarUrl: "/reviews/user-6.png",
      username: "Lee Blackwell",
      date: "25.07.2025",
      reviewMessage:
        "Great job 👏 Came and did my transit connect  van was in a bit of a state inside, the seats look like new .Spent over 3 hours on the van.Will be in touch again .Thanks 👍 …",
      amountOfStars: 5,
    },
  ],

  // 5. How-we-work tabs (flow steps used on services pages)
  howWeWorkTabs: [
    {
      text: "Full Valet",
      iconSrc: "/how-do-we-work/tabs/magic.png",
      steps: [
        {
          iconSrc: "/how-do-we-work/check.png",
          title: "Initial Check",
          description: "We inspect your vehicle and note areas needing special attention.",
        },
        {
          iconSrc: "/how-do-we-work/exterior-wash.png",
          title: "Exterior Wash & Wax",
          description: "Safe exterior wash including wheels, arches, and tyre dressing.",
        },
        {
          iconSrc: "/how-do-we-work/interior-detail.png",
          title: "Interior Clean",
          description: "Vacuum seats, carpets, and boot; clean dashboard & console.",
        },
        {
          iconSrc: "/how-do-we-work/polish-icon.png",
          title: "Light Polish & Finish",
          description: "Polish paintwork lightly and dress trims for a showroom look.",
        },
        {
          iconSrc: "/how-do-we-work/100.png",
          title: "Final Walkthrough",
          description: "We review the valet with you to ensure 100% satisfaction.",
        },
      ],
    },
    {
      text: "Leather Treatment",
      iconSrc: "/how-do-we-work/tabs/interior-detail.png",
      steps: [
        {
          iconSrc: "/how-do-we-work/vacuum.png",
          title: "Leather Clean",
          description: "Deep clean leather surfaces to remove dirt, oils, and stains.",
        },
        {
          iconSrc: "/how-do-we-work/shampoo.png",
          title: "Conditioning",
          description: "Apply high-quality conditioner to keep leather soft and supple.",
        },
        {
          iconSrc: "/how-do-we-work/streeing-wheel.png",
          title: "Protection",
          description: "UV and anti-crack protection applied to prolong leather life.",
        },
        {
          iconSrc: "/how-do-we-work/vents.png",
          title: "Matte Finish",
          description: "Restore factory finish without a shiny or greasy look.",
        },
        {
          iconSrc: "/how-do-we-work/perfection.png",
          title: "Final Check",
          description: "Inspect leather surfaces and ensure perfect treatment results.",
        },
      ],
    },
    {
      text: "Engine Bay Cleaning",
      iconSrc: "/how-do-we-work/tabs/engine.png",
      steps: [
        {
          iconSrc: "/how-do-we-work/check.png",
          title: "Initial Inspection",
          description: "Assess engine bay for sensitive components and areas needing attention.",
        },
        {
          iconSrc: "/how-do-we-work/exterior-wash.png",
          title: "Degreasing",
          description: "Apply safe degreaser to lift oil, grime, and road dirt.",
        },
        {
          iconSrc: "/how-do-we-work/interior-detail.png",
          title: "Brushing & Agitation",
          description: "Brush tight areas, hoses, plastics, and metal parts carefully.",
        },
        {
          iconSrc: "/how-do-we-work/polish-icon.png",
          title: "Rinse & Dry",
          description: "Low-pressure rinse or steam clean followed by drying with air/microfiber.",
        },
        {
          iconSrc: "/how-do-we-work/100.png",
          title: "Final Dressing",
          description: "Apply rubber & plastic dressing for a clean, protected finish.",
        },
      ],
    },
  ],
}
