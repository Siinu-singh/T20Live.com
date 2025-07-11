'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export function RecentNews({ recentNews, topStories }) {
  const [activeTab, setActiveTab] = useState('recent'); // 'recent' or 'top'

  const newsToDisplay = activeTab === 'recent' ? recentNews : topStories;

  return (
    <div className="space-y-8">
       <div>
          <div className="flex items-center gap-4 border-b mb-4">
              <button
                onClick={() => setActiveTab('recent')}
                className={`text-lg font-bold pb-2 transition-colors ${activeTab === 'recent' ? 'border-b-2 border-primary text-foreground' : 'text-muted-foreground hover:text-foreground/80'}`}
              >
                Recent News
              </button>
              <button 
                onClick={() => setActiveTab('top')}
                className={`text-lg font-bold pb-2 transition-colors ${activeTab === 'top' ? 'border-b-2 border-primary text-foreground' : 'text-muted-foreground hover:text-foreground/80'}`}
              >
                Top Story
              </button>
          </div>
          <div className="space-y-4">
              {newsToDisplay.map((item, index) => (
                <Link href="/news" key={index}>
                  <motion.div 
                      className={`flex items-center gap-4 p-3 rounded-2xl cursor-pointer ${item.highlighted ? 'bg-primary/90' : 'bg-card'}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                      <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                        <Image src={item.imageUrl} alt={item.title} width={80} height={80} className="w-full h-full object-cover" data-ai-hint={item.imageHint} />
                      </div>
                      <div className={item.highlighted ? 'text-primary-foreground' : 'text-card-foreground'}>
                          <span className={`text-xs font-semibold ${item.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{item.category} • {item.time}</span>
                          <p className="font-semibold leading-tight">{item.title}</p>
                      </div>
                  </motion.div>
                </Link>
              ))}
          </div>
      </div>
    </div>
  );
}
