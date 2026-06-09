import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

const skills = [
  { category: '设计工具', items: ['Figma', 'Adobe XD', 'Sketch', 'Illustrator', 'After Effects', 'C4D'] },
  { category: 'AI技能', items: ['Trae solo', 'Cursor', '即梦', '可灵', 'Midjourney', 'Liblib', '扣子'] },
  { category: '其他能力', items: ['用户研究', '交互设计', '设计系统', '动效设计', '3D建模'] },
];

const experience = [
  {
    title: '高级UI设计师',
    company: '西安点告网络科技有限公司',
    period: '2018.05 - 2025.12',
    description: '1.负责美柏App/网页/后台管理系统、可视化大屏等UI/UX设计工作\n2.负责China focus、cubio、biochallenge等网页UI设计工作\n3.制定视觉规范包括设计风格定位、色彩系统、字体系统、图标等\n4.建立可复用的组件库，为后续更新迭代提供参考，提升团队后续项目协作效率\n5.参与前期项目的需求评审，对齐需求、评审原型、确认逻辑，设计评审，和开发对接实现产品高质量落地，UI走查、修复视觉bug，持续后期迭代\n6.完成公司China focus会议活动视觉设计，品牌设计，视频剪辑等工作',
  },
  {
    title: '视觉设计师',
    company: '西安爱易网络科技有限公司',
    period: '2017.03 - 2018.04',
    description: '1.设计公司电商APP/H5界面、小程序UI，适配iOS/Android多端，保障交互一致性与体验流畅度\n2.搭建团队首个电商UI组件库，提升团队设计效率40%，保障多项目视觉统一\n3.协同产品、研发、运营，参与需求评审、原型讨论、走查验收，推动设计落地，缩短项目周期20%\n4.策划618、双11等大促视觉方案，输出主KV、海报、弹窗、Banner，支撑千万级流量活动落地',
  },
];

const education = [
  {
    degree: '本科 · 工业设计',
    school: '陕西理工大学',
    period: '2013 - 2017',
    description: '1.参加全国工业设计大赛获得"全国三等奖""陕西省特等奖"并获得"新锐设计师"称号\n2.参加全省广告设计大赛获得"二等奖"\n3.专利证书\n4.优秀毕业生',
  },
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">简历</h1>
            <p className="text-gray-400">了解我的专业背景与技能</p>
          </div>

          <div className="flex justify-center mb-16">
            <a
              href="/王娟-UI设计师.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-200 group"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              下载PDF简历
            </a>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Award size={24} />
              <h2 className="text-2xl font-bold">专业技能</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill) => (
                <div key={skill.category} className="p-6 border border-gray-800 hover:border-gray-600 transition-colors duration-200">
                  <h3 className="text-lg font-medium mb-4">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-gray-900 text-gray-400 text-sm rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase size={24} />
              <h2 className="text-2xl font-bold">工作经历</h2>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="p-6 border-l-2 border-gray-800 hover:border-white transition-colors duration-200 ml-3"
                >
                  <h3 className="text-xl font-medium mb-1">{exp.title}</h3>
                  <p className="text-gray-400 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                  <p className="text-gray-400 whitespace-pre-wrap leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={24} />
              <h2 className="text-2xl font-bold">教育背景</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 border-l-2 border-gray-800 hover:border-white transition-colors duration-200 ml-3"
                >
                  <h3 className="text-xl font-medium mb-1">{edu.degree}</h3>
                  <p className="text-gray-400 mb-2">{edu.school}</p>
                  <p className="text-sm text-gray-500 mb-3">{edu.period}</p>
                  {edu.description && (
                    <p className="text-gray-400 whitespace-pre-wrap leading-relaxed">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
