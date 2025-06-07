"use client"
import React from 'react';
import type { FC } from 'react';
import { useTranslations } from "next-intl";

// Sample data
// const items = [
//     {
//         id: 1,
//         name: 'Item a',
//         language: 'en',
//         title: 'Taking Your React Styling to the Next Level with Styled Components',
//         description: 'The Styled Components is a modern way to style React components because it allows you to write styles in a declarative and modular way…',
//         date: 'Published on May 9, 2023',
//         reading: '7 min read',
//         src: ''
//     },
//     {
//         id: 2,
//         name: 'Item b',
//         language: 'en',
//         title: 'How the Browser Renders a Web Page — CSSOM, Render Engine',
//         description: 'Understanding what goes on inside a browser is the most powerful part for every web developer.We’ll look at how browsers interpret code…',
//         date: 'Published on May 26, 2023',
//         reading: '6 min read',
//         src: ''
//     },
//     {
//         id: 3,
//         name: 'Item c',
//         language: 'en',
//         title: 'Ձեր վեբ կայքը ավելի ինտերակտիվ դարձնելու ժամանակն է. Սովորե՛ք CSS Focus Selector-ները հիմա',
//         description: 'Understanding what goes on inside a browser is the most powerful part for every web developer.We’ll look at how browsers interpret code…',
//         date: 'Published on Jul 3, 2023',
//         reading: '2 min read',
//         src: ''
//     },
//     {
//         id: 4,
//         name: 'Item d',
//         language: 'en',
//         title: 'How the Browser Renders a Web Page — CSSOM, Render Engine',
//         description: 'Understanding what goes on inside a browser is the most powerful part for every web developer.We’ll look at how browsers interpret code…',
//         date: 'Published on May 26, 2023',
//         reading: '6 min read',
//         src: ''
//     },
// ];

// type SortOption = 'name' | 'language';

const Blog: FC = () => {
    const t = useTranslations("Blog");
    // const [sortBy, setSortBy] = useState<SortOption>('name');

    // Sort items based on selected sort option
    // const sortedItems = [...items].sort((a, b) => {
    //     if (sortBy === 'name') {
    //         return a.name.localeCompare(b.name);
    //     } else {
    //         return a.language.localeCompare(b.language);
    //     }
    // });

    return (
        <div className="w-full max-w-4xl mx-auto py-8">
            {/* Tabs */}
            {/* <div className="flex justify-center gap-4 mb-6">
                <button
                    onClick={() => setSortBy('name')}
                    className={`px-4 py-2 rounded-lg transition-all ${sortBy === 'name'
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortBy('language')}
                    className={`px-4 py-2 rounded-lg transition-all ${sortBy === 'language'
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                >
                    Sort by Language
                </button>
            </div> */}

            {/* Grid with mixing effect */}
            {/* <LayoutGroup>
                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 gap-6"
                >
                    {sortedItems.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            layoutId={`item-${item.id}`}
                            transition={{
                                layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                            }}
                            className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow"
                        >
                            <img src={item.src} alt={item.title} />
                            <p>{item.date} - {item.reading}</p>
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-gray-500">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </LayoutGroup> */}
            <h1 className='flex items-center justify-center text-3xl lg:text-6xl py-40'>{t('comingSoon')}</h1>
        </div>
    );
};

export default Blog;
