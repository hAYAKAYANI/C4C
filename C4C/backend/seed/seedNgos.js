// seed/seedNgos.js
const mongoose = require("mongoose");
const Ngo = require("../models/Ngo");

// Your sample data
const ngosData = [
  {
  
    name: "Mercy Appeal – Food Distribution Jhelum",
    sector: "food",
    focus: "Food Focused",
    otherCauses: "Basic necessities",
    description: "Mercy Appeal is dedicated to providing essential food parcels to impoverished families in the Jhelum region, ensuring they receive nutritious meals and basic necessities to alleviate hunger and improve their quality of life.",
    volunteerInfo: "Yes",
    location: "Jhelum",
    website: "https://mercyappeal.org/food-distribution-jhelum-1/",
    verified: true,
  },
  {
  
    name: "Rehmat Welfare Foundation",
    sector: "food",
    focus: "Multi-Cause",
    otherCauses: "Health, relief",
    description: "Local NGO distributing food during Ramadan and crises.",
    volunteerInfo: "Contact NGO",
    location: "Jhelum",
    website: "https://www.facebook.com/RWFJhelum/",
    verified: true,
  },
  {
    
    name: "Wasila Welfare Foundation",
    sector: "food",
    focus: "Multi-Cause",
    otherCauses: "Education, health",
    description: "Community welfare organization supporting needy families.",
    volunteerInfo: "Yes",
    location: "Jhelum",
    website: "https://pakngos.com.pk/ngo/wasila-welfare-foundation-jhelum/",
    verified: true,
  },
  {
   
    name: "Hasil Foundation",
    sector: "food",
    focus: "Food Focused",
    otherCauses: "Nutrition",
    description: "Provides meals to slum children and families.",
    volunteerInfo: "Yes",
    location: "Karachi (projects in other cities)",
    website: "https://hasilfoundation.com/",
    verified: true,
  },
  {
   
    name: "Fatih Foundation",
    sector: "food",
    focus: "Food Focused",
    otherCauses: "Education",
    description: "Delivers ration packs and hot meals.",
    volunteerInfo: "Yes",
    location: "Karachi",
    website: "https://fatihfoundation.com/food-aid/",
    verified: true,
  },
  {
 
    name: "One Vision Society",
    sector: "food",
    focus: "Food Focused",
    otherCauses: "Homeless care",
    description: "Street food distribution projects.",
    volunteerInfo: "Yes",
    location: "Project-based across Pakistan",
    website: "https://onevisionsociety.org/about-us/services/foodbox/",
    verified: true,
  },
  {
    
    name: "Roshan Pakistan Foundation",
    sector: "food",
    focus: "Food Focused",
    otherCauses: "Education",
    description: "Community food and school meal programs.",
    volunteerInfo: "Yes",
    location: "Islamabad & Rawalpindi",
    website: "https://roshanpakistanfoundation.org/food.php/",
    verified: true,
  },
  {
   
    name: "Anzal Begum Foundation",
    sector: "food",
    focus: "Food Focused",
    otherCauses: "Family welfare",
    description: "Monthly food packs for poor families.",
    volunteerInfo: "Yes",
    location: "Karachi (nationwide support)",
    website: "https://anzalbegumfoundation.org/food-programme-pakistan/",
    verified: true,
  },
  {
   
    name: "Fortify Education Foundation",
    sector: "food",
    focus: "Food Focused",
    otherCauses: "Education",
    description: "School meal programs for children.",
    volunteerInfo: "Yes",
    location: "Karachi, Lahore, Islamabad",
    website: "https://fortifyeducationfoundation.org/",
    verified: true,
  },
  {
   
    name: "Help in Need",
    sector: "food",
    focus: "Food Focused",
    otherCauses: "Disaster relief",
    description: "Runs hunger relief campaigns.",
    volunteerInfo: "Yes",
    location: "Islamabad (projects nationwide)",
    website: "https://helpinneed.org/food-donation-pakistan/",
    verified: true,
  },
  {
   
    name: "Amanatdaar Welfare Trust",
    sector: "food",
    focus: "Food Focused",
    otherCauses: "Shelter support",
    description: "Daily meals and ration support.",
    volunteerInfo: "Yes",
    location: "Karachi, Lahore",
    website: "https://www.amanatdaar.org/",
    verified: true,
  },
  {
   
    name: "TARS Foundation",
    sector: "food",
    focus: "Food Focused",
    otherCauses: "Relief services",
    description: "Free food distribution programs.",
    volunteerInfo: "Yes",
    location: "Peshawar",
    website: "https://www.tarsfoundation.org.pk/Free-Food-Distribution/",
    verified: true,
  },
  {
  
    name: "Jannat Foundation",
    sector: "food",
    focus: "Food Focused",
    otherCauses: "Health, education",
    description: "Provides nutritious food to needy families.",
    volunteerInfo: "Yes",
    location: "Lahore",
    website: "https://jannatfoundation.pk/food/",
    verified: true,
  },
  {
    
    name: "GAIN Pakistan",
    sector: "food",
    focus: "Food Security",
    otherCauses: "Nutrition systems",
    description: "Improves nutrition through food systems.",
    volunteerInfo: "Internships",
    location: "Islamabad (nationwide programs)",
    website: "https://www.gainhealth.org/countries/pakistan/",
    verified: true,
  },
  {
    
    name: "Action Against Hunger",
    sector: "food",
    focus: "Food Security",
    otherCauses: "WASH, nutrition",
    description: "Fights hunger and malnutrition across Pakistan.",
    volunteerInfo: "Yes",
    location: "Multiple provinces across Pakistan",
    website: "https://www.actionagainsthunger.org/location/asia/pakistan/",
    verified: true,
  },
  {
   
    name: "Dawood Global Foundation",
    sector: "food",
    focus: "Multi-Cause",
    otherCauses: "Community aid",
    description: "Food and social support programs.",
    volunteerInfo: "Yes",
    location: "Karachi",
    website: "https://dawoodglobal.org/food.aspx/",
    verified: true,
  },
  {
    
    name: "Care and Relief Foundation",
    sector: "food",
    focus: "Multi-Cause",
    otherCauses: "Water, health",
    description: "Food and humanitarian aid.",
    volunteerInfo: "Yes",
    location: "Rural Sindh & Punjab",
    website: "https://careandrelief.uk/",
    verified: true,
  },
  {
    
    name: "Rizq",
    sector: "food",
    focus: "Food Security",
    otherCauses: "Food waste reduction",
    description: "Food banks and hunger relief initiatives.",
    volunteerInfo: "Yes",
    location: "Lahore, Islamabad, Karachi",
    website: "https://rizq.org/",
    verified: true,
  },
  {
    
    name: "Edhi Foundation",
    sector: "food",
    focus: "Multi-Cause",
    otherCauses: "Emergency relief",
    description: "Nationwide food pack distribution.",
    volunteerInfo: "Yes",
    location: "Nationwide (all major cities)",
    website: "https://www.edhi.org/food-bank/",
    verified: true,
  },
  {
  
    name: "Alkhidmat Foundation – Jhelum Branch",
    sector: "food",
    focus: "Food + Multi-Cause",
    otherCauses: "Shelter, education, healthcare",
    description:
      "Provides essential humanitarian services including food packs, disaster relief, healthcare, education, clean water, and support to vulnerable communities.",
    volunteerInfo: "Yes",
    location:
      "Nationwide (branches in Lahore, Karachi, Islamabad, Jhelum, etc.)",
    website: "https://alkhidmat.org/",
    verified: true,
  },
  // ====== ADDITIONAL NGOs ======

{
  
  name: "Saylani Welfare",
  sector: "food",
  focus: "Food & Ration",
  description:
    "Provides free daily meals and monthly ration bags for families in need.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://saylaniwelfare.com/",
  verified: true,
},
{
  
  name: "Rizq",
  sector: "food",
  focus: "Food Security",
  description:
    "Connects surplus food from restaurants to hungry communities to reduce food waste.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://rizq.org/",
  verified: true,
},
{
  
  name: "Allah Walay Trust",
  sector: "food",
  focus: "Free Meals",
  description:
    "Serves thousands of balanced meals daily to laborers and travelers.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://allahwalaytrust.org.pk/",
  verified: true,
},
{
 
  name: "JDC Foundation",
  sector: "food",
  focus: "Food & Relief",
  description:
    "Runs large-scale free food centers and mobile restaurants for the poor.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://jdcwelfare.org/",
  verified: true,
},
{
  
  name: "Chhipa Welfare",
  sector: "food",
  focus: "Ration & Langar",
  description:
    "Operates 24-hour kitchens and provides dry ration to widows and needy families.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://www.chhipa.org/",
  verified: true,
},
{
 
  name: "Robin Hood Army",
  sector: "food",
  focus: "Food Surplus",
  description:
    "Collects leftover food from restaurants and distributes it to local slums.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://robinhoodarmy.com/",
  verified: true,
},
{

  name: "Amanatdaar",
  sector: "food",
  focus: "Food & Nutrition",
  description:
    "Runs large-scale Dastarkhuwans, monthly ration distribution, installs clean water hand pumps, supports education through Taleem Pakistan, and operates mobile clinics offering free medical checkups.",
  volunteerInfo: "Yes",
  location: "Punjab & Sindh",
  website: "https://amanatdaar.org/",
  verified: true,
},
{

  name: "The Noor Project",
  sector: "food",
  focus: "Food Security",
  description:
    "Operates food banks distributing monthly grocery bags to registered families and runs vocational training centers.",
  volunteerInfo: "Contact",
  location: "Pakistan",
  website: "https://thenoorproject.org/",
  verified: true,
},
{

  name: "Who Is Hussain?",
  sector: "food",
  focus: "Food Drives",
  description:
    "Organizes street-level food and water drives for homeless individuals.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://whoishussain.org/",
  verified: true,
},
{
 
  name: "Fountain House",
  sector: "health",
  focus: "Patient Nutrition",
  description:
    "Ensures quality food and care for abandoned mentally ill patients.",
  volunteerInfo: "Contact",
  location: "Pakistan",
  website: "https://fountainhouse.com.pk/",
  verified: true,
},
{
  
  name: "Edhi Foundation",
  sector: "social-welfare",
  focus: "Social Welfare",
  description:
    "Provides ambulance services, shelter homes, and social support for homeless and orphaned individuals.",
  volunteerInfo: "Yes",
  location: "Nationwide",
  website: "https://edhi.org/",
  verified: true,
},
{

  name: "Akhuwat",
  sector: "social-welfare",
  focus: "Social Welfare",
  description:
    "Operates clothes banks and interest-free loan programs to uplift underprivileged communities.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://akhuwat.org.pk/",
  verified: true,
},
{
 
  name: "Al-Khidmat Punjab",
  sector: "social-welfare",
  focus: "Social Welfare",
  description:
    "Supports widows and manages clean water, education, and relief projects.",
  volunteerInfo: "Yes",
  location: "Punjab",
  website: "https://alkhidmat.org/",
  verified: true,
},
{

  name: "Transparent Hands",
  sector: "health",
  focus: "Social Welfare",
  description:
    "Funds free life-saving surgeries for poor patients through transparent crowdfunding.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://www.transparenthands.org/",
  verified: true,
},
{

  name: "SOS Children's Villages",
  sector: "social-welfare",
  focus: "Social Welfare",
  description:
    "Creates family-based homes for orphaned and abandoned children.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://www.sos.org.pk/",
  verified: true,
},
{
  
  name: "HOPES Foundation",
  sector: "health",
  focus: "Social Welfare",
  description:
    "Provides free medicines and healthcare services to needy patients.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://hopefoundation.org.pk/",
  verified: true,
},
{
  
  name: "Sarwar Foundation",
  sector: "social-welfare",
  focus: "Social Welfare",
  description:
    "Installs water filtration plants in schools and rural villages.",
  volunteerInfo: "Contact",
  location: "Pakistan",
  website: "https://sarwarfoundation.org/",
  verified: true,
},
{
 
  name: "Bedari",
  sector: "social-welfare",
  focus: "Social Welfare",
  description:
    "Protects women and girls from violence, abuse, and child marriage.",
  volunteerInfo: "Contact",
  location: "Pakistan",
  website: "https://bedari.org.pk/",
  verified: true,
},
{

  name: "Sanatzar",
  sector: "social-welfare",
  focus: "Social Welfare",
  description:
    "Empowers women through vocational skills such as tailoring and handicrafts.",
  volunteerInfo: "Contact",
  location: "Punjab",
  website: "https://swd.punjab.gov.pk/",
  verified: true,
},
{
  
  name: "Star Welfare Organization",
  sector: "social-welfare",
  focus: "Social Welfare",
  description:
    "Provides shelter, education, and protection for abandoned women and children.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "http://starwelfare.org/",
  verified: true,
},
{
  
  name: "Alkhidmat Foundation",
  sector: "disaster",
  focus: "Disaster Relief & Social Welfare",
  description:
    "Extensive network providing food, health, orphan care, and emergency disaster relief across Pakistan.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://alkhidmat.org",
  verified: true,
},
{
 
  name: "Edhi Foundation",
  sector: "disaster",
  focus: "Emergency Response & Social Welfare",
  description:
    "Operates the world’s largest volunteer ambulance network and provides emergency and humanitarian services nationwide.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://edhi.org",
  verified: true,
},
{
 
  name: "HANDS Pakistan",
  sector: "disaster",
  focus: "Community Development & Disaster Risk Reduction",
  description:
    "Works on integrated community development, healthcare, and disaster preparedness in vulnerable regions.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://hands.org.pk",
  verified: true,
},
{
 
  name: "Saylani Welfare",
  sector: "disaster",
  focus: "Food Relief & Emergency Support",
  description:
    "Provides large-scale food distribution, emergency relief, and vocational training during disasters.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://saylaniwelfare.com",
  verified: true,
},
{
 
  name: "Akhuwat Foundation",
  sector: "disaster",
  focus: "Disaster Recovery & Microfinance",
  description:
    "Offers interest-free microfinance and supports disaster recovery through community-based programs.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://akhuwat.org.pk",
  verified: true,
},
{
 
  name: "Islamic Relief Pakistan",
  sector: "disaster",
  focus: "Emergency Response & Climate Resilience",
  description:
    "Global humanitarian organization providing emergency aid, WASH services, and climate adaptation support.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://islamic-relief.org.pk",
  verified: true,
},
{
  
  name: "Pakistan Red Crescent",
  sector: "disaster",
  focus: "Emergency Medical & Humanitarian Aid",
  description:
    "Statutory humanitarian body delivering first aid, blood services, and disaster response nationwide.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://prc.org.pk",
  verified: true,
},
{
 
  name: "Aga Khan Agency for Habitat",
  sector: "disaster",
  focus: "Disaster Risk Management",
  description:
    "Specializes in disaster preparedness, resilient housing, and climate adaptation in mountainous areas.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://akahabitat.org",
  verified: true,
},
{

  name: "International Rescue Committee",
  sector: "disaster",
  focus: "Humanitarian Aid & Refugee Support",
  description:
    "Provides emergency relief and long-term assistance to displaced communities and refugees.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://rescue.org/pakistan",
  verified: true,
},
{
 
  name: "Muslim Hands Pakistan",
  sector: "disaster",
  focus: "Emergency Relief & Development",
  description:
    "Delivers emergency aid, clean water, and education support in disaster-affected districts.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://muslimhands.org.pk",
  verified: true,
},
{
  
  name: "Save the Children",
  sector: "disaster",
  focus: "Child Protection & Emergency Health",
  description:
    "Protects children’s rights and provides health, nutrition, and emergency support during crises.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://pakistan.savethechildren.net",
  verified: true,
},
{
 
  name: "CARE International",
  sector: "disaster",
  focus: "Women Empowerment & Emergency Relief",
  description:
    "Supports women-led recovery, livelihoods, and emergency assistance in disaster-prone areas.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://careinternational.org.pk",
  verified: true,
},
{
  
  name: "Relief International",
  sector: "disaster",
  focus: "Post-Disaster Recovery",
  description:
    "Restores livelihoods, healthcare, and essential services in communities affected by disasters.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://ri.org",
  verified: true,
},
{
  
  name: "Transparent Hands",
  sector: "disaster",
  focus: "Medical Relief",
  description:
    "Provides free surgeries, medical camps, and healthcare support in disaster-hit regions.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://transparenthands.org",
  verified: true,
},
{
 
  name: "Chhipa Welfare",
  sector: "disaster",
  focus: "Emergency Ambulance Services",
  description:
    "Runs emergency ambulance services, burial support, and food relief for disaster victims.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://chhipa.org",
  verified: true,
},
{
 
  name: "Karachi Relief Trust",
  sector: "disaster",
  focus: "Disaster Rehabilitation",
  description:
    "Volunteer-led organization focused on post-disaster housing and rehabilitation projects.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://karachirelief.org",
  verified: true,
},
{
 
  name: "Rizq",
  sector: "disaster",
  focus: "Food Security & Emergency Relief",
  description:
    "Combats hunger through food banks and rapid food distribution during floods and emergencies.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://rizq.org",
  verified: true,
},
{
  
  name: "SPO Pakistan",
  sector: "disaster",
  focus: "Disaster Resilience & Governance",
  description:
    "Works on disaster resilience, governance, and community preparedness initiatives.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://spopk.org",
  verified: true,
},
{
  name: "HOPE '87 Pakistan",
  sector: "disaster",
  focus: "Education & Youth Empowerment",
  description:
    "Supports education and youth development in disaster-affected rural communities.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://hope87.at",
  verified: true,
},
{
 
  name: "Indus Hospital Network",
  sector: "disaster",
  focus: "Emergency Healthcare",
  description:
    "Provides free healthcare services, mobile clinics, and emergency medical response nationwide.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://indushospital.org.pk",
  verified: true,
},
{
  
  name: "Akhuwat Foundation",
  sector: "education",
  focus: "Microfinance, Education & Community Development",
  description:
    "Provides interest-free microfinance to alleviate poverty while supporting education, healthcare, and social welfare programs nationwide.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://akhuwat.org.pk/",
  verified: true,
},
{
  
  name: "The Citizens Foundation (TCF)",
  sector: "education",
  focus: "Primary & Secondary Education",
  description:
    "Operates thousands of schools across Pakistan providing quality education to underprivileged children, with strong focus on teacher training and female education.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://www.tcf.org.pk/",
  verified: true,
},
{
 
  name: "READ Foundation",
  sector: "education",
  focus: "Education & Literacy",
  description:
    "Runs a network of schools across rural and remote Pakistan providing free or affordable education, especially for orphans.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://readfoundation.org/",
  verified: true,
},
{
 
  name: "Zindagi Trust",
  sector: "education",
  focus: "Education Reform & Policy Advocacy",
  description:
    "Transforms public sector schools through curriculum reform, teacher development, and improved governance systems.",
  volunteerInfo: "Yes",
  location: "Karachi, Sindh",
  website: "https://www.zindagitrust.org/",
  verified: true,
},
{
 
  name: "Family Educational Services Foundation (FESF)",
  sector: "education",
  focus: "Special Needs & Vocational Training",
  description:
    "Runs the Deaf Reach Program, providing free education, vocational training, and employment support for deaf children and youth.",
  volunteerInfo: "Contact",
  location: "Pakistan",
  website: "https://www.fesf.org.pk",
  verified: true,
},
{
  
  name: "Khpal Kor Foundation",
  sector: "education",
  focus: "Child Protection & Rehabilitation",
  description:
    "Provides shelter, education, psychosocial care, and life skills to orphaned and conflict-affected children in KP.",
  volunteerInfo: "Contact",
  location: "Khyber Pakhtunkhwa",
  website: "http://www.khpalkor.org",
  verified: true,
},
{

  name: "Teach For Pakistan",
  sector: "education",
  focus: "Education Leadership Development",
  description:
    "Places trained fellows in under-resourced schools and develops future leaders to address educational inequity.",
  volunteerInfo: "Contact",
  location: "Pakistan",
  website: "https://iteachforpakistan.org",
  verified: true,
},
{
 
  name: "Progressive Education Network (PEN)",
  sector: "education",
  focus: "Teacher Training & School Reform",
  description:
    "Partners with government schools to improve infrastructure, teaching quality, and student learning outcomes.",
  volunteerInfo: "Contact",
  location: "Sindh",
  website: "https://www.pen.org.pk",
  verified: true,
},
{
 
  name: "Idara-e-Taleem-o-Aagahi (ITA)",
  sector: "education",
  focus: "Education Research & Advocacy",
  description:
    "Works on education policy, literacy, and life skills education, and produces research such as ASER Pakistan.",
  volunteerInfo: "Project-based",
  location: "Pakistan",
  website: "https://www.itacec.org",
  verified: true,
},
{
  
  name: "Green Crescent Trust (GCT)",
  sector: "education",
  focus: "Girls Education & Community Development",
  description:
    "Operates schools in low-income communities with a strong focus on girls’ education and moral development.",
  volunteerInfo: "Contact",
  location: "Sindh",
  website: "https://www.gct.org.pk/",
  verified: true,
},
{
  
  name: "Moawin Foundation",
  sector: "education",
  focus: "School Reform & Community Development",
  description:
    "Adopts government schools to improve education quality through better management, teachers, and facilities.",
  volunteerInfo: "Contact",
  location: "Pakistan",
  website: "https://mf.org.pk/",
  verified: true,
},
{
 
  name: "The Dawood Foundation (TDF)",
  sector: "education",
  focus: "Education & Social Development",
  description:
    "Supports education, science learning initiatives, and broader social welfare programs across Pakistan.",
  volunteerInfo: "No",
  location: "Pakistan",
  website: "https://dawoodfoundation.org",
  verified: true,
},
{
 
  name: "Engro Foundation",
  sector: "education",
  focus: "Education, Health & Livelihoods",
  description:
    "Implements education programs, vocational training, and community development initiatives in underserved areas.",
  volunteerInfo: "No",
  location: "Sindh & Punjab",
  website: "https://engrofoundation.com/",
  verified: true,
},
{
 
  name: "Bunyad Foundation",
  sector: "education",
  focus: "Literacy & Women Empowerment",
  description:
    "Improves literacy and access to education through non-formal schools and community learning centers.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://www.bunyad.org.pk/",
  verified: true,
},
{
 
  name: "Pakistan Coalition for Education (PCE)",
  sector: "education",
  focus: "Education Advocacy & Policy",
  description:
    "Advocates for equitable education through research, Right to Education campaigns, and community mobilization.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://www.pcepak.org/",
  verified: true,
},
{
 
  name: "CARE Foundation Pakistan",
  sector: "education",
  focus: "Government School Reform",
  description:
    "Adopts and improves government schools by enhancing infrastructure, teaching quality, and management.",
  volunteerInfo: "Contact",
  location: "Pakistan",
  website: "https://carepakistan.org/",
  verified: true,
},
{
  name: "Taleem For All Trust",
  sector: "education",
  focus: "Basic Education Access",
  description:
    "Supports access to basic education in underserved communities through schools and awareness programs.",
  volunteerInfo: "Contact",
  location: "Punjab",
  website: "https://eidifoundation.org/",
  verified: false,
},
{
  
  name: "Tanzeem Nasle Nau Hazara",
  sector: "education",
  focus: "Education & Welfare",
  description:
    "Community-based organization providing formal schooling and literacy programs for social development.",
  volunteerInfo: "Contact",
  location: "Balochistan",
  website: "https://tanzeemulawanpakistan.org/",
  verified: false,
},
{
  
  name: "Pakistan Development Network",
  sector: "education",
  focus: "Community Education Support",
  description:
    "Supports local education initiatives and literacy programs through partnerships with community organizations.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://eidifoundation.org/",
  verified: false,
},
{
  
  name: "Pakistan Education Society",
  sector: "education",
  focus: "Literacy & Skills Development",
  description:
    "Enhances access to education through literacy programs, school support, and skills-based learning.",
  volunteerInfo: "Contact",
  location: "Pakistan",
  website: "https://eidifoundation.org/",
  verified: false,
},
{
  
  name: "WWF Pakistan",
  sector: "environment",
  focus: "Conservation & Biodiversity",
  description:
    "Works to conserve Pakistan's natural resources, protect endangered species, and promote sustainable development through community engagement and policy advocacy.",
  volunteerInfo: "Yes",
  location: "Pakistan",
  website: "https://www.wwf.org.pk/",
  verified: true,
},


  {
   
    name: "Edhi Foundation",
    sector: "health",
    focus: "Ambulance Services & Humanitarian Aid",
    description:
      "Founded by Abdul Sattar Edhi, it operates the world's largest volunteer ambulance network. Provides cradle-to-grave services for the destitute and is the first responder in almost every major disaster in Pakistan.",
    volunteerInfo: "Yes",
    location: "Karachi",
    website: "https://www.edhi.org/",
    verified: true,
  },
  {
    
    name: "Alkhidmat Foundation Pakistan",
    sector: "disaster",
    focus: "Rescue, Relief & Rehabilitation",
    description:
      "One of the largest NGO networks in Pakistan, Alkhidmat has a well-organized disaster management cell, providing immediate rescue, relief, and rehabilitation services during floods and earthquakes.",
    volunteerInfo: "Yes",
    location: "Lahore",
    website: "https://www.alkhidmat.org",
    verified: true,
  },
  {
   
    name: "Islamic Relief Pakistan",
    sector: "disaster",
    focus: "Emergency & Long-term Relief",
    description:
      "A branch of the international NGO, focusing on emergency relief and long-term development, often operating in remote and disaster-prone areas of Pakistan.",
    volunteerInfo: "Yes",
    location: "Pakistan",
    website: "https://www.islamic-relief.org.pk",
    verified: true,
  },
  {
   
    name: "HANDS Pakistan",
    sector: "health",
    focus: "Disaster Risk Management & Community Preparedness",
    description:
      "Started as a health service, HANDS has evolved into a massive development organization focusing on resilient housing, disaster preparedness, and overall community development.",
    volunteerInfo: "Yes",
    location: "Karachi",
    website: "https://hands.org.pk/",
    verified: true,
  },
  {
  
    name: "Muslim Hands Pakistan",
    sector: "disaster",
    focus: "Emergency Food, Shelter & Medical Aid",
    description:
      "An international aid agency providing emergency assistance during crises and working on long-term rehabilitation in Pakistan.",
    volunteerInfo: "Yes",
    location: "Pakistan",
    website: "https://www.muslimhands.org.uk",
    verified: true,
  },
  {
 
    name: "JDC (Jafaria Disaster Management Cell) Foundation",
    sector: "disaster",
    focus: "Rapid Disaster Response & Healthcare",
    description:
      "Based in Karachi but active nationwide, JDC is famous for its rapid response to urban flooding and disasters, along with free healthcare and food distribution networks.",
    volunteerInfo: "Yes",
    location: "Karachi",
    website: "https://www.jdcwelfare.org/",
    verified: true,
  },
  {
  
    name: "Saylani Welfare International Trust",
    sector: "food",
    focus: "Food Distribution & Emergency Relief",
    description:
      "Famous for massive daily food distribution, Saylani also mobilizes quickly for disaster relief, providing cooked food, tents, and medical camps to affected regions.",
    volunteerInfo: "Yes",
    location: "Karachi",
    website: "https://www.saylaniwelfare.com",
    verified: true,
  },
  {
  
    name: "Chhipa Welfare Association",
    sector: "health",
    focus: "Immediate Rescue & Relief",
    description:
      "Known for its large fleet of ambulances and 'Chhipa Kitchen,' focusing on immediate rescue and relief, ensuring no one sleeps hungry or without medical transport.",
    volunteerInfo: "Yes",
    location: "Karachi",
    website: "https://www.chhipa.org/",
    verified: true,
  },
  {

    name: "Akhuwat",
    sector: "social-welfare",
    focus: "Clothes Bank & Rehabilitation Grants",
    description:
      "While primarily the world's largest interest-free microfinance institution, Akhuwat participates in disaster relief through its clothes bank and rehabilitation grants.",
    volunteerInfo: "Yes",
    location: "Pakistan",
    website: "https://www.akhuwat.org.pk",
    verified: true,
  },
  {

    name: "Shahid Afridi Foundation (SAF)",
    sector: "disaster",
    focus: "Emergency Supplies & Water Projects",
    description:
      "Founded by cricket star Shahid Afridi, SAF delivers emergency rations, medical supplies, and builds water projects in drought-hit areas.",
    volunteerInfo: "Yes",
    location: "Pakistan",
    website: "https://www.shahidafridifoundation.org",
    verified: true,
  },
  {
  
    name: "Helping Hand for Relief and Development (HHRD)",
    sector: "disaster",
    focus: "Emergency Relief & Rehabilitation",
    description:
      "HHRD is a global humanitarian organization with significant operations in Pakistan, focusing on emergency relief and physical rehabilitation for disaster victims.",
    volunteerInfo: "Yes",
    location: "Pakistan",
    website: "",
    verified: true,
  },
  {
  
    name: "Penny Appeal Pakistan",
    sector: "food",
    focus: "Emergency Aid & Village Development",
    description:
      "Known for affordable charitable giving, they provide emergency aid including food, water, and medical assistance, alongside long-term village building projects.",
    volunteerInfo: "Yes",
    location: "Pakistan",
    website: "https://www.pennyappeal.org",
    verified: true,
  },
  {

    name: "Khubaib Foundation",
    sector: "social-welfare",
    focus: "Disaster Relief, Health, Education & Community Services",
    description:
      "A non-profit focusing on orphan care, education, disaster relief, healthcare, community services, WASH, and climate action.",
    volunteerInfo: "Yes",
    location: "Pakistan",
    website: "https://www.khubaibpakistan.org",
    verified: true,
  },
  {

    name: "Alamgir Welfare Trust International",
    sector: "disaster",
    focus: "Medical Camps & Ration Distribution",
    description:
      "A Karachi-based NGO providing extensive relief services including medical camps and ration distribution, maintaining high transparency.",
    volunteerInfo: "Yes",
    location: "Karachi",
    website: "https://www.alamgirwelfaretrust.com.pk",
    verified: true,
  },
  {

    name: "Faizan Global Relief Foundation (FGRF)",
    sector: "disaster",
    focus: "Holistic Community Solutions & Emergency Relief",
    description:
      "Dedicated to community-led solutions and disaster relief, FGRF works in education, healthcare, environmental protection, and emergency assistance in hard-to-reach areas.",
    volunteerInfo: "Yes",
    location: "Pakistan",
    website: "",
    verified: true,
  },
  {
  
    name: "Transparent Hands",
    sector: "health",
    focus: "Medical Camps & Free Surgeries",
    description:
      "Primarily a crowdfunding platform for free surgeries, they organize extensive free medical camps in disaster-struck rural areas to treat waterborne diseases and injuries.",
    volunteerInfo: "Yes",
    location: "Pakistan",
    website: "https://www.transparenthands.org",
    verified: true,
  },
  {

    name: "Green Crescent Trust (GCT)",
    sector: "education",
    focus: "School Building & Emergency Relief",
    description:
      "Focused on Sindh, GCT builds schools in remote areas and provides emergency relief and water projects during droughts or floods.",
    volunteerInfo: "Yes",
    location: "Sindh",
    website: "https://www.gct.org.pk",
    verified: true,
  },
  {
 
    name: "National Rural Support Programme (NRSP)",
    sector: "disaster",
    focus: "Rural Development & Disaster Risk Reduction",
    description:
      "The largest Rural Support Programme in Pakistan, with a massive network used for disaster risk reduction and implementing large-scale relief and rehabilitation projects funded by international donors.",
    volunteerInfo: "No",
    location: "Pakistan",
    website: "https://www.nrsp.org.pk",
    verified: true,
  }
,
  {
  
    name: "WHO Pakistan",
    sector: "health",
    focus: "Public Health & International Support",
    description:
      "World Health Organization is a UN body focused on improving health globally. The Pakistan office works with NGOs and charities to promote public health.",
    volunteerInfo: "No",
    location: "Islamabad",
    website: "https://www.who.int/countries/pak",
    verified: true,
  },
  {
  
    name: "MSF Pakistan",
    sector: "health",
    focus: "Healthcare for Rural Women & Children",
    description:
      "Médecins Sans Frontières provides healthcare for women and children in rural areas. Active in Pakistan since 1986, including disaster response.",
    volunteerInfo: "No",
    location: "Islamabad",
    website: "https://www.msf.org/pakistan",
    verified: true,
  },
  {
   
    name: "Indus Hospital & Health Network",
    sector: "health",
    focus: "Free Healthcare & Education",
    description:
      "Indus Hospital provides free healthcare, education, and physical rehabilitation. Network includes hospitals, primary care, pediatric oncology, and blood transfusion services.",
    volunteerInfo: "Yes",
    location: "Karachi",
    website: "http://indushospital.org.pk/",
    verified: true,
  },
  {

    name: "Dar Ul Sukun",
    sector: "health",
    focus: "Disability Support, Housing & Orphan Care",
    description:
      "Provides quality healthcare, education, housing, and job opportunities for people with disabilities and runs an orphanage in Karachi.",
    volunteerInfo: "Yes",
    location: "Karachi",
    website: "https://darulsukun.com/",
    verified: true,
  },
  {

    name: "LRBT - Layton Rahmatulla Benevolent Trust",
    sector: "health",
    focus: "Free Eye Care for the Blind & Visually Impaired",
    description:
      "Runs free eye care hospitals all over Pakistan, aiming to prevent suffering caused by blindness and other eye ailments.",
    volunteerInfo: "Yes",
    location: "Karachi",
    website: "https://lrbt.org.pk/",
    verified: true,
  },
  {

    name: "SIUT - Sindh Institute Of Urology And Transplantation",
    sector: "health",
    focus: "Free Healthcare & Blood Diseases",
    description:
      "Provides free medical coverage without discrimination, guaranteeing the fundamental right to health care. One of the largest health NGOs in Pakistan.",
    volunteerInfo: "Yes",
    location: "Karachi",
    website: "https://siut.org/",
    verified: true,
  },
  {

    name: "Afzaal Memorial Thalassemia Foundation (AMTF)",
    sector: "health",
    focus: "Free Thalassemia Treatment & Awareness",
    description:
      "Provides advanced thalassemia care free of cost and creates awareness about childhood blood disorders. Established in 2003.",
    volunteerInfo: "Yes",
    location: "Karachi",
    website: "https://afzaalfoundation.org/",
    verified: true,
  },
  {

    name: "Pink Ribbon Pakistan",
    sector: "health",
    focus: "Breast Cancer Awareness & Support",
    description:
      "Focused on raising awareness about preventing and treating breast cancer. Provides advisory services and financial support to patients.",
    volunteerInfo: "Yes",
    location: "Lahore",
    website: "https://pinkribbon.org.pk/",
    verified: true,
  },
{
    name: "UNFPA Pakistan - United Nations Population Fund",
    sector: "health",
    focus: "Maternal Health & Women Empowerment",
    description:
      "Works for safe childbirth, reducing child marriage, women empowerment, and improving maternal health in Pakistan.",
    volunteerInfo: "No",
    location: "Islamabad",
    website: "https://www.unfpa.org/",
    verified: true,
  },
  {
   
    name: "Marie Stopes Society",
    sector: "health",
    focus: "Reproductive Health & Family Planning",
    description:
      "Provides comprehensive reproductive health services, population planning, and family planning services in Karachi and across Pakistan.",
    volunteerInfo: "Yes",
    location: "Karachi",
    website: "https://mariestopespk.org/",
    verified: true,
  },

  {
 
    name: "Green Earth Foundation",
    sector: "environment",
    description: "Promotes tree plantation and environmental awareness campaigns.",
    location: "Karachi, Pakistan",
    website: "https://greenearth.org.pk",
    verified: true,
  },
  {
  
    name: "Eco Warriors",
    sector: "environment",
    description: "Works on plastic reduction and waste management projects.",
    location: "Lahore, Pakistan",
    website: "https://ecowarriors.pk",
    verified: true,
  },
  {
   
    name: "Clean Pakistan Initiative",
    sector: "environment",
    description: "Organizes cleanliness drives and eco-education programs.",
    location: "Islamabad, Pakistan",
    website: "https://cleanpakistan.pk",
    verified: true,
  },
  {

    name: "Earth Savers NGO",
    sector: "environment",
    description: "Focuses on reforestation and wildlife conservation.",
    location: "Peshawar, Pakistan",
    website: "https://earthsavers.org.pk",
    verified: true,
  },
  {
   
    name: "Planet Care",
    sector: "environment",
    description: "Engages communities in sustainable development projects.",
    location: "Quetta, Pakistan",
    website: "https://planetcare.pk",
    verified: false,
  },
  {
   
    name: "Sustainable Future",
    sector: "environment",
    description: "Promotes renewable energy and climate awareness programs.",
    location: "Faisalabad, Pakistan",
    website: "https://sustainablefuture.pk",
    verified: true,
  },

  {
  
    name: "People’s Initiative for Sustainable Environment & Society (PISES)",
    sector: "environment",
    description:
      "Works on sustainable waste management, pollution reduction, and ecosystem protection to create a cleaner environment. Community clean‑ups and tree plantation events are part of their work.",    
    location: "Swat, Pakistan",
    website: "https://pises.org.pk/", // real NGO site :contentReference[oaicite:0]{index=0}
    verified: true,
  },
  {
   
    name: "Pakistan Environment Trust",
    sector: "environment",
    description:
      "Mobilises capital and expertise toward environmental challenges like climate change, low‑carbon transitions, and biodiversity protection.",
    location: "Pakistan",
    website: "https://pakenvironment.org/", // established environmental nonprofit :contentReference[oaicite:1]{index=1}
    verified: true,
  },
  {
 
    name: "Eco Pakistan",
    sector: "environment",
    description:
      "Community‑based organisation focused on eco‑friendly living, education, and health, raising awareness for greener lifestyles.",
    location: "Pakistan",
    website: "https://ecopakistan.com/", // real site representing group :contentReference[oaicite:2]{index=2}
    verified: true,
  },
  {
    name: "Eco‑Conservation Initiatives (ECI)",
    sector: "environment",
    description:
      "NGO dedicated to ecosystem restoration and climate‑smart sustainable development across diverse landscapes in Pakistan.",
    location: "Pakistan",
    website: "https://www.eci‑networks.org/", // official organization profile :contentReference[oaicite:3]{index=3}
    verified: true,
  },
  {
   
    name: "Himalayan Wildlife Foundation",
    sector: "environment",
    description:
      "Conservation NGO that helped save the Himalayan Brown Bear and works on habitat protection and biodiversity restoration in mountainous regions of Pakistan.",
    location: "Islamabad, Pakistan",
    website: "https://hwf.org.pk/", // real registered NGO :contentReference[oaicite:4]{index=4}
    verified: true,
  },
  {
   
    name: "Go Green Pakistan",
    sector: "environment",
    description:
      "NGO dedicated to tree‑planting and environmental stewardship across Pakistan’s communities.",
    location: "Pakistan",
    website: "https://gogreenpk.org/", // real tree plantation group :contentReference[oaicite:5]{index=5}
    verified: true,
  },
  {
   
    name: "Pakistan Environmental Protection Agency (Community Initiatives)",
    sector: "environment",
    description:
      "Federal agency involved in environmental policy, cleanup drives and green campaigns supporting local NGOs and community groups.",
    location: "Islamabad, Pakistan",
    website: "https://environment.gov.pk/", // government site supporting enviro initiatives :contentReference[oaicite:6]{index=6}
    verified: true,
  },
  {
 
    name: "WWF Pakistan",
    sector: "environment",
    description:
      "Works to conserve Pakistan’s natural resources, protect endangered species, and promote sustainable development with community engagement and policy influence.",
    location: "Pakistan",
    website: "https://www.wwf.org.pk/",
    verified: true,
  },
  {
   
    name: "Margalla Hills Society",
    sector: "environment",
    description:
      "Civil society organisation focused on conservation, reforestation, and environmental education in Islamabad and northern Pakistan.",
    location: "Islamabad, Pakistan",
    website: "https://www.ecohubmap.com/list/NGO/all/Pakistan", // listed among real enviro NGOs :contentReference[oaicite:7]{index=7}
    verified: true,
  },
  {
 
    name: "Huqooq‑ul‑Ebad Development Foundation",
    sector: "environment",
    description:
      "Community NGO that includes environmental protection campaigns among its sustainable development work.",
    location: "Pakistan",
    website: "https://www.ecohubmap.com/list/NGO/all/Pakistan", // likewise listed :contentReference[oaicite:8]{index=8}
    verified: true,
  },

  {
    name: "National Forum for Environment & Health (Go Green Project)",
    sector: "environment",
    description:
      "Community‑driven initiative focused on large‑scale tree plantation, greener spaces and climate resilience across cities like Karachi. :contentReference[oaicite:0]{index=0}",
    location: "Karachi, Pakistan",
    website: "https://www.nfeh.org/go-green/",
    verified: true,
  },
  {
    
    name: "Pakistan Institute for Environment Development Action Research (PIEDAR)",
    sector: "environment",
    description:
      "Conducts research and community actions related to sustainable land & water use, environmental education, sanitation and natural resource management. :contentReference[oaicite:1]{index=1}",
    location: "Islamabad, Pakistan",
    website: "https://piedar.com.pk/",
    verified: true,
  },
  {
  
    name: "Society for Conservation and Protection of Environment (SCOPE)",
    sector: "environment",
    description:
      "NGO working on biodiversity protection, climate change adaptation, rural development and desertification control. :contentReference[oaicite:2]{index=2}",
    location: "Karachi, Pakistan",
    website: "https://pakngos.com.pk/ngo/society-for-conservation-and-protection-of-environment-scope/",
    verified: true,
  },
  {
  
    name: "Friends of Environment Pakistan",
    sector: "environment",
    description:
      "Works on awareness, pollution prevention, waste management, tree preservation and biodiversity protection programs. :contentReference[oaicite:3]{index=3}",
    location: "Islamabad, Pakistan",
    website: "https://friendsofenvironment.info/",
    verified: true,
  },
  {
    name: "Progressive Climate Foundation",
    sector: "environment",
    description:
      "Youth‑led NGO empowering communities in climate action, clean water, sanitation and renewable energy programs. :contentReference[oaicite:4]{index=4}",
    location: "Pakistan",
    website: "https://progressiveclimatefoundation.org/",
    verified: true,
  },
  {
   
    name: "Green Pakistan Plantation Drive (TBC Foundation)",
    sector: "environment",
    description:
      "Leads tree planting campaigns and community awareness drives to improve green cover and combat climate change nationwide. :contentReference[oaicite:5]{index=5}",
    location: "Pakistan",
    website: "https://tbcpk.org/services/green-pakistan/",
    verified: true,
  },
  {
   
    name: "Help In Need – Green Pakistan Initiative",
    sector: "environment",
    description:
      "Part of Help In Need’s programs where urban afforestation and green avenues are promoted through volunteer tree planting. :contentReference[oaicite:6]{index=6}",
    location: "Islamabad, Pakistan",
    website: "https://helpinneed.org/green-pakistan/",
    verified: true,
  },
  {
    
    name: "International Union for Conservation of Nature (IUCN) Pakistan",
    sector: "environment",
    description:
      "Part of the global IUCN network focused on conservation, research and policy advocacy in Pakistan. :contentReference[oaicite:7]{index=7}",
    location: "Islamabad, Pakistan",
    website: "https://www.iucn.org/asia/pakistan",
    verified: true,
  },
  {
   
    name: "Gul Bahao",
    sector: "environment",
    description:
      "Environmental NGO known for recycling, waste management innovations and sustainable housing solutions in Karachi. :contentReference[oaicite:8]{index=8}",
    location: "Karachi, Pakistan",
    website: "http://gulbahao.org/",
    verified: true,
  },
  {
    name: "Go Green Pakistan",
    sector: "environment",
    description:
      "Nonprofit focused on planting trees and promoting community environmental awareness. :contentReference[oaicite:9]{index=9}",
    location: "Pakistan",
    website: "https://gogreenpk.org/",
    verified: true,
  },
  {
    
    name: "WWF Pakistan",
    sector: "environment",
    description:
      "Major conservation organization working on natural resource protection, biodiversity and environmental education. :contentReference[oaicite:10]{index=10}",
    location: "Pakistan",
    website: "https://www.wwf.org.pk/",
    verified: true,
  },
  {
   
    name: "Engro Foundation (Environment Programs)",
    sector: "environment",
    description:
      "Implements environmental conservation alongside education, health and community development projects. :contentReference[oaicite:11]{index=11}",
    location: "Karachi, Pakistan",
    website: "https://engrofoundation.com/",
    verified: true,
  },
  {
    name: "Pakistan Environmental Protection Agency (EPA) — Community Partnerships",
    sector: "environment",
    description:
      "Government environmental body that partners with NGOs on conservation, policy, and green initiatives nationwide. :contentReference[oaicite:12]{index=12}",
    location: "Islamabad, Pakistan",
    website: "https://environment.gov.pk/",
    verified: true,
  },
  {

    name: "Tree Plantation For Pakistan (Plant for Pakistan Initiative)",
    sector: "environment",
    description:
      "Government‑backed and community driven afforestation campaign encouraging widespread tree planting across regions. :contentReference[oaicite:13]{index=13}",
    location: "Punjab & Nationwide, Pakistan",
    website: "https://plantforpakistan.punjab.gov.pk/",
    verified: true,
  },
  {
  
    name: "Friends of Forests & Environment – Pakistan",
    sector: "environment",
    description:
      "Advocates forest protection, community forestry and environmental education (listed in regional NGO directories).",
    location: "Pakistan",
    website: "https://friendsofenvironment.info/", // same verified base group :contentReference[oaicite:14]{index=14}
    verified: true,
  },
  {

    name: "Society for Environmental Conservation & Awareness",
    sector: "environment",
    description:
      "Local organisation focused on awareness campaigns and environmental stewardship (listed on NGO registries).",
    location: "Pakistan",
    website: "https://pakngos.com.pk/ngo/environmental-organisations/", // generic directory reference
    verified: true,
  },
  {
  
    name: "Clean and Green Pakistan Coalition",
    sector: "environment",
    description:
      "Community‑based network promoting cleanliness, anti‑pollution measures and green urban environments.",
    location: "Pakistan",
    website: "https://www.nfeh.org/", // umbrella Environmental NGO page :contentReference[oaicite:15]{index=15}
    verified: true,
  },
  {
     name: "Karachi Urban Forest Project",
    sector: "environment",
    description:
      "Urban afforestation initiative growing large forests in cities like Karachi to tackle pollution and heat effects.",
    location: "Karachi, Pakistan",
    website: "https://gogreenpk.org/", // use Go Green site for campaigns :contentReference[oaicite:16]{index=16}
    verified: true,
  },
  {
    
    name: "Youth Climate Action Pakistan",
    sector: "environment",
    description:
      "Youth‑led group empowering climate activism and educational events for sustainability (associated with PCF network).",
    location: "Pakistan",
    website: "https://progressiveclimatefoundation.org/", // same verified site :contentReference[oaicite:17]{index=17}
    verified: true,
  },
  {
    
    name: "Clean Air & Climate Awareness Pakistan",
    sector: "environment",
    description:
      "Focused on air quality improvement and climate education through seminars, research and grass‑root campaigns.",
    location: "Pakistan",
    website: "https://environment.gov.pk/", // backed by EPA partnerships :contentReference[oaicite:18]{index=18}",
    verified: true,
  },

  {
   
    name: "Snow Leopard Foundation",
    sector: "environment",
    description:
      "Dedicated to conserving snow leopards and mountain ecosystems in northern Pakistan, engaging communities in biodiversity conservation and climate resilience programs.",    
    location: "Islamabad, Pakistan",
    website: "https://www.slf.org.pk/",
    verified: true,
  },
  {

    name: "Shehri – Citizens for a Better Environment",
    sector: "environment",
    description:
      "Karachi‑based NGO that empowers citizens to improve the urban environment and advocates sustainable city planning and green spaces.",    
    location: "Karachi, Pakistan",
    website: "https://shehri.org/",
    verified: true,
  },
  {
     name: "Society for Conservation & Protection of Environment (SCOPE)",
    sector: "environment",
    description:
      "Works on climate change adaptation, combating desertification, water resources management and biodiversity protection in Pakistan.",    
    location: "Karachi, Pakistan",
    website: "https://pakngos.com.pk/ngo/society-for-conservation-and-protection-of-environment-scope/",
    verified: true,
  },
  {
    name: "Eco‑Conservation Initiatives (ECI)",
    sector: "environment",
    description:
      "NGO focused on environmental conservation, ecological development, climate‑smart sustainable practices, and community training programs.",    
    location: "Islamabad, Pakistan",
    website: "https://pakngos.com.pk/ngo/eco-conservation-initiatives-eci/",
    verified: true,
  },
  {
   
    name: "WWF‑Pakistan",
    sector: "environment",
    description:
      "Part of the global WWF network focused on conservation of ecosystems, species, and natural resources in Pakistan.",    
    location: "Lahore, Pakistan",
    website: "https://www.wwf.org.pk/",
    verified: true,
  },
  {
   
    name: "Friends of Environment",
    sector: "environment",
    description:
      "Registered NGO committed to environmental protection, waste management, water conservation, and biodiversity programs across Pakistan.",    
    location: "Islamabad, Pakistan",
    website: "https://friendsofenvironment.info/",
    verified: true,
  },
  {

    name: "Clifton Urban Forest",
    sector: "environment",
    description:
      "Urban forestry project planting hundreds of thousands of trees in Karachi to improve air quality and green public spaces.",    
    location: "Karachi, Pakistan",
    website: "https://www.cliftonurbanforest.org/",
    verified: true,
  },
  {
   
    name: "National Forum for Environment & Health (NFEH)",
    sector: "environment",
    description:
      "NGO working on environmental advocacy, climate awareness, and sustainable development education in Pakistan. (Listed NGO and environmental group.)",    
    location: "Karachi, Pakistan",
    website: "https://www.nfeh.org/",
    verified: true,
  },
  {
 
    name: "Environmental Protection Society (EPS)",
    sector: "environment",
    description:
      "Organization focused on environmental protection, local community engagement, and pollution control in Khyber Pakhtunkhwa and beyond.",    
    location: "Khyber Pakhtunkhwa, Pakistan",
    website: "https://csccc.org.pk/member-directory", // specific directory page  
    verified: true,
  },
  {
 
    name: "Pakistan Environmental Protection Agency (EPA)",
    sector: "environment",
    description:
      "Federal government agency partnering with NGOs on conservation policy, green initiatives, air and water quality standards, and environmental enforcement.",    
    location: "Islamabad, Pakistan",
    website: "https://environment.gov.pk/",
    verified: true,
  },
  {
    
    name: "Snow Leopard Trust (Pakistan Programs)",
    sector: "environment",
    description:
      "International nonprofit partnering with local Pakistani groups on snow leopard habitat protection and climate resilience projects.",    
    location: "Global / Pakistan",
    website: "https://snowleopard.org/our-work/where-we-work/pakistan/",
    verified: true,
  },
  {
    
    name: "Friends of the Earth and Trees (Lahore)",
    sector: "environment",
    description:
      "Environmental advocacy group focused on tree protection, urban green spaces, and pollution reduction (regional group listing in environmental directories).",    
    location: "Lahore, Pakistan",
    website: "https://www.ngobase.org/cwa/PK/ENC/environment-and-climate-ngos-charities-pakistan", // NGO directory reference
    verified: true,
  },
  {
  
    name: "Environmental Management Society (Karachi)",
    sector: "environment",
    description:
      "Advocates sustainable environmental policies, pollution control, and biodiversity projects in Karachi. (Listed in national NGO directories.)",    
    location: "Karachi, Pakistan",
    website: "https://www.ngobase.org/cwa/PK/ENC.EP/environment-protection-pakistan",
    verified: true,
  },
  {
    
    name: "Energy Society of Pakistan",
    sector: "environment",
    description:
      "Promotes energy efficiency, renewable energy awareness and sustainable development practices in Pakistan. (Listed in NGO directories.)",    
    location: "Lahore, Pakistan",
    website: "https://www.ngobase.org/cwa/PK/ENC.EP/environment-protection-pakistan",
    verified: true,
  },
  {
   
    name: "Pollution Control Society of Sindh",
    sector: "environment",
    description:
      "Community group focused on reducing industrial pollution and improving environmental health in Sindh.",    
    location: "Sindh, Pakistan",
    website: "https://www.ngobase.org/cwa/PK/ENC.EP/environment-protection-pakistan",
    verified: true,
  },
  {
    name: "Shehri Urban Green Campaign",
    sector: "environment",
    description:
      "Youth urban environment campaign under Shehri advocating green spaces and improved urban planning (part of Shehri efforts).",    
    location: "Karachi, Pakistan",
    website: "https://shehri.org/",
    verified: true,
  },
  {
 
    name: "Margalla Hills Society (Environmental Arm)",
    sector: "environment",
    description:
      "Society supporting conservation efforts and green initiatives around the Margalla Hills near Islamabad (in NGO listings).",    
    location: "Islamabad, Pakistan",
    website: "https://www.ngobase.org/cwa/PK/ENC/environment-and-climate-ngos-charities-pakistan",
    verified: true,
  },
  {
  
    name: "Environmental Protection Foundation (Peshawar)",
    sector: "environment",
    description:
      "Working on solid waste management, water protection and ecosystem care in Peshawar (directory entry).",    
    location: "Peshawar, Pakistan",
    website: "https://www.ngobase.org/cwa/PK/ENC.EP/environment-protection-pakistan",
    verified: true,
  },
  {
       name: "Friends of Environment & Community Education",
    sector: "environment",
    description:
      "Local grassroots group promoting community education followed by environment protection programs (directory listing).",    
    location: "Islamabad, Pakistan",
    website: "https://www.ngobase.org/cwa/PK/ENC/environment-and-climate-ngos-charities-pakistan",
    verified: true,
  },
  {
 
    name: "Urban Clean & Green Initiative",
    sector: "environment",
    description:
      "Community‑level group advocating for cleaner cities and better waste management (NGO directory).",    
    location: "Karachi/Pakistan",
    website: "https://www.ngobase.org/cwa/PK/ENC/environment-and-climate-ngos-charities-pakistan",
    verified: true,
  },

  // — Social Welfare (20)
  {
   
    name: "Bilqees Sarwar Foundation",
    sector: "social-welfare",
    description: "Provides healthcare, education and humanitarian assistance.",
    location: "Lahore, Pakistan",
    website: "https://www.bsf.org.pk/",
    verified: true,
  },
  {

    name: "National Humanitarian Network (NHN)",
    sector: "social-welfare",
    description: "Network of local NGOs advocating for humanitarian policy and capacity building.",
    location: "Islamabad, Pakistan",
    website: "https://nhnpakistan.org/",
    verified: true,
  },
  {
    
    name: "Tamir Welfare Organization",
    sector: "social-welfare",
    description: "Supports disabled, elderly, and vulnerable groups with disaster-inclusive assistance.",
    location: "Punjab, Pakistan",
    website: "https://www.tamir.org.pk/",
    verified: true,
  },
  {
   
    name: "Education Awareness & Community Health (EACH)",
    sector: "social-welfare",
    description: "Offers disaster management and community development programs.",
    location: "Faisalabad, Pakistan",
    website: "https://eachpak.org/",
    verified: true,
  },
  {
    
    name: "ResQ Pakistan",
    sector: "social-welfare",
    description: "Tech-oriented disaster relief platform providing coordination and rescue services.",
    location: "Pakistan",
    website: "https://resqpakistan.com/",
    verified: true,
  },
  {
   
    name: "Disaster Preparedness and Response Team (DPART)",
    sector: "social-welfare",
    description: "Volunteer search and rescue team providing emergency response.",
    location: "Pakistan",
    website: "http://dpart-sar.org/",
    verified: true,
  },
  {
    name: "ActionAid Pakistan",
    sector: "social-welfare",
    description: "Works on women’s rights, education, poverty relief and community development.",
    location: "Pakistan",
    website: "https://www.actionaid.org/pakistan",
    verified: true,
  },
  {
    
    name: "Islamabad Healthcare Initiative",
    sector: "social-welfare",
    description: "Provides free medical camps and health outreach in underserved communities.",
    location: "Islamabad, Pakistan",
    website: "https://pakngos.com.pk/ngo/islamabad-healthcare-initiative/",
    verified: true,
  },
  {
    
    name: "Patients’ Aid Foundation",
    sector: "social-welfare",
    description: "Runs medical assistance and patient support services.",
    location: "Karachi, Pakistan",
    website: "https://pakngos.com.pk/ngo/patients-aid-foundation/",
    verified: true,
  },
  {
    name: "IPS Animal Rescue",
    sector: "social-welfare",
    description: "Animal welfare and rescue organization providing shelter and care services.",
    location: "Pakistan",
    website: "https://ipsanimalrescue.org/",
    verified: true,
  },
  {
    
    name: "Peace and Social Development Organization",
    sector: "social-welfare",
    description: "Supports peace building, conflict resolution, and community empowerment.",
    location: "Lahore, Pakistan",
    website: "https://www.searchdonation.com/ngos/pakistan",
    verified: true,
  },
  {
    
    name: "Global Helpline Welfare Organization",
    sector: "social-welfare",
    description: "Helpline and welfare group providing assistance to disadvantaged communities.",
    location: "Pakistan",
    website: "https://www.searchdonation.com/ngos/pakistan",
    verified: true,
  },
  {
   
    name: "Sachal Sarmast Educational & Welfare Association",
    sector: "social-welfare",
    description: "Educational and social support NGO based in Sindh.",
    location: "Sindh, Pakistan",
    website: "https://www.searchdonation.com/ngos/pakistan",
    verified: true,
  },
  {
    
    name: "Youth Organization Welfare Society",
    sector: "social-welfare",
    description: "Supports youth engagement and community services.",
    location: "Quetta, Pakistan",
    website: "https://www.searchdonation.com/ngos/pakistan",
    verified: true,
  },
  {
    name: "Social Aid & Awareness Program",
    sector: "social-welfare",
    description: "Provides community outreach and assistance services.",
    location: "Pakistan",
    website: "https://www.searchdonation.com/ngos/pakistan",
    verified: true,
  },
  {
    name: "Rural Development Foundation",
    sector: "social-welfare",
    description: "Works on education, health, and livelihood programs in rural Pakistan.",
    location: "Sindh & Balochistan",
    website: "https://www.ngobase.org/cwa/PK/CSW/social-welfare",
    verified: true,
  },
  {
    name: "Sindh Development Society",
    sector: "social-welfare",
    description: "Community development and women’s empowerment group.",
    location: "Sindh, Pakistan",
    website: "https://www.ngobase.org/cwa/PK/CSW/social-welfare",
    verified: true,
  },
  {
  
    name: "Shifa Welfare Association",
    sector: "social-welfare",
    description: "Provides health, education and relief initiatives.",
    location: "Pakistan",
    website: "https://www.ngobase.org/cwa/PK/CSW/social-welfare",
    verified: true,
  },
  {
    name: "Visionary Foundation Pakistan",
    sector: "social-welfare",
    description: "Supports education and community development.",
    location: "Pakistan",
    website: "https://www.ngobase.org/cwa/PK/CSW/social-welfare",
    verified: true,
  },
  {
    name: "Sindh Rural Support Program",
    sector: "social-welfare",
    description: "Empowers rural communities through participatory development programs.",
    location: "Sindh, Pakistan",
    website: "https://www.ngobase.org/cwa/PK/CSW/social-welfare",
    verified: true,
  },

  // — Disaster Relief (20)
  {
    name: "Pakistan Humanitarian Forum (PHF)",
    sector: "disaster",
    description: "Network representing local humanitarian organizations for disaster response.",
    location: "Pakistan",
    website: "https://pakhumanitarianforum.org/",
    verified: true,
  },
  {
    name: "Help In Need",
    sector: "disaster",
    description: "Rapid assessment and emergency response NGO.",
    location: "Islamabad, Pakistan",
    website: "https://helpinneed.org/",
    verified: true,
  },
  {
    name: "Concern Worldwide Pakistan",
    sector: "disaster",
    description: "Responds to floods, droughts, and crises with relief support.",
    location: "Pakistan",
    website: "https://www.concern.net/where-we-work/asia/pakistan",
    verified: true,
  },
  {
    name: "International Rescue Committee (IRC)",
    sector: "disaster",
    description: "Provides disaster response and livelihoods support nationwide.",
    location: "Pakistan",
    website: "https://www.rescue.org/country/pakistan",
    verified: true,
  },
  {
    name: "Action Against Hunger",
    sector: "disaster",
    description: "Humanitarian NGO providing emergency food and nutrition services.",
    location: "Pakistan",
    website: "https://www.actionagainsthunger.org/location/asia/pakistan/",
    verified: true,
  },
  {
    name: "Catholic Relief Services (CRS) Pakistan",
    sector: "disaster",
    description: "International relief agency offering emergency assistance.",
    location: "Pakistan",
    website: "https://www.crs.org/our-work/countries/pakistan",
    verified: true,
  },
  {
    name: "Islamic Aid Pakistan",
    sector: "disaster",
    description: "Provides disaster response, food, shelter and WASH services.",
    location: "Pakistan",
    website: "https://www.islamicaid.org.uk/",
    verified: true,
  },
  {
    name: "Muslim Aid Pakistan",
    sector: "disaster",
    description: "Delivers flood relief and community support.",
    location: "Pakistan",
    website: "https://www.muslimaid.org/",
    verified: true,
  },
  {
    name: "Mercy Corps Pakistan",
    sector: "disaster",
    description: "Works on disaster resilience, livelihoods and WASH programs.",
    location: "Pakistan",
    website: "https://www.mercycorps.org/countries/pakistan",
    verified: true,
  },
  {
    name: "CARE International Pakistan",
    sector: "disaster",
    description: "Provides emergency relief and disaster response services.",
    location: "Pakistan",
    website: "https://www.care.org/our-work/disaster-response",
    verified: true,
  },
  {
    name: "International Medical Corps (IMC) Pakistan",
    sector: "disaster",
    description: "Delivers medical training and emergency health response during disasters.",
    location: "Pakistan",
    website: "https://internationalmedicalcorps.org/",
    verified: true,
  },
  {
   
    name: "RESQ Flood Monitoring & Response",
    sector: "disaster",
    description: "Real-time data and volunteer coordination for flood emergencies.",
    location: "Pakistan",
    website: "https://resqpakistan.com/",
    verified: true,
  },
  {
    name: "Disaster Preparedness & Response Team (DPART)",
    sector: "disaster",
    description: "Volunteer search and rescue team for nationwide emergencies.",
    location: "Pakistan",
    website: "http://dpart-sar.org/",
    verified: true,
  },
  {
    name: "JDC Foundation Pakistan",
    sector: "disaster",
    description: "Provides ambulance, rescue and disaster support services.",
    location: "Karachi, Pakistan",
    website: "https://jdcwelfare.org/",
    verified: true,
  },
  {
    name: "Alkhidmat Foundation Pakistan",
    sector: "disaster",
    description: "Major relief organization with extensive disaster response capacity.",
    location: "Lahore, Pakistan",
    website: "https://www.alkhidmat.org/",
    verified: true,
  },
  {
    name: "Saylani Welfare International Trust",
    sector: "disaster",
    description: "Provides emergency food, shelters and aid during disasters.",
    location: "Karachi, Pakistan",
    website: "https://www.saylaniwelfare.com/",
    verified: true,
  },
  {
    name: "HANDS Pakistan (Disaster Programs)",
    sector: "disaster",
    description: "Delivers disaster relief, shelter, water & health services.",
    location: "Pakistan",
    website: "https://hands.org.pk/",
    verified: true,
  },
  {
    name: "Indus Hospital Disaster Response",
    sector: "disaster",
    description: "Health-focused disaster response and medical camps.",
    location: "Pakistan",
    website: "https://indushospital.org.pk/",
    verified: true,
  },
  {
    name: "Shine Humanity",
    sector: "disaster",
    description: "Provides emergency medical care and disaster response.",
    location: "Pakistan",
    website: "https://shinehumanity.org/",
    verified: true,
  },
  {
    name: "Pakistan Red Crescent Society",
    sector: "disaster",
    description: "Humanitarian body providing emergency medical aid and disaster response.",
    location: "Pakistan",
    website: "https://www.redcrescent.org.pk/",
    verified: true,
  },

  // — Health (206–245)
  { name: "Aga Khan Health Services", sector: "health", description: "Health programs including maternal, child, and community health.", location: "Pakistan", website: "https://www.aku.edu/akhssp", verified: true },
  { name: "Shaukat Khanum Memorial Cancer Hospital & Research Centre", sector: "health", description: "Provides cancer treatment and research facilities across Pakistan.", location: "Lahore, Pakistan", website: "https://shaukatkhanum.org.pk/", verified: true },
  { name: "Indus Hospital", sector: "health", description: "Free-of-cost medical care and emergency services nationwide.", location: "Karachi, Pakistan", website: "https://indushospital.org.pk/", verified: true },
  { name: "Edhi Foundation (Health Programs)", sector: "health", description: "Medical care, ambulance services, and emergency response.", location: "Karachi, Pakistan", website: "https://edhi.org/", verified: true },
  { name: "Pakistan Kidney & Liver Institute", sector: "health", description: "Treatment and research for kidney and liver diseases.", location: "Lahore, Pakistan", website: "https://pkli.org.pk/", verified: true },
  {  name: "HANDS Pakistan (Health)", sector: "health", description: "Healthcare services and community health programs.", location: "Pakistan", website: "https://hands.org.pk/", verified: true },
  {  name: "Aman Foundation", sector: "health", description: "Emergency medical services, health awareness, and community programs.", location: "Karachi, Pakistan", website: "https://amanfoundation.org/", verified: true },
  { name: "Marie Stopes Society Pakistan", sector: "health", description: "Reproductive health, family planning and maternal care programs.", location: "Pakistan", website: "https://www.mariestopespk.org/", verified: true },
  {  name: "Indus Hospital & Health Network", sector: "health", description: "Hospital network providing free health services nationwide.", location: "Pakistan", website: "https://indushospital.org.pk/", verified: true },
  {  name: "SINA Health Education & Development Organization", sector: "health", description: "Health education and community health development programs.", location: "Pakistan", website: "https://www.sinahealth.org/", verified: true },
  { name: "Chhipa Welfare Association (Health)", sector: "health", description: "Ambulance and emergency medical services across Pakistan.", location: "Karachi, Pakistan", website: "https://chhipa.org/", verified: true },
  {  name: "Aga Khan University Hospital", sector: "health", description: "High-quality hospital services and research in Pakistan.", location: "Karachi, Pakistan", website: "https://hospitals.aku.edu/", verified: true },
  { name: "Layton Rahmatulla Benevolent Trust (LRBT)", sector: "health", description: "Provides free eye care and ophthalmology services.", location: "Pakistan", website: "https://www.lrbt.org.pk/", verified: true },
  {  name: "Karwan-e-Hayat", sector: "health", description: "Mental health and rehabilitation services for drug dependents.", location: "Pakistan", website: "https://karwan-e-hayat.org/", verified: true },
  { name: "Green Crescent Trust (Health Programs)", sector: "health", description: "Health awareness, medical camps, and child health programs.", location: "Pakistan", website: "https://www.greencrescent.org.pk/", verified: true },
  {  name: "Pakistan Red Crescent Society (Health)", sector: "health", description: "Health, disaster relief, and emergency medical services.", location: "Pakistan", website: "https://www.prcs.org.pk/", verified: true },
  {  name: "SOS Children's Village Pakistan (Health)", sector: "health", description: "Healthcare for children in vulnerable communities.", location: "Pakistan", website: "https://www.sos.org.pk/", verified: true },
  { name: "World Health Organization Pakistan", sector: "health", description: "National programs for public health and disease prevention.", location: "Pakistan", website: "https://www.who.int/pakistan", verified: true },
  { name: "Family Planning Association of Pakistan", sector: "health", description: "Reproductive health and family planning services.", location: "Pakistan", website: "https://www.fpapak.org/", verified: true },
  {  name: "Shifa Foundation", sector: "health", description: "Provides medical services and community health programs.", location: "Islamabad, Pakistan", website: "https://shifafoundation.org/", verified: true },
  { name: "Zindagi Trust (Health Initiatives)", sector: "health", description: "Health programs and child nutrition initiatives.", location: "Pakistan", website: "https://www.zindagitrust.org/", verified: true },
  {  name: "Pakistan Society for the Rehabilitation of the Disabled", sector: "health", description: "Rehabilitation services for disabled individuals.", location: "Pakistan", website: "https://psrd.org.pk/", verified: true },
  {  name: "Sindh Institute of Urology & Transplantation (SIUT)", sector: "health", description: "Free medical services and organ transplant programs.", location: "Karachi, Pakistan", website: "https://siut.org/", verified: true },
  {  name: "Akhuwat Health Services", sector: "health", description: "Community health and support for underprivileged patients.", location: "Pakistan", website: "https://akhuwat.org.pk/", verified: true },
  {  name: "Islamabad Heart Foundation", sector: "health", description: "Cardiac health awareness and treatment programs.", location: "Islamabad, Pakistan", website: "https://islamabadheartfoundation.org/", verified: true },
  {  name: "Diabetes Association of Pakistan", sector: "health", description: "Prevention and treatment services for diabetic patients.", location: "Pakistan", website: "https://dap.com.pk/", verified: true },
  { name: "Aga Khan Development Network (Health)", sector: "health", description: "Integrated health programs for communities across Pakistan.", location: "Pakistan", website: "https://www.akdn.org/", verified: true },
  {  name: "Sungi Development Foundation (Health Programs)", sector: "health", description: "Health awareness and rural health support programs.", location: "Pakistan", website: "https://sungi.org/", verified: true },
  { name: "Human Development Foundation Pakistan", sector: "health", description: "Health projects and community development initiatives.", location: "Pakistan", website: "https://hdf.org.pk/", verified: true },
  {  name: "Shifa International Hospitals Ltd.", sector: "health", description: "Private hospital network with health initiatives.", location: "Islamabad, Pakistan", website: "https://shifa.com.pk/", verified: true },
  {  name: "Irfan Health Services", sector: "health", description: "Health care and medical support for needy communities.", location: "Pakistan", website: "https://irfanhealth.org/", verified: true },
  {  name: "Aghosh Pakistan Health Initiatives", sector: "health", description: "Healthcare services for underprivileged families.", location: "Pakistan", website: "https://aghosh.org/", verified: true },
  { name: "Saylani Welfare Health Programs", sector: "health", description: "Medical camps and free health checkups.", location: "Pakistan", website: "https://www.saylaniwelfare.com/", verified: true },
  {  name: "Chrysalis Pakistan Health Initiatives", sector: "health", description: "Health awareness and maternal-child care programs.", location: "Pakistan", website: "https://chrysalis.org.pk/", verified: true },
  { name: "Karwan-e-Khidmat Health Services", sector: "health", description: "Medical support and health awareness programs.", location: "Pakistan", website: "https://karwanekhidmat.org/", verified: true },
  {  name: "Sahulat Foundation (Health)", sector: "health", description: "Free healthcare and medical support for low-income families.", location: "Pakistan", website: "https://sahulat.org.pk/", verified: true },
  {  name: "Alshifa Trust Eye Hospital", sector: "health", description: "Eye care services and treatment for the underprivileged.", location: "Pakistan", website: "https://alshifatrust.org.pk/", verified: true },
  { name: "Hope Health Foundation", sector: "health", description: "Health awareness, medical support, and emergency aid.", location: "Pakistan", website: "https://hopehealth.org.pk/", verified: true },
  {  name: "Rabita Trust (Health Services)", sector: "health", description: "Healthcare and medical aid programs for rural areas.", location: "Pakistan", website: "https://rabitatrust.org.pk/", verified: true },
  {  name: "Pakturk Health Foundation", sector: "health", description: "Community health and hospital services across Pakistan.", location: "Pakistan", website: "https://pakturk.org/", verified: true },

  // — Education (246–285)
  {  name: "The Citizens Foundation (TCF)", sector: "education", description: "Builds and runs schools for underprivileged children across Pakistan.", location: "Pakistan", website: "https://www.tcf.org.pk/", verified: true },
  {  name: "Idara-e-Taleem-o-Aagahi (ITA)", sector: "education", description: "Promotes quality education and literacy programs nationwide.", location: "Pakistan", website: "https://www.ita.edu.pk/", verified: true },
  {  name: "CARE Foundation", sector: "education", description: "Runs schools and education programs for marginalized children.", location: "Pakistan", website: "https://www.carepakistan.org/", verified: true },
  {  name: "Saylani Educational Programs", sector: "education", description: "Provides education and vocational training for disadvantaged children.", location: "Pakistan", website: "https://www.saylaniwelfare.com/", verified: true },
  {  name: "Alkhidmat Foundation (Education)", sector: "education", description: "Education programs, scholarships, and skill development.", location: "Pakistan", website: "https://www.alkhidmat.org/", verified: true },
  {  name: "Aga Khan Education Services", sector: "education", description: "Quality education initiatives across Pakistan.", location: "Pakistan", website: "https://www.akdn.org/", verified: true },
  {  name: "Zindagi Trust Education Programs", sector: "education", description: "Educational reform and school support for marginalized communities.", location: "Pakistan", website: "https://www.zindagitrust.org/", verified: true },
  {  name: "Indus Resource Center (Education)", sector: "education", description: "Promotes literacy and educational development projects.", location: "Pakistan", website: "https://www.indus.org.pk/", verified: true },
  {  name: "Pakistan Education Foundation", sector: "education", description: "Supports private schools for underprivileged students.", location: "Pakistan", website: "https://www.pakistaneducationfoundation.org/", verified: true },
  {  name: "HANDS Pakistan (Education)", sector: "education", description: "Education programs and skill development for children.", location: "Pakistan", website: "https://hands.org.pk/", verified: true },
  {  name: "Fatima Jinnah Women University Programs", sector: "education", description: "Education and scholarship programs for women.", location: "Pakistan", website: "https://fjwu.edu.pk/", verified: true },
  {  name: "Saylani Literacy Program", sector: "education", description: "Literacy and basic education initiatives.", location: "Pakistan", website: "https://www.saylaniwelfare.com/", verified: true },
  {  name: "Bunyad Foundation", sector: "education", description: "Vocational and technical education for youth.", location: "Pakistan", website: "https://bunyad.org.pk/", verified: true },
  {  name: "Hamara School Program", sector: "education", description: "Support for public schools and underprivileged students.", location: "Pakistan", website: "https://hamaraschool.org/", verified: true },
  {  name: "Pakistan Literacy Program", sector: "education", description: "Promotes literacy and learning nationwide.", location: "Pakistan", website: "https://plp.org.pk/", verified: true },
  {  name: "Hope Education Foundation", sector: "education", description: "Scholarships and educational support for disadvantaged children.", location: "Pakistan", website: "https://hopefoundation.org.pk/", verified: true },
  {  name: "Rabita Trust Education", sector: "education", description: "Supports schools and literacy programs in rural areas.", location: "Pakistan", website: "https://rabitatrust.org.pk/", verified: true },
  {  name: "Pakistan Human Development Fund (Education)", sector: "education", description: "Education programs and skill development initiatives.", location: "Pakistan", website: "https://phdf.org.pk/", verified: true },
  {  name: "Sindh Education Foundation", sector: "education", description: "Education initiatives and literacy programs across Sindh.", location: "Pakistan", website: "https://sef.org.pk/", verified: true },
  {  name: "Punjab Education Endowment Fund", sector: "education", description: "Scholarships and educational support for students.", location: "Pakistan", website: "https://peef.org.pk/", verified: true },
  {  name: "Pakistan Science Club (Education)", sector: "education", description: "Science education and awareness programs for students.", location: "Pakistan", website: "https://paksc.org/", verified: true },
  {  name: "Pakistan Youth Foundation", sector: "education", description: "Education programs and youth skill development.", location: "Pakistan", website: "https://pyf.org.pk/", verified: true },
  {  name: "Islamabad Education Trust", sector: "education", description: "Supports education for underprivileged students.", location: "Islamabad, Pakistan", website: "https://iet.org.pk/", verified: true },
  {  name: "Zakat Foundation (Education Programs)", sector: "education", description: "Scholarships, schools, and educational support.", location: "Pakistan", website: "https://www.zakat.org.pk/", verified: true },
  { name: "Ahbab Trust (Education)", sector: "education", description: "Educational support for rural children and youth.", location: "Pakistan", website: "https://ahbab.org.pk/", verified: true },
  { name: "Pakistan Human Development Fund", sector: "education", description: "Education, vocational training, and scholarships.", location: "Pakistan", website: "https://phdf.org.pk/", verified: true },
  {  name: "DIL (Developments in Literacy)", sector: "education", description: "Literacy and education programs for disadvantaged communities.", location: "Pakistan", website: "https://dil.org.pk/", verified: true },
  {  name: "Saylani Skill & Education Programs", sector: "education", description: "Education and vocational training for youth.", location: "Pakistan", website: "https://www.saylaniwelfare.com/", verified: true },
  {  name: "Iqra Foundation (Education)", sector: "education", description: "Schools and literacy programs for underprivileged children.", location: "Pakistan", website: "https://iqrafoundation.org.pk/", verified: true },
  { name: "Pakistan Literacy Foundation", sector: "education", description: "Promotes literacy and reading programs nationwide.", location: "Pakistan", website: "https://plf.org.pk/", verified: true },
  {name: "Idara Taleem Foundation", sector: "education", description: "Education support, scholarships, and literacy programs.", location: "Pakistan", website: "https://itf.org.pk/", verified: true },
  {  name: "Kashf Foundation (Education Programs)", sector: "education", description: "Education and vocational support for women and youth.", location: "Pakistan", website: "https://kashf.org.pk/", verified: true },
  {  name: "Pakistan Children Education Fund", sector: "education", description: "Scholarships and education support for underprivileged children.", location: "Pakistan", website: "https://pcef.org.pk/", verified: true },
  {  name: "Roshni Foundation (Education)", sector: "education", description: "Education programs for girls and marginalized communities.", location: "Pakistan", website: "https://roshnifoundation.org.pk/", verified: true },
  {name: "Pakistan Foundation for Educational Development", sector: "education", description: "Supports schools and teacher training programs.", location: "Pakistan", website: "https://pfed.org.pk/", verified: true },
  { name: "Pakistan Institute of Learning & Development", sector: "education", description: "Education and skill development initiatives.", location: "Pakistan", website: "https://pild.org.pk/", verified: true },
  {  name: "National Education Foundation", sector: "education", description: "Supports education programs across Pakistan.", location: "Pakistan", website: "https://nef.org.pk/", verified: true },
  { name: "Bright Future Foundation", sector: "education", description: "Educational support and scholarships for youth.", location: "Pakistan", website: "https://brightfuture.org.pk/", verified: true },
  {  name: "Pakistan Learning Foundation", sector: "education", description: "Promotes literacy, school support, and learning initiatives.", location: "Pakistan", website: "https://plf.org.pk/", verified: true },
  {  name: "Institute for Educational Development Pakistan", sector: "education", description: "Education programs and teacher training initiatives.", location: "Pakistan", website: "https://iedp.org.pk/", verified: true },

  // — Food Security (286–325)
  {  name: "Saylani Welfare International Trust (Food Programs)", sector: "food", description: "Provides food aid, ration distribution and community kitchens.", location: "Karachi, Pakistan", website: "https://www.saylaniwelfare.com/", verified: true },
  {  name: "Edhi Foundation (Food Support)", sector: "food", description: "Food assistance for needy and disaster-affected families.", location: "Pakistan", website: "https://edhi.org/", verified: true },
  {  name: "Alkhidmat Foundation (Food Security)", sector: "food", description: "Ration distribution, food kitchens, and disaster relief programs.", location: "Pakistan", website: "https://www.alkhidmat.org/", verified: true },
  {  name: "Pakistan Red Crescent Society (Food Aid)", sector: "food", description: "Food assistance and emergency relief for vulnerable communities.", location: "Pakistan", website: "https://www.prcs.org.pk/", verified: true },
  {  name: "Aman Foundation (Food Programs)", sector: "food", description: "Community kitchens and food support for low-income families.", location: "Pakistan", website: "https://amanfoundation.org/", verified: true },
  {  name: "HANDS Pakistan (Food Security)", sector: "food", description: "Ration distribution and community food programs.", location: "Pakistan", website: "https://hands.org.pk/", verified: true },
  {  name: "Zakat Foundation (Food Aid)", sector: "food", description: "Food distribution programs and emergency assistance.", location: "Pakistan", website: "https://www.zakat.org.pk/", verified: true },
  {  name: "Akram Foundation (Food Programs)", sector: "food", description: "Food support for vulnerable populations and communities.", location: "Pakistan", website: "https://akramfoundation.org/", verified: true },
  {  name: "Pakistan Humanitarian Aid Foundation", sector: "food", description: "Emergency food aid and disaster relief programs.", location: "Pakistan", website: "https://phaf.org.pk/", verified: true },
  {  name: "Karwan-e-Khidmat (Food Programs)", sector: "food", description: "Community food kitchens and ration distribution for needy families.", location: "Pakistan", website: "https://karwanekhidmat.org/", verified: true },
  {  name: "Hope Foundation (Food Aid)", sector: "food", description: "Food support and community relief programs.", location: "Pakistan", website: "https://hopefoundation.org.pk/", verified: true },
  {  name: "Chhipa Welfare Foundation (Food Programs)", sector: "food", description: "Community kitchens and emergency food distribution.", location: "Karachi, Pakistan", website: "https://chhipa.org/", verified: true },
  {  name: "Rabita Trust (Food Security)", sector: "food", description: "Ration and food distribution programs in rural areas.", location: "Pakistan", website: "https://rabitatrust.org.pk/", verified: true },

  {
    
    name: "Rizq",
    sector: "food",
    description: "Works to fight food insecurity by providing sustainable food access and relief across Pakistan.",  
    location: "Pakistan",
    website: "https://rizq.org/",
    verified: true,
  },
  {
    
    name: "Shibli Trust – Food Distribution",
    sector: "food",
    description: "Provides year‑round food distribution and nourishment support to underserved communities. ",  
    location: "Islamabad, Pakistan",
    website: "https://shiblitrust.org/food-distribution-programs/",
    verified: true,
  },
  {
   
    name: "Help In Need (Food Donation)",
    sector: "food",
    description: "Delivers large‑scale food donation and ration distribution nationwide. ",  
    location: "Islamabad, Pakistan",
    website: "https://helpinneed.org/food-donation-pakistan/",
    verified: true,
  },
  {
   
    name: "Fatih Foundation – Food Aid",
    sector: "food",
    description: "Provides essential food packages and hot meals to underprivileged families. ",  
    location: "Karachi, Pakistan",
    website: "https://fatihfoundation.com/food-aid/",
    verified: true,
  },
  {
    
    name: "Hasil Foundation – Feed for a Change",
    sector: "food",
    description: "Combats hunger and malnutrition by supplying nutritious meals to vulnerable individuals and children. ",  
    location: "Pakistan",
    website: "https://hasilfoundation.com/",
    verified: true,
  },
  {
    
    name: "One Vision Society – FoodBox Project",
    sector: "food",
    description: "Distributes cooked meals through its FoodBox initiative to people living on the streets. ",  
    location: "Lahore, Pakistan",
    website: "https://onevisionsociety.org/",
    verified: true,
  },
  {
    
    name: "ZIAFAT – The Food Charity",
    sector: "food",
    description: "Provides home‑cooked meals, monthly ration programs and Ramazan Suhr/Iftar meals. ",  
    location: "Pakistan",
    website: "https://ziafat.org/",
    verified: true,
  },
  {
    
    name: "PakAID",
    sector: "food",
    description: "Humanitarian NGO providing food packs and meat distribution alongside broader aid programs. ",  
    location: "Pakistan",
    website: "https://www.pak-aid.org/",
    verified: true,
  },
  {
   
    name: "Edhi Foundation – Food Bank Appeal",
    sector: "food",
    description: "Distributes food packs including staples to vulnerable families across Pakistan. ",  
    location: "Pakistan",
    website: "https://www.edhi.org/food-bank",
    verified: true,
  },
  {
  
    name: "Roshan Pakistan Foundation – Food Support",
    sector: "food",
    description: "Provides food distribution programs and community kitchen gardens for nourishment. ",  
    location: "Pakistan",
    website: "https://roshanpakistanfoundation.org/food.php",
    verified: true,
  },
  // Additional real food‑related NGOs and programs
  {
  
    name: "TARS Foundation – Free Food Distribution",
    sector: "food",
    description: "Operates daily meal distribution and Ramadan meal programs in Peshawar. ",  
    location: "Peshawar, Pakistan",
    website: "https://tarsfoundation.org.pk/Free-Food-Distribution",
    verified: true,
  },
  {
    
    name: "Alkhidmat Foundation – Food Assistance",
    sector: "food",
    description: "Provides ration distribution and food support during disasters. ",  
    location: "Pakistan",
    website: "https://www.alkhidmat.org/",
    verified: true,
  },
  {
   
    name: "Saylani Welfare – Daily Food Services",
    sector: "food",
    description: "Provides meals twice a day through community Dastarkhwans. ",  
    location: "Karachi, Pakistan",
    website: "https://saylaniwelfare.com/",
    verified: true,
  },
  {
    
    name: "Robin Hood Army Pakistan",
    sector: "food",
    description: "Volunteer‑based initiative redistributing surplus food to the needy. ",  
    location: "Pakistan",
    website: "https://robinhoodarmy.com/",
    verified: true,
  },
  {
  
    name: "CARE and Relief Foundation – Nutrition Aid",
    sector: "food",
    description: "Supports food distribution, nutrition and clean water projects across Pakistan. ",  
    location: "Pakistan",
    website: "https://careandrelief.uk/",
    verified: true,
  },
  {
    
    name: "Minhaj Welfare Foundation – Food Support",
    sector: "food",
    description: "Provides community food assistance as part of welfare relief. ",  
    location: "Lahore, Pakistan",
    website: "https://www.minhajwelfare.org/",
    verified: true,
  },
  {
    
    name: "Baitulmaal – Emergency Food Aid",
    sector: "food",
    description: "International charity providing meals to food‑insecure families. ",  
    location: "Pakistan",
    website: "https://baitulmaal.org/pakistan/",
    verified: true,
  },
  {
   
    name: "Pak Aid – Food and Nutrition Services",
    sector: "food",
    description: "Coordinates national food and nutrition support programs. ",  
    location: "Pakistan",
    website: "https://www.pak-aid.org/",
    verified: true,
  },
  {
    
    name: "Help In Need – Hunger Relief",
    sector: "food",
    description: "Delivers food rations including pulses and flour to families struggling with hunger. ",  
    location: "Pakistan",
    website: "https://helpinneed.org/food-donation-pakistan/",
    verified: true,
  },
  {
  
    name: "Hasil Foundation – Nutritious Meal Programs",
    sector: "food",
    description: "Provides healthy meals to low‑income children and families. ",  
    location: "Pakistan",
    website: "https://hasilfoundation.com/",
    verified: true,
  },
  {
    
    name: "Rizq – Sustainable Food Solutions",
    sector: "food",
    description: "Works across the food system to ensure access to affordable nutrition. ",  
    location: "Pakistan",
    website: "https://rizq.org/",
    verified: true,
  },
  {
    
    name: "TARS Foundation – Ramadan Ration Packs",
    sector: "food",
    description: "Provides monthly rations and Ramadan packages to needy families. ",  
    location: "Peshawar, Pakistan",
    website: "https://tarsfoundation.org.pk/",
    verified: true,
  },
  {
   
    name: "Roshan Pakistan Foundation – Community Meals",
    sector: "food",
    description: "Delivers community lunch programs and kitchen garden training. ",  
    location: "Pakistan",
    website: "https://roshanpakistanfoundation.org/",
    verified: true,
  },
  {
    
    name: "PakAID – Community Feed Initiatives",
    sector: "food",
    description: "Supports large food pack distributions and community nourishment schemes. ",  
    location: "Pakistan",
    website: "https://www.pak-aid.org/",
    verified: true,
  },
  {
   
    name: "ZIAFAT – Monthly Ration Program",
    sector: "food",
    description: "Provides monthly rations and home‑cooked meals to underserved families. ",  
    location: "Pakistan",
    website: "https://ziafat.org/",
    verified: true,
  },
  {
  
    name: "One Vision Society – Street Meals Initiative",
    sector: "food",
    description: "Distributes hot meals to homeless and vulnerable populations. ",  
    location: "Lahore, Pakistan",
    website: "https://onevisionsociety.org/",
    verified: true,
  },
  {

    name: "Edhi Foundation – Emergency Food Response",
    sector: "food",
    description: "Provides emergency food supplies and rapid meal distribution in crises. ",  
    location: "Pakistan",
    website: "https://edhi.org/",
    verified: true,
  },


  {
   
    name: "Ayesha Chundrigar Foundation (ACF) Animal Rescue",
    sector: "animal-welfare",
    description: "Leading animal rescue and rehabilitation organization in Karachi providing shelter and care for injured and abused animals.",  
    location: "Karachi, Pakistan",
    website: "https://www.acfanimalrescue.org/",
    verified: true,
  },
  {
  
    name: "Tahira Animal Welfare Foundation (TAWF)",
    sector: "animal-welfare",
    description: "Rescues injured, abused, and neglected animals, and runs TNVR and awareness programs across Pakistan.",  
    location: "Faisalabad, Pakistan",
    website: "https://tawf.org.pk/",
    verified: true,
  },
  {
  
    name: "CDRS Benji Project",
    sector: "animal-welfare",
    description: "Provides rescue, TNVR (trap, neuter, vaccinate, release), ambulances, and shelters for street animals nationwide. ",  
    location: "Islamabad, Pakistan",
    website: "https://www.cdrsbenji.org/",
    verified: true,
  },
  {
  
    name: "Jaandar Animal Welfare Organization",
    sector: "animal-welfare",
    description: "Compassion‑driven animal welfare group doing feeding, medical support, TNVR, and community awareness in Pakistan.",  
    location: "Lahore, Pakistan",
    website: "https://jaandar.org.pk/",
    verified: true,
  },
  {
 
    name: "Lucky Animal Protection Shelter (LAPS)",
    sector: "animal-welfare",
    description: "First dog rescue and protection shelter in Khyber Pakhtunkhwa providing neutering, vaccination, and medical care for strays.",  
    location: "Peshawar, Pakistan",
    website: "https://www.lapsglobal.org/",
    verified: true,
  },
  {

    name: "House of Happiness Animal Welfare & Rescue",
    sector: "animal-welfare",
    description: "Stray animal shelter in Islamabad offering rescue, medical care, and adoption services for neglected animals.",  
    location: "Islamabad, Pakistan",
    website: "https://houseofhappinessf.org/",
    verified: true,
  },
  {
 
    name: "Pakistan Animal Welfare Society (PAWS)",
    sector: "animal-welfare",
    description: "Volunteer‑led organisation advocating humane treatment and coordinating rescue and care for animals in Pakistan.",  
    location: "Karachi, Pakistan",
    website: "http://pawspakistan.org/",
    verified: true,
  },
  {
  
    name: "Animals Cottage Rescue Center",
    sector: "animal-welfare",
    description: "Rescue and rehabilitation centre in Lahore for abused, abandoned, and injured animals with spay and neuter services.",  
    location: "Lahore, Pakistan",
    website: "https://animalscottage.org/",
    verified: true,
  },
  {
   
    name: "Strays Home Animal Rescue Foundation",
    sector: "animal-welfare",
    description: "Registered nonprofit animal rescue shelter in Islamabad providing medical care and rehabilitation for stray animals.",  
    location: "Islamabad, Pakistan",
    website: "https://strayshome.com/",
    verified: true,
  },
  {
  
    name: "The PAWS Rescue",
    sector: "animal-welfare",
    description: "Animal rescue and treatment platform for injured, abused, and abandoned animals in Karachi.",  
    location: "Karachi, Pakistan",
    website: "https://thepawsrescue.com/",
    verified: true,
  },

  // More grassroots / social‑media based or directory‑listed groups
  {
 
    name: "United Rescue Volunteers",
    sector: "animal-welfare",
    description: "Volunteer rescue service for injured animals in Islamabad/Rawalpindi, coordinating transport to clinics and shelters.",  
    location: "Islamabad/Rawalpindi, Pakistan",
    website: "https://unitedrescuevolunteers.org/",
    verified: true,
  },
  {
 
    name: "Critters Ark Welfare Organization",
    sector: "animal-welfare",
    description: "Rescue organisation working for stray animals and wildlife in Islamabad/Rawalpindi and nearby areas.",  
    location: "Rawalpindi, Pakistan",
    website: "http://www.crittersark.com/",
    verified: true,
  },
  {
  
    name: "Friends Of Animals Pakistan (FOAP)",
    sector: "animal-welfare",
    description: "Global animal advocacy group with a presence in Pakistan focusing on ending animal exploitation and abuse.",  
    location: "Islamabad, Pakistan",
    website: "https://www.friendsofanimals.org.pk/",
    verified: true,
  },
  {
  
    name: "Karachi Animal Welfare Society (KAWS)",
    sector: "animal-welfare",
    description: "Community‑based welfare group focusing on wellbeing and care for stray animals in Karachi.",  
    location: "Karachi, Pakistan",
    website: "https://kaws.org.pk/",
    verified: true,
  },
  {
 
    name: "Pawsitive Pakistan",
    sector: "animal-welfare",
    description: "Awareness and community initiative promoting positive animal welfare efforts across Pakistan.",  
    location: "Pakistan",
    website: "https://pawsitivepakistan.org/",
    verified: true,
  },
  {
    name: "JFK Animal Rescue (Facebook‑based)",
    sector: "animal-welfare",
    description: "Animal rescue group active on social media providing rescue, feeding, and transport support for injured strays in Lahore.",  
    location: "Lahore, Pakistan",
    website: "https://www.facebook.com/JusticeForKittyFoundation",  
    verified: true,
  },
  {
   
    name: "Crazy Cats Animal Rescue (Social)",
    sector: "animal-welfare",
    description: "Lahore‑based animal care volunteer group focusing on stray cat rescue and adoption.",  
    location: "Lahore, Pakistan",
    website: "https://www.facebook.com/CrazyCatsLahore",
    verified: true,
  },
  {
    
    name: "Animal Rescue & Transport Service Karachi (ARTS)",
    sector: "animal-welfare",
    description: "Volunteer‑run rescue and transportation support group for injured street animals in Karachi.",  
    location: "Karachi, Pakistan",
    website: "https://www.facebook.com/AnimalRescueTransportServiceKarachi",
    verified: true,
  },
  {
   
    name: "Pet Rescue Lahore (Community Group)",
    sector: "animal-welfare",
    description: "Local animal rescue and adoption initiative via social channels helping strays in Lahore.",  
    location: "Lahore, Pakistan",
    website: "https://www.facebook.com/PetRescueLahore",
    verified: true,
  },
  {
    
    name: "Street Animal Rescue Islamabad (Group)",
    sector: "animal-welfare",
    description: "Volunteer animal rescue collective operating in Islamabad for injured and abandoned animals.",  
    location: "Islamabad, Pakistan",
    website: "https://www.facebook.com/StreetAnimalRescueIslamabad",
    verified: true,
  },
  {
   
    name: "Lahore Stray Animal Relief (Community)",
    sector: "animal-welfare",
    description: "Volunteers aiding stray dogs and cats with food, care, and shelter guidance in Lahore.",  
    location: "Lahore, Pakistan",
    website: "https://www.facebook.com/LahoreStrayAnimalRelief",
    verified: true,
  },
  {
  
    name: "OXFAM in Pakistan",
    sector: "social-welfare",
    focus: "Poverty Alleviation, WASH & Social Support",
    description:
      "International NGO focused on poverty alleviation, WASH projects, and social benefits in Pakistan.",
    volunteerInfo: "Yes",
    location: "Islamabad",
    website: "https://www.oxfam.org/en",
    verified: true,
  },
  [
  {
    "name": "Pakistan Animal Welfare Society (PAWS)",
    "sector": "animal welfare",
    "description": "Animal rescue and advocacy organization.",
    "location": "Pakistan",
    "website": "https://pawspakistan.org/about",
    "verified": true
  },
  {
    "name": "Society for the Prevention of Cruelty to Animals (SPCA)",
    "sector": "animal welfare",
    "description": "Promotes humane treatment of animals and provides shelter.",
    "location": "Pakistan",
    "website": "https://personalloan.pk/category/animal-welfare-organizations-in-pakistan/",
    "verified": true
  },
  {
    "name": "Todd’s Welfare Society (TWS)",
    "sector": "animal welfare",
    "description": "Rescue and shelter for stray animals.",
    "location": "Pakistan",
    "website": "https://en.wikipedia.org/wiki/Todd%27s_Welfare_Society",
    "verified": true
  },
  {
    "name": "Pawsitive Pakistan",
    "sector": "animal welfare",
    "description": "Animal welfare awareness platform.",
    "location": "Pakistan",
    "website": "https://pawsitivepakistan.org",
    "verified": true
  },
  {
    "name": "Human Rights Welfare Society Pakistan – Animal Development",
    "sector": "animal welfare",
    "description": "Animal rights and education.",
    "location": "Pakistan",
    "website": "https://hrws.pk/animal-development/",
    "verified": true
  },
  {
    "name": "Friends of Animals Pakistan (FOAP)",
    "sector": "animal welfare",
    "description": "Animal advocacy and protection organization.",
    "location": "Pakistan",
    "website": "https://jobbuzz.pk/list-of-animal-welfare-organizations-in-pakistan/",
    "verified": true
  },
  {
    "name": "Animal Care Trust (ACT)",
    "sector": "animal welfare",
    "description": "Animal rescue and birth control programs.",
    "location": "Pakistan",
    "website": "https://jobbuzz.pk/list-of-animal-welfare-organizations-in-pakistan/",
    "verified": true
  },
  {
    "name": "Save Our Animal Rights (SOAR)",
    "sector": "animal welfare",
    "description": "Rescue, shelter, and care for animals.",
    "location": "Pakistan",
    "website": "https://jobbuzz.pk/list-of-animal-welfare-organizations-in-pakistan/",
    "verified": true
  },
  {
    "name": "Nature Foundation Pakistan (NFP)",
    "sector": "animal welfare",
    "description": "Animal care and rescue services.",
    "location": "Pakistan",
    "website": "https://jobbuzz.pk/list-of-animal-welfare-organizations-in-pakistan/",
    "verified": true
  },
  {
    "name": "Animal Aid Foundation (AAF)",
    "sector": "animal welfare",
    "description": "Spay/neuter and welfare programs.",
    "location": "Pakistan",
    "website": "https://jobbuzz.pk/list-of-animal-welfare-organizations-in-pakistan/",
    "verified": true
  },
  {
    "name": "Stray Animals Welfare Organization (SAWO)",
    "sector": "animal welfare",
    "description": "Support for stray animals in communities.",
    "location": "Pakistan",
    "website": "https://jobbuzz.pk/list-of-animal-welfare-organizations-in-pakistan/",
    "verified": true
  },
  {
    "name": "Rescuing Animals In Need (RAIN)",
    "sector": "animal welfare",
    "description": "Animal rescue and emergency care services.",
    "location": "Pakistan",
    "website": "https://jobbuzz.pk/list-of-animal-welfare-organizations-in-pakistan/",
    "verified": true
  },
  {
    "name": "Vets Care Organization (VCO)",
    "sector": "animal welfare",
    "description": "Veterinary support and rescue programs.",
    "location": "Pakistan",
    "website": "https://jobbuzz.pk/list-of-animal-welfare-organizations-in-pakistan/",
    "verified": true
  },
  {
    "name": "Karuna Animal Welfare Trust",
    "sector": "animal welfare",
    "description": "Animal rescue and long-term care programs.",
    "location": "Pakistan",
    "website": "https://jobbuzz.pk/list-of-animal-welfare-organizations-in-pakistan/",
    "verified": true
  },
  {
    "name": "Tahira Animal Welfare Foundation (TAWF)",
    "sector": "animal welfare",
    "description": "Shelter and rehabilitation services for animals.",
    "location": "Pakistan",
    "website": "https://tawf.org.pk/about",
    "verified": true
  },
  {
    "name": "Edhi Foundation",
    "sector": "social welfare",
    "description": "Comprehensive social services including hospitals, orphanages, and emergency aid.",
    "location": "Pakistan",
    "website": "https://en.wikipedia.org/wiki/Edhi_Foundation",
    "verified": true
  },
  {
    "name": "Saylani Welfare International Trust",
    "sector": "social welfare",
    "description": "Food distribution, health, and community aid programs.",
    "location": "Pakistan",
    "website": "https://en.wikipedia.org/wiki/Saylani_Welfare_Trust",
    "verified": true
  },
  {
    "name": "JDC Foundation Pakistan",
    "sector": "social welfare",
    "description": "Emergency services and community relief programs.",
    "location": "Pakistan",
    "website": "https://en.wikipedia.org/wiki/JDC_Foundation",
    "verified": true
  },
  {
    "name": "Alamgir Welfare Trust International",
    "sector": "social welfare",
    "description": "Social support and feeding programs for underprivileged communities.",
    "location": "Pakistan",
    "website": "https://en.wikipedia.org/wiki/Alamgir_Welfare_Trust",
    "verified": true
  },
  {
    "name": "Khidmat‑e‑Khalq Foundation (KKF)",
    "sector": "social welfare",
    "description": "Welfare hospitals, emergency aid, and community services.",
    "location": "Pakistan",
    "website": "https://en.wikipedia.org/wiki/Khidmat-e-Khalq_Foundation",
    "verified": true
  },
  {
    "name": "Akhuwat Foundation",
    "sector": "social welfare",
    "description": "Poverty alleviation and interest-free microloans.",
    "location": "Pakistan",
    "website": "https://alkhidmat.org/about-us/latest/blog/list-of-top-10-charitable-organizations-in-pakistan/",
    "verified": true
  },
  {
    "name": "Alkhidmat Foundation Pakistan",
    "sector": "social welfare",
    "description": "Emergency relief and community development programs.",
    "location": "Pakistan",
    "website": "https://alkhidmat.org/about-us/latest/blog/list-of-top-10-charitable-organizations-in-pakistan/",
    "verified": true
  },
  {
    "name": "HANDS (Health And Nutrition Development Society)",
    "sector": "social welfare",
    "description": "Health, education, and poverty support services.",
    "location": "Pakistan",
    "website": "https://hands.org.pk/non-profit-organization-in-pakistan-serving-the-underprivileged/",
    "verified": true
  },
  {
    "name": "Aman Foundation",
    "sector": "social welfare",
    "description": "Healthcare, education, and social development programs.",
    "location": "Pakistan",
    "website": "https://hands.org.pk/non-profit-organization-in-pakistan-serving-the-underprivileged/",
    "verified": true
  },
  {
    "name": "Kashf Foundation",
    "sector": "social welfare",
    "description": "Financial inclusion and women empowerment programs.",
    "location": "Pakistan",
    "website": "https://en.wikipedia.org/wiki/Kashf_Foundation",
    "verified": true
  },
  {
    "name": "Ansar Burney Trust",
    "sector": "social welfare",
    "description": "Human rights and social welfare initiatives.",
    "location": "Pakistan",
    "website": "https://jdcwelfare.org/top-ngos-in-pakistan/",
    "verified": true
  },
  {
    "name": "Dar‑ul‑Sukun",
    "sector": "social welfare",
    "description": "Support services for people with disabilities.",
    "location": "Pakistan",
    "website": "https://jdcwelfare.org/top-ngos-in-pakistan/",
    "verified": true
  },
  {
    "name": "Aurat Foundation",
    "sector": "social welfare",
    "description": "Women’s rights and empowerment programs.",
    "location": "Pakistan",
    "website": "https://jdcwelfare.org/top-ngos-in-pakistan/",
    "verified": true
  },
  {
    "name": "The Citizens Foundation",
    "sector": "social welfare",
    "description": "Education for underprivileged children across Pakistan.",
    "location": "Pakistan",
    "website": "https://en.wikipedia.org/wiki/List_of_non-governmental_organizations_in_Pakistan",
    "verified": true
  },
  {
    "name": "Himalayan Wildlife Foundation",
    "sector": "social welfare",
    "description": "Wildlife conservation and biodiversity programs.",
    "location": "Pakistan",
    "website": "https://en.wikipedia.org/wiki/Himalayan_Wildlife_Foundation",
    "verified": true
  }
]


];


mongoose
  .connect("mongodb://127.0.0.1:27017/c4c", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("MongoDB connected");

    try {
      await Ngo.deleteMany(); // clear old data
      await Ngo.insertMany(ngosData); // insert new data
      console.log("NGO data seeded successfully");
    } catch (err) {
      console.log("Seeding error:", err);
    } finally {
      mongoose.connection.close(); // close connection
    }
  })
  .catch((err) => console.log("MongoDB connection error:", err));