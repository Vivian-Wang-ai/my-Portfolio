import { useState } from 'react';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="姓名"
          required
          className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-200"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="邮箱"
          required
          className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-200"
        />
      </div>
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="留言"
          required
          rows={4}
          className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-200 resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center gap-2 border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send size={18} />
        {isSubmitting ? '发送中...' : submitted ? '已发送!' : '发送消息'}
      </button>
    </form>
  );
}
