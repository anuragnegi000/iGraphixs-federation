import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  works,
  logo,
  twitterX,
  youtube,
  upwork,
  behance,
  insta,
  smart,
  seam,
  top,
  iGraphixs_C,
  AdobeAE,
  AdobePS,
  DAvinci,
  random,
  illustrator,
  icon_IP,
  AdobePR,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "/signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "/login",
    onlyMobile: true,
  },
];

export const LoggedNavigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [upwork, insta, behance, youtube, twitterX];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable theee chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "January 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "in progress",
    status: "Working with",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customizzation",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "February 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Are you searching for captivating graphic design solutions that elevate your brand's identity to new heights? Look no further than iGraphixs – your ultimate partner in transforming visions into stunning visual realities. As a burgeoning leader in the realm of graphic design, iGraphixs stands at the forefront of innovation, creativity, and unparalleled craftsmanship. At iGraphixs, we understand the power of impactful design in shaping perceptions and fostering meaningful connections with your audience. Whether you're a startup, small business, or established enterprise, our dedicated team of talented designers is committed to delivering tailor-made solutions that exceed your expectations. From logo designs and branding collateral to web graphics and promotional materials, we offer a comprehensive suite of services crafted to suit your unique needs and goals. What sets iGraphixs apart is our unwavering dedication to excellence and our relentless pursuit of perfection in every project we undertake. We combine cutting-edge technology with artistic flair to produce visually striking designs that leave a lasting impression. With a keen eye for detail and a passion for innovation, we ensure that your brand not only stands out but also resonates with your target audience on a profound level. Partnering with iGraphixs means unlocking endless possibilities for your brand's visual identity. Whether you're looking to refresh your existing brand image or embark on a new creative journey, our team is here to guide you every step of the way. With a commitment to transparency, timeliness, and unparalleled customer service, we strive to build lasting partnerships based on trust, integrity, and mutual success.",
    date: "April 2024",
    status: "Working with",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Creative Designs,To meet your imagination into reality with top notch works.24/7 service available! We are able to deliver graphics in your expected time.";

export const collabContent = [
  {
    id: "0",
    title: "Creative Designs",
    text: collabText,
    img: smart,
  },
  {
    id: "1",
    title: "TRY IT NOW ❌",
    img: seam,
  },
  {
    id: "2",
    title: "WORK WITH US ✅",
    img: top,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "iGraphixs_logo",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: AdobeAE,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: AdobePS,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: illustrator,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: DAvinci,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: random,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: icon_IP,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: AdobePR,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: "49.99",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Professional thumbnail creation service!",
    text: "We have proffesional thumbnail designers with 4-5 years experience. Get high-quality thumbnails with iGraphixs! Our portfolio includes collaborations with numerous big clients",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Creative Logo creation service" ,
    text: "We spealize in creating mascot, vector, wordmark, modern, minimalist and others logo style. We will represent your brands identity and vision. Checkout our diverse portfolio showcasing a different styles of logo!",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "MORE ADVANCED CREATIVE SERVICE",
    text: "We can help you to unlock the full potential of your brands visual and graphics identity with our advanced services. From banners, social media post to stream assests and visually stunning animations.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Artistic Illustrations creation service",
    text: "We create stunning, clean illustrations that bring your imagination into life. Explore our portfolio today and ignite your creativity!",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Innovative Brand Package Service",
    text: "We make the transformation of brand identity with our innovative package design. Lets design a brand package that resonates with your brand vision and leaves a long lasting impression on your customers with iGraphixs!",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Visualized Animation Package Service",
    text: "We create a specialized animation packages with a experience of 3.5 years. With years of experience in animated stream package, we bring a great understanding of animation principles & colors to every project. ",
    backgroundUrl: "./src/assets/benefits/card-6.svg",  
    iconUrl: benefitIcon6,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
