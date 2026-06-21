import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle, 
  Clock, 
  Globe, 
  CreditCard, 
  ShieldCheck, 
  ChevronDown, 
  ArrowRight,
  Calendar,
  Zap,
  Award,
  MessageCircle,
  Video,
  RefreshCw,
  Pause,
  DollarSign,
  User,
  Volume2,
  ClipboardList
} from 'lucide-react';

interface FeesPlan {
  id: number;
  name: string;
  classes: string;
  price_30: string;
  price_45: string;
  per_class_30: string;
  per_class_45: string;
  features: string; // JSON string
  popular: number;
  display_order: number;
}

interface FeesFaq {
  id: number;
  question: string;
  answer: string;
  display_order: number;
}

const FeesSchedulePage: React.FC = () => {
  const navigate = useNavigate();
  const [duration, setDuration] = useState<'30' | '45'>('30');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [plans, setPlans] = useState<FeesPlan[]>([]);
  const [faqs, setFaqs] = useState<FeesFaq[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const [plansRes, faqsRes] = await Promise.all([
          fetch('/api/fees-plans'),
          fetch('/api/fees-faqs')
        ]);
        if (plansRes.ok) setPlans(await plansRes.json());
        if (faqsRes.ok) setFaqs(await faqsRes.json());
      } catch (error) {
        console.error("Error fetching fees data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-forest"></div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen">
      {/* Page Hero */}
      <section className="pt-40 pb-24 px-[5%] bg-linear-to-br from-cream via-cream2 to-[#E2F0EA] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute right-[-2%] top-0 w-[44%] h-full bg-[var(--bg-hero-pattern)] bg-repeat" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-muted mb-8">
            <button onClick={() => navigate('/')} className="text-forest hover:underline">Home</button>
            <span>›</span>
            <span>Fees & Schedule</span>
          </nav>
          <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            Transparent Pricing
          </div>
          <h1 className="font-serif text-5xl sm:text-7xl font-bold text-ink leading-[1.1] mb-8">
            Simple Pricing.<br />
            <span className="italic text-forest">Flexible Schedule.</span><br />
            <span className="text-gold">No Hidden Fees.</span>
          </h1>
          <p className="text-body text-xl font-light leading-relaxed max-w-2xl mb-10">
            Every plan includes a <strong className="font-semibold text-ink2">live 1-on-1 session with a certified tutor</strong>, flexible scheduling 24/7, and a free first class. No contracts. No surprises. Pay for what you actually use.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              '🆓 First class free',
              '🔒 No contracts',
              '⏰ 24/7 scheduling',
              '↩ Cancel anytime',
              '💳 4 payment methods'
            ].map((pill, i) => (
              <span key={i} className="bg-forest/7 border border-forest/14 text-forest px-4 py-2 rounded-full text-[13px] font-semibold">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            Choose Your Plan
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink mb-4">Pick the Schedule That Fits Your Life</h2>
          <p className="text-body text-lg font-light max-w-2xl mb-12">
            All plans are monthly. No semester fees, no registration costs, no hidden charges. The price you see is everything you pay.
          </p>

          {/* Duration Toggle */}
          <div className="inline-flex items-center gap-1 bg-cream2 border border-forest/10 p-1 rounded-xl mb-12">
            <button 
              onClick={() => setDuration('30')}
              className={`px-6 py-2.5 rounded-lg text-[13px] font-bold transition-all ${duration === '30' ? 'bg-white text-forest shadow-sm' : 'text-muted hover:text-forest'}`}
            >
              30 min classes
            </button>
            <button 
              onClick={() => setDuration('45')}
              className={`px-6 py-2.5 rounded-lg text-[13px] font-bold transition-all ${duration === '45' ? 'bg-white text-forest shadow-sm' : 'text-muted hover:text-forest'}`}
            >
              45 min classes
            </button>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {plans.map((plan) => {
              const features = JSON.parse(plan.features || '[]');
              const price = duration === '30' ? plan.price_30 : plan.price_45;
              const perClass = duration === '30' ? plan.per_class_30 : plan.per_class_45;

              return (
                <div 
                  key={plan.id} 
                  className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col ${
                    plan.popular === 1 
                      ? 'border-forest bg-linear-to-br from-[#f0faf5] to-white scale-105 z-10 shadow-2xl' 
                      : 'bg-white border-forest/10 hover:border-forest/20 hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  {plan.popular === 1 && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-forest text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">
                      ⭐ Most Popular
                    </div>
                  )}
                  <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-muted mb-2">{plan.name}</div>
                  <div className="text-[13px] font-semibold text-forest mb-6">{plan.classes}</div>
                  <div className="mb-2">
                    <div className="font-serif text-5xl font-bold text-ink leading-none">
                      <sup className="text-xl align-top mt-2 inline-block font-sans font-bold">$</sup>{price}
                    </div>
                  </div>
                  <div className="text-[11px] text-muted mb-1">per month</div>
                  <div className="text-[13px] text-forest font-semibold mb-6">{perClass}</div>
                  <div className="h-px bg-forest/10 mb-6" />
                  <ul className="space-y-3 mb-8 flex-1">
                    {features.map((feat: string, j: number) => (
                      <li key={j} className="flex items-start gap-3 text-[13px] text-body leading-relaxed">
                        <CheckCircle size={14} className="text-forest-bright shrink-0 mt-0.5" />
                        {feat}
                      </li>
                    ))}
                    <li className="flex items-start gap-3 text-[13px] text-body leading-relaxed">
                      <CheckCircle size={14} className="text-forest-bright shrink-0 mt-0.5" />
                      {duration}-minute sessions
                    </li>
                  </ul>
                  <button 
                    onClick={() => navigate('/register')}
                    className={`w-full py-3.5 rounded-lg font-bold text-[13px] transition-all ${
                      plan.popular === 1 
                        ? 'bg-forest text-white hover:bg-forest-mid shadow-lg shadow-forest/20' 
                        : 'border-1.5 border-forest/10 text-forest hover:border-forest hover:bg-forest-pale'
                    }`}
                  >
                    Start Free Trial
                  </button>
                </div>
              );
            })}
          </div>

          {/* Hifz Plan */}
          <div className="bg-linear-to-br from-ink to-[#1a1a1a] rounded-3xl p-10 border border-white/5 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-gold-light mb-3">Special Program</div>
              <h3 className="font-serif text-3xl font-bold text-white mb-3">Hifz Memorization Program — Become Hafiz-e-Quran</h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-2xl mb-6">
                A dedicated daily memorization program with a personalised Hifz plan, structured revision schedule, and continuous Tajweed correction — taught by a senior certified tutor. Students who complete the full program receive a certificate upon graduation.
              </p>
              <div className="inline-flex items-center gap-2 bg-gold/12 border border-gold/25 text-gold-light px-4 py-1.5 rounded-full text-[11px] font-bold">
                🏅 Certification included upon completion
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 min-w-[200px]">
              <div className="text-center">
                <div className="font-serif text-6xl font-bold text-white leading-none">
                  <sup className="text-2xl align-top mt-3 inline-block font-sans">$</sup>170
                </div>
                <div className="text-[11px] text-white/30 mt-1">per month</div>
                <div className="text-[13px] text-gold-light font-semibold mt-1">20 classes / month · Daily sessions</div>
              </div>
              <button 
                onClick={() => navigate('/register')}
                className="w-full bg-gold text-ink px-8 py-3.5 rounded-lg font-bold text-[13px] hover:bg-gold-light transition-all whitespace-nowrap"
              >
                Begin Hifz Journey →
              </button>
              <div className="text-[11px] text-white/20">Free placement test · No contract</div>
            </div>
          </div>

          {/* Pricing Note */}
          <div className="mt-8 p-6 bg-forest-pale border border-forest/12 rounded-xl flex items-center gap-4 text-forest text-[13px] font-medium">
            <span className="text-xl">💡</span>
            <span><strong className="font-bold">Why are these prices accessible?</strong> We work directly with tutors — no physical classrooms, no agency middlemen, no unnecessary overhead. Every dollar goes toward your certified teacher and a better learning experience.</span>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-[5%] bg-cream2">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            Every Plan Includes
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink mb-4">What You Get With Every Subscription</h2>
          <p className="text-body text-lg font-light max-w-2xl mb-16">
            Regardless of which plan you choose, these are guaranteed in every single class — from day one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <User className="text-forest" />, title: 'Live 1-on-1 Class — Every Session', desc: 'Your tutor gives you their complete, undivided attention for the full session. No group classes. No shared sessions. Ever.' },
              { icon: <Award className="text-forest" />, title: 'Certified Tutor', desc: 'Every tutor holds a verified certification with a traceable chain of transmission. Verified before they teach their first class.' },
              { icon: <Volume2 className="text-forest" />, title: 'Real-Time Tajweed Correction', desc: 'Mistakes are corrected the moment they happen — not after class, not in a written note. In the session, immediately.' },
              { icon: <ClipboardList className="text-forest" />, title: 'Progress Reports for Parents', desc: 'Regular written progress reports covering pronunciation accuracy, Tajweed rules mastered, and upcoming objectives.' },
              { icon: <Calendar className="text-forest" />, title: 'Flexible Rescheduling', desc: 'Life happens. Reschedule any class with reasonable notice — no penalties, no questions asked.' },
              { icon: <MessageCircle className="text-forest" />, title: 'WhatsApp Tutor Access', desc: 'Direct access to your tutor via WhatsApp for questions, homework help, and session follow-up between classes.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-forest/10 hover:border-forest/20 hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-forest-pale rounded-xl flex items-center justify-center mb-6">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                </div>
                <h4 className="font-serif text-xl font-bold text-ink mb-3">{item.title}</h4>
                <p className="text-body text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-7 h-0.5 bg-gold" />
              Class Scheduling
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink mb-8">Any Time. Any Day. Any Timezone.</h2>
            <p className="text-body text-lg font-light mb-12">
              Our tutors are available 24 hours a day, 7 days a week — including weekends and holidays. You choose when you learn.
            </p>

            <div className="space-y-0">
              {[
                { icon: <Clock />, title: '24/7 Tutor Availability', desc: 'Early morning before school. Late evening after work. Weekend mornings. Whatever fits your routine — we have a tutor available. No restrictions, no blackout periods.' },
                { icon: <Globe />, title: 'All Major Time Zones Covered', desc: 'USA (Eastern, Central, Mountain, Pacific), UK, Canada, Australia, Gulf — wherever you are, we schedule around your local time. No confusion, no conversion errors.' },
                { icon: <RefreshCw />, title: 'Consistent Weekly Slots', desc: 'Book your regular time slot once — and it repeats every week automatically. Consistency is the single most important factor in Quran learning progress.' },
                { icon: <Video />, title: 'Classes via Zoom or Skype', desc: 'Join from any device — phone, tablet, laptop, or desktop. No special software or installation needed. Your tutor sends the link before every session.' },
                { icon: <RefreshCw />, title: 'Easy Rescheduling', desc: 'Need to move a class? Message your tutor or support team. We accommodate changes without penalty — because life is unpredictable and Quran learning should not be stressful.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-8 border-b border-forest/10 last:border-0">
                  <div className="w-11 h-11 bg-forest-pale border border-forest/10 rounded-xl flex items-center justify-center shrink-0">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 18, className: 'text-forest' })}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-ink mb-1.5">{item.title}</h4>
                    <p className="text-body text-[13px] leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-32">
            <div className="bg-linear-to-br from-forest to-[#1a5538] rounded-3xl p-10 shadow-2xl">
              <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-gold-light mb-6">We Teach Across All Timezones</div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">One Academy. Every Time Zone.</h3>
              <p className="text-white/40 text-[13px] mb-10 leading-relaxed">Classes run 24 hours a day. Pick any slot that works for your family.</p>
              
              <div className="space-y-3 mb-10">
                {[
                  { flag: '🇺🇸', city: 'New York (EST)', time: '6 AM – 11 PM' },
                  { flag: '🇺🇸', city: 'Los Angeles (PST)', time: '6 AM – 11 PM' },
                  { flag: '🇬🇧', city: 'London (GMT)', time: '6 AM – 11 PM' },
                  { flag: '🇨🇦', city: 'Toronto (EST)', time: '6 AM – 11 PM' },
                  { flag: '🇦🇺', city: 'Sydney (AEST)', time: '6 AM – 11 PM' },
                  { flag: '🇵🇰', city: 'Karachi (PKT)', time: '6 AM – 11 PM' },
                  { flag: '🇵🇰', city: 'Islamabad (PKT)', time: '6 AM – 11 PM' }
                ].map((tz, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-white/6 border border-white/6 rounded-lg">
                    <span className="text-[13px] text-white/60 flex items-center gap-3">
                      <span className="text-lg">{tz.flag}</span> {tz.city}
                    </span>
                    <div className="text-right">
                      <div className="text-[13px] font-bold text-white/85">{tz.time}</div>
                      <div className="text-[10px] text-forest-bright font-semibold">✓ Available</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gold/10 border border-gold/20 rounded-xl p-5 text-center">
                <div className="font-serif text-3xl font-bold text-gold-light leading-none">24 / 7</div>
                <div className="text-[10px] text-white/35 mt-1 uppercase tracking-wider">Tutors Available — All Week</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Policies */}
      <section className="py-24 px-[5%] bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-7 h-0.5 bg-gold" />
              Payment & Policies
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink mb-8">Pay Easily. Cancel Freely.</h2>
            <p className="text-body text-lg font-light mb-10">
              We accept all major payment methods worldwide. No complicated billing. No hidden fees added at checkout.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '💳', name: 'Credit / Debit Card', note: 'Visa, Mastercard, Amex' },
                { icon: '🅿️', name: 'PayPal', note: 'All countries supported' },
                { icon: '🏦', name: 'Bank Transfer', note: 'Direct transfer available' },
                { icon: '🌐', name: 'Wise / Payoneer', note: 'Best for international students' }
              ].map((method, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-forest/10 flex items-center gap-4 hover:border-forest/20 transition-all">
                  <span className="text-2xl">{method.icon}</span>
                  <div>
                    <div className="text-sm font-bold text-ink">{method.name}</div>
                    <div className="text-[11px] text-muted">{method.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {[
              { icon: '🆓', title: 'Free First Class — Always', desc: 'Your first class is completely free. No credit card required. No commitment. Just one session to see if My Quran Guide is right for you — before you pay a single dollar.' },
              { icon: '🔒', title: 'No Contracts. No Lock-ins.', desc: 'All plans are month-to-month. There are no semester commitments, no annual contracts, and no penalties for cancelling. You stay because the learning works — not because you are locked in.' },
              { icon: '↩', title: 'Refund Policy', desc: 'If you are not satisfied after your first paid month, contact us and we will review your case fairly. We stand behind the quality of our teaching and handle every situation individually.' },
              { icon: '⏸️', title: 'Pause or Cancel Anytime', desc: 'Travelling? Exam season? Need a break? Pause your subscription for up to 4 weeks without losing your tutor slot. Cancel anytime from your next billing cycle.' }
            ].map((policy, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-forest/10 flex gap-5 items-start">
                <span className="text-xl mt-1">{policy.icon}</span>
                <div>
                  <h4 className="text-sm font-bold text-ink mb-1">{policy.title}</h4>
                  <p className="text-body text-[13px] leading-relaxed font-light">{policy.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-[5%] bg-cream2">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-start">
          <div>
            <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-7 h-0.5 bg-gold" />
              FAQ
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink mb-12">Pricing & Schedule — Common Questions</h2>
            
            <div className="border-t border-forest/10">
              {faqs.map((faq, i) => (
                <div key={faq.id} className="border-b border-forest/10">
                  <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full py-6 flex justify-between items-center gap-6 text-left group"
                  >
                    <span className={`text-[15px] font-semibold transition-colors ${openFaq === i ? 'text-forest' : 'text-ink group-hover:text-forest'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all ${openFaq === i ? 'bg-forest border-forest text-white rotate-180' : 'bg-forest-pale border-forest/12 text-forest'}`}>
                      <ChevronDown size={14} />
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
                        <p className="pb-6 text-body text-sm leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-32">
            <div className="bg-linear-to-br from-forest to-[#1a5538] rounded-3xl p-10 text-center">
              <div className="font-serif text-2xl text-gold-light mb-4" dir="rtl">بِسْمِ اللَّهِ</div>
              <h4 className="font-serif text-2xl font-bold text-white mb-3">Ready to Start? Your First Class is Free.</h4>
              <p className="text-white/40 text-[13px] leading-relaxed mb-8">No credit card. No commitment. We match you with the right tutor and plan within 24 hours.</p>
              <button 
                onClick={() => navigate('/register')}
                className="w-full bg-gold text-ink py-4 rounded-lg font-bold text-[13px] hover:bg-gold-light transition-all"
              >
                Claim FREE Trial Class →
              </button>
              <div className="text-[11px] text-white/25 mt-4">🔒 No card · No contracts · Cancel anytime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-[5%] bg-forest relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[var(--bg-cta-pattern)] bg-repeat" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 text-gold-light text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold-light" />
            ⚡ Spots Available Now
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Start With a <span className="italic text-gold-light">Free Class</span> Today
          </h2>
          <p className="text-white/45 text-lg font-light mb-10 leading-relaxed">
            Enter your details and we will match you with the right tutor and plan within 24 hours. No credit card. No commitment. Just one class to see if it works for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-4">
            <input 
              type="text" 
              placeholder="Your full name" 
              className="flex-1 bg-white/10 border border-white/15 rounded-lg px-5 py-3.5 text-white text-sm outline-none focus:border-white/40 transition-all"
            />
            <button 
              onClick={() => navigate('/register')}
              className="bg-gold text-ink px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-gold-light transition-all whitespace-nowrap"
            >
              Claim My Free Class →
            </button>
          </div>
          <div className="text-[11px] text-white/20">🔒 No credit card · No contract · Starts within 24 hours</div>
        </div>
      </section>
    </div>
  );
};

export default FeesSchedulePage;
