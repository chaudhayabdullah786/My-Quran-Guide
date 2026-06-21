import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, Book, Volume2, Moon, Sun, Users, GraduationCap, Mail, Play, Instagram, Facebook, Youtube, Clock, User, Signal, ClipboardList, ChevronRight, XCircle, Lock, ChevronLeft, Search, Calendar, Tag, UserCheck, Star } from 'lucide-react';

export const ArabicCoursePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openModule, setOpenModule] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const navigate = useNavigate();

  return (
    <div className="space-y-0 bg-cream">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-[5%] bg-linear-to-br from-cream via-cream2 to-[#EBF7F1] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,var(--forest)_0%,transparent_60%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start lg:items-end relative z-10">
          <div className="pb-8 lg:pb-16">
            <nav className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold text-muted uppercase tracking-widest mb-6 md:mb-8">
              <Link to="/" className="hover:text-forest transition-colors">Home</Link>
              <span>›</span>
              <Link to="/lessons" className="hover:text-forest transition-colors">Courses</Link>
              <span>›</span>
              <span className="text-forest">Arabic Language Course</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2.5 py-1 bg-forest-pale border border-forest/10 text-forest text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full">Beginner</span>
              <span className="px-2.5 py-1 bg-cream2 border border-forest/10 text-ink2 text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full">All Ages</span>
              <span className="px-2.5 py-1 bg-gold/10 border border-gold/20 text-gold text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gold" /> Free First Two Classes
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.1] mb-6 md:mb-8">
              Arabic Language Course —<br />
              <span className="italic text-forest">Read, Understand and Connect with Quranic Arabic</span>
            </h1>

            <p className="text-body text-base md:text-lg font-light leading-relaxed max-w-2xl mb-8 md:mb-10">
              Arabic is the language of the Quran. Understanding it — even at a basic level — transforms how you experience recitation, Salah, and daily duas. <strong>Our Arabic course is built specifically for Quran-focused learners.</strong>
              <br /><br className="hidden md:block" />
              This is not general conversational Arabic — it is the vocabulary, grammar, and sentence structures that appear most in the Quran and Islamic texts.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 py-6 md:py-8 border-y border-forest/10 mb-8 md:mb-10">
              {[
                { icon: <Clock size={18} />, label: '6–18 months', sub: 'Typical duration' },
                { icon: <User size={18} />, label: 'Live 1-on-1', sub: 'Every session' },
                { icon: <Signal size={18} />, label: 'Beginner', sub: 'Level' },
                { icon: <Users size={18} />, label: 'All ages', sub: 'Age group' },
                { icon: <ClipboardList size={18} />, label: 'Prerequisites', sub: 'Noorani Qaida level' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 md:gap-3">
                  <div className="text-forest opacity-60 shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-ink font-bold text-xs md:text-sm leading-tight">{item.label}</div>
                    <div className="text-muted text-[9px] md:text-[10px] uppercase tracking-wider">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link to="/register" className="bg-forest text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-bold hover:bg-forest-mid transition-all shadow-xl shadow-forest/20 flex items-center justify-center gap-2 group">
                Start Two Free Trial Classes <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 md:px-8 py-3.5 md:py-4 border-2 border-forest/10 text-forest rounded-xl font-bold hover:bg-forest-pale transition-all text-center"
              >
                View Full Syllabus
              </button>
            </div>
            <p className="text-[9px] md:text-[10px] text-muted mt-4 flex items-center justify-center sm:justify-start gap-2">
              <Lock size={12} /> No credit card · No commitment · Starts within 24 hours
            </p>
          </div>

          <div className="bg-ink text-white p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-2xl mb-8 lg:mb-16">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
            <div className="font-serif text-4xl text-gold/30 mb-8 text-right" dir="rtl">لِسَانٌ عَرَبِيٌّ</div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gold-light mb-8">Course at a Glance</h3>
            <div className="space-y-0">
              {[
                { label: 'Level', val: 'Beginner' },
                { label: 'Duration', val: '6–18 months' },
                { label: 'Age Group', val: 'All ages' },
                { label: 'Class Format', val: 'Live 1-on-1 online' },
                { label: 'Prerequisite', val: 'Noorani Qaida level' },
                { label: 'Starting From', val: '$39 / month', gold: true },
                { label: 'Trial Class', val: 'FREE', gold: true }
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                  <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold">{stat.label}</span>
                  <span className={`text-sm font-bold ${stat.gold ? 'text-gold-light' : 'text-white/80'}`}>{stat.val}</span>
                </div>
              ))}
            </div>
            <button onClick={() => navigate('/register')} className="w-full mt-10 bg-gold text-ink py-4 rounded-xl font-bold hover:bg-gold-light transition-all shadow-lg shadow-black/20">
              Claim Two Free Trial Classes →
            </button>
            <p className="text-center text-[10px] text-white/20 mt-4">No card · No commitment · 24h response</p>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            What You Will Learn
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-12">Everything Covered in This Course</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Arabic root word system', desc: 'Most Arabic words share 3-letter roots. Understanding roots unlocks the meaning of thousands of words simultaneously.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Quranic vocabulary', desc: 'The 500 most frequently occurring words in the Quran — covering over 75% of all Quranic text.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Basic Arabic grammar (Nahw)', desc: 'Verb conjugation, noun-adjective agreement, sentence structure — explained clearly and practically.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Sentence structure', desc: 'How Arabic sentences are built — Subject-Predicate, Verbal sentences, and Quranic sentence patterns.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Reading with comprehension', desc: 'Moving from phonetic reading to genuine understanding — one of the most transformative shifts in a Muslim\'s life.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Understanding Salah & Duas', desc: 'Following your Imam in prayer, understanding every Dua you make — without translation.' }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-cream rounded-2xl border border-forest/5 hover:border-forest/20 transition-all group">
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h3 className="text-lg font-bold text-ink mb-3">{item.title}</h3>
                <p className="text-body text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 px-[5%] bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-7 h-0.5 bg-gold" />
              Full Syllabus
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-8 text-center">Complete Arabic Course Curriculum</h2>
            <div className="inline-flex items-center gap-2 bg-forest/5 px-6 py-3 rounded-xl text-muted text-sm border border-forest/10">
              <ClipboardList size={18} className="text-forest" />
              <span>Prerequisite: <strong>Ability to read Arabic letters.</strong> Absolute beginners start with Noorani Qaida first.</span>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { 
                num: '01', 
                title: 'Arabic Root System & Core Vocabulary', 
                lessons: '8 lessons',
                content: [
                  { name: 'Introduction to 3-letter roots — the key to Arabic', type: 'Theory' },
                  { name: 'Root family 1 — words from ك ت ب (writing)', type: 'Practice' },
                  { name: 'Root family 2 — words from ع ل م (knowledge)', type: 'Practice' },
                  { name: 'Root family 3 — words from ق ر أ (reading/Quran)', type: 'Practice' },
                  { name: 'Top 100 Quran words — Part 1', type: 'Practice' },
                  { name: 'Top 100 Quran words — Part 2', type: 'Practice' },
                  { name: 'Reading Quran text — identify known words', type: 'Practice' },
                  { name: 'Module assessment — vocabulary and roots', type: 'Assessment' }
                ]
              },
              { 
                num: '02', 
                title: 'Basic Arabic Grammar (Nahw)', 
                lessons: '10 lessons',
                content: [
                  { name: 'Nouns — masculine, feminine, singular, plural', type: 'Theory' },
                  { name: 'The definite article Al — its rules in Arabic', type: 'Theory' },
                  { name: 'Adjective-noun agreement in Arabic', type: 'Theory' },
                  { name: 'Pronouns — personal, attached, and demonstrative', type: 'Theory' },
                  { name: 'Basic verb conjugation — past and present', type: 'Theory' },
                  { name: 'Subject-predicate sentence (Jumlah Ismiyyah)', type: 'Theory' },
                  { name: 'Verbal sentence (Jumlah Fi\'liyyah)', type: 'Theory' },
                  { name: 'Prepositions in Quranic Arabic', type: 'Theory' },
                  { name: 'Reading simple Quranic ayahs with analysis', type: 'Practice' },
                  { name: 'Module assessment — grammar foundations', type: 'Assessment' }
                ]
              },
              { 
                num: '03', 
                title: 'Quran Comprehension — Applied Arabic', 
                lessons: 'Ongoing',
                content: [
                  { name: 'Surah Al-Fatiha — full grammatical analysis', type: 'Practice' },
                  { name: 'Surah Al-Ikhlas — word by word breakdown', type: 'Practice' },
                  { name: 'Surah Al-Baqarah opening ayahs', type: 'Practice' },
                  { name: 'Common Dua phrases — full understanding', type: 'Practice' },
                  { name: 'Selected Ayahs — student\'s choice', type: 'Practice' },
                  { name: 'Ongoing comprehension building — Juz by Juz', type: 'Practice' }
                ]
              }
            ].map((module, i) => (
              <div key={i} className="bg-white rounded-2xl border border-forest/5 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                  className="w-full p-6 flex items-center gap-6 hover:bg-forest/5 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-forest/20">{module.num}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-ink group-hover:text-forest transition-colors">{module.title}</h3>
                    <p className="text-muted text-[10px] uppercase tracking-widest font-bold mt-1">{module.lessons}</p>
                  </div>
                  <div className={`w-8 h-8 rounded-full border border-forest/10 flex items-center justify-center text-forest transition-transform ${openModule === i ? 'rotate-180 bg-forest text-white' : ''}`}>
                    <ChevronRight size={16} className="rotate-90" />
                  </div>
                </button>
                <AnimatePresence>
                  {openModule === i && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden bg-slate-50/50"
                    >
                      <div className="p-6 pt-0 space-y-1">
                        {module.content.map((lesson, j) => (
                          <div key={j} className="flex items-center justify-between py-3 border-b border-forest/5 last:border-0">
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-forest/20" />
                              <span className="text-sm text-body font-light">{lesson.name}</span>
                            </div>
                            <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              lesson.type === 'Theory' ? 'bg-blue-50 text-blue-600' : 
                              lesson.type === 'Practice' ? 'bg-emerald-50 text-emerald-600' : 
                              'bg-gold/10 text-gold'
                            }`}>{lesson.type}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Lesson Section */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-ink text-white rounded-[40px] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,var(--gold)_0%,transparent_60%)]" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 text-gold-light text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
                <span className="w-7 h-0.5 bg-gold" />
                Inside a Real Class
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Sample 45-Minute Arabic Session</h2>
              <p className="text-white/40 text-lg font-light mb-12">Module 1 — Lesson 3: Root Family ع ل م (Knowledge)</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { phase: '1', time: '8 min', title: 'Revision', items: ['Recap root ك ت ب from last session', 'Student recalls derived words', 'Quick vocabulary quiz — 5 words'] },
                  { phase: '2', time: '15 min', title: 'New Root', items: ['Introduce root ع ل م — its meaning', 'Derived words — Ilm, Aalim, Mualim', 'Find all three in actual Quran ayahs'] },
                  { phase: '3', time: '15 min', title: 'Applied Reading', items: ['Read Ayah 31 of Al-Baqarah', 'Identify all known root words', 'Understand the ayah in Arabic directly'] },
                  { phase: '4', time: '7 min', title: 'Wrap-Up', items: ['Summary of words learned', 'Homework — find 5 more derivatives', 'Next root preview — ق و ل'] }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Phase {item.phase}</span>
                      <span className="text-[10px] font-bold text-gold-light uppercase tracking-widest flex items-center gap-1.5">
                        <Clock size={12} /> {item.time}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold mb-4">{item.title}</h4>
                    <ul className="space-y-3">
                      {item.items.map((li, j) => (
                        <li key={j} className="text-xs text-white/50 flex items-start gap-2 leading-relaxed">
                          <span className="text-gold-light mt-1">›</span> {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Enroll */}
      <section className="py-24 px-[5%] bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-forest-pale border border-forest/10 p-12 rounded-3xl">
            <h3 className="text-forest font-bold flex items-center gap-3 mb-8">
              <CheckCircle size={24} /> This course IS for you if…
            </h3>
            <ul className="space-y-6">
              {[
                'You want to understand the Quran directly in Arabic',
                'You are studying Tafseer and want Arabic to deepen the experience',
                'You want to follow Salah with real comprehension',
                'You are learning Hifz and want to understand what you memorize',
                'Your goal is to connect with the Quran beyond phonetic recitation'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-body leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-forest/5 p-12 rounded-3xl flex flex-col">
            <h3 className="text-red-600 font-bold flex items-center gap-3 mb-8">
              <XCircle size={24} /> Not sure? You may need…
            </h3>
            <ul className="space-y-6 mb-10">
              {[
                'You cannot yet read Arabic letters — start with Noorani Qaida',
                'You are looking for conversational Modern Standard Arabic — this is Quranic Arabic focused'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-body leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-200 mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8 border-t border-forest/5">
              <p className="text-sm text-muted mb-6">Not sure which course is right for your level?</p>
              <button onClick={() => navigate('/contact')} className="text-forest font-bold flex items-center gap-2 hover:underline">
                Book a free placement test <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            FAQ
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-12">Common Questions</h2>
          
          <div className="space-y-0">
            {[
              { q: 'Is this Quranic Arabic or Modern Arabic?', a: 'This course teaches Quranic Arabic — the classical Arabic of the Quran and Islamic texts. While there is overlap with Modern Standard Arabic, the focus is entirely on understanding Quranic vocabulary, grammar patterns, and sentence structures. It is not a conversational Arabic course.' },
              { q: 'How quickly will I be able to understand the Quran?', a: 'Within the first 3 months, students typically recognise 100–200 frequently occurring Quran words — which already covers a significant portion of the Quran. Full comprehension is a longer journey, but the early milestones are reached faster than most students expect.' },
              { q: 'Can I take Arabic alongside Tajweed or Tafseer?', a: 'Yes — and this combination is particularly powerful. Students who study Arabic alongside Tafseer understand the depths of meaning that translation cannot capture. Students who study Arabic alongside Tajweed develop a much stronger connection to what they are reciting.' },
              { q: 'Do I need to be able to read Arabic to start this course?', a: 'Yes. You need to be able to read Arabic letters before beginning. If you cannot, start with the Noorani Qaida course first — it prepares you fully for Arabic Language study.' }
            ].map((faq, i) => (
              <div key={i} className="border-b border-forest/10 last:border-0">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-8 flex items-center justify-between gap-6 text-left group"
                >
                  <span className={`text-lg font-bold transition-colors ${openFaq === i ? 'text-forest' : 'text-ink group-hover:text-forest'}`}>{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full border border-forest/10 flex items-center justify-center text-forest transition-all shrink-0 ${openFaq === i ? 'bg-forest text-white rotate-180' : 'bg-forest-pale'}`}>
                    <ChevronRight size={18} className="rotate-90" />
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
                      <p className="text-body text-base leading-relaxed pb-8 pr-12 font-light">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Course Banner */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-forest rounded-[32px] p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full pointer-events-none" />
            <div className="text-center lg:text-left relative z-10">
              <div className="text-gold-light text-[10px] font-bold uppercase tracking-[0.3em] mb-4">After This Course</div>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">Next Step: Quran Tafseer →</h3>
              <p className="text-white/40 text-lg font-light">Continue your Quran journey after completing this course</p>
            </div>
            <button onClick={() => navigate('/course/tafseer-course')} className="bg-gold text-ink px-10 py-5 rounded-2xl font-bold hover:bg-gold-light transition-all shadow-2xl shadow-black/20 relative z-10 whitespace-nowrap">
              View Next Course →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const HifzCoursePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openModule, setOpenModule] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const navigate = useNavigate();

  return (
    <div className="space-y-0 bg-cream">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-[5%] bg-linear-to-br from-cream via-cream2 to-[#FDF8F3] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,var(--forest)_0%,transparent_60%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start lg:items-end relative z-10">
          <div className="pb-8 lg:pb-16">
            <nav className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold text-muted uppercase tracking-widest mb-6 md:mb-8">
              <Link to="/" className="hover:text-forest transition-colors">Home</Link>
              <span>›</span>
              <Link to="/lessons" className="hover:text-forest transition-colors">Courses</Link>
              <span>›</span>
              <span className="text-forest">Quran Hifz Course</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2.5 py-1 bg-forest-pale border border-forest/10 text-forest text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full">Advanced</span>
              <span className="px-2.5 py-1 bg-cream2 border border-forest/10 text-ink2 text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full">All Ages</span>
              <span className="px-2.5 py-1 bg-gold/10 border border-gold/20 text-gold text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gold" /> Two Free Trial Classes
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.1] mb-6 md:mb-8">
              Quran Hifz Course —<br />
              <span className="italic text-forest">A Lifelong Journey of Memorization and Preservation</span>
            </h1>

            <p className="text-body text-base md:text-lg font-light leading-relaxed max-w-2xl mb-8 md:mb-10">
              Memorizing the Quran is one of the highest honors a Muslim can achieve. It requires dedication, a proven method, and constant revision. <strong>Our Hifz program is designed to make this journey structured, sustainable, and spiritually rewarding.</strong>
              <br /><br className="hidden md:block" />
              We focus on quality over speed, ensuring that every Ayah memorized is preserved through systematic revision and perfect Tajweed.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 py-6 md:py-8 border-y border-forest/10 mb-8 md:mb-10">
              {[
                { icon: <Clock size={18} />, label: '2–4 years', sub: 'Typical duration' },
                { icon: <User size={18} />, label: 'Live 1-on-1', sub: 'Every session' },
                { icon: <Signal size={18} />, label: 'Advanced', sub: 'Level' },
                { icon: <Users size={18} />, label: 'All ages', sub: 'Age group' },
                { icon: <ClipboardList size={18} />, label: 'Prerequisites', sub: 'Fluency in reading' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 md:gap-3">
                  <div className="text-forest opacity-60 shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-ink font-bold text-xs md:text-sm leading-tight">{item.label}</div>
                    <div className="text-muted text-[9px] md:text-[10px] uppercase tracking-wider">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link to="/register" className="bg-forest text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-bold hover:bg-forest-mid transition-all shadow-xl shadow-forest/20 flex items-center justify-center gap-2 group">
                Start Two Free Trial Classes <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 md:px-8 py-3.5 md:py-4 border-2 border-forest/10 text-forest rounded-xl font-bold hover:bg-forest-pale transition-all text-center"
              >
                View Hifz Method
              </button>
            </div>
            <p className="text-[9px] md:text-[10px] text-muted mt-4 flex items-center justify-center sm:justify-start gap-2">
              <Lock size={12} /> No credit card · No commitment · Starts within 24 hours
            </p>
          </div>

          <div className="bg-ink text-white p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-2xl mb-8 lg:mb-16">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
            <div className="font-serif text-4xl text-gold/30 mb-8 text-right" dir="rtl">تَحْفِيظُ القُرْآنِ</div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gold-light mb-8">Course at a Glance</h3>
            <div className="space-y-0">
              {[
                { label: 'Level', val: 'Advanced' },
                { label: 'Duration', val: '2–4 years (Full Hifz)' },
                { label: 'Age Group', val: 'All ages' },
                { label: 'Class Format', val: 'Live 1-on-1 online' },
                { label: 'Prerequisite', val: 'Fluent Quran reading' },
                { label: 'Starting From', val: '$49 / month', gold: true },
                { label: 'Trial Class', val: 'FREE', gold: true }
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                  <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold">{stat.label}</span>
                  <span className={`text-sm font-bold ${stat.gold ? 'text-gold-light' : 'text-white/80'}`}>{stat.val}</span>
                </div>
              ))}
            </div>
            <button onClick={() => navigate('/register')} className="w-full mt-10 bg-gold text-ink py-4 rounded-xl font-bold hover:bg-gold-light transition-all shadow-lg shadow-black/20">
              Claim Two Free Trial Classes →
            </button>
            <p className="text-center text-[10px] text-white/20 mt-4">No card · No commitment · 24h response</p>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            What You Will Learn
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-12">Everything Covered in This Course</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Systematic memorization (Hifz)', desc: 'Personalized daily targets based on your memory capacity and schedule.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Daily revision (Daur)', desc: 'A rigorous system to ensure old lessons are never forgotten while learning new ones.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Weekly tests', desc: 'Regular assessments to track progress and identify areas that need more focus.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Tajweed perfection', desc: 'Applying advanced Tajweed rules during memorization for a beautiful and accurate recitation.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Certification (Ijaza)', desc: 'Upon completion, students receive a certificate of Hifz from My Quran Guide.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Spiritual connection', desc: 'Developing a deep, lifelong relationship with the words of Allah (SWT).' }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-cream rounded-2xl border border-forest/5 hover:border-forest/20 transition-all group">
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h3 className="text-lg font-bold text-ink mb-3">{item.title}</h3>
                <p className="text-body text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 px-[5%] bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-7 h-0.5 bg-gold" />
              Hifz Stages
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-8 text-center">Our 3-Stage Hifz Methodology</h2>
            <div className="inline-flex items-center gap-2 bg-forest/5 px-6 py-3 rounded-xl text-muted text-sm border border-forest/10">
              <ClipboardList size={18} className="text-forest" />
              <span>Prerequisite: <strong>Fluency in Quran reading with basic Tajweed.</strong></span>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { 
                num: '01', 
                title: 'Foundational Stage (Juz 30 & Selected Surahs)', 
                lessons: '3–6 months',
                content: [
                  { name: 'Memorizing Juz Amma (Juz 30) — short surahs', type: 'Hifz' },
                  { name: 'Establishing the daily revision habit', type: 'Method' },
                  { name: 'Perfecting Tajweed on short surahs', type: 'Tajweed' },
                  { name: 'Memorizing Surah Al-Kahf (selected portions)', type: 'Hifz' },
                  { name: 'Memorizing Surah Ar-Rahman & Al-Mulk', type: 'Hifz' },
                  { name: 'First major assessment — Juz 30 exam', type: 'Assessment' }
                ]
              },
              { 
                num: '02', 
                title: 'Intensive Hifz Stage (Juz 1 onwards)', 
                lessons: '18–36 months',
                content: [
                  { name: 'Starting Juz 1 — Al-Baqarah', type: 'Hifz' },
                  { name: 'Implementing the "Sabqi, Sabq, Manzil" system', type: 'Method' },
                  { name: 'Daily new lesson (Sabq) — personalized targets', type: 'Hifz' },
                  { name: 'Recent revision (Sabqi) — last 5–7 pages', type: 'Revision' },
                  { name: 'Old revision (Manzil) — previous Juz', type: 'Revision' },
                  { name: 'Quarterly progress reports and exams', type: 'Assessment' }
                ]
              },
              { 
                num: '03', 
                title: 'Completion & Consolidation', 
                lessons: '6–12 months',
                content: [
                  { name: 'Memorizing the final Juz of the Quran', type: 'Hifz' },
                  { name: 'Intensive full-Quran revision cycles', type: 'Consolidation' },
                  { name: 'Mastering difficult connections (Mutashabihat)', type: 'Advanced' },
                  { name: 'Final Hifz examination — full Quran', type: 'Assessment' },
                  { name: 'Ijaza preparation and certification', type: 'Certification' }
                ]
              }
            ].map((module, i) => (
              <div key={i} className="bg-white rounded-2xl border border-forest/5 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                  className="w-full p-6 flex items-center gap-6 hover:bg-forest/5 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-forest/20">{module.num}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-ink group-hover:text-forest transition-colors">{module.title}</h3>
                    <p className="text-muted text-[10px] uppercase tracking-widest font-bold mt-1">{module.lessons}</p>
                  </div>
                  <div className={`w-8 h-8 rounded-full border border-forest/10 flex items-center justify-center text-forest transition-transform ${openModule === i ? 'rotate-180 bg-forest text-white' : ''}`}>
                    <ChevronRight size={16} className="rotate-90" />
                  </div>
                </button>
                <AnimatePresence>
                  {openModule === i && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden bg-slate-50/50"
                    >
                      <div className="p-6 pt-0 space-y-1">
                        {module.content.map((lesson, j) => (
                          <div key={j} className="flex items-center justify-between py-3 border-b border-forest/5 last:border-0">
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-forest/20" />
                              <span className="text-sm text-body font-light">{lesson.name}</span>
                            </div>
                            <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              lesson.type === 'Hifz' ? 'bg-blue-50 text-blue-600' : 
                              lesson.type === 'Revision' ? 'bg-emerald-50 text-emerald-600' : 
                              'bg-gold/10 text-gold'
                            }`}>{lesson.type}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Schedule Section */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-ink text-white rounded-[40px] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,var(--gold)_0%,transparent_60%)]" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 text-gold-light text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
                <span className="w-7 h-0.5 bg-gold" />
                Inside a Real Class
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Sample 60-Minute Hifz Session</h2>
              <p className="text-white/40 text-lg font-light mb-12">The "Sabqi, Sabq, Manzil" Daily Routine</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { phase: '1', time: '20 min', title: 'Manzil (Old Revision)', items: ['Reciting a full Juz from memory', 'Teacher checks for fluency', 'Focus on long-term retention'] },
                  { phase: '2', time: '15 min', title: 'Sabqi (Recent Revision)', items: ['Reciting the last 5–7 pages', 'Ensuring new lessons are solid', 'Correcting any minor errors'] },
                  { phase: '3', time: '20 min', title: 'Sabq (New Lesson)', items: ['Reciting the new lines for today', 'Teacher checks Tajweed & flow', 'Student repeats until perfect'] },
                  { phase: '4', time: '5 min', title: 'Wrap-Up', items: ['Setting the target for tomorrow', 'Spiritual reminder/Dua', 'Homework — 30 min self-revision'] }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Phase {item.phase}</span>
                      <span className="text-[10px] font-bold text-gold-light uppercase tracking-widest flex items-center gap-1.5">
                        <Clock size={12} /> {item.time}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold mb-4">{item.title}</h4>
                    <ul className="space-y-3">
                      {item.items.map((li, j) => (
                        <li key={j} className="text-xs text-white/50 flex items-start gap-2 leading-relaxed">
                          <span className="text-gold-light mt-1">›</span> {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Enroll */}
      <section className="py-24 px-[5%] bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-forest-pale border border-forest/10 p-12 rounded-3xl">
            <h3 className="text-forest font-bold flex items-center gap-3 mb-8">
              <CheckCircle size={24} /> This course IS for you if…
            </h3>
            <ul className="space-y-6">
              {[
                'You want to memorize the entire Quran or specific Juz',
                'You have already memorized some and want to complete it',
                'You want a structured system to prevent forgetting old lessons',
                'You are looking for a dedicated teacher to listen to you daily',
                'You want to perfect your Tajweed while memorizing'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-body leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-forest/5 p-12 rounded-3xl flex flex-col">
            <h3 className="text-red-600 font-bold flex items-center gap-3 mb-8">
              <XCircle size={24} /> Not sure? You may need…
            </h3>
            <ul className="space-y-6 mb-10">
              {[
                'You cannot yet read the Quran fluently — start with Noorani Qaida',
                'You struggle with basic Tajweed — start with the Tajweed course first'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-body leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-200 mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8 border-t border-forest/5">
              <p className="text-sm text-muted mb-6">Not sure if you're ready for Hifz?</p>
              <button onClick={() => navigate('/contact')} className="text-forest font-bold flex items-center gap-2 hover:underline">
                Book a free assessment session <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            FAQ
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-12">Common Questions</h2>
          
          <div className="space-y-0">
            {[
              { q: 'How long does it take to memorize the whole Quran?', a: 'On average, it takes 2 to 4 years for a full-time student. However, this varies greatly depending on the student\'s memory, dedication, and how many classes they take per week. We focus on quality and retention rather than just speed.' },
              { q: 'Can I start Hifz if I am an adult with a busy schedule?', a: 'Absolutely. Many of our students are working professionals or university students. We offer flexible scheduling and personalized targets that fit your lifestyle. Even memorizing a few lines a day leads to completion over time.' },
              { q: 'What is the "Sabqi, Sabq, Manzil" system?', a: 'It is a traditional and highly effective Hifz method. "Sabq" is the new lesson for the day. "Sabqi" is the revision of the most recent lessons (last 5-7 days). "Manzil" is the revision of older parts of the Quran. This system ensures that nothing is forgotten.' },
              { q: 'Do you offer Hifz for children?', a: 'Yes, we have specialized tutors who are experts in teaching children. We use engaging methods to keep them motivated and ensure they develop a love for the Quran while memorizing it.' }
            ].map((faq, i) => (
              <div key={i} className="border-b border-forest/10 last:border-0">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-8 flex items-center justify-between gap-6 text-left group"
                >
                  <span className={`text-lg font-bold transition-colors ${openFaq === i ? 'text-forest' : 'text-ink group-hover:text-forest'}`}>{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full border border-forest/10 flex items-center justify-center text-forest transition-all shrink-0 ${openFaq === i ? 'bg-forest text-white rotate-180' : 'bg-forest-pale'}`}>
                    <ChevronRight size={18} className="rotate-90" />
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
                      <p className="text-body text-base leading-relaxed pb-8 pr-12 font-light">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Course Banner */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-forest rounded-[32px] p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full pointer-events-none" />
            <div className="text-center lg:text-left relative z-10">
              <div className="text-gold-light text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Complementary Study</div>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">Next Step: Islamic Studies →</h3>
              <p className="text-white/40 text-lg font-light">Deepen your understanding of the religion alongside Hifz</p>
            </div>
            <button onClick={() => navigate('/course/islamic-studies')} className="bg-gold text-ink px-10 py-5 rounded-2xl font-bold hover:bg-gold-light transition-all shadow-2xl shadow-black/20 relative z-10 whitespace-nowrap">
              View Course Details →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const IslamicStudiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openModule, setOpenModule] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const navigate = useNavigate();

  return (
    <div className="space-y-0 bg-cream">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-[5%] bg-linear-to-br from-cream via-cream2 to-[#E8F4EE] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,var(--forest)_0%,transparent_60%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start lg:items-end relative z-10">
          <div className="pb-8 lg:pb-16">
            <nav className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold text-muted uppercase tracking-widest mb-6 md:mb-8">
              <Link to="/" className="hover:text-forest transition-colors">Home</Link>
              <span>›</span>
              <Link to="/lessons" className="hover:text-forest transition-colors">Courses</Link>
              <span>›</span>
              <span className="text-forest">Islamic Studies & Duas</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2.5 py-1 bg-forest-pale border border-forest/10 text-forest text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full">Beginner to Intermediate</span>
              <span className="px-2.5 py-1 bg-cream2 border border-forest/10 text-ink2 text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full">All Ages</span>
              <span className="px-2.5 py-1 bg-gold/10 border border-gold/20 text-gold text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gold" /> Two Free Trial Classes
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.1] mb-6 md:mb-8">
              Islamic Studies & Duas —<br />
              <span className="italic text-forest">Build a Complete Muslim Foundation</span>
            </h1>

            <p className="text-body text-base md:text-lg font-light leading-relaxed max-w-2xl mb-8 md:mb-10">
              Quran recitation is the core of Islamic learning — but a Muslim's knowledge does not end there. <strong>This course provides a complete, structured Islamic curriculum covering faith, worship, and character.</strong>
              <br /><br className="hidden md:block" />
              Whether you are a parent looking for a solid foundation for your child, or an adult wanting to deepen your own understanding, our course adapts to your level.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 py-6 md:py-8 border-y border-forest/10 mb-8 md:mb-10">
              {[
                { icon: <Clock size={18} />, label: '12–24 months', sub: 'Full curriculum' },
                { icon: <User size={18} />, label: 'Live 1-on-1', sub: 'Every session' },
                { icon: <Signal size={18} />, label: 'All Levels', sub: 'Beginner friendly' },
                { icon: <Users size={18} />, label: 'All ages', sub: 'Age group' },
                { icon: <ClipboardList size={18} />, label: 'Flexible', sub: 'Study plan' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 md:gap-3">
                  <div className="text-forest opacity-60 shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-ink font-bold text-xs md:text-sm leading-tight">{item.label}</div>
                    <div className="text-muted text-[9px] md:text-[10px] uppercase tracking-wider">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link to="/register" className="bg-forest text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-bold hover:bg-forest-mid transition-all shadow-xl shadow-forest/20 flex items-center justify-center gap-2 group">
                Start Two Free Trial Classes <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 md:px-8 py-3.5 md:py-4 border-2 border-forest/10 text-forest rounded-xl font-bold hover:bg-forest-pale transition-all text-center"
              >
                View Syllabus
              </button>
            </div>
            <p className="text-[9px] md:text-[10px] text-muted mt-4 flex items-center justify-center sm:justify-start gap-2">
              <Lock size={12} /> No credit card · No commitment · Starts within 24 hours
            </p>
          </div>

          <div className="bg-ink text-white p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-2xl mb-8 lg:mb-16">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
            <div className="font-serif text-4xl text-gold/30 mb-8 text-right" dir="rtl">الدِّرَاسَاتُ الإِسْلَامِيَّةُ</div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gold-light mb-8">Course at a Glance</h3>
            <div className="space-y-0">
              {[
                { label: 'Level', val: 'Beginner to Advanced' },
                { label: 'Duration', val: '12–24 months' },
                { label: 'Age Group', val: 'All ages' },
                { label: 'Class Format', val: 'Live 1-on-1 online' },
                { label: 'Prerequisite', val: 'None' },
                { label: 'Starting From', val: '$39 / month', gold: true },
                { label: 'Trial Class', val: 'FREE', gold: true }
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                  <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold">{stat.label}</span>
                  <span className={`text-sm font-bold ${stat.gold ? 'text-gold-light' : 'text-white/80'}`}>{stat.val}</span>
                </div>
              ))}
            </div>
            <button onClick={() => navigate('/register')} className="w-full mt-10 bg-gold text-ink py-4 rounded-xl font-bold hover:bg-gold-light transition-all shadow-lg shadow-black/20">
              Claim Two Free Trial Classes →
            </button>
            <p className="text-center text-[10px] text-white/20 mt-4">No card · No commitment · 24h response</p>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            What You Will Learn
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-12">Everything Covered in This Course</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Aqeedah (Faith)', desc: 'Understanding the 6 pillars of Iman and the core beliefs that define a Muslim\'s worldview.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Fiqh of Worship', desc: 'Practical learning of Wudu, Salah, Fasting, Zakat, and Hajj according to the Sunnah.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Seerah (Prophetic Life)', desc: 'The inspiring life story of Prophet Muhammad (PBUH) and the lessons we can apply today.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Daily Duas & Adhkar', desc: 'Memorizing and understanding essential supplications for every part of a Muslim\'s day.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Islamic Manners (Akhlaq)', desc: 'Developing character, honesty, respect for parents, and the etiquette of social interaction.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Hadith Studies', desc: 'Learning the core sayings of the Prophet (PBUH) that guide our daily actions and intentions.' }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-cream rounded-2xl border border-forest/5 hover:border-forest/20 transition-all group">
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h3 className="text-lg font-bold text-ink mb-3">{item.title}</h3>
                <p className="text-body text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 px-[5%] bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-7 h-0.5 bg-gold" />
              Full Syllabus
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-8 text-center">Islamic Studies Curriculum</h2>
            <div className="inline-flex items-center gap-2 bg-forest/5 px-6 py-3 rounded-xl text-muted text-sm border border-forest/10">
              <ClipboardList size={18} className="text-forest" />
              <span>This curriculum is adapted based on the student's age and prior knowledge.</span>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { 
                num: '01', 
                title: 'Foundations of Faith (Aqeedah)', 
                lessons: '12 lessons',
                content: [
                  { name: 'The 5 Pillars of Islam — deep dive', type: 'Theory' },
                  { name: 'The 6 Pillars of Iman — understanding faith', type: 'Theory' },
                  { name: 'Tawheed — the Oneness of Allah', type: 'Theory' },
                  { name: 'Belief in Angels, Books, and Messengers', type: 'Theory' },
                  { name: 'The Day of Judgment and Al-Qadr', type: 'Theory' },
                  { name: 'Module assessment — Aqeedah foundations', type: 'Assessment' }
                ]
              },
              { 
                num: '02', 
                title: 'Fiqh of Worship (Ibadah)', 
                lessons: '15 lessons',
                content: [
                  { name: 'Taharah — rules of cleanliness and Wudu', type: 'Practical' },
                  { name: 'Salah — step-by-step guide to prayer', type: 'Practical' },
                  { name: 'Common mistakes in Salah and how to fix them', type: 'Practical' },
                  { name: 'Fasting and the month of Ramadan', type: 'Theory' },
                  { name: 'Zakat and Hajj — the basics', type: 'Theory' },
                  { name: 'Module assessment — Fiqh of Ibadah', type: 'Assessment' }
                ]
              },
              { 
                num: '03', 
                title: 'Seerah & Islamic History', 
                lessons: '15 lessons',
                content: [
                  { name: 'Life in Makkah — the early years', type: 'History' },
                  { name: 'The Hijrah and the establishment of Madinah', type: 'History' },
                  { name: 'Major events in the life of the Prophet (PBUH)', type: 'History' },
                  { name: 'The Four Rightly Guided Caliphs', type: 'History' },
                  { name: 'Stories of the Prophets in the Quran', type: 'History' },
                  { name: 'Module assessment — Seerah & History', type: 'Assessment' }
                ]
              },
              { 
                num: '04', 
                title: 'Duas, Adhkar & Character', 
                lessons: 'Ongoing',
                content: [
                  { name: 'Morning and Evening Adhkar', type: 'Memorization' },
                  { name: 'Duas for daily actions (eating, sleeping, etc.)', type: 'Memorization' },
                  { name: 'Islamic Etiquette (Adab) — social & personal', type: 'Theory' },
                  { name: 'Rights of Parents and Neighbors', type: 'Theory' },
                  { name: 'Honesty, Patience, and Gratitude', type: 'Theory' }
                ]
              }
            ].map((module, i) => (
              <div key={i} className="bg-white rounded-2xl border border-forest/5 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                  className="w-full p-6 flex items-center gap-6 hover:bg-forest/5 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-forest/20">{module.num}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-ink group-hover:text-forest transition-colors">{module.title}</h3>
                    <p className="text-muted text-[10px] uppercase tracking-widest font-bold mt-1">{module.lessons}</p>
                  </div>
                  <div className={`w-8 h-8 rounded-full border border-forest/10 flex items-center justify-center text-forest transition-transform ${openModule === i ? 'rotate-180 bg-forest text-white' : ''}`}>
                    <ChevronRight size={16} className="rotate-90" />
                  </div>
                </button>
                <AnimatePresence>
                  {openModule === i && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden bg-slate-50/50"
                    >
                      <div className="p-6 pt-0 space-y-1">
                        {module.content.map((lesson, j) => (
                          <div key={j} className="flex items-center justify-between py-3 border-b border-forest/5 last:border-0">
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-forest/20" />
                              <span className="text-sm text-body font-light">{lesson.name}</span>
                            </div>
                            <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              lesson.type === 'Theory' ? 'bg-blue-50 text-blue-600' : 
                              lesson.type === 'Practical' ? 'bg-emerald-50 text-emerald-600' : 
                              lesson.type === 'History' ? 'bg-purple-50 text-purple-600' :
                              'bg-gold/10 text-gold'
                            }`}>{lesson.type}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Lesson Section */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-ink text-white rounded-[40px] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,var(--gold)_0%,transparent_60%)]" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 text-gold-light text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
                <span className="w-7 h-0.5 bg-gold" />
                Inside a Real Class
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Sample 45-Minute Islamic Studies Session</h2>
              <p className="text-white/40 text-lg font-light mb-12">Module 4 — Lesson 2: The Power of Gratitude (Shukr)</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { phase: '1', time: '10 min', title: 'Dua Revision', items: ['Reciting Duas learned last week', 'Checking pronunciation and meaning', 'Quick quiz on when to use them'] },
                  { phase: '2', time: '15 min', title: 'New Concept', items: ['Introduction to Shukr (Gratitude)', 'Quranic ayahs about gratitude', 'The story of Prophet Sulaiman (AS)'] },
                  { phase: '3', time: '15 min', title: 'Practical Application', items: ['How to practice Shukr daily', 'Making a "Gratitude List"', 'Learning the Dua for gratitude'] },
                  { phase: '4', time: '5 min', title: 'Wrap-Up', items: ['Summary of key points', 'Homework — practice Shukr today', 'Next lesson preview — Patience'] }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Phase {item.phase}</span>
                      <span className="text-[10px] font-bold text-gold-light uppercase tracking-widest flex items-center gap-1.5">
                        <Clock size={12} /> {item.time}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold mb-4">{item.title}</h4>
                    <ul className="space-y-3">
                      {item.items.map((li, j) => (
                        <li key={j} className="text-xs text-white/50 flex items-start gap-2 leading-relaxed">
                          <span className="text-gold-light mt-1">›</span> {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Enroll */}
      <section className="py-24 px-[5%] bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-forest-pale border border-forest/10 p-12 rounded-3xl">
            <h3 className="text-forest font-bold flex items-center gap-3 mb-8">
              <CheckCircle size={24} /> This course IS for you if…
            </h3>
            <ul className="space-y-6">
              {[
                'You want a structured way to learn Islamic knowledge',
                'You are a parent wanting a solid foundation for your child',
                'You are a new Muslim looking for a supportive learning environment',
                'You want to understand the "why" behind Islamic practices',
                'You want to improve your character and daily habits'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-body leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-forest/5 p-12 rounded-3xl flex flex-col">
            <h3 className="text-red-600 font-bold flex items-center gap-3 mb-8">
              <XCircle size={24} /> Not sure? You may need…
            </h3>
            <ul className="space-y-6 mb-10">
              {[
                'You are looking for advanced academic theology — this is a foundational course',
                'You only want to learn Quran recitation — check our Tajweed course'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-body leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-200 mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8 border-t border-forest/5">
              <p className="text-sm text-muted mb-6">Want to combine this with Quran classes?</p>
              <button onClick={() => navigate('/contact')} className="text-forest font-bold flex items-center gap-2 hover:underline">
                Ask our academic advisor <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            FAQ
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-12">Common Questions</h2>
          
          <div className="space-y-0">
            {[
              { q: 'Is this course suitable for children?', a: 'Yes, we have a specialized curriculum for children that uses engaging stories and simplified concepts. Our tutors are experienced in making Islamic learning fun and relatable for kids.' },
              { q: 'Can I take this course alongside Quran classes?', a: 'Absolutely. In fact, we recommend it. Many students take 2 days of Quran and 1 day of Islamic Studies per week. This provides a balanced education.' },
              { q: 'What age groups do you teach?', a: 'We teach all ages, from young children (ages 5+) to adults. The curriculum and teaching style are adjusted to be age-appropriate for every student.' },
              { q: 'Do you cover specific schools of thought (Madhhabs)?', a: 'Our foundational course focuses on the core, agreed-upon principles of Islam. For Fiqh matters, we generally follow the majority views, but we can accommodate specific requests if you follow a particular Madhhab.' }
            ].map((faq, i) => (
              <div key={i} className="border-b border-forest/10 last:border-0">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-8 flex items-center justify-between gap-6 text-left group"
                >
                  <span className={`text-lg font-bold transition-colors ${openFaq === i ? 'text-forest' : 'text-ink group-hover:text-forest'}`}>{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full border border-forest/10 flex items-center justify-center text-forest transition-all shrink-0 ${openFaq === i ? 'bg-forest text-white rotate-180' : 'bg-forest-pale'}`}>
                    <ChevronRight size={18} className="rotate-90" />
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
                      <p className="text-body text-base leading-relaxed pb-8 pr-12 font-light">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Course Banner */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-forest rounded-[32px] p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full pointer-events-none" />
            <div className="text-center lg:text-left relative z-10">
              <div className="text-gold-light text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Deepen Your Connection</div>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">Next Step: Arabic Language →</h3>
              <p className="text-white/40 text-lg font-light">Understand the language of the Quran and Islamic texts</p>
            </div>
            <button onClick={() => navigate('/course/arabic-course')} className="bg-gold text-ink px-10 py-5 rounded-2xl font-bold hover:bg-gold-light transition-all shadow-2xl shadow-black/20 relative z-10 whitespace-nowrap">
              View Course Details →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const KidsCoursePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openModule, setOpenModule] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const navigate = useNavigate();

  return (
    <div className="space-y-0 bg-cream">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-[5%] bg-linear-to-br from-cream via-cream2 to-[#EBF7F1] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,var(--forest)_0%,transparent_60%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start lg:items-end relative z-10">
          <div className="pb-8 lg:pb-16">
            <nav className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold text-muted uppercase tracking-widest mb-6 md:mb-8">
              <Link to="/" className="hover:text-forest transition-colors">Home</Link>
              <span>›</span>
              <Link to="/lessons" className="hover:text-forest transition-colors">Courses</Link>
              <span>›</span>
              <span className="text-forest">Quran Classes for Kids</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2.5 py-1 bg-forest-pale border border-forest/10 text-forest text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full">Ages 4–12</span>
              <span className="px-2.5 py-1 bg-cream2 border border-forest/10 text-ink2 text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full">Beginner Friendly</span>
              <span className="px-2.5 py-1 bg-gold/10 border border-gold/20 text-gold text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gold" /> Two Free Trial Classes
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.1] mb-6 md:mb-8">
              Quran Classes for Kids —<br />
              <span className="italic text-forest">Structured, Engaging, Age-Appropriate Learning</span>
            </h1>

            <p className="text-body text-base md:text-lg font-light leading-relaxed max-w-2xl mb-8 md:mb-10">
              Children do not learn the way adults do. They need shorter sessions, more encouragement, and visual engagement. <strong>Our kids' program is designed to build a lifelong love for the Quran.</strong>
              <br /><br className="hidden md:block" />
              We use interactive tools, digital rewards, and a gentle teaching style to keep your child motivated and excited for every lesson.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 py-6 md:py-8 border-y border-forest/10 mb-8 md:mb-10">
              {[
                { icon: <Clock size={18} />, label: '30 min sessions', sub: 'Optimized for focus' },
                { icon: <User size={18} />, label: 'Live 1-on-1', sub: 'Full attention' },
                { icon: <Signal size={18} />, label: 'Interactive', sub: 'Learning style' },
                { icon: <Users size={18} />, label: 'Ages 4–12', sub: 'Target group' },
                { icon: <ClipboardList size={18} />, label: 'Progress Reports', sub: 'For parents' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 md:gap-3">
                  <div className="text-forest opacity-60 shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-ink font-bold text-xs md:text-sm leading-tight">{item.label}</div>
                    <div className="text-muted text-[9px] md:text-[10px] uppercase tracking-wider">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link to="/register" className="bg-forest text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-bold hover:bg-forest-mid transition-all shadow-xl shadow-forest/20 flex items-center justify-center gap-2 group">
                Enroll Your Child Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 md:px-8 py-3.5 md:py-4 border-2 border-forest/10 text-forest rounded-xl font-bold hover:bg-forest-pale transition-all text-center"
              >
                View Kids' Syllabus
              </button>
            </div>
            <p className="text-[9px] md:text-[10px] text-muted mt-4 flex items-center justify-center sm:justify-start gap-2">
              <Lock size={12} /> Safe environment · Expert tutors · Starts within 24 hours
            </p>
          </div>

          <div className="bg-ink text-white p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-2xl mb-8 lg:mb-16">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
            <div className="font-serif text-4xl text-gold/30 mb-8 text-right" dir="rtl">تَعْلِيمُ الأَطْفَالِ</div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gold-light mb-8">Course at a Glance</h3>
            <div className="space-y-0">
              {[
                { label: 'Age Group', val: '4–12 years old' },
                { label: 'Session Length', val: '30 or 45 minutes' },
                { label: 'Class Format', val: 'Live 1-on-1 online' },
                { label: 'Curriculum', val: 'Qaida, Tajweed, Hifz' },
                { label: 'Teacher Gender', val: 'Male or Female' },
                { label: 'Starting From', val: '$35 / month', gold: true },
                { label: 'Trial Class', val: 'FREE', gold: true }
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                  <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold">{stat.label}</span>
                  <span className={`text-sm font-bold ${stat.gold ? 'text-gold-light' : 'text-white/80'}`}>{stat.val}</span>
                </div>
              ))}
            </div>
            <button onClick={() => navigate('/register')} className="w-full mt-10 bg-gold text-ink py-4 rounded-xl font-bold hover:bg-gold-light transition-all shadow-lg shadow-black/20">
              Claim Two Free Trial Classes →
            </button>
            <p className="text-center text-[10px] text-white/20 mt-4">Safe · Engaging · 24h response</p>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            What You Will Learn
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-12">Everything Covered in This Course</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Interactive Noorani Qaida', desc: 'Learning Arabic letters and sounds through games, visuals, and engaging exercises.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Correct Pronunciation', desc: 'Building the foundation of Tajweed from day one in a way that\'s easy for kids to grasp.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Short Surah Memorization', desc: 'Memorizing Juz Amma surahs with proper rhythm and understanding of their basic meanings.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Islamic Stories', desc: 'Inspiring stories of the Prophets and Sahaba to build character and love for the Deen.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Daily Duas & Manners', desc: 'Essential supplications for eating, sleeping, and daily life, taught with their etiquette.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Reward-Based Progress', desc: 'Digital certificates and badges to celebrate every milestone your child achieves.' }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-cream rounded-2xl border border-forest/5 hover:border-forest/20 transition-all group">
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h3 className="text-lg font-bold text-ink mb-3">{item.title}</h3>
                <p className="text-body text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 px-[5%] bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-7 h-0.5 bg-gold" />
              Learning Path
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-8 text-center">The Kids' Quran Journey</h2>
            <div className="inline-flex items-center gap-2 bg-forest/5 px-6 py-3 rounded-xl text-muted text-sm border border-forest/10">
              <ClipboardList size={18} className="text-forest" />
              <span>Every child moves at their own pace. We never rush the foundation.</span>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { 
                num: '01', 
                title: 'The Fun Foundation (Letters & Sounds)', 
                lessons: '3–6 months',
                content: [
                  { name: 'Recognizing Arabic letters through shapes', type: 'Interactive' },
                  { name: 'Learning the sounds (Makharij) with fun analogies', type: 'Interactive' },
                  { name: 'Combining letters to form simple words', type: 'Practice' },
                  { name: 'Introduction to basic vowels (Harakat)', type: 'Theory' },
                  { name: 'Islamic Story: The Story of Prophet Adam (AS)', type: 'Story' },
                  { name: 'Level 1 Badge — Letter Master', type: 'Reward' }
                ]
              },
              { 
                num: '02', 
                title: 'Junior Reciter (Joining Words & Basic Rules)', 
                lessons: '6–12 months',
                content: [
                  { name: 'Reading full words and short sentences', type: 'Practice' },
                  { name: 'Introduction to basic Tajweed (Madd, Tanween)', type: 'Theory' },
                  { name: 'Reciting short surahs from Juz Amma', type: 'Recitation' },
                  { name: 'Daily Duas for eating and sleeping', type: 'Memorization' },
                  { name: 'Islamic Story: The Story of Prophet Nuh (AS)', type: 'Story' },
                  { name: 'Level 2 Badge — Word Connector', type: 'Reward' }
                ]
              },
              { 
                num: '03', 
                title: 'Little Hafiz (Memorizing Juz Amma)', 
                lessons: 'Ongoing',
                content: [
                  { name: 'Memorizing Surah Al-Fatiha to Surah Al-Fil', type: 'Hifz' },
                  { name: 'Perfecting Tajweed rules in recitation', type: 'Tajweed' },
                  { name: 'Understanding the meanings of short surahs', type: 'Tafseer' },
                  { name: 'Islamic Manners (Akhlaq) for kids', type: 'Character' },
                  { name: 'Islamic Story: The Life of Prophet Muhammad (PBUH)', type: 'Story' },
                  { name: 'Level 3 Badge — Little Hafiz', type: 'Reward' }
                ]
              }
            ].map((module, i) => (
              <div key={i} className="bg-white rounded-2xl border border-forest/5 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                  className="w-full p-6 flex items-center gap-6 hover:bg-forest/5 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-forest/20">{module.num}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-ink group-hover:text-forest transition-colors">{module.title}</h3>
                    <p className="text-muted text-[10px] uppercase tracking-widest font-bold mt-1">{module.lessons}</p>
                  </div>
                  <div className={`w-8 h-8 rounded-full border border-forest/10 flex items-center justify-center text-forest transition-transform ${openModule === i ? 'rotate-180 bg-forest text-white' : ''}`}>
                    <ChevronRight size={16} className="rotate-90" />
                  </div>
                </button>
                <AnimatePresence>
                  {openModule === i && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden bg-slate-50/50"
                    >
                      <div className="p-6 pt-0 space-y-1">
                        {module.content.map((lesson, j) => (
                          <div key={j} className="flex items-center justify-between py-3 border-b border-forest/5 last:border-0">
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-forest/20" />
                              <span className="text-sm text-body font-light">{lesson.name}</span>
                            </div>
                            <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              lesson.type === 'Interactive' ? 'bg-blue-50 text-blue-600' : 
                              lesson.type === 'Story' ? 'bg-purple-50 text-purple-600' : 
                              lesson.type === 'Reward' ? 'bg-gold/10 text-gold' :
                              'bg-emerald-50 text-emerald-600'
                            }`}>{lesson.type}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Lesson Section */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-ink text-white rounded-[40px] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,var(--gold)_0%,transparent_60%)]" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 text-gold-light text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
                <span className="w-7 h-0.5 bg-gold" />
                Inside a Real Class
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Sample 30-Minute Kids' Session</h2>
              <p className="text-white/40 text-lg font-light mb-12">Level 1 — Lesson 5: Letter Recognition with Games</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { phase: '1', time: '5 min', title: 'Warm-up', items: ['Fun greeting and "Dua of the Day"', 'Quick review of last 3 letters', 'Digital sticker for showing up!'] },
                  { phase: '2', time: '10 min', title: 'New Letters', items: ['Introducing 2 new letters', 'Using visual cards and sounds', 'Tracing letters on the screen'] },
                  { phase: '3', time: '10 min', title: 'Interactive Game', items: ['"Find the Letter" digital game', 'Matching sounds to shapes', 'Student leads the teacher!'] },
                  { phase: '4', time: '5 min', title: 'Story Time', items: ['Short story of a Prophet', 'One lesson to remember', 'Next class preview & goodbye'] }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Phase {item.phase}</span>
                      <span className="text-[10px] font-bold text-gold-light uppercase tracking-widest flex items-center gap-1.5">
                        <Clock size={12} /> {item.time}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold mb-4">{item.title}</h4>
                    <ul className="space-y-3">
                      {item.items.map((li, j) => (
                        <li key={j} className="text-xs text-white/50 flex items-start gap-2 leading-relaxed">
                          <span className="text-gold-light mt-1">›</span> {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Enroll */}
      <section className="py-24 px-[5%] bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-forest-pale border border-forest/10 p-12 rounded-3xl">
            <h3 className="text-forest font-bold flex items-center gap-3 mb-8">
              <CheckCircle size={24} /> This course IS for your child if…
            </h3>
            <ul className="space-y-6">
              {[
                'They are between 4 and 12 years old',
                'You want them to learn Quran in a positive, fun environment',
                'You struggle to find qualified local teachers',
                'You want a flexible schedule that fits your family life',
                'You want regular updates on your child\'s progress'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-body leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-forest/5 p-12 rounded-3xl flex flex-col">
            <h3 className="text-red-600 font-bold flex items-center gap-3 mb-8">
              <XCircle size={24} /> Not sure? You may need…
            </h3>
            <ul className="space-y-6 mb-10">
              {[
                'Your child is under 4 — they may be too young for online focus',
                'You are looking for a group class — we only offer 1-on-1 for maximum quality'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-body leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-200 mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8 border-t border-forest/5">
              <p className="text-sm text-muted mb-6">Want to see how your child reacts to the teacher?</p>
              <button onClick={() => navigate('/register')} className="text-forest font-bold flex items-center gap-2 hover:underline">
                Book a free 15-minute trial session <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            FAQ
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-12">Common Questions for Parents</h2>
          
          <div className="space-y-0">
            {[
              { q: 'Can I choose a female teacher for my daughter?', a: 'Yes, absolutely. We have both male and female tutors available. You can specify your preference during registration, and we will match your child with the most suitable teacher.' },
              { q: 'How long are the sessions?', a: 'For younger children (ages 4-7), we recommend 30-minute sessions to ensure they stay focused and engaged. For older children, 45-minute sessions are usually more effective.' },
              { q: 'Do I need to sit with my child during the class?', a: 'For the first few lessons, we recommend a parent stays nearby to help with the technology and settle the child. Once they are comfortable, most children can attend the 1-on-1 sessions independently.' },
              { q: 'How do you keep children motivated online?', a: 'We use a combination of interactive digital tools, games, and a reward system. Tutors use positive reinforcement, and we send digital badges and certificates to celebrate their achievements.' }
            ].map((faq, i) => (
              <div key={i} className="border-b border-forest/10 last:border-0">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-8 flex items-center justify-between gap-6 text-left group"
                >
                  <span className={`text-lg font-bold transition-colors ${openFaq === i ? 'text-forest' : 'text-ink group-hover:text-forest'}`}>{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full border border-forest/10 flex items-center justify-center text-forest transition-all shrink-0 ${openFaq === i ? 'bg-forest text-white rotate-180' : 'bg-forest-pale'}`}>
                    <ChevronRight size={18} className="rotate-90" />
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
                      <p className="text-body text-base leading-relaxed pb-8 pr-12 font-light">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Course Banner */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-forest rounded-[32px] p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full pointer-events-none" />
            <div className="text-center lg:text-left relative z-10">
              <div className="text-gold-light text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Complete Education</div>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">Next Step: Islamic Studies for Kids →</h3>
              <p className="text-white/40 text-lg font-light">Build their character and faith alongside Quran recitation</p>
            </div>
            <button onClick={() => navigate('/course/islamic-studies')} className="bg-gold text-ink px-10 py-5 rounded-2xl font-bold hover:bg-gold-light transition-all shadow-2xl shadow-black/20 relative z-10 whitespace-nowrap">
              View Course Details →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const TafseerCoursePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openModule, setOpenModule] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const navigate = useNavigate();

  return (
    <div className="space-y-0 bg-cream">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-[5%] bg-linear-to-br from-cream via-cream2 to-[#FDF8F3] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,var(--forest)_0%,transparent_60%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start lg:items-end relative z-10">
          <div className="pb-8 lg:pb-16">
            <nav className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold text-muted uppercase tracking-widest mb-6 md:mb-8">
              <Link to="/" className="hover:text-forest transition-colors">Home</Link>
              <span>›</span>
              <Link to="/lessons" className="hover:text-forest transition-colors">Courses</Link>
              <span>›</span>
              <span className="text-forest">Quran Tafseer Course</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2.5 py-1 bg-forest-pale border border-forest/10 text-forest text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full">Intermediate to Advanced</span>
              <span className="px-2.5 py-1 bg-cream2 border border-forest/10 text-ink2 text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full">All Ages</span>
              <span className="px-2.5 py-1 bg-gold/10 border border-gold/20 text-gold text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gold" /> Two Free Trial Classes
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.1] mb-6 md:mb-8">
              Quran Tafseer Course —<br />
              <span className="italic text-forest">Understand What You Recite — Deeply</span>
            </h1>

            <p className="text-body text-base md:text-lg font-light leading-relaxed max-w-2xl mb-8 md:mb-10">
              Reciting the Quran is an act of worship. Understanding it is a transformation. <strong>Tafseer takes you beyond the words into the meaning, context, and wisdom of Allah's revelation.</strong>
              <br /><br className="hidden md:block" />
              Our course connects classical scholarship with modern application, helping you find guidance for your daily life in every Ayah.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 py-6 md:py-8 border-y border-forest/10 mb-8 md:mb-10">
              {[
                { icon: <Clock size={18} />, label: 'Ongoing', sub: 'Study at your pace' },
                { icon: <User size={18} />, label: 'Live 1-on-1', sub: 'Direct interaction' },
                { icon: <Signal size={18} />, label: 'Intermediate', sub: 'Level' },
                { icon: <Users size={18} />, label: 'All ages', sub: 'Age group' },
                { icon: <ClipboardList size={18} />, label: 'Prerequisites', sub: 'Fluent reading' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 md:gap-3">
                  <div className="text-forest opacity-60 shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-ink font-bold text-xs md:text-sm leading-tight">{item.label}</div>
                    <div className="text-muted text-[9px] md:text-[10px] uppercase tracking-wider">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link to="/register" className="bg-forest text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-bold hover:bg-forest-mid transition-all shadow-xl shadow-forest/20 flex items-center justify-center gap-2 group">
                Start Tafseer Course <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 md:px-8 py-3.5 md:py-4 border-2 border-forest/10 text-forest rounded-xl font-bold hover:bg-forest-pale transition-all text-center"
              >
                View Syllabus
              </button>
            </div>
            <p className="text-[9px] md:text-[10px] text-muted mt-4 flex items-center justify-center sm:justify-start gap-2">
              <Lock size={12} /> Expert scholars · Deep insights · Starts within 24 hours
            </p>
          </div>

          <div className="bg-ink text-white p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-2xl mb-8 lg:mb-16">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
            <div className="font-serif text-4xl text-gold/30 mb-8 text-right" dir="rtl">تَفْسِيرُ القُرْآنِ</div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gold-light mb-8">Course at a Glance</h3>
            <div className="space-y-0">
              {[
                { label: 'Level', val: 'Intermediate to Advanced' },
                { label: 'Duration', val: 'Ongoing / Flexible' },
                { label: 'Age Group', val: 'All ages' },
                { label: 'Class Format', val: 'Live 1-on-1 online' },
                { label: 'Prerequisite', val: 'Fluent Quran reading' },
                { label: 'Starting From', val: '$45 / month', gold: true },
                { label: 'Trial Class', val: 'FREE', gold: true }
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                  <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold">{stat.label}</span>
                  <span className={`text-sm font-bold ${stat.gold ? 'text-gold-light' : 'text-white/80'}`}>{stat.val}</span>
                </div>
              ))}
            </div>
            <button onClick={() => navigate('/register')} className="w-full mt-10 bg-gold text-ink py-4 rounded-xl font-bold hover:bg-gold-light transition-all shadow-lg shadow-black/20">
              Claim Two Free Trial Classes →
            </button>
            <p className="text-center text-[10px] text-white/20 mt-4">Deepen your connection · 24h response</p>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            What You Will Learn
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-12">Everything Covered in This Course</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Word-by-word meaning', desc: 'Understanding the precise linguistic meaning of every word in the Quran.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Historical context', desc: 'Learning the "Asbab al-Nuzul" — the reasons and circumstances behind each revelation.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Grammatical analysis', desc: 'How the structure of the Arabic language enhances the meaning of the ayahs.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Practical life lessons', desc: 'Extracting timeless wisdom and guidance for modern challenges from the Quran.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Connecting ayahs', desc: 'Understanding the thematic flow and relationships between different surahs and sections.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Classical references', desc: 'Insights from renowned Tafseer works like Ibn Kathir, Al-Jalalayn, and others.' }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-cream rounded-2xl border border-forest/5 hover:border-forest/20 transition-all group">
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h3 className="text-lg font-bold text-ink mb-3">{item.title}</h3>
                <p className="text-body text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 px-[5%] bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-7 h-0.5 bg-gold" />
              Syllabus Overview
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-8 text-center">Quran Tafseer Curriculum</h2>
            <div className="inline-flex items-center gap-2 bg-forest/5 px-6 py-3 rounded-xl text-muted text-sm border border-forest/10">
              <ClipboardList size={18} className="text-forest" />
              <span>Prerequisite: <strong>Ability to read Quran fluently.</strong> Basic Arabic knowledge is helpful but not required.</span>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { 
                num: '01', 
                title: 'Introduction to Tafseer & Juz Amma', 
                lessons: '12–15 lessons',
                content: [
                  { name: 'The science of Tafseer — history and methods', type: 'Theory' },
                  { name: 'Surah Al-Fatiha — the essence of the Quran', type: 'Tafseer' },
                  { name: 'Tafseer of short surahs (An-Nas to Al-Fil)', type: 'Tafseer' },
                  { name: 'Thematic study of Juz 30 — Day of Judgment', type: 'Thematic' },
                  { name: 'Practical lessons for daily life from Juz Amma', type: 'Application' },
                  { name: 'Module assessment — Juz Amma insights', type: 'Assessment' }
                ]
              },
              { 
                num: '02', 
                title: 'The Core Message (Selected Surahs)', 
                lessons: 'Ongoing',
                content: [
                  { name: 'Surah Al-Kahf — lessons on faith and trials', type: 'Tafseer' },
                  { name: 'Surah Ar-Rahman — the favors of Allah', type: 'Tafseer' },
                  { name: 'Surah Yaseen — the heart of the Quran', type: 'Tafseer' },
                  { name: 'Surah Al-Mulk — protection and sovereignty', type: 'Tafseer' },
                  { name: 'Surah Al-Hujurat — Islamic social ethics', type: 'Tafseer' }
                ]
              },
              { 
                num: '03', 
                title: 'Detailed Study (Juz 1 onwards)', 
                lessons: 'Ongoing',
                content: [
                  { name: 'Surah Al-Baqarah — the long journey of guidance', type: 'Tafseer' },
                  { name: 'Linguistic analysis of key Quranic terms', type: 'Linguistic' },
                  { name: 'Asbab al-Nuzul (Reasons for Revelation)', type: 'History' },
                  { name: 'Legal rulings (Ahkam) in the Quran', type: 'Fiqh' },
                  { name: 'Connecting the Quran to modern science & society', type: 'Application' }
                ]
              }
            ].map((module, i) => (
              <div key={i} className="bg-white rounded-2xl border border-forest/5 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                  className="w-full p-6 flex items-center gap-6 hover:bg-forest/5 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-forest/20">{module.num}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-ink group-hover:text-forest transition-colors">{module.title}</h3>
                    <p className="text-muted text-[10px] uppercase tracking-widest font-bold mt-1">{module.lessons}</p>
                  </div>
                  <div className={`w-8 h-8 rounded-full border border-forest/10 flex items-center justify-center text-forest transition-transform ${openModule === i ? 'rotate-180 bg-forest text-white' : ''}`}>
                    <ChevronRight size={16} className="rotate-90" />
                  </div>
                </button>
                <AnimatePresence>
                  {openModule === i && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden bg-slate-50/50"
                    >
                      <div className="p-6 pt-0 space-y-1">
                        {module.content.map((lesson, j) => (
                          <div key={j} className="flex items-center justify-between py-3 border-b border-forest/5 last:border-0">
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-forest/20" />
                              <span className="text-sm text-body font-light">{lesson.name}</span>
                            </div>
                            <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              lesson.type === 'Tafseer' ? 'bg-blue-50 text-blue-600' : 
                              lesson.type === 'Linguistic' ? 'bg-emerald-50 text-emerald-600' : 
                              lesson.type === 'History' ? 'bg-purple-50 text-purple-600' :
                              'bg-gold/10 text-gold'
                            }`}>{lesson.type}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Lesson Section */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-ink text-white rounded-[40px] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,var(--gold)_0%,transparent_60%)]" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 text-gold-light text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
                <span className="w-7 h-0.5 bg-gold" />
                Inside a Real Class
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Sample 45-Minute Tafseer Session</h2>
              <p className="text-white/40 text-lg font-light mb-12">Module 1 — Lesson 2: Surah Al-Fatiha — The Opening</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { phase: '1', time: '8 min', title: 'Linguistic Meaning', items: ['Analyzing the word "Al-Hamd"', 'Difference between Hamd and Shukr', 'Why "Rabb" is used instead of "Malik"'] },
                  { phase: '2', time: '15 min', title: 'Context & Depth', items: ['The names of Surah Al-Fatiha', 'Why it is the "Mother of the Book"', 'Connecting the ayahs to our daily Salah'] },
                  { phase: '3', time: '15 min', title: 'Practical Guidance', items: ['What "Sirat al-Mustaqim" means today', 'How to live the message of Al-Fatiha', 'Reflecting on our relationship with Allah'] },
                  { phase: '4', time: '7 min', title: 'Wrap-Up', items: ['Summary of key insights', 'Reflection exercise for the week', 'Next surah preview — Al-Baqarah'] }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Phase {item.phase}</span>
                      <span className="text-[10px] font-bold text-gold-light uppercase tracking-widest flex items-center gap-1.5">
                        <Clock size={12} /> {item.time}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold mb-4">{item.title}</h4>
                    <ul className="space-y-3">
                      {item.items.map((li, j) => (
                        <li key={j} className="text-xs text-white/50 flex items-start gap-2 leading-relaxed">
                          <span className="text-gold-light mt-1">›</span> {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Enroll */}
      <section className="py-24 px-[5%] bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-forest-pale border border-forest/10 p-12 rounded-3xl">
            <h3 className="text-forest font-bold flex items-center gap-3 mb-8">
              <CheckCircle size={24} /> This course IS for you if…
            </h3>
            <ul className="space-y-6">
              {[
                'You can read the Quran and want to understand its meaning',
                'You want to deepen your spiritual connection during recitation',
                'You are looking for practical guidance from the revelation',
                'You want to learn the context and wisdom behind the ayahs',
                'You want to follow the Imam in Salah with real understanding'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-body leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-forest/5 p-12 rounded-3xl flex flex-col">
            <h3 className="text-red-600 font-bold flex items-center gap-3 mb-8">
              <XCircle size={24} /> Not sure? You may need…
            </h3>
            <ul className="space-y-6 mb-10">
              {[
                'You cannot yet read Arabic letters — start with Noorani Qaida',
                'You want to learn to speak Arabic — check our Arabic Language course'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-body leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-200 mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8 border-t border-forest/5">
              <p className="text-sm text-muted mb-6">Want to combine Tafseer with Arabic studies?</p>
              <button onClick={() => navigate('/contact')} className="text-forest font-bold flex items-center gap-2 hover:underline">
                Ask about our "Quran Connection" package <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            FAQ
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-12">Common Questions</h2>
          
          <div className="space-y-0">
            {[
              { q: 'Do I need to know Arabic to take this course?', a: 'While knowing Arabic is helpful, it is not a requirement. Our tutors explain the meanings and linguistic nuances in English (or your preferred language) while teaching you the key Quranic terms.' },
              { q: 'Which Tafseer books do you use as reference?', a: 'We primarily use classical and reliable works such as Tafseer Ibn Kathir, Tafseer Al-Jalalayn, and Ma\'ariful Quran, while also incorporating modern insights that are consistent with traditional scholarship.' },
              { q: 'How long does it take to complete the whole Quran?', a: 'Tafseer is a lifelong journey. You can choose to study specific surahs or go through the entire Quran Juz by Juz. The pace is entirely up to you and your learning goals.' },
              { q: 'Can I take this course alongside Hifz?', a: 'Yes, and it is highly recommended. Understanding the meaning of the ayahs you are memorizing makes Hifz much easier and more spiritually fulfilling.' }
            ].map((faq, i) => (
              <div key={i} className="border-b border-forest/10 last:border-0">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-8 flex items-center justify-between gap-6 text-left group"
                >
                  <span className={`text-lg font-bold transition-colors ${openFaq === i ? 'text-forest' : 'text-ink group-hover:text-forest'}`}>{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full border border-forest/10 flex items-center justify-center text-forest transition-all shrink-0 ${openFaq === i ? 'bg-forest text-white rotate-180' : 'bg-forest-pale'}`}>
                    <ChevronRight size={18} className="rotate-90" />
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
                      <p className="text-body text-base leading-relaxed pb-8 pr-12 font-light">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Course Banner */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-forest rounded-[32px] p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full pointer-events-none" />
            <div className="text-center lg:text-left relative z-10">
              <div className="text-gold-light text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Master the Language</div>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">Next Step: Arabic Language Course →</h3>
              <p className="text-white/40 text-lg font-light">Unlock the Quran's meaning directly through its language</p>
            </div>
            <button onClick={() => navigate('/course/arabic-course')} className="bg-gold text-ink px-10 py-5 rounded-2xl font-bold hover:bg-gold-light transition-all shadow-2xl shadow-black/20 relative z-10 whitespace-nowrap">
              View Course Details →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const TajweedCoursePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openModule, setOpenModule] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const navigate = useNavigate();

  return (
    <div className="space-y-0 bg-cream">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-[5%] bg-linear-to-br from-cream via-cream2 to-[#FDF8F3] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,var(--forest)_0%,transparent_60%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start lg:items-end relative z-10">
          <div className="pb-8 lg:pb-16">
            <nav className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold text-muted uppercase tracking-widest mb-6 md:mb-8">
              <Link to="/" className="hover:text-forest transition-colors">Home</Link>
              <span>›</span>
              <Link to="/lessons" className="hover:text-forest transition-colors">Courses</Link>
              <span>›</span>
              <span className="text-forest">Quran Tajweed Course</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2.5 py-1 bg-forest-pale border border-forest/10 text-forest text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full">Beginner to Advanced</span>
              <span className="px-2.5 py-1 bg-cream2 border border-forest/10 text-ink2 text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full">All Ages</span>
              <span className="px-2.5 py-1 bg-gold/10 border border-gold/20 text-gold text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gold" /> Two Free Trial Classes
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.1] mb-6 md:mb-8">
              Quran Tajweed Course —<br />
              <span className="italic text-forest">Perfect Your Recitation — Beautifully</span>
            </h1>

            <p className="text-body text-base md:text-lg font-light leading-relaxed max-w-2xl mb-8 md:mb-10">
              The Quran was revealed with Tajweed. Reciting it correctly is not just a skill, it is an obligation and a way to honor the words of Allah. <strong>Master the rules of pronunciation and rhythm with our expert tutors.</strong>
              <br /><br className="hidden md:block" />
              From the basic articulation points to advanced rules of prolongation, we help you recite with clarity, confidence, and beauty.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 py-6 md:py-8 border-y border-forest/10 mb-8 md:mb-10">
              {[
                { icon: <Clock size={18} />, label: 'Flexible', sub: 'Study at your pace' },
                { icon: <User size={18} />, label: 'Live 1-on-1', sub: 'Direct interaction' },
                { icon: <Signal size={18} />, label: 'All Levels', sub: 'Beginner to Adv' },
                { icon: <Users size={18} />, label: 'All ages', sub: 'Age group' },
                { icon: <ClipboardList size={18} />, label: 'Prerequisites', sub: 'Know Arabic letters' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 md:gap-3">
                  <div className="text-forest opacity-60 shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-ink font-bold text-xs md:text-sm leading-tight">{item.label}</div>
                    <div className="text-muted text-[9px] md:text-[10px] uppercase tracking-wider">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link to="/register" className="bg-forest text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-bold hover:bg-forest-mid transition-all shadow-xl shadow-forest/20 flex items-center justify-center gap-2 group">
                Start Tajweed Course <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 md:px-8 py-3.5 md:py-4 border-2 border-forest/10 text-forest rounded-xl font-bold hover:bg-forest-pale transition-all text-center"
              >
                View Syllabus
              </button>
            </div>
            <p className="text-[9px] md:text-[10px] text-muted mt-4 flex items-center justify-center sm:justify-start gap-2">
              <Lock size={12} /> Certified Tajweed experts · Practical focus · Starts within 24 hours
            </p>
          </div>

          <div className="bg-ink text-white p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-2xl mb-8 lg:mb-16">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
            <div className="font-serif text-4xl text-gold/30 mb-8 text-right" dir="rtl">تَجْوِيدُ القُرْآنِ</div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gold-light mb-8">Course at a Glance</h3>
            <div className="space-y-0">
              {[
                { label: 'Level', val: 'Beginner to Advanced' },
                { label: 'Duration', val: 'Ongoing / Flexible' },
                { label: 'Age Group', val: 'All ages' },
                { label: 'Class Format', val: 'Live 1-on-1 online' },
                { label: 'Prerequisite', val: 'Basic reading ability' },
                { label: 'Starting From', val: '$40 / month', gold: true },
                { label: 'Trial Class', val: 'FREE', gold: true }
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                  <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold">{stat.label}</span>
                  <span className={`text-sm font-bold ${stat.gold ? 'text-gold-light' : 'text-white/80'}`}>{stat.val}</span>
                </div>
              ))}
            </div>
            <button onClick={() => navigate('/register')} className="w-full mt-10 bg-gold text-ink py-4 rounded-xl font-bold hover:bg-gold-light transition-all shadow-lg shadow-black/20">
              Claim Two Free Trial Classes →
            </button>
            <p className="text-center text-[10px] text-white/20 mt-4">Perfect your voice · 24h response</p>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            What You Will Learn
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-12">Master the Rules of Beautiful Recitation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Makharij al-Huruf', desc: 'Learning the correct articulation points for every Arabic letter from the throat, tongue, and lips.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Sifat al-Huruf', desc: 'Understanding the unique characteristics of letters, such as whistling, echoing, and softness.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Noon & Meem Sakinah', desc: 'Mastering the rules of Ghunnah, Izhaar, Idghaam, Iqlab, and Ikhfa for smooth transitions.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Madd Rules', desc: 'Learning the different types of prolongation (Madd) to give the Quran its proper rhythm.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Heavy & Light Letters', desc: 'Distinguishing between letters that should be pronounced with full-mouth (Tafkheem) or thin-mouth (Tarqeeq).' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Waqf & Ibtida', desc: 'Knowing where to stop and how to restart recitation correctly without changing the meaning.' }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-cream rounded-2xl border border-forest/5 hover:border-forest/20 transition-all group">
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h3 className="text-lg font-bold text-ink mb-3">{item.title}</h3>
                <p className="text-body text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 px-[5%] bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-7 h-0.5 bg-gold" />
              Syllabus Overview
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-8 text-center">Tajweed Course Curriculum</h2>
            <div className="inline-flex items-center gap-2 bg-forest/5 px-6 py-3 rounded-xl text-muted text-sm border border-forest/10">
              <ClipboardList size={18} className="text-forest" />
              <span>Prerequisite: <strong>Basic ability to recognize Arabic letters.</strong></span>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { 
                num: '01', 
                title: 'Foundations of Pronunciation', 
                lessons: '10–12 lessons',
                content: [
                  { name: 'Introduction to Tajweed — history and importance', type: 'Theory' },
                  { name: 'Makharij (Articulation Points) — Throat letters', type: 'Practical' },
                  { name: 'Makharij — Tongue and Lip letters', type: 'Practical' },
                  { name: 'Sifat (Characteristics) — Permanent qualities', type: 'Practical' },
                  { name: 'Sifat — Temporary qualities (Heavy/Light)', type: 'Practical' },
                  { name: 'Module assessment — Pronunciation check', type: 'Assessment' }
                ]
              },
              { 
                num: '02', 
                title: 'Core Tajweed Rules', 
                lessons: '15–20 lessons',
                content: [
                  { name: 'Rules of Noon Sakinah and Tanween', type: 'Rule' },
                  { name: 'Rules of Meem Sakinah', type: 'Rule' },
                  { name: 'Rules of Laam (in Allah\'s name and Al-)', type: 'Rule' },
                  { name: 'Rules of Raa (Heavy vs Light)', type: 'Rule' },
                  { name: 'Qalqalah (Echoing sounds)', type: 'Practical' },
                  { name: 'Module assessment — Rule application', type: 'Assessment' }
                ]
              },
              { 
                num: '03', 
                title: 'Advanced Recitation & Fluency', 
                lessons: 'Ongoing',
                content: [
                  { name: 'Madd (Prolongation) — Natural and Mandatory', type: 'Rule' },
                  { name: 'Madd — Permissible and Connected/Disconnected', type: 'Rule' },
                  { name: 'Waqf (Rules of Stopping)', type: 'Practical' },
                  { name: 'Ibtida (Rules of Starting)', type: 'Practical' },
                  { name: 'Applying all rules in Juz Amma recitation', type: 'Fluency' },
                  { name: 'Final evaluation — Full page recitation', type: 'Certification' }
                ]
              }
            ].map((module, i) => (
              <div key={i} className="bg-white rounded-2xl border border-forest/5 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                  className="w-full p-6 flex items-center gap-6 hover:bg-forest/5 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-forest/20">{module.num}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-ink group-hover:text-forest transition-colors">{module.title}</h3>
                    <p className="text-muted text-[10px] uppercase tracking-widest font-bold mt-1">{module.lessons}</p>
                  </div>
                  <div className={`w-8 h-8 rounded-full border border-forest/10 flex items-center justify-center text-forest transition-transform ${openModule === i ? 'rotate-180 bg-forest text-white' : ''}`}>
                    <ChevronRight size={16} className="rotate-90" />
                  </div>
                </button>
                <AnimatePresence>
                  {openModule === i && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden bg-slate-50/50"
                    >
                      <div className="p-6 pt-0 space-y-1">
                        {module.content.map((lesson, j) => (
                          <div key={j} className="flex items-center justify-between py-3 border-b border-forest/5 last:border-0">
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-forest/20" />
                              <span className="text-sm text-body font-light">{lesson.name}</span>
                            </div>
                            <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              lesson.type === 'Practical' ? 'bg-blue-50 text-blue-600' : 
                              lesson.type === 'Rule' ? 'bg-emerald-50 text-emerald-600' : 
                              lesson.type === 'Fluency' ? 'bg-purple-50 text-purple-600' :
                              'bg-gold/10 text-gold'
                            }`}>{lesson.type}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Lesson Section */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-ink text-white rounded-[40px] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,var(--gold)_0%,transparent_60%)]" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 text-gold-light text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
                <span className="w-7 h-0.5 bg-gold" />
                Inside a Real Class
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Sample 45-Minute Tajweed Session</h2>
              <p className="text-white/40 text-lg font-light mb-12">Module 1 — Lesson 3: The Articulation Points of Throat Letters</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { phase: '1', time: '10 min', title: 'Review & Warm-up', items: ['Reciting previous lesson\'s letters', 'Checking mouth positioning', 'Breath control exercises'] },
                  { phase: '2', time: '15 min', title: 'New Rule: Throat Letters', items: ['Identifying the 6 throat letters', 'Deep throat vs Middle vs Top', 'Practical drilling of "Ha" and "Kha"'] },
                  { phase: '3', time: '15 min', title: 'Quranic Application', items: ['Finding throat letters in Surah Al-Ikhlas', 'Correcting common mistakes', 'Individual recitation practice'] },
                  { phase: '4', time: '5 min', title: 'Feedback & Goal', items: ['Personalized feedback on Makhraj', 'Homework: Recording 3 ayahs', 'Next lesson preview'] }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Phase {item.phase}</span>
                      <span className="text-[10px] font-bold text-gold-light uppercase tracking-widest flex items-center gap-1.5">
                        <Clock size={12} /> {item.time}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold mb-4">{item.title}</h4>
                    <ul className="space-y-3">
                      {item.items.map((li, j) => (
                        <li key={j} className="text-xs text-white/50 flex items-start gap-2 leading-relaxed">
                          <span className="text-gold-light mt-1">›</span> {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Enroll */}
      <section className="py-24 px-[5%] bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-forest-pale border border-forest/10 p-12 rounded-3xl">
            <h3 className="text-forest font-bold flex items-center gap-3 mb-8">
              <CheckCircle size={24} /> This course IS for you if…
            </h3>
            <ul className="space-y-6">
              {[
                'You want to recite the Quran exactly as it was revealed',
                'You struggle with the pronunciation of specific Arabic letters',
                'You want to correct hidden mistakes (Lahn Khafi) in your recitation',
                'You are a beginner who wants to start with the right foundations',
                'You want to improve the beauty and rhythm of your voice'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-body leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-forest/5 p-12 rounded-3xl flex flex-col">
            <h3 className="text-red-600 font-bold flex items-center gap-3 mb-8">
              <XCircle size={24} /> Not sure? You may need…
            </h3>
            <ul className="space-y-6 mb-10">
              {[
                'You cannot recognize Arabic letters yet — start with Noorani Qaida',
                'You want to memorize the Quran — check our Hifz Course'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-body leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-200 mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8 border-t border-forest/5">
              <p className="text-sm text-muted mb-6">Want to master Tajweed and Hifz together?</p>
              <button onClick={() => navigate('/contact')} className="text-forest font-bold flex items-center gap-2 hover:underline">
                Ask our academic advisor <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            FAQ
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-12">Common Questions</h2>
          
          <div className="space-y-0">
            {[
              { q: 'How long does it take to learn all Tajweed rules?', a: 'For a dedicated student, the core rules can be learned in 4–6 months. However, mastering the application in recitation takes consistent practice with a teacher over a longer period.' },
              { q: 'Is this course suitable for children?', a: 'Absolutely. We have specialized tutors who use engaging methods to teach Tajweed to children, ensuring they build the right habits from a young age.' },
              { q: 'Will I get a certificate after completing the course?', a: 'Yes, we provide a certificate of completion after you pass the final evaluation, confirming your mastery of the Tajweed rules taught in the course.' },
              { q: 'Can I choose my own schedule?', a: 'Yes, our 1-on-1 format allows you to pick the days and times that work best for you, with 24/7 availability across different time zones.' }
            ].map((faq, i) => (
              <div key={i} className="border-b border-forest/10 last:border-0">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-8 flex items-center justify-between gap-6 text-left group"
                >
                  <span className={`text-lg font-bold transition-colors ${openFaq === i ? 'text-forest' : 'text-ink group-hover:text-forest'}`}>{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full border border-forest/10 flex items-center justify-center text-forest transition-all shrink-0 ${openFaq === i ? 'bg-forest text-white rotate-180' : 'bg-forest-pale'}`}>
                    <ChevronRight size={18} className="rotate-90" />
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
                      <p className="text-body text-base leading-relaxed pb-8 pr-12 font-light">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Course Banner */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-forest rounded-[32px] p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full pointer-events-none" />
            <div className="text-center lg:text-left relative z-10">
              <div className="text-gold-light text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Ultimate Goal</div>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">Next Step: Hifz (Memorization) Course →</h3>
              <p className="text-white/40 text-lg font-light">Commit the words of Allah to your heart with perfect Tajweed</p>
            </div>
            <button onClick={() => navigate('/course/hifz-course')} className="bg-gold text-ink px-10 py-5 rounded-2xl font-bold hover:bg-gold-light transition-all shadow-2xl shadow-black/20 relative z-10 whitespace-nowrap">
              View Course Details →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const NooraniQaidaPageUpdate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openModule, setOpenModule] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const navigate = useNavigate();

  return (
    <div className="space-y-0 bg-cream">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-[5%] bg-linear-to-br from-cream via-cream2 to-[#FDF8F3] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,var(--forest)_0%,transparent_60%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-end relative z-10">
          <div className="pb-16">
            <nav className="flex items-center gap-2 text-[11px] font-bold text-muted uppercase tracking-widest mb-8">
              <Link to="/" className="hover:text-forest transition-colors">Home</Link>
              <span>›</span>
              <Link to="/lessons" className="hover:text-forest transition-colors">Courses</Link>
              <span>›</span>
              <span className="text-forest">Noorani Qaida Course</span>
            </nav>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-forest-pale border border-forest/10 text-forest text-[10px] font-bold uppercase tracking-wider rounded-full">Beginner Level</span>
              <span className="px-3 py-1 bg-cream2 border border-forest/10 text-ink2 text-[10px] font-bold uppercase tracking-wider rounded-full">Kids & Adults</span>
              <span className="px-3 py-1 bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-gold" /> Two Free Trial Classes
              </span>
            </div>

            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-ink leading-[1.1] mb-8">
              Noorani Qaida —<br />
              <span className="italic text-forest">The Foundation Every Quran Reader Needs</span>
            </h1>

            <p className="text-body text-lg font-light leading-relaxed max-w-2xl mb-10">
              Before you recite a single ayah correctly, you need a strong foundation in Arabic letters and pronunciation. <strong>The Noorani Qaida course builds exactly that, step by step.</strong>
              <br /><br />
              Designed for absolute beginners, this course ensures you master the basics of the Arabic script, making your transition to reading the Holy Quran smooth and effortless.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 border-y border-forest/10 mb-10">
              {[
                { icon: <Clock size={20} />, label: '3–6 Months', sub: 'Average duration' },
                { icon: <User size={20} />, label: 'Live 1-on-1', sub: 'Direct interaction' },
                { icon: <Signal size={20} />, label: 'Beginner', sub: 'Level' },
                { icon: <Users size={20} />, label: 'Kids & Adults', sub: 'Age group' },
                { icon: <ClipboardList size={20} />, label: 'No Prerequisite', sub: 'Start from zero' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-forest opacity-60">{item.icon}</div>
                  <div>
                    <div className="text-ink font-bold text-sm leading-tight">{item.label}</div>
                    <div className="text-muted text-[10px] uppercase tracking-wider">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/register" className="bg-forest text-white px-10 py-4 rounded-xl font-bold hover:bg-forest-mid transition-all shadow-xl shadow-forest/20 flex items-center gap-2 group">
                Start My Journey <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-forest/10 text-forest rounded-xl font-bold hover:bg-forest-pale transition-all"
              >
                View Syllabus
              </button>
            </div>
            <p className="text-[10px] text-muted mt-4 flex items-center gap-2">
              <Lock size={12} /> Patient tutors · Child-friendly methods · Starts within 24 hours
            </p>
          </div>

          <div className="bg-ink text-white p-10 rounded-3xl relative overflow-hidden shadow-2xl mb-16">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
            <div className="font-serif text-4xl text-gold/30 mb-8 text-right" dir="rtl">القَاعِدَةُ النُّورَانِيَّةُ</div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gold-light mb-8">Course at a Glance</h3>
            <div className="space-y-0">
              {[
                { label: 'Level', val: 'Absolute Beginner' },
                { label: 'Duration', val: 'Approx. 3–6 Months' },
                { label: 'Age Group', val: 'Kids (4+) & Adults' },
                { label: 'Class Format', val: 'Live 1-on-1 online' },
                { label: 'Prerequisite', val: 'None' },
                { label: 'Starting From', val: '$35 / month', gold: true },
                { label: 'Trial Class', val: 'FREE', gold: true }
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                  <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold">{stat.label}</span>
                  <span className={`text-sm font-bold ${stat.gold ? 'text-gold-light' : 'text-white/80'}`}>{stat.val}</span>
                </div>
              ))}
            </div>
            <button onClick={() => navigate('/register')} className="w-full mt-10 bg-gold text-ink py-4 rounded-xl font-bold hover:bg-gold-light transition-all shadow-lg shadow-black/20">
              Claim Two Free Trial Classes →
            </button>
            <p className="text-center text-[10px] text-white/20 mt-4">Build your foundation · 24h response</p>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            What You Will Learn
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-12">The First Steps to Quranic Literacy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Arabic Alphabet', desc: 'Learning to recognize and name all 28 Arabic letters in their isolated forms.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Correct Makhraj', desc: 'Building the habit of pronouncing each letter from its proper articulation point from day one.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Vowels (Harakat)', desc: 'Understanding Fatha, Kasra, and Damma and how they change the sound of letters.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Joining Letters', desc: 'Learning how letters change shape when they appear at the beginning, middle, or end of a word.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Tanween & Sukoon', desc: 'Mastering the double vowels and the sign of silence (Sukoon) for proper word structure.' },
              { icon: <span className="w-2 h-2 rounded-full bg-gold shrink-0" />, title: 'Shaddah & Madd', desc: 'Introduction to letter emphasis (Shaddah) and basic prolongation (Madd) rules.' }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-cream rounded-2xl border border-forest/5 hover:border-forest/20 transition-all group">
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h3 className="text-lg font-bold text-ink mb-3">{item.title}</h3>
                <p className="text-body text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 px-[5%] bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-7 h-0.5 bg-gold" />
              Syllabus Overview
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-8 text-center">Noorani Qaida Curriculum</h2>
            <div className="inline-flex items-center gap-2 bg-forest/5 px-6 py-3 rounded-xl text-muted text-sm border border-forest/10">
              <ClipboardList size={18} className="text-forest" />
              <span>Prerequisite: <strong>None.</strong> This course is for absolute beginners.</span>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { 
                num: '01', 
                title: 'The Building Blocks', 
                lessons: '15–20 lessons',
                content: [
                  { name: 'Huroof al-Mufradat (Isolated Letters)', type: 'Alphabet' },
                  { name: 'Recognizing Heavy and Light letters', type: 'Pronunciation' },
                  { name: 'Huroof al-Murakkabat (Compound Letters)', type: 'Alphabet' },
                  { name: 'Huroof al-Muqatta\'at (Special Letters)', type: 'Alphabet' },
                  { name: 'Harakat (Fatha, Kasra, Damma)', type: 'Vowels' },
                  { name: 'Module assessment — Letter & Vowel check', type: 'Assessment' }
                ]
              },
              { 
                num: '02', 
                title: 'Connecting the Dots', 
                lessons: '15–20 lessons',
                content: [
                  { name: 'Tanween (Double Fatha, Kasra, Damma)', type: 'Vowels' },
                  { name: 'Standing Harakat (Vertical Vowels)', type: 'Vowels' },
                  { name: 'Huroof al-Madd (Letters of Prolongation)', type: 'Rules' },
                  { name: 'Huroof al-Leen (Soft Letters)', type: 'Rules' },
                  { name: 'Sukoon (The sign of silence)', type: 'Rules' },
                  { name: 'Module assessment — Reading short words', type: 'Assessment' }
                ]
              },
              { 
                num: '03', 
                title: 'Advanced Foundations', 
                lessons: '15–20 lessons',
                content: [
                  { name: 'Tashdeed (The sign of emphasis)', type: 'Rules' },
                  { name: 'Tashdeed with Tanween', type: 'Rules' },
                  { name: 'Tashdeed with Sukoon', type: 'Rules' },
                  { name: 'Rules of Noon and Meem Mushaddad', type: 'Rules' },
                  { name: 'Introduction to basic Tajweed signs', type: 'Rules' },
                  { name: 'Final evaluation — Reading full ayahs', type: 'Certification' }
                ]
              }
            ].map((module, i) => (
              <div key={i} className="bg-white rounded-2xl border border-forest/5 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                  className="w-full p-6 flex items-center gap-6 hover:bg-forest/5 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-forest/20">{module.num}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-ink group-hover:text-forest transition-colors">{module.title}</h3>
                    <p className="text-muted text-[10px] uppercase tracking-widest font-bold mt-1">{module.lessons}</p>
                  </div>
                  <div className={`w-8 h-8 rounded-full border border-forest/10 flex items-center justify-center text-forest transition-transform ${openModule === i ? 'rotate-180 bg-forest text-white' : ''}`}>
                    <ChevronRight size={16} className="rotate-90" />
                  </div>
                </button>
                <AnimatePresence>
                  {openModule === i && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden bg-slate-50/50"
                    >
                      <div className="p-6 pt-0 space-y-1">
                        {module.content.map((lesson, j) => (
                          <div key={j} className="flex items-center justify-between py-3 border-b border-forest/5 last:border-0">
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-forest/20" />
                              <span className="text-sm text-body font-light">{lesson.name}</span>
                            </div>
                            <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              lesson.type === 'Alphabet' ? 'bg-blue-50 text-blue-600' : 
                              lesson.type === 'Vowels' ? 'bg-emerald-50 text-emerald-600' : 
                              lesson.type === 'Rules' ? 'bg-purple-50 text-purple-600' :
                              'bg-gold/10 text-gold'
                            }`}>{lesson.type}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Lesson Section */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-ink text-white rounded-[40px] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,var(--gold)_0%,transparent_60%)]" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 text-gold-light text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
                <span className="w-7 h-0.5 bg-gold" />
                Inside a Real Class
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Sample 45-Minute Qaida Session</h2>
              <p className="text-white/40 text-lg font-light mb-12">Module 1 — Lesson 4: The Articulation Points of Heavy Letters</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { phase: '1', time: '10 min', title: 'Review', items: ['Reciting the full alphabet', 'Checking previous lesson\'s letters', 'Mouth positioning check'] },
                  { phase: '2', time: '15 min', title: 'New Letters', items: ['Introducing the 7 Heavy letters', 'Visual recognition practice', 'Pronunciation drilling with the teacher'] },
                  { phase: '3', time: '15 min', title: 'Practical Drill', items: ['Identifying heavy letters in words', 'Comparing Heavy vs Light sounds', 'Individual reading practice'] },
                  { phase: '4', time: '5 min', title: 'Wrap-Up', items: ['Feedback on pronunciation', 'Homework: Tracing the new letters', 'Next lesson preview'] }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Phase {item.phase}</span>
                      <span className="text-[10px] font-bold text-gold-light uppercase tracking-widest flex items-center gap-1.5">
                        <Clock size={12} /> {item.time}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold mb-4">{item.title}</h4>
                    <ul className="space-y-3">
                      {item.items.map((li, j) => (
                        <li key={j} className="text-xs text-white/50 flex items-start gap-2 leading-relaxed">
                          <span className="text-gold-light mt-1">›</span> {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Enroll */}
      <section className="py-24 px-[5%] bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-forest-pale border border-forest/10 p-12 rounded-3xl">
            <h3 className="text-forest font-bold flex items-center gap-3 mb-8">
              <CheckCircle size={24} /> This course IS for you if…
            </h3>
            <ul className="space-y-6">
              {[
                'You are a complete beginner who wants to read the Quran',
                'You want to ensure your child starts with the correct pronunciation',
                'You can read but struggle with basic letter recognition',
                'You want to build a strong foundation for Tajweed rules',
                'You are looking for a patient and child-friendly teaching approach'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-body leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-forest/5 p-12 rounded-3xl flex flex-col">
            <h3 className="text-red-600 font-bold flex items-center gap-3 mb-8">
              <XCircle size={24} /> Not sure? You may need…
            </h3>
            <ul className="space-y-6 mb-10">
              {[
                'You already know the alphabet and basic rules — start with Tajweed',
                'You want to understand the meaning — check our Tafseer Course'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-body leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-200 mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8 border-t border-forest/5">
              <p className="text-sm text-muted mb-6">Ready to start your Quranic journey?</p>
              <button onClick={() => navigate('/contact')} className="text-forest font-bold flex items-center gap-2 hover:underline">
                Ask our academic advisor <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            FAQ
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-12">Common Questions</h2>
          
          <div className="space-y-0">
            {[
              { q: 'How long does it take to finish the Noorani Qaida?', a: 'On average, it takes 3–6 months depending on the student\'s age and frequency of classes. Children often take a bit longer to ensure they build a solid foundation.' },
              { q: 'Is it difficult for adults to start from zero?', a: 'Not at all. We have many adult students who start from scratch. Our tutors are patient and use methods tailored to adult learners to make the process efficient and rewarding.' },
              { q: 'What happens after I finish the Qaida?', a: 'Once you complete the Qaida and pass the final evaluation, you will be ready to start reading the Holy Quran. Most students transition to our Quran Reading with Tajweed course.' },
              { q: 'Can I choose a female tutor for my child?', a: 'Yes, we have both male and female tutors available. You can specify your preference when you register for your two free trial classes.' }
            ].map((faq, i) => (
              <div key={i} className="border-b border-forest/10 last:border-0">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-8 flex items-center justify-between gap-6 text-left group"
                >
                  <span className={`text-lg font-bold transition-colors ${openFaq === i ? 'text-forest' : 'text-ink group-hover:text-forest'}`}>{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full border border-forest/10 flex items-center justify-center text-forest transition-all shrink-0 ${openFaq === i ? 'bg-forest text-white rotate-180' : 'bg-forest-pale'}`}>
                    <ChevronRight size={18} className="rotate-90" />
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
                      <p className="text-body text-base leading-relaxed pb-8 pr-12 font-light">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Course Banner */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-forest rounded-[32px] p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full pointer-events-none" />
            <div className="text-center lg:text-left relative z-10">
              <div className="text-gold-light text-[10px] font-bold uppercase tracking-[0.3em] mb-4">The Next Step</div>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">Next Step: Quran Reading with Tajweed →</h3>
              <p className="text-white/40 text-lg font-light">Apply your foundation to the words of Allah</p>
            </div>
            <button onClick={() => navigate('/course/tajweed-course')} className="bg-gold text-ink px-10 py-5 rounded-2xl font-bold hover:bg-gold-light transition-all shadow-2xl shadow-black/20 relative z-10 whitespace-nowrap">
              View Course Details →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const QuranClassesCanadaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const painPoints = [
    { icon: "❄️", title: "No driving in Canadian winters for Quran class", desc: "When it's -20°C outside, the last thing you want is bundling the kids up for a 30-minute drive. Your home is the classroom now." },
    { icon: "📋", title: "Waiting lists are frustrating", desc: "Many Canadian Islamic schools have months-long waiting lists. We can have your child in a class within 24 hours of your first message." },
    { icon: "🍁", title: "Coast to coast — we're there", desc: "Toronto, Vancouver, Calgary, Montreal — it doesn't matter where in Canada you are. We cover all four time zones and schedule around your city." },
    { icon: "💵", title: "Pay in Canadian dollars", desc: "No USD conversion. No extra fees. Straightforward CAD pricing with nothing hidden." }
  ];

  const pricingPlans = [
    { name: "Starter", price: "39", classes: "8 classes / month", popular: false },
    { name: "Standard", price: "53", classes: "12 classes / month", popular: true },
    { name: "Intensive", price: "69", classes: "16 classes / month", popular: false },
    { name: "Daily", price: "85", classes: "20 classes / month", popular: false }
  ];

  const faqs = [
    { q: "We're in Vancouver (PST) — do you have tutors available at our time?", a: "Yes. We cover Pacific Standard Time and have tutors available from early morning to late evening PST. Weekend slots are especially popular with BC families." },
    { q: "My kids go to French immersion school — do you teach in English?", a: "All our classes are in English. French immersion doesn't affect anything — our tutors are experienced with Canadian-born children and teach clearly in English throughout." },
    { q: "Can we get a female tutor for our daughters?", a: "Absolutely. Female certified tutors are available for all sisters and girls. Just mention it when you book your free trial." },
    { q: "What if we move provinces?", a: "Nothing changes at all. Since it's fully online, a move from Calgary to Halifax doesn't affect your classes. Your tutor stays the same — only your time zone might shift slightly." }
  ];

  return (
    <div className="space-y-0 bg-cream">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-[5%] bg-linear-to-br from-cream via-cream2 to-[#d5ede2] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,var(--forest)_0%,transparent_60%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-[11px] font-bold text-muted uppercase tracking-widest mb-8">
            <Link to="/" className="hover:text-forest transition-colors">Home</Link>
            <span>›</span>
            <span className="text-forest">Quran Classes Canada</span>
          </nav>

          <div className="text-4xl mb-6">🇨🇦</div>
          <div className="flex items-center gap-2 text-forest text-[10px] font-bold uppercase tracking-widest mb-6">
            <div className="w-6 h-[2px] bg-gold rounded-full" />
            For Muslim Families Across Canada
          </div>

          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-ink leading-[1.15] mb-8 max-w-4xl">
            You're in Canada — and you want your family to learn Quran without the usual headaches.
          </h1>

          <p className="text-body text-lg font-light leading-relaxed max-w-2xl mb-10">
            We've heard it from Canadian families all the time — waiting lists at the Islamic school, classes too far away, or group sessions where your child isn't getting enough individual attention.
            <br /><br />
            <strong>With My Quran Guide, a certified tutor meets your family online — on your schedule, in your time zone, from Toronto to Vancouver.</strong> No commute. No waiting list. No compromises.
          </p>

          <div className="flex flex-wrap gap-4 mb-4">
            <Link to="/register" className="bg-forest text-white px-8 py-4 rounded-lg font-bold text-sm hover:bg-forest-mid transition-all shadow-xl shadow-forest/20 flex items-center gap-2">
              Book Free Trial Class <ArrowRight size={18} />
            </Link>
            <Link to="/fees" className="border border-forest/10 text-forest px-8 py-4 rounded-lg font-bold text-sm hover:bg-forest-pale transition-all">
              See Pricing (CAD)
            </Link>
          </div>
          <p className="text-muted text-xs">🔒 No card needed · We respond in 1–3 hours · First class is free</p>
        </div>
      </section>

      {/* Timezone Strip */}
      <div className="bg-cream2 border-y border-forest/5 py-8 px-[5%]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4">
          <span className="text-[11px] font-bold text-muted uppercase tracking-widest">⏰ All Canadian time zones — we've got you:</span>
          <div className="flex flex-wrap gap-3">
            {['EST — Toronto, Ottawa, Montreal', 'CST — Winnipeg, Saskatoon', 'MST — Calgary, Edmonton', 'PST — Vancouver, Victoria'].map((tz, i) => (
              <div key={i} className="bg-white px-4 py-2 rounded-full border border-forest/5 text-xs text-body font-medium">{tz}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Pain Points */}
      <section className="py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-forest text-[10px] font-bold uppercase tracking-widest mb-4">
            <div className="w-6 h-[2px] bg-gold rounded-full" />
            We get it — Canadian Muslim family life is busy
          </div>
          <h2 className="font-serif text-4xl font-bold text-ink mb-16">We understand the challenges</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((point, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-forest/5 hover:shadow-xl hover:border-forest/10 transition-all group">
                <div className="text-3xl mb-4">{point.icon}</div>
                <h3 className="font-serif text-xl font-bold text-ink mb-3 group-hover:text-forest transition-colors">{point.title}</h3>
                <p className="text-body text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-[5%] bg-forest text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-gold-light text-[10px] font-bold uppercase tracking-widest mb-4">Simple pricing in US dollars</div>
          <h2 className="font-serif text-4xl font-bold mb-4">Simple Plans. All prices in USD.</h2>
          <p className="text-white/40 mb-16">Cancel anytime. No contracts. Free first class on every plan.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
            {pricingPlans.map((plan, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${plan.popular ? 'border-gold bg-white/10' : 'border-white/10 bg-white/5'} text-center group hover:bg-white/10 transition-all flex flex-col`}>
                {plan.popular && <div className="text-gold-light text-[10px] font-bold uppercase tracking-widest mb-4">⭐ Most Popular</div>}
                <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-4">{plan.name}</div>
                <div className="font-serif text-5xl font-bold mb-2">
                  <span className="text-xl align-top mr-1">$</span>{plan.price}
                </div>
                <div className="text-white/30 text-[11px] mb-4">per month</div>
                <div className="text-gold-light font-bold text-sm mb-8 flex-1">{plan.classes}</div>
                <button onClick={() => navigate('/register')} className="w-full bg-gold text-ink py-3 rounded-lg font-bold text-sm hover:bg-gold-light transition-all">Start Free →</button>
              </div>
            ))}
          </div>

          {/* Hifz Plan */}
          <div className="mt-12 bg-white/5 rounded-2xl p-8 border border-white/10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center max-w-7xl">
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
              <button 
                onClick={() => navigate('/register')}
                className="w-full bg-gold text-ink px-8 py-3 rounded-lg font-bold text-[13px] hover:bg-gold-light transition-all whitespace-nowrap text-center"
              >
                Begin Hifz Journey →
              </button>
            </div>
          </div>
          <p className="text-white/20 text-xs mt-8 text-center max-w-7xl">All prices in USD · Free first class included · Cancel anytime</p>
        </div>
      </section>

      {/* Conversation CTA */}
      <section className="py-24 px-[5%]">
        <div className="max-w-7xl mx-auto bg-ink rounded-3xl p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute bottom-0 right-10 font-serif text-[120px] text-white/5 leading-none pointer-events-none select-none">بِسْمِ اللَّهِ</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="text-gold-light text-[10px] font-bold uppercase tracking-widest mb-4">Your first class is completely free. No card required.</div>
              <h2 className="font-serif text-4xl font-bold text-white mb-6 leading-tight">Ready to start? Let's talk.</h2>
              <p className="text-white/40 text-lg leading-relaxed">We respond within 1–3 hours — your tutor can be ready within 24 hours.</p>
            </div>
            <div className="text-center lg:text-right">
              <button onClick={() => navigate('/register')} className="bg-gold text-ink px-10 py-5 rounded-xl font-bold text-lg hover:bg-gold-light transition-all shadow-2xl shadow-gold/20 mb-4">
                Book Free Class →
              </button>
              <p className="text-white/20 text-xs">No card · No commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-forest text-[10px] font-bold uppercase tracking-widest mb-4">
            <div className="w-6 h-[2px] bg-gold rounded-full" />
            How It Works
          </div>
          <h2 className="font-serif text-4xl font-bold text-ink mb-16">Getting started takes about 2 minutes.</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', icon: '📋', title: 'You contact us', desc: 'Fill in a short form — name, age, timezone, what you want to learn. Two minutes max.' },
              { num: '02', icon: '⚡', title: 'We reply fast', desc: 'Within 1–3 hours we match you with the right certified tutor for your level and schedule.' },
              { num: '03', icon: '🆓', title: 'Free first class', desc: 'Meet your tutor. See how it feels. No pressure, no payment — just a real class.' },
              { num: '04', icon: '📈', title: 'You start learning', desc: 'Choose your plan and begin. No waiting list. Classes start straight away.' }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-forest/5 relative group hover:border-forest/10 transition-all">
                <div className="font-serif text-5xl font-bold text-forest/5 mb-4 leading-none">{step.num}</div>
                <div className="text-2xl mb-4">{step.icon}</div>
                <h3 className="font-bold text-ink mb-2">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-[5%] max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-forest text-[10px] font-bold uppercase tracking-widest mb-4">
          <div className="w-6 h-[2px] bg-gold rounded-full" />
          What Canadian families ask us most
        </div>
        <h2 className="font-serif text-4xl font-bold text-ink mb-16">Common Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-forest/10">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="font-bold text-ink group-hover:text-forest transition-colors">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === i ? 'bg-forest text-white rotate-180' : 'bg-forest-pale text-forest'}`}>
                  <ChevronRight size={16} />
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
                    <p className="pb-6 text-body text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const QuranClassesUKPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const painPoints = [
    { icon: "🏫", title: "Weekend madrassah isn't enough", desc: "Two hours on a Saturday with 15 other kids isn't the same as 30 minutes of focused 1-on-1 time with a certified tutor. Your child's Quran deserves more attention than that." },
    { icon: "🏃", title: "Life doesn't stop for Quran class", desc: "School runs, work shifts, after-school clubs — we know British family life is full. That's why we schedule around you, not the other way around." },
    { icon: "🎓", title: "You want proper certification", desc: "A certification means your tutor's recitation has been verified through a chain going all the way back to the Prophet ﷺ. We don't accept tutors without it." },
    { icon: "💷", title: "You pay in pounds — no conversion faff", desc: "No working out exchange rates. No PayPal currency fees. Simple GBP pricing, nothing hidden." }
  ];

  const pricingPlans = [
    { name: "Starter", price: "39", classes: "8 classes / month", popular: false },
    { name: "Standard", price: "53", classes: "12 classes / month", popular: true },
    { name: "Intensive", price: "69", classes: "16 classes / month", popular: false },
    { name: "Daily", price: "85", classes: "20 classes / month", popular: false }
  ];

  const faqs = [
    { q: "Can my child do classes after school — say 4:30pm or 5pm GMT?", a: "Yes — after-school slots are our most popular in the UK. We have plenty of availability between 4pm and 7pm GMT, and evening slots up to 11pm if that works better for your family." },
    { q: "My daughter goes to a UK state school — is there a female tutor?", a: "Yes. Female certified tutors are available for all sisters and girls. Just let us know when you get in touch and we'll arrange it straight away." },
    { q: "We're in Scotland / Wales / Northern Ireland — does that matter?", a: "Not at all. Online means everywhere. Whether you're in Edinburgh, Cardiff, or Belfast — your class experience is exactly the same as a family in London." },
    { q: "What if my child's British accent affects how the tutor communicates?", a: "All our tutors teach in clear English and are very used to working with British-born children. Language and accent are never a barrier." }
  ];

  return (
    <div className="space-y-0 bg-cream">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-[5%] bg-linear-to-br from-cream via-cream2 to-[#d5ede2] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,var(--forest)_0%,transparent_60%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-[11px] font-bold text-muted uppercase tracking-widest mb-8">
            <button onClick={() => navigate('/')} className="hover:text-forest transition-colors">Home</button>
            <span>›</span>
            <span className="text-forest">Quran Classes UK</span>
          </nav>

          <div className="text-4xl mb-6">🇬🇧</div>
          <div className="flex items-center gap-2 text-forest text-[10px] font-bold uppercase tracking-widest mb-6">
            <div className="w-6 h-[2px] bg-gold rounded-full" />
            For Muslim Families Across the UK
          </div>

          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-ink leading-[1.15] mb-8 max-w-4xl">
            You're in the UK — and finding good Quran classes isn't as easy as it should be.
          </h1>

          <p className="text-body text-lg font-light leading-relaxed max-w-2xl mb-10">
            You've probably seen what's out there. Overcrowded weekend madrassahs. Group classes where your child reads for two minutes and then sits waiting. Teachers who mean well but don't hold proper credentials.
            <br /><br />
            <strong>Your family deserves a certified tutor, all to yourself, at a time that fits around British school life.</strong> That's exactly what we offer — from London to Glasgow, Bradford to Bristol.
          </p>

          <div className="flex flex-wrap gap-4 mb-4">
            <button onClick={() => navigate('/register')} className="bg-forest text-white px-8 py-4 rounded-lg font-bold text-sm hover:bg-forest-mid transition-all shadow-xl shadow-forest/20 flex items-center gap-2">
              Book Free Trial Class <ArrowRight size={18} />
            </button>
            <button onClick={() => navigate('/fees')} className="border border-forest/10 text-forest px-8 py-4 rounded-lg font-bold text-sm hover:bg-forest-pale transition-all">
              See Pricing (GBP)
            </button>
          </div>
          <p className="text-muted text-xs">🔒 No card needed · We respond in 1–3 hours · First class is free</p>
        </div>
      </section>

      {/* Timezone Strip */}
      <div className="bg-cream2 border-y border-forest/5 py-8 px-[5%]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4">
          <span className="text-[11px] font-bold text-muted uppercase tracking-widest">⏰ GMT and BST — morning to night:</span>
          <div className="flex flex-wrap gap-3">
            {['6am onwards — before the school run', 'After school — 4pm to 7pm slots', 'Evenings — up to 11pm', 'Weekends — any time that suits you'].map((tz, i) => (
              <div key={i} className="bg-white px-4 py-2 rounded-full border border-forest/5 text-xs text-body font-medium">{tz}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Pain Points */}
      <section className="py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-forest text-[10px] font-bold uppercase tracking-widest mb-4">
            <div className="w-6 h-[2px] bg-gold rounded-full" />
            We understand British Muslim family life
          </div>
          <h2 className="font-serif text-4xl font-bold text-ink mb-16">We understand the challenges</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((point, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-forest/5 hover:shadow-xl hover:border-forest/10 transition-all group">
                <div className="text-3xl mb-4">{point.icon}</div>
                <h3 className="font-serif text-xl font-bold text-ink mb-3 group-hover:text-forest transition-colors">{point.title}</h3>
                <p className="text-body text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-[5%] bg-forest text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-gold-light text-[10px] font-bold uppercase tracking-widest mb-4">Simple pricing in US dollars</div>
          <h2 className="font-serif text-4xl font-bold mb-4">Simple Plans. All prices in USD.</h2>
          <p className="text-white/40 mb-16">Cancel anytime. No contracts. Free first class on every plan.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
            {pricingPlans.map((plan, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${plan.popular ? 'border-gold bg-white/10' : 'border-white/10 bg-white/5'} text-center group hover:bg-white/10 transition-all flex flex-col`}>
                {plan.popular && <div className="text-gold-light text-[10px] font-bold uppercase tracking-widest mb-4">⭐ Most Popular</div>}
                <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-4">{plan.name}</div>
                <div className="font-serif text-5xl font-bold mb-2">
                  <span className="text-xl align-top mr-1">$</span>{plan.price}
                </div>
                <div className="text-white/30 text-[11px] mb-4">per month</div>
                <div className="text-gold-light font-bold text-sm mb-8 flex-1">{plan.classes}</div>
                <button onClick={() => navigate('/register')} className="w-full bg-gold text-ink py-3 rounded-lg font-bold text-sm hover:bg-gold-light transition-all">Start Free →</button>
              </div>
            ))}
          </div>

          {/* Hifz Plan */}
          <div className="mt-12 bg-white/5 rounded-2xl p-8 border border-white/10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center max-w-7xl">
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
              <button 
                onClick={() => navigate('/register')}
                className="w-full bg-gold text-ink px-8 py-3 rounded-lg font-bold text-[13px] hover:bg-gold-light transition-all whitespace-nowrap text-center"
              >
                Begin Hifz Journey →
              </button>
            </div>
          </div>
          <p className="text-white/20 text-xs mt-8 text-center max-w-7xl">All prices in USD · Free first class included · Cancel anytime</p>
        </div>
      </section>

      {/* Conversation CTA */}
      <section className="py-24 px-[5%]">
        <div className="max-w-7xl mx-auto bg-ink rounded-3xl p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute bottom-0 right-10 font-serif text-[120px] text-white/5 leading-none pointer-events-none select-none">بِسْمِ اللَّهِ</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="text-gold-light text-[10px] font-bold uppercase tracking-widest mb-4">First class is on us — no card, no commitment.</div>
              <h2 className="font-serif text-4xl font-bold text-white mb-6 leading-tight">Ready to start? Let's talk.</h2>
              <p className="text-white/40 text-lg leading-relaxed">We respond within 1–3 hours and can have your tutor ready within 24 hours.</p>
            </div>
            <div className="text-center lg:text-right">
              <button onClick={() => navigate('/register')} className="bg-gold text-ink px-10 py-5 rounded-xl font-bold text-lg hover:bg-gold-light transition-all shadow-2xl shadow-gold/20 mb-4">
                Book Free Class →
              </button>
              <p className="text-white/20 text-xs">No card · No commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-forest text-[10px] font-bold uppercase tracking-widest mb-4">
            <div className="w-6 h-[2px] bg-gold rounded-full" />
            How It Works
          </div>
          <h2 className="font-serif text-4xl font-bold text-ink mb-16">Getting started takes about 2 minutes.</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', icon: '📋', title: 'You contact us', desc: 'Fill in a short form — name, age, timezone, what you want to learn. Two minutes max.' },
              { num: '02', icon: '⚡', title: 'We reply fast', desc: 'Within 1–3 hours we match you with the right certified tutor for your level and schedule.' },
              { num: '03', icon: '🆓', title: 'Free first class', desc: 'Meet your tutor. See how it feels. No pressure, no payment — just a real class.' },
              { num: '04', icon: '📈', title: 'You start learning', desc: 'Choose your plan and begin. No waiting list. Classes start straight away.' }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-forest/5 relative group hover:border-forest/10 transition-all">
                <div className="font-serif text-5xl font-bold text-forest/5 mb-4 leading-none">{step.num}</div>
                <div className="text-2xl mb-4">{step.icon}</div>
                <h3 className="font-bold text-ink mb-2">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-[5%] max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-forest text-[10px] font-bold uppercase tracking-widest mb-4">
          <div className="w-6 h-[2px] bg-gold rounded-full" />
          Questions UK families ask us most
        </div>
        <h2 className="font-serif text-4xl font-bold text-ink mb-16">Common Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-forest/10">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="font-bold text-ink group-hover:text-forest transition-colors">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === i ? 'bg-forest text-white rotate-180' : 'bg-forest-pale text-forest'}`}>
                  <ChevronRight size={16} />
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
                    <p className="pb-6 text-body text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const QuranClassesUSAPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const painPoints = [
    { icon: "😩", title: "You can't find a qualified local tutor", desc: "Weekend Islamic schools are usually group classes with uncertified teachers. Your child deserves better than that." },
    { icon: "📅", title: "Schedules never work for you", desc: "Between school, work, and sports — finding a time that actually works feels impossible. We schedule around your life, not ours." },
    { icon: "🌍", title: "You're worried your kids are losing their deen", desc: "Growing up in America is beautiful — but you want your children to have a real connection with the Quran. That's not too much to ask." },
    { icon: "✅", title: "You want someone actually certified", desc: "Our tutors hold certification — a formal credential with a chain tracing back to the Prophet ﷺ. That's the gold standard. Most local options don't come close." }
  ];

  const pricingPlans = [
    { name: "Starter", price: "39", classes: "8 classes / month", popular: false },
    { name: "Standard", price: "53", classes: "12 classes / month", popular: true },
    { name: "Intensive", price: "69", classes: "16 classes / month", popular: false },
    { name: "Daily", price: "85", classes: "20 classes / month", popular: false }
  ];

  const faqs = [
    { q: "My kids go to American school — can you work around that schedule?", a: "Absolutely. Most of our US families do classes after school (4–7pm), on weekend mornings, or in the evenings. We'll find a slot that doesn't clash with homework, sports, or anything else on your plate." },
    { q: "Are there female tutors available for my daughter?", a: "Yes — always. Just mention it when you contact us and we'll match your daughter with a certified female tutor from day one." },
    { q: "What if we move to a different city or state?", a: "Nothing changes. Since everything is online, it doesn't matter if you're in Chicago today and moving to Dallas next month. Your tutor stays with you." },
    { q: "My child was born here and doesn't know any Arabic — is that okay?", a: "That's completely normal and we're ready for it. We start from the very beginning — Arabic letters, sounds, everything — in English. No prior knowledge needed at all." }
  ];

  return (
    <div className="space-y-0 bg-cream">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-[5%] bg-linear-to-br from-cream via-cream2 to-[#d5ede2] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,var(--forest)_0%,transparent_60%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-[11px] font-bold text-muted uppercase tracking-widest mb-8">
            <button onClick={() => navigate('/')} className="hover:text-forest transition-colors">Home</button>
            <span>›</span>
            <span className="text-forest">Quran Classes USA</span>
          </nav>

          <div className="text-4xl mb-6">🇺🇸</div>
          <div className="flex items-center gap-2 text-forest text-[10px] font-bold uppercase tracking-widest mb-6">
            <div className="w-6 h-[2px] bg-gold rounded-full" />
            For Muslim Families in the USA
          </div>

          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-ink leading-[1.15] mb-8 max-w-4xl">
            You're in the USA — and you want your family to learn Quran properly.
          </h1>

          <p className="text-body text-lg font-light leading-relaxed max-w-2xl mb-10">
            Maybe you've looked at local options. Weekend madrassah with 20 kids in one room. Waiting lists. Tutors without proper certification. Or maybe there's just nothing good near you at all.
            <br /><br />
            That's exactly why we exist. <strong>A certified tutor comes to your home — through your screen — on your schedule.</strong> Whether you're in New York or Los Angeles, Texas or Michigan — we've got you covered.
          </p>

          <div className="flex flex-wrap gap-4 mb-4">
            <button onClick={() => navigate('/register')} className="bg-forest text-white px-8 py-4 rounded-lg font-bold text-sm hover:bg-forest-mid transition-all shadow-xl shadow-forest/20 flex items-center gap-2">
              Book Free Trial Class <ArrowRight size={18} />
            </button>
            <button onClick={() => navigate('/fees')} className="border border-forest/10 text-forest px-8 py-4 rounded-lg font-bold text-sm hover:bg-forest-pale transition-all">
              See Pricing (USD)
            </button>
          </div>
          <p className="text-muted text-xs">🔒 No card needed · We respond in 1–3 hours · First class is free</p>
        </div>
      </section>

      {/* Timezone Strip */}
      <div className="bg-cream2 border-y border-forest/5 py-8 px-[5%]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4">
          <span className="text-[11px] font-bold text-muted uppercase tracking-widest">⏰ We work around ALL US time zones:</span>
          <div className="flex flex-wrap gap-3">
            {['EST — New York, Miami, Boston', 'CST — Chicago, Houston, Dallas', 'MST — Denver, Phoenix, Salt Lake', 'PST — LA, Seattle, San Francisco'].map((tz, i) => (
              <div key={i} className="bg-white px-4 py-2 rounded-full border border-forest/5 text-xs text-body font-medium">{tz}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Pain Points */}
      <section className="py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-forest text-[10px] font-bold uppercase tracking-widest mb-4">
            <div className="w-6 h-[2px] bg-gold rounded-full" />
            We know what it's like for Muslim families in America
          </div>
          <h2 className="font-serif text-4xl font-bold text-ink mb-16">We understand the challenges</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((point, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-forest/5 hover:shadow-xl hover:border-forest/10 transition-all group">
                <div className="text-3xl mb-4">{point.icon}</div>
                <h3 className="font-serif text-xl font-bold text-ink mb-3 group-hover:text-forest transition-colors">{point.title}</h3>
                <p className="text-body text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-[5%] bg-forest text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-gold-light text-[10px] font-bold uppercase tracking-widest mb-4">Simple pricing in US dollars</div>
          <h2 className="font-serif text-4xl font-bold mb-4">Simple Plans. All prices in USD.</h2>
          <p className="text-white/40 mb-16">Cancel anytime. No contracts. Free first class on every plan.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
            {pricingPlans.map((plan, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${plan.popular ? 'border-gold bg-white/10' : 'border-white/10 bg-white/5'} text-center group hover:bg-white/10 transition-all flex flex-col`}>
                {plan.popular && <div className="text-gold-light text-[10px] font-bold uppercase tracking-widest mb-4">⭐ Most Popular</div>}
                <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-4">{plan.name}</div>
                <div className="font-serif text-5xl font-bold mb-2">
                  <span className="text-xl align-top mr-1">$</span>{plan.price}
                </div>
                <div className="text-white/30 text-[11px] mb-4">per month</div>
                <div className="text-gold-light font-bold text-sm mb-8 flex-1">{plan.classes}</div>
                <button onClick={() => navigate('/register')} className="w-full bg-gold text-ink py-3 rounded-lg font-bold text-sm hover:bg-gold-light transition-all">Start Free →</button>
              </div>
            ))}
          </div>

          {/* Hifz Plan */}
          <div className="mt-12 bg-white/5 rounded-2xl p-8 border border-white/10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center max-w-7xl">
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
              <button 
                onClick={() => navigate('/register')}
                className="w-full bg-gold text-ink px-8 py-3 rounded-lg font-bold text-[13px] hover:bg-gold-light transition-all whitespace-nowrap text-center"
              >
                Begin Hifz Journey →
              </button>
            </div>
          </div>
          <p className="text-white/20 text-xs mt-8 text-center max-w-7xl">All prices in USD · Free first class included · Cancel anytime</p>
        </div>
      </section>

      {/* Conversation CTA */}
      <section className="py-24 px-[5%]">
        <div className="max-w-7xl mx-auto bg-ink rounded-3xl p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute bottom-0 right-10 font-serif text-[120px] text-white/5 leading-none pointer-events-none select-none">بِسْمِ اللَّهِ</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="text-gold-light text-[10px] font-bold uppercase tracking-widest mb-4">Ready to get started? Your first class is completely free.</div>
              <h2 className="font-serif text-4xl font-bold text-white mb-6 leading-tight">Ready to start? Let's talk.</h2>
              <p className="text-white/40 text-lg leading-relaxed">We respond within 1–3 hours. Your tutor can be ready within 24 hours.</p>
            </div>
            <div className="text-center lg:text-right">
              <button onClick={() => navigate('/register')} className="bg-gold text-ink px-10 py-5 rounded-xl font-bold text-lg hover:bg-gold-light transition-all shadow-2xl shadow-gold/20 mb-4">
                Book Free Class →
              </button>
              <p className="text-white/20 text-xs">No card · No commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-forest text-[10px] font-bold uppercase tracking-widest mb-4">
            <div className="w-6 h-[2px] bg-gold rounded-full" />
            How It Works
          </div>
          <h2 className="font-serif text-4xl font-bold text-ink mb-16">Getting started takes about 2 minutes.</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', icon: '📋', title: 'You contact us', desc: 'Fill in a short form — name, age, timezone, what you want to learn. Two minutes max.' },
              { num: '02', icon: '⚡', title: 'We reply fast', desc: 'Within 1–3 hours we match you with the right certified tutor for your level and schedule.' },
              { num: '03', icon: '🆓', title: 'Free first class', desc: 'Meet your tutor. See how it feels. No pressure, no payment — just a real class.' },
              { num: '04', icon: '📈', title: 'You start learning', desc: 'Choose your plan and begin. No waiting list. Classes start straight away.' }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-forest/5 relative group hover:border-forest/10 transition-all">
                <div className="font-serif text-5xl font-bold text-forest/5 mb-4 leading-none">{step.num}</div>
                <div className="text-2xl mb-4">{step.icon}</div>
                <h3 className="font-bold text-ink mb-2">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-[5%] max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-forest text-[10px] font-bold uppercase tracking-widest mb-4">
          <div className="w-6 h-[2px] bg-gold rounded-full" />
          Questions we get from US families all the time
        </div>
        <h2 className="font-serif text-4xl font-bold text-ink mb-16">Common Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-forest/10">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="font-bold text-ink group-hover:text-forest transition-colors">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === i ? 'bg-forest text-white rotate-180' : 'bg-forest-pale text-forest'}`}>
                  <ChevronRight size={16} />
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
                    <p className="pb-6 text-body text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const QuranClassesLadiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const painPoints = [
    { icon: "🧕", title: "You want a female tutor only", desc: "We understand. Privacy and comfort are non-negotiable. You will only ever be matched with a certified female teacher." },
    { icon: "🏠", title: "You're balancing home and work", desc: "Between kids, career, and household — finding time for yourself is hard. Our flexible slots mean you can learn when the house is quiet." },
    { icon: "🤐", title: "You're shy about your recitation", desc: "Many sisters feel they've 'left it too late'. It's never too late. Our tutors are patient, kind, and here to build your confidence, not judge you." },
    { icon: "✨", title: "You want a structured path", desc: "No more random YouTube videos. Get a clear, personalized plan to improve your Tajweed or start your Hifz journey properly." }
  ];

  const pricingPlans = [
    { name: "Starter", price: "39", classes: "8 classes / month", popular: false },
    { name: "Standard", price: "53", classes: "12 classes / month", popular: true },
    { name: "Intensive", price: "69", classes: "16 classes / month", popular: false },
    { name: "Daily", price: "85", classes: "20 classes / month", popular: false }
  ];

  const faqs = [
    { q: "Are the tutors definitely female?", a: "Yes, 100%. We have a dedicated team of certified female tutors specifically for our sisters' department. You will never be assigned a male teacher." },
    { q: "I'm a complete beginner — is that okay?", a: "Of course. Many of our students start from the very beginning (Noorani Qaida). We move at your pace, ensuring you master the basics before moving on." },
    { q: "Can I choose my class times?", a: "Yes. We offer 24/7 scheduling. Whether you prefer early mornings before the kids wake up or late evenings, we'll find a slot that works for you." },
    { q: "What if I need to cancel a class?", a: "We just ask for 6 hours' notice. You can reschedule your class to another time that week so you don't miss out on your progress." }
  ];

  return (
    <div className="space-y-0 bg-cream text-ink">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-[5%] bg-linear-to-br from-cream via-cream2 to-[#fdf2f8] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,#db2777_0%,transparent_60%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-[11px] font-bold text-muted uppercase tracking-widest mb-8">
            <button onClick={() => navigate('/')} className="hover:text-forest transition-colors">Home</button>
            <span>›</span>
            <span className="text-forest">Quran Classes for Ladies</span>
          </nav>

          <div className="text-4xl mb-6">🌸</div>
          <div className="flex items-center gap-2 text-forest text-[10px] font-bold uppercase tracking-widest mb-6">
            <div className="w-6 h-[2px] bg-gold rounded-full" />
            Private 1-on-1 Classes for Sisters
          </div>

          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-ink leading-[1.15] mb-8 max-w-4xl">
            A private, comfortable space for sisters to connect with the Quran.
          </h1>

          <p className="text-body text-lg font-light leading-relaxed max-w-2xl mb-10">
            Whether you're starting from the basics, perfecting your Tajweed, or beginning your Hifz journey — we provide a supportive environment with <strong>certified female tutors</strong> who understand your journey.
          </p>

          <div className="flex flex-wrap gap-4 mb-4">
            <button onClick={() => navigate('/register')} className="bg-forest text-white px-8 py-4 rounded-lg font-bold text-sm hover:bg-forest-mid transition-all shadow-xl shadow-forest/20 flex items-center gap-2">
              Start Your Journey <ArrowRight size={18} />
            </button>
            <button onClick={() => navigate('/fees')} className="border border-forest/10 text-forest px-8 py-4 rounded-lg font-bold text-sm hover:bg-forest-pale transition-all">
              View Sisters' Pricing
            </button>
          </div>
          <p className="text-muted text-xs">🔒 Private 1-on-1 · Female Tutors Only · First Class Free</p>
        </div>
      </section>

      {/* Features Strip */}
      <div className="bg-white border-y border-forest/5 py-12 px-[5%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <UserCheck className="text-forest" />, title: "100% Female Tutors", desc: "Learn in complete privacy with certified sisters." },
            { icon: <ArrowRight className="text-forest" />, title: "Flexible Scheduling", desc: "Classes that fit around your family and work life." },
            { icon: <ChevronRight className="text-forest" />, title: "Customized Pace", desc: "No pressure. We move as fast or slow as you need." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-forest-pale flex items-center justify-center shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-bold text-ink mb-1">{item.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pain Points */}
      <section className="py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-forest text-[10px] font-bold uppercase tracking-widest mb-4">
            <div className="w-6 h-[2px] bg-gold rounded-full" />
            Designed for the Modern Muslimah
          </div>
          <h2 className="font-serif text-4xl font-bold text-ink mb-16">We understand your journey</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((point, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-forest/5 hover:shadow-xl hover:border-forest/10 transition-all group">
                <div className="text-3xl mb-4">{point.icon}</div>
                <h3 className="font-serif text-xl font-bold text-ink mb-3 group-hover:text-forest transition-colors">{point.title}</h3>
                <p className="text-body text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-[5%] bg-forest text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-gold-light text-[10px] font-bold uppercase tracking-widest mb-4">Simple pricing in US dollars</div>
          <h2 className="font-serif text-4xl font-bold mb-4">Simple Plans. All prices in USD.</h2>
          <p className="text-white/40 mb-16">Cancel anytime. No contracts. Free first class on every plan.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
            {pricingPlans.map((plan, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${plan.popular ? 'border-gold bg-white/10' : 'border-white/10 bg-white/5'} text-center group hover:bg-white/10 transition-all flex flex-col`}>
                {plan.popular && <div className="text-gold-light text-[10px] font-bold uppercase tracking-widest mb-4">⭐ Most Popular</div>}
                <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-4">{plan.name}</div>
                <div className="font-serif text-5xl font-bold mb-2">
                  <span className="text-xl align-top mr-1">$</span>{plan.price}
                </div>
                <div className="text-white/30 text-[11px] mb-4">per month</div>
                <div className="text-gold-light font-bold text-sm mb-8 flex-1">{plan.classes}</div>
                <button onClick={() => navigate('/register')} className="w-full bg-gold text-ink py-3 rounded-lg font-bold text-sm hover:bg-gold-light transition-all">Start Free →</button>
              </div>
            ))}
          </div>

          {/* Hifz Plan */}
          <div className="mt-12 bg-white/5 rounded-2xl p-8 border border-white/10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center max-w-7xl">
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
              <button 
                onClick={() => navigate('/register')}
                className="w-full bg-gold text-ink px-8 py-3 rounded-lg font-bold text-[13px] hover:bg-gold-light transition-all whitespace-nowrap text-center"
              >
                Begin Hifz Journey →
              </button>
            </div>
          </div>
          <p className="text-white/20 text-xs mt-8 text-center max-w-7xl">All prices in USD · Free first class included · Cancel anytime</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-[5%] max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-forest text-[10px] font-bold uppercase tracking-widest mb-4">
          <div className="w-6 h-[2px] bg-gold rounded-full" />
          Common Questions from Sisters
        </div>
        <h2 className="font-serif text-4xl font-bold text-ink mb-16">Questions & Answers</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-forest/10">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="font-bold text-ink group-hover:text-forest transition-colors">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === i ? 'bg-forest text-white rotate-180' : 'bg-forest-pale text-forest'}`}>
                  <ChevronRight size={16} />
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
                    <p className="pb-6 text-body text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-[5%] bg-cream2">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-ink mb-6">It's never too late to start.</h2>
          <p className="text-body text-lg mb-10">Join hundreds of sisters who have found their connection to the Quran through our private, supportive classes.</p>
          <button onClick={() => navigate('/register')} className="bg-forest text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-forest-mid transition-all shadow-2xl shadow-forest/20">
            Book Your Free Trial Class →
          </button>
        </div>
      </section>
    </div>
  );
};

export const QuranClassesAustraliaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const painPoints = [
    { icon: "☀️", title: "No driving in the heat for Quran class", desc: "When it's 40°C outside, the last thing you want is driving the kids to class. Your air-conditioned home is the classroom now." },
    { icon: "📋", title: "Waiting lists are frustrating", desc: "Many Australian Islamic schools have months-long waiting lists. We can have your child in a class within 24 hours." },
    { icon: "🦘", title: "Coast to coast — we're there", desc: "Sydney, Melbourne, Perth, Brisbane — it doesn't matter where in Australia you are. We cover all time zones." },
    { icon: "💵", title: "Pay in Australian dollars", desc: "No USD conversion. No extra fees. Straightforward AUD pricing with nothing hidden." }
  ];

  const pricingPlans = [
    { name: "Starter", price: "39", classes: "8 classes / month", popular: false },
    { name: "Standard", price: "53", classes: "12 classes / month", popular: true },
    { name: "Intensive", price: "69", classes: "16 classes / month", popular: false },
    { name: "Daily", price: "85", classes: "20 classes / month", popular: false }
  ];

  const faqs = [
    { q: "We're in Perth (AWST) — do you have tutors available at our time?", a: "Yes. We cover all Australian time zones and have tutors available from early morning to late evening." },
    { q: "Can we get a female tutor for our daughters?", a: "Absolutely. Female certified tutors are available for all sisters and girls." },
    { q: "What if we move states?", a: "Nothing changes at all. Since it's fully online, a move from Sydney to Perth doesn't affect your classes." }
  ];

  return (
    <div className="space-y-0 bg-cream">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-[5%] bg-linear-to-br from-cream via-cream2 to-[#d5ede2] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,var(--forest)_0%,transparent_60%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-[11px] font-bold text-muted uppercase tracking-widest mb-8">
            <button onClick={() => navigate('/')} className="hover:text-forest transition-colors">Home</button>
            <span>›</span>
            <span className="text-forest">Quran Classes Australia</span>
          </nav>

          <div className="text-4xl mb-6">🇦🇺</div>
          <div className="flex items-center gap-2 text-forest text-[10px] font-bold uppercase tracking-widest mb-6">
            <div className="w-6 h-[2px] bg-gold rounded-full" />
            For Muslim Families Across Australia
          </div>

          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-ink leading-[1.15] mb-8 max-w-4xl">
            Online Quran Classes for Australian Families.
          </h1>

          <p className="text-body text-lg font-light leading-relaxed max-w-2xl mb-10">
            Certified tutors meeting your family online — on your schedule, in your time zone, from Sydney to Perth.
          </p>

          <div className="flex flex-wrap gap-4 mb-4">
            <button onClick={() => navigate('/register')} className="bg-forest text-white px-8 py-4 rounded-lg font-bold text-sm hover:bg-forest-mid transition-all shadow-xl shadow-forest/20 flex items-center gap-2">
              Book Free Trial Class <ArrowRight size={18} />
            </button>
            <button onClick={() => navigate('/fees')} className="border border-forest/10 text-forest px-8 py-4 rounded-lg font-bold text-sm hover:bg-forest-pale transition-all">
              See Pricing (AUD)
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-[5%] bg-forest text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-gold-light text-[10px] font-bold uppercase tracking-widest mb-4">Simple pricing in US dollars</div>
          <h2 className="font-serif text-4xl font-bold mb-4">Simple Plans. All prices in USD.</h2>
          <p className="text-white/40 mb-16">Cancel anytime. No contracts. Free first class on every plan.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
            {pricingPlans.map((plan, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${plan.popular ? 'border-gold bg-white/10' : 'border-white/10 bg-white/5'} text-center group hover:bg-white/10 transition-all flex flex-col`}>
                {plan.popular && <div className="text-gold-light text-[10px] font-bold uppercase tracking-widest mb-4">⭐ Most Popular</div>}
                <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-4">{plan.name}</div>
                <div className="font-serif text-5xl font-bold mb-2">
                  <span className="text-xl align-top mr-1">$</span>{plan.price}
                </div>
                <div className="text-white/30 text-[11px] mb-4">per month</div>
                <div className="text-gold-light font-bold text-sm mb-8 flex-1">{plan.classes}</div>
                <button onClick={() => navigate('/register')} className="w-full bg-gold text-ink py-3 rounded-lg font-bold text-sm hover:bg-gold-light transition-all">Start Free →</button>
              </div>
            ))}
          </div>

          {/* Hifz Plan */}
          <div className="mt-12 bg-white/5 rounded-2xl p-8 border border-white/10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center max-w-7xl">
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
              <button 
                onClick={() => navigate('/register')}
                className="w-full bg-gold text-ink px-8 py-3 rounded-lg font-bold text-[13px] hover:bg-gold-light transition-all whitespace-nowrap text-center"
              >
                Begin Hifz Journey →
              </button>
            </div>
          </div>
          <p className="text-white/20 text-xs mt-8 text-center max-w-7xl">All prices in USD · Free first class included · Cancel anytime</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-[5%] max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl font-bold text-ink mb-16">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-forest/10">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full py-6 flex items-center justify-between text-left group">
                <span className="font-bold text-ink group-hover:text-forest transition-colors">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === i ? 'bg-forest text-white rotate-180' : 'bg-forest-pale text-forest'}`}>
                  <ChevronRight size={16} />
                </div>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="pb-6 text-body text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const QuranClassesNearMePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pricingPlans = [
    { name: "Starter", price: "35", classes: "8 classes / month", popular: false },
    { name: "Standard", price: "48", classes: "12 classes / month", popular: true },
    { name: "Intensive", price: "62", classes: "16 classes / month", popular: false }
  ];

  return (
    <div className="space-y-0 bg-cream">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-[5%] bg-linear-to-br from-cream via-cream2 to-[#d5ede2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-[11px] font-bold text-muted uppercase tracking-widest mb-8">
            <button onClick={() => navigate('/')} className="hover:text-forest transition-colors">Home</button>
            <span>›</span>
            <span className="text-forest">Quran Classes Near Me</span>
          </nav>

          <div className="text-4xl mb-6">📍</div>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-ink leading-[1.15] mb-8 max-w-4xl">
            The best Quran classes are right here — at your home.
          </h1>

          <p className="text-body text-lg font-light leading-relaxed max-w-2xl mb-10">
            Stop searching for 'Quran classes near me'. The most qualified, certified tutors are available to you online, 1-on-1, wherever you are.
          </p>

          <button onClick={() => navigate('/register')} className="bg-forest text-white px-8 py-4 rounded-lg font-bold text-sm hover:bg-forest-mid transition-all shadow-xl shadow-forest/20 flex items-center gap-2">
            Book Free Trial Class <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-[5%] bg-forest text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">Simple Plans.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            {pricingPlans.map((plan, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${plan.popular ? 'border-gold bg-white/10' : 'border-white/10 bg-white/5'} text-center group hover:bg-white/10 transition-all`}>
                <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-4">{plan.name}</div>
                <div className="font-serif text-5xl font-bold mb-2">
                  <span className="text-xl align-top mr-1">$</span>{plan.price}
                </div>
                <div className="text-gold-light font-bold text-sm mb-8">{plan.classes}</div>
                <button onClick={() => navigate('/register')} className="w-full bg-gold text-ink py-3 rounded-lg font-bold text-sm hover:bg-gold-light transition-all">Start Free →</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
