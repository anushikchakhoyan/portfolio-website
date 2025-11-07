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
            <h2 className='pt-8 pb-8 lg:pb-14 text-4xl lg:text-8xl text-center font-extrabold text-zinc-700 dark:text-white w-fit mx-auto'>
                {t('title')}
            </h2>
            <div className='max-w-3xl w-full mx-auto bg-white/75 dark:bg-zinc-700/75 backdrop-blur-sm rounded-2xl py-8 px-5 lg:px-10'>
                <div className="flex justify-center gap-8  py-8">
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
                <div className='grid gap-20'>
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
        </div>
    );
}
