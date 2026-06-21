/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation, useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Menu, 
  X, 
  ChevronRight, 
  Play, 
  Mail, 
  Info, 
  Home,
  Book,
  ArrowRight,
  Music,
  Video,
  Lock,
  User,
  UserPlus,
  CheckCircle,
  LayoutDashboard,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  ClipboardList,
  UserCheck,
  Calendar,
  Volume2,
  Moon,
  Sun,
  GraduationCap,
  Users,
  Star,
  Clock,
  ShieldCheck,
  Globe,
  BarChart3,
  Search,
  MessageSquare,
  Award
} from 'lucide-react';
import AdminPanel from './components/AdminPanel';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import AiAssistant from './components/AiAssistant';
import { ArabicCoursePage, HifzCoursePage, IslamicStudiesPage, KidsCoursePage, TafseerCoursePage, TajweedCoursePage, NooraniQaidaPageUpdate, QuranClassesCanadaPage, QuranClassesUKPage, QuranClassesUSAPage, QuranClassesLadiesPage, QuranClassesAustraliaPage, QuranClassesNearMePage } from './components/NewPages';
import { BlogListingPage, BlogPostPage } from './components/BlogPages';
import FeesSchedulePage from './components/FeesSchedulePage';

import { countries, timeZones } from './constants/data';

// Types
interface User {
  username: string;
  role: 'admin' | 'teacher' | 'student';
}
interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
}

interface Lesson {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  full_content: string;
  featured_image: string;
  audio_file?: string;
  video_link?: string;
  category_name: string;
  category_slug: string;
  created_at: string;
}

interface SpecializedCourse {
  id: number;
  title: string;
  slug: string;
  description: string;
  meta_title?: string;
  meta_description?: string;
  hero_title?: string;
  hero_subtitle?: string;
  features: string; // JSON string
  what_you_will_learn?: string; // JSON string
  curriculum?: string; // JSON string
  faq?: string; // JSON string
  icon_name: string;
  color_class: string;
}

interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  category: string;
  image?: string;
  created_at: string;
}

// --- Icons & Assets ---
const QuranLogo = ({ className, size = 32 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 10C42 10 35 14 31 20C34 18 38 17 42 17C53 17 62 26 62 37C62 42 60 47 57 51C65 48 71 40 71 31C71 19 62 10 50 10Z" fill="#D4AF37" />
    <path d="M47 50L45 45M50 52V46M53 50L55 45" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M50 85C35 85 15 75 10 65L45 55C48 55 50 58 50 60V85Z" fill="#06402B" />
    <path d="M50 82C38 82 20 73 15 65L45 58C48 58 50 60 50 62V82Z" fill="#27A265" />
    <path d="M50 85C65 85 85 75 90 65L55 55C52 55 50 58 50 60V85Z" fill="#06402B" />
    <path d="M50 82C62 82 80 73 85 65L55 58C52 58 50 60 50 62V82Z" fill="#27A265" />
    <path d="M20 90C35 95 65 95 80 90" stroke="#06402B" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// --- Sub-Components (Defined OUTSIDE to prevent focus loss) ---

const LoginPage = ({ loginForm, setLoginForm, handleLogin, authError, isSubmitting }: any) => (
  <div className="min-h-[80vh] flex items-center justify-center px-4">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-12 rounded-3xl shadow-2xl border border-slate-100 w-full max-w-md"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-emerald-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-emerald-700/20">
          <Lock size={32} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 font-serif">Welcome Back</h2>
        <p className="text-slate-500 text-sm font-sans">Access your account with username or email</p>
      </div>
      <form onSubmit={handleLogin} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-widest font-sans">Username or Email</label>
          <input 
            required
            type="text" 
            value={loginForm.username}
            onChange={e => setLoginForm({...loginForm, username: e.target.value})}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-all font-sans text-sm"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-widest font-sans">Password</label>
          <input 
            required
            type="password" 
            value={loginForm.password}
            onChange={e => setLoginForm({...loginForm, password: e.target.value})}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-all font-sans"
          />
        </div>
        {authError && <p className={`text-sm text-center font-medium font-sans ${authError.includes('successful') ? 'text-emerald-700' : 'text-red-500'}`}>{authError}</p>}
        <button 
          disabled={isSubmitting}
          className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg font-sans uppercase tracking-widest text-xs ${
            isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-emerald-700/20'
          }`}
        >
          {isSubmitting ? 'Processing...' : 'Sign In'}
        </button>
        <p className="text-center text-sm text-slate-500 font-sans">
          Don't have an account? <Link to="/register" className="text-emerald-700 font-bold hover:underline">Register as Student</Link>
        </p>
      </form>
    </motion.div>
  </div>
);

const RegisterPage = ({ registerForm, setRegisterForm, handleRegister, authError, isSubmitting, categories }: any) => (
  <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-slate-50">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl border border-slate-100 w-full max-w-2xl relative overflow-hidden"
    >
      {/* Urdu Calligraphy Accents */}
      <div className="absolute top-2 left-4 text-emerald-700/10 text-3xl font-serif select-none pointer-events-none">
        بسم اللہ
      </div>
      <div className="absolute top-2 right-4 text-emerald-700/10 text-3xl font-serif select-none pointer-events-none">
        الرحیم
      </div>

      <div className="text-center mb-8">
        <div className="text-emerald-700 text-2xl mb-2 font-serif" dir="rtl">
          بسم اللہ الرحمن الرحیم
        </div>
        <div className="w-14 h-14 bg-emerald-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-3 shadow-lg shadow-emerald-700/20">
          <UserPlus size={28} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 font-serif">Book Your Free Trial</h2>
        <p className="text-slate-500 text-xs font-sans">Start your Quranic journey today with two 100% free classes</p>
      </div>

      <form onSubmit={handleRegister} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-widest font-sans">Student Name*</label>
            <input 
              required
              type="text" 
              placeholder="Full Name"
              value={registerForm.firstName}
              onChange={e => {
                const name = e.target.value;
                setRegisterForm({...registerForm, firstName: name, username: name.replace(/\s+/g, '').toLowerCase() + Math.floor(Math.random() * 100)});
              }}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-all font-sans text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-widest font-sans">Username (Auto-generated)</label>
            <input 
              required
              type="text" 
              placeholder="username"
              value={registerForm.username}
              onChange={e => setRegisterForm({...registerForm, username: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-all font-sans text-sm bg-slate-50"
            />
            <p className="text-[10px] text-slate-400">Save this or use your email to log in.</p>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-widest font-sans">Email Address*</label>
            <input 
              required
              type="email" 
              placeholder="Email Address"
              value={registerForm.email}
              onChange={e => setRegisterForm({...registerForm, email: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-all font-sans text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-widest font-sans">Phone #*</label>
            <div className="flex gap-2">
              <select 
                required
                value={registerForm.countryCode}
                onChange={e => setRegisterForm({...registerForm, countryCode: e.target.value})}
                className="w-1/3 px-3 py-3 rounded-xl border border-slate-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-all font-sans text-sm bg-white"
              >
                {countries.map(c => (
                  <option key={c.name} value={c.code}>{c.name} ({c.code})</option>
                ))}
              </select>
              <input 
                required
                type="tel" 
                placeholder="555-000-0000"
                value={registerForm.phone}
                onChange={e => setRegisterForm({...registerForm, phone: e.target.value})}
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-all font-sans text-sm"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-widest font-sans">Country*</label>
            <select 
              required
              value={registerForm.country}
              onChange={e => {
                const selectedCountry = countries.find(c => c.name === e.target.value);
                setRegisterForm({
                  ...registerForm, 
                  country: e.target.value,
                  countryCode: selectedCountry ? selectedCountry.code : registerForm.countryCode
                });
              }}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-all font-sans text-sm bg-white"
            >
              <option value="">Select Country</option>
              {countries.map(c => (
                <option key={c.name} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-widest font-sans">City*</label>
            <input 
              required
              type="text" 
              placeholder="City"
              value={registerForm.city}
              onChange={e => setRegisterForm({...registerForm, city: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-all font-sans text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-widest font-sans">Age Group*</label>
            <select 
              required
              value={registerForm.ageGroup}
              onChange={e => setRegisterForm({...registerForm, ageGroup: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-all font-sans text-sm"
            >
              <option value="">Select Age Group</option>
              <option value="kids">Kids (4-12)</option>
              <option value="teenagers">Teenagers (13-19)</option>
              <option value="adults">Adults (20+)</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-widest font-sans">Time Zone*</label>
            <select 
              required
              value={registerForm.timeZone}
              onChange={e => setRegisterForm({...registerForm, timeZone: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-all font-sans text-sm bg-white"
            >
              <option value="">Select Time Zone</option>
              {timeZones.map(tz => (
                <option key={tz} value={tz}>{tz}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-widest font-sans">Courses Interested In*</label>
            <select 
              required
              value={registerForm.program}
              onChange={e => setRegisterForm({...registerForm, program: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-all font-sans text-sm bg-white"
            >
              <option value="">Select a Course</option>
              {categories.map((cat: any) => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-widest font-sans">Preferred Schedule*</label>
          <select 
            required
            value={registerForm.preferredDays}
            onChange={e => setRegisterForm({...registerForm, preferredDays: e.target.value})}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-all font-sans text-sm bg-white"
          >
            <option value="">Select Preferred Schedule</option>
            <option value="weekends">Weekends Only</option>
            <option value="weekdays">Weekdays Only</option>
            <option value="evenings">Evenings (After 5 PM)</option>
            <option value="mornings">Mornings (Before 12 PM)</option>
            <option value="flexible">Flexible Schedule</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-widest font-sans">Choose Password*</label>
          <input 
            required
            type="password" 
            placeholder="••••••••"
            value={registerForm.password}
            onChange={e => setRegisterForm({...registerForm, password: e.target.value})}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-all font-sans text-sm"
          />
        </div>

        {authError && <p className="text-red-600 text-xs font-bold text-center uppercase tracking-widest">{authError}</p>}

        <button 
          disabled={isSubmitting}
          className="w-full py-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold uppercase tracking-widest transition-all disabled:opacity-50 shadow-xl shadow-emerald-700/20"
        >
          {isSubmitting ? 'Processing...' : 'Book My Two Free Trial Classes'}
        </button>

        <div className="text-center mt-6">
          <div className="text-emerald-800/60 text-sm font-serif mb-4" dir="rtl">
            لَا إِلٰهَ إِلَّا اللهُ مُحَمَّدٌ رَسُولُ اللهِ
          </div>
          <p className="text-sm text-slate-500 font-sans">
            Already have an account? <Link to="/login" className="text-emerald-700 font-bold hover:underline">Login</Link>
          </p>
        </div>
      </form>
    </motion.div>
  </div>
);

const Nav = ({ user, isMenuOpen, setIsMenuOpen }: any) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="w-full">
      {/* Urgency Bar */}
      <div className="bg-linear-to-r from-forest to-forest-mid py-1.5 px-4 text-center relative z-[400]">
        <p className="text-[9px] sm:text-[11px] text-white/90 font-medium tracking-wide flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-light animate-pulse" />
          Limited enrollment open this month — 
          <Link to="/register" className="text-gold-light font-bold border-b border-gold-light/40 hover:border-gold-light transition-colors ml-1">
            Claim your TWO FREE trial Quran classes today →
          </Link>
        </p>
      </div>

      {/* Main Nav */}
      <nav className={`fixed left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled ? 'top-0 bg-white/97 backdrop-blur-xl shadow-sm h-16' : 'top-9 sm:top-10 bg-white/97 backdrop-blur-xl h-20'
      } border-b border-forest/10 flex items-center justify-between px-4 md:px-[5%]`}>
        <Link to="/" className="flex items-center gap-2 sm:gap-2.5 cursor-pointer group shrink-0">
          <QuranLogo size={44} className="group-hover:scale-105 transition-transform" />
          <div className="flex flex-col leading-[1.05]">
            <span className="font-serif text-[9px] md:text-[12px] font-black text-forest uppercase tracking-[0.05em]">My Quran</span>
            <span className="font-serif text-[9px] md:text-[12px] font-black text-forest uppercase tracking-[0.05em]">Guide</span>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {[
            { id: '/', label: 'Home' },
            { id: '/lessons', label: 'Courses' },
            { id: '/fees-schedule', label: 'Fees & Schedule' },
            { id: '/blogs', label: 'Blog' },
            { id: '/about', label: 'About Us' },
            { id: '/contact', label: 'Contact' },
          ].map((item) => (
            <Link
              key={item.id}
              to={item.id}
              className={`text-[12px] font-bold tracking-tight transition-colors ${
                isActive(item.id) ? 'text-forest' : 'text-slate-500 hover:text-forest'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="h-4 w-px bg-forest/10 mx-1" />
          {user ? (
            <Link
              to="/dashboard"
              className="flex items-center gap-2 px-4 py-2 bg-forest text-white rounded-lg text-[11px] font-bold hover:bg-forest-mid transition-all shadow-lg shadow-forest/20"
            >
              <LayoutDashboard size={12} /> Dashboard
            </Link>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 border border-forest/10 text-[12px] font-bold text-forest rounded-lg hover:bg-forest/5 hover:border-forest/20 transition-all"
            >
              Login
            </Link>
          )}
          <Link 
            to="/register"
            className="bg-forest text-white px-5 py-2 rounded-lg text-[12px] font-bold shadow-lg shadow-forest/20 hover:bg-forest-mid transition-all"
          >
            Free Trial Classes
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-forest p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-20 bg-white pt-32 px-6 lg:hidden"
          >
            <div className="space-y-6">
              {[
                { id: '/', label: 'Home' },
                { id: '/lessons', label: 'Courses' },
                { id: '/fees-schedule', label: 'Fees & Schedule' },
                { id: '/blogs', label: 'Blog' },
                { id: '/about', label: 'About Us' },
                { id: '/contact', label: 'Contact' },
              ].map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left text-xl font-bold text-forest uppercase tracking-widest border-b border-forest/5 pb-4"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <Link 
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-4 border-2 border-forest text-forest rounded-xl font-bold text-center uppercase tracking-widest"
                >
                  Login
                </Link>
                <Link 
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-4 bg-forest text-white rounded-xl font-bold text-center uppercase tracking-widest shadow-xl shadow-forest/20"
                >
                  Free Trial Classes
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-[#0C1A12] text-white/40 py-16">
    <div className="max-w-7xl mx-auto px-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 cursor-pointer group">
            <QuranLogo size={48} className="group-hover:scale-105 transition-transform" />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl font-bold text-[#27A265]">My Quran</span>
              <span className="font-serif text-xl font-bold text-[#D4AF37]">Guide</span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Live 1-on-1 online Quran classes with certified tutors. Trusted by families across the USA, UK, Canada, Australia and 25+ countries.
          </p>
        </div>
        
        <div>
          <h3 className="text-white/60 font-bold uppercase tracking-widest text-[11px] mb-8">Courses</h3>
          <ul className="space-y-3 text-[13px] font-medium">
            <li><Link to="/course/noorani-qaida" className="hover:text-gold-light transition-colors">Noorani Qaida</Link></li>
            <li><Link to="/course/tajweed-course" className="hover:text-gold-light transition-colors">Quran with Tajweed</Link></li>
            <li><Link to="/course/hifz-course" className="hover:text-gold-light transition-colors">Hifz / Memorization</Link></li>
            <li><Link to="/course/quran-for-kids" className="hover:text-gold-light transition-colors">Quran for Kids</Link></li>
            <li><Link to="/course/tafseer-course" className="hover:text-gold-light transition-colors">Tafseer Online</Link></li>
            <li><Link to="/course/islamic-studies" className="hover:text-gold-light transition-colors">Islamic Studies</Link></li>
            <li><Link to="/course/arabic-course" className="hover:text-gold-light transition-colors">Arabic Language</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white/60 font-bold uppercase tracking-widest text-[11px] mb-8">Locations</h3>
          <ul className="space-y-3 text-[13px] font-medium">
            <li><Link to="/course/quran-classes-usa" className="hover:text-gold-light transition-colors">Quran Classes USA</Link></li>
            <li><Link to="/course/quran-classes-uk" className="hover:text-gold-light transition-colors">Quran Classes UK</Link></li>
            <li><Link to="/course/quran-classes-canada" className="hover:text-gold-light transition-colors">Quran Classes Canada</Link></li>
            <li><Link to="/course/quran-classes-australia" className="hover:text-gold-light transition-colors">Quran Classes Australia</Link></li>
            <li><Link to="/course/quran-classes-near-me" className="hover:text-gold-light transition-colors">Quran Classes Near Me</Link></li>
            <li><Link to="/course/quran-classes-for-ladies" className="hover:text-gold-light transition-colors">Classes for Ladies</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white/60 font-bold uppercase tracking-widest text-[11px] mb-8">Company</h3>
          <ul className="space-y-3 text-[13px] font-medium">
            <li><Link to="/about" className="hover:text-gold-light transition-colors">About Us</Link></li>
            <li><Link to="/fees-schedule" className="hover:text-gold-light transition-colors">Fees & Schedule</Link></li>
            <li><Link to="/blogs" className="hover:text-gold-light transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-gold-light transition-colors">Contact Us</Link></li>
            <li><Link to="/register" className="hover:text-gold-light transition-colors">Free Trial Class</Link></li>
            <li><Link to="/sitemap" className="hover:text-gold-light transition-colors">Sitemap</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-medium uppercase tracking-widest">
        <div className="flex flex-col gap-1">
          <span>© {new Date().getFullYear()} My Quran Guide. All rights reserved.</span>
          <span className="text-[9px] text-white/20">Developed by Muhammad Abdullah</span>
        </div>
        <div className="flex gap-6">
          <button className="hover:text-gold-light">Privacy Policy</button>
          <button className="hover:text-gold-light">Terms of Service</button>
          <Link to="/sitemap" className="hover:text-gold-light">Sitemap</Link>
          <Link to="/blogs" className="hover:text-gold-light">Blog</Link>
        </div>
      </div>
    </div>
  </footer>
);

const SitemapPage = () => {
  const categories = [
    {
      title: "Main Pages",
      links: [
        { label: "Home", url: "/" },
        { label: "About Us", url: "/about" },
        { label: "Fees & Schedule", url: "/fees-schedule" },
        { label: "Contact Us", url: "/contact" },
        { label: "Register / Free Trial", url: "/register" },
        { label: "Blog", url: "/blogs" },
      ]
    },
    {
      title: "Course Pages",
      links: [
        { label: "Noorani Qaida", url: "/course/noorani-qaida" },
        { label: "Quran with Tajweed", url: "/course/tajweed-course" },
        { label: "Hifz / Memorization", url: "/course/hifz-course" },
        { label: "Quran for Kids", url: "/course/quran-for-kids" },
        { label: "Tafseer Online", url: "/course/tafseer-course" },
        { label: "Islamic Studies", url: "/course/islamic-studies" },
        { label: "Arabic Language", url: "/course/arabic-course" },
      ]
    },
    {
      title: "Location Pages",
      links: [
        { label: "Quran Classes USA", url: "/course/quran-classes-usa" },
        { label: "Quran Classes UK", url: "/course/quran-classes-uk" },
        { label: "Quran Classes Canada", url: "/course/quran-classes-canada" },
        { label: "Quran Classes Australia", url: "/course/quran-classes-australia" },
        { label: "Quran Classes Near Me", url: "/course/quran-classes-near-me" },
        { label: "Quran Classes for Ladies", url: "/course/quran-classes-for-ladies" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-[5%]">
        <div className="mb-16">
          <div className="flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            All Pages
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-6">Sitemap — My Quran Guide</h1>
          <p className="text-muted text-sm max-w-2xl leading-relaxed">
            Every page on the My Quran Guide website — organized by section. Use this to find any course, location page, or resource quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((cat, i) => (
            <div key={i} className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-forest border-b-2 border-gold/30 pb-3 inline-block">
                {cat.title}
              </h2>
              <ul className="space-y-4">
                {cat.links.map((link, j) => (
                  <li key={j}>
                    <Link to={link.url} className="group block">
                      <span className="block text-sm font-bold text-ink group-hover:text-forest transition-colors">
                        {link.label}
                      </span>
                      <span className="block text-[10px] text-muted font-mono mt-1">
                        https://myquranguide.com{link.url}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-forest rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg mb-1">XML Sitemap for Search Engines</h3>
            <p className="text-white/50 text-xs">The machine-readable sitemap is available for Google and other search engines.</p>
          </div>
          <a 
            href="/sitemap.xml" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gold text-ink font-bold text-sm rounded-xl hover:bg-gold-light transition-all whitespace-nowrap"
          >
            View sitemap.xml →
          </a>
        </div>
      </div>
    </div>
  );
};

const BlogDetailWrapper = ({ blogs }: { blogs: Blog[] }) => {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);
  if (!blog) return <Navigate to="/blogs" />;
  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/blogs" className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:gap-3 transition-all">
          <ArrowRight className="rotate-180" size={20} /> Back to Blogs
        </Link>
        <div className="space-y-8">
          {blog.image && (
            <img src={blog.image} className="w-full h-[400px] object-cover rounded-3xl shadow-2xl" alt={blog.title} referrerPolicy="no-referrer" />
          )}
          <div className="flex items-center gap-4">
            <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest">{blog.category}</span>
            <span className="text-slate-400 text-sm">{new Date(blog.created_at).toLocaleDateString()}</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 leading-tight">{blog.title}</h1>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>
    </div>
  );
};

const LessonDetailWrapper = ({ lessons, user }: { lessons: Lesson[], user: User | null }) => {
  const { slug } = useParams();
  const lesson = lessons.find(l => l.slug === slug);
  if (!lesson) return <Navigate to="/lessons" />;
  return <LessonDetail lesson={lesson} user={user} />;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const FeesSchedulePageWrapper = () => {
  return <FeesSchedulePage />;
};

const RegisterPageWrapper = (props: any) => {
  return <RegisterPage {...props} />;
};

const HomePageWrapper = (props: any) => {
  return <HomePage {...props} />;
};

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // SEO: Canonical Link management
    const canonicalUrl = `https://myquranguide.com${location.pathname === '/' ? '' : location.pathname}`;
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);
  }, [location.pathname]);

  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ 
    username: '', 
    password: '', 
    email: '', 
    firstName: '', 
    countryCode: '+1',
    phone: '', 
    teamsId: '', 
    country: '', 
    city: '', 
    ageGroup: '',
    timeZone: '',
    program: '', 
    preferredDays: '' 
  });
  const [authError, setAuthError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [specializedCourses, setSpecializedCourses] = useState<SpecializedCourse[]>([]);
  const [siteSettings, setSiteSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [catsRes, lessonsRes, blogsRes, coursesRes, settingsRes] = await Promise.all([
        fetch('/api/categories'),
        fetch('/api/lessons'),
        fetch('/api/blogs'),
        fetch('/api/specialized-courses'),
        fetch('/api/site-settings')
      ]);
      setCategories(await catsRes.json());
      setLessons(await lessonsRes.json());
      setBlogs(await blogsRes.json());
      setSpecializedCourses(await coursesRes.json());
      setSiteSettings(await settingsRes.json());
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Dynamic Meta Titles and Descriptions
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': "Online Quran Classes | Learn Quran Online from Certified Tutors",
      '/lessons': "Our Online Quran Courses | My Quran Guide — Tajweed, Hifz, Arabic & More",
      '/about': "About Us | My Quran Guide — Our Story, Mission & Team",
      '/contact': "Contact Us | My Quran Guide — Book Two Free Trial Classes",
      '/login': "Login | My Quran Guide — Access Your Academy Account",
      '/register': "Register | My Quran Guide — Book Your Two Free Trial Classes",
      '/dashboard': "Dashboard | My Quran Guide — Manage Your Classes",
      '/blogs': "Blog | My Quran Guide — Islamic Insights & Quran Learning Tips",
      '/fees': "Fees & Schedule | My Quran Guide — Transparent Pricing & Flexible Hours",
      '/course/noorani-qaida': "Noorani Qaida Course | My Quran Guide — Master Arabic Alphabet & Pronunciation",
      '/course/arabic-course': "Online Arabic Language Course | My Quran Guide — Learn Quranic Arabic for Beginners",
      '/course/hifz-course': "Online Quran Hifz Program | My Quran Guide — Memorize Quran with Certified Tutors",
      '/course/islamic-studies': "Online Islamic Studies for Kids | My Quran Guide — Learn Deen, Akhlaq & Sunnah",
      '/course/quran-for-kids': "Online Quran Classes for Kids | My Quran Guide — Fun & Engaging 1-on-1 Learning",
      '/course/tafseer-course': "Online Quran Tafseer Course | My Quran Guide — Understand the Quran Deeply",
      '/course/tajweed-course': "Online Quran Tajweed Course | My Quran Guide — Perfect Your Recitation",
      '/course/quran-classes-usa': "Online Quran Classes USA | My Quran Guide — Certified Tutors for All US Time Zones",
      '/course/quran-classes-uk': "Online Quran Classes UK | My Quran Guide — Learn Quran from Home in the UK",
      '/course/quran-classes-canada': "Online Quran Classes Canada | My Quran Guide — Professional Quran Teaching in Canada",
      '/course/quran-classes-australia': "Online Quran Classes Australia | My Quran Guide — Flexible Quran Learning for Australians",
      '/course/quran-classes-near-me': "Online Quran Classes Near Me | My Quran Guide — Global Online Quran Academy",
      '/course/quran-classes-for-ladies': "Online Quran Classes for Ladies | My Quran Guide — Female Quran Tutors Available"
    };

    const descriptions: Record<string, string> = {
      '/': "Join Online Quran Classes at MyQuranGuide. Learn with certified male & female tutors at your own pace. Tajweed, Hifz, Tafseer & more. Enroll now — free trial available!",
      '/fees': "View our transparent pricing plans and flexible scheduling options. No registration fees, no hidden costs. Pay monthly and start with two free trial classes.",
      '/lessons': "Explore our comprehensive online Quran courses. From Noorani Qaida for beginners to advanced Hifz and Tafseer programs. 1-on-1 live classes with expert certified tutors.",
      '/contact': "Get in touch with My Quran Guide. Book your two free trial classes today. We respond within 1–3 hours. Live 1-on-1 online Quran classes with certified tutors.",
      '/about': "Learn about My Quran Guide — founded by a Hafiz with a tech background to fix what online Quran education got wrong. Real certified tutors. Real results. Our story.",
      '/blogs': "Read the latest articles on Quran learning, Tajweed tips, and Islamic education from the experts at My Quran Guide.",
      '/course/noorani-qaida': "Master the Arabic alphabet and pronunciation with our Noorani Qaida course. Perfect for beginners and kids. Start your journey to fluent Quran reading today.",
      '/course/arabic-course': "Learn to read, write, and speak Arabic with our comprehensive online course. Focus on Quranic Arabic and modern communication. 1-on-1 live classes with expert tutors.",
      '/course/hifz-course': "Memorize the Holy Quran with our structured Hifz program. Certified tutors, personalized plans, and effective memorization techniques for all ages.",
      '/course/islamic-studies': "A complete Islamic education for children. Learn about Deen, Akhlaq, Sunnah, and Islamic history in a fun and engaging environment.",
      '/course/quran-for-kids': "Engaging and fun online Quran classes designed specifically for children. 1-on-1 sessions with patient tutors to build a lifelong love for the Quran.",
      '/course/tafseer-course': "Deepen your understanding of the Quran with our Tafseer course. Explore the meanings, context, and wisdom of the revelation with expert scholars.",
      '/course/tajweed-course': "Perfect your Quran recitation with our Tajweed course. Learn the rules of pronunciation, rhythm, and beauty from certified experts.",
      '/course/quran-classes-usa': "Certified online Quran tutors available for all US time zones. High-quality 1-on-1 Quran education for students across the United States.",
      '/course/quran-classes-uk': "Learn Quran online from the comfort of your home in the UK. Flexible scheduling and expert tutors tailored for British students.",
      '/course/quran-classes-canada': "Professional online Quran teaching for students in Canada. 1-on-1 live classes with certified tutors. Start your free trial today.",
      '/course/quran-classes-australia': "Flexible online Quran learning for students in Australia. Expert tutors available at convenient times for Australian time zones.",
      '/course/quran-classes-near-me': "The best online Quran classes accessible from anywhere in the world. Join our global academy for personalized 1-on-1 Quran education.",
      '/course/quran-classes-for-ladies': "Dedicated online Quran classes for women with female tutors. A comfortable and private learning environment for sisters of all ages."
    };

    const currentPath = location.pathname;
    if (titles[currentPath]) {
      document.title = titles[currentPath];
    }

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && descriptions[currentPath]) {
      metaDesc.setAttribute('content', descriptions[currentPath]);
    }

    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAuthError('');
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm)
      });
      const data = await res.json();
      if (data.token) {
        const userData = { username: data.username, role: data.role };
        setUser(userData);
        localStorage.setItem('admin_token', data.token);
        localStorage.setItem('user', JSON.stringify(userData));
        setAuthError('Login successful!');
        setTimeout(() => {
          navigate('/dashboard');
          setAuthError('');
        }, 1000);
      } else {
        setAuthError(data.error || 'Login failed');
      }
    } catch (err) {
      setAuthError('Server error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAuthError('');
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...registerForm,
          phone: `${registerForm.countryCode} ${registerForm.phone}`
        })
      });
      const data = await res.json();
      if (data.success) {
        setAuthError('Registration successful! Please login.');
        setTimeout(() => {
          navigate('/login');
          setAuthError('');
        }, 2000);
      } else {
        setAuthError(data.error || 'Registration failed');
      }
    } catch (err) {
      setAuthError('Server error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('admin_token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-cream font-sans text-ink selection:bg-forest/10 selection:text-forest">
      <ScrollToTop />
      <Nav user={user} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<HomePageWrapper siteSettings={siteSettings} />} />
            <Route path="/lessons" element={<LessonsPage />} />
            <Route path="/course/:slug" element={<LessonDetailWrapper lessons={lessons} user={user} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/fees-schedule" element={<FeesSchedulePageWrapper />} />
            <Route path="/fees" element={<Navigate to="/fees-schedule" replace />} />
            <Route path="/blogs" element={<BlogListingPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            
            {/* Course Routes */}
            <Route path="/course/noorani-qaida" element={<NooraniQaidaPageUpdate />} />
            <Route path="/course/arabic-course" element={<ArabicCoursePage />} />
            <Route path="/course/hifz-course" element={<HifzCoursePage />} />
            <Route path="/course/islamic-studies" element={<IslamicStudiesPage />} />
            <Route path="/course/quran-for-kids" element={<KidsCoursePage />} />
            <Route path="/course/tafseer-course" element={<TafseerCoursePage />} />
            <Route path="/course/tajweed-course" element={<TajweedCoursePage />} />
            <Route path="/course/quran-classes-canada" element={<QuranClassesCanadaPage />} />
            <Route path="/course/quran-classes-uk" element={<QuranClassesUKPage />} />
            <Route path="/course/quran-classes-usa" element={<QuranClassesUSAPage />} />
            <Route path="/course/quran-classes-for-ladies" element={<QuranClassesLadiesPage />} />
            <Route path="/course/quran-classes-australia" element={<QuranClassesAustraliaPage />} />
            <Route path="/course/quran-classes-near-me" element={<QuranClassesNearMePage />} />

            <Route path="/login" element={
              <LoginPage 
                loginForm={loginForm} 
                setLoginForm={setLoginForm} 
                handleLogin={handleLogin} 
                authError={authError} 
                isSubmitting={isSubmitting} 
              />
            } />
            <Route path="/register" element={
              <RegisterPageWrapper 
                registerForm={registerForm} 
                setRegisterForm={setRegisterForm} 
                handleRegister={handleRegister} 
                authError={authError} 
                isSubmitting={isSubmitting} 
                categories={categories}
              />
            } />
            
            <Route path="/dashboard" element={
              user ? (
                user.role === 'admin' ? <AdminPanel onLogout={handleLogout} onDataUpdate={fetchData} /> :
                user.role === 'teacher' ? <TeacherDashboard onLogout={handleLogout} /> :
                <StudentDashboard onLogout={handleLogout} onNavigate={(page, slug) => {
                  if (page === 'lesson-detail' && slug) navigate(`/course/${slug}`);
                  else navigate(`/${page}`);
                }} />
              ) : <Navigate to="/login" />
            } />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <AiAssistant userRole={user?.role} />
    </div>
  );
}

const HomePage = ({ siteSettings }: { siteSettings: Record<string, string> }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const navigate = useNavigate();

  return (
    <div className="space-y-0">
        <section className="min-h-screen flex items-center pt-32 pb-20 px-[5%] relative overflow-hidden bg-linear-to-br from-cream via-cream2 to-[#E8F4EE]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_55%_at_70%_40%,rgba(20,68,46,0.05)_0%,transparent_65%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_40%_at_85%_75%,rgba(201,152,42,0.07)_0%,transparent_60%)]" />
          </div>
          
          <div className="absolute right-[-2%] top-[8%] width-[46%] height-[84%] opacity-[0.035] pointer-events-none select-none">
            <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" stroke="#14442E" strokeWidth="1">
              <polygon points="60,5 115,32 115,88 60,115 5,88 5,32" />
              <polygon points="60,22 98,42 98,82 60,102 22,82 22,42" />
              <polygon points="60,38 82,50 82,74 60,86 38,74 38,50" />
              <line x1="60" y1="5" x2="60" y2="38" />
              <line x1="115" y1="32" x2="82" y2="50" />
              <line x1="115" y1="88" x2="82" y2="74" />
              <line x1="60" y1="115" x2="60" y2="86" />
              <line x1="5" y1="88" x2="38" y2="74" />
              <line x1="5" y1="32" x2="38" y2="50" />
            </svg>
          </div>

          <div className="absolute right-[4%] top-1/2 -translate-y-1/2 font-serif text-[clamp(8rem,15vw,18rem)] text-forest/5 leading-none pointer-events-none select-none hidden lg:block">
            بِسْمِ<br />اللَّهِ
          </div>

          <div className="relative z-10 max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-[clamp(2.5rem,8vw,5rem)] font-bold text-ink leading-[1.05] mb-8 tracking-tight"
            >
              {siteSettings.hero_title ? (
                <div dangerouslySetInnerHTML={{ __html: siteSettings.hero_title.replace(/\n/g, '<br />') }} />
              ) : (
                <>
                  <span className="italic text-forest">Live Online Quran Classes</span><br />
                  with <span className="text-gold">Certified Tutors</span><br />
                  <span className="text-forest-bright">— My Quran Guide</span>
                </>
              )}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-body leading-relaxed mb-10 max-w-xl font-light"
            >
              {siteSettings.hero_subtitle ? (
                <span dangerouslySetInnerHTML={{ __html: siteSettings.hero_subtitle.replace(/\n/g, '<br />') }} />
              ) : (
                <>Private, one-on-one Quran lessons for children and adults — taught by <strong>Certified teachers</strong> from the comfort of your home.</>
              )}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-linear-to-br from-gold/10 to-gold/5 border border-gold/25 rounded-lg px-5 py-3 text-gold font-semibold text-sm mb-10"
            >
              <span className="w-2 h-2 rounded-full bg-gold" /> 
              <span dangerouslySetInnerHTML={{ __html: siteSettings.hero_trial_text || 'First Two class is completely FREE — no credit card needed' }} />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link 
                to="/register"
                className="bg-linear-to-br from-forest to-forest-mid text-white px-10 py-5 rounded-lg font-bold tracking-wide shadow-2xl shadow-forest/30 hover:-translate-y-1 transition-all flex items-center gap-2 group"
              >
                Book My TWO FREE Trial Classes 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/lessons"
                className="bg-transparent border-2 border-forest/25 text-forest px-8 py-5 rounded-lg font-semibold hover:bg-forest/5 transition-all"
              >
                Explore All Programs
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-x-8 gap-y-4"
            >
              {[
                { text: 'Certified Tutors' },
                { text: 'Live 1-on-1 Only' },
                { text: 'All US Time Zones' },
                { text: '4.9/5 Rating' },
                { text: 'Two Free Classes' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-medium text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  {item.text}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="hidden lg:block absolute right-[5%] top-1/2 -translate-y-1/2 w-[40%] max-w-[500px]">
            {/* Removed the white box hero image as requested */}
          </div>
        </section>

        {/* Stats Bar */}
        <div className="bg-forest py-10 px-[5%] flex flex-wrap justify-around gap-8">
          {[
            { num: siteSettings.stats_students || '5,000+', lbl: 'Active Students' },
            { num: siteSettings.stats_tutors || '300+', lbl: 'Certified Tutors' },
            { num: siteSettings.stats_rating || '4.9', lbl: 'Average Rating', icon: true },
            { num: siteSettings.stats_experience || '10+', lbl: 'Years of Experience' },
            { num: siteSettings.stats_countries || '25+', lbl: 'Countries Served' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-light mb-1">
                {stat.num}{stat.icon && ' ★'}
              </div>
              <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest">{stat.lbl}</div>
            </div>
          ))}
        </div>

        {/* Why Us Section */}
        <section className="bg-ink py-24 px-[5%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-3 text-gold-light text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
                <img src="/assets/images/logo.svg" alt="My Quran Guide" className="w-5 h-5 object-contain" />
                Why My Quran Guide
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Why Thousands of Families Choose My Quran Guide Over Other Academies
              </h2>
              <p className="text-white/45 text-lg font-light mb-12 max-w-xl">
                At My Quran Guide, we believe every Muslim deserves access to world-class Quranic education — structured, certified, and built around your life.
              </p>

              <div className="space-y-0">
                {[
                  { title: 'Certified Tutors — Verified Chain of Transmission', desc: 'Every tutor holds verified certification with a direct chain of transmission to the Prophet ﷺ. Native Arabic speakers, Al-Azhar graduates, passing a rigorous 3-stage assessment.' },
                  { title: '100% Live 1-on-1 Classes — Zero Group Sessions', desc: 'No group classes. No pre-recorded videos. No distractions. Every student receives the tutor\'s complete and undivided attention for the full duration of every class.' },
                  { title: 'Structured Pathway — From Qaida to Hifz', desc: 'Clear 3-stage structure: Noorani Qaida → Recitation with Tajweed → Hifz or Tafseer. Students always know exactly where they are and where they\'re going.' },
                  { title: 'Real-Time Tajweed Correction Every Single Class', desc: 'Mistakes corrected the moment they occur — not after class. This builds accurate, permanent recitation habits that stay with your child for life.' },
                  { title: 'Flexible Scheduling — All USA Time Zones, 7 Days', desc: 'Morning in New York. Evening in Los Angeles. Weekends across all 50 states. Reschedule or cancel with 24 hours\' notice — no questions asked.' },
                  { title: 'Weekly Progress Reports for Parents', desc: 'Detailed written reports every week covering pronunciation accuracy, Tajweed rules mastered, objectives completed, and upcoming targets. Full transparency, every step.' },
                  { title: 'Free Trial Class — Zero Risk, Zero Commitment', desc: 'First class 100% free. No credit card. No commitment. We\'re confident that once you experience a My Quran Guide class, you won\'t want to go anywhere else.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 py-8 border-b border-white/5 last:border-0">
                    <div>
                      <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-32">
              <div className="bg-white/5 border border-gold/20 rounded-3xl p-12 text-center relative overflow-hidden">
                <div className="font-serif text-3xl sm:text-4xl text-gold-light leading-relaxed mb-8" dir="rtl">
                  خَيْرُكُمْ مَنْ تَعَلَّمَ<br />الْقُرْآنَ وَعَلَّمَهُ
                </div>
                <p className="text-white/45 italic leading-relaxed mb-4">
                  "The best among you are those who learn the Quran and teach it."
                </p>
                <cite className="block text-gold-light text-sm font-semibold not-italic">— Prophet Muhammad ﷺ | Sahih Bukhari</cite>
              </div>
              
            <div className="bg-gold/5 border border-gold/20 rounded-2xl p-6 flex gap-4 items-start">
                <p className="text-white/55 text-sm leading-relaxed">
                  Our classes are priced to be accessible because we work directly with tutors — no physical classrooms, no agency middlemen. Every dollar goes toward a qualified teacher and a better learning experience for your family.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-24 px-[5%] bg-cream">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-7 h-0.5 bg-gold" />
              Our Programs
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink mb-6">
              Online Quran Classes — Choose Your Program
            </h2>
            <p className="text-body text-lg font-light max-w-2xl mx-auto">
              Whether taking your very first step or advancing toward Hifz and certification — we have a dedicated program designed exactly for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                meta: 'Beginner · Ages 4+ · 3–6 months', 
                title: 'Noorani Qaida — Foundation Course for Beginners', 
                desc: 'The essential starting point for every Quran reader. Your certified tutor guides you through Arabic letters, pronunciation rules, vowel sounds, and word formation.',
                tags: ['Arabic Alphabet', 'Pronunciation', 'All Ages'],
                link: 'noorani-qaida'
              },
              { 
                meta: 'Intermediate · Ages 8+ · Ongoing', 
                title: 'Quran Recitation with Tajweed — Live Correction Every Class', 
                desc: 'Our most popular course. Master every rule of Tajweed with certified tutors who correct your recitation live in every session.',
                tags: ['All Tajweed Rules', 'Certified', 'Real-Time'],
                featured: true,
                link: 'tajweed-course'
              },
              { 
                meta: 'Intermediate–Advanced · All Ages', 
                title: 'Quran Memorization (Hifz) — Become Hafiz-e-Quran', 
                desc: 'A structured Hifz program with a custom memorization and revision schedule. Your dedicated tutor tracks daily progress and corrects Tajweed.',
                tags: ['Custom Plan', 'Daily Revision', 'Tracking'],
                link: 'hifz-course'
              },
              { 
                meta: 'Intermediate · Adults & Teens', 
                title: 'Quran Translation & Tafseer — Understand Every Verse', 
                desc: 'Go beyond recitation. Learn the meaning of every verse through word-by-word translation and classical Tafseer from authentic sources.',
                tags: ['Word-by-Word', 'Tafseer', 'Arabic Grammar'],
                link: 'tafseer-course'
              },
              { 
                meta: 'Beginner · Ages 4–15', 
                title: 'Quran Classes for Kids — Interactive & Engaging', 
                desc: 'Specialist children\'s tutors use age-appropriate methods that make every class genuinely enjoyable. Female tutors available.',
                tags: ['Ages 4–15', 'Female Tutors', 'Interactive'],
                link: 'kids-course'
              },
              { 
                meta: 'Advanced · Teens & Adults', 
                title: 'Islamic Studies & Duas — Complete Muslim Foundation', 
                desc: 'Complement your Quran education with a solid Islamic foundation — daily Duas, Pillars of Islam, Seerah, and essential prayers.',
                tags: ['Daily Duas', 'Seerah', 'Fiqh Basics'],
                link: 'islamic-studies'
              }
            ].map((course, i) => (
              <div 
                key={i} 
                className={`group relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 flex flex-col ${
                  course.featured 
                    ? 'bg-linear-to-br from-forest to-[#1E5C3A] border-transparent text-white' 
                    : 'bg-white border-forest/10 hover:border-forest/20 hover:shadow-xl'
                }`}
              >
                <div className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${course.featured ? 'text-gold-light' : 'text-forest'}`}>
                  {course.meta}
                </div>
                <h3 className="font-serif text-xl font-bold mb-4 leading-tight">{course.title}</h3>
                <p className={`text-sm leading-relaxed mb-6 flex-1 ${course.featured ? 'text-white/60' : 'text-body'}`}>
                  {course.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {course.tags.map((tag, j) => (
                    <span key={j} className={`text-[10px] font-semibold px-3 py-1 rounded-full border ${
                      course.featured 
                        ? 'bg-white/10 border-white/15 text-white/70' 
                        : 'bg-forest-pale border-forest/10 text-forest'
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  to={course.link ? `/course/${course.link}` : '/register'}
                  className={`inline-flex items-center gap-2 text-[13px] font-bold transition-all group-hover:gap-3 ${
                    course.featured ? 'text-gold-light' : 'text-forest'
                  }`}
                >
                  Enroll Free <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Learner Types Section */}
        <section className="py-24 px-[5%] bg-cream2">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-7 h-0.5 bg-gold" />
              For Every Learner
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink mb-6">
              Quran Classes Designed for Every Type of Learner
            </h2>
            <p className="text-body text-lg font-light max-w-2xl mx-auto">
              Every student arrives at the Quran from a different starting point. We serve learners of all ages and backgrounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Quran Classes for Children — Ages 4 to 12', desc: 'Children need patience and engagement. Our specialist tutors use interactive, age-appropriate methods that make every class enjoyable. Female tutors available for girls.' },
              { title: 'Quran Classes for Teenagers — Tajweed and Confidence', desc: 'Teenagers improve their Tajweed and recite with confidence. Our tutors build fluent, confident recitation that lasts a lifetime.' },
              { title: 'Quran Classes for Adults — Learn at Your Own Pace', desc: 'Busy schedules should never be a barrier. Our classes for adults are designed around your availability — early morning, late evening, or weekends.' },
              { title: 'Quran Learning for New Muslims & Reverts', desc: 'Beginning your Quran journey as a revert can feel overwhelming. Our tutors support new Muslims with patience and structured guidance.' }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-forest/10 rounded-2xl p-10 hover:shadow-lg transition-all">
                <h3 className="font-serif text-xl font-bold text-ink mb-4">{item.title}</h3>
                <p className="text-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tutors Section */}
        <section className="py-24 px-[5%] bg-cream">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
                <span className="w-7 h-0.5 bg-gold" />
                Our Quran Tutors
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink leading-tight mb-8">
                Certified, Experienced, Dedicated Tutors
              </h2>
              <p className="text-body text-lg font-light mb-10">
                The quality of a Quran education is defined entirely by the quality of the teacher. We hold our tutors to the highest possible standard.
              </p>

              <div className="space-y-0">
                {[
                  { num: '1', title: 'Certification Verified', desc: 'We verify the complete chain of transmission for every tutor\'s certification — from them back to the Prophet ﷺ.' },
                  { num: '2', title: 'Live Recitation Assessment', desc: 'Every applicant undergoes a live Quran recitation test evaluated by our senior resident scholars.' },
                  { num: '3', title: 'Teaching Methodology Test', desc: 'A full demonstration class assessed for clarity, patience, and effectiveness with Western learners.' },
                  { num: '4', title: 'English Communication Assessment', desc: 'Fluency test ensures every tutor can explain complex Tajweed rules in clear, simple English.' },
                  { num: '5', title: 'Full Background Screening', desc: 'Complete identity and background verification for student safeguarding. Only 1 in 8 applicants pass.' }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 py-6 border-b border-forest/10 last:border-0">
                    <div className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center text-sm font-bold shrink-0 mt-1">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-ink font-semibold mb-1">{step.title}</h4>
                      <p className="text-body text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-linear-to-br from-forest to-[#1A5538] rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-white/5" />
              <div className="relative z-10">
                <div className="text-gold-light text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Our Tutor Network</div>
                <h3 className="font-serif text-3xl font-bold mb-6 leading-tight">300+ Certified Tutors Ready to Teach</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-10">
                  Hand-selected from Al-Azhar and top Islamic universities worldwide. Native Arabic speakers. Expert in teaching Western students.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: '300+', lbl: 'Certified Tutors' },
                    { num: '100%', lbl: 'Certified' },
                    { num: '1:8', lbl: 'Application Pass Rate' },
                    { num: '.', lbl: 'Female Tutors Available', icon: true }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-6 text-center">
                      <div className="font-serif text-3xl font-bold text-gold-light mb-1">{stat.num}</div>
                      <div className="text-[10px] text-white/40 uppercase tracking-widest">{stat.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 px-[5%] bg-forest text-white">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 text-gold-light text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-7 h-0.5 bg-gold" />
              Simple Process
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
              Start Learning Quran Online in 4 Simple Steps
            </h2>
            <p className="text-white/45 text-lg font-light max-w-2xl mx-auto">
              Getting started takes less than 60 seconds. Here is exactly what happens next.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-0.5 bg-linear-to-r from-transparent via-gold/40 to-transparent z-0" />
            {[
              { num: '1', title: 'Book Your Free Trial', desc: 'Enter your email below — no payment, no commitment. Under 60 seconds.' },
              { num: '2', title: 'We Match Your Tutor', desc: 'Within 24 hours we personally match you with the ideal certified tutor based on age, level, and goals.' },
              { num: '3', title: 'Attend Live Class', desc: 'Join your 1-on-1 class live via Zoom or Skype from any device. Your tutor assesses and begins.' },
              { num: '4', title: 'Enroll & Progress', desc: 'Choose your plan, set your schedule, and begin your Quran journey. Most students see clear improvement within 4 weeks.' }
            ].map((step, i) => (
              <div key={i} className="text-center relative z-10 group">
                <div className="w-18 h-18 rounded-full bg-white/5 border-2 border-gold/30 flex items-center justify-center font-serif text-2xl font-bold text-gold-light mx-auto mb-6 group-hover:bg-gold/15 group-hover:border-gold transition-all duration-300">
                  {step.num}
                </div>
                <h4 className="text-lg font-semibold mb-3">{step.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-[5%] bg-cream2">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-7 h-0.5 bg-gold" />
              Real Student Reviews
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink mb-6">
              What Our Students Say About My Quran Guide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 bg-linear-to-br from-cream to-[#F0EAD8] border border-gold/20 rounded-3xl p-10 hover:shadow-xl transition-all">
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(i => <span key={i} className="w-1.5 h-1.5 rounded-full bg-gold" />)}
                </div>
              <p className="text-body text-lg italic leading-relaxed mb-8">
                "After trying three other online Quran academies, My Quran Guide is the best by a significant margin. The Tajweed instruction is world-class, the scheduling is truly flexible, and my tutor is brilliant. My recitation has improved more in 3 months here than in 2 years elsewhere. JazakAllah Khair — this academy is a true blessing."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-forest to-forest-mid flex items-center justify-center text-white font-bold text-sm">YK</div>
                <div>
                  <div className="text-ink font-bold flex items-center gap-2">
                    Yusuf Khan 
                    <span className="text-[10px] font-bold text-forest bg-forest-pale border border-forest/15 px-2 py-0.5 rounded-full flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-forest" /> Verified Student
                    </span>
                  </div>
                  <div className="text-muted text-xs">Chicago, Illinois, USA · Student since 2023</div>
                </div>
              </div>
            </div>

            {[
              { name: 'Fatima Al-Hassan', initial: 'FA', loc: 'Houston, Texas, USA', text: 'A friend recommended My Quran Guide and it changed everything. My children now recite with beautiful Tajweed and actually look forward to their classes every week.' },
              { name: 'Aisha Martinez', initial: 'AM', loc: 'New York, NY, USA', text: 'As a revert sister, I was nervous about learning the Quran. My tutor made me feel so welcome from day one. In 5 months I went from zero Arabic to reading the Quran independently.' },
              { name: 'Omar Siddiqui', initial: 'OS', loc: 'Dallas, Texas, USA', text: 'My son was struggling with Tajweed for two years. After just 6 weeks with My Quran Guide, his recitation transformed completely. Real-time correction makes all the difference.' }
            ].map((testi, i) => (
              <div key={i} className="bg-white border border-forest/10 rounded-2xl p-10 hover:shadow-md transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(i => <span key={i} className="w-1 h-1 rounded-full bg-gold" />)}
                </div>
                <p className="text-body text-sm italic leading-relaxed mb-6">"{testi.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-forest to-forest-mid flex items-center justify-center text-white font-bold text-xs">{testi.initial}</div>
                  <div>
                    <div className="text-ink font-bold text-sm flex items-center gap-2">
                      {testi.name}
                      <span className="text-[9px] font-bold text-forest bg-forest-pale border border-forest/15 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-forest" /> Verified
                      </span>
                    </div>
                    <div className="text-muted text-[10px]">{testi.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-[5%] bg-ink text-white">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 text-gold-light text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-7 h-0.5 bg-gold" />
              Simple Pricing
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
              Affordable Quran Classes — No Hidden Fees
            </h2>
            <p className="text-white/45 text-lg font-light max-w-2xl mx-auto mb-12">
              Choose the plan that works for your family. All plans start with two 100% free trial classes — no credit card required.
            </p>

            <div className="bg-gold/5 border border-gold/20 rounded-xl p-6 flex gap-4 items-start text-left max-w-3xl mx-auto mb-16">
              <p className="text-white/55 text-sm leading-relaxed">
                Our classes are priced to be accessible because we work directly with tutors — no physical classrooms, no agency middlemen. Every dollar goes toward a qualified teacher and a better learning experience for your family.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'Starter', price: '39', per: '2 classes / week · 8 classes / month', feats: ['8 live 1-on-1 classes per month', 'Certified tutor assigned', 'Flexible scheduling — any time', 'Monthly progress report', 'WhatsApp tutor access'] },
              { name: 'Standard', price: '53', per: '3 classes / week · 12 classes / month', feats: ['12 live 1-on-1 classes per month', 'Certified tutor assigned', 'Flexible scheduling — any time', 'Bi-weekly progress reports', 'WhatsApp + email tutor support'], popular: true },
              { name: 'Intensive', price: '69', per: '4 classes / week · 16 classes / month', feats: ['16 live 1-on-1 classes per month', 'Certified tutor — priority match', 'Flexible scheduling — any time', 'Weekly detailed progress reports', 'WhatsApp + email tutor support', 'Make-up classes included'] },
              { name: 'Daily', price: '85', per: '5 classes / week · 20 classes / month', feats: ['20 live 1-on-1 classes per month', 'Senior certified tutor', 'Flexible scheduling — any time', 'Weekly detailed progress reports', 'Dedicated academic supervisor', 'Make-up classes included', 'Priority tutor access'] }
            ].map((plan, i) => (
              <div 
                key={i} 
                className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col ${
                  plan.popular 
                    ? 'bg-gold/10 border-gold/30 scale-105 z-10' 
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-ink text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest" /> Most Popular
                  </div>
                )}
                <div className="text-[11px] font-bold text-white/40 uppercase tracking-[2px] mb-4">{plan.name}</div>
                <div className="font-serif text-5xl font-bold mb-2">
                  <sup className="text-xl align-top mt-2 inline-block">$</sup>{plan.price}
                </div>
                <div className="text-xs text-white/30 mb-8">{plan.per}</div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.feats.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-[13px] text-white/55 leading-relaxed">
                      <CheckCircle size={14} className="text-forest-bright shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/register"
                  className={`w-full py-3.5 rounded-lg font-bold text-[13px] transition-all block text-center ${
                    plan.popular 
                      ? 'bg-gold text-ink hover:bg-gold-light' 
                      : 'border-2 border-white/20 text-white/70 hover:border-gold-light hover:text-gold-light'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>

          {/* Hifz Plan */}
          <div className="bg-linear-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 border border-white/10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center max-w-5xl mx-auto">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-gold-light mb-3">Special Program</div>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">Hifz Memorization Program — Become Hafiz-e-Quran</h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-2xl mb-4">
                A dedicated daily memorization program with a personalised Hifz plan, structured revision schedule, and continuous Tajweed correction — taught by a senior certified tutor.
              </p>
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 text-gold-light px-4 py-1.5 rounded-full text-[10px] font-bold">
                🏅 Certification included upon completion
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 min-w-[200px]">
              <div className="text-center">
                <div className="font-serif text-5xl font-bold text-white leading-none">
                  <sup className="text-xl align-top mt-2 inline-block font-sans">$</sup>170
                </div>
                <div className="text-[10px] text-white/30 mt-1">per month</div>
                <div className="text-[12px] text-gold-light font-semibold mt-1">20 classes / month · Daily sessions</div>
              </div>
              <Link 
                to="/register"
                className="w-full bg-gold text-ink px-8 py-3 rounded-lg font-bold text-[13px] hover:bg-gold-light transition-all whitespace-nowrap text-center"
              >
                Begin Hifz Journey →
              </Link>
            </div>
          </div>
          <p className="text-center text-white/25 text-sm mt-12">All plans · Cancel or pause anytime · No contracts · First Two class always free</p>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-[5%] bg-cream">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
                <span className="w-7 h-0.5 bg-gold" />
                FAQ
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink mb-12">
                Frequently Asked Questions
              </h2>

              <div className="space-y-0">
                {[
                  { q: 'How do I start learning the Quran online with My Quran Guide?', a: 'Simply complete the free trial form on this page — it takes under 60 seconds. Our academic team will contact you within 24 hours to confirm your tutor match and schedule your first two free classes. No credit card or payment is required to get started.' },
                  { q: 'Do you offer Quran classes with Tajweed across the USA?', a: 'Yes — Tajweed is a core component of all our recitation and advanced programs. Our certified tutors provide real-time Tajweed correction in every live class. We serve students across all US time zones including Eastern, Central, Mountain, and Pacific.' },
                  { q: 'Why choose online Quran classes over a local teacher?', a: 'Online Quran classes give you access to the world\'s best certified tutors — not just who happens to be available in your local area. With My Quran Guide, you get 1-on-1 personal attention, flexible scheduling, and consistently high-quality instruction — all from home.' },
                  { q: 'What are the best programs for complete beginners?', a: 'For complete beginners, we recommend starting with our Noorani Qaida course. This program begins with Arabic letter recognition and builds a solid foundation for Quran reading.' },
                  { q: 'Are your Quran classes suitable for children?', a: 'Absolutely. We specialize in Quran classes for children from age 4 upward. Our specialist children\'s tutors use interactive, patient, and engaging teaching methods. Female tutors are available for girls.' },
                  { q: 'Do you have female Quran tutors for sisters and girls?', a: 'Yes. We have a dedicated team of qualified, certified female Quran tutors available specifically for sisters and young girls.' }
                ].map((faq, i) => (
                  <div key={i} className="border-b border-forest/10 last:border-0">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full py-6 flex items-center justify-between gap-6 text-left group"
                    >
                      <span className={`font-bold transition-colors ${openFaq === i ? 'text-forest' : 'text-ink group-hover:text-forest'}`}>{faq.q}</span>
                      <div className={`w-8 h-8 rounded-full border border-forest/15 flex items-center justify-center text-forest transition-all shrink-0 ${openFaq === i ? 'bg-forest text-white rotate-180' : 'bg-forest-pale'}`}>
                        <ChevronRight size={16} className="rotate-90" />
                      </div>
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-body text-sm leading-relaxed pb-6 pr-12">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-32">
              <div className="bg-linear-to-br from-forest to-[#1A5538] rounded-3xl p-12 text-center text-white">
                <div className="font-serif text-2xl text-gold-light mb-6" dir="rtl">بِسْمِ اللَّهِ</div>
                <h4 className="font-serif text-2xl font-bold mb-4">Still Have Questions? Book Your TWO FREE Classes</h4>
                <p className="text-white/45 text-sm leading-relaxed mb-8">
                  The best way to experience My Quran Guide is to try it. Your first two classes are completely free — no credit card, no commitment, no risk.
                </p>
                <Link 
                  to="/register"
                  className="w-full bg-gold text-ink py-4 rounded-lg font-bold text-sm hover:bg-gold-light transition-all block text-center"
                >
                  Claim TWO FREE Trial Classes →
                </Link>
                <p className="text-white/25 text-[10px] mt-4 uppercase tracking-widest font-bold">No card · No commitment · Cancel anytime</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-[5%] bg-cream2 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(20,68,46,0.04)_0%,transparent_65%)]" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-7 h-0.5 bg-gold" />
              Limited Spots Available
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink mb-6">
              Book Your TWO FREE Online Quran Classes Today
            </h2>
            <p className="text-body text-lg font-light mb-8">
              Certified tutors. Live 1-on-1 sessions. Real results — from the comfort of your home.
            </p>
            <p className="text-muted text-sm italic mb-10">
              Serving Muslim families in the <strong>USA, UK, Canada, Australia</strong> and <strong>25+ countries worldwide</strong>
            </p>

            <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto mb-6">
              <input 
                type="text" 
                placeholder="Your full name" 
                className="flex-1 min-w-[200px] px-5 py-4 rounded-lg bg-white border border-forest/15 focus:border-forest outline-none shadow-sm"
              />
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 min-w-[200px] px-5 py-4 rounded-lg bg-white border border-forest/15 focus:border-forest outline-none shadow-sm"
              />
              <button 
                onClick={() => navigate('/register')}
                className="bg-forest text-white px-8 py-4 rounded-lg font-bold hover:bg-forest-mid transition-all shadow-xl shadow-forest/20 whitespace-nowrap"
              >
                Claim My TWO FREE Trial Classes →
              </button>
            </div>
            <p className="text-muted text-[11px] mb-10">We'll reach out within 24 hours to schedule your two free classes. No spam, ever.</p>

            <div className="flex flex-wrap justify-center gap-8 text-[11px] font-bold text-muted uppercase tracking-widest">
              <span className="flex items-center gap-2">No credit card required</span>
              <span className="flex items-center gap-2">Zero commitment</span>
              <span className="flex items-center gap-2">Cancel anytime</span>
              <span className="flex items-center gap-2">Starts within 24 hours</span>
            </div>
          </div>
        </section>
      </div>
    );
  };

const LessonsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-0">
      <section className="pt-40 pb-24 px-[5%] bg-linear-to-br from-cream via-cream2 to-[#E2F0EA] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_55%_at_75%_40%,rgba(20,68,46,0.05)_0%,transparent_65%)]" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            All Programs
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-ink leading-tight mb-8">
            7 Courses. One Clear Path.<br />
            From <span className="italic text-forest">First Letter</span> to <span className="text-gold">Hafiz-e-Quran.</span>
          </h1>
          <p className="text-body text-xl font-light leading-relaxed max-w-2xl">
            Every course at My Quran Guide is structured with a <strong>defined starting point, clear milestones, and a measurable outcome</strong> — taught live, one-on-one, by a Certified tutor.
          </p>
        </div>
      </section>

      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {[
              { id: 'noorani-qaida', level: 'Beginner', title: 'Noorani Qaida — The Foundation Every Quran Reader Needs', desc: 'Arabic letter recognition, correct articulation, vowel sounds, and basic word formation.', duration: '3–6 months', price: '$39' },
              { id: 'tajweed-course', level: 'Intermediate', title: 'Quran Reading with Tajweed — Live Correction Every Class', desc: 'Master all core Tajweed rules systematically while applying them in actual Quran recitation.', duration: '6–18 months', price: '$39', featured: true },
              { id: 'hifz-course', level: 'Advanced', title: 'Hifz — Quran Memorization with Certification', desc: 'Personalised daily memorization plan, systematic weekly revision, and continuous Tajweed correction.', duration: '2–5 years', price: '$170' },
              { id: 'quran-for-kids', level: 'Beginner', title: 'Quran Classes for Kids — Structured, Engaging, Age-Appropriate', desc: 'Patient, energetic tutors selected specifically for their ability to teach young learners.', duration: 'Ongoing', price: '$39' },
              { id: 'tafseer-course', level: 'Intermediate', title: 'Quran Tafseer — Understand What You Recite', desc: 'Beyond the words into the meaning, context, and wisdom of each verse using classical sources.', duration: 'Ongoing', price: '$39' },
              { id: 'islamic-studies', level: 'Beginner', title: 'Islamic Studies & Duas — Build a Complete Muslim Foundation', desc: 'Daily Duas, Pillars of Islam, Seerah, basic Fiqh, and essential prayers.', duration: 'Module-based', price: '$39' },
              { id: 'arabic-course', level: 'Beginner', title: 'Arabic Language Course — Read, Understand and Speak', desc: 'Vocabulary, grammar, and sentence structures that appear most in the Quran.', duration: '6–18 months', price: '$39' }
            ].map((course) => (
              <motion.div 
                key={course.id}
                whileHover={{ y: -5 }}
                className={`flex flex-col lg:flex-row bg-white rounded-3xl border border-forest/10 overflow-hidden hover:shadow-2xl transition-all ${course.featured ? 'ring-2 ring-forest' : ''}`}
              >
                <div className="p-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-1 bg-forest/5 text-forest text-[10px] font-bold uppercase tracking-widest rounded-full border border-forest/10">{course.level}</span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-ink mb-4">{course.title}</h2>
                  <p className="text-body text-sm leading-relaxed mb-8 flex-1">{course.desc}</p>
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center gap-2 text-muted text-xs font-bold uppercase tracking-wider"><Clock size={14} /> {course.duration}</div>
                    <div className="flex items-center gap-2 text-forest text-xs font-bold uppercase tracking-wider"><Star size={14} /> Starting from {course.price}</div>
                  </div>
                  <div className="flex gap-4">
                    <Link to={`/course/${course.id}`} className="bg-forest text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-forest-mid transition-all block text-center">View Course Details</Link>
                    <Link to="/register" className="text-forest font-bold text-sm hover:underline flex items-center">Enroll Free Trial Classes</Link>
                  </div>
                </div>
                <div className="lg:w-80 bg-ink text-white p-10 flex flex-col justify-center items-center text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full" />
                  <div className="text-gold-light font-serif text-2xl mb-4" dir="rtl">بِسْمِ اللَّهِ</div>
                  <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2">Starting From</div>
                  <div className="text-4xl font-bold mb-6">{course.price}<span className="text-sm font-normal text-white/40">/mo</span></div>
                  <button onClick={() => navigate('/register')} className="w-full bg-gold text-ink py-3 rounded-lg font-bold text-sm hover:bg-gold-light transition-all">Start Free Trial</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const LessonDetail = ({ lesson: initialLesson, user }: { lesson: Lesson, user: User | null }) => {
  const [lesson, setLesson] = useState<Lesson | null>(initialLesson);
  const [loading, setLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (lesson && user?.role === 'student') {
      fetch('/api/student/progress', { headers: { 'Authorization': `Bearer ${localStorage.getItem('admin_token')}` } })
        .then(res => res.json())
        .then(progress => {
          const p = progress.find((item: any) => item.lesson_id === lesson.id);
          if (p) setIsCompleted(!!p.completed);
        });
    }
  }, [lesson, user]);

    const toggleCompletion = async () => {
      if (!lesson || user?.role !== 'student') return;
      const res = await fetch(`/api/student/progress/${lesson.id}`, {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ completed: !isCompleted })
      });
      if (res.ok) setIsCompleted(!isCompleted);
    };

    if (loading || !lesson) return <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="w-12 h-12 border-4 border-forest border-t-transparent rounded-full animate-spin" />
    </div>;

    return (
      <div className="space-y-0 bg-white">
        <section className="pt-40 pb-16 px-[5%] bg-linear-to-br from-cream to-cream2">
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => navigate('/lessons')}
              className="flex items-center gap-2 text-forest font-bold text-sm mb-8 hover:-translate-x-1 transition-transform"
            >
              <ArrowRight size={18} className="rotate-180" /> Back to Programs
            </button>
            <div className="inline-flex items-center gap-3 text-forest text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-7 h-0.5 bg-gold" />
              {lesson.category_name}
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6 leading-tight">{lesson.title}</h1>
            <p className="text-body text-xl font-light italic">{lesson.short_description}</p>
          </div>
        </section>

        <section className="py-16 px-[5%]">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12">
              <img 
                src={lesson.featured_image} 
                alt={lesson.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex justify-between items-center mb-12 py-6 border-y border-forest/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-forest-pale flex items-center justify-center text-forest">
                  <BookOpen size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-muted uppercase tracking-widest">Program</div>
                  <div className="text-sm font-bold text-ink">{lesson.category_name}</div>
                </div>
              </div>
              {user?.role === 'student' && (
                <button 
                  onClick={toggleCompletion}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${isCompleted ? 'bg-forest text-white' : 'bg-forest-pale text-forest hover:bg-forest/10'}`}
                >
                  <CheckCircle size={18} />
                  {isCompleted ? 'Completed' : 'Mark as Completed'}
                </button>
              )}
            </div>

            <div className="prose prose-forest max-w-none text-body leading-relaxed font-light mb-16" dangerouslySetInnerHTML={{ __html: lesson.full_content }} />

            {(lesson.audio_file || lesson.video_link) && (
              <div className="bg-cream rounded-3xl p-10 space-y-12 border border-forest/5">
                <h3 className="font-serif text-2xl font-bold text-ink">Learning Resources</h3>
                
                {lesson.audio_file && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-forest font-bold text-sm uppercase tracking-widest">
                      <Music size={20} /> Audio Lesson
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm">
                      <audio controls className="w-full">
                        <source src={lesson.audio_file} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  </div>
                )}

                {lesson.video_link && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-forest font-bold text-sm uppercase tracking-widest">
                      <Video size={20} /> Video Tutorial
                    </div>
                    <div className="aspect-video rounded-2xl overflow-hidden bg-ink shadow-2xl">
                      <iframe
                        width="100%"
                        height="100%"
                        src={lesson.video_link.includes('youtube.com') ? lesson.video_link.replace('watch?v=', 'embed/') : lesson.video_link}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    );
  };



  const CourseDetailPage = ({ course, onTrialClick }: { course: SpecializedCourse, onTrialClick: () => void }) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [course]);

    let features = [];
    let whatYouWillLearn = [];
    let curriculum = [];
    let faq = [];

    try {
      features = JSON.parse(course.features || '[]');
      whatYouWillLearn = JSON.parse(course.what_you_will_learn || '[]');
      curriculum = JSON.parse(course.curriculum || '[]');
      faq = JSON.parse(course.faq || '[]');
    } catch (e) {
      console.error("Error parsing course JSON data", e);
    }

    return (
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-slate-50/50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-forest/5 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold font-bold text-sm mb-8"
            >
              <BookOpen size={16} /> Specialized Course
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight"
            >
              {course.hero_title || course.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              {course.hero_subtitle || course.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button
                onClick={onTrialClick}
                className="px-8 py-4 bg-forest text-white rounded-2xl font-bold text-lg hover:bg-forest-light transition-all shadow-lg shadow-forest/20 flex items-center gap-2"
              >
                Start Free Trial <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-bold text-lg hover:border-gold transition-all">
                View Curriculum
              </button>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature: any, i: number) => (
                <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                    <CheckCircle size={20} />
                  </div>
                  <span className="font-bold text-slate-900">{typeof feature === 'string' ? feature : feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Will Learn */}
        {whatYouWillLearn.length > 0 && (
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">What You Will Learn</h2>
                <p className="text-slate-600">A comprehensive breakdown of the core learning objectives.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whatYouWillLearn.map((item: any, i: number) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-forest/10 flex items-center justify-center text-forest shrink-0">
                      <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Curriculum */}
        {curriculum.length > 0 && (
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Course Curriculum</h2>
                <p className="text-slate-600">A structured path to mastery, broken down into clear stages.</p>
              </div>
              <div className="space-y-8 max-w-4xl mx-auto">
                {curriculum.map((stage: any, i: number) => (
                  <div key={i} className="relative pl-12 pb-12 last:pb-0">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 last:hidden" />
                    <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-gold shadow-[0_0_0_4px_rgba(212,175,55,0.2)]" />
                    
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                      <span className="text-gold font-bold text-sm uppercase tracking-widest mb-2 block">{stage.stage}</span>
                      <h3 className="text-2xl font-bold text-slate-900 mb-6">{stage.title}</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {stage.points.map((point: string, j: number) => (
                          <li key={j} className="flex items-center gap-3 text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-forest" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {faq.length > 0 && (
          <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-forest/10 blur-[120px] -z-0" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-slate-400">Everything you need to know about this course.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {faq.map((item: any, i: number) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                    <h3 className="text-xl font-bold mb-4 text-gold">{item.q}</h3>
                    <p className="text-slate-300 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gold p-12 rounded-[40px] text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Start Your Journey?</h2>
              <p className="text-slate-800 text-lg mb-10 max-w-2xl mx-auto">
                Join thousands of students worldwide and experience the best online Quran learning platform.
              </p>
              <button
                onClick={onTrialClick}
                className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all shadow-xl"
              >
                Book Your Two Free Trial Classes
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  };

const AboutPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-wrapper">
        <style dangerouslySetInnerHTML={{ __html: `
          .about-page-wrapper {
            --forest: #14442E;
            --forest-mid: #1E6645;
            --forest-bright: #27A265;
            --forest-pale: #EBF7F1;
            --gold: #C9982A;
            --gold-light: #E8BA52;
            --cream: #FAF7F0;
            --cream2: #F2EBD9;
            --ink: #141414;
            --ink2: #2A2A2A;
            --body: #4A5568;
            --muted: #8896A3;
            --border: rgba(20,68,46,0.1);
            --white: #FFFFFF;
            --shadow-sm: 0 2px 12px rgba(20,68,46,0.08);
            --shadow-md: 0 8px 32px rgba(20,68,46,0.12);
            font-family: 'Plus Jakarta Sans', sans-serif;
            background: var(--cream);
            color: var(--ink);
          }

          .page-hero {
            padding: 160px 5% 100px;
            background: linear-gradient(150deg, var(--cream) 0%, var(--cream2) 50%, #E2F0EA 100%);
            position: relative; overflow: hidden;
          }
          .page-hero::before {
            content: '';
            position: absolute; inset: 0;
            background:
              radial-gradient(ellipse 50% 60% at 80% 50%, rgba(20,68,46,.05) 0%, transparent 65%),
              radial-gradient(ellipse 30% 40% at 10% 80%, rgba(201,152,42,.06) 0%, transparent 60%);
            pointer-events: none;
          }
          .hero-pattern-bg {
            position: absolute; right: -2%; top: 0; width: 45%; height: 100%;
            opacity: .03;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%2314442E' stroke-width='1'%3E%3Cpolygon points='60,5 115,32 115,88 60,115 5,88 5,32'/%3E%3Cpolygon points='60,22 98,42 98,82 60,102 22,82 22,42'/%3E%3Cpolygon points='60,38 82,50 82,74 60,86 38,74 38,50'/%3E%3C/g%3E%3C/svg%3E");
            background-size: 120px 120px;
          }
          .page-hero-inner { position: relative; z-index: 2; max-width: 760px; }
          .breadcrumb {
            display: flex; align-items: center; gap: 8px;
            font-size: .75rem; color: var(--muted); font-weight: 500;
            margin-bottom: 28px;
          }
          .breadcrumb button { color: var(--forest); background: none; border: none; cursor: pointer; padding: 0; font-size: inherit; font-weight: inherit; }
          .breadcrumb span { color: var(--muted); }
          .page-tag {
            display: inline-flex; align-items: center; gap: 10px;
            font-size: .7rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
            color: var(--forest); margin-bottom: 18px;
          }
          .page-tag::before { content: ''; width: 28px; height: 2px; background: var(--gold); border-radius: 1px; }
          .page-hero h1 {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(2.8rem, 5vw, 4.6rem);
            font-weight: 700; line-height: 1.06;
            color: var(--ink); margin-bottom: 24px; letter-spacing: -.5px;
          }
          .page-hero h1 em { font-style: italic; color: var(--forest); }
          .page-hero h1 .gold { color: var(--gold); font-style: normal; }
          .page-hero-sub {
            font-size: 1.08rem; color: var(--body); line-height: 1.8;
            max-width: 620px; font-weight: 300;
          }
          .page-hero-sub strong { color: var(--ink2); font-weight: 600; }

          .about-section { padding: 88px 5%; }
          .sec-tag {
            font-size: .7rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
            color: var(--forest); margin-bottom: 12px;
            display: inline-flex; align-items: center; gap: 10px;
          }
          .sec-tag::before { content: ''; width: 28px; height: 2px; background: var(--gold); border-radius: 1px; }
          .sec-h2 {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(1.9rem, 3.2vw, 2.8rem); font-weight: 700;
            line-height: 1.2; color: var(--ink); margin-bottom: 18px;
          }
          .sec-sub {
            font-size: .97rem; color: var(--body); line-height: 1.78;
            max-width: 600px; font-weight: 300;
          }

          .origin { background: var(--white); }
          .origin-layout {
            display: grid; grid-template-columns: 1fr 1fr;
            gap: 80px; align-items: center;
          }
          .origin-text .sec-h2 { margin-bottom: 24px; }
          .origin-text p {
            font-size: .97rem; color: var(--body); line-height: 1.82;
            margin-bottom: 20px; font-weight: 300;
          }
          .origin-text p strong { color: var(--ink2); font-weight: 600; }
          .origin-text p:last-of-type { margin-bottom: 0; }
          .origin-visual {
            position: relative;
          }
          .origin-card-main {
            background: linear-gradient(145deg, var(--forest), #1A5538);
            border-radius: 20px; padding: 48px 40px;
            position: relative; overflow: hidden;
          }
          .origin-card-main::before {
            content: '';
            position: absolute; top: -30%; right: -20%;
            width: 70%; height: 70%; border-radius: 50%;
            background: rgba(255,255,255,.03);
          }
          .origin-card-main .arabic-display {
            font-family: 'Cormorant Garamond', serif;
            font-size: 3.2rem; color: rgba(232,186,82,.7);
            direction: rtl; line-height: 1.5;
            margin-bottom: 28px;
          }
          .origin-card-main blockquote {
            font-size: .92rem; color: rgba(255,255,255,.55);
            font-style: italic; line-height: 1.75;
            border-left: 3px solid rgba(201,152,42,.4);
            padding-left: 18px;
          }
          .origin-card-main cite {
            display: block; margin-top: 14px;
            font-size: .78rem; color: var(--gold-light);
            font-style: normal; font-weight: 600;
          }
          .origin-year-badge {
            position: absolute; top: -16px; right: 32px;
            background: var(--gold); color: var(--ink);
            font-size: .72rem; font-weight: 800; letter-spacing: 1px;
            text-transform: uppercase; padding: 6px 18px; border-radius: 100px;
          }

          .problem { background: var(--ink); }
          .problem .sec-tag { color: var(--gold-light); }
          .problem .sec-h2 { color: var(--white); }
          .problem-layout { display: grid; grid-template-columns: 5fr 4fr; gap: 72px; align-items: start; }
          .problem-text p {
            font-size: .97rem; color: rgba(255,255,255,.5);
            line-height: 1.82; margin-bottom: 20px; font-weight: 300;
          }
          .problem-text p strong { color: rgba(255,255,255,.85); font-weight: 600; }
          .problem-list { margin-top: 36px; display: flex; flex-direction: column; gap: 0; }
          .problem-item {
            display: flex; gap: 18px; align-items: flex-start;
            padding: 20px 0; border-bottom: 1px solid rgba(255,255,255,.05);
          }
          .problem-item:last-child { border-bottom: none; }
          .problem-icon {
            width: 42px; height: 42px; border-radius: 10px; flex-shrink: 0;
            background: rgba(201,152,42,.08); border: 1px solid rgba(201,152,42,.15);
            display: flex; align-items: center; justify-content: center; font-size: 1rem;
          }
          .problem-item h4 { font-size: .95rem; font-weight: 600; color: var(--white); margin-bottom: 5px; }
          .problem-item p { font-size: .85rem; color: rgba(255,255,255,.38); line-height: 1.65; margin: 0; }
          .problem-quote {
            background: rgba(255,255,255,.03);
            border: 1px solid rgba(201,152,42,.18);
            border-radius: 18px; padding: 44px 36px;
            position: sticky; top: 100px;
            text-align: center;
          }
          .problem-quote .big-text {
            font-family: 'Cormorant Garamond', serif;
            font-size: 4.5rem; font-weight: 700; color: var(--gold-light);
            line-height: 1; margin-bottom: 12px;
          }
          .problem-quote .big-label {
            font-size: .75rem; color: rgba(255,255,255,.3);
            text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 32px;
          }
          .problem-quote .divider { width: 40px; height: 2px; background: rgba(201,152,42,.3); margin: 0 auto 32px; border-radius: 1px; }
          .problem-quote p { font-size: .88rem; color: rgba(255,255,255,.4); line-height: 1.7; font-style: italic; }

          .mission { background: var(--cream2); }
          .mission-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 56px; }
          .mission-card {
            background: var(--white); border: 1px solid var(--border);
            border-radius: 16px; padding: 34px 28px;
            transition: all .28s; position: relative; overflow: hidden;
          }
          .mission-card::after {
            content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
            background: linear-gradient(90deg, var(--forest), var(--forest-bright));
            transform: scaleX(0); transform-origin: left; transition: transform .3s;
          }
          .mission-card:hover { box-shadow: var(--shadow-md); transform: translateY(-4px); }
          .mission-card:hover::after { transform: scaleX(1); }
          .mission-num {
            font-family: 'Cormorant Garamond', serif;
            font-size: 3.5rem; font-weight: 700;
            color: rgba(20,68,46,.07); line-height: 1;
            margin-bottom: 16px;
          }
          .mission-card h3 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.25rem; font-weight: 700;
            color: var(--ink); margin-bottom: 12px; line-height: 1.3;
          }
          .mission-card p { font-size: .87rem; color: var(--body); line-height: 1.7; }

          .different { background: var(--white); }
          .different-layout { display: grid; grid-template-columns: 4fr 5fr; gap: 80px; align-items: center; }
          .different-points { display: flex; flex-direction: column; gap: 0; }
          .diff-item {
            display: flex; gap: 20px; align-items: flex-start;
            padding: 24px 0; border-bottom: 1px solid var(--border);
          }
          .diff-item:first-child { padding-top: 0; }
          .diff-item:last-child { border-bottom: none; }
          .diff-icon {
            width: 48px; height: 48px; border-radius: 12px; flex-shrink: 0;
            display: flex; align-items: center; justify-content: center; font-size: 1.1rem;
            background: var(--forest-pale); border: 1px solid rgba(20,68,46,.1);
          }
          .diff-item h4 { font-size: .97rem; font-weight: 700; color: var(--ink); margin-bottom: 6px; }
          .diff-item p { font-size: .85rem; color: var(--body); line-height: 1.68; }
          .different-visual {
            background: linear-gradient(145deg, #0d1f16, #162d1e);
            border-radius: 20px; padding: 48px 40px;
            border: 1px solid rgba(39,162,101,.12);
          }
          .different-visual .label {
            font-size: .7rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
            color: var(--gold-light); margin-bottom: 28px;
          }
          .compare-row {
            display: flex; justify-content: space-between; align-items: center;
            padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,.05);
            gap: 12px;
          }
          .compare-row:last-child { border-bottom: none; }
          .compare-topic { font-size: .85rem; color: rgba(255,255,255,.45); flex: 1; }
          .compare-them {
            font-size: .78rem; font-weight: 600; color: rgba(231,76,60,.7);
            background: rgba(231,76,60,.08); padding: 3px 10px; border-radius: 100px;
            white-space: nowrap;
          }
          .compare-us {
            font-size: .78rem; font-weight: 600; color: var(--forest-bright);
            background: rgba(39,162,101,.1); padding: 3px 10px; border-radius: 100px;
            white-space: nowrap;
          }

          .team { background: var(--cream); }
          .team-intro { max-width: 620px; margin-bottom: 56px; }
          .team-intro p { font-size: .97rem; color: var(--body); line-height: 1.8; font-weight: 300; margin-top: 16px; }
          .team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
          .team-card {
            background: var(--white); border: 1px solid var(--border);
            border-radius: 16px; padding: 32px 26px;
            transition: all .25s;
          }
          .team-card:hover { box-shadow: var(--shadow-md); border-color: rgba(20,68,46,.2); }
          .team-avatar {
            width: 64px; height: 64px; border-radius: 16px;
            background: linear-gradient(135deg, var(--forest), var(--forest-mid));
            display: flex; align-items: center; justify-content: center;
            font-size: 1.5rem; margin-bottom: 20px;
          }
          .team-card h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; font-weight: 700; color: var(--ink); margin-bottom: 4px; }
          .team-card .role { font-size: .75rem; font-weight: 700; letter-spacing: .8px; text-transform: uppercase; color: var(--forest); margin-bottom: 14px; }
          .team-card p { font-size: .85rem; color: var(--body); line-height: 1.68; }
          .team-card .badges { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px; }
          .team-card .badge {
            font-size: .68rem; font-weight: 600;
            background: var(--forest-pale); color: var(--forest);
            border: 1px solid rgba(20,68,46,.12);
            padding: 3px 9px; border-radius: 100px;
          }
          .team-note {
            margin-top: 36px; padding: 24px 28px;
            background: var(--forest-pale); border: 1px solid rgba(20,68,46,.12);
            border-radius: 12px;
            font-size: .9rem; color: var(--forest); line-height: 1.7;
          }
          .team-note strong { font-weight: 700; }

          .promise {
            background: var(--forest);
            text-align: center; padding: 100px 5%;
            position: relative; overflow: hidden;
          }
          .promise::before {
            content: '';
            position: absolute; inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'%3E%3Cpolygon points='60,5 115,32 115,88 60,115 5,88 5,32'/%3E%3Cpolygon points='60,22 98,42 98,82 60,102 22,82 22,42'/%3E%3C/g%3E%3C/svg%3E");
            background-size: 120px 120px;
          }
          .promise > * { position: relative; z-index: 1; }
          .promise .sec-tag { color: var(--gold-light); justify-content: center; }
          .promise .sec-tag::before { background: var(--gold-light); }
          .promise h2 {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(2.2rem, 4vw, 3.6rem); font-weight: 700;
            color: var(--white); line-height: 1.15;
            max-width: 700px; margin: 0 auto 24px; letter-spacing: -.3px;
          }
          .promise h2 em { font-style: italic; color: var(--gold-light); }
          .promise p {
            font-size: 1rem; color: rgba(255,255,255,.5);
            max-width: 560px; margin: 0 auto 44px; line-height: 1.8; font-weight: 300;
          }
          .promise-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
          .btn-primary {
            background: var(--gold); color: var(--ink);
            padding: 16px 36px; border-radius: 7px;
            font-size: 1rem; font-weight: 700;
            transition: all .25s; box-shadow: 0 6px 26px rgba(201,152,42,.3);
            display: inline-flex; align-items: center; gap: 8px;
            text-decoration: none;
          }
          .btn-primary:hover { background: var(--gold-light); transform: translateY(-2px); }
          .btn-ghost-light {
            background: transparent; border: 1.5px solid rgba(255,255,255,.2);
            color: rgba(255,255,255,.8); padding: 15px 28px; border-radius: 7px;
            font-size: 1rem; font-weight: 500; transition: all .22s;
            text-decoration: none;
          }
          .btn-ghost-light:hover { border-color: rgba(255,255,255,.5); color: var(--white); }

          @media(max-width: 1024px) {
            .origin-layout, .problem-layout, .different-layout { grid-template-columns: 1fr; gap: 48px; }
            .mission-grid, .team-grid { grid-template-columns: repeat(2, 1fr); }
            .problem-quote { position: static; }
          }
          @media(max-width: 768px) {
            .page-hero { padding: 120px 5% 72px; }
            .hero-pattern-bg { display: none; }
            .promise-btns { flex-direction: column; align-items: center; }
          }
        `}} />

        {/* PAGE HERO */}
        <section className="page-hero">
          <div className="hero-pattern-bg" aria-hidden="true"></div>
          <div className="page-hero-inner">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <button onClick={() => navigate('/')}>Home</button>
              <span>›</span>
              <span>About Us</span>
            </nav>
            <div className="page-tag">Our Story</div>
            <h1>
              We Built My Quran Guide Because<br />
              <em>Technology Made It Easy</em><br />
              to Learn — and <span className="gold">Easier to Learn Wrong</span>
            </h1>
            <p className="page-hero-sub">
              My Quran Guide was founded by a <strong>Hafiz with a technology background</strong> who saw the same problem everywhere: platforms were making Quran education more accessible — but nobody was protecting its quality. We decided to fix that.
            </p>
          </div>
        </section>

        {/* ORIGIN STORY */}
        <section className="about-section origin">
          <div className="origin-layout">
            <div className="origin-text">
              <div className="sec-tag">How It Started</div>
              <h2 className="sec-h2">A Hafiz Who Understood Both Worlds</h2>
              <p>
                Most online Quran platforms were built by either <strong>technology people who didn't deeply understand the Quran</strong>, or scholars who didn't understand how to use technology properly. The result was everywhere — apps with no real teacher, group classes where nobody corrects your mistakes, and platforms that prioritized enrollment numbers over actual learning outcomes.
              </p>
              <p>
                Our founder had lived in both worlds — completing Hifz and studying Islamic education formally, while also building a career in technology. In 2022, he made the decision to combine both — not to create another generic online Quran platform, but to build something that actually worked the way authentic Quran learning is supposed to work.
              </p>
              <p>
                <strong>The core idea was simple:</strong> use technology to connect students with the best certified tutors in the world, remove every barrier to access, and never compromise on the quality of what is being taught.
              </p>
              <p>
                My Quran Guide started with a small team of carefully selected tutors and a handful of students. Every tutor was chosen personally. Every lesson was structured deliberately. That same standard is what we hold today — regardless of how much we grow.
              </p>
            </div>

            <div className="origin-visual">
              <div className="origin-year-badge">Est. 2022</div>
              <div className="origin-card-main">
                <div className="absolute top-4 right-4 text-gold/20">
                  <Award size={64} />
                </div>
                <div className="arabic-display">
                  اقْرَأْ بِاسْمِ<br />رَبِّكَ
                </div>
                <blockquote>
                  "Read in the name of your Lord who created."
                  <cite>— Surah Al-Alaq 96:1 — The first word revealed to the Prophet ﷺ was a command to read. Education is not secondary to Islam. It is where it begins.</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* THE PROBLEM WE SOLVED */}
        <section className="about-section problem">
          <div className="problem-layout">
            <div>
              <div className="sec-tag">The Problem We Saw</div>
              <h2 className="sec-h2" style={{ color: 'white' }}>Online Quran Education Was Growing. Quality Was Shrinking.</h2>
              <div className="problem-text">
                <p>
                  When the internet made it possible to learn almost anything from anywhere, online Quran education exploded. Hundreds of platforms launched. Thousands of tutors signed up. Millions of students enrolled.
                </p>
                <p>
                  But something was missing. <strong>In the race to scale, the most important thing got left behind — the actual standard of teaching.</strong>
                </p>
                <p>
                  Muslim families in the USA, UK, India, Pakistan and across the world were enrolling their children in online Quran classes — and many were learning wrong pronunciation, uncorrected Tajweed mistakes, and habits that would take years to undo.
                </p>
                <p>
                  The platforms were convenient. The pricing was competitive. The marketing was impressive. But when parents actually listened to their children recite — the results told a different story.
                </p>
              </div>

              <div className="problem-list">
                <div className="problem-item">
                  <div className="problem-icon text-gold"><Video size={20} /></div>
                  <div>
                    <h4>Pre-Recorded Lessons Replaced Real Teachers</h4>
                    <p>A video cannot hear your recitation. It cannot correct your Makharij. It cannot tell you that you are pronouncing a letter wrong. Pre-recorded courses scaled easily — but they taught passively, not actively.</p>
                  </div>
                </div>
                <div className="problem-item">
                  <div className="problem-icon text-gold"><Users size={20} /></div>
                  <div>
                    <h4>Group Classes Meant Nobody Got Corrected</h4>
                    <p>With 10 or 15 students in a class, a tutor cannot give real attention to any single student. Mistakes got ignored. Bad habits got reinforced. Students completed courses and still couldn't recite correctly.</p>
                  </div>
                </div>
                <div className="problem-item">
                  <div className="problem-icon text-gold"><ShieldCheck size={20} /></div>
                  <div>
                    <h4>Tutor Credentials Were Unverifiable</h4>
                    <p>Many platforms hired tutors based on self-reported qualifications with no actual verification process. The student had no way to know if their teacher was genuinely certified — or simply confident.</p>
                  </div>
                </div>
                <div className="problem-item">
                  <div className="problem-icon text-gold"><BarChart3 size={20} /></div>
                  <div>
                    <h4>Progress Had No Accountability</h4>
                    <p>Parents enrolled their children, paid monthly, and trusted that learning was happening. But there were no structured reports, no milestone tracking, no transparency — only hope.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="problem-quote">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                  <Search size={40} />
                </div>
              </div>
              <div className="big-text">1 in 3</div>
              <div className="big-label">Students who learn Quran online never complete their course</div>
              <div className="divider"></div>
              <p>Not because they lost motivation — but because they stopped seeing real progress. My Quran Guide was built specifically to solve this.</p>
            </div>
          </div>
        </section>

        {/* MISSION & VALUES */}
        <section className="about-section mission">
          <div className="sec-tag">What We Stand For</div>
          <h2 className="sec-h2">Our Mission, Vision & Values</h2>
          <p className="sec-sub">Everything we build, every tutor we hire, every lesson we structure — comes back to three things.</p>

          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-num">01</div>
              <h3>Mission — Make Authentic Quran Education Accessible to Every Muslim Family</h3>
              <p>Geography should not determine whether a Muslim child learns the Quran correctly. A family in a small town in the USA should have the same access to a world-class certified tutor as a family living near a major Islamic centre. My Quran Guide exists to make that possible — without compromise on quality.</p>
            </div>
            <div className="mission-card">
              <div className="mission-num">02</div>
              <h3>Vision — A Generation That Recites with Accuracy, Understands with Depth</h3>
              <p>We are not building a subscription platform. We are contributing to something generational. Every student who learns correct Tajweed through My Quran Guide will pass that knowledge forward — to their children, to their community. That chain of transmission is what Islamic education has always been built on. We take our role in that chain seriously.</p>
            </div>
            <div className="mission-card">
              <div className="mission-num">03</div>
              <h3>Values — Quality Over Scale, Always</h3>
              <p>We could grow faster if we lowered our tutor standards. We could enroll more students if we switched to group classes. We choose not to. Every decision at My Quran Guide is made with one question: does this make the learning better, or just bigger? Quality is not a feature we offer. It is the reason we exist.</p>
            </div>
          </div>
        </section>

        {/* WHAT MAKES US DIFFERENT */}
        <section className="about-section different">
          <div className="different-layout">
            <div>
              <div className="sec-tag">Why We Are Different</div>
              <h2 className="sec-h2">We Did Not Build Another Platform. We Built a Standard.</h2>
              <p className="sec-sub" style={{ marginBottom: '40px' }}>Most platforms compete on price or features. We compete on one thing — the quality of what the student actually learns.</p>

              <div className="different-points">
                <div className="diff-item">
                  <div className="diff-icon text-forest"><GraduationCap size={20} /></div>
                  <div>
                    <h4>Every Tutor Holds a Verified Certification</h4>
                    <p>Not self-reported. Not assumed. Verified — with a traceable chain of transmission back to the Prophet ﷺ. This is non-negotiable at My Quran Guide. It is our minimum standard, not our premium offering.</p>
                  </div>
                </div>
                <div className="diff-item">
                  <div className="diff-icon text-forest"><UserCheck size={20} /></div>
                  <div>
                    <h4>Every Class is Live, Private, and One-on-One</h4>
                    <p>Your tutor hears every word you recite. Every mistake is corrected in the moment it happens. This is the only way real Tajweed correction works — and it is the only way we teach.</p>
                  </div>
                </div>
                <div className="diff-item">
                  <div className="diff-icon text-forest"><Sun size={20} /></div>
                  <div>
                    <h4>Technology That Serves Teaching — Not Replaces It</h4>
                    <p>Our founder's tech background means we use technology thoughtfully. Scheduling, reminders, progress tracking, session management — technology handles the administration so the tutor can focus entirely on the student.</p>
                  </div>
                </div>
                <div className="diff-item">
                  <div className="diff-icon text-forest"><BarChart3 size={20} /></div>
                  <div>
                    <h4>Full Transparency — Parents Always Know</h4>
                    <p>Weekly progress reports. Milestone tracking. Specific feedback on pronunciation accuracy and Tajweed rules mastered. Parents are never left wondering whether their child is actually improving.</p>
                  </div>
                </div>
                <div className="diff-item">
                  <div className="diff-icon text-forest"><Globe size={20} /></div>
                  <div>
                    <h4>Built for Muslim Families Living in the West</h4>
                    <p>We understand the specific challenges of raising children with strong Islamic education in the USA, UK, and Canada. Our tutors are trained to teach Western students. Our scheduling is built around Western family life.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="different-visual">
              <div className="label">My Quran Guide vs. Typical Platforms</div>
              <div className="compare-row">
                <span className="compare-topic">Tutor credentials</span>
                <span className="compare-them">Self-reported</span>
                <span className="compare-us">Verified Certification</span>
              </div>
              <div className="compare-row">
                <span className="compare-topic">Class format</span>
                <span className="compare-them">Group / Recorded</span>
                <span className="compare-us">Live 1-on-1 only</span>
              </div>
              <div className="compare-row">
                <span className="compare-topic">Tajweed correction</span>
                <span className="compare-them">After class / Never</span>
                <span className="compare-us">Real-time, every class</span>
              </div>
              <div className="compare-row">
                <span className="compare-topic">Progress reporting</span>
                <span className="compare-them">None or vague</span>
                <span className="compare-us">Weekly detailed report</span>
              </div>
              <div className="compare-row">
                <span className="compare-topic">Tutor selection rate</span>
                <span className="compare-them">Anyone can apply</span>
                <span className="compare-us">1 in 8 accepted</span>
              </div>
              <div className="compare-row">
                <span className="compare-topic">First class</span>
                <span className="compare-them">Paid enrollment</span>
                <span className="compare-us">100% free trial</span>
              </div>
              <div className="compare-row">
                <span className="compare-topic">Cancellation</span>
                <span className="compare-them">Contracts / penalties</span>
                <span className="compare-us">Cancel anytime</span>
              </div>
            </div>
          </div>
        </section>

        {/* OUR TEAM */}
        <section className="about-section team">
          <div className="team-intro">
            <div className="sec-tag">The Team</div>
            <h2 className="sec-h2">Small Team. Uncompromising Standard.</h2>
            <p>My Quran Guide is not a large corporation. We are a focused team of people who care deeply about Islamic education — each bringing a specific expertise that makes the whole better. Our tutors are selected through the most rigorous process in the industry. Our support team ensures every student and parent has a seamless experience from day one.</p>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar text-white">
                <User size={32} />
              </div>
              <h3>The Founder</h3>
              <div className="role">Hafiz · Tech & Islamic Education</div>
              <p>Completed Hifz and formal Islamic education before building a career in technology. Founded My Quran Guide in 2022 with the conviction that the two disciplines — when combined correctly — could produce something genuinely better than what existed.</p>
              <div className="badges">
                <span className="badge">Hafiz-e-Quran</span>
                <span className="badge">Tech Background</span>
                <span className="badge">Est. 2022</span>
              </div>
            </div>

            <div className="team-card">
              <div className="team-avatar text-white">
                <GraduationCap size={32} />
              </div>
              <h3>Our Tutors</h3>
              <div className="role">Certified · Verified · Dedicated</div>
              <p>Every tutor at My Quran Guide holds a verified certification with a traceable chain of transmission. Selected through a 5-stage process covering certification, live recitation assessment, teaching methodology, English communication, and background screening. Only 1 in 8 applicants pass.</p>
              <div className="badges">
                <span className="badge">Certified Verified</span>
                <span className="badge">Al-Azhar Graduates</span>
                <span className="badge">Male & Female</span>
              </div>
            </div>

            <div className="team-card">
              <div className="team-avatar text-white">
                <MessageSquare size={32} />
              </div>
              <h3>Student Support</h3>
              <div className="role">Available · Responsive · Caring</div>
              <p>A dedicated support team ensures every family — from initial inquiry to ongoing enrollment — always has a real person to speak to. Scheduling, tutor matching, progress queries, rescheduling — handled personally, not by automated systems.</p>
              <div className="badges">
                <span className="badge">USA Timezone</span>
                <span className="badge">UK Timezone</span>
                <span className="badge">7 Days/Week</span>
              </div>
            </div>
          </div>

          <div className="team-note">
            <strong>A note on our size:</strong> My Quran Guide is intentionally small at this stage. We believe that controlled, quality-first growth produces better outcomes for students than rapid scaling. Every tutor we add goes through the same rigorous selection process as the first. That will never change.
          </div>
        </section>

        {/* PROMISE / FINAL CTA */}
        <section className="about-section promise">
          <div className="sec-tag">Our Promise to You</div>
          <h2>
            If Your Child Does Not Improve<br />
            Within the <em>First Four Weeks</em> —<br />
            We Will Make It Right
          </h2>
          <p>
            We stand behind what we teach. If a student attends classes consistently and does not see measurable improvement in recitation accuracy within the first four weeks, we will work with you personally to understand why — and fix it. No scripts. No excuses. A real commitment from a team that genuinely cares.
          </p>
          <div className="promise-btns">
            <button onClick={() => navigate('/register')} className="btn-primary">Book Your Free Trial Class →</button>
            <button onClick={() => navigate('/lessons')} className="btn-ghost-light">View Our Courses</button>
          </div>
        </section>
      </div>
    );
  };

const ContactPage = () => {
  const [formState, setFormState] = useState({ 
    name: '', 
    email: '', 
    age: '',
    timeZone: '',
    courses: [] as string[],
    schedule: '',
    message: '' 
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const toggleCourse = (course: string) => {
      setFormState(prev => ({
        ...prev,
        courses: prev.courses.includes(course) 
          ? prev.courses.filter(c => c !== course)
          : [...prev.courses, course]
      }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!formState.name || !formState.email || !formState.age || formState.courses.length === 0) {
        return;
      }
      setStatus('loading');
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formState)
        });
        if (res.ok) {
          setStatus('success');
        } else {
          setStatus('error');
        }
      } catch (error) {
        setStatus('error');
      }
    };

    return (
      <div className="page-wrap grid grid-cols-1 lg:grid-cols-2 min-h-screen pt-[72px]">
        {/* Left Panel */}
        <div className="bg-linear-to-br from-forest to-[#0f3322] p-10 lg:p-20 flex flex-col justify-between relative overflow-hidden min-h-[500px] lg:min-h-[calc(100vh-72px)]">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_width=%22140%22_height=%22140%22_viewBox=%220_0_140_140%22%3E%3Cg_fill=%22none%22_stroke=%22white%22_stroke-width=%221%22%3E%3Cpolygon_points=%2270,6_134,38_134,102_70,134_6,102_6,38%22/%3E%3Cpolygon_points=%2270,26_114,50_114,94_70,118_26,94_26,50%22/%3E%3Cpolygon_points=%2270,46_94,60_94,84_70,98_46,84_46,60%22/%3E%3C/g%3E%3C/svg%3E')] bg-[length:140px_140px]" />
          <div className="absolute bottom-[-80px] right-[-80px] w-80 h-80 rounded-full bg-radial-gradient(circle,rgba(201,152,42,0.12)_0%,transparent_70%) pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-gold-light text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
              <span className="w-6 h-0.5 bg-gold-light" />
              Get In Touch
            </div>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Start Your<br />
              <span className="italic text-gold-light">Two Free Trial Classes</span><br />
              Today.
            </h1>
            <p className="text-white/45 text-base font-light leading-relaxed max-w-md mb-12">
              Fill in the form and we will match you with the right tutor and course. <strong className="text-white/75 font-semibold">Most inquiries receive a response within 1–3 hours.</strong> Your first class is completely free — no payment, no commitment required.
            </p>

            <div className="space-y-4 mb-12">
              {[
                { title: 'Two Free Trial Classes', desc: 'First two sessions on us — no card needed', time: '100% Free', color: 'bg-gold' },
                { title: 'Response Time', desc: 'We reply to every message personally', time: '1–3 Hours', color: 'bg-forest-bright' },
                { title: 'Tutor Matched', desc: 'Based on your course, age & schedule', time: 'Within 24h', color: 'bg-gold-light' },
                { title: 'All Time Zones', desc: 'USA, UK, Canada, Australia & more', time: '24/7', color: 'bg-white' },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/7 border-radius-xl hover:bg-white/8 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gold/15 border border-gold/20 flex items-center justify-center shrink-0">
                    <span className={`w-2 h-2 rounded-full ${badge.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-bold text-sm leading-tight mb-0.5">{badge.title}</div>
                    <div className="text-white/35 text-[11px] truncate">{badge.desc}</div>
                  </div>
                  <div className="text-gold-light text-[10px] font-bold bg-gold/10 border border-gold/15 px-2.5 py-1 rounded-full whitespace-nowrap">{badge.time}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/3 border border-white/6 rounded-2xl p-6 text-center">
              <div className="font-serif text-3xl text-gold-light/40 mb-2" dir="rtl">اقْرَأْ بِاسْمِ رَبِّكَ</div>
              <div className="text-white/20 text-[11px] italic">"Read in the name of your Lord" — Al-Alaq 96:1</div>
            </div>
          </div>

          <div className="relative z-10 mt-8 flex flex-wrap gap-3">
            {['No contracts', 'Cancel anytime', 'Certified tutors', '24/7 scheduling'].map((pill, i) => (
              <span key={i} className="inline-flex items-center gap-2 bg-white/6 border border-white/9 text-white/50 px-3.5 py-1.5 rounded-full text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" /> {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Panel — Form */}
        <div className="bg-white p-10 lg:p-20 flex flex-col justify-center" id="form">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-forest-pale border-2 border-forest/15 flex items-center justify-center mx-auto mb-6">
                <span className="w-4 h-4 rounded-full bg-forest" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-ink mb-3">JazakAllah Khair!</h3>
              <p className="text-muted text-base leading-relaxed max-w-sm mx-auto mb-6">
                Your free trial request has been received. We will review your details and get back to you <strong>within 1–3 hours</strong> with your tutor match and first class details.
              </p>
              <div className="inline-flex items-center gap-2 bg-forest-pale border border-forest/15 text-forest px-5 py-2.5 rounded-full text-sm font-bold">
                <span className="w-2 h-2 rounded-full bg-forest" /> Your first class is being arranged
              </div>
            </div>
          ) : (
            <div className="max-w-xl mx-auto w-full">
              <div className="mb-10">
                <div className="flex items-center gap-2 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
                  <span className="w-5 h-0.5 bg-gold" />
                  Free Trial Request
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-ink mb-2">Tell Us a Little About Yourself</h2>
                <p className="text-muted text-sm">We use this to match you with the best tutor for your goals. Takes under 2 minutes.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-ink2 uppercase tracking-wide">Full Name <span className="text-gold">*</span></label>
                    <input 
                      required
                      type="text" 
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border-1.5 border-forest/10 bg-cream focus:border-forest focus:bg-white outline-none transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-ink2 uppercase tracking-wide">Email Address <span className="text-gold">*</span></label>
                    <input 
                      required
                      type="email" 
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border-1.5 border-forest/10 bg-cream focus:border-forest focus:bg-white outline-none transition-all text-sm"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-ink2 uppercase tracking-wide">Student Age Group <span className="text-gold">*</span></label>
                    <select 
                      required
                      value={formState.age}
                      onChange={e => setFormState({...formState, age: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border-1.5 border-forest/10 bg-cream focus:border-forest focus:bg-white outline-none transition-all text-sm appearance-none cursor-pointer"
                    >
                      <option value="">Select age group</option>
                      <option>Child — Age 4 to 8</option>
                      <option>Child — Age 9 to 15</option>
                      <option>Teen — Age 16 to 18</option>
                      <option>Adult — Age 18+</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-ink2 uppercase tracking-wide">Your Time Zone</label>
                    <select 
                      value={formState.timeZone}
                      onChange={e => setFormState({...formState, timeZone: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border-1.5 border-forest/10 bg-cream focus:border-forest focus:bg-white outline-none transition-all text-sm appearance-none cursor-pointer"
                    >
                      <option value="">Select your region</option>
                      <option>USA — Eastern (EST)</option>
                      <option>USA — Central (CST)</option>
                      <option>USA — Mountain (MST)</option>
                      <option>USA — Pacific (PST)</option>
                      <option>United Kingdom (GMT)</option>
                      <option>Canada (EST / PST)</option>
                      <option>Australia (AEST)</option>
                      <option>Gulf (GST / AST)</option>
                      <option>Pakistan / India (PKT / IST)</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-ink2 uppercase tracking-wide">Which course are you interested in? <span className="text-gold">*</span></label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Noorani Qaida', 'Quran with Tajweed', 'Hifz / Memorization', 
                      'Quran for Kids', 'Tafseer', 'Islamic Studies & Duas', 
                      'Arabic Language', 'Not Sure — Help Me Choose'
                    ].map((course) => (
                      <button
                        key={course}
                        type="button"
                        onClick={() => toggleCourse(course)}
                        className={`px-4 py-2 rounded-full text-[11px] font-bold transition-all border-1.5 ${
                          formState.courses.includes(course)
                            ? 'bg-forest border-forest text-white'
                            : 'bg-cream border-forest/10 text-muted hover:border-forest hover:text-forest'
                        }`}
                      >
                        {course}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-ink2 uppercase tracking-wide">Preferred Class Days / Times <span className="text-muted font-normal">(optional)</span></label>
                  <input 
                    type="text" 
                    value={formState.schedule}
                    onChange={e => setFormState({...formState, schedule: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border-1.5 border-forest/10 bg-cream focus:border-forest focus:bg-white outline-none transition-all text-sm"
                    placeholder="e.g. Weekday evenings, Saturday mornings…"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-ink2 uppercase tracking-wide">Anything else you'd like us to know? <span className="text-muted font-normal">(optional)</span></label>
                  <textarea 
                    rows={3}
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border-1.5 border-forest/10 bg-cream focus:border-forest focus:bg-white outline-none transition-all text-sm resize-none"
                    placeholder="e.g. My child is a complete beginner, I'm looking for a female tutor..."
                  />
                </div>

                <div className="pt-4">
                  <button 
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-forest text-white rounded-xl font-bold text-base hover:bg-forest-mid transition-all shadow-xl shadow-forest/20 flex items-center justify-center gap-2 group"
                  >
                    {status === 'loading' ? 'Processing...' : 'Request My Two Free Trial Classes'}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-[10px] text-muted text-center mt-4 leading-relaxed">
                    No credit card required · No commitment · We respond within 1–3 hours
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Next Steps Section */}
        <section className="col-span-full bg-cream2 py-20 px-[5%]">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-7 h-0.5 bg-gold" />
              What Happens Next
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-ink mb-12">From Form to First Class — Here's the Process</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px border-t border-dashed border-forest/20 z-0" />
              {[
                { step: 1, title: 'You Submit the Form', desc: 'Tell us your course interest, age group, and time zone. Takes under 2 minutes.', time: 'Right now' },
                { step: 2, title: 'We Review & Match', desc: 'Our team reviews your details and selects the best available certified tutor for your needs.', time: 'Within 1–3 hours' },
                { step: 3, title: 'You Confirm Your Slot', desc: 'We send you available time slots. You pick what works for your schedule — any day, any time.', time: 'Within 24 hours' },
                { step: 4, title: 'First Class — Free', desc: 'Your tutor joins the Zoom or Skype call. Your first full class is completely free. No payment needed.', time: 'Your chosen time' },
              ].map((item, i) => (
                <div key={i} className="relative z-10 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-forest/10 flex items-center justify-center font-serif text-xl font-bold text-forest mb-4 shadow-sm">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-ink text-sm mb-2">{item.title}</h4>
                  <p className="text-muted text-xs leading-relaxed mb-3">{item.desc}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-forest-pale border border-forest/10 text-forest text-[10px] font-bold">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };
