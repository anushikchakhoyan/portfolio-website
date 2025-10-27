'use client';
import { useState } from 'react';

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from 'next-intl';

import usePostsData from '@/hooks/custom/use-blog-data';
import { BlogPostCard } from "./card";

export default function BlogPosts() {
    const t = useTranslations('Blog');
    const posts = usePostsData();
    const [activeTab, setActiveTab] = useState("english");

    const filteredItems = posts.filter((item) => item.category === activeTab);

    const tabs = [
        { key: "english", label: t("english") },
        { key: "armenian", label: t("armenian") },
    ];

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <h2 className='text-8xl text-center font-extrabold text-transparent bg-clip-text 
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 w-fit mx-auto'>
                Learn.
            </h2>
            <div className='max-w-2xl w-full mx-auto'>
                <h2 className="py-5 text-3xl">{t('title')}</h2>
                <div className="flex justify-start gap-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`py-2 text-md font-semibold transition-all duration-300 uppercase cursor-pointer
                            ${activeTab === tab.key ? "text-black dark:text-white" : "text-gray-400"}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                {filteredItems.map(post => (
                    <AnimatePresence mode="wait" key={post.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <BlogPostCard post={post} />
                        </motion.div>
                    </AnimatePresence>
                ))}
            </div>
        </div>
    );
}
