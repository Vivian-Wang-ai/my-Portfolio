import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Github, Dribbble, Linkedin } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: '投融资平台',
    image: '/投融资平台.png',
    isGif: false,
  },
  {
    id: 2,
    title: '投融资平台',
    image: '/投融资平台1.png',
    isGif: false,
  },
  {
    id: 3,
    title: '投融资平台',
    image: '/投融资平台3.png',
    isGif: false,
  },
  {
    id: 4,
    title: '组件库优化',
    image: '/组件库优化.png',
    isGif: false,
  },
  {
    id: 5,
    title: '投融资平台',
    image: '/拷投融资平台4.png',
    isGif: false,
  },
  {
    id: 5,
    title: '投融资平台',
    image: '/投融资平台5.png',
    isGif: false,
  },
  {
    id: 6,
    title: '投融资平台',
    image: '/投融资平台6.png',
    isGif: false,
  },
  {
    id: 7,
    title: '投融资平台',
    image: '/投融资平台7.png',
    isGif: false,
  },
  {
    id: 8,
    title: '美柏可视化大屏',
    image: '/美柏可视化大屏5.png',
    isGif: false,
  },
  {
    id: 9,
    title: '美柏可视化大屏',
    image: '/美柏可视化大屏4.png',
    isGif: false,
  },
  {
    id: 10,
    title: '美柏可视化视频',
    image: '/美柏可视化视频.gif',
    isGif: true,
  },
  {
    id: 11,
    title: '可视化大屏',
    image: '/可视化大屏 3.png',
    isGif: false,
  },
  {
    id: 12,
    title: '挑战赛',
    image: '/挑战赛1.png',
    isGif: false,
  },
  {
    id: 13,
    title: '挑战赛后台',
    image: '/挑战赛后台-2.png',
    isGif: false,
  },
  {
    id: 14,
    title: '挑战赛后台',
    image: '/挑战赛后台-3.png',
    isGif: false,
  },
  {
    id: 15,
    title: '挑战赛',
    image: '/挑战赛5.png',
    isGif: false,
  },
  {
    id: 16,
    title: '挑战赛',
    image: '/挑战赛6.png',
    isGif: false,
  },
  {
    id: 17,
    title: '挑战赛',
    image: '/挑战赛7.png',
    isGif: false,
  },
  {
    id: 18,
    title: '挑战赛',
    image: '/挑战赛8.png',
    isGif: false,
  },
  {
    id: 19,
    title: '挑战赛',
    image: '/挑战赛9.png',
    isGif: false,
  },
  {
    id: 20,
    title: '挑战赛',
    image: '/挑战赛10.png',
    isGif: false,
  },
  {
    id: 21,
    title: '挑战赛',
    image: '/挑战赛11.png',
    isGif: false,
  },
  {
    id: 22,
    title: '挑战赛',
    image: '/挑战赛12.png',
    isGif: false,
  },
  {
    id: 23,
    title: '数据库小程序',
    image: '/数据库小程序.png',
    isGif: false,
  },
  {
    id: 24,
    title: '小程序线框图',
    image: '/小程序线框图.png',
    isGif: false,
  },
  {
    id: 25,
    title: '小程序视觉规范',
    image: '/小程序视觉规范.png',
    isGif: false,
  },
  {
    id: 26,
    title: 'biochallenge',
    image: '/biochallenge.png',
    isGif: false,
  },
  {
    id: 27,
    title: 'cf',
    image: '/cf.png',
    isGif: false,
  },
  {
    id: 28,
    title: 'cubio',
    image: '/cubio.png',
    isGif: false,
  },
  {
    id: 29,
    title: 'cf logo',
    image: '/cf logo.png',
    isGif: false,
  },
  {
    id: 30,
    title: '挑战赛logo',
    image: '/挑战赛logo.png',
    isGif: false,
  },
  {
    id: 31,
    title: 'synbio logo',
    image: '/synbio logo.png',
    isGif: false,
  },
  {
    id: 32,
    title: '封底',
    image: '/封底.png',
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
            backgroundImage: 'url(/封面1.png)'
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
            src="/Portfolio.png" 
            alt="Portfolio" 
            className="w-auto h-[100px] mx-auto mb-6 animate-fade-in-up delay-100"
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
