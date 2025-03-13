///////////////////////////////////////////////////////////////////////
//                        Gallery Photos                             //
/*/////////////////////////////////////////////////////////////////////

Each Photo must be added to the Gallery folder

Each Photo must have a "small" version that is 300 pixels by 300 pixels
  Use the site https://squoosh.app/ (click resize, uncheck "maintain aspect ratio",
  Change Fit method to contain, then change height and width to 300)

  Then Copy and paste the two lines into the area below
  make sure to change the Names

        This part                              And This Part after the /
          \/                                        \/

import pic1small from "./components/media/Gallery/1small.jpg"
import pic1 from "./components/media/Gallery/1.jpg"

*/ //////////////////////////////////////////////////////////////////////

import photo1 from "./components/media/feltright.jpg";
import photo2 from "./components/media/outofthewoods.jpg";
import photo3 from "./components/media/chudsbbq.jpg";
import photo4 from "./components/media/theblakery.jpg";
import photo5 from "./components/media/AppsCollective.jpg";

import FloridaRep from "./components/media/Florida Rep.webp";
import LostColony from "./components/media/LostColony.png";
import Rowdy from "./components/media/Rowdy.jpg";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import Amy from "./components/media/Amy.jpg";
import Holly from "./components/media/Holly.jpg";
import Brian from "./components/media/Brian.jpg";
import Bits from "./components/media/Bits Before Crits.png";
import MtHope from "./components/media/MtHope.png";
import Parf from "./components/media/Parf.jpg";
import SFGE from "./components/media/SFGE.jpg";

export const Tests = [
  {
    picture: Brian,
    name: "Brian B.",
    testimony: `Working with Chase as my son's violin teacher has been an absolute blessing. 
    His patient guidance and unwavering support have not only instilled a love for the violin but also nurtured my son's 
    confidence and musical abilities. I couldn't be more grateful for the remarkable 
    progress my child has made under Chase's direction.`,
  },
  {
    picture: Amy,
    name: "Amy S.",
    testimony: `Chase was very professional and knowledgeable! My son looks forward to his lessons every week.
    Chase used Lord of the Rings music to teach because my Son loves those movies! Can not
    recommend him enough!`,
  },
  {
    picture: Holly,
    name: "Holly C.",
    testimony: `Having Chase as my daughter's violin teacher has been a true gift. 
    Chase's dedication to my daughter's 
    musical journey is nothing short of exceptional. Under Chase's guidance, my daughter has blossomed into a 
    skilled violinist, and I'm deeply grateful for the positive impact 
    Chase has had on her musical growth and self-confidence.`,
  },
];

export const ViolinJobs = [
  {
    picture: FloridaRep,
    name: "Florida Repertory Theatre",
  },
  {
    picture: LostColony,
    name: "The Lost Colony",
  },
  {
    picture: Rowdy,
    name: "The Rowdy Bardlings",
  },
  {
    picture: MtHope,
    name: "Holidays at Mt. Hope",
  },
  {
    picture: Parf,
    name: "Pennsylvania Renaissance Faire",
  },
  {
    picture: SFGE,
    name: "Six Flags Great Escape",
  },
  {
    picture: Bits,
    name: "Bits before Crits",
  },
];

///////////////////////////////////////////////////////////////////////
//                        Social Media Links                         //
/*/////////////////////////////////////////////////////////////////////

Instructions:
  Just Edit the links in the quotations below!

*/ /////////////////////////////////////////////////////////////////////
export const SocialLinks = {
  ///////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////

  Instagram: "https://www.instagram.com/thatchaseb/",
  Facebook: "https://www.facebook.com/chase.brackett.7",
}; //////////////////////////////////////////////////////////////////////

////////////////////////////////
export const VideoLinks = [
  /////
  ////////////////////////////////
  //    Paste Below Me          //
  ////////////////////////////////

  "https://youtu.be/aQxBamN4B6s",
  "https://youtu.be/CYOoMuM8UfM",
  "https://youtu.be/rP7sCMKSb1I",
  "https://youtu.be/ZFyhtnPYxQo",
  "https://youtu.be/s0nfUCqLemU",
]; ///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
//                        Bio                                        //
/*/////////////////////////////////////////////////////////////////////
  
Just Edit the Bio text below!
Do not include your name it will be added automatically

*/ ////////////////////////////////////////////
export const ChaseBio =
  //////////////////////
  //////////////////////////////////////////////
  `

With experience in both front-end and back-end development, Chase excels in building robust, scalable, and responsive websites. With a strong foundation in Liquid, Vue, and React, Chase also possesses expertise in database management using SQL/No-SQL and Node.js. With a proven track record of delivering high-quality code and effectively managing projects, Chase is dedicated to providing exceptional user experiences through clean and efficient coding practices.

`;

export const ChaseViolinBio = `
Hi I'm Chase B and I'm a professional Actor, Singer and Violinist! I've been playing Violin for over 20 years now and have played for numerous Orchestras, Weddings, Musicals, Operas, and Concerts.

Violin students can expect to learn solid technique, how to read music, how to play by ear, how to practice effectively and most of all have fun!
We will be using a mix of Classical Violin pieces and contemporary music so learning stays challenging but engaging! Whether you have played violin for years or you are picking up the instrument for the first time I can help you reach new heights with Violin!

I also have student violins available for rental!
`;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const Jobs = [
  {
    date: "Oct. 2024",
    header: "Felt Right - www.FeltRight.com",
    link: "http://www.feltright.com",
    descriptions: [
      "Refactored website to use modern Shopify features and customization options",
      "Led developers and designers to create clean code that was cohesive with the overall project",
      "Conducted A/B test via Compose.co to find optimal conversion rates with new and existing sections",
    ],
    languages: [
      "Liquid",
      "Vue",
      "TailwindCSS",
      "MySQL",
      "AlpineAJAX",
      "Shopify Flow",
      "NodeJS",
    ],
  },
  {
    date: "July. 2024",
    header: "Out of the Woods - www.OutOfTheWoods.com - www.OutOfTheOcean.com",
    link: "http://www.outofthewoods.com",
    descriptions: [
      "Conducted SEO and performance audit of website and helped improve new and existing sections",
      "Created new reusable sections that were easier to maintain and optimize",
    ],
    languages: ["Liquid", "Javascript", "PHP", "TailwindCSS", "Wordpress"],
  },
  {
    date: "May. 2024",
    header: "Strobes N More - www.StrobesNMore.com",
    link: "http://www.strobesnmore.com",
    descriptions: [
      "Oversaw and implemented website import from their old site built on Ship4Shop to Shopify",
      "Built Shopify Theme using liquid from scratch based on their old site",
      "Imported old products, collections, and customer databases to new website",
    ],
    languages: [
      "Liquid",
      "JavaScript",
      "Node.js",
      "SQL/No-SQL",
      "TailwindCSS",
      "Matrixify",
    ],
  },
  {
    date: "Feb. 2024",
    header: "The Blakery - www.TheBlakery.co",
    link: "http://www.theblakery.co",
    descriptions: [
      "Programed and implemented a full redesign of the website with reusable sections",
      "Communicated with a team of developers to create simple reusable blocks of code for future updates",
    ],
    languages: ["Liquid", "Javascript", "NodeJS", "TailwindCSS", "SwiperJS"],
  },
  {
    date: "Aug 2021 - Present",
    header: "OPS Tempo LLC. · AppsColective.com",
    link: "https://appscollective.com/",
    descriptions: [
      "Built Application from the ground up with Prisma, Vue, Tailwind CSS, and NodeJS",
      "Implemented full stack database API calls with diverse and complicated datasets to ensure efficient and streamlined service",
      "Conducted thorough code reviews, identified and debugged issues, and implemented necessary corrections to enhance overall code quality.",
    ],
    languages: [
      "Vue",
      "JavaScript",
      "Node.js",
      "Prisma",
      "SQL/No-SQL",
      "Heroku",
    ],
  },
  // {
  //   date: "Mar. 2020 - May 2022 | New York, NY",
  //   header: "Hex & Co · HexNYC.com",
  //   link: "http://www.hexnyc.com/",
  //   descriptions: [
  //     "Gathered user feedback and incorporated iterative improvements to enhance the structure, content, and user experience of the website.",
  //     "Resolved scripting errors, conducted thorough testing, and implemented updates to maintain the website's functionality and performance.",
  //     "Collaborated with different departments to gather and integrate data for website content, ensuring accurate and up-to-date information.",
  //   ],
  //   languages: ["WordPress", "JavaScript", "HTML/CSS", "Elementor"],
  // },
  // {
  //   date: "May 2019 - 2023 | Remote",
  //   header: "Freelance (Brackett Website Design)",
  //   link: "http://www.chasebrackett.com/coding",
  //   descriptions: [
  //     "Developed modern and responsive web applications by utilizing React, HTML, CSS, and JavaScript, ensuring excellent user interface performance.",
  //     "Transformed native applications into mobile-friendly products, enhancing accessibility and user reach.",
  //     "Provided guidance and expertise to clients throughout the project lifecycle, offering valuable insights on best practices, user needs, and technological capabilities.",
  //     "Collaborated with clients to deliver high-quality features for both mobile and desktop platforms.",
  //   ],
  //   languages: ["React", "JavaScript", "HTML", "TailwindCSS", "Vercel"],
  // },
];

export const sites = [
  {
    thumbnail: photo1,
    header: "Felt Right",
    log: "Lead Shopify Developer",
    link: "https://www.feltright.com",
    description:
      "FeltRight is a cutting-edge company that specializes in sustainable, customizable felt wall tiles, offering eco-friendly solutions that elevate interior design. With a focus on craftsmanship and innovation, they transform spaces while promoting environmental responsibility.",
    languages: [
      "Liquid",
      "Vue",
      "TailwindCSS",
      "MySQL",
      "AlpineAJAX",
      "NodeJS",
    ],
  },
  {
    thumbnail: photo2,
    header: "Out of the Woods",
    log: "Lead Shopify Developer and Website Editor",
    link: "https://www.outofthewoods.com",
    description:
      "Out of the Woods is a forward-thinking brand that designs stylish, sustainable bags and coolers made from eco-friendly materials, promoting both functionality and environmental consciousness. With a focus on high-quality, reusable products, they offer innovative solutions for modern, sustainable living.",
    languages: ["Liquid", "PHP", "TailwindCSS", "Wordpress"],
  },
  {
    thumbnail: photo3,
    header: "Chuds BBQ",
    log: "Shopify Developer",
    link: "https://www.chudsbbq.com",
    description:
      "Chud's BBQ is a Texas-based brand dedicated to authentic barbecue culture, offering top-quality handmade tools, spices, and apparel for BBQ enthusiasts. With a strong focus on craftsmanship and passion for grilling, they provide everything needed to enhance the backyard cookout experience.",
    languages: ["Liquid", "Javascript", "TailwindCSS", "NodeJS"],
  },
  {
    thumbnail: photo4,
    header: "The Blakery",
    log: "Junior Shopify Developer",
    link: "https://www.theblakery.co",
    description:
      "The Blakery is a premium online bakery that offers a wide range of gourmet, handcrafted cookies made with the finest ingredients. Their delicious, customizable creations are perfect for any occasion, combining indulgence with a personal touch for every sweet tooth.",
    languages: ["Liquid", "Javascript", "TailwindCSS", "SwiperJS"],
  },
  {
    thumbnail: photo5,
    header: "AppsCollective.com",
    log: "Head Developer",
    link: "https://appscollectivedev.herokuapp.com/#/",
    description:
      "Apps Collective is an IT Organizational application run through the company OPS Tempo that helps hospitals and universities manage and plan for their software updates and outages. It is currently in open beta testing and is set to have a full release in Spring of 2024.",
    languages: [
      "Vue",
      "Prisma",
      "BulmaCSS",
      "Github",
      "Javascript",
      "Fastify",
      "NodeJS",
    ],
  },
  // {
  //   thumbnail: photo1,
  //   header: "JonahTyHarmon.com",
  //   link: "https://www.jonahtyharmon.com/",
  //   description:
  //     "Jonah Harmon is a creative actor, singer, and song-writer. His website reflects his vintage, quirky, and edgy style by using earthy colors, artistic photos, and 1970s tropes.",
  //   languages: ["React", "JavaScript", "Tailwind", "CSS", "HTML"],
  // },
  // {
  //   thumbnail: photo3,
  //   header: "KatelynShreiner.com",
  //   link: "https://www.katelynshreiner.com/?fbclid=IwAR2wb2JKwWp6Ca-KvMavIvmXMbI_65PZHMilvINlxb6CTKGP4ZFl4PveO2w",
  //   description:
  //     "Kaitlyn Shreiner is a daring actor, singer, and dancer. She is comedic, quirky, and powerful. Her website captures her confident and out of the box style through bright colors, eye-catching blurbs, and concise branding.",
  //   languages: ["JavaScript", "Wix", "CSS", "HTML"],
  // },
  // {
  //   thumbnail: photo4,
  //   header: "Brian-Osborne.com",
  //   link: "https://www.brian-osborne.com/",
  //   description:
  //     "Brian Osborne is a vocal coach, music director, and pianist. He has a strong, commanding, and sleek style portrayed on his website through classic colors, simple design, and easy to use menu options.",
  //   languages: ["Vue", "JavaScript", "CSS", "HTML", "Bulma", "SemanticUI"],
  // },
];
