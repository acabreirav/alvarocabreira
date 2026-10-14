// Todo el texto del sitio vive aquí, en español e inglés.
// Para cambiar algo, edita este archivo y haz push: Vercel publica solo.

export type Locale = "es" | "en";

// Colores de las líneas del Metro de Santiago, usados como color de cada proyecto.
export type Line = "l1" | "l2" | "l3" | "l4" | "l4a" | "l5" | "l6";

export type Link = { label: string; href: string };

export type Stop = {
  name: string;
  years: string;
  text: string;
  now?: boolean;
};

export type Project = {
  id: string;
  name: string;
  line: Line;
  mark: string;
  status: string;
  live: boolean;
  what: string;
  why: string;
  did: string;
  learned?: string;
  next?: string;
  links: Link[];
};

export type Personal = { title: string; text: string; line: Line };

export type Dict = {
  meta: { title: string; description: string };
  nav: { work: string; projects: string; life: string; contact: string };
  langSwitch: { label: string; href: string };
  hero: { hello: string; lead: string; cv: string; email: string };
  work: { title: string; intro: string; stops: Stop[] };
  projects: {
    title: string;
    intro: string;
    labels: { why: string; did: string; learned: string; next: string };
    items: Project[];
  };
  life: { title: string; items: Personal[] };
  contact: { title: string; text: string; copy: string; copied: string };
  footer: string;
};

export const site = {
  name: "Álvaro Cabreira",
  url: "https://alvarocabreira.com",
  email: "a.cabreira.v@gmail.com",
  linkedin: "https://www.linkedin.com/in/alvaro-cabreira/",
  cv: "/cv-alvaro-cabreira.pdf",
  // Cuando tengas foto, déjala en /public/foto.jpg y cambia esto a "/foto.jpg".
  photo: null as string | null,
};

const jobitLinks: Link[] = [
  { label: "usejobit.com", href: "https://usejobit.com" },
  { label: "Instagram", href: "https://www.instagram.com/use.jobit/" },
];

const cmrLinks: Link[] = [
  { label: "calculadora-cmr.vercel.app", href: "https://calculadora-cmr.vercel.app" },
  { label: "GitHub", href: "https://github.com/acabreirav/calculadora-cmr" },
];

export const dict: Record<Locale, Dict> = {
  es: {
    meta: {
      title: "Álvaro Cabreira",
      description:
        "Product Owner en LATAM Airlines. Ingeniero civil industrial. Proyectos propios y un poco de mi vida.",
    },
    nav: { work: "Trabajo", projects: "Proyectos", life: "Fuera del trabajo", contact: "Contacto" },
    langSwitch: { label: "EN", href: "/en/" },
    hero: {
      hello: "Hola, soy Álvaro.",
      lead: "Trabajo como Product Owner en LATAM Airlines. Fuera del trabajo armo cosas para resolver problemas que me encuentro. Acá hay algunas.",
      cv: "Descargar CV",
      email: "Correo",
    },
    work: {
      title: "Recorrido",
      intro: "Ingeniero civil industrial, con especialidad en transporte.",
      stops: [
        {
          name: "Ingeniería Civil Industrial, UC",
          years: "2016–2022",
          text: "Pontificia Universidad Católica de Chile. Especialidad en Ingeniería de Transporte.",
        },
        {
          name: "Technologyhem",
          years: "2021–2023",
          text: "Analista consultor. Armaba soluciones con datos sobre Google Cloud, BigQuery y Looker Studio, y levantaba procesos y requerimientos para equipos técnicos.",
        },
        {
          name: "LATAM Airlines",
          years: "2023–hoy",
          now: true,
          text: "Trabajo en equipaje. Con mi equipo diseñamos herramientas digitales para que las maletas no se pierdan en conexiones cortas, y para que recuperarlas sea más rápido y claro cuando pasa. Paso tiempo en rampa con los operadores, miro los datos y priorizo qué construir. El primer producto bajó en 30% los equipajes extraviados en conexiones avión a avión, y hoy es la base para digitalizar otros procesos de rampa.",
        },
      ],
    },
    projects: {
      title: "Proyectos propios",
      intro: "Cosas que he armado fuera del trabajo. Algunas funcionan, otras siguen en camino.",
      labels: { why: "Por qué", did: "Qué hice", learned: "Aprendí", next: "Lo que viene" },
      items: [
        {
          id: "jobit",
          name: "JobIt",
          line: "l4",
          mark: "J",
          status: "2026 · lanzado",
          live: true,
          what: "Asesor de CV para Chile. Te muestra qué le falta a tu CV citando tus propias líneas, lo reescribe sin inventar y lo adapta a cada aviso.",
          why: "La mayoría de los CV en Chile describen el cargo y no lo que la persona logró. Y al salir de la universidad nadie te explica cómo contar tu experiencia.",
          did: "Definí el producto y el modelo de negocio, y lo construí con Claude Code: Next.js, Postgres, la API de Claude y Mercado Pago.",
          learned: "Una regla escrita en el prompt no alcanza. Tiene que estar en el código.",
          links: jobitLinks,
        },
        {
          id: "cmr",
          name: "Calculadora CMR",
          line: "l2",
          mark: "C",
          status: "Ago 2026 · publicada",
          live: true,
          what: "Ayuda a decidir si canjear tus puntos CMR hoy o esperar el nuevo formato.",
          why: "Viendo un live, noté que la gente no sabía qué hacer con sus puntos ante el cambio. En el fondo era un problema de cálculo.",
          did: "La armé con IA sin haber publicado nunca una web ni usado Git. La han usado más de 10.000 personas.",
          learned: "Validar los supuestos con la fuente oficial antes de publicar.",
          links: cmrLinks,
        },
        {
          id: "flujo-cero",
          name: "Flujo Cero",
          line: "l5",
          mark: "F",
          status: "Ago 2026 · uso personal",
          live: true,
          what: "Busca qué departamentos en Chile rinden de verdad, con cada número rastreable hasta su fuente.",
          why: "Quería invertir en un departamento y los rendimientos publicados no resistían la aritmética.",
          did: "Cada semana revisa unos 2.700 departamentos contra más de 5.200 arriendos en 384 microzonas, y me manda un informe.",
          learned: "La mitad del valor está en limpiar los datos: avisos repetidos, arriendos de temporada, departamentos ya vendidos.",
          links: [],
        },
        {
          id: "mercado-publico",
          name: "Mercado Público",
          line: "l6",
          mark: "M",
          status: "Ago 2026 · activo",
          live: true,
          what: "Datos abiertos de las compras del Estado, para ver caso a caso dónde se paga distinto por lo mismo.",
          why: "Se dice mucho que las compras públicas están rotas, casi siempre sin mostrar los datos.",
          did: "Analicé unos 23.000 ítems de más de 1.500 organismos. Mi estimación de ahorro coincidió con la de una comisión oficial, usando otro método.",
          learned: "Distinguir un hallazgo de un error en los datos.",
          links: [],
        },
        {
          id: "pulso-digital",
          name: "Pulso Digital",
          line: "l3",
          mark: "P",
          status: "Jul 2026 · en pausa",
          live: false,
          what: "Sigue cada semana las redes de 49 legisladores chilenos y arma el historial que TikTok e Instagram no muestran.",
          why: "Las redes solo muestran una foto del momento. El valor está en juntar esas fotos en el tiempo.",
          did: "Lo construí en una semana y corre solo cada semana.",
          learned: "Construir fue lo fácil. Lo difícil es validar que alguien lo necesite.",
          links: [],
        },
        {
          id: "finanzas",
          name: "Finanzas personales",
          line: "l4a",
          mark: "$",
          status: "2026 · en preparación",
          live: false,
          what: "Asesoría para ordenar tus gastos, ahorrar y entender lo básico de invertir.",
          why: "Armé un sistema para las finanzas de mi casa que me funcionó, y quise compartirlo con quienes recién empiezan a ganar su plata.",
          did: "Tres clases, una planilla que se adapta a cada persona y sesiones de seguimiento.",
          next: "Probarlo con los primeros usuarios.",
          links: [],
        },
      ],
    },
    life: {
      title: "Fuera del trabajo",
      items: [
        {
          title: "Familia",
          line: "l1",
          text: "Vengo de una familia grande y unida, y soy el menor de los hermanos. Tres de mis sobrinos viven en Estados Unidos y voy seguido a verlos. Estoy casado con Valeria.",
        },
        {
          title: "Fútbol",
          line: "l5",
          text: "Juego fútbol desde siempre y veo el deporte que me pongan. Hincha de Unión Española.",
        },
        {
          title: "Viajes",
          line: "l4",
          text: "Es lo que más hago. Siempre hay un próximo viaje en el calendario.",
        },
      ],
    },
    contact: {
      title: "Contacto",
      text: "Si quieres conversar sobre trabajo, un proyecto o un problema que tengas, escríbeme.",
      copy: "Copiar correo",
      copied: "Copiado",
    },
    footer: "Hecho por mí, con ayuda de Claude.",
  },
  en: {
    meta: {
      title: "Álvaro Cabreira",
      description:
        "Product Owner at LATAM Airlines. Industrial engineer. Side projects and a bit about my life.",
    },
    nav: { work: "Work", projects: "Projects", life: "Outside work", contact: "Contact" },
    langSwitch: { label: "ES", href: "/" },
    hero: {
      hello: "Hi, I'm Álvaro.",
      lead: "I work as a Product Owner at LATAM Airlines. Outside work I build things to solve problems I run into. Here are a few.",
      cv: "Download CV",
      email: "Email",
    },
    work: {
      title: "Route so far",
      intro: "Industrial engineer, specialized in transportation.",
      stops: [
        {
          name: "Industrial Engineering, UC",
          years: "2016–2022",
          text: "Pontificia Universidad Católica de Chile. Specialization in Transportation Engineering.",
        },
        {
          name: "Technologyhem",
          years: "2021–2023",
          text: "Consulting analyst. I built data solutions on Google Cloud, BigQuery and Looker Studio, and mapped processes and requirements for technical teams.",
        },
        {
          name: "LATAM Airlines",
          years: "2023–now",
          now: true,
          text: "I work on baggage. My team builds digital tools so bags don't get lost on short connections, and so getting them back is faster and clearer when they do. I spend time on the ramp with operators, look at the data and decide what to build. The first product cut mishandled bags on aircraft-to-aircraft connections by 30%, and it's now the base for digitizing other ramp processes.",
        },
      ],
    },
    projects: {
      title: "Side projects",
      intro: "Things I've built outside work. Some work, others are still on their way.",
      labels: { why: "Why", did: "What I did", learned: "What I learned", next: "What's next" },
      items: [
        {
          id: "jobit",
          name: "JobIt",
          line: "l4",
          mark: "J",
          status: "2026 · launched",
          live: true,
          what: "A CV advisor for Chile. It shows what your CV is missing by quoting your own lines, rewrites it without making things up, and tailors it to each job post.",
          why: "Most CVs in Chile describe the role, not what the person achieved. And when you finish university, nobody explains how to tell your experience.",
          did: "I defined the product and business model, and built it with Claude Code: Next.js, Postgres, the Claude API and Mercado Pago.",
          learned: "A rule written in the prompt isn't enough. It has to live in the code.",
          links: jobitLinks,
        },
        {
          id: "cmr",
          name: "CMR Calculator",
          line: "l2",
          mark: "C",
          status: "Aug 2026 · live",
          live: true,
          what: "Helps decide whether to redeem your CMR points now or wait for the new format.",
          why: "Watching a livestream, I noticed people didn't know what to do with their points before the change. It was really a math problem.",
          did: "I built it with AI without ever having deployed a website or used Git. More than 10,000 people have used it.",
          learned: "Check assumptions against the official source before publishing.",
          links: cmrLinks,
        },
        {
          id: "flujo-cero",
          name: "Flujo Cero",
          line: "l5",
          mark: "F",
          status: "Aug 2026 · personal use",
          live: true,
          what: "Finds which apartments in Chile actually pay off as an investment, with every number traceable to its source.",
          why: "I wanted to buy an apartment to rent out, and the published yields didn't survive basic arithmetic.",
          did: "Every week it checks about 2,700 apartments against more than 5,200 rentals across 384 micro-areas, and emails me a report.",
          learned: "Half the value is in cleaning the data: duplicate listings, seasonal rentals, units already sold.",
          links: [],
        },
        {
          id: "mercado-publico",
          name: "Mercado Público",
          line: "l6",
          mark: "M",
          status: "Aug 2026 · active",
          live: true,
          what: "Open data on Chilean government purchases, to see case by case where the State pays different prices for the same thing.",
          why: "People often say public procurement is broken, almost always without showing the data.",
          did: "I analyzed about 23,000 items from over 1,500 agencies. My savings estimate matched an official commission's, using a different method.",
          learned: "Telling a real finding apart from a data error.",
          links: [],
        },
        {
          id: "pulso-digital",
          name: "Pulso Digital",
          line: "l3",
          mark: "P",
          status: "Jul 2026 · paused",
          live: false,
          what: "Tracks the social media of 49 Chilean legislators every week, building the history TikTok and Instagram don't show.",
          why: "Social networks only show a snapshot. The value is in collecting those snapshots over time.",
          did: "I built it in a week and it runs on its own every week.",
          learned: "Building was the easy part. The hard part is validating that someone needs it.",
          links: [],
        },
        {
          id: "finanzas",
          name: "Personal finance",
          line: "l4a",
          mark: "$",
          status: "2026 · in preparation",
          live: false,
          what: "Coaching to organize your spending, save, and understand the basics of investing.",
          why: "I built a system for my household finances that worked, and wanted to share it with people who are just starting to earn their own money.",
          did: "Three classes, a spreadsheet that adapts to each person, and follow-up sessions.",
          next: "Testing it with the first users.",
          links: [],
        },
      ],
    },
    life: {
      title: "Outside work",
      items: [
        {
          title: "Family",
          line: "l1",
          text: "I come from a big, close family, and I'm the youngest of my siblings. Three of my nephews and nieces live in the United States and I visit them often. I'm married to Valeria.",
        },
        {
          title: "Football",
          line: "l5",
          text: "I've played football all my life and I'll watch any sport that's on. Unión Española fan.",
        },
        {
          title: "Travel",
          line: "l4",
          text: "It's what I do most. There's always a next trip on the calendar.",
        },
      ],
    },
    contact: {
      title: "Contact",
      text: "If you want to talk about work, a project or a problem you have, write to me.",
      copy: "Copy email",
      copied: "Copied",
    },
    footer: "Made by me, with help from Claude.",
  },
};
