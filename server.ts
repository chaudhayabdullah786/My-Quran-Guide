import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import fs from "fs";
import multer from "multer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const db = new Database("quran_academy.db");
const JWT_SECRET = process.env.JWT_SECRET || "super-secret-quran-academy-key";

// Ensure uploads directory exists
const uploadsDir = path.join(process.cwd(), "public", "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Initialize Database
db.exec(`
  CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT
  );

  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT,
    password TEXT NOT NULL,
    first_name TEXT,
    phone TEXT,
    teams_id TEXT,
    country TEXT,
    city TEXT,
    age_group TEXT,
    time_zone TEXT,
    program TEXT,
    preferred_days TEXT,
    role TEXT CHECK(role IN ('admin', 'teacher', 'student')) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS site_settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL
  );
`);

// Seed Site Settings
const seedSettings = [
  { key: 'hero_title', value: '<span class="italic text-forest">Live Online Quran Classes</span><br />with <span class="text-gold">Certified Tutors</span><br /><span class="text-forest-bright">— My Quran Guide</span>' },
  { key: 'hero_subtitle', value: 'Private, one-on-one Quran lessons for children and adults — taught by <strong>Certified teachers</strong> from the comfort of your home.' },
  { key: 'hero_trial_text', value: 'First Two class is completely <strong>FREE</strong> — no credit card needed' },
  { key: 'stats_students', value: '5,000+' },
  { key: 'stats_tutors', value: '300+' },
  { key: 'stats_rating', value: '4.9' },
  { key: 'stats_experience', value: '10+' },
  { key: 'stats_countries', value: '25+' }
];

const insertSetting = db.prepare("INSERT OR IGNORE INTO site_settings (key, value) VALUES (?, ?)");
seedSettings.forEach(s => insertSetting.run(s.key, s.value));

// Migration for existing users table
try { db.exec("ALTER TABLE users ADD COLUMN first_name TEXT;"); } catch(e) {}
try { db.exec("ALTER TABLE users ADD COLUMN phone TEXT;"); } catch(e) {}
try { db.exec("ALTER TABLE users ADD COLUMN teams_id TEXT;"); } catch(e) {}
try { db.exec("ALTER TABLE users ADD COLUMN country TEXT;"); } catch(e) {}
try { db.exec("ALTER TABLE users ADD COLUMN city TEXT;"); } catch(e) {}
try { db.exec("ALTER TABLE users ADD COLUMN program TEXT;"); } catch(e) {}
try { db.exec("ALTER TABLE users ADD COLUMN age_group TEXT;"); } catch(e) {}
try { db.exec("ALTER TABLE users ADD COLUMN time_zone TEXT;"); } catch(e) {}

// Email Transporter Configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify connection configuration
if (process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter.verify(function (error, success) {
    if (error) {
      console.error("❌ Email (SMTP) Connection Error:", error.message);
      if (error.message.includes("535-5.7.8")) {
        console.error("👉 Solution: If using Gmail, you MUST use an 'App Password'. Standard passwords will be rejected by Google.");
      }
    } else {
      console.log("✅ Email (SMTP) server is ready to take our messages");
    }
  });
}

const sendAdminNotification = async (userData: any) => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("SMTP credentials not configured. Skipping email notification.");
    return;
  }

  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;
  
  const mailOptions = {
    from: `"MyQuranGuide" <${process.env.SMTP_USER}>`,
    to: adminEmail,
    subject: "New Free Trial Registration - MyQuranGuide",
    html: `
      <h2>New Student Registration</h2>
      <p>A new student has registered for a free trial class.</p>
      <table border="1" cellpadding="5" style="border-collapse: collapse;">
        <tr><td><strong>Name:</strong></td><td>${userData.firstName}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${userData.email}</td></tr>
        <tr><td><strong>Phone:</strong></td><td>${userData.phone}</td></tr>
        <tr><td><strong>Country:</strong></td><td>${userData.country}</td></tr>
        <tr><td><strong>City:</strong></td><td>${userData.city}</td></tr>
        <tr><td><strong>Age Group:</strong></td><td>${userData.ageGroup}</td></tr>
        <tr><td><strong>Time Zone:</strong></td><td>${userData.timeZone}</td></tr>
        <tr><td><strong>Courses:</strong></td><td>${userData.program}</td></tr>
        <tr><td><strong>Schedule:</strong></td><td>${userData.preferredDays}</td></tr>
      </table>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Admin notification email sent.");
  } catch (error) {
    console.error("Error sending admin notification email:", error);
  }
};

db.exec(`
  CREATE TABLE IF NOT EXISTS lessons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    short_description TEXT,
    full_content TEXT,
    featured_image TEXT,
    audio_file TEXT,
    video_link TEXT,
    category_id INTEGER,
    teacher_id INTEGER,
    status TEXT DEFAULT 'published',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (teacher_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS contact_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    country TEXT,
    city TEXT,
    age_group TEXT,
    time_zone TEXT,
    courses TEXT,
    schedule TEXT,
    message TEXT NOT NULL,
    is_read INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS student_progress (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id INTEGER NOT NULL,
    lesson_id INTEGER NOT NULL,
    completed INTEGER DEFAULT 0,
    last_accessed DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES users(id),
    FOREIGN KEY (lesson_id) REFERENCES lessons(id),
    UNIQUE(student_id, lesson_id)
  );

  CREATE TABLE IF NOT EXISTS ai_cache (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL,
    response TEXT NOT NULL,
    user_role TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS blogs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT NOT NULL,
    category TEXT,
    image TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS specialized_courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT NOT NULL,
    meta_title TEXT,
    meta_description TEXT,
    hero_title TEXT,
    hero_subtitle TEXT,
    features TEXT NOT NULL, -- JSON string of features
    what_you_will_learn TEXT, -- JSON string
    curriculum TEXT, -- JSON string
    faq TEXT, -- JSON string
    icon_name TEXT,
    color_class TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS fees_plans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    classes TEXT NOT NULL,
    price_30 TEXT NOT NULL,
    price_45 TEXT NOT NULL,
    per_class_30 TEXT NOT NULL,
    per_class_45 TEXT NOT NULL,
    features TEXT NOT NULL, -- JSON string
    popular INTEGER DEFAULT 0,
    display_order INTEGER DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS fees_faqs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    display_order INTEGER DEFAULT 0
  );
`);

// Migration for specialized_courses
try { db.exec("ALTER TABLE specialized_courses ADD COLUMN slug TEXT;"); } catch(e) {}
try { db.exec("ALTER TABLE specialized_courses ADD COLUMN meta_title TEXT;"); } catch(e) {}
try { db.exec("ALTER TABLE specialized_courses ADD COLUMN meta_description TEXT;"); } catch(e) {}
try { db.exec("ALTER TABLE specialized_courses ADD COLUMN hero_title TEXT;"); } catch(e) {}
try { db.exec("ALTER TABLE specialized_courses ADD COLUMN hero_subtitle TEXT;"); } catch(e) {}
try { db.exec("ALTER TABLE specialized_courses ADD COLUMN what_you_will_learn TEXT;"); } catch(e) {}
try { db.exec("ALTER TABLE specialized_courses ADD COLUMN curriculum TEXT;"); } catch(e) {}
try { db.exec("ALTER TABLE specialized_courses ADD COLUMN faq TEXT;"); } catch(e) {}

// Seed initial data
const categoriesToSeed = [
  ["Noorani Qaida", "noorani-qaida", "The foundation every Quran reader needs."],
  ["Tajweed", "tajweed-course", "Rules for the correct pronunciation of the Quran."],
  ["Hifz", "hifz-course", "Memorization of the Holy Quran."],
  ["Quran for Kids", "quran-for-kids", "Structured, engaging, age-appropriate learning."],
  ["Islamic Studies", "islamic-studies", "Build a complete Muslim foundation."],
  ["Arabic Language", "arabic-course", "Read, understand and speak Arabic."],
  ["Tafseer", "tafseer-course", "Understand the meaning and context of the Quran."]
];

const insertCat = db.prepare("INSERT OR IGNORE INTO categories (name, slug, description) VALUES (?, ?, ?)");
for (const cat of categoriesToSeed) {
  insertCat.run(...cat);
}

// Seed fees plans
const planCount = db.prepare("SELECT COUNT(*) as count FROM fees_plans").get() as { count: number };
if (planCount.count === 0) {
  const insertPlan = db.prepare(`
    INSERT INTO fees_plans (name, classes, price_30, price_45, per_class_30, per_class_45, features, popular, display_order)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  insertPlan.run('Starter', '2 classes / week · 8 classes / month', '39', '49', '$4.87 per class', '$6.12 per class', JSON.stringify([
    '8 live 1-on-1 classes per month',
    'Certified tutor assigned',
    'Flexible scheduling — any time',
    'Monthly progress report',
    'WhatsApp tutor access'
  ]), 0, 0);

  insertPlan.run('Standard', '3 classes / week · 12 classes / month', '53', '65', '$4.41 per class', '$5.41 per class', JSON.stringify([
    '12 live 1-on-1 classes per month',
    'Certified tutor assigned',
    'Flexible scheduling — any time',
    'Bi-weekly progress reports',
    'WhatsApp + email tutor support'
  ]), 0, 1);

  insertPlan.run('Intensive', '4 classes / week · 16 classes / month', '69', '85', '$4.31 per class', '$5.31 per class', JSON.stringify([
    '16 live 1-on-1 classes per month',
    'Certified tutor — priority match',
    'Flexible scheduling — any time',
    'Weekly detailed progress reports',
    'WhatsApp + email tutor support',
    'Make-up classes included'
  ]), 1, 2);

  insertPlan.run('Daily', '5 classes / week · 20 classes / month', '85', '105', '$4.25 per class', '$5.25 per class', JSON.stringify([
    '20 live 1-on-1 classes per month',
    'Senior certified tutor',
    'Flexible scheduling — any time',
    'Weekly detailed progress reports',
    'Dedicated academic supervisor',
    'Make-up classes included',
    'Priority tutor access'
  ]), 0, 3);
}

// Seed fees FAQs
const faqCount = db.prepare("SELECT COUNT(*) as count FROM fees_faqs").get() as { count: number };
if (faqCount.count === 0) {
  const insertFaq = db.prepare(`INSERT INTO fees_faqs (question, answer, display_order) VALUES (?, ?, ?)`);
  const initialFaqs = [
    ["How much do online Quran classes cost at My Quran Guide?", "Plans start from $39/month for 2 classes per week (8 classes/month). All plans are billed monthly with no contracts. The more classes per week, the lower the cost per individual class. The first class is always free — no credit card required."],
    ["What is the difference between 30-minute and 45-minute classes?", "30-minute classes are ideal for children, beginners, and students who prefer shorter, focused sessions. 45-minute classes are recommended for intermediate and advanced students — particularly for Tajweed, Hifz, and Tafseer — where deeper engagement in each session produces better results. You can switch between durations at any time."],
    ["Can I change my plan after enrolling?", "Yes. You can upgrade or downgrade your plan at the start of any new billing cycle. If you want to add more classes mid-month, contact our support team and we will accommodate you."],
    ["What times are classes available?", "Classes are available 24 hours a day, 7 days a week — including weekends. We cover all major time zones including EST, PST, GMT, and AEST. You choose your time slot when you enroll and it remains consistent every week."],
    ["Is there a registration or setup fee?", "No. There are no registration fees, setup fees, or hidden charges of any kind. The monthly price listed is exactly what you pay — nothing more."],
    ["What payment methods do you accept?", "We accept Credit and Debit Cards (Visa, Mastercard, Amex), PayPal, Bank Transfer, and Wise / Payoneer for international students. All major global payment methods are supported."],
    ["Can I enroll multiple children on one account?", "Yes. Families with multiple children can enroll each child in their own plan. Contact our support team about family enrollment — each child is assigned their own dedicated tutor with their own personalised schedule."],
    ["How does the Hifz plan differ from regular plans?", "The Hifz plan is a specialised program with 20 daily classes per month taught by a senior certified tutor. It includes a personalised memorization and revision plan, monthly milestone assessments, and a certificate upon completing the full Quran memorization. It requires a free placement test before enrollment."]
  ];
  initialFaqs.forEach((f, i) => insertFaq.run(f[0], f[1], i));
}

// Seed specialized courses
const courseCount = db.prepare("SELECT COUNT(*) as count FROM specialized_courses").get() as { count: number };
if (courseCount.count === 0) {
  const insertCourse = db.prepare(`
    INSERT INTO specialized_courses 
    (title, slug, description, meta_title, meta_description, hero_title, hero_subtitle, features, what_you_will_learn, curriculum, faq, icon_name, color_class) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  insertCourse.run(
    "Noorani Qaida",
    "noorani-qaida",
    "The Foundation Every Quran Reader Needs. Arabic letter recognition, correct articulation, vowel sounds, and basic word formation.",
    "Online Noorani Qaida Course | Learn Arabic Basics for Kids & Adults",
    "Start your Quran journey with our Online Noorani Qaida Course. Master Arabic letters, pronunciation, and Tajweed basics with expert tutors. Free trial available!",
    "Master the Basics with Online Noorani Qaida Course",
    "The essential first step for every beginner to read the Quran with perfect Tajweed and confidence.",
    JSON.stringify(["Arabic letter recognition", "Correct articulation", "Vowel sounds", "Basic word formation"]),
    JSON.stringify([
      { title: "Arabic Alphabet", desc: "Recognizing and pronouncing all 28 Arabic letters correctly from their origins (Makharij)." },
      { title: "Vowel Signs (Harakat)", desc: "Understanding Fatha, Kasra, and Damma and how they change letter sounds." },
      { title: "Joining Letters", desc: "Learning how letters change shape when connected to form words." },
      { title: "Basic Tajweed Rules", desc: "Introduction to Madd, Sukoon, and Tanween for smooth reading." }
    ]),
    JSON.stringify([
      { stage: "Stage 1: The Foundation", title: "Single Letters & Pronunciation", points: ["Recognition of individual letters", "Correct articulation points (Makharij)", "The 28 letters of the Arabic alphabet"] },
      { stage: "Stage 2: The Building Blocks", title: "Compound Letters & Vowels", points: ["Joining two or more letters", "Vowel signs (Fatha, Kasra, Damma)", "Tanween (Double vowels)"] },
      { stage: "Stage 3: Advanced Reading", title: "Rules of Recitation", points: ["Sukoon and Jazm", "Shaddah (Emphasis)", "Rules of Madd (Prolongation)"] }
    ]),
    JSON.stringify([
      { q: "How long does it take to complete Noorani Qaida?", a: "On average, it takes 3 to 5 months depending on the student's age and frequency of classes." },
      { q: "Is this course suitable for adults?", a: "Yes, we have specialized methods for adults to help them master the basics quickly and effectively." }
    ]),
    "Book",
    "forest"
  );

  insertCourse.run(
    "Quran Reading with Tajweed",
    "tajweed-course",
    "Live Correction Every Class. Master all core Tajweed rules systematically while applying them in actual Quran recitation.",
    "Online Tajweed Course | Master Quran Recitation with Rules",
    "Improve your Quran recitation with our Online Tajweed Course. Learn rules of pronunciation, rhythm, and melody with certified teachers. Book a free trial!",
    "Perfect Your Recitation with Online Tajweed Course",
    "Master the art of Quranic recitation through systematic rules and live correction from expert tutors.",
    JSON.stringify(["Core Tajweed rules", "Live correction", "Systematic application", "Accurate pronunciation"]),
    JSON.stringify([
      { title: "Rules of Noon & Meem", desc: "Mastering Ghunnah, Ikhfa, Idgham, and Izhar for beautiful recitation." },
      { title: "Makharij (Articulation)", desc: "Deep dive into the precise points of origin for every Arabic letter." },
      { title: "Rules of Madd", desc: "Understanding the different types of prolongations and their durations." },
      { title: "Stopping Rules", desc: "Learning where and how to stop correctly during recitation (Waqf)." }
    ]),
    JSON.stringify([
      { stage: "Stage 1: Basic Rules", title: "Introduction to Tajweed", points: ["Importance of Tajweed", "Rules of Noon Sakinah", "Rules of Meem Sakinah"] },
      { stage: "Stage 2: Intermediate", title: "Articulation & Characteristics", points: ["Makharij al-Huroof", "Sifaat al-Huroof (Characteristics)", "Rules of Ra and Lam"] },
      { stage: "Stage 3: Advanced", title: "Mastery & Application", points: ["Advanced Madd rules", "Rules of Waqf (Stopping)", "Practical application in Juz Amma"] }
    ]),
    JSON.stringify([
      { q: "Do I need to know Arabic to start?", a: "You should be able to read basic Arabic or have completed Noorani Qaida before starting this course." },
      { q: "Will I get a certificate?", a: "Yes, students who successfully complete the Tajweed assessment receive a certificate of completion." }
    ]),
    "Volume2",
    "gold"
  );

  insertCourse.run(
    "Hifz",
    "hifz-course",
    "Quran Memorization with Certification. Personalised daily memorization plan, systematic weekly revision, and continuous Tajweed correction.",
    "Online Quran Memorization Course | Hifz Classes for All",
    "Memorize the Holy Quran at your own pace with our Online Hifz Classes. Personalized plans, expert guidance, and systematic revision. Start today!",
    "Embark on Your Hifz Journey Online",
    "A structured and supportive environment to help you memorize the Word of Allah with precision and retention.",
    JSON.stringify(["Daily memorization plan", "Weekly revision", "Continuous Tajweed correction", "Certification track"]),
    JSON.stringify([
      { title: "Memorization Techniques", desc: "Learning proven methods to memorize verses quickly and retain them long-term." },
      { title: "Systematic Revision", desc: "A structured approach to 'Manzil' and 'Sabaqi' to ensure you never forget what you've learned." },
      { title: "Tajweed Integration", desc: "Ensuring every verse is memorized with perfect pronunciation and rules." },
      { title: "Spiritual Connection", desc: "Understanding the virtues of Hifz and building a life-long bond with the Quran." }
    ]),
    JSON.stringify([
      { stage: "Stage 1: Preparation", title: "Foundation for Hifz", points: ["Assessment of Tajweed", "Memorizing short Surahs", "Building stamina for Hifz"] },
      { stage: "Stage 2: The Journey", title: "Active Memorization", points: ["Daily new lesson (Sabaq)", "Daily revision of recent lessons (Sabaqi)", "Old revision (Manzil)"] },
      { stage: "Stage 3: Completion", title: "Consolidation & Review", points: ["Final review of the entire Quran", "Preparation for Hifz exam", "Certification track"] }
    ]),
    JSON.stringify([
      { q: "Can I choose which Surahs to memorize?", a: "Yes, we offer both full Quran Hifz and specific Surah memorization plans tailored to your goals." },
      { q: "How many hours a day should I commit?", a: "We recommend at least 30-60 minutes of class time plus 1-2 hours of self-revision daily for best results." }
    ]),
    "Moon",
    "forest"
  );

  insertCourse.run(
    "Quran Classes for Kids",
    "quran-for-kids",
    "Structured, Engaging, Age-Appropriate. Patient, energetic tutors selected specifically for their ability to teach young learners.",
    "Online Quran Classes for Kids | Fun & Engaging Learning",
    "Interactive Online Quran Classes for Kids. We make learning Quran fun with games, rewards, and patient tutors. Book a free trial class now!",
    "Fun & Engaging Online Quran Classes for Kids",
    "Building a lifelong love for the Quran through interactive lessons, patient tutors, and a reward-based system.",
    JSON.stringify(["Patient tutors", "Engaging methods", "Age-appropriate content", "Visual learning"]),
    JSON.stringify([
      { title: "Interactive Noorani Qaida", desc: "Learning Arabic letters and sounds through games, visuals, and engaging exercises." },
      { title: "Correct Pronunciation", desc: "Building the foundation of Tajweed from day one in a way that's easy for kids to grasp." },
      { title: "Short Surah Memorization", desc: "Memorizing Juz Amma surahs with proper rhythm and understanding of their basic meanings." },
      { title: "Islamic Stories", desc: "Inspiring stories of the Prophets and Sahaba to build character and love for the Deen." }
    ]),
    JSON.stringify([
      { stage: "Stage 1: The Fun Foundation", title: "Letters & Sounds", points: ["Alphabet recognition with games", "Basic vowel sounds", "Interactive coloring and tracing"] },
      { stage: "Stage 2: Junior Reciter", title: "Word Formation", points: ["Joining letters to form words", "Basic Tajweed rules for kids", "Reciting short verses"] },
      { stage: "Stage 3: Young Muslim", title: "Ethics & Duas", points: ["Daily Duas and manners", "Stories of the Prophets", "Pillars of Islam"] }
    ]),
    JSON.stringify([
      { q: "What is the minimum age to start?", a: "We typically start with children as young as 4 or 5 years old using our specialized foundation program." },
      { q: "How do you keep kids engaged?", a: "Our tutors use digital whiteboards, educational games, and a points-based reward system to keep them excited." }
    ]),
    "Users",
    "gold"
  );

  insertCourse.run(
    "Quran Tafseer",
    "tafseer-course",
    "Understand What You Recite. Beyond the words into the meaning, context, and wisdom of each verse using classical sources.",
    "Online Quran Tafseer Course | Understand the Meaning of Quran",
    "Deepen your understanding with our Online Quran Tafseer Course. Learn the context, wisdom, and application of Allah's words. Free trial available!",
    "Understand the Wisdom with Online Quran Tafseer",
    "Go beyond recitation to discover the deep meanings, historical context, and practical guidance of the Holy Quran.",
    JSON.stringify(["Meaning and context", "Classical sources", "Spiritual wisdom", "Verse breakdown"]),
    JSON.stringify([
      { title: "Meaning and Context", desc: "Beyond the words into the meaning, context, and wisdom of each verse using classical sources." },
      { title: "Classical Sources", desc: "Studying interpretations from renowned scholars like Ibn Kathir and others." },
      { title: "Spiritual Wisdom", desc: "Extracting lessons for personal growth and spiritual development from the Quran." },
      { title: "Verse breakdown", desc: "Analyzing the linguistic and thematic structure of key verses." }
    ]),
    JSON.stringify([
      { stage: "Stage 1: Introduction", title: "Principles of Tafseer", points: ["History of Tafseer", "Sources of Tafseer", "Linguistic miracles of the Quran"] },
      { stage: "Stage 2: Core Study", title: "Thematic Tafseer", points: ["Tafseer of Juz Amma", "Major themes of the Quran", "Context of revelation (Asbab al-Nuzul)"] },
      { stage: "Stage 3: Application", title: "Guidance for Life", points: ["Extracting practical rulings", "Ethical lessons from Surahs", "Modern application of Quranic wisdom"] }
    ]),
    JSON.stringify([
      { q: "Do I need to know Arabic?", a: "While helpful, it's not required. The course is taught in English with a focus on translated meanings and context." },
      { q: "Is this a scholarly course?", a: "This course is designed for general Muslims who want to understand their Quran better, not for academic specialization." }
    ]),
    "Sun",
    "forest"
  );

  insertCourse.run(
    "Islamic Studies & Duas",
    "islamic-studies",
    "Build a Complete Muslim Foundation. Daily Duas, Pillars of Islam, Seerah, basic Fiqh, and essential prayers.",
    "Online Islamic Studies Course | Learn Deen & Daily Duas",
    "Comprehensive Online Islamic Studies Course for all ages. Learn Fiqh, Seerah, Hadith, and essential Duas with expert teachers. Book a trial!",
    "Build a Strong Foundation with Islamic Studies",
    "A comprehensive program covering the essentials of faith, practice, and character for every Muslim.",
    JSON.stringify(["Daily Duas", "Pillars of Islam", "Seerah", "Basic Fiqh"]),
    JSON.stringify([
      { title: "Daily Duas", desc: "Essential supplications for every occasion, from waking up to sleeping." },
      { title: "Pillars of Islam", desc: "In-depth understanding of Shahada, Salah, Zakat, Sawm, and Hajj." },
      { title: "Seerah", desc: "Learning from the life and character of the Prophet Muhammad (PBUH)." },
      { title: "Basic Fiqh", desc: "Practical rules for Taharah (purification), Salah, and daily transactions." }
    ]),
    JSON.stringify([
      { stage: "Stage 1: Faith & Practice", title: "Aqeedah & Worship", points: ["Six Articles of Faith", "Pillars of Islam", "How to perform Wudu and Salah"] },
      { stage: "Stage 2: Character & History", title: "Akhlaq & Seerah", points: ["Islamic manners and ethics", "Life of Prophet Muhammad (PBUH)", "Stories of other Prophets"] },
      { stage: "Stage 3: Daily Life", title: "Duas & Fiqh", points: ["Memorizing essential Duas", "Basic rules of Halal and Haram", "Rights of parents and neighbors"] }
    ]),
    JSON.stringify([
      { q: "Is this course for kids or adults?", a: "We have separate tracks for both. The content is adjusted to be age-appropriate for all learners." },
      { q: "Can I combine this with Quran classes?", a: "Yes, many of our students take a combined Quran and Islamic Studies program." }
    ]),
    "GraduationCap",
    "gold"
  );

  insertCourse.run(
    "Arabic Language Course",
    "arabic-course",
    "Read, Understand and Speak. Vocabulary, grammar, and sentence structures that appear most in the Quran.",
    "Online Arabic Language Course | Learn Quranic Arabic",
    "Master the language of the Quran with our Online Arabic Course. Learn grammar, vocabulary, and conversation with native-level tutors. Start now!",
    "Unlock the Language of the Quran",
    "Master Arabic grammar, vocabulary, and conversation to connect directly with the Word of Allah without translation.",
    JSON.stringify(["Quranic vocabulary", "Arabic grammar", "Sentence structures", "Reading and speaking"]),
    JSON.stringify([
      { title: "Quranic vocabulary", desc: "Learning the most frequent words used in the Holy Quran to aid understanding." },
      { title: "Arabic grammar", desc: "Mastering Nahw (syntax) and Sarf (morphology) in a simplified way." },
      { title: "Sentence structures", desc: "Building the ability to construct and understand complex Arabic sentences." },
      { title: "Reading and speaking", desc: "Developing fluency in reading classical texts and basic conversational Arabic." }
    ]),
    JSON.stringify([
      { stage: "Stage 1: The Basics", title: "Vocabulary & Phrases", points: ["Common Quranic words", "Basic greetings and phrases", "Introduction to word types"] },
      { stage: "Stage 2: Grammar", title: "Structure & Syntax", points: ["Noun and Verb properties", "Sentence construction (Nahw)", "Word patterns (Sarf)"] },
      { stage: "Stage 3: Fluency", title: "Reading & Comprehension", points: ["Reading classical Arabic texts", "Direct translation of verses", "Conversational practice"] }
    ]),
    JSON.stringify([
      { q: "How is this different from Noorani Qaida?", a: "Noorani Qaida focuses on reading letters and sounds. This course focuses on understanding the language itself." },
      { q: "Will I be able to speak Arabic fluently?", a: "Our primary focus is Quranic understanding, but you will gain significant conversational skills as well." }
    ]),
    "Users",
    "forest"
  );
}

// Seed default admin
const adminUser = db.prepare("SELECT * FROM users WHERE username = 'abdullah'").get() as any;
if (!adminUser) {
  const hashedPassword = bcrypt.hashSync("F296Db39@\"$&", 10);
  db.prepare("INSERT INTO users (username, password, role) VALUES (?, ?, ?)").run("abdullah", hashedPassword, "admin");
  
  // Optional: Remove the old default 'admin' if it exists
  db.prepare("DELETE FROM users WHERE username = 'admin' AND role = 'admin'").run();
}

// Multer Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ 
  storage,
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/") || file.mimetype === "audio/mpeg") {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  }
});

// Auth Middleware
const authenticate = (roles: string[] = []) => (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    if (roles.length && !roles.includes(decoded.role)) {
      return res.status(403).json({ error: "Forbidden" });
    }
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  // --- Sitemap ---
  app.get("/sitemap.xml", (req, res) => {
    const host = req.get('host');
    const protocol = req.protocol;
    const baseUrl = `${protocol}://${host}`;
    const staticPages = [
      "", "/lessons", "/about", "/contact", "/fees-schedule", "/blogs", "/register", "/sitemap",
      "/course/noorani-qaida", "/course/arabic-course", "/course/hifz-course",
      "/course/islamic-studies", "/course/quran-for-kids", "/course/tafseer-course",
      "/course/tajweed-course", "/course/quran-classes-canada", "/course/quran-classes-uk",
      "/course/quran-classes-usa", "/course/quran-classes-for-ladies", "/course/quran-classes-australia",
      "/course/quran-classes-near-me"
    ];

    const blogs = db.prepare("SELECT slug FROM blogs").all() as { slug: string }[];
    const blogPages = blogs.map(b => `/blog/${b.slug}`);

    const courses = db.prepare("SELECT slug FROM specialized_courses").all() as { slug: string }[];
    const coursePages = courses.map(c => `/course/${c.slug}`);

    const allPages = [...staticPages, ...blogPages, ...coursePages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`).join("")}
</urlset>`;

    res.header("Content-Type", "application/xml");
    res.send(sitemap);
  });

  app.use(express.json());
  app.use("/uploads", express.static(uploadsDir));

  // --- Public API Routes ---
  app.get("/api/categories", (req, res) => {
    res.json(db.prepare("SELECT * FROM categories").all());
  });

  app.get("/api/lessons", (req, res) => {
    const { category } = req.query;
    let query = `
      SELECT l.*, c.name as category_name, c.slug as category_slug, u.username as teacher_name 
      FROM lessons l 
      JOIN categories c ON l.category_id = c.id 
      LEFT JOIN users u ON l.teacher_id = u.id
      WHERE l.status = 'published'
    `;
    const params: any[] = [];
    if (category) {
      query += " AND c.slug = ?";
      params.push(category);
    }
    query += " ORDER BY l.created_at DESC";
    res.json(db.prepare(query).all(...params));
  });

  app.get("/api/lessons/:slug", (req, res) => {
    const lesson = db.prepare(`
      SELECT l.*, c.name as category_name, u.username as teacher_name 
      FROM lessons l 
      JOIN categories c ON l.category_id = c.id 
      LEFT JOIN users u ON l.teacher_id = u.id
      WHERE l.slug = ?
    `).get(req.params.slug);
    lesson ? res.json(lesson) : res.status(404).json({ error: "Lesson not found" });
  });

  app.post("/api/contact", (req, res) => {
    const { name, email, phone, country, city, ageGroup, timeZone, courses, schedule, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ error: "Required fields missing" });
    db.prepare(`
      INSERT INTO contact_messages (name, email, phone, country, city, age_group, time_zone, courses, schedule, message) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(name, email, phone, country, city, ageGroup, timeZone, courses, schedule, message);
    res.json({ success: true });
  });

  // --- Auth Routes ---
  app.post("/api/auth/login", (req, res) => {
    const { username, password } = req.body;
    // Allow login with either username or email
    const user = db.prepare("SELECT * FROM users WHERE username = ? OR email = ?").get(username, username) as any;
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: "24h" });
      res.json({ token, username: user.username, role: user.role });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  });

  app.post("/api/auth/register", async (req, res) => {
    const { username, password, email, firstName, phone, teamsId, country, city, ageGroup, timeZone, program, preferredDays } = req.body;
    if (!username || !password) return res.status(400).json({ error: "Username and password required" });
    try {
      const hashedPassword = bcrypt.hashSync(password, 10);
      db.prepare(`
        INSERT INTO users (username, password, email, first_name, phone, teams_id, country, city, age_group, time_zone, program, preferred_days, role) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(username, hashedPassword, email, firstName, phone, teamsId, country, city, ageGroup, timeZone, program, preferredDays, "student");
      
      // Send email notification to admin
      await sendAdminNotification({ firstName, email, phone, country, city, ageGroup, timeZone, program, preferredDays });
      
      res.json({ success: true });
    } catch (err) {
      console.error("Registration Error:", err);
      res.status(400).json({ error: "Username already exists or invalid data" });
    }
  });

  // --- Admin Protected Routes ---
  app.get("/api/admin/stats", authenticate(["admin"]), (req, res) => {
    const lessons = db.prepare("SELECT COUNT(*) as count FROM lessons").get() as any;
    const categories = db.prepare("SELECT COUNT(*) as count FROM categories").get() as any;
    const messages = db.prepare("SELECT COUNT(*) as count FROM contact_messages WHERE is_read = 0").get() as any;
    const teachers = db.prepare("SELECT COUNT(*) as count FROM users WHERE role = 'teacher'").get() as any;
    const students = db.prepare("SELECT COUNT(*) as count FROM users WHERE role = 'student'").get() as any;
    res.json({ totalLessons: lessons.count, totalCategories: categories.count, unreadMessages: messages.count, totalTeachers: teachers.count, totalStudents: students.count });
  });

  app.get("/api/admin/users", authenticate(["admin"]), (req, res) => {
    const { role } = req.query;
    let query = "SELECT id, username, email, first_name, phone, country, city, program, age_group, time_zone, preferred_days, role, created_at FROM users";
    const params: any[] = [];
    if (role) {
      query += " WHERE role = ?";
      params.push(role);
    }
    res.json(db.prepare(query).all(...params));
  });

  app.get("/api/site-settings", (req, res) => {
    const settings = db.prepare("SELECT * FROM site_settings").all() as any[];
    const settingsMap = settings.reduce((acc, s) => ({ ...acc, [s.key]: s.value }), {});
    res.json(settingsMap);
  });

  app.put("/api/admin/site-settings", authenticate(["admin"]), (req, res) => {
    const updates = req.body;
    const updateStmt = db.prepare("UPDATE site_settings SET value = ? WHERE key = ?");
    const transaction = db.transaction((items) => {
      for (const [key, value] of Object.entries(items)) {
        updateStmt.run(value, key);
      }
    });
    try {
      transaction(updates);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to update settings" });
    }
  });

  app.post("/api/admin/users", authenticate(["admin"]), (req, res) => {
    const { username, password, email, role } = req.body;
    try {
      const hashedPassword = bcrypt.hashSync(password, 10);
      db.prepare("INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)").run(username, hashedPassword, email, role);
      res.json({ success: true });
    } catch (err) {
      res.status(400).json({ error: "User already exists" });
    }
  });

  app.delete("/api/admin/users/:id", authenticate(["admin"]), (req, res) => {
    db.prepare("DELETE FROM users WHERE id = ?").run(req.params.id);
    res.json({ success: true });
  });

  // --- Lesson Management (Admin & Teacher) ---
  app.get("/api/lessons-management", authenticate(["admin", "teacher"]), (req: any, res) => {
    let query = "SELECT l.*, c.name as category_name, u.username as teacher_name FROM lessons l JOIN categories c ON l.category_id = c.id LEFT JOIN users u ON l.teacher_id = u.id";
    const params: any[] = [];
    if (req.user.role === "teacher") {
      query += " WHERE l.teacher_id = ?";
      params.push(req.user.id);
    }
    query += " ORDER BY l.created_at DESC";
    res.json(db.prepare(query).all(...params));
  });

  app.post("/api/lessons-management", authenticate(["admin", "teacher"]), upload.fields([{ name: 'image', maxCount: 1 }, { name: 'audio', maxCount: 1 }]), (req: any, res) => {
    const { title, slug, short_description, full_content, category_id, video_link, status, teacher_id } = req.body;
    const image = req.files['image']?.[0]?.filename ? `/uploads/${req.files['image'][0].filename}` : req.body.featured_image;
    const audio = req.files['audio']?.[0]?.filename ? `/uploads/${req.files['audio'][0].filename}` : null;
    
    const finalTeacherId = req.user.role === "admin" ? teacher_id : req.user.id;

    try {
      db.prepare(`
        INSERT INTO lessons (title, slug, short_description, full_content, category_id, featured_image, audio_file, video_link, status, teacher_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(title, slug, short_description, full_content, category_id, image, audio, video_link, status || 'published', finalTeacherId);
      res.json({ success: true });
    } catch (err) {
      res.status(400).json({ error: "Slug must be unique" });
    }
  });

  app.put("/api/lessons-management/:id", authenticate(["admin", "teacher"]), upload.fields([{ name: 'image', maxCount: 1 }, { name: 'audio', maxCount: 1 }]), (req: any, res) => {
    const { title, slug, short_description, full_content, category_id, video_link, status, teacher_id } = req.body;
    const image = req.files['image']?.[0]?.filename ? `/uploads/${req.files['image'][0].filename}` : req.body.featured_image;
    const audio = req.files['audio']?.[0]?.filename ? `/uploads/${req.files['audio'][0].filename}` : req.body.audio_file;

    // Check ownership if teacher
    if (req.user.role === "teacher") {
      const lesson = db.prepare("SELECT teacher_id FROM lessons WHERE id = ?").get(req.params.id) as any;
      if (lesson.teacher_id !== req.user.id) return res.status(403).json({ error: "Forbidden" });
    }

    const finalTeacherId = req.user.role === "admin" ? teacher_id : req.user.id;

    try {
      db.prepare(`
        UPDATE lessons SET title=?, slug=?, short_description=?, full_content=?, category_id=?, featured_image=?, audio_file=?, video_link=?, status=?, teacher_id=?, updated_at=CURRENT_TIMESTAMP
        WHERE id=?
      `).run(title, slug, short_description, full_content, category_id, image, audio, video_link, status, finalTeacherId, req.params.id);
      res.json({ success: true });
    } catch (err) {
      res.status(400).json({ error: "Slug must be unique or invalid data" });
    }
  });

  app.delete("/api/lessons-management/:id", authenticate(["admin", "teacher"]), (req: any, res) => {
    if (req.user.role === "teacher") {
      const lesson = db.prepare("SELECT teacher_id FROM lessons WHERE id = ?").get(req.params.id) as any;
      if (lesson.teacher_id !== req.user.id) return res.status(403).json({ error: "Forbidden" });
    }
    db.prepare("DELETE FROM lessons WHERE id = ?").run(req.params.id);
    res.json({ success: true });
  });

  // --- Student Progress ---
  app.get("/api/student/progress", authenticate(["student"]), (req: any, res) => {
    const progress = db.prepare(`
      SELECT sp.*, l.title as lesson_title, l.slug as lesson_slug 
      FROM student_progress sp 
      JOIN lessons l ON sp.lesson_id = l.id 
      WHERE sp.student_id = ?
    `).all(req.user.id);
    res.json(progress);
  });

  app.post("/api/student/progress/:lessonId", authenticate(["student"]), (req: any, res) => {
    const { completed } = req.body;
    db.prepare(`
      INSERT INTO student_progress (student_id, lesson_id, completed) 
      VALUES (?, ?, ?) 
      ON CONFLICT(student_id, lesson_id) DO UPDATE SET completed = excluded.completed, last_accessed = CURRENT_TIMESTAMP
    `).run(req.user.id, req.params.lessonId, completed ? 1 : 0);
    res.json({ success: true });
  });

  // --- Messages Management ---
  app.get("/api/admin/messages", authenticate(["admin"]), (req, res) => {
    res.json(db.prepare("SELECT * FROM contact_messages ORDER BY created_at DESC").all());
  });

  app.patch("/api/admin/messages/:id/read", authenticate(["admin"]), (req, res) => {
    db.prepare("UPDATE contact_messages SET is_read = 1 WHERE id = ?").run(req.params.id);
    res.json({ success: true });
  });

  // --- Blog Management ---
  app.get("/api/blogs", (req, res) => {
    res.json(db.prepare("SELECT * FROM blogs ORDER BY created_at DESC").all());
  });

  app.post("/api/admin/blogs", authenticate(["admin"]), upload.single('image'), (req: any, res) => {
    const { title, slug, content, category } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;
    try {
      db.prepare("INSERT INTO blogs (title, slug, content, category, image) VALUES (?, ?, ?, ?, ?)").run(title, slug, content, category, image);
      res.json({ success: true });
    } catch (err) {
      res.status(400).json({ error: "Slug must be unique" });
    }
  });

  app.put("/api/admin/blogs/:id", authenticate(["admin"]), upload.single('image'), (req: any, res) => {
    const { title, slug, content, category } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image;
    try {
      db.prepare("UPDATE blogs SET title=?, slug=?, content=?, category=?, image=? WHERE id=?").run(title, slug, content, category, image, req.params.id);
      res.json({ success: true });
    } catch (err) {
      res.status(400).json({ error: "Slug must be unique or invalid data" });
    }
  });

  app.delete("/api/admin/blogs/:id", authenticate(["admin"]), (req, res) => {
    db.prepare("DELETE FROM blogs WHERE id = ?").run(req.params.id);
    res.json({ success: true });
  });

  // --- Specialized Courses Management ---
  app.get("/api/specialized-courses", (req, res) => {
    res.json(db.prepare("SELECT * FROM specialized_courses ORDER BY created_at ASC").all());
  });

  app.post("/api/admin/specialized-courses", authenticate(["admin"]), (req, res) => {
    const { title, slug, description, meta_title, meta_description, hero_title, hero_subtitle, features, what_you_will_learn, curriculum, faq, icon_name, color_class } = req.body;
    try {
      db.prepare(`
        INSERT INTO specialized_courses (title, slug, description, meta_title, meta_description, hero_title, hero_subtitle, features, what_you_will_learn, curriculum, faq, icon_name, color_class) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(title, slug, description, meta_title, meta_description, hero_title, hero_subtitle, features, what_you_will_learn, curriculum, faq, icon_name, color_class);
      res.json({ success: true });
    } catch (err) {
      res.status(400).json({ error: "Slug must be unique" });
    }
  });

  app.put("/api/admin/specialized-courses/:id", authenticate(["admin"]), (req, res) => {
    const { title, slug, description, meta_title, meta_description, hero_title, hero_subtitle, features, what_you_will_learn, curriculum, faq, icon_name, color_class } = req.body;
    try {
      db.prepare(`
        UPDATE specialized_courses 
        SET title=?, slug=?, description=?, meta_title=?, meta_description=?, hero_title=?, hero_subtitle=?, features=?, what_you_will_learn=?, curriculum=?, faq=?, icon_name=?, color_class=? 
        WHERE id=?
      `).run(title, slug, description, meta_title, meta_description, hero_title, hero_subtitle, features, what_you_will_learn, curriculum, faq, icon_name, color_class, req.params.id);
      res.json({ success: true });
    } catch (err) {
      res.status(400).json({ error: "Slug must be unique or invalid data" });
    }
  });

  app.delete("/api/admin/specialized-courses/:id", authenticate(["admin"]), (req, res) => {
    db.prepare("DELETE FROM specialized_courses WHERE id = ?").run(req.params.id);
    res.json({ success: true });
  });

  // --- General Media Management ---
  app.post("/api/admin/upload", authenticate(["admin"]), upload.single('file'), (req: any, res) => {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });
    res.json({ url: `/uploads/${req.file.filename}`, filename: req.file.filename });
  });

  app.get("/api/admin/media", authenticate(["admin"]), (req, res) => {
    const files = fs.readdirSync(uploadsDir);
    res.json(files.map(f => ({ name: f, url: `/uploads/${f}` })));
  });

  app.delete("/api/admin/media/:filename", authenticate(["admin"]), (req, res) => {
    const filePath = path.join(uploadsDir, req.params.filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      res.json({ success: true });
    } else {
      res.status(404).json({ error: "File not found" });
    }
  });

  // --- Fees Management ---
  app.get("/api/fees-plans", (req, res) => {
    res.json(db.prepare("SELECT * FROM fees_plans ORDER BY display_order ASC").all());
  });

  app.get("/api/fees-faqs", (req, res) => {
    res.json(db.prepare("SELECT * FROM fees_faqs ORDER BY display_order ASC").all());
  });

  app.post("/api/admin/fees-plans", authenticate(["admin"]), (req, res) => {
    const { name, classes, price_30, price_45, per_class_30, per_class_45, features, popular, display_order } = req.body;
    db.prepare(`
      INSERT INTO fees_plans (name, classes, price_30, price_45, per_class_30, per_class_45, features, popular, display_order) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(name, classes, price_30, price_45, per_class_30, per_class_45, features, popular, display_order);
    res.json({ success: true });
  });

  app.put("/api/admin/fees-plans/:id", authenticate(["admin"]), (req, res) => {
    const { name, classes, price_30, price_45, per_class_30, per_class_45, features, popular, display_order } = req.body;
    db.prepare(`
      UPDATE fees_plans 
      SET name=?, classes=?, price_30=?, price_45=?, per_class_30=?, per_class_45=?, features=?, popular=?, display_order=? 
      WHERE id=?
    `).run(name, classes, price_30, price_45, per_class_30, per_class_45, features, popular, display_order, req.params.id);
    res.json({ success: true });
  });

  app.delete("/api/admin/fees-plans/:id", authenticate(["admin"]), (req, res) => {
    db.prepare("DELETE FROM fees_plans WHERE id = ?").run(req.params.id);
    res.json({ success: true });
  });

  app.post("/api/admin/fees-faqs", authenticate(["admin"]), (req, res) => {
    const { question, answer, display_order } = req.body;
    db.prepare("INSERT INTO fees_faqs (question, answer, display_order) VALUES (?, ?, ?)").run(question, answer, display_order);
    res.json({ success: true });
  });

  app.put("/api/admin/fees-faqs/:id", authenticate(["admin"]), (req, res) => {
    const { question, answer, display_order } = req.body;
    db.prepare("UPDATE fees_faqs SET question=?, answer=?, display_order=? WHERE id=?").run(question, answer, display_order, req.params.id);
    res.json({ success: true });
  });

  app.delete("/api/admin/fees-faqs/:id", authenticate(["admin"]), (req, res) => {
    db.prepare("DELETE FROM fees_faqs WHERE id = ?").run(req.params.id);
    res.json({ success: true });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({ server: { middlewareMode: true }, appType: "spa" });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), "dist")));
    app.get("*", (req, res) => res.sendFile(path.join(process.cwd(), "dist", "index.html")));
  }

  app.listen(PORT, "0.0.0.0", () => console.log(`Server running on http://localhost:${PORT}`));
}

startServer();
