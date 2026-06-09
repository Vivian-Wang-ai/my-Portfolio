import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Github, Dribbble, Linkedin } from 'lucide-react';

const base = import.meta.env.BASE_URL;

const projects = [
  {
    id: 101,
    title: '投融资平台',
    image: base + '投融资平台.webp',
    isGif: false,
  },
  {
    id: 102,
    title: '投融资平台',
    image: base + '投融资平台1.webp',
    isGif: false,
  },
  {
    id: 103,
    title: '投融资平台',
    image: base + '投融资平台3.webp',
    isGif: false,
  },
  {
    id: 104,
    title: '组件库优化',
    image: base + '组件库优化.webp',
    isGif: false,
  },
  {
    id: 105,
    title: '投融资平台',
    image: base + '拷投融资平台4.webp',
    isGif: false,
  },
  {
    id: 106,
    title: '投融资平台',
    image: base + '投融资平台5.webp',
    isGif: false,
  },
  {
    id: 107,
    title: '投融资平台',
    image: base + '投融资平台6.webp',
    isGif: false,
  },
  {
    id: 108,
    title: '投融资平台',
    image: base + '投融资平台7.webp',
    isGif: false,
  },
  {
    id: 204,
    title: '美柏可视化大屏',
    image: base + '美柏可视化大屏5.webp',
    isGif: false,
  },
  {
    id: 202,
    title: '美柏可视化大屏',
    image: base + '美柏可视化大屏4.webp',
    isGif: false,
  },
  {
    id: 203,
    title: '美柏可视化视频',
    image: base + '美柏可视化视频-1.gif',
    isGif: true,
  },
  {
    id: 201,
    title: '可视化大屏',
    image: base + '可视化大屏+3.webp',
    isGif: false,
  },
  {
    id: 301,
    title: '挑战赛',
    image: base + '挑战赛1.webp',
    isGif: false,
  },
  {
    id: 302,
    title: '挑战赛后台',
    image: base + '挑战赛后台-2.webp',
    isGif: false,
  },
  {
    id: 303,
    title: '挑战赛后台',
    image: base + '挑战赛后台-3.webp',
    isGif: false,
  },
  {
    id: 304,
    title: '挑战赛',
    image: base + '挑战赛5.webp',
    isGif: false,
  },
  {
    id: 305,
    title: '挑战赛',
    image: base + '挑战赛6.webp',
    isGif: false,
  },
  {
    id: 306,
    title: '挑战赛',
    image: base + '挑战赛7.webp',
    isGif: false,
  },
  {
    id: 307,
    title: '挑战赛',
    image: base + '挑战赛8.webp',
    isGif: false,
  },
  {
    id: 308,
    title: '挑战赛',
    image: base + '挑战赛9.webp',
    isGif: false,
  },
  {
    id: 309,
    title: '挑战赛',
    image: base + '挑战赛10.webp',
    isGif: false,
  },
  {
    id: 310,
    title: '挑战赛',
    image: base + '挑战赛11.webp',
    isGif: false,
  },
  {
    id: 311,
    title: '挑战赛',
    image: base + '挑战赛12.webp',
    isGif: false,
  },
  {
    id: 401,
    title: '数据库小程序',
    image: base + '数据库小程序.webp',
    isGif: false,
  },
  {
    id: 402,
    title: '小程序线框图',
    image: base + '小程序线框图.webp',
    isGif: false,
  },
  {
    id: 403,
    title: '小程序视觉规范',
    image: base + '小程序视觉规范.webp',
    isGif: false,
  },
  {
    id: 501,
    title: 'dbit-logo',
    image: base + 'dbit-logo-1.mp4',
    isVideo: true,
  },
  {
    id: 502,
    title: 'dbit',
    image: base + 'dbit.webp',
    isGif: false,
  },
  {
    id: 503,
    title: 'Dipbit app端视觉规范',
    image: base + 'Dipbit+app端视觉规范_ (1).webp',
    isGif: false,
  },
  {
    id: 504,
    title: 'dbit2',
    image: base + 'dbit2.webp',
    isGif: false,
  },
  {
    id: 505,
    title: 'dbit3',
    image: base + 'dbit3.webp',
    isGif: false,
  },
  {
    id: 601,
    title: 'biochallenge',
    image: base + 'biochallenge.webp',
    isGif: false,
  },
  {
    id: 602,
    title: 'cf1',
    image: base + 'cf1.webp',
    isGif: false,
  },
  {
    id: 603,
    title: 'cf2',
    image: base + 'cf2.webp',
    isGif: false,
  },
  {
    id: 604,
    title: 'cf3',
    image: base + 'cf3.webp',
    isGif: false,
  },
  {
    id: 605,
    title: 'cubio1',
    image: base + 'cubio1.webp',
    isGif: false,
  },
  {
    id: 606,
    title: 'cubio2',
    image: base + 'cubio2.webp',
    isGif: false,
  },
  {
    id: 607,
    title: 'cubio3',
    image: base + 'cubio3.webp',
    isGif: false,
  },
  {
    id: 608,
    title: 'cf logo',
    image: base + 'cf+logo.webp',
    isGif: false,
  },
  {
    id: 609,
    title: '挑战赛logo',
    image: base + '挑战赛logo.webp',
    isGif: false,
  },
  {
    id: 610,
    title: 'synbio logo',
    image: base + 'synbio+logo.webp',
    isGif: false,
  },
  {
    id: 611,
    title: '封底',
    image: base + '封底.webp',
    isGif: false,
  },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Custom Starry Sky Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${base}封面1.webp)`
          }}
        ></div>
        
        <div className="max-w-[1440px] mx-auto px-6 text-center relative z-10">
          <p className="text-white/90 text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
            UI/UX 设计师
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up text-white drop-shadow-lg">
            王娟
          </h1>
          <img 
            src={base + 'Portfolio.png'} 
            alt="Portfolio" 
            className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[750px] h-auto object-contain mx-auto mb-6 animate-fade-in-up delay-100"
          />
          <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-12 animate-fade-in-up delay-200 drop-shadow">
            专注于用户体验设计与创意视觉表现，用设计讲述故事
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up delay-300">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white/70 rounded-full hover:border-white hover:bg-white hover:text-black transition-all duration-200 text-white"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section className="py-24 bg-black">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-medium tracking-wide">精选作品</h2>
            <span className="text-gray-500 text-sm">{projects.length} 个项目</span>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
