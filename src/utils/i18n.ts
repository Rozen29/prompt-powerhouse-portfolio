
type TranslationKey = string;

interface Translations {
  [language: string]: {
    [key: TranslationKey]: string;
  };
}

// Translation data
export const translations: Translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.greeting': 'Hello there, I\'m',
    'hero.name': 'AI Developer',
    'hero.title': 'Prompt Engineer & Web Enthusiast',
    'hero.description': 'Passionate about AI technology with exceptional prompt engineering skills',

    // Avatar Card
    'avatar.front.title': 'Prompt Engineer',
    'avatar.back.title': 'My Expertise',
    'avatar.back.skill1': 'Prompt Engineering',
    'avatar.back.skill2': 'Basic Programming',
    'avatar.back.skill3': 'AI Project Building',

    // About Section
    'about.title': 'About Me',
    'about.p1': 'I\'m an aspiring developer with a special talent for prompt engineering. While I\'ve only been coding for about 3 months, I\'ve discovered my superpower in crafting precise prompts for AI systems.',
    'about.p2': 'My journey began with basic computer skills at SDN 20 Wayserdang, deepened during my time at SMPN 21 Mesuji, and really took shape at SMKN 1 Wayserdang where I developed my prompt engineering skills.',
    'about.p3': 'I\'m passionate about AI technology and creating useful projects by combining basic coding with advanced prompt engineering techniques.',

    // Skills Section
    'skills.title': 'My Skills',
    'skills.prompt.title': 'Prompt Engineering',
    'skills.prompt.description': 'Expert at crafting precise instructions for AI systems to produce desired outputs. I can make AI tools work exactly how I want them to.',
    'skills.programming.title': 'Basic Programming',
    'skills.programming.description': 'Learning fundamentals of web development including HTML, CSS, and JavaScript. Building my foundation in React and Next.js.',
    'skills.ai.title': 'AI Project Building',
    'skills.ai.description': 'Creating innovative solutions by leveraging AI capabilities combined with basic programming knowledge.',

    // Projects Section
    'projects.title': 'Projects',
    'projects.bolt.title': 'Bolt New',
    'projects.bolt.description': 'An AI-powered application created through effective prompt engineering and basic web development.',
    'projects.loveable.title': 'Loveable Dev',
    'projects.loveable.description': 'A development tool that showcases the power of well-crafted AI prompts in creating software solutions.',

    // Education Section
    'education.title': 'Education',
    'education.elementary.name': 'SDN 20 Wayserdang',
    'education.elementary.description': 'Learned basic computer skills and developed an interest in technology.',
    'education.middle.name': 'SMPN 21 Mesuji',
    'education.middle.description': 'Explored computers more deeply and began learning about software and hardware.',
    'education.high.name': 'SMKN 1 Wayserdang',
    'education.high.description': 'Studied fundamental programming concepts and discovered prompt engineering.',

    // Contact Section
    'contact.title': 'Contact Me',
    'contact.description': 'Feel free to reach out if you\'d like to collaborate or just chat about AI and programming!',
    'contact.email.label': 'Email',
    'contact.github.label': 'GitHub',
    'contact.linkedin.label': 'LinkedIn',

    // Footer
    'footer.text': 'Created with passion and prompt engineering',
  },
  id: {
    // Navbar
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.skills': 'Keahlian',
    'nav.projects': 'Proyek',
    'nav.education': 'Pendidikan',
    'nav.contact': 'Kontak',

    // Hero Section
    'hero.greeting': 'Halo, saya',
    'hero.name': 'AI Developer',
    'hero.title': 'Prompt Engineer & Web Enthusiast',
    'hero.description': 'Passionate banget sama teknologi AI dengan keahlian prompt engineering yang jago',

    // Avatar Card
    'avatar.front.title': 'Prompt Engineer',
    'avatar.back.title': 'Keahlian Utama',
    'avatar.back.skill1': 'Prompt Engineering',
    'avatar.back.skill2': 'Dasar Pemrograman',
    'avatar.back.skill3': 'Pembuatan Proyek AI',

    // About Section
    'about.title': 'Tentang Saya',
    'about.p1': 'Saya developer pemula dengan bakat khusus di prompt engineering. Meskipun baru sekitar 3 bulan belajar koding, saya sudah menemukan kekuatan utama dalam merancang prompt yang tepat untuk sistem AI.',
    'about.p2': 'Perjalanan saya dimulai dengan keterampilan komputer dasar di SDN 20 Wayserdang, berkembang selama di SMPN 21 Mesuji, dan benar-benar terbentuk di SMKN 1 Wayserdang di mana saya mengembangkan keahlian prompt engineering.',
    'about.p3': 'Saya sangat tertarik dengan teknologi AI dan menciptakan proyek bermanfaat dengan menggabungkan koding dasar dan teknik prompt engineering yang canggih.',

    // Skills Section
    'skills.title': 'Keahlian Saya',
    'skills.prompt.title': 'Prompt Engineering',
    'skills.prompt.description': 'Ahli dalam merancang instruksi yang tepat untuk sistem AI agar menghasilkan output yang diinginkan. Saya bisa membuat alat AI bekerja persis seperti yang saya inginkan.',
    'skills.programming.title': 'Dasar Pemrograman',
    'skills.programming.description': 'Mempelajari dasar-dasar pengembangan web termasuk HTML, CSS, dan JavaScript. Membangun fondasi dalam React dan Next.js.',
    'skills.ai.title': 'Pembuatan Proyek AI',
    'skills.ai.description': 'Menciptakan solusi inovatif dengan memanfaatkan kemampuan AI yang dikombinasikan dengan pengetahuan pemrograman dasar.',

    // Projects Section
    'projects.title': 'Proyek',
    'projects.bolt.title': 'Bolt New',
    'projects.bolt.description': 'Aplikasi bertenaga AI yang dibuat melalui prompt engineering efektif dan pengembangan web dasar.',
    'projects.loveable.title': 'Loveable Dev',
    'projects.loveable.description': 'Alat pengembangan yang menunjukkan kekuatan prompt AI yang dirancang dengan baik dalam menciptakan solusi perangkat lunak.',

    // Education Section
    'education.title': 'Pendidikan',
    'education.elementary.name': 'SDN 20 Wayserdang',
    'education.elementary.description': 'Belajar keterampilan komputer dasar dan mengembangkan minat pada teknologi.',
    'education.middle.name': 'SMPN 21 Mesuji',
    'education.middle.description': 'Mendalami komputer lebih jauh dan mulai belajar tentang software dan hardware.',
    'education.high.name': 'SMKN 1 Wayserdang',
    'education.high.description': 'Mempelajari konsep pemrograman dasar dan menemukan prompt engineering.',

    // Contact Section
    'contact.title': 'Hubungi Saya',
    'contact.description': 'Jangan ragu untuk menghubungi jika kamu ingin berkolaborasi atau sekedar ngobrol tentang AI dan pemrograman!',
    'contact.email.label': 'Email',
    'contact.github.label': 'GitHub',
    'contact.linkedin.label': 'LinkedIn',

    // Footer
    'footer.text': 'Dibuat dengan passion dan prompt engineering',
  }
};
