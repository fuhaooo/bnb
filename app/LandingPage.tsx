import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../public/logo/1.png';
import wechatQR from '../public/wechat/wechat.png';
import bnbLogo from '../public/logo/bnb.png';
import { 
  MapPin, 
  MessageCircle, 
  User, 
  Home, 
  Calendar,
  Plane,
  Hotel,
  Camera,
  Coffee,
  Navigation
} from 'lucide-react';
import { Github } from 'lucide-react';

const LandingPage = () => {
  const [randomImage, setRandomImage] = useState(Math.floor(Math.random() * 18) + 1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomImage(Math.floor(Math.random() * 18) + 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const timelineData = [
    {
      year: "2024",
      event: "玉龙雪山之旅",
      description: "在丽江古城感受纳西族文化的魅力，登上玉龙雪山欣赏云海与冰川，体验高原的纯净与壮美。",
      side: "left",
      icon: <MapPin className="w-6 h-6 text-pink-400" />,
      mapImage: "/cities/1.png"
    },
    {
      year: "2023",
      event: "西藏布达拉宫朝圣",
      description: "在海拔3650米的拉萨，探访世界屋脊的明珠布达拉宫，感受藏传佛教的神圣与庄严。",
      side: "right",
      icon: <MapPin className="w-6 h-6 text-pink-400" />,
      mapImage: "/cities/2.png"
    },
    {
      year: "2022",
      event: "纽约曼哈顿之旅",
      description: "漫步在纽约曼哈顿的摩天大楼间，体验大都会的繁华与活力，感受不夜城的独特魅力。",
      side: "left",
      icon: <Coffee className="w-6 h-6 text-pink-400" />,
      mapImage: "/cities/3.png"
    },
    {
      year: "2021",
      event: "富士山温泉之旅",
      description: "在富士山下的温泉小镇，欣赏日本最高峰的四季变化，体验日式温泉的极致放松。",
      side: "right",
      icon: <Plane className="w-6 h-6 text-pink-400" />,
      mapImage: "/cities/4.png"
    },
    {
      year: "2020",
      event: "曼谷文化之旅",
      description: "探索泰国曼谷的寺庙与夜市，品尝地道美食，感受微笑之国的热情与活力。",
      side: "left",
      icon: <Navigation className="w-6 h-6 text-pink-400" />,
      mapImage: "/cities/5.png"
    }
  ];

  const socialLinks = [
    {
      name: 'Telegram',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
      href: 'https://t.me/+mqo32FRa3W9mNTVl',
      color: 'hover:text-[#229ED9]'
    },
    {
      name: 'Discord',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
      ),
      href: 'https://discord.gg/ewJcxe2TUG',
      color: 'hover:text-[#5865F2]'
    },
    {
      name: 'Github',
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/BnB3DAO/Press-Conference/issues',
      color: 'hover:text-gray-600'
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* 背景轮播 */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Image
          src={`/bnb/${randomImage}.jpg`}
          alt="背景图片"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-1000"
        />
      </div>

      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 h-14 bg-gradient-to-r from-white/80 via-pink-50/80 to-white/80 border-b border-pink-100 backdrop-blur-md">
        <div className="container h-full mx-auto px-4">
          <div className="flex h-full justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2"
            >
              <div className="relative h-6 w-16">
                <Image
                  src={logo}
                  alt="BnB Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-4 w-[1px] bg-pink-200"></div>
              <span className="text-sm font-medium text-pink-500">Travel Assistant</span>
            </motion.div>

            {/* 社交媒体链接 */}
            <div className="flex items-center gap-1">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`rounded-lg p-2 transition-all ${link.color} hover:bg-pink-50`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* 主内容区域 */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto p-4">
          {/* 简介 */}
          <section id="intro" className="my-10">
            <div className="relative">
              {/* 背景装饰 */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-pink-100/20 via-white/40 to-pink-50/20 backdrop-blur-sm -z-10"></div>
              <div className="absolute -inset-4 rounded-2xl bg-white/50 backdrop-blur-sm -z-20"></div>
              
              {/* 内容卡片 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-xl">
                {/* 左侧文本 */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                  >
                    <h2 className="text-4xl font-bold tracking-tight text-pink-500 drop-shadow-sm">
                      旅行者您好
                      <br />
                      <span className="text-5xl bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
                        我是"bnb"！
                      </span>
                    </h2>
                    <p className="text-lg text-pink-400 leading-relaxed">
                      作为一位AI旅行助手，我期待能够陪伴你探索世界的每个角落。
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className="p-4 rounded-lg bg-pink-50/50 backdrop-blur-sm">
                      <h3 className="font-medium text-pink-500 mb-2">行程规划</h3>
                      <p className="text-sm text-pink-400">为你量身定制完美旅行路线</p>
                    </div>
                    <div className="p-4 rounded-lg bg-pink-50/50 backdrop-blur-sm">
                      <h3 className="font-medium text-pink-500 mb-2">美食探索</h3>
                      <p className="text-sm text-pink-400">发现当地特色美食佳肴</p>
                    </div>
                    <div className="p-4 rounded-lg bg-pink-50/50 backdrop-blur-sm">
                      <h3 className="font-medium text-pink-500 mb-2">文化体验</h3>
                      <p className="text-sm text-pink-400">深入了解当地风土人情</p>
                    </div>
                    <div className="p-4 rounded-lg bg-pink-50/50 backdrop-blur-sm">
                      <h3 className="font-medium text-pink-500 mb-2">实时助手</h3>
                      <p className="text-sm text-pink-400">随时解答旅行中的疑问</p>
                    </div>
                  </motion.div>
                </div>

                {/* 右侧装饰图 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative h-full min-h-[400px] rounded-xl overflow-hidden flex items-center"
                >
                  {/* 显示器外框 */}
                  <div className="relative w-[90%] aspect-video mx-auto">
                    {/* 显示器边框 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 shadow-2xl">
                      {/* 显示器内框 */}
                      <div className="relative h-full w-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl overflow-hidden">
                        {/* 扫描线动画 */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/10 to-transparent animate-scan"></div>
                        
                        {/* 显示器光晕 */}
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent opacity-50"></div>
                        
                        {/* 显示器内容 */}
                        <div className="absolute inset-0">
                          <div className="relative h-full w-full -translate-x-[35px] -translate-y-[4px] scale-110">
                            <Image
                              src={bnbLogo}
                              alt="BnB Character"
                              fill
                              className="object-cover animate-float scale-[1.15] translate-y-1 h-full w-full"
                              priority
                            />
                          </div>
                        </div>

                        {/* 显示器反光效果 */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                      </div>
                    </div>

                    {/* 显示器底座 */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/4 h-8">
                      <div className="h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-xl"></div>
                    </div>

                    {/* 装饰性按钮 */}
                    <div className="absolute top-2 right-6 flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-pink-500/50 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-pink-400/50 animate-pulse delay-75"></div>
                      <div className="w-2 h-2 rounded-full bg-pink-300/50 animate-pulse delay-150"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 聊天部分 */}
          <section id="chat" className="my-10">
            <motion.h2 
              className="text-3xl font-semibold text-center mb-6 text-pink-500 tracking-tight drop-shadow-lg" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1 }}
            >
              快来与 bnb 对话吧！
            </motion.h2>
            <div className="w-full rounded-lg overflow-hidden shadow-[0_0_15px_rgba(236,72,153,0.3)] backdrop-blur-md bg-white/30">
              <iframe
                src="http://localhost:5173/6b46dbff-69c8-0e0f-994b-a5335c1d82f9/chat"
                className="w-full h-[600px] border-0"
                allow="microphone"
              />
            </div>
          </section>

          {/* 旅行时间线 */}
          <section id="timeline" className="my-10 p-6 backdrop-blur-md bg-white/30 rounded-lg shadow-[0_0_15px_rgba(236,72,153,0.3)]">
            <h2 className="text-3xl font-semibold text-center mb-12 text-pink-500 tracking-tight drop-shadow-lg">bnb的旅行足迹</h2>
            <div className="relative">
              {/* 时间轴垂直线 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-300 via-pink-400 to-pink-500"></div>

              {/* 时间点 */}
              <div className="relative py-16">
                {timelineData.map((item, index) => (
                  <div 
                    key={item.year} 
                    className={`flex items-center absolute w-full ${
                      item.side === 'left' 
                        ? 'flex-row-reverse' 
                        : ''
                    }`}
                    style={{
                      top: `${index * 400}px`,
                      transform: `translateY(${item.side === 'left' ? '-50px' : '50px'})`,
                    }}
                  >
                    <div className={`w-[45%] ${item.side === 'left' ? 'text-right pr-8' : 'pl-8'} relative`}>
                      <motion.div
                        initial={{ opacity: 0, x: item.side === 'left' ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="backdrop-blur-md bg-white/30 p-5 rounded-lg shadow-[0_0_15px_rgba(236,72,153,0.3)] relative overflow-hidden group hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-shadow duration-300"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          {item.icon}
                          <h3 className="font-semibold text-xl text-pink-500 tracking-tight drop-shadow-lg">{item.year}</h3>
                        </div>
                        <h4 className="font-medium text-lg mb-3 text-pink-400 drop-shadow">{item.event}</h4>
                        <p className="text-sm text-pink-400 leading-relaxed drop-shadow mb-5">{item.description}</p>
                        <div className="relative w-full aspect-[4/3] transform group-hover:scale-105 transition-transform duration-300">
                          <div className="absolute inset-0 clip-path-hex bg-gradient-to-br from-pink-200/30 to-pink-400/30 backdrop-blur-sm"></div>
                          <div className="absolute inset-1.5 clip-path-hex overflow-hidden">
                            <Image
                              src={item.mapImage}
                              alt={item.event}
                              fill
                              className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      </motion.div>
                      {/* 连接线 */}
                      <div 
                        className={`absolute top-1/2 -translate-y-1/2 h-[2px] w-8 bg-gradient-to-r from-pink-300 to-pink-400 ${
                          item.side === 'left' 
                            ? 'left-[-2rem] rotate-[25deg] origin-right' 
                            : 'right-[-2rem] -rotate-[25deg] origin-left'
                        }`}
                      ></div>
                    </div>
                    <div className="w-[10%] flex justify-center items-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 relative z-10 shadow-[0_0_12px_rgb(236,72,153)] p-1"
                      >
                        <div className="w-full h-full rounded-full bg-white"></div>
                      </motion.div>
                    </div>
                    <div className="w-[45%]"></div>
                  </div>
                ))}
              </div>
              {/* 添加一个占位div来保持容器高度 */}
              <div style={{ height: `${(timelineData.length * 400)}px` }}></div>
            </div>
          </section>

          {/* 主理人信息 */}
          <section id="about" className="my-10 p-6 backdrop-blur-md bg-white/30 rounded-lg shadow-[0_0_15px_rgba(236,72,153,0.3)]">
            <h2 className="text-3xl font-semibold mb-6 text-pink-500 tracking-tight drop-shadow-lg">关于主理人</h2>
            <p className="text-lg text-pink-400 leading-relaxed drop-shadow">
              我叫Alfred，来自BnB3DAO，希望大家bnb能够在旅行过程中帮助到大家，在旅途中给予关心和陪伴！
            </p>
          </section>

          {/* 页脚 */}
          <footer className="my-10 p-6 backdrop-blur-md bg-white/30 rounded-lg shadow-[0_0_15px_rgba(236,72,153,0.3)] text-center">
            <h2 className="text-2xl font-semibold mb-6 text-pink-500 tracking-tight drop-shadow-lg">关注我们</h2>
            <div className="flex justify-center items-center flex-col">
              <Image src={wechatQR} alt="微信公众号二维码" width={100} height={100} className="mb-4" />
              <p className="text-pink-400 drop-shadow">
                官网：
                <a 
                  href="https://bnb3.rwa-wallet.com/" 
                  className="text-pink-500 hover:text-pink-600 transition-colors underline decoration-pink-400/30 hover:decoration-pink-400/60 drop-shadow" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  https://bnb3.rwa-wallet.com/
                </a>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
