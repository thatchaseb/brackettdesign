


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

*///////////////////////////////////////////////////////////////////////

import photo1 from "./components/media/JonahSite.png"
import photo2 from "./components/media/SarahSite.webp"
import photo3 from "./components/media/KatelynSite.png"
import photo4 from "./components/media/BrianSite.png"



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////
//                        Social Media Links                         //
/*/////////////////////////////////////////////////////////////////////

Instructions:
  Just Edit the links in the quotations below!

*//////////////////////////////////////////////////////////////////////
export const SocialLinks = {///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
  
   YouTube: "https://www.youtube.com/@jonahtyharmon/featured",
   Instagram: "https://www.instagram.com/jonahtyharmon/", 
   TikTok: "https://www.tiktok.com/@jonahtyharmon?is_from_webapp=1&sender_device=pc", 
   Twitter: "https://twitter.com/jonahtyharmon",
  
  
}//////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////
//                        Bio                                        //
/*/////////////////////////////////////////////////////////////////////
  
Just Edit the Bio text below!
Do not include your name it will be added automatically

*/////////////////////////////////////////////
export const ChaseBio = //////////////////////
//////////////////////////////////////////////
`

With experience in both front-end and back-end development, Chase excels in building robust, scalable, and responsive websites. With a strong foundation in HTML, CSS, JavaScript, and React, Chase also possesses expertise in database management using SQL/No-SQL and Node.js. With a proven track record of delivering high-quality code and effectively managing projects, Chase is dedicated to providing exceptional user experiences through clean and efficient coding practices.

`
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export const Jobs = [
  {
    date: "Oct 2022 - Now | Remote",
    header: "OPS Tempo LLC. · AppsColective.com",
    link: "https://appscollective.com/",
    descriptions: [
      "Managed development milestones, ensuring successful project completion and release versions.",
      "Developed and managed databases using Node.js, Prisma, and SQL/No-SQL.",
      "Engineered RESTful web services to manipulate dynamic datasets.",
      "Conducted thorough code reviews, identified and debugged issues, and implemented necessary corrections to enhance overall code quality.",
    ],
    languages: [
      "Vue", "JavaScript", "Node.js", "Prisma", "SQL/No-SQL", "Bulma", "Heroku"
    ]
  },
  {
    date: "May 2019 - Present | Remote",
    header: "Brackett Website Design",
    link: "http://www.thatchaseb/",
    descriptions: [
      "Developed modern and responsive web applications by utilizing React, HTML, CSS, and JavaScript, ensuring excellent user interface performance.",
      "Transformed native applications into mobile-friendly products, enhancing accessibility and user reach.",
      "Provided guidance and expertise to clients throughout the project lifecycle, offering valuable insights on best practices, user needs, and technological capabilities.",
      "Collaborated with clients to deliver high-quality features for both mobile and desktop platforms.",
    ],
    languages: [
      "React", "JavaScript", "HTML", "TailwindCSS", "Vercel"
    ]
  },
  {
    date: "Jan. 2021 - May 2022 | New York, NY",
    header: "Hex & Co · HexNYC.com",
    link: "http://www.hexnyc.com/",
    descriptions: [
      "Gathered user feedback and incorporated iterative improvements to enhance the structure, content, and user experience of the website.",
      "Resolved scripting errors, conducted thorough testing, and implemented updates to maintain the website's functionality and performance.",
      "Collaborated with different departments to gather and integrate data for website content, ensuring accurate and up-to-date information.",
    ],
    languages: [
      "WordPress", "JavaScript", "HTML/CSS", "Elementor"
    ]
  },
]

export const sites = [
  {
    thumbnail: photo1,
    header: "JonahTyHarmon.com",
    link: "https://www.jonahtyharmon.com/",
    description: "",
    languages: [
      "React", "JavaScript", "Tailwind", "CSS", "HTML"
    ]
  },
  {
    thumbnail: photo2,
    header: "SarahBrackett.actor",
    link: "https://sarahbrackett.actor/",
    description: "Developed and styled interactive web apps for Apple Music, including the UI of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
    languages: [
      "React", "JavaScript", "Tailwind", "CSS", "HTML"
    ]
  },{
    thumbnail: photo3,
    header: "KatelynShreiner.com",
    link: "https://www.katelynshreiner.com/?fbclid=IwAR2wb2JKwWp6Ca-KvMavIvmXMbI_65PZHMilvINlxb6CTKGP4ZFl4PveO2w",
    description: "Developed and styled interactive web apps for Apple Music, including the UI of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
    languages: [
      "JavaScript", "Wix", "CSS", "HTML"
    ]
  },{
    thumbnail: photo4,
    header: "Brian-Osborne.com",
    link: "https://www.brian-osborne.com/",
    description: "Developed and styled interactive web apps for Apple Music, including the UI of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
    languages: [
      "Vue", "JavaScript", "CSS", "HTML", "Bulma", "Semantic UI"
    ]
  },
]


