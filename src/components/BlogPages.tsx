import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, Clock, User, Share2, Facebook, Twitter, MessageCircle, Link as LinkIcon, CheckCircle, Search, Mail, BookOpen, GraduationCap, Star, AlertTriangle, Lightbulb, Info, ChevronRight, Menu } from 'lucide-react';

// Shared Components
const Sidebar = () => (
  <aside className="space-y-6">
    {/* CTA Widget */}
    <div className="bg-linear-to-br from-forest to-[#0f3322] rounded-2xl p-8 text-center relative overflow-hidden group">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_width=%22100%22_height=%22100%22_viewBox=%220_0_100_100%22%3E%3Cg_fill=%22none%22_stroke=%22white%22_stroke-width=%221%22%3E%3Cpolygon_points=%2250,4_96,26_96,74_50,96_4,74_4,26%22/%3E%3C/g%3E%3C/svg%3E')] bg-[length:100px_100px]" />
      <div className="relative z-10">
        <div className="font-serif text-2xl text-gold/30 mb-4">اقْرَأْ</div>
        <h4 className="font-serif text-xl font-bold text-white mb-2 leading-tight">Try a Free Quran Class</h4>
        <p className="text-white/40 text-sm mb-6 leading-relaxed">Live 1-on-1 with a certified tutor. No card. No commitment.</p>
        <Link 
          to="/contact"
          className="w-full bg-gold text-ink py-3 rounded-lg font-bold text-sm hover:bg-gold-light transition-all transform hover:-translate-y-1 block text-center"
        >
          Claim Free Trial →
        </Link>
        <div className="text-[10px] text-white/20 mt-3 uppercase tracking-widest">Responds within 1–3 hours</div>
      </div>
    </div>

    {/* Topics Widget */}
    <div className="bg-white border border-forest/10 rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b border-forest/10">
        <h4 className="font-serif text-lg font-bold text-ink">Browse by Topic</h4>
      </div>
      <div className="p-2">
        {[
          { id: 'islamic-parenting', name: 'Islamic Parenting', color: 'bg-gold', count: 3 },
          { id: 'quran-kids', name: 'Quran for Kids', color: 'bg-forest-bright', count: 3 },
          { id: 'tajweed', name: 'Tajweed Tips', color: 'bg-gold-light', count: 2 },
          { id: 'online', name: 'Online Learning', color: 'bg-blue-400', count: 2 },
          { id: 'ramadan', name: 'Ramadan Guides', color: 'bg-emerald-500', count: 1 },
          { id: 'islamic-studies', name: 'Islamic Studies', color: 'bg-amber-600', count: 1 },
        ].map((topic) => (
          <button
            key={topic.id}
            className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-forest-pale transition-colors group"
          >
            <span className="flex items-center gap-3 text-sm font-medium text-ink2 group-hover:text-forest">
              <span className={`w-2 h-2 rounded-full ${topic.color}`} /> {topic.name}
            </span>
            <span className="text-[10px] font-bold bg-forest-pale text-forest px-2 py-0.5 rounded-full">{topic.count}</span>
          </button>
        ))}
      </div>
    </div>

    {/* Newsletter Widget */}
    <div className="bg-white border border-forest/10 rounded-2xl p-6">
      <h4 className="font-serif text-lg font-bold text-ink mb-3">New Articles Weekly</h4>
      <p className="text-muted text-xs leading-relaxed mb-4">Get practical Quran learning guides delivered to your inbox. No spam — just useful content.</p>
      <div className="space-y-2">
        <input 
          type="email" 
          placeholder="Your email address"
          className="w-full px-4 py-3 rounded-lg border border-forest/10 bg-cream text-sm focus:border-forest focus:bg-white outline-hidden transition-all"
        />
        <button className="w-full bg-forest text-white py-3 rounded-lg font-bold text-sm hover:bg-forest-mid transition-all">
          Subscribe →
        </button>
      </div>
      <p className="text-[10px] text-muted mt-3 leading-tight">Join families in the USA, UK & Canada learning with My Quran Guide.</p>
    </div>
  </aside>
);

export const BlogListingPage = () => {
  const [filter, setFilter] = useState('all');
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blogs');
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filteredPosts = filter === 'all' ? posts : posts.filter(p => p.category === filter);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-forest"></div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-16 px-[5%] bg-linear-to-br from-cream via-cream2 to-[#ddf0e8] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[44%] h-full opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_width=%22120%22_height=%22120%22_viewBox=%220_0_120_120%22%3E%3Cg_fill=%22none%22_stroke=%22%2314442E%22_stroke-width=%221%22%3E%3Cpolygon_points=%2260,5_115,32_115,88_60,115_5,88_5,32%22/%3E%3Cpolygon_points=%2260,22_98,42_98,82_60,102_22,82_22,42%22/%3E%3C/g%3E%3C/svg%3E')] bg-[length:120px_120px]" />
        <div className="relative z-10 max-w-3xl">
          <nav className="flex items-center gap-2 text-[11px] font-bold text-muted mb-6 uppercase tracking-wider">
            <Link to="/" className="text-forest hover:text-forest-mid transition-colors">Home</Link>
            <ChevronRight size={10} />
            <span>Blog</span>
          </nav>
          <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            Quran Learning Resource
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-ink leading-[1.1] mb-6 tracking-tight">
            Guides, Tips &<br />
            <span className="italic text-forest">Practical Wisdom</span><br />
            for Quran Learners
          </h1>
          <p className="text-body text-lg font-light leading-relaxed max-w-2xl">
            Written by <strong>certified tutors</strong> — practical articles on Tajweed, Hifz, raising children with Quran, online learning, and Islamic parenting. No filler. No fluff.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {posts.length > 0 && (
        <section className="px-[5%] py-14">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-6">
            <span className="w-5 h-px bg-muted" />
            Featured Article
          </div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_420px] bg-white rounded-3xl border border-forest/10 overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
            onClick={() => navigate(`/blog/${posts[0].slug}`)}
          >
            <div className="bg-linear-to-br from-forest to-[#0f3322] p-12 flex flex-col justify-between relative overflow-hidden min-h-[420px]">
              <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_width=%22100%22_height=%22100%22_viewBox=%220_0_100_100%22%3E%3Cg_fill=%22none%22_stroke=%22white%22_stroke-width=%221%22%3E%3Cpolygon_points=%2250,4_96,26_96,74_50,96_4,74_4,26%22/%3E%3C/g%3E%3C/svg%3E')] bg-[length:100px_100px]" />
              <div className="font-serif text-5xl text-gold/25 text-right relative z-10 leading-relaxed">أَقِيمُوا<br />الصَّلَاةَ</div>
              <div className="relative z-10">
                <span className="bg-gold text-ink px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-2 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest" /> {posts[0].category?.replace('-', ' ')}
                </span>
              </div>
            </div>
            <div className="p-10 flex flex-col justify-center">
              <div className="text-[10px] font-bold uppercase tracking-widest text-forest mb-3">{posts[0].category?.replace('-', ' ')}</div>
              <h2 className="font-serif text-3xl font-bold text-ink leading-tight mb-4 group-hover:text-forest transition-colors">{posts[0].title}</h2>
              <p className="text-body text-sm font-light leading-relaxed mb-8">{posts[0].content.replace(/<[^>]*>/g, '').substring(0, 180)}...</p>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-forest-pale border border-forest/15 flex items-center justify-center text-[10px] font-bold text-forest">MQG</div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-ink2">My Quran Guide Team</span>
                  <span className="text-[10px] text-muted">{new Date(posts[0].created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} · {Math.ceil(posts[0].content.split(' ').length / 200)} min read</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-forest group-hover:gap-4 transition-all">
                Read Full Article <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Filter Bar */}
      <div className="bg-white border-b border-forest/10 sticky top-[72px] z-20 px-[5%] overflow-x-auto scrollbar-hide">
        <div className="flex gap-1 py-3 min-w-max">
          {['all', 'islamic-parenting', 'quran-kids', 'tajweed', 'online', 'ramadan', 'islamic-studies'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all ${
                filter === cat ? 'bg-forest text-white' : 'border-1.5 border-forest/10 text-muted hover:border-forest hover:text-forest'
              }`}
            >
              {cat === 'all' ? 'All Articles' : cat.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <section className="py-14 px-[5%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          {/* Posts List */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ y: -5 }}
                  className={`bg-white rounded-2xl border border-forest/10 overflow-hidden hover:shadow-xl transition-all cursor-pointer flex flex-col group ${post.wide ? 'md:col-span-2 md:flex-row' : ''}`}
                  onClick={() => post.slug ? navigate(`/blog/${post.slug}`) : null}
                >
                  <div className={`relative shrink-0 flex items-center justify-center overflow-hidden ${post.wide ? 'md:w-[280px] h-48 md:h-auto' : 'h-44'} ${
                    post.category === 'tajweed' ? 'bg-linear-to-br from-[#1a3a2e] to-[#2d5a45]' :
                    post.category === 'quran-kids' ? 'bg-linear-to-br from-[#2c4a1a] to-[#4a7a2a]' :
                    post.category === 'islamic-parenting' ? 'bg-linear-to-br from-[#3a2a14] to-[#6a4a22]' :
                    post.category === 'online' ? 'bg-linear-to-br from-[#1a2a3a] to-[#2a4a6a]' :
                    'bg-linear-to-br from-[#2a1a3a] to-[#4a2a6a]'
                  }`}>
                    <div className="font-serif text-3xl text-gold/30 relative z-10">{post.arabic || 'اقْرَأْ'}</div>
                    <span className={`absolute bottom-3 left-3 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider z-20 ${
                      post.category === 'tajweed' ? 'bg-forest/85 text-[#a8e6c6]' :
                      post.category === 'quran-kids' ? 'bg-[#2c4a1a]/85 text-[#c6e6a8]' :
                      post.category === 'islamic-parenting' ? 'bg-[#3a2a14]/85 text-[#e6cca8]' :
                      post.category === 'online' ? 'bg-[#1a2a3a]/85 text-[#a8c6e6]' :
                      'bg-[#2a1a3a]/85 text-[#cca8e6]'
                    }`}>
                      {post.category?.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-forest mb-2">{post.category?.replace('-', ' ')}</div>
                    <h3 className={`font-serif font-bold text-ink leading-tight mb-3 group-hover:text-forest transition-colors ${post.wide ? 'text-2xl' : 'text-lg'}`}>{post.title}</h3>
                    <p className="text-body text-xs font-light leading-relaxed mb-6 line-clamp-3 flex-1">{post.content.replace(/<[^>]*>/g, '').substring(0, 150)}...</p>
                    <div className="flex items-center justify-between pt-4 border-t border-forest/5">
                      <span className="text-muted text-[11px]">{new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                      <div className="text-forest font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">Read <ArrowRight size={14} /></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-forest/20">
                <p className="text-muted text-sm">No articles in this category yet — <button onClick={() => setFilter('all')} className="text-forest font-bold hover:underline">subscribe to be notified →</button></p>
              </div>
            )}

            <div className="text-center pt-8">
              <button className="px-8 py-3 rounded-lg border-1.5 border-forest/10 text-forest font-bold text-sm hover:bg-forest-pale transition-all">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </section>

      {/* Coming Soon Strip */}
      <section className="px-[5%] pb-20">
        <div className="bg-white border border-dashed border-forest/20 rounded-2xl p-8 flex items-center gap-6">
          <span className="w-3 h-3 rounded-full bg-gold shrink-0" />
          <p className="text-sm text-body leading-relaxed">
            <strong>New articles published every week.</strong> Topics coming soon: How to memorize Quran as an adult, Noorani Qaida vs direct Quran reading, How to choose the right Quran tutor online, and Ramadan preparation guides. <button className="text-forest font-bold hover:underline">Subscribe to be notified →</button>
          </p>
        </div>
      </section>
    </div>
  );
};

export const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll);

    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        if (res.ok) {
          const data = await res.json();
          setPost(data);
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-forest"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-ink mb-4">Post not found</h2>
        <Link to="/blogs" className="text-forest font-bold hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen">
      {/* Progress Bar */}
      <div className="fixed top-[72px] left-0 right-0 h-[3px] bg-forest/10 z-[300]">
        <div className="h-full bg-linear-to-r from-forest to-forest-bright transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Hero Section */}
      <header className="pt-40 pb-0 px-[5%] bg-linear-to-br from-cream via-cream2 to-[#ddf0e8] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[40%] h-full opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_width=%22120%22_height=%22120%22_viewBox=%220_0_120_120%22%3E%3Cg_fill=%22none%22_stroke=%22%2314442E%22_stroke-width=%221%22%3E%3Cpolygon_points=%2260,5_115,32_115,88_60,115_5,88_5,32%22/%3E%3Cpolygon_points=%2260,22_98,42_98,82_60,102_22,82_22,42%22/%3E%3C/g%3E%3C/svg%3E')] bg-[length:120px_120px]" />
        <div className="relative z-10 max-w-4xl mx-auto lg:mx-0">
          <nav className="flex items-center gap-2 text-[11px] font-bold text-muted mb-6 uppercase tracking-wider">
            <Link to="/" className="text-forest hover:text-forest-mid transition-colors">Home</Link>
            <ChevronRight size={10} />
            <Link to="/blogs" className="text-forest hover:text-forest-mid transition-colors">Blog</Link>
            <ChevronRight size={10} />
            <span>{post.title}</span>
          </nav>
          <div className="inline-flex items-center gap-3 text-forest text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-gold" />
            {post.category?.replace('-', ' ')}
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.12] mb-6 tracking-tight">
            {post.title}
          </h1>
          <p className="text-body text-lg font-light leading-relaxed max-w-2xl mb-8">
            {post.content.replace(/<[^>]*>/g, '').substring(0, 200)}...
          </p>
          
            <div className="flex items-center gap-5 py-6 border-y border-forest/10 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-forest to-forest-mid flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-gold" />
              </div>
              <div>
                <div className="text-ink font-bold text-sm leading-none mb-1">My Quran Guide Team</div>
                <div className="text-muted text-[10px] uppercase font-bold tracking-wider">Certified · 8+ years</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-forest/10" />
            <div className="flex items-center gap-6 text-[11px] font-bold text-muted uppercase tracking-wider">
              <span>{new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span>{Math.ceil(post.content.split(' ').length / 200)} min read</span>
              <span className="text-forest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest" /> {post.category?.replace('-', ' ')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-6 flex-wrap">
            <span className="text-[10px] font-bold text-muted uppercase tracking-widest mr-2">Share:</span>
            <button className="px-4 py-1.5 rounded-full border border-forest/10 text-[11px] font-bold text-body hover:border-forest hover:bg-forest-pale transition-all flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Twitter
            </button>
            <button className="px-4 py-1.5 rounded-full border border-forest/10 text-[11px] font-bold text-body hover:border-forest hover:bg-forest-pale transition-all flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-forest" /> Facebook
            </button>
            <button className="px-4 py-1.5 rounded-full border border-forest/10 text-[11px] font-bold text-body hover:border-forest hover:bg-forest-pale transition-all flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> WhatsApp
            </button>
            <button className="px-4 py-1.5 rounded-full border border-forest/10 text-[11px] font-bold text-body hover:border-forest hover:bg-forest-pale transition-all flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Copy Link
            </button>
          </div>
        </div>
      </header>

      {/* Featured Image Placeholder */}
      <div className="px-[5%] pt-10 bg-linear-to-b from-[#ddf0e8] to-cream">
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden bg-linear-to-br from-forest to-[#0d2e1e] h-80 flex items-center justify-center relative">
          <div className="font-serif text-8xl text-white/5 absolute right-10 bottom-5 leading-none">نور</div>
          <div className="text-center relative z-10">
            <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
              <span className="w-3 h-3 rounded-full bg-gold" />
            </span>
            <div className="font-serif text-xl text-white/50">Article Featured Image</div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-[5%] py-14 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-14">
        <article className="min-w-0">
          {/* Prose Content */}
          <div 
            className="prose prose-forest max-w-none text-body font-light leading-relaxed text-lg blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Bar Bottom */}
          <div className="flex items-center gap-4 py-8 border-y border-forest/10 my-12 flex-wrap">
            <span className="text-sm font-bold text-ink">Found this helpful? Share it:</span>
            <div className="flex gap-2">
              <button className="px-5 py-2 rounded-full border border-forest/10 text-xs font-bold text-body hover:border-forest hover:bg-forest-pale transition-all flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Twitter
              </button>
              <button className="px-5 py-2 rounded-full border border-forest/10 text-xs font-bold text-body hover:border-forest hover:bg-forest-pale transition-all flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest" /> Facebook
              </button>
              <button className="px-5 py-2 rounded-full border border-forest/10 text-xs font-bold text-body hover:border-forest hover:bg-forest-pale transition-all flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> WhatsApp
              </button>
              <button className="px-5 py-2 rounded-full border border-forest/10 text-xs font-bold text-body hover:border-forest hover:bg-forest-pale transition-all flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Copy Link
              </button>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-white border border-forest/10 rounded-2xl p-8 flex gap-6 items-start">
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-forest to-forest-mid flex items-center justify-center shrink-0">
              <span className="w-3 h-3 rounded-full bg-gold" />
            </div>
            <div>
              <div className="text-ink font-bold mb-1">My Quran Guide Tutor</div>
              <div className="text-forest text-xs font-bold uppercase tracking-wider mb-3">Certified · 8+ Years Experience</div>
              <p className="text-body text-sm leading-relaxed font-light">Our tutors hold certification with a verified chain of transmission. This article draws from direct classroom experience teaching both children and adults — including hundreds of students who started from zero and progressed to confident, accurate Quran recitation.</p>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="sticky top-[110px] space-y-8">
            <div className="bg-white border border-forest/10 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-forest/10 text-[10px] font-extrabold uppercase tracking-widest text-forest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" /> In This Article
              </div>
              <div className="p-2">
                {[
                  "What Is Noorani Qaida?",
                  "The Real Question",
                  "When You Must Start",
                  "When You Can Skip It",
                  "Side-by-Side Comparison",
                  "What About Children?",
                  "The Final Answer"
                ].map((item, i) => (
                  <a 
                    key={i} 
                    href={`#section-${i}`}
                    className="block px-4 py-2.5 text-sm font-medium text-muted hover:text-forest hover:bg-forest-pale rounded-lg transition-all"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <Sidebar />
          </div>
        </aside>
      </div>
    </div>
  );
};
