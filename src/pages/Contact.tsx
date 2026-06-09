import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: '邮箱',
    value: '1272717085@qq.com',
    href: 'mailto:1272717085@qq.com',
  },
  {
    icon: Phone,
    label: '电话',
    value: '13629161724',
    href: 'tel:13629161724',
  },
  {
    icon: MapPin,
    label: '位置',
    value: '西安市西咸新区',
    href: null,
  },
];

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'Dribbble', url: 'https://dribbble.com' },
  { name: ' Behance', url: 'https://behance.net' },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">联系我</h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              有任何项目合作或合作机会，欢迎通过以下方式与我联系
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-8">发送消息</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-8">联系方式</h2>
              <div className="space-y-6 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="p-3 bg-gray-900 border border-gray-800">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white hover:text-gray-300 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">社交媒体</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-800 hover:border-white hover:bg-white hover:text-black transition-all duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-16 hidden lg:block">
                <div className="w-full h-64 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600 text-lg">期待与您的合作</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
