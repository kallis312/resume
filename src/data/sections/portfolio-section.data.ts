import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  aspNet,
  aws,
  azure,
  chakraUi,
  cs,
  docker,
  electron,
  ffmpeg,
  firebase,
  jest,
  mysql,
  nextJs,
  node,
  prisma,
  python,
  react,
  recoil,
  rtspStream,
  tailwindCss,
  typescript,
  vite
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Representative Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Callisto Datahub',
      image: import('@/assets/portfolio/datahub.png'),
      dates: [new Date('2023-10'), new Date('2024-3')],
      details: [
        { label: 'Team size', value: '3 person' },
        { label: 'My role', value: ['Full Stack Developer'] },
        { label: 'Company', value: 'Callisto Inc.' },
        { label: 'Category', value: ['Web app'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://medical-datahub.ai/en', url: 'https://medical-datahub.ai/en' },
      ],
      description:
        'Played a pivotal role in creating a vital tool for the healthcare sector, recognized for its innovative approach to managing medical data. The Medical Data Hub has greatly improved operational efficiencies, data accessibility, and the security of patient information across multiple institutions.',
      tagsList: {
        title: 'Technologies',
        tags: [nextJs(), typescript(), mysql(), node(), azure(), docker(), prisma()],
      },
      links: [website({ url: 'https://medical-datahub.ai/en' })],
    },
    {
      name: 'Anonymize Tool',
      image: import('@/assets/portfolio/triton.png'),
      dates: [new Date('2022-06'), new Date('2024-03')],
      details: [
        { label: 'Team size', value: '5 people' },
        { label: 'My role', value: ['Front-end Developer', 'AI Engineer'] },
        { label: 'Company', value: 'Callisto Inc.' },
        { label: 'Category', value: ['Windows app'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://tru-quest-ck7ea3.netlify.app', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/triton-1.png'), alt: 'Third screenshot' },
        { src: import('@/assets/portfolio/triton-2.png'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/triton-3.png'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/triton-4.png'), alt: 'Third screenshot' },
      ],
      description:
        'Successfully delivered a critical tool that supports the medical community by providing a secure method to study and share burn-related medical images. The tool has significantly contributed to research and treatment strategies, improving outcomes for burn patients while ensuring data privacy and compliance with regulatory standards.',
      tagsList: {
        title: 'Technologies',
        tags: [electron(), nextJs(), python(), typescript(), chakraUi()],
      },
      links: [],
    },
    {
      name: 'Bus Remote Monitoring',
      image: import('@/assets/portfolio/monitor.png'),
      dates: [new Date('2020-10'), new Date('2022-05')],
      details: [
        { label: 'Team size', value: '2 people' },
        { label: 'My role', value: ['Full Stack Developer'] },
        { label: 'Company', value: 'Line Media Research Co., Ltd.' },
        { label: 'Category', value: ['Web app', 'Rtsp Stream', 'Ip Camera'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://software-chasers-e82l8e.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/software-chasers', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/monitoring (4).png'), alt: 'Third screenshot' },
        { src: import('@/assets/portfolio/monitoring (1).jpeg'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/monitoring (2).jpeg'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/monitoring (3).jpeg'), alt: 'Third screenshot' },
      ],
      description:
        'The remote monitoring system has been pivotal in enhancing the safety and security of the bus fleet. It has enabled more effective coordination and faster response times in emergency situations, significantly improving overall operational efficiency and passenger safety.',
      tagsList: {
        title: 'Technologies',
        tags: [typescript(), docker(), react(), recoil(), tailwindCss(), vite(), cs(), aspNet(), ffmpeg(), rtspStream(), aws()],
      },
      links: [],
    }
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
