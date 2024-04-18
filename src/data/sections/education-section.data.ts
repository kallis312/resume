import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Web Engineer Major',
      institution: 'Osaka Information and Computer Science College',
      image: import('@/assets/logos/edu.png'),
      dates: [new Date('2017.03'), new Date('2020.03')],
      description: 'Specialization in software development.',
      links: [website({ url: 'https://www.oic.ac.jp/' }), website({ url: 'https://www.oic.ac.jp/english/' })],
    }
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
