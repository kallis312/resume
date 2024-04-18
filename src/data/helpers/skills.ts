import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'logos:nextjs-icon',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const javascript = createSkillFactory({
  name: 'JavaScript',
  icon: 'logos:javascript',
  url: 'https://www.javascript.com/',
})

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

export const node = createSkillFactory({
  name: 'Node.js',
  icon: 'logos:nodejs-icon',
  url: 'https://nodejs.org/',
});

export const electron = createSkillFactory({
  name: 'Electron.js',
  icon: 'logos:electron',
  url: 'https://www.electronjs.org/',
});

export const prisma = createSkillFactory({
  name: 'Prisma.js',
  icon: 'logos:prisma',
  url: 'https://www.prisma.io/',
});

export const mysql = createSkillFactory({
  name: 'MySQL',
  icon: 'logos:mysql',
  url: 'https://www.mysql.com/',
});

export const python = createSkillFactory({
  name: 'Python',
  icon: 'logos:python',
  url: 'https://www.python.org/',
});

export const auth0 = createSkillFactory({
  name: 'Auth0',
  icon: 'logos:auth0-icon',
  url: 'https://auth0.com/',
});

export const cloudflare = createSkillFactory({
  name: 'Cloudflare',
  icon: 'logos:cloudflare-workers-icon',
  url: 'https://www.cloudflare.com/',
})

export const cs = createSkillFactory({
  name: 'C#',
  icon: 'logos:c-sharp',
  url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
})

export const ruby = createSkillFactory({
  name: 'Ruby',
  icon: 'logos:ruby',
  url: 'https://www.ruby-lang.org/',
})

export const aspNet = createSkillFactory({
  name: 'ASP.NET',
  icon: 'simple-icons:dotnet',
  url: 'https://docs.microsoft.com/en-us/aspnet/core/',
})

export const recoil = createSkillFactory({
  name: 'Recoil',
  icon: 'logos:recoil-icon',
  url: 'https://recoiljs.org/',
})

export const vite = createSkillFactory({
  name: 'Vite',
  icon: 'logos:vitejs',
  url: 'https://vitejs.dev/',
})

export const ffmpeg = createSkillFactory({
  name: 'FFmpeg',
  icon: 'logos:ffmpeg-icon',
  url: 'https://ffmpeg.org/',
})

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'logos:docker-icon',
  url: 'https://www.docker.com/',
})

export const rtspStream = createSkillFactory({
  name: 'RTSP Stream',
  icon: 'logos:streamlit',
  url: 'https://antmedia.io/rtsp-explained-what-is-rtsp-how-it-works/',
})

export const azure = createSkillFactory({
  name: 'Azure',
  icon: 'logos:azure-icon',
  url: 'https://azure.microsoft.com/',
})

export const aws = createSkillFactory({
  name: 'AWS',
  icon: 'logos:aws',
  url: 'https://aws.amazon.com/',
})

export const git = createSkillFactory({
  name: 'Git',
  icon: 'logos:git',
  url: 'https://git-scm.com/',
})

export const github = createSkillFactory({
  name: 'GitHub',
  icon: 'fa6-brands:github',
  url: 'https://github.com/',
})

export const jira = createSkillFactory({
  name: 'Jira',
  icon: 'logos:jira',
  url: 'https://jira.atlassian.com/',
})

export const go = createSkillFactory({
  name: 'Go',
  icon: 'logos:go',
  url: 'https://golang.org/',
})

export const rust = createSkillFactory({
  name: 'Rust',
  icon: 'logos:rust',
  url: 'https://www.rust-lang.org/',
})

export const solidity = createSkillFactory({
  name: 'Solidity',
  icon: 'logos:solidity',
  url: 'https://soliditylang.org/',
})

export const nuxtJs = createSkillFactory({
  name: 'Nuxt.js',
  icon: 'logos:nuxt-icon',
  url: 'https://nuxt.com/',
})

export const django = createSkillFactory({
  name: 'Django',
  icon: 'logos:django-icon',
  url: 'https://www.djangoproject.com/',
})

export const expressJs = createSkillFactory({
  name: 'Express.js',
  icon: 'logos:express',
  url: 'https://expressjs.com/',
})

export const flask = createSkillFactory({
  name: 'Flask',
  icon: 'logos:flask',
  url: 'https://flask.palletsprojects.com/en/3.0.x/',
})

export const laravel = createSkillFactory({
  name: 'Laravel',
  icon: 'logos:laravel',
  url: 'https://laravel.com/',
})

export const php = createSkillFactory({
  name: 'PHP',
  icon: 'logos:php',
  url: 'https://php.net/',
})

export const java = createSkillFactory({
  name: 'Java',
  icon: 'logos:java',
  url: 'https://www.java.com/',
})

export const gcp = createSkillFactory({
  name: 'GCP',
  icon: 'logos:google-cloud-platform',
  url: 'https://cloud.google.com/',
})
