"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import LandingPage from './LandingPage';
import { Button } from "@/components/ui/button";

export default function Home() {
  const [showLanding, setShowLanding] = useState(false);
  const { toast } = useToast();

  if (showLanding) {
    return <LandingPage />;
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-100">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(236,72,153,0.1),rgba(236,72,153,0.05)_30%,transparent_60%)]"></div>
      
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-8 z-10"
      >
        <Image
          src="/logo/1.png"
          alt="BnB Logo"
          width={150}
          height={50}
          className="drop-shadow-lg"
        />
      </motion.div>

      {/* 中心内容 */}
      <div className="relative flex min-h-screen items-center justify-center gap-20 px-20">
        {/* 左侧文本和按钮 */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="z-10 max-w-xl"
        >
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-pink-500 drop-shadow-lg">
            开启你的
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-6xl text-transparent">
              专属旅程
            </span>
          </h1>
          <p className="mb-8 text-lg text-pink-400 drop-shadow">
            让我们一起探索世界的每个角落，创造属于你的独特回忆。
          </p>
          <Button
            onClick={() => setShowLanding(true)}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-8 py-6 text-lg font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
          >
            <span className="relative z-10">开始探索</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-pink-600 to-pink-500 transition-transform duration-300 group-hover:translate-x-0"></div>
          </Button>
        </motion.div>

        {/* 右侧图片 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.4,
            scale: {
              type: "spring",
              damping: 15,
              stiffness: 100
            }
          }}
          className="relative z-10"
        >
          <div className="relative h-[800px] w-[430px] overflow-hidden rounded-2xl">
            {/* 图片装饰效果 */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-pink-200/30 to-pink-400/30 backdrop-blur-sm"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-200/20 to-pink-400/20 backdrop-blur-sm"
            ></motion.div>
            {/* 主图片 */}
            <motion.div
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="relative h-full w-full"
            >
              <Image
                src="/front/front.jpg"
                alt="Front Image"
                fill
                sizes="(max-width: 430px) 100vw, 430px"
                priority
                className="rounded-xl object-cover object-center shadow-2xl transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
            {/* 装饰光效 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-pink-400/20 blur-3xl"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-pink-400/20 blur-3xl"
            ></motion.div>
          </div>
        </motion.div>
      </div>

      {/* 装饰元素 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-20 h-80 w-80 rounded-full bg-pink-400/10 blur-3xl"></div>
        <div className="absolute -bottom-40 right-20 h-80 w-80 rounded-full bg-pink-400/10 blur-3xl"></div>
      </div>

      <Toaster />
    </main>
  );
}
