import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { discord, github, skype, telegram } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpg'),
  fullName: 'Yamamoto Taku',
  role: 'BlockChain Developer',
  details: [
    { label: 'Phone', value: '+0 8043 963 016', url: 'tel:0 804 396 3016' },
    { label: 'Email', value: 'truepartner312@gmail.com', url: 'mailto:truepartner312@gmail.com' },
    { label: 'From', value: 'Osaka, Japan' },
    { label: 'Salary range', value: '30-100 $/hr' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '0 8043 963 016' },
    { label: 'Email', value: 'truepartner312@gmail.com' },
    { label: 'LinkedIn', value: '/in/mark-freeman', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/truepartner312', url: 'https://github.com' },
    { label: 'Website', value: 'mark-freeman-personal-website.com', url: '/', fullRow: true },
  ],
  description:
    'An accomplished Blockchain Developer with 7 years of comprehensive experience in the IT sector, specializing in the design, development, and deployment of decentralized applications and blockchain solutions. Proven track record in developing robust smart contracts and innovative blockchain modules. Skilled in optimizing blockchain transactions and implementing secure, efficient cryptographic protocols. Adept at full-stack development and cloud integration, which enhance and extend the capabilities of blockchain applications.',
  tags: [{ name: 'Open for freelance' }, { name: 'Full time' }, { name: 'Full remote' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Mark_Freeman.pdf',
  },
  links: [github({ url: 'https://github.com/truepartner312' }), skype({ url: 'https://join.skype.com/invite/qqzRgpFV0TrY' }), telegram({ url: 'https://t.me/yamataku' }), discord({ url: 'https://discord.gg/jHfcaKgT' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
