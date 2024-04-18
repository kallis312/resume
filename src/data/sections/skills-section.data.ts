import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  aspNet,
  astro,
  aws,
  azure,
  chakraUi,
  cloudflare,
  cs,
  cypress,
  django,
  docker,
  eslint,
  expressJs,
  firebase,
  flask,
  gcp,
  java,
  javascript,
  laravel,
  mongoDb,
  mysql,
  nestJs,
  nextJs,
  node,
  nuxtJs,
  php,
  pnpm,
  postgreSql,
  prettier,
  prisma,
  python,
  react,
  ruby,
  rust,
  sass,
  solidity,
  supabase,
  tailwindCss,
  typescript,
  vue
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [

    {
      title: 'Programming Languages:',
      skills: [
        typescript(),
        javascript(),
        php(),
        java(),
        rust(),
        solidity(),
        python(),
        cs(),
        ruby(),
      ],
    },
    {
      title: 'BlockChain',
      skills: [
        cloudflare(),
        gcp(),
        aws(),
        azure(),
        docker(),
      ],
    },
    {
      title: 'Framework & Libraries',
      skills: [
        node(),
        expressJs(),
        nestJs(),
        aspNet(),
        prisma(),
        laravel(),
        django(),
        flask(),
        nextJs(),
        nuxtJs(),
        react(),
        vue(),
        astro(),
        chakraUi(),
        tailwindCss(),
      ],
    },
    {
      title: 'Database',
      skills: [
        mongoDb(),
        mysql(),
        postgreSql(),
        supabase(),
        firebase(),
      ],
    },
    {
      title: 'Cloud Technologies',
      skills: [
        cloudflare(),
        gcp(),
        aws(),
        azure(),
        docker(),
      ],
    },
    {
      title: 'I can speak',
      skills: [
        { icon: 'circle-flags:jp', name: 'Japanese' },
        { icon: 'circle-flags:us', name: 'English' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
