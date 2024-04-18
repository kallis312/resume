import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';
import {
  aspNet,
  auth0,
  aws,
  azure,
  chakraUi,
  cloudflare,
  cs,
  docker,
  electron,
  ffmpeg,
  github,
  go,
  jira,
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

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Full stack developer',
      company: 'Callisto Inc.',
      image: import('@/assets/logos/callisto.png'),
      dates: [new Date('2022-06'), new Date('2024-03')],
      description: `
        - Led the development of Medical Data Hub, a comprehensive web platform designed to enhance the security, privacy, and accessibility of medical data. The platform enables healthcare providers and researchers to securely store, access, and share medical information.
        - Created a user-friendly interface using Next.js and TypeScript, focusing on intuitive navigation and responsive design to cater to the diverse needs of users in the medical community.
        - Built reliable server-side solutions using Node.js and Prisma, with MySQL for robust data management and storage. Ensured smooth data operations and scalability to handle the demands of a growing user base.
        - Implemented robust security measures including Auth0 for secure authentication and user management, ensuring compliance with privacy regulations and safeguarding sensitive information.
        - Utilized Cloudflare to enhance application performance and secure data transactions. Integrated features to protect against DDoS attacks and optimize content delivery for a better user experience.
        - Leveraged GitHub for version control, facilitating seamless team collaboration and continuous integration/continuous deployment (CI/CD) processes that ensured code quality and application reliability.
        - Spearheaded the integration of Fision AI to analyze and process burn images, effectively identifying and anonymizing sensitive information without compromising the clinical value of the data.
        - Conducted extensive testing to validate the accuracy of the anonymization algorithms and the overall performance of the application. Regularly updated the software based on user feedback and new technological advancements to enhance functionality and user experience.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [typescript(), nextJs(), chakraUi(), electron(), node(), prisma(), mysql(), python(), go(), auth0(), cloudflare(), azure(), github(), jira()],
      },
      links: [website({ url: 'https://callisto-ai.com/' }), github({ url: 'https://github.com/callisto-ai' })],
    },

    {
      role: 'Full stack developer',
      company: 'Line Media Research Co., Ltd.',
      image: import('@/assets/logos/lmr.png'),
      dates: [new Date('2020-05'), new Date('2022-05')],
      description: `
        - Led the design and development of a remote monitoring interface that consolidated camera feeds from multiple buses into a grid layout on one screen. This setup enabled efficient, real-time surveillance by dispatch operators and safety personnel.
        - Integrated RTSP (Real-Time Streaming Protocol) for live video feeds from high-definition cameras installed in each bus. Managed and configured the camera setups to optimize field of view and ensure comprehensive coverage of bus interiors and exteriors.
        - Addressed and resolved significant latency issues inherent in RTSP stream processing. Implemented stream optimization techniques, such as tweaking frame rates, adjusting bit rates, and selecting optimal encoding settings to reduce lag and improve the real-time video streaming quality.
        - Ensured the system provided stable and continuous real-time feedback without interruptions, essential for immediate response situations and routine safety checks.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [typescript(), docker(), react(), recoil(), tailwindCss(), vite(), cs(), aspNet(), ffmpeg(), rtspStream(), aws()],
      },
      links: [website({ url: 'http://lmr.jp/en/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
