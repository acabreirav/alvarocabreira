// Todo el texto del sitio vive aquí, en español e inglés.
// Para cambiar algo, edita este archivo y haz push: Vercel publica solo.

export type Locale = "es" | "en";

// Colores de las líneas del Metro de Santiago, usados como color de cada proyecto.
export type Line = "l1" | "l2" | "l3" | "l4" | "l4a" | "l5" | "l6";

export type Link = { label: string; href: string };

export type Photo = { src: string; alt: string; caption: string; width: number; height: number };

export type Stop = {
  name: string;
  years: string;
  text: string;
  now?: boolean;
  photos?: Photo[];
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
  found?: string;
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
    labels: { why: string; did: string; found: string; learned: string; next: string };
    items: Project[];
  };
  life: { title: string; items: Personal[]; photos: Photo[] };
  contact: { title: string; text: string; copy: string; copied: string };
  footer: string;
};

export const site = {
  name: "Álvaro Cabreira",
  url: "https://alvarocabreira.com",
  email: "a.cabreira.v@gmail.com",
  linkedin: "https://www.linkedin.com/in/alvaro-cabreira/",
  cv: "/cv-alvaro-cabreira.pdf",
  // Foto principal. Las fotos viven en /public/fotos.
  photo: "/fotos/retrato.jpg" as string | null,
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
          photos: [
            { src: "/fotos/avion.jpg", width: 720, height: 615, alt: "Álvaro con chaleco reflectante frente al motor de un avión en la losa", caption: "En la losa de Guarulhos, São Paulo" },
            { src: "/fotos/rampa.jpg", width: 720, height: 580, alt: "Operadores cargando maletas en una camioneta junto a una manga del aeropuerto", caption: "Trabajo en rampa" },
            { src: "/fotos/equipaje.jpg", width: 720, height: 536, alt: "Álvaro y dos colegas revisando maletas en la zona de equipaje", caption: "Revisando equipaje con el equipo" },
          ],
          text: "Trabajo en equipaje. Con mi equipo diseñamos herramientas digitales para que las maletas no se pierdan en conexiones cortas, y para que recuperarlas sea más rápido y claro cuando pasa. Paso tiempo en rampa con los operadores, miro los datos y priorizo qué construir. El primer producto bajó en 30% los equipajes extraviados en conexiones avión a avión, y hoy es la base para digitalizar otros procesos de rampa.",
        },
      ],
    },
    projects: {
      title: "Proyectos propios",
      intro: "Cosas que he armado fuera del trabajo. Algunas funcionan, otras siguen en camino.",
      labels: { why: "Por qué", did: "Qué hice", found: "Resultados", learned: "Lo que aprendí", next: "Lo que viene" },
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
          did: "Definí el producto, el modelo de negocio y la experiencia, y lo construí con Claude Code: diagnóstico, reescritura, CV desde cero, CV adaptado a cada aviso con carta, seguimiento de postulaciones y pago con Mercado Pago.",
          learned: "A llevar solo un producto completo a producción: login, pagos, correos, 30 suites de tests y una evaluación de la IA con CVs reales. Y que las reglas críticas, como no inventar cifras, hay que verificarlas en el código; escribirlas en el prompt no basta.",
          links: jobitLinks,
        },
        {
          id: "finanzas",
          name: "Asesoría de finanzas personales",
          line: "l4a",
          mark: "$",
          status: "Desde fines de 2025 · más de 10 clientes",
          live: true,
          what: "Enseño a ordenar las finanzas personales: llevar el registro de los gastos, ahorrar y entender lo básico de invertir, con consejos prácticos para empezar.",
          why: "Mucha gente pasa de un día para otro a manejar su propia plata, sin ninguna herramienta. Con lo que ganan no deberían tener problemas, pero sin orden terminan teniéndolos. Yo había armado un sistema para las finanzas de mi casa que me funcionaba, y quise compartirlo.",
          did: "Una asesoría pagada en tres módulos, que normalmente cubro en una o dos clases: presupuesto y registro de gastos, ahorro y fondo de emergencia, e introducción a la inversión. Cada persona se lleva una planilla adaptada a sus prioridades. Los clientes llegan casi todos por recomendación.",
          found: "Casi todos hicieron su primer ahorro fuera de un depósito a plazo, y quienes adoptaron la planilla llevan hoy el registro completo de sus gastos.",
          learned: "Que el problema casi nunca es cuánto gana la persona, sino el orden. La planilla es el centro de la asesoría, pero no a todos les acomoda: algunos aprovechan más los consejos prácticos de ahorro e inversión, así que adapto cada asesoría a la persona.",
          links: [],
        },
        {
          id: "cmr",
          name: "Calculadora CMR",
          line: "l2",
          mark: "C",
          status: "Ago 2026 · publicada",
          live: true,
          what: "Ayuda a decidir si canjear tus puntos CMR hoy o esperar el nuevo formato, y te muestra tu punto de equilibrio.",
          why: "Viendo un live, noté que la gente no sabía qué hacer con sus puntos ante el cambio. En el fondo era un problema de cálculo.",
          did: "La armé con IA en pocos días y la validé contra la comunicación oficial del banco. Más de 10.000 personas la han usado.",
          learned: "Fue mi primer proyecto en producción con usuarios reales. Aprendí a publicar una aplicación de punta a punta: repositorio en GitHub, despliegue automático en Vercel, dominio, imagen para compartir en redes y analítica para medir el uso.",
          links: cmrLinks,
        },
        {
          id: "flujo-cero",
          name: "Flujo Cero",
          line: "l5",
          mark: "F",
          status: "Ago 2026 · uso personal",
          live: true,
          what: "Busca qué departamentos en Chile rinden de verdad como inversión, con cada número rastreable hasta su fuente.",
          why: "Quería invertir en un departamento y los rendimientos publicados no resistían la aritmética.",
          did: "Un sistema que cada semana revisa unos 2.700 departamentos contra más de 5.200 arriendos reales en 384 microzonas, estima el arriendo con un modelo propio y me manda un informe con el ranking.",
          found: "Los rankings por comuna esconden diferencias de hasta 17% entre barrios vecinos, y muchos rendimientos publicados usan arriendos estimados sin comparables reales.",
          learned: "A construir un modelo de precios con 5,7% de error mediano y un pipeline que corre solo. La mitad del trabajo fue limpiar datos: detectar avisos repetidos, arriendos de temporada y departamentos ya vendidos.",
          links: [],
        },
        {
          id: "mercado-publico",
          name: "Mercado Público",
          line: "l6",
          mark: "M",
          status: "Ago 2026 · activo",
          live: true,
          what: "Herramientas para explorar las compras del Estado y ver, caso a caso, dónde se paga distinto por el mismo producto.",
          why: "Se dice mucho que las compras públicas están rotas, casi siempre sin mostrar los datos.",
          did: "Crucé unos 23.000 ítems comprados por más de 1.500 organismos públicos usando datos abiertos, y armé un comparador de precios y un estimador de ahorro.",
          found: "Si el Estado coordinara mejor sus compras, podría ahorrar entre 1,7% y 4,8%. Una comisión oficial llegó a 1,5–2,5% con otro método. También apareció un supuesto ahorro de 51% que en realidad mezclaba productos distintos bajo una misma categoría.",
          learned: "A trabajar con datos públicos grandes y desordenados: normalizar productos, controlar por región y mes, y revisar cada cifra llamativa antes de creerla.",
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
          did: "En una semana pasé de 3 cuentas de prueba a 52 legisladores, con 8 métricas (crecimiento, engagement, alertas) y un panel que compara gobierno y oposición. Se actualiza solo cada semana.",
          learned: "A automatizar la recolección de datos con scrapers y GitHub Actions. Y que construir era la parte fácil: lo pausé para validar primero si alguien lo necesita antes de seguir.",
          links: [],
        },
      ],
    },
    life: {
      title: "Fuera del trabajo",
      photos: [
        { src: "/fotos/amsterdam.jpg", width: 1280, height: 720, alt: "Álvaro y Valeria en un puente sobre un canal de Ámsterdam", caption: "Con Valeria en Ámsterdam" },
        { src: "/fotos/buzios.jpg", width: 960, height: 1280, alt: "Álvaro con traje de buceo en el mar, haciendo el gesto shaka", caption: "Buceando en Búzios, Brasil" },
        { src: "/fotos/trekking.jpg", width: 720, height: 536, alt: "Álvaro y Valeria de trekking entre araucarias, con un volcán nevado al fondo", caption: "Con Valeria en Conguillío" },
        { src: "/fotos/ny-calabazas.jpg", width: 1280, height: 853, alt: "Valeria besando una calabaza que Álvaro sostiene frente a su cara, con árboles de otoño de fondo", caption: "Apple y pumpkin picking en Nueva York" },
        { src: "/fotos/brandreth.jpg", width: 967, height: 1280, alt: "Álvaro haciendo una parada de manos sobre una roca junto a un lago con árboles de otoño", caption: "Parada de manos en Brandreth, Nueva York" },
        { src: "/fotos/futbol.jpg", width: 840, height: 578, alt: "Álvaro con camiseta blanca conduciendo el balón en un partido", caption: "Jugando en la LICOOF, 2021. Foto: @deportefotografo" },
        { src: "/fotos/sobrino.jpg", width: 720, height: 1220, alt: "Álvaro sosteniendo a su sobrino bebé, que sonríe con los pies en una piscina", caption: "Con uno de mis sobrinos" },
        { src: "/fotos/gata.jpg", width: 720, height: 720, alt: "Gata tricolor durmiendo sobre un escritorio frente al computador", caption: "Mili, compañera de home office" },
      ],
      items: [
        {
          title: "Familia",
          line: "l1",
          text: "Estoy casado con Valeria, una mujer maravillosa. Vengo de una familia grande y muy unida, donde soy el menor de los hermanos. Parte de la familia vive en Estados Unidos, pero seguimos muy cerca y nos vemos seguido.",
        },
        {
          title: "Deporte",
          line: "l5",
          text: "El fútbol me acompaña desde chico y lo sigo jugando cada vez que puedo. Veo casi cualquier deporte que esté dando, y soy hincha de Unión Española en las buenas y en las malas.",
        },
        {
          title: "Viajes y buena mesa",
          line: "l4",
          text: "Viajar y salir a comer son mis dos grandes gustos, y ahí se va buena parte de mi presupuesto de ocio. Siempre tengo un próximo viaje o un restaurante nuevo en la lista.",
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
          photos: [
            { src: "/fotos/avion.jpg", width: 720, height: 615, alt: "Álvaro in a high-visibility vest in front of an aircraft engine on the apron", caption: "On the apron at Guarulhos, São Paulo" },
            { src: "/fotos/rampa.jpg", width: 720, height: 580, alt: "Ground staff loading bags into a truck next to a jet bridge", caption: "Working on the ramp" },
            { src: "/fotos/equipaje.jpg", width: 720, height: 536, alt: "Álvaro and two colleagues checking bags in the baggage area", caption: "Checking bags with the team" },
          ],
          text: "I work on baggage. My team builds digital tools so bags don't get lost on short connections, and so getting them back is faster and clearer when they do. I spend time on the ramp with operators, look at the data and decide what to build. The first product cut mishandled bags on aircraft-to-aircraft connections by 30%, and it's now the base for digitizing other ramp processes.",
        },
      ],
    },
    projects: {
      title: "Side projects",
      intro: "Things I've built outside work. Some work, others are still on their way.",
      labels: { why: "Why", did: "What I did", found: "Results", learned: "What I learned", next: "What's next" },
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
          did: "I defined the product, the business model and the experience, and built it with Claude Code: diagnosis, rewriting, CV from scratch, CV tailored to each post with a cover letter, application tracking and payments with Mercado Pago.",
          learned: "How to take a complete product to production on my own: login, payments, emails, 30 test suites and an AI evaluation with real CVs. And that critical rules, like never inventing numbers, have to be enforced in code; writing them in the prompt isn't enough.",
          links: jobitLinks,
        },
        {
          id: "finanzas",
          name: "Personal finance coaching",
          line: "l4a",
          mark: "$",
          status: "Since late 2025 · 10+ clients",
          live: true,
          what: "I teach people to get their personal finances in order: track their spending, save, and understand the basics of investing, with practical tips to get started.",
          why: "Many people go from one day to the next to managing their own money, with no tools at all. With what they earn they shouldn't be in trouble, but without order they end up there. I had built a system for my household finances that worked, and wanted to share it.",
          did: "Paid coaching in three modules that I usually cover in one or two sessions: budgeting and expense tracking, saving and emergency funds, and an introduction to investing. Each person gets a spreadsheet adapted to their priorities. Almost all clients come through referrals.",
          found: "Almost all of them made their first savings outside a term deposit, and those who adopted the spreadsheet now track all their expenses.",
          learned: "The problem is rarely how much someone earns; it's the lack of order. The spreadsheet is the core of the coaching, but it doesn't suit everyone: some get more out of the practical saving and investing tips, so I adapt each session to the person.",
          links: [],
        },
        {
          id: "cmr",
          name: "CMR Calculator",
          line: "l2",
          mark: "C",
          status: "Aug 2026 · live",
          live: true,
          what: "Helps decide whether to redeem your CMR points now or wait for the new format, and shows your break-even point.",
          why: "Watching a livestream, I noticed people didn't know what to do with their points before the change. It was really a math problem.",
          did: "I built it with AI in a few days and checked it against the bank's official communication. More than 10,000 people have used it.",
          learned: "It was my first project in production with real users. I learned to ship an application end to end: GitHub repository, automatic deploys on Vercel, domain, social sharing image and analytics to measure usage.",
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
          did: "A system that every week checks about 2,700 apartments against more than 5,200 real rentals across 384 micro-areas, estimates rent with its own model and emails me a ranked report.",
          found: "Rankings by district hide gaps of up to 17% between neighboring areas, and many published yields rely on estimated rents with no real comparables.",
          learned: "How to build a pricing model with a 5.7% median error and a pipeline that runs on its own. Half the work was cleaning data: catching duplicate listings, seasonal rentals and units already sold.",
          links: [],
        },
        {
          id: "mercado-publico",
          name: "Mercado Público",
          line: "l6",
          mark: "M",
          status: "Aug 2026 · active",
          live: true,
          what: "Tools to explore Chilean government purchases and see, case by case, where the State pays different prices for the same product.",
          why: "People often say public procurement is broken, almost always without showing the data.",
          did: "I matched about 23,000 items bought by more than 1,500 public agencies using open data, and built a price comparison tool and a savings estimator.",
          found: "Better coordinated purchasing could save the State between 1.7% and 4.8%. An official commission reached 1.5–2.5% with a different method. A supposed 51% saving turned out to be mixing different products under one category.",
          learned: "How to work with large, messy public data: normalizing products, controlling for region and month, and checking every striking number before trusting it.",
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
          did: "In one week I went from 3 test accounts to 52 legislators, with 8 metrics (growth, engagement, alerts) and a dashboard comparing government and opposition. It updates itself every week.",
          learned: "How to automate data collection with scrapers and GitHub Actions. And that building was the easy part: I paused it to validate whether anyone needs it before going further.",
          links: [],
        },
      ],
    },
    life: {
      title: "Outside work",
      photos: [
        { src: "/fotos/amsterdam.jpg", width: 1280, height: 720, alt: "Álvaro and Valeria on a bridge over an Amsterdam canal", caption: "With Valeria in Amsterdam" },
        { src: "/fotos/buzios.jpg", width: 960, height: 1280, alt: "Álvaro in a wetsuit in the sea, making a shaka sign", caption: "Diving in Búzios, Brazil" },
        { src: "/fotos/trekking.jpg", width: 720, height: 536, alt: "Álvaro and Valeria hiking among araucaria trees, with a snowy volcano behind", caption: "With Valeria in Conguillío" },
        { src: "/fotos/ny-calabazas.jpg", width: 1280, height: 853, alt: "Valeria kissing a pumpkin Álvaro holds in front of his face, with autumn trees behind", caption: "Apple and pumpkin picking in New York" },
        { src: "/fotos/brandreth.jpg", width: 967, height: 1280, alt: "Álvaro doing a handstand on a rock by a lake with autumn trees", caption: "Handstand at Brandreth, New York" },
        { src: "/fotos/futbol.jpg", width: 840, height: 578, alt: "Álvaro in a white shirt dribbling the ball during a match", caption: "Playing in the LICOOF league, 2021. Photo: @deportefotografo" },
        { src: "/fotos/sobrino.jpg", width: 720, height: 1220, alt: "Álvaro holding his baby nephew, who smiles with his feet in a pool", caption: "With one of my nephews" },
        { src: "/fotos/gata.jpg", width: 720, height: 720, alt: "Calico cat asleep on a desk in front of a computer", caption: "Mili, my work-from-home companion" },
      ],
      items: [
        {
          title: "Family",
          line: "l1",
          text: "I'm married to Valeria, a wonderful woman. I come from a big, close family, where I'm the youngest of my siblings. Part of the family lives in the United States, but we stay very close and see each other often.",
        },
        {
          title: "Sports",
          line: "l5",
          text: "Football has been with me since I was a kid and I still play whenever I can. I'll watch almost any sport that's on, and I support Unión Española through good times and bad.",
        },
        {
          title: "Travel and good food",
          line: "l4",
          text: "Traveling and eating out are my two big pleasures, and they take a good share of my leisure budget. There's always a next trip or a new restaurant on my list.",
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
