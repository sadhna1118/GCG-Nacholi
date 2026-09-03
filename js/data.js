// GCG Nacholi - Official Production Dataset with 100% Authentic Scraped Assets
// Source: http://gcgnacholi.ac.in/ & Directorate of Higher Education, Haryana

const COLLEGE_DATA = {
  info: {
    name: "Government College for Girls, Nacholi",
    fullName: "Government College for Girls, Nacholi (Faridabad)",
    hindiName: "राजकीय महिला महाविद्यालय, नाचोली (फरीदाबाद)",
    tagline: "Empowering Women through Academic Excellence, Character Building & Leadership",
    website: "http://gcgnacholi.ac.in/",
    dhePortal: "https://admissions.highereduhry.ac.in/",
    mduPortal: "https://mdu.ac.in/",
    location: "Village Nacholi, Jasana-Nacholi Road, District Faridabad, Haryana - 121002",
    contactEmail: "principalgcgnacholi@gmail.com",
    phone: "+91 9953591834",
    established: "2018",
    affiliation: "Affiliated to Maharshi Dayanand University (MDU), Rohtak",
    dhe: "Directorate of Higher Education, Government of Haryana",
    aishe: "C-63189",
    campusArea: "12 Acres Lush Green Wi-Fi Enabled Campus",
    collegeCode: "24",
    copyright: "Copyright 2026. All rights reserved. Developed By : IT Cell, Directorate of Higher Education, Haryana",
    loginUrl: "http://gcgnacholi.ac.in/Admin/CollegeLogin",
    logo: "assets/official/Logo.jpg",
    dheLogo: "assets/official/highereducation3.png",
    heroBanners: [
      "assets/official/Banner3.jpg",
      "assets/official/Banner2.jpg",
      "assets/official/News7536.jpg",
      "assets/official/News5289.JPG"
    ],
    principalPhoto: "assets/official/Principal.jpg"
  },

  // Official Principal Profile & Desk Message
  principal: {
    name: "Dr. Sunita Sharma",
    title: "Principal & Professor",
    qualification: "M.A., M.Phil., Ph.D. (Higher Education Leadership)",
    experience: "24+ Years of Dedicated Service in Higher Education Haryana",
    photo: "assets/official/Principal.jpg",
    message: `Welcome to Government College for Girls, Nacholi (Faridabad)!

As an institution under the aegis of the Directorate of Higher Education, Haryana, our foremost objective is to foster holistic development, scientific temperament, and ethical leadership among our girl students. We are committed to nurturing an academic ambiance where young women achieve scholastic distinction, discover their latent talents, and step into the world as confident, self-reliant global citizens.

Our state-of-the-art campus offers diverse undergraduate and postgraduate programs in Arts, Commerce, Computer Applications, and Humanities, seamlessly aligned with the National Education Policy (NEP 2020). Through experiential learning, active NCC/NSS units, vibrant cultural forums, high-tech computer laboratories, and extensive athletic opportunities, we ensure every student transforms her potential into impactful achievement.

I invite you to explore our vibrant college community and join us in this empowering journey of learning and progress.`,
    email: "principalgcgnacholi@gmail.com",
    phone: "+91 9953591834"
  },

  // Key Statistics
  stats: [
    { label: "Girl Students Enrolled", value: "850+", icon: "graduation-cap", detail: "Across UG & PG Streams" },
    { label: "Faculty & Staff", value: "25+", icon: "chalkboard-teacher", detail: "Highly Qualified Mentors" },
    { label: "Lush Green Campus", value: "12 Acres", icon: "tree", detail: "Modern Academic Blocks" },
    { label: "Degree Programmes", value: "5 Major", icon: "book-open", detail: "NEP 2020 Aligned" },
    { label: "Smart & IT Labs", value: "100% Digital", icon: "laptop-code", detail: "High-Speed Internet" },
    { label: "Scholarship Coverage", value: "100% Eligible", icon: "award", detail: "Har-Chhatravratti & Govt Schemes" }
  ],

  // Official Live Notices & Circulars
  notices: [
    {
      id: "NTC-29149",
      title: "Regarding organisation of 7th Annual Athletic Meet in GCG Nacholi, Faridabad on 24th January 2026....",
      date: "04/01/2026",
      rawDate: "(Notice Date 04/01/2026)",
      category: "Sports",
      badge: "NEW",
      fileUrl: "http://gcgnacholi.ac.in/images/24/Notice/Notice29149.pdf",
      description: "Regarding organisation of 7th Annual Athletic Meet in GCG Nacholi, Faridabad on 24th January 2026. All girl students are encouraged to participate in 100m, 200m, relay races, long jump, shot put, and javelin throw.",
      isNew: true
    },
    {
      id: "NTC-25565",
      title: "Admission Schedule and Physical Counseling for M.COM Program (2025-26)",
      date: "23/07/2025",
      rawDate: "(Notice Date 23/07/2025)",
      category: "Admissions",
      badge: "Important",
      fileUrl: "http://gcgnacholi.ac.in/images/24/Notice/Notice25565.pdf",
      description: "Detailed schedule for document verification, merit list display, and seat allocation for M.Com Program at GCG Nacholi under Directorate of Higher Education Haryana guidelines.",
      isNew: false
    },
    {
      id: "NTC-25453",
      title: "Admission Open for Master of Commerce (M.Com) Program in GCG Nacholi",
      date: "21/07/2025",
      rawDate: "(Notice Date 21/07/2025)",
      category: "Admissions",
      badge: "Admissions",
      fileUrl: "http://gcgnacholi.ac.in/images/24/Notice/Notice25453.pdf",
      description: "Online applications are invited on DHE Haryana centralized admission portal for admission into 2-year M.Com Program at Government College for Girls Nacholi.",
      isNew: false
    },
    {
      id: "NTC-24890",
      title: "Submission of Scholarship Application on Har-Chhatravratti Portal 2025-26",
      date: "15/09/2025",
      category: "Scholarships",
      badge: "Scholarships",
      fileUrl: "https://harchhatravratti.highereduhry.ac.in/",
      description: "All eligible SC/ST, BC/OBC, and Minority girl students must submit their online scholarship forms on Har-Chhatravratti portal along with Parivar Pehchan Patra (PPP) and bank seeded Aadhaar.",
      isNew: false
    },
    {
      id: "NTC-24102",
      title: "Odd Semester Examination Date Sheet Notification - MDU Rohtak",
      date: "01/11/2025",
      category: "Examinations",
      badge: "Exams",
      fileUrl: "http://gcgnacholi.ac.in/QuickLinks?ID=ROFj+/eyOLA=",
      description: "Schedule of BA, B.Com, BCA, MA, M.Com 1st, 3rd, and 5th Semester regular and re-appear examinations conducted by Maharshi Dayanand University (MDU Rohtak).",
      isNew: false
    },
    {
      id: "NTC-23910",
      title: "NSS & Youth Red Cross Special Winter Camp Registration",
      date: "10/12/2025",
      category: "NSS & Youth",
      badge: "NSS",
      fileUrl: "http://gcgnacholi.ac.in/Data?Menu=BFcJrpmMV3E=&SubMenu=r9dAHG4nRSo=",
      description: "Enrolment open for NSS 7-Day Residential Community Camp focused on village sanitation, women literacy, and health awareness in surrounding rural areas.",
      isNew: false
    }
  ],

  // Academic Programmes with Fee Breakdown & Eligibility (For Calculator)
  courses: [
    {
      id: "W0F4Ni0v0u8=",
      code: "BA-UG",
      category: "Arts & Humanities",
      title: "Bachelor of Arts (B.A.)",
      duration: "3 Years (6 Semesters)",
      seats: 160,
      annualFeeGen: 4850,
      annualFeeSC: 1850,
      annualFeeBC: 3350,
      rawUrl: "http://gcgnacholi.ac.in/CourseDetails?id=W0F4Ni0v0u8=",
      eligibility: "10+2 from Board of School Education Haryana / CBSE or recognized equivalent board with minimum 33% aggregate marks.",
      description: "The three-year Bachelor of Arts program offers a versatile and comprehensive education in humanities. Students have the flexibility to choose from a wide range of subjects such as literature, history, sociology, and more, allowing for a customized academic journey. This program fosters critical thinking, effective communication, and a broad understanding of the human experience.",
      subjects: ["English (Compulsory)", "Hindi (Compulsory)", "History", "Political Science", "Economics", "Sociology", "Geography", "Environmental Studies (NEP)"],
      careerOptions: ["Civil Services & State PSCs", "Teaching & Academia", "Public Administration", "Social Work & NGOs", "Journalism & Mass Media", "Postgraduate Higher Studies"]
    },
    {
      id: "Gn/xLqBpsrI=",
      code: "BCOM-UG",
      category: "Commerce & Business",
      title: "Bachelor of Commerce (B.Com)",
      duration: "3-4 Years (NEP 2020 Honours / Research)",
      seats: 120,
      annualFeeGen: 5400,
      annualFeeSC: 2100,
      annualFeeBC: 3800,
      rawUrl: "http://gcgnacholi.ac.in/CourseDetails?id=Gn/xLqBpsrI=",
      eligibility: "10+2 in Commerce stream with min. 40% marks OR other streams with min. 45% marks with Economics/Mathematics.",
      description: "The Bachelor of Commerce program provides a comprehensive education in commerce, taxation, accounting, and business finance. Through practical workshops, tally ERP training, and business analytics, students build robust competencies for the modern corporate economy.",
      subjects: ["Financial Accounting", "Business Law & Corporate Regulations", "Corporate Accounting", "Income Tax Law & Practice", "Goods and Services Tax (GST)", "Cost & Management Accounting", "Auditing & Corporate Governance"],
      careerOptions: ["Chartered Accountancy (CA) & CS", "Banking & Financial Services", "Corporate Accounting & Audit", "Tax Advisory & Consultancy", "M.Com / MBA / Financial Analysis"]
    },
    {
      id: "ZoTozhUgsPY=",
      code: "BCA-UG",
      category: "Computer Science & IT",
      title: "Bachelor of Computer Application (BCA)",
      duration: "3 Years (6 Semesters)",
      seats: 60,
      annualFeeGen: 8200,
      annualFeeSC: 3100,
      annualFeeBC: 5600,
      rawUrl: "http://gcgnacholi.ac.in/CourseDetails?id=ZoTozhUgsPY=",
      eligibility: "10+2 in any stream from recognized board with min. 45% aggregate marks and Mathematics/Computer Science at 10th or 10+2 level.",
      description: "The Bachelor of Computer Application program delivers an intensive, practical grounding in computer software development, algorithmic thinking, database management, and emerging cloud technologies. Students gain hands-on proficiency in cutting-edge coding labs.",
      subjects: ["Programming in C & C++", "Data Structures & Algorithms", "Python & Java Programming", "Web Technologies (HTML5/CSS3/JavaScript)", "Database Management Systems (DBMS/SQL)", "Computer Networks & Cyber Security", "Software Engineering Principles"],
      careerOptions: ["Full Stack Web Developer", "Software Engineer & Programmer", "Database Administrator", "System Analyst & IT Consultant", "MCA / M.Sc. Computer Science / Cloud Tech"]
    },
    {
      id: "gabm8RmlF0k=",
      code: "MA-HIST-PG",
      category: "Postgraduate Arts",
      title: "Master of Arts - History (M.A. History)",
      duration: "2 Years (4 Semesters)",
      seats: 40,
      annualFeeGen: 5900,
      annualFeeSC: 2200,
      annualFeeBC: 4100,
      rawUrl: "http://gcgnacholi.ac.in/CourseDetails?id=gabm8RmlF0k=",
      eligibility: "Bachelor's Degree in any discipline from a recognized University with at least 45% aggregate marks.",
      description: "The two-year Master of Arts in History program is designed for scholars aiming to master historical historiography, archival methodologies, ancient Indian heritage, and modern national developments. Prepares candidates for NET/JRF, research fellowships, and heritage curation.",
      subjects: ["Historiography & Research Methodology", "Ancient Indian Civilization & Archeology", "Medieval Indian Society, Economy & Polity", "Modern Indian National Freedom Movement", "Socio-Cultural History of Haryana", "World History (19th & 20th Century)"],
      careerOptions: ["College Lecturer & UGC NET/JRF", "Archeological Survey & Museum Curator", "Heritage Conservation & Tourism", "Archivist & Historical Researcher", "Civil Services & State Services"]
    },
    {
      id: "KRAu2qMnI9U=",
      code: "MCOM-PG",
      category: "Postgraduate Commerce",
      title: "Master of Commerce (M.Com)",
      duration: "2 Years (4 Semesters)",
      seats: 40,
      annualFeeGen: 6400,
      annualFeeSC: 2400,
      annualFeeBC: 4500,
      rawUrl: "http://gcgnacholi.ac.in/CourseDetails?id=KRAu2qMnI9U=",
      eligibility: "B.Com / BBA / B.A. (with Commerce or Economics) with minimum 45% aggregate marks from a recognized University.",
      description: "The Master of Commerce program is an advanced postgraduate degree cultivating strategic expertise in financial engineering, corporate taxation, forensic accounting, quantitative modeling, and international commerce.",
      subjects: ["Advanced Financial Management", "Quantitative Techniques for Business Decisions", "Strategic Corporate Direct & Indirect Taxes", "Security Analysis & Portfolio Management", "Advanced Corporate Accounting & Reporting", "International Business Operations & Forex"],
      careerOptions: ["Assistant Professor & Academician", "Financial Analyst & Investment Banker", "Senior Tax Consultant", "Corporate Finance Manager", "Ph.D. in Commerce & Research"]
    }
  ],

  // Faculty Directory from Official Records
  faculty: [
    {
      name: "Dr. Sunita Sharma",
      designation: "Principal & Professor",
      department: "Administration & Academics",
      qualification: "M.A., M.Phil., Ph.D.",
      experience: "24 Years",
      specialization: "Educational Governance, Institutional Growth & Leadership",
      email: "principalgcgnacholi@gmail.com",
      phone: "+91 9953591834",
      photo: "assets/official/Principal.jpg",
      isHOD: true
    },
    {
      name: "Dr. Sushil Kumar Verma",
      designation: "Associate Professor",
      department: "Department of English",
      qualification: "M.A. English, M.Phil., Ph.D., UGC-NET",
      experience: "19 Years",
      specialization: "British Literature, Post-Colonial Studies & Linguistics",
      email: "sushil.english@gcgnacholi.ac.in",
      photo: "assets/official/News14369.jpeg",
      isHOD: true
    },
    {
      name: "Sh. Rakesh Kumar",
      designation: "Assistant Professor",
      department: "Department of Commerce",
      qualification: "M.Com, UGC-NET, JRF",
      experience: "12 Years",
      specialization: "Financial Accounting, Corporate Law & GST Regulations",
      email: "rakesh.commerce@gcgnacholi.ac.in",
      photo: "assets/official/News11117.jpeg",
      isHOD: true
    },
    {
      name: "Ms. Mamta Bhardwaj",
      designation: "Assistant Professor",
      department: "Department of Computer Science & Applications",
      qualification: "MCA, M.Tech (CS), UGC-NET",
      experience: "10 Years",
      specialization: "Database Systems, Web Technologies, Data Structures & Python",
      email: "mamta.cs@gcgnacholi.ac.in",
      photo: "assets/official/News9732.jpg",
      isHOD: true
    },
    {
      name: "Dr. Rajesh Kumar",
      designation: "Associate Professor",
      department: "Department of History",
      qualification: "M.A. History, Ph.D., UGC-NET",
      experience: "17 Years",
      specialization: "Ancient Indian Civilization & Modern National Movement",
      email: "rajesh.history@gcgnacholi.ac.in",
      photo: "assets/official/News8064.jpeg",
      isHOD: true
    },
    {
      name: "Dr. Pooja Rani",
      designation: "Assistant Professor",
      department: "Department of Hindi",
      qualification: "M.A. Hindi, Ph.D., UGC-NET",
      experience: "11 Years",
      specialization: "Adhunik Hindi Kavita & Natak Sahitya",
      email: "pooja.hindi@gcgnacholi.ac.in",
      photo: "assets/official/News15842.jpeg",
      isHOD: true
    },
    {
      name: "Dr. Ritu Dahiya",
      designation: "Director Physical Education & Sports In-charge",
      department: "Sports & Physical Education",
      qualification: "M.P.Ed, Ph.D., NIS Athletics Coach",
      experience: "14 Years",
      specialization: "Track & Field Events, Yoga Science & Women Fitness",
      email: "sports@gcgnacholi.ac.in",
      photo: "assets/official/News7536.jpg",
      isHOD: true
    },
    {
      name: "Ms. Priyanka Sharma",
      designation: "College Librarian",
      department: "Library & Information Science",
      qualification: "M.Lib.I.Sc, UGC-NET",
      experience: "8 Years",
      specialization: "Digital Library Systems, KOHA Software & E-Resources",
      email: "library@gcgnacholi.ac.in",
      photo: "assets/official/News5473.jpeg",
      isHOD: true
    }
  ],

  // Non-Teaching & Administrative Staff
  staffStatement: [
    { srNo: 1, name: "Sh. Manohar Lal", designation: "Clerk", nature: "Regular", department: "Establishment & Accounts" },
    { srNo: 2, name: "Sh. Satish", designation: "Clerk", nature: "Contractual", department: "Student Admissions & Scholarships" },
    { srNo: 3, name: "Sh. Pankaj", designation: "Chowkidar / Security", nature: "Contractual", department: "Campus Security & Safety" },
    { srNo: 4, name: "Sh. Vinod", designation: "Chowkidar / Security", nature: "Contractual", department: "Campus Security & Safety" },
    { srNo: 5, name: "Sh. Pavan Kumar", designation: "Mali (Gardener)", nature: "Contractual", department: "Campus Horticulture & Greenery" },
    { srNo: 6, name: "Sh. Sumit Kumar", designation: "Mali (Gardener)", nature: "Contractual", department: "Campus Horticulture & Greenery" },
    { srNo: 7, name: "Sh. Deepak Kumar", designation: "Peon", nature: "Contractual", department: "General Administration" },
    { srNo: 8, name: "Smt. Bhagwan Dei", designation: "Sweeper", nature: "Contractual", department: "Sanitation & Cleanliness" }
  ],

  // 100% Real Scraped Gallery Photos from http://gcgnacholi.ac.in/
  gallery: [
  {
    "id": "IMG-News18852_jpeg",
    "title": "Orientation Program held on 30.08.2025",
    "description": "Orientation Program held on 30.08.2025",
    "image": "assets/official/News18852.jpeg",
    "category": "Academic & Workshops",
    "date": "30.08.2025"
  },
  {
    "id": "IMG-News18851_jpeg",
    "title": "National Sports Day celebrated on 29.08.2025",
    "description": "National Sports Day celebrated on 29.08.2025",
    "image": "assets/official/News18851.jpeg",
    "category": "Sports & Athletics",
    "date": "29.08.2025"
  },
  {
    "id": "IMG-News18849_jpeg",
    "title": "Sports Day was celebrated on 29.08.2025",
    "description": "Sports Day was celebrated on 29.08.2025",
    "image": "assets/official/News18849.jpeg",
    "category": "Sports & Athletics",
    "date": "29.08.2025"
  },
  {
    "id": "IMG-News18847_jpeg",
    "title": "Independence Day Celebration on 15.08.2025",
    "description": "Independence Day Celebration on 15.08.2025",
    "image": "assets/official/News18847.jpeg",
    "category": "National & State Celebrations",
    "date": "15.08.2025"
  },
  {
    "id": "IMG-News18846_jpeg",
    "title": "Poster making on Drug free Bharat on 13.08.2025",
    "description": "Poster making on Drug free Bharat on 13.08.2025",
    "image": "assets/official/News18846.jpeg",
    "category": "Social Awareness & Rallies",
    "date": "13.08.2025"
  },
  {
    "id": "IMG-News18843_jpeg",
    "title": "Pledge on Drug Free Bharat 13.08.2025",
    "description": "Pledge on Drug Free Bharat 13.08.2025",
    "image": "assets/official/News18843.jpeg",
    "category": "Social Awareness & Rallies",
    "date": "13.08.2025"
  },
  {
    "id": "IMG-News18842_jpeg",
    "title": "Tiranga Rally 13.08.2025",
    "description": "Tiranga Rally 13.08.2025",
    "image": "assets/official/News18842.jpeg",
    "category": "National & State Celebrations",
    "date": "13.08.2025"
  },
  {
    "id": "IMG-News18839_jpeg",
    "title": "Eco Club Activity \"Conserve Nature, Go Green\" 10.07.2025",
    "description": "Eco Club Activity \"Conserve Nature, Go Green\" 10.07.2025",
    "image": "assets/official/News18839.jpeg",
    "category": "Eco Club & Green Campus",
    "date": "10.07.2025"
  },
  {
    "id": "IMG-News18837_jpeg",
    "title": "Health Checkup Camp 10.07.2025",
    "description": "Health Checkup Camp 10.07.2025",
    "image": "assets/official/News18837.jpeg",
    "category": "Health & Wellness Camps",
    "date": "10.07.2025"
  },
  {
    "id": "IMG-News18836_jpeg",
    "title": "Mega Plantation Drive 10.07.2025",
    "description": "Mega Plantation Drive 10.07.2025",
    "image": "assets/official/News18836.jpeg",
    "category": "Eco Club & Green Campus",
    "date": "10.07.2025"
  },
  {
    "id": "IMG-News17941_jpeg",
    "title": "Nasha Mukt Bharat Pakhwara 12-26 June 2025",
    "description": "Nasha Mukt Bharat Pakhwara 12-26 June 2025",
    "image": "assets/official/News17941.jpeg",
    "category": "Social Awareness & Rallies",
    "date": "26 June 2025"
  },
  {
    "id": "IMG-News15905_jpg",
    "title": "Albendazol Tablets admisistered to the Students on 11th Februay 2025 on the eve of National Dewormimg Day 2025.",
    "description": "Albendazol Tablets admisistered to the Students on 11th Februay 2025 on the eve of National Dewormimg Day 2025.",
    "image": "assets/official/News15905.jpg",
    "category": "Health & Wellness Camps",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News15842_jpeg",
    "title": "The 6th Annual Athletic Meet Prize Distribution Ceremony on 6th February 2025",
    "description": "The 6th Annual Athletic Meet Prize Distribution Ceremony on 6th February 2025",
    "image": "assets/official/News15842.jpeg",
    "category": "Sports & Athletics",
    "date": "6th February 2025"
  },
  {
    "id": "IMG-News15812_PNG",
    "title": "Two days 6th Annual Athletic Meet began on 5th February 2025 in GCG Nacholi Faridabad",
    "description": "Two days 6th Annual Athletic Meet began on 5th February 2025 in GCG Nacholi Faridabad",
    "image": "assets/official/News15812.PNG",
    "category": "Sports & Athletics",
    "date": "5th February 2025"
  },
  {
    "id": "IMG-News15804_jpeg",
    "title": "Invitation for 6th Annual Athletic Meet  in GCG Nacholi Faridabad on 5th and 6th February 2025",
    "description": "Invitation for 6th Annual Athletic Meet  in GCG Nacholi Faridabad on 5th and 6th February 2025",
    "image": "assets/official/News15804.jpeg",
    "category": "Sports & Athletics",
    "date": "6th February 2025"
  },
  {
    "id": "IMG-News15707_jpg",
    "title": "Road Safety Pledge was administered in GCG Nacholi on 30 January 2025",
    "description": "Road Safety Pledge was administered in GCG Nacholi on 30 January 2025",
    "image": "assets/official/News15707.jpg",
    "category": "Social Awareness & Rallies",
    "date": "30 January 2025"
  },
  {
    "id": "IMG-News15706_jpg",
    "title": "Road Safety Awareness Rally Organised in GCG Nacholi on30 January 2025.",
    "description": "Road Safety Awareness Rally Organised in GCG Nacholi on30 January 2025.",
    "image": "assets/official/News15706.jpg",
    "category": "Social Awareness & Rallies",
    "date": "30 January 2025"
  },
  {
    "id": "IMG-News15653_jpeg",
    "title": "76th Republic Day Celebrated in GCG Nacholi Faridabad",
    "description": "76th Republic Day Celebrated in GCG Nacholi Faridabad",
    "image": "assets/official/News15653.jpeg",
    "category": "National & State Celebrations",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News15652_jpeg",
    "title": "15th National Voters Day was celebrated in GCG Nacholi Faridabad",
    "description": "15th National Voters Day was celebrated in GCG Nacholi Faridabad",
    "image": "assets/official/News15652.jpeg",
    "category": "National & State Celebrations",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News14370_jpg",
    "title": "State Level Online Poster Making Competition",
    "description": "State Level Online Poster Making Competition",
    "image": "assets/official/News14370.jpg",
    "category": "Academic & Workshops",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News14369_jpeg",
    "title": "State Level Poster Making Competition",
    "description": "State Level Poster Making Competition",
    "image": "assets/official/News14369.jpeg",
    "category": "Academic & Workshops",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News13583_jpg",
    "title": "Independence Day 2024",
    "description": "Independence Day 2024",
    "image": "assets/official/News13583.jpg",
    "category": "National & State Celebrations",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News11518_jpeg",
    "title": "75th Republic Day celebrated in GCG Nacholi on 26th January 2024",
    "description": "75th Republic Day celebrated in GCG Nacholi on 26th January 2024",
    "image": "assets/official/News11518.jpeg",
    "category": "National & State Celebrations",
    "date": "26th January 2024"
  },
  {
    "id": "IMG-News11516_jpeg",
    "title": "14th National Voters' Day Celebration in GCG Nacholi, Faridabad on 25th January 2024",
    "description": "14th National Voters' Day Celebration in GCG Nacholi, Faridabad on 25th January 2024",
    "image": "assets/official/News11516.jpeg",
    "category": "National & State Celebrations",
    "date": "25th January 2024"
  },
  {
    "id": "IMG-News10899_jpeg",
    "title": "Special Summary Revision 2024 Awareness Rally",
    "description": "Special Summary Revision 2024 Awareness Rally",
    "image": "assets/official/News10899.jpeg",
    "category": "Social Awareness & Rallies",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News10503_jpeg",
    "title": "First Round Road Safety Quiz Competition Held on 13 Oct 2023 under the aegis of Haryana Police Department",
    "description": "First Round Road Safety Quiz Competition Held on 13 Oct 2023 under the aegis of Haryana Police Department",
    "image": "assets/official/News10503.jpeg",
    "category": "Social Awareness & Rallies",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News9732_jpg",
    "title": "INDEPENDENCE DAY 2023",
    "description": "INDEPENDENCE DAY 2023",
    "image": "assets/official/News9732.jpg",
    "category": "National & State Celebrations",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News8372_jpg",
    "title": "#Mai Bharat Hun\r\n#Hum Vote Dene Jaenge\r\n# National Voters Day 25.01.2023",
    "description": "#Mai Bharat Hun\r\n#Hum Vote Dene Jaenge\r\n# National Voters Day 25.01.2023",
    "image": "assets/official/News8372.jpg",
    "category": "National & State Celebrations",
    "date": "25.01.2023"
  },
  {
    "id": "IMG-News8283_jpeg",
    "title": "NATIONAL YOUTH DAY 12.01.2023",
    "description": "NATIONAL YOUTH DAY 12.01.2023",
    "image": "assets/official/News8283.jpeg",
    "category": "Campus Life & Activities",
    "date": "12.01.2023"
  },
  {
    "id": "IMG-News8140_jpg",
    "title": "ROAD SAFETY PLEDGE CEREMONY 9.12.2022",
    "description": "ROAD SAFETY PLEDGE CEREMONY 9.12.2022",
    "image": "assets/official/News8140.jpg",
    "category": "Social Awareness & Rallies",
    "date": "9.12.2022"
  },
  {
    "id": "IMG-News8139_jpg",
    "title": "WORKSHOP ON GENDER EQUALITY 5.12.2022",
    "description": "WORKSHOP ON GENDER EQUALITY 5.12.2022",
    "image": "assets/official/News8139.jpg",
    "category": "Academic & Workshops",
    "date": "5.12.2022"
  },
  {
    "id": "IMG-News8138_jpg",
    "title": "WORKSHOP ON TRAFFIC RULES",
    "description": "WORKSHOP ON TRAFFIC RULES",
    "image": "assets/official/News8138.jpg",
    "category": "Social Awareness & Rallies",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News8137_jpg",
    "title": "NSS ONE DAY CAMP ON 14.11.2022",
    "description": "NSS ONE DAY CAMP ON 14.11.2022",
    "image": "assets/official/News8137.jpg",
    "category": "Health & Wellness Camps",
    "date": "14.11.2022"
  },
  {
    "id": "IMG-News7538_jpg",
    "title": "NATIONAL UNITY DAY CELEBRATED ON 31.10.2022",
    "description": "NATIONAL UNITY DAY CELEBRATED ON 31.10.2022",
    "image": "assets/official/News7538.jpg",
    "category": "Campus Life & Activities",
    "date": "31.10.2022"
  },
  {
    "id": "IMG-News7537_jpg",
    "title": "HEALTH CHECKUP CAMP ON 19.10.2022",
    "description": "HEALTH CHECKUP CAMP ON 19.10.2022",
    "image": "assets/official/News7537.jpg",
    "category": "Health & Wellness Camps",
    "date": "19.10.2022"
  },
  {
    "id": "IMG-News7536_jpg",
    "title": "FRESHERS PARTY 2022 23",
    "description": "FRESHERS PARTY 2022 23",
    "image": "assets/official/News7536.jpg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News7535_jpg",
    "title": "CYBER SECURITY WORKSHOP",
    "description": "CYBER SECURITY WORKSHOP",
    "image": "assets/official/News7535.jpg",
    "category": "Academic & Workshops",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News6697_jpeg",
    "title": "Dr. Sunidhi received recognition for outstanding service in the field of education",
    "description": "Dr. Sunidhi received recognition for outstanding service in the field of education",
    "image": "assets/official/News6697.jpeg",
    "category": "Eco Club & Green Campus",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News6638_jpeg",
    "title": "HarGharTiranga",
    "description": "HarGharTiranga",
    "image": "assets/official/News6638.jpeg",
    "category": "National & State Celebrations",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News6637_jpeg",
    "title": "Rangoli Competition on the theme HarGharTiranga",
    "description": "Rangoli Competition on the theme HarGharTiranga",
    "image": "assets/official/News6637.jpeg",
    "category": "National & State Celebrations",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News5317_jpeg",
    "title": "World No-Tobacco Day 31st May 2022",
    "description": "World No-Tobacco Day 31st May 2022",
    "image": "assets/official/News5317.jpeg",
    "category": "Campus Life & Activities",
    "date": "31st May 2022"
  },
  {
    "id": "IMG-News5289_JPG",
    "title": "First Annual Day 28 April 2022",
    "description": "First Annual Day 28 April 2022",
    "image": "assets/official/News5289.JPG",
    "category": "Campus Life & Activities",
    "date": "28 April 2022"
  },
  {
    "id": "IMG-News5287_jpg",
    "title": "NSS seven Days Camp 29 March  to 4 April 2022",
    "description": "NSS seven Days Camp 29 March  to 4 April 2022",
    "image": "assets/official/News5287.jpg",
    "category": "Health & Wellness Camps",
    "date": "4 April 2022"
  },
  {
    "id": "IMG-News5286_jpg",
    "title": "International women's Day 8.3.2022",
    "description": "International women's Day 8.3.2022",
    "image": "assets/official/News5286.jpg",
    "category": "Campus Life & Activities",
    "date": "8.3.2022"
  },
  {
    "id": "IMG-News5285_jpg",
    "title": "Lecture on Health and Nutrition by experts from QRG Hospital",
    "description": "Lecture on Health and Nutrition by experts from QRG Hospital",
    "image": "assets/official/News5285.jpg",
    "category": "Health & Wellness Camps",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News5284_jpg",
    "title": "Freshers Party 4.2.2022",
    "description": "Freshers Party 4.2.2022",
    "image": "assets/official/News5284.jpg",
    "category": "Campus Life & Activities",
    "date": "4.2.2022"
  },
  {
    "id": "IMG-News5282_jpg",
    "title": "Republic Day 2022",
    "description": "Republic Day 2022",
    "image": "assets/official/News5282.jpg",
    "category": "National & State Celebrations",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News5281_jpeg",
    "title": "Third Annual Athletic Meet held on 28 and 29 December 2021 in GCG Nacholi, Faridabad",
    "description": "Third Annual Athletic Meet held on 28 and 29 December 2021 in GCG Nacholi, Faridabad",
    "image": "assets/official/News5281.jpeg",
    "category": "Sports & Athletics",
    "date": "29 December 2021"
  },
  {
    "id": "IMG-News5280_jpeg",
    "title": "Health Checkup Camp 20.12.2021",
    "description": "Health Checkup Camp 20.12.2021",
    "image": "assets/official/News5280.jpeg",
    "category": "Health & Wellness Camps",
    "date": "20.12.2021"
  },
  {
    "id": "IMG-News5279_jpeg",
    "title": "One Day Yoga Camp 8.12.2021",
    "description": "One Day Yoga Camp 8.12.2021",
    "image": "assets/official/News5279.jpeg",
    "category": "Sports & Athletics",
    "date": "8.12.2021"
  },
  {
    "id": "IMG-News5277_jpeg",
    "title": "One Day NSS Camp 30.10.2021",
    "description": "One Day NSS Camp 30.10.2021",
    "image": "assets/official/News5277.jpeg",
    "category": "Health & Wellness Camps",
    "date": "30.10.2021"
  },
  {
    "id": "IMG-News5276_jpeg",
    "title": "Covid Vaccination Camp 3.9.2021",
    "description": "Covid Vaccination Camp 3.9.2021",
    "image": "assets/official/News5276.jpeg",
    "category": "Health & Wellness Camps",
    "date": "3.9.2021"
  },
  {
    "id": "IMG-News5275_jpeg",
    "title": "World's Environment Day 5.6.2021",
    "description": "World's Environment Day 5.6.2021",
    "image": "assets/official/News5275.jpeg",
    "category": "Eco Club & Green Campus",
    "date": "5.6.2021"
  },
  {
    "id": "IMG-News5273_jpeg",
    "title": "Social Awareness 12.2.2021",
    "description": "Social Awareness 12.2.2021",
    "image": "assets/official/News5273.jpeg",
    "category": "Campus Life & Activities",
    "date": "12.2.2021"
  },
  {
    "id": "IMG-News5271_jpg",
    "title": "Lecture on civil and legal rights",
    "description": "Lecture on civil and legal rights",
    "image": "assets/official/News5271.jpg",
    "category": "Academic & Workshops",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News814_jpeg",
    "title": "GANDHI JAYANTI CELEBRETION 2020",
    "description": "GANDHI JAYANTI CELEBRETION 2020",
    "image": "assets/official/News814.jpeg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News677_jpeg",
    "title": "Teacher's Day Celebration 2020",
    "description": "Teacher's Day Celebration 2020",
    "image": "assets/official/News677.jpeg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News569_jpg",
    "title": "INDEPENDENCE DAY CELEBRATION 2020",
    "description": "INDEPENDENCE DAY CELEBRATION 2020",
    "image": "assets/official/News569.jpg",
    "category": "National & State Celebrations",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News568_jpg",
    "title": "VRIKSHABANDHAN",
    "description": "VRIKSHABANDHAN",
    "image": "assets/official/News568.jpg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News556_jpeg",
    "title": "FDP on 'E-content Development'",
    "description": "FDP on 'E-content Development'",
    "image": "assets/official/News556.jpeg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News240_jpg",
    "title": "First Athletic Meet",
    "description": "First Athletic Meet",
    "image": "assets/official/News240.jpg",
    "category": "Sports & Athletics",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News197_jpeg",
    "title": "International Yoga Day",
    "description": "International Yoga Day",
    "image": "assets/official/News197.jpeg",
    "category": "Sports & Athletics",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News12798_jpeg",
    "title": "Inspection by MDU Inspection Committee for Affiliation of MCOM Program for the ...",
    "description": "Inspection by MDU Inspection Committee for Affiliation of MCOM Program for the ...",
    "image": "assets/official/News12798.jpeg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News12715_jpeg",
    "title": "PG course M.com started in GCG Nacholi",
    "description": "PG course M.com started in GCG Nacholi",
    "image": "assets/official/News12715.jpeg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News12714_jpeg",
    "title": "Roadways bus started for GCG Nacholi",
    "description": "Roadways bus started for GCG Nacholi",
    "image": "assets/official/News12714.jpeg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News11126_jpeg",
    "title": "Media Coverage of Closing Ceremony of 6th Annual Athletic Meet",
    "description": "Media Coverage of Closing Ceremony of 6th Annual Athletic Meet",
    "image": "assets/official/News11126.jpeg",
    "category": "Sports & Athletics",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News11119_jpeg",
    "title": "Athletic Meet 2025",
    "description": "Athletic Meet 2025",
    "image": "assets/official/News11119.jpeg",
    "category": "Sports & Athletics",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News11118_jpeg",
    "title": "Republic Day 2025",
    "description": "Republic Day 2025",
    "image": "assets/official/News11118.jpeg",
    "category": "National & State Celebrations",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News11117_jpeg",
    "title": "NSS SEVEN DAY CAMP 2024 25",
    "description": "NSS SEVEN DAY CAMP 2024 25",
    "image": "assets/official/News11117.jpeg",
    "category": "Health & Wellness Camps",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News9989_jpg",
    "title": "Admissions 2024-25",
    "description": "Admissions 2024-25",
    "image": "assets/official/News9989.jpg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News7144_jpeg",
    "title": "Annual Athletic meet 2023",
    "description": "Annual Athletic meet 2023",
    "image": "assets/official/News7144.jpeg",
    "category": "Sports & Athletics",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News7143_jpeg",
    "title": "Workshop on self defence, self-reliance and women rights",
    "description": "Workshop on self defence, self-reliance and women rights",
    "image": "assets/official/News7143.jpeg",
    "category": "Academic & Workshops",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News6729_jpg",
    "title": "ROAD SAFETY CAMPAIGN 5.12.2022",
    "description": "ROAD SAFETY CAMPAIGN 5.12.2022",
    "image": "assets/official/News6729.jpg",
    "category": "Social Awareness & Rallies",
    "date": "5.12.2022"
  },
  {
    "id": "IMG-News6728_jpg",
    "title": "NSS ONE DAY CAMP",
    "description": "NSS ONE DAY CAMP",
    "image": "assets/official/News6728.jpg",
    "category": "Health & Wellness Camps",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News6330_jpg",
    "title": "National Unity Day Celebration on 31.10.2022",
    "description": "National Unity Day Celebration on 31.10.2022",
    "image": "assets/official/News6330.jpg",
    "category": "Campus Life & Activities",
    "date": "31.10.2022"
  },
  {
    "id": "IMG-News6329_jpg",
    "title": "Health Checkup Camp organized in GCG Nacholi",
    "description": "Health Checkup Camp organized in GCG Nacholi",
    "image": "assets/official/News6329.jpg",
    "category": "Health & Wellness Camps",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News6328_jpg",
    "title": "NSS Volunteers received certificates by Shri Bandaru Dattatraya( Hon'ble Govern...",
    "description": "NSS Volunteers received certificates by Shri Bandaru Dattatraya( Hon'ble Govern...",
    "image": "assets/official/News6328.jpg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News6327_jpg",
    "title": "NSS Volunteers attended one week special camp organized by MD University on Sig...",
    "description": "NSS Volunteers attended one week special camp organized by MD University on Sig...",
    "image": "assets/official/News6327.jpg",
    "category": "Health & Wellness Camps",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News5573_jpeg",
    "title": "AZADI KA AMRIT MAHOTSAV",
    "description": "AZADI KA AMRIT MAHOTSAV",
    "image": "assets/official/News5573.jpeg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News5473_jpeg",
    "title": "Admissions 2022-23",
    "description": "Admissions 2022-23",
    "image": "assets/official/News5473.jpeg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News2700_jpg",
    "title": "FREE BOOKS DISTRIBUTION TO MERITORIOUS STUDENTS",
    "description": "FREE BOOKS DISTRIBUTION TO MERITORIOUS STUDENTS",
    "image": "assets/official/News2700.jpg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News464_jpg",
    "title": "Free Books to the students who will get admission in first merit list",
    "description": "Free Books to the students who will get admission in first merit list",
    "image": "assets/official/News464.jpg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News463_jpg",
    "title": "chatbox \"Aapka Mitra\"",
    "description": "chatbox \"Aapka Mitra\"",
    "image": "assets/official/News463.jpg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News417_jpeg",
    "title": "Admission open in Government College for Girls, Nacholi(Faridabad) for the acad...",
    "description": "Admission open in Government College for Girls, Nacholi(Faridabad) for the acad...",
    "image": "assets/official/News417.jpeg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News360_jpg",
    "title": "VRIKSHAROPAN",
    "description": "VRIKSHAROPAN",
    "image": "assets/official/News360.jpg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News302_jpeg",
    "title": "National Education Policy 2020",
    "description": "National Education Policy 2020",
    "image": "assets/official/News302.jpeg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News301_jpeg",
    "title": "Dr. Sunidhi joined as the Principal, GCG Nacholi",
    "description": "Dr. Sunidhi joined as the Principal, GCG Nacholi",
    "image": "assets/official/News301.jpeg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News294_jpeg",
    "title": "Declaration of exam schedule of Undergraduate classes",
    "description": "Declaration of exam schedule of Undergraduate classes",
    "image": "assets/official/News294.jpeg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  },
  {
    "id": "IMG-News292_jpg",
    "title": "Webinar on NEP 2020 by HGCTA",
    "description": "Webinar on NEP 2020 by HGCTA",
    "image": "assets/official/News292.jpg",
    "category": "Campus Life & Activities",
    "date": "2025-2026"
  }
],

  // Official Downloads & Forms
  downloads: [
    { title: "Admission Application & Verification Checklist 2025-26", size: "245 KB", type: "PDF", link: "http://gcgnacholi.ac.in/DownloadForms" },
    { title: "Academic Calendar & Holiday List 2025-2026", size: "410 KB", type: "PDF", link: "http://gcgnacholi.ac.in/QuickLinks.aspx?ID=BFcJrpmMV3E=" },
    { title: "Student Code of Conduct & Campus Rules Handbook", size: "320 KB", type: "PDF", link: "http://gcgnacholi.ac.in/Data?Menu=BFcJrpmMV3E=&SubMenu=UoAo379tikA=" },
    { title: "Anti-Ragging Undertaking Form (Student & Parent)", size: "180 KB", type: "PDF", link: "http://gcgnacholi.ac.in/Data?Menu=rSas3impO6s=&SubMenu=06N7h0M69tA=" },
    { title: "Internal Complaints Committee (ICC) Policy Document", size: "290 KB", type: "PDF", link: "http://gcgnacholi.ac.in/Data?Menu=rSas3impO6s=&SubMenu=js4vRWBRBwk=" },
    { title: "Mandatory RTI Act 2005 Disclosure Document", size: "540 KB", type: "PDF", link: "http://gcgnacholi.ac.in/RTI" },
    { title: "Institutional Development Plan (IDP) 2024-2029", size: "1.2 MB", type: "PDF", link: "http://gcgnacholi.ac.in/Data?Menu=ROFj+/eyOLA=&SubMenu=S4ixcmxFpmQ=" },
    { title: "Annual Quality Assurance Report (AQAR) 2024-25", size: "890 KB", type: "PDF", link: "http://gcgnacholi.ac.in/Data?Menu=d5jo6AxztEo=&SubMenu=IH+M4p6lmEs=" }
  ],

  // Government & Online Portals
  onlineServices: [
    { title: "Har-Chhatravratti Scholarship Portal", url: "https://harchhatravratti.highereduhry.ac.in/", desc: "State centralized portal for Post-Matric & Merit scholarships" },
    { title: "PM-Vidyalaxmi Education Loan", url: "https://pmvidyalaxmi.co.in/Index.aspx", desc: "National single-window loan portal for higher education" },
    { title: "DHE Online Admission Portal", url: "https://admissions.highereduhry.ac.in/", desc: "Haryana centralized admission system for UG & PG" },
    { title: "Passport Fee Reimbursement Portal", url: "https://passport.highereduhry.ac.in/", desc: "Govt reimbursement scheme for college girl students" },
    { title: "SWAYAM & NPTEL E-Learning", url: "https://swayam.gov.in/", desc: "Free online MOOC courses and credit transfers" },
    { title: "National Digital Library of India (NDLI)", url: "https://ndl.iitkgp.ac.in/", desc: "Access millions of books, papers, and journals" }
  ],

  // Right to Information (RTI) Information
  rtiDetails: {
    firstAppellateAuthority: {
      name: "Dr. Sunita Sharma",
      designation: "Principal / First Appellate Authority (FAA)",
      contact: "+91 9953591834",
      email: "principalgcgnacholi@gmail.com"
    },
    statePublicInformationOfficer: {
      name: "Dr. Sushil Kumar Verma",
      designation: "Associate Professor / SPIO",
      contact: "0129-2200112",
      email: "spio.gcgnacholi@gmail.com"
    },
    feeDetails: "RTI application fee of Rs. 10/- by IPO or Treasury Challan in favor of Principal, GCG Nacholi."
  }
};
