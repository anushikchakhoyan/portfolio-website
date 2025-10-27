import { Post } from '@/lib/types';

import blog1 from "@/images/blog/3.webp";
import blog2 from "@/images/blog/4.jpg";
import blog3 from "@/images/blog/5.webp";

export default function usePostsData() {
    const posts: Post[] = [
        {
            id: 1,
            date: '12/06/2025',
            title: 'Ինչո՞ւ ընտրել Svelte և SvelteKit քո հաջորդ նախագծի համար',
            excerpt: 'Ուղեցույց սկսնակների և փորձառուների համար՝ կայքեր ստեղծելու նոր մոտեցումներով:',
            image: blog1,
            reading: 9,
            category: "armenian",
            url: 'https://medium.com/@anushchakhoyan/ինչո-ւ-ընտրել-svelte-և-sveltekit-քո-հաջորդ-նախագծի-համար-f248a9304d48',
        },
        {
            id: 2,
            date: '02/06/2025',
            title: 'Ինչպե՞ս է ARIA-ն դարձնում Ձեր կայքը հասանելի բոլորին',
            excerpt: 'Ինչպե՞ս կարող եք Ձեր կայքը դարձնել հաշմանդամություն ունեցող անձանց համար հասանելի',
            image: blog2,
            reading: 4,
            category: "armenian",
            url: 'https://medium.com/@anushchakhoyan/համացանցը-բոլորի-համար-ինչպե-ս-է-aria-ն-դարձնում-ձեր-կայքը-հասանելի-բոլորին-1579a1476588',
        },
        {
            id: 3,
            date: '19/05/2025',
            title: 'OKLCH-ը CSS-ում. ինչպե՞ս RGB-ն ու HSL-ը զիջեցին իրենց տեղը',
            excerpt: 'Սա տեղեկատվական և պրակտիկ հոդված է, որը կօգնի քեզ հասկանալ և կիրառել ժամանակակից գունային ձևաչափերը՝ lab, lch, oklab, oklch, hslինչպես նաև',
            image: blog3,
            reading: 4,
            category: "armenian",
            url: 'https://medium.com/@anushchakhoyan/rgb-ի-մահվան-լուրերը-չափազանցված-են-թե-իսկապես-ավարտվում-է-դարաշրջանը-1bf7f19f521f',
        },
        {
            id: 4,
            date: '04/11/2024',
            title: ' Make Your Website Accessible to All: A Beginner’s Guide to ARIA',
            excerpt: 'A practical introduction to ARIA’s power in building web content for everyone, including users with disabilities.',
            image: blog3,
            reading: 3,
            category: "english",
            url: 'https://medium.com/@anushchakhoyan/aria-accessible-rich-internet-applications-3da57ac03a3c'
        },
        {
            id: 5,
            date: '19/10/2024',
            title: 'CSR and SSR: Key Differences Explained',
            excerpt: 'Choosing Between Client - Side Rendering(CSR) and Server - Side Rendering(SSR)',
            image: blog3,
            reading: 3,
            category: "english",
            url: 'https://medium.com/@anushchakhoyan/aria-accessible-rich-internet-applications-3da57ac03a3c'
        },
        {
            id: 6,
            date: '06/10/2023',
            title: 'Ինչպե՞ս փոխել commit message-ը Git-ում',
            excerpt: 'Ամենահաճախ հանդիպող խնդիրներից է, երբ ուզում ենք push արած հաղորդագրությունը(commit message) փոխել: Կան բազմաթիվ պատճառներ, թե ինչու',
            image: blog3,
            reading: 2,
            category: "armenian",
            url: 'https://medium.com/@anushchakhoyan/ինչպե-ս-փոխել-commit-message-ը-git-ում-09f7bef28ed0'
        },
        {
            id: 7,
            date: '13/09/2023',
            title: 'Ինչպե՞ս վարպետորեն կառավարել ձեր կայքի տեքստի չափը՝ CSS-ի միջոցով',
            excerpt: 'CSS - ում միավորներն(այսուհետ` unit) օգտագործվում են էլեմենտի չափը նշելու համար: Նրանք կարող են դասակարգվել Absoulte և Relative unit-ների:',
            image: blog3,
            reading: 3,
            category: "armenian",
            url: 'https://medium.com/@anushchakhoyan/css-units-font-size-46a3b96db79'
        },
        {
            id: 8,
            date: '03/07/2023',
            title: 'Ձեր վեբ կայքը ավելի ինտերակտիվ դարձնելու ժամանակն է.Սովորե՛ք CSS Focus Selector-ները հիմա',
            excerpt: 'Ուղեցույց — :focus :focus-within :focus-visible',
            image: blog3,
            reading: 2,
            category: "armenian",
            url: 'https://medium.com/@anushchakhoyan/յուրացնենք-focus-selector-ը-dae08236bb3e'
        },
        {
            id: 9,
            date: '26/05/2023',
            title: 'How the Browser Renders a Web Page — CSSOM, Render Engine',
            excerpt: 'Understanding what goes on inside a browser is the most powerful part for every web developer.We’ll look at how browsers interpret code',
            image: blog3,
            reading: 6,
            category: "english",
            url: 'https://medium.com/@anushchakhoyan/how-the-browser-renders-a-web-page-cssom-render-engine-c395d9f9cbda'
        },
        {
            id: 10,
            date: '09/05/2023',
            title: 'Taking Your React Styling to the Next Level with Styled Components',
            excerpt: 'The Styled Components is a modern way to style React components because it allows you to write styles in a declarative and modular way',
            image: blog3,
            reading: 7,
            category: "english",
            url: 'https://medium.com/@anushchakhoyan/taking-your-react-styling-to-the-next-level-with-styled-components-aa425078a0c2'
        },
    ]

    return posts;
}
