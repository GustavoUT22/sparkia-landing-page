import type { IconName } from "@/components/Icon";

import type { CourseId } from "./courses";

export type LandingSlug =
  | "kids-scratch-videojuegos"
  | "teens-python-mini-rpg"
  | "universitarios-logica-algoritmos"
  | "taller-ia-videojuegos-kids"
  | "clases-particulares-programacion";

export type FaqItem = { q: string; a: string };

export type LandingPrice = { label: string; amount: number; detail: string };

export type LandingSession = { title: string; result: string };

export type LandingLink = { href: string; label: string; text: string };

export type CourseLanding = {
  slug: LandingSlug;
  path: string;
  visual: CourseId;
  tone: "warm" | "cyan" | "navy" | "violet";
  breadcrumb: string;
  courseName: string;
  seo: { title: string; description: string; ogTitle: string; ogEyebrow: string };
  eyebrow: string;
  h1: string;
  lead: string;
  pills: { icon: IconName; label: string }[];
  intro: { heading: string; paragraphs: string[] };
  audience: { heading: string; items: string[] };
  objectives: { heading: string; items: string[] };
  syllabus: { heading: string; note?: string; sessions: LandingSession[] };
  project?: { heading: string; text: string; items: string[] };
  format: { heading: string; items: { icon: IconName; label: string; value: string }[]; note?: string };
  requirements: { heading: string; items: string[] };
  price: { heading: string; options: LandingPrice[]; fallback?: string; note: string };
  certificate: { heading: string; text: string };
  faqs: FaqItem[];
  cta: { heading: string; text: string; button: string; whatsappMessage: string };
  related: LandingLink[];
  schema: {
    educationalLevel: string;
    audience: string;
    workload?: string;
    teaches: string[];
  };
};

const notOfficial =
  "Es un certificado de finalización emitido por Sparkia Academy; no es un título ni un certificado oficial del Ministerio de Educación ni de otra entidad.";

export const landings: CourseLanding[] = [
  {
    slug: "kids-scratch-videojuegos",
    path: "/cursos/kids-scratch-videojuegos",
    visual: "kids",
    tone: "warm",
    breadcrumb: "Kids: videojuegos con Scratch",
    courseName: "Crea tu primer videojuego con Scratch",
    seo: {
      title: "Curso de videojuegos para niños con Scratch online",
      description:
        "Clases de programación para niños de 8 a 12 años: tu hijo crea su propio videojuego con Scratch. Online en vivo, fines de semana, máximo 8 alumnos.",
      ogTitle: "Curso de videojuegos para niños con Scratch",
      ogEyebrow: "Kids · 8 a 12 años",
    },
    eyebrow: "Programa Kids · 8 a 12 años",
    h1: "Clases de programación para niños: tu hijo crea su primer videojuego con Scratch",
    lead:
      "Un curso de videojuegos para niños, online y en vivo, en el que tu hijo pasa de jugar a crear su propio juego con personajes, puntaje y vidas, acompañado en un grupo de máximo 8 alumnos.",
    pills: [
      { icon: "calendar", label: "4 semanas" },
      { icon: "clock", label: "8 sesiones de 1 hora" },
      { icon: "calendar", label: "Sábados y domingos" },
      { icon: "group", label: "Máximo 8 alumnos" },
    ],
    intro: {
      heading: "Scratch para niños: aprender a programar creando videojuegos",
      paragraphs: [
        "Scratch es un lenguaje de programación gratuito en el que se arma el código uniendo bloques de colores. Así tu hijo se concentra en pensar cómo funciona su juego, sin pelear con la ortografía del código, y ve el resultado en pantalla desde la primera clase.",
        "Cada sesión tiene una meta concreta: mover un personaje, agregar obstáculos, contar puntos, crear pantallas de inicio y fin. Al terminar las 8 clases, tu hijo tiene un videojuego propio que puede jugar, mejorar y mostrar a la familia en una feria de juegos final.",
        "Es una forma de crear videojuegos para niños online, desde casa y sin traslados: las clases son por Google Meet los fines de semana, con un instructor que explica en vivo y acompaña a cada alumno mientras construye.",
      ],
    },
    audience: {
      heading: "¿Para quién es este curso?",
      items: [
        "Niñas y niños de 8 a 12 años a quienes les gustan los videojuegos y quieren saber cómo se hacen.",
        "Alumnos que empiezan desde cero: no se necesita experiencia previa en programación.",
        "Familias que buscan que el tiempo frente a la pantalla sea para crear y resolver retos, no solo para consumir.",
        "Niños que leen con fluidez y ya usan mouse y teclado con soltura.",
      ],
    },
    objectives: {
      heading: "Qué aprenderá tu hijo",
      items: [
        "Crear un juego con personajes que se controlan con el teclado.",
        "Usar eventos, bucles y condicionales para la lógica del juego.",
        "Usar variables para llevar el puntaje y las vidas.",
        "Presentar y explicar con sus palabras el juego que construyó.",
      ],
    },
    syllabus: {
      heading: "Temario: 8 sesiones, un resultado en cada una",
      sessions: [
        { title: "Conociendo Scratch", result: "Un personaje animado en pantalla." },
        { title: "Eventos y movimiento", result: "El personaje se controla con el teclado." },
        { title: "Bucles y condicionales", result: "Obstáculos y choques dentro del juego." },
        { title: "Variables", result: "Puntaje y vidas que cambian al jugar." },
        { title: "Clones", result: "Objetos y enemigos que aparecen solos." },
        { title: "Mensajes y escenas", result: "Pantallas de inicio y de fin." },
        {
          title: "Sonido, diseño e IA",
          result: "Juego pulido y un personaje que reacciona a un gesto, de forma opcional.",
        },
        { title: "Feria de juegos", result: "Presentación del juego a madres, padres y tutores." },
      ],
    },
    project: {
      heading: "Proyecto final: su propio videojuego",
      text: "Cada alumno termina el curso con un juego creado por él o ella, que puede seguir mejorando en casa.",
      items: ["Personajes controlados con el teclado", "Puntaje y vidas", "Pantalla de inicio y “game over”"],
    },
    format: {
      heading: "Cómo son las clases",
      items: [
        { icon: "message", label: "Modalidad", value: "Online en vivo por Google Meet" },
        { icon: "calendar", label: "Días", value: "Sábados y domingos durante 4 semanas" },
        { icon: "clock", label: "Duración", value: "8 sesiones de 1 hora" },
        { icon: "group", label: "Grupo", value: "Máximo 8 alumnos" },
      ],
      note: "Si tu hijo falta a una clase, te enviamos un video corto del instructor con la demostración de esa sesión. Los alumnos nunca son grabados. El horario de cada grupo se confirma por WhatsApp.",
    },
    requirements: {
      heading: "Qué necesita tu hijo",
      items: [
        "Una computadora o laptop (no tablet) con internet estable.",
        "Micrófono; la cámara es opcional.",
        "Una cuenta gratuita de Scratch creada por el padre, madre o tutor, porque los menores de 13 años necesitan el correo de un adulto.",
        "Leer con fluidez y usar mouse y teclado.",
      ],
    },
    price: {
      heading: "Precio referencial",
      options: [{ label: "Curso completo", amount: 150, detail: "8 clases en vivo · 4 semanas" }],
      note: "Precio referencial; el precio final y el horario se confirman por WhatsApp antes del pago. El grupo se abre con un mínimo de 4 inscritos con pago confirmado.",
    },
    certificate: {
      heading: "Certificado de finalización",
      text: `Tu hijo recibe un certificado digital si asiste al menos a 6 de las 8 clases y presenta su proyecto final. ${notOfficial}`,
    },
    faqs: [
      {
        q: "¿Mi hijo necesita saber programar antes?",
        a: "No. El curso empieza desde cero. Basta con que lea con fluidez y use mouse y teclado.",
      },
      {
        q: "¿Puede llevar el curso desde una tablet?",
        a: "No. Para crear el juego con comodidad se necesita una computadora o laptop. Si solo tienen tablet, te lo decimos con honestidad antes de inscribirse.",
      },
      {
        q: "¿Cómo se usa la inteligencia artificial en el curso?",
        a: "En la sesión 7 el alumno puede hacer que su personaje reaccione a un gesto usando Teachable Machine, una herramienta gratuita de Google que funciona en el navegador y no pide cuenta. No usamos chatbots. Es opcional: si la computadora no tiene cámara, el alumno sigue con sonido y diseño sin afectar su resultado.",
      },
      {
        q: "¿Cómo me entero del avance de mi hijo?",
        a: "Toda la comunicación es contigo, el padre, madre o tutor, por WhatsApp. Al final te invitamos a la feria de juegos para que veas lo que construyó.",
      },
      {
        q: "¿Graban las clases?",
        a: "No grabamos a los alumnos. Si tu hijo falta, te enviamos un video corto grabado solo por el instructor con la demostración de la sesión.",
      },
      {
        q: "¿Puedo probar antes de pagar?",
        a: "Sí. Puedes reservar una clase demostrativa gratis por WhatsApp; si el alumno es menor de edad, pedimos que un adulto esté presente.",
      },
    ],
    cta: {
      heading: "Reserva una clase demostrativa gratis",
      text: "Cuéntanos la edad de tu hijo y resolvemos tus dudas sobre horarios, requisitos y fechas del próximo grupo.",
      button: "Consultar por el curso Kids",
      whatsappMessage:
        "Hola, quisiera información sobre el curso de videojuegos con Scratch para mi hijo (8 a 12 años) y la clase demostrativa gratis.",
    },
    related: [
      {
        href: "/cursos/taller-ia-videojuegos-kids",
        label: "Taller de videojuegos con inteligencia artificial",
        text: "Una introducción de 2 sesiones para niños de 8 a 12 años.",
      },
      {
        href: "/guias/a-que-edad-puede-un-nino-empezar-a-programar",
        label: "¿A qué edad puede un niño empezar a programar?",
        text: "Guía para madres y padres.",
      },
      {
        href: "/guias/scratch-o-python-con-que-empezar",
        label: "Scratch o Python: ¿con qué debería empezar mi hijo?",
        text: "Cómo elegir según su edad y experiencia.",
      },
    ],
    schema: {
      educationalLevel: "Principiante",
      audience: "Niños de 8 a 12 años",
      workload: "PT8H",
      teaches: ["Programación con Scratch", "Lógica de programación", "Creación de videojuegos"],
    },
  },
  {
    slug: "teens-python-mini-rpg",
    path: "/cursos/teens-python-mini-rpg",
    visual: "teens",
    tone: "cyan",
    breadcrumb: "Teens: Python y mini-RPG",
    courseName: "Python desde cero: crea tu mini-RPG",
    seo: {
      title: "Python para adolescentes: crea tu videojuego RPG online",
      description:
        "Programación de videojuegos para adolescentes de 13 a 17 años: tu hijo aprende Python desde cero y crea su mini-RPG. Online en vivo, máximo 8 alumnos.",
      ogTitle: "Python para adolescentes: crea tu mini-RPG",
      ogEyebrow: "Teens · 13 a 17 años",
    },
    eyebrow: "Programa Teens · 13 a 17 años",
    h1: "Python para adolescentes: programación de videojuegos desde cero con un mini-RPG",
    lead:
      "Tu hijo o hija aprende un lenguaje real, Python, y lo usa para construir su propio videojuego de rol con mapa, personajes, objetos y decisiones. Clases online en vivo, en un grupo de máximo 8 alumnos.",
    pills: [
      { icon: "calendar", label: "4 semanas" },
      { icon: "clock", label: "8 sesiones de 1 hora" },
      { icon: "calendar", label: "Sábados y domingos" },
      { icon: "code", label: "Desde cero" },
    ],
    intro: {
      heading: "Aprender a programar creando videojuegos, con un lenguaje real",
      paragraphs: [
        "Python es un lenguaje gratuito y muy usado, con una escritura clara que lo hace ideal para empezar. En este curso no se aprende teoría suelta: cada concepto se usa enseguida para darle vida a un juego.",
        "Primero tu hijo crea una aventura de texto con decisiones, luego un inventario y un combate por turnos, y después pasa a Pygame para tener una ventana, un personaje que se mueve con el teclado y un mapa con paredes. Al final presenta su mini-RPG terminado.",
        "También aprende a usar la inteligencia artificial como apoyo para encontrar errores en su código, con una regla clara: entender la corrección, no copiarla.",
      ],
    },
    audience: {
      heading: "¿Para quién es este curso?",
      items: [
        "Adolescentes de 13 a 17 años que juegan videojuegos y quieren crear uno propio.",
        "Alumnos sin experiencia previa en programación.",
        "Quienes ya probaron Scratch y quieren pasar a escribir código de verdad.",
        "Familias que buscan una actividad con un resultado concreto y útil para explorar una posible carrera.",
      ],
    },
    objectives: {
      heading: "Qué aprenderá tu hijo o hija",
      items: [
        "Usar variables, condicionales, bucles, listas y funciones en Python.",
        "Construir un juego con bucle principal, entrada por teclado y colisiones.",
        "Organizar un programa en funciones reutilizables.",
        "Presentar y explicar su propio mini-RPG.",
        "Usar la IA como apoyo para encontrar errores, entendiendo la corrección en lugar de copiarla.",
      ],
    },
    syllabus: {
      heading: "Temario: 8 sesiones, un resultado en cada una",
      sessions: [
        { title: "Instalación y primeros pasos", result: "Un programa que saluda y pide datos al jugador." },
        { title: "Condicionales y bucles", result: "Una aventura de texto con decisiones." },
        { title: "Listas y diccionarios", result: "Inventario y estadísticas del personaje." },
        { title: "Funciones", result: "Combate por turnos en la consola." },
        { title: "Pygame: ventana y game loop", result: "Un personaje que se mueve con el teclado." },
        {
          title: "Mapa, colisiones y depuración con IA",
          result: "Un mapa con paredes y un error encontrado y explicado por el alumno.",
        },
        { title: "NPC, objetos y llaves", result: "Diálogos, objetos para recoger y una puerta que se abre." },
        { title: "Proyecto final", result: "Presentación del mini-RPG terminado." },
      ],
    },
    project: {
      heading: "Proyecto final: su propio mini-RPG",
      text: "Un videojuego de rol pequeño pero completo, hecho por tu hijo o hija, que puede seguir ampliando después del curso.",
      items: ["Mapa y personaje", "Al menos un NPC con diálogo", "Objetos e inventario", "Una condición de victoria"],
    },
    format: {
      heading: "Cómo son las clases",
      items: [
        { icon: "message", label: "Modalidad", value: "Online en vivo por Google Meet" },
        { icon: "calendar", label: "Días", value: "Sábados y domingos durante 4 semanas" },
        { icon: "clock", label: "Duración", value: "8 sesiones de 1 hora" },
        { icon: "group", label: "Grupo", value: "Máximo 8 alumnos" },
      ],
      note: "Antes del curso enviamos una guía de instalación. Si el alumno falta, le enviamos al padre o tutor un video corto de repaso grabado por el instructor. Los alumnos nunca son grabados. El horario se confirma por WhatsApp.",
    },
    requirements: {
      heading: "Qué necesita",
      items: [
        "Una computadora con Windows, Mac o Linux en la que se puedan instalar programas.",
        "Internet estable.",
        "Herramientas gratuitas: Python, Thonny (un editor sencillo para principiantes) y Pygame.",
        "Para el bloque de IA: autorización del padre o tutor; si no, el instructor lo muestra compartiendo su pantalla.",
      ],
    },
    price: {
      heading: "Precio referencial",
      options: [{ label: "Curso completo", amount: 150, detail: "8 clases en vivo · 4 semanas" }],
      note: "Precio referencial; el precio final y el horario se confirman por WhatsApp antes del pago. El grupo se abre con un mínimo de 4 inscritos con pago confirmado.",
    },
    certificate: {
      heading: "Certificado de finalización",
      text: `Se entrega un certificado digital a quien asiste al menos a 6 de las 8 clases y presenta su proyecto final. ${notOfficial}`,
    },
    faqs: [
      {
        q: "¿Necesita saber programar antes?",
        a: "No. El curso empieza desde cero. Si ya usó Scratch le será más fácil, pero no es requisito.",
      },
      {
        q: "¿Por qué Python y no otro lenguaje?",
        a: "Porque es un lenguaje real, gratuito y de escritura clara. Lo que aprende (variables, condiciones, bucles, funciones) le sirve después para cualquier otro lenguaje.",
      },
      {
        q: "¿Qué pasa si la instalación falla en nuestra computadora?",
        a: "Antes del curso enviamos una guía de instalación paso a paso y te ayudamos por WhatsApp. La computadora debe permitir instalar programas.",
      },
      {
        q: "¿Mi hijo va a usar chats de inteligencia artificial?",
        a: "Solo en un bloque de la sesión 6 y solo con tu autorización y una herramienta apropiada para su edad según sus términos. Si no, el instructor lo hace compartiendo su pantalla. Nunca se pegan datos personales.",
      },
      {
        q: "¿Con quién se comunica la academia?",
        a: "Con el padre, madre o tutor. La inscripción, los avisos y los reportes de avance van por WhatsApp a un adulto, y los alumnos menores no se agregan a grupos públicos.",
      },
      {
        q: "¿Hay una clase de prueba?",
        a: "Sí. Puedes reservar una clase demostrativa gratis por WhatsApp para que tu hijo o hija vea si le engancha antes de inscribirse.",
      },
    ],
    cta: {
      heading: "Agenda una clase demostrativa gratis",
      text: "Escríbenos y te contamos fechas del próximo grupo, horario y requisitos de la computadora.",
      button: "Consultar por el curso Teens",
      whatsappMessage:
        "Hola, quisiera información sobre el curso de Python y videojuegos (mini-RPG) para mi hijo o hija de 13 a 17 años.",
    },
    related: [
      {
        href: "/cursos/kids-scratch-videojuegos",
        label: "Curso de videojuegos con Scratch para niños",
        text: "Para hermanos menores de 8 a 12 años.",
      },
      {
        href: "/guias/mi-hijo-quiere-crear-videojuegos",
        label: "Mi hijo quiere crear videojuegos: ¿por dónde empezar?",
        text: "Guía para madres y padres.",
      },
      {
        href: "/guias/scratch-o-python-con-que-empezar",
        label: "Scratch o Python: ¿con qué debería empezar mi hijo?",
        text: "Cómo elegir según su edad y experiencia.",
      },
    ],
    schema: {
      educationalLevel: "Principiante",
      audience: "Adolescentes de 13 a 17 años",
      workload: "PT8H",
      teaches: ["Python", "Pygame", "Programación de videojuegos"],
    },
  },
  {
    slug: "universitarios-logica-algoritmos",
    path: "/cursos/universitarios-logica-algoritmos",
    visual: "uni",
    tone: "navy",
    breadcrumb: "Universitarios: lógica y algoritmos",
    courseName: "Lógica de programación y algoritmos",
    seo: {
      title: "Refuerzo de programación para universitarios: algoritmos",
      description:
        "Refuerzo de programación para universitarios de primeros ciclos: lógica, pseudocódigo y algoritmos en Python con práctica tipo examen. Clases online en vivo.",
      ogTitle: "Lógica de programación y algoritmos",
      ogEyebrow: "Universitarios",
    },
    eyebrow: "Para universitarios",
    h1: "Refuerzo de programación para universitarios: lógica y algoritmos",
    lead:
      "Si llevas o repites tu curso introductorio de programación o algoritmos, aquí refuerzas la base: entender el problema, escribir la solución paso a paso y llegar a tu examen con práctica real.",
    pills: [
      { icon: "code", label: "Pseudocódigo y Python" },
      { icon: "target", label: "Práctica tipo examen" },
      { icon: "group", label: "Máximo 8 alumnos" },
      { icon: "calendar", label: "Formato por confirmar" },
    ],
    intro: {
      heading: "Entiende la lógica y el lenguaje deja de ser el problema",
      paragraphs: [
        "Empezamos con pseudocódigo en PSeInt, en español, para que te concentres en la lógica sin pelear con la sintaxis. Luego pasas a Python en un editor del navegador, sin instalaciones que fallen a mitad de clase.",
        "Lo que aprendes (variables, condicionales, bucles, funciones y arreglos) se traslada directamente a Java, C o C++, lenguajes que muchas universidades usan en sus cursos introductorios. Cuando sea útil, te mostramos la equivalencia en el lenguaje de tu curso.",
        "El curso cierra con un examen simulado resuelto y revisado en clase, para que detectes tus vacíos antes de la evaluación real.",
      ],
    },
    audience: {
      heading: "¿Para quién es?",
      items: [
        "Universitarios de primeros ciclos que llevan un curso introductorio de programación o algoritmos.",
        "Quienes repiten el curso y quieren llegar mejor preparados.",
        "Quienes se atrasaron y necesitan ordenar la base antes de parciales o finales.",
        "Solo se necesita manejo básico de la computadora y matemática escolar.",
      ],
    },
    objectives: {
      heading: "Qué aprenderás",
      items: [
        "Escribir en pseudocódigo la solución de un problema a partir de su enunciado (entrada, proceso y salida).",
        "Usar variables, operadores, condicionales, bucles, funciones y listas en Python.",
        "Implementar una búsqueda lineal y un ordenamiento básico y explicar cómo funcionan paso a paso.",
        "Resolver problemas tipo examen dentro de un tiempo límite, con prueba de escritorio.",
      ],
    },
    syllabus: {
      heading: "Temario propuesto",
      note: "Este curso es una propuesta: el temario, el formato y las fechas pueden ajustarse. Consulta horarios por WhatsApp.",
      sessions: [
        { title: "Algoritmos y pseudocódigo", result: "Un algoritmo en PSeInt que lee datos y muestra un resultado." },
        { title: "Variables, tipos y operadores", result: "Calculadora de promedio y conversiones en pseudocódigo." },
        { title: "Condicionales", result: "Un programa que clasifica notas por rango." },
        { title: "Bucles (paso a Python)", result: "Tablas de multiplicar y acumuladores en Python." },
        { title: "Funciones", result: "Un programa dividido en funciones con parámetros y retorno." },
        { title: "Arreglos y listas", result: "Registro de notas con máximo, mínimo y promedio." },
        { title: "Búsqueda y ordenamiento básicos", result: "Búsqueda lineal y ordenamiento burbuja sobre una lista." },
        { title: "Examen simulado", result: "Problemas tipo examen resueltos y revisados en clase." },
      ],
    },
    project: {
      heading: "Proyecto final",
      text: "Terminas con práctica que te sirve para tu curso y un programa propio que puedes explicar.",
      items: [
        "Problemas tipo examen resueltos con prueba de escritorio",
        "Un sistema de notas que registra alumnos, calcula promedios, indica aprobados y ordena o busca resultados",
      ],
    },
    format: {
      heading: "Formato propuesto",
      items: [
        { icon: "message", label: "Modalidad", value: "Online en vivo por Google Meet" },
        { icon: "calendar", label: "Días", value: "Fines de semana; consulta horarios por WhatsApp" },
        { icon: "clock", label: "Duración", value: "8 sesiones de 1 hora (propuesta)" },
        { icon: "group", label: "Grupo", value: "Máximo 8 alumnos" },
      ],
      note: "Las fechas se buscan alinear con los periodos de parciales y finales. Si faltas, te enviamos un video corto con el resumen de la sesión.",
    },
    requirements: {
      heading: "Requisitos",
      items: [
        "Computadora con Windows, Mac o Linux e internet.",
        "PSeInt instalado (gratuito); te enviamos una guía breve.",
        "Para Python basta el navegador; si prefieres, puedes instalarlo con Thonny.",
        "No necesitas experiencia previa más allá del manejo básico de la computadora.",
      ],
    },
    price: {
      heading: "Precio y horarios",
      options: [],
      fallback: "Consulta precio y horarios por WhatsApp",
      note: "El formato de este curso está por confirmar. Si necesitas apoyo ahora, revisa las clases particulares.",
    },
    certificate: {
      heading: "Certificado de finalización",
      text: `Cuando el curso se abra, se entregará un certificado digital a quien asista al menos a 6 de las 8 clases y presente su proyecto final. ${notOfficial}`,
    },
    faqs: [
      {
        q: "Mi universidad usa Java o C++, ¿me sirve?",
        a: "Sí. La lógica que trabajamos se traslada a esos lenguajes y, cuando ayuda, mostramos la equivalencia. No prometemos cubrir toda la sintaxis de cada lenguaje.",
      },
      {
        q: "¿Me pueden resolver una tarea o un examen?",
        a: "No. Te enseñamos y acompañamos para que lo resuelvas tú. Podemos revisar dudas sobre los temas de tu curso, pero no entregamos soluciones de evaluaciones calificadas.",
      },
      {
        q: "¿Cuándo empieza el curso?",
        a: "El formato está por confirmar y buscamos abrirlo unas semanas antes de parciales o finales. Escríbenos por WhatsApp para consultar horarios.",
      },
      {
        q: "¿Y si necesito ayuda antes de que abra un grupo?",
        a: "Puedes tomar clases particulares: S/35 la hora o S/120 el paquete de 4 horas, en el horario que coordinemos.",
      },
      {
        q: "¿Qué pasa si falto a una sesión?",
        a: "Te enviamos un video corto con el resumen de la sesión para que te pongas al día.",
      },
    ],
    cta: {
      heading: "Consulta horarios por WhatsApp",
      text: "Cuéntanos qué curso llevas, en qué lenguaje y cuándo es tu examen.",
      button: "Consultar disponibilidad",
      whatsappMessage:
        "Hola, soy universitario y quisiera información sobre el curso de lógica de programación y algoritmos (horarios y precio).",
    },
    related: [
      {
        href: "/clases-particulares-programacion",
        label: "Clases particulares de programación",
        text: "Refuerzo uno a uno en lógica, Python, Java, C#, JavaScript o SQL.",
      },
      {
        href: "/guias/como-prepararte-examen-programacion-universidad",
        label: "Cómo prepararte para tu examen de programación",
        text: "Un plan práctico para las semanas previas.",
      },
    ],
    schema: {
      educationalLevel: "Principiante",
      audience: "Estudiantes universitarios de primeros ciclos",
      workload: "PT8H",
      teaches: ["Lógica de programación", "Algoritmos", "Pseudocódigo", "Python"],
    },
  },
  {
    slug: "taller-ia-videojuegos-kids",
    path: "/cursos/taller-ia-videojuegos-kids",
    visual: "kids",
    tone: "violet",
    breadcrumb: "Taller de videojuegos con IA",
    courseName: "Taller: Videojuegos con IA",
    seo: {
      title: "Taller de videojuegos con inteligencia artificial para niños",
      description:
        "Taller online para niños de 8 a 12 años: entrenan una IA con gestos de la mano y la usan para mover su videojuego. 2 sesiones en vivo, sin cuentas para el niño.",
      ogTitle: "Taller de videojuegos con inteligencia artificial",
      ogEyebrow: "Kids · 8 a 12 años",
    },
    eyebrow: "Taller Kids · 8 a 12 años",
    h1: "Taller de videojuegos con inteligencia artificial para niños",
    lead:
      "En dos sesiones en vivo, tu hijo le enseña a la computadora a reconocer gestos de su mano y usa esa IA para mover a un personaje en su propio juego. Una introducción práctica y segura, sin cuentas ni chats.",
    pills: [
      { icon: "clock", label: "2 sesiones de 1 hora" },
      { icon: "calendar", label: "Sábado y domingo" },
      { icon: "group", label: "Máximo 8 alumnos" },
      { icon: "spark", label: "Sin cuentas para el niño" },
    ],
    intro: {
      heading: "Una IA que aprende con ejemplos, explicada para niños",
      paragraphs: [
        "En la primera sesión tu hijo descubre qué significa que una máquina aprenda con ejemplos: entrena un modelo con dos o tres gestos de la mano frente a la cámara, lo prueba y ve qué pasa cuando tiene pocos ejemplos o mala luz.",
        "En la segunda sesión conecta ese modelo con un editor compatible con Scratch y arma un juego simple en el que el personaje se mueve según el gesto que hace. Al final lo prueba con sus compañeros.",
        "Explicamos la IA con honestidad: aprende patrones a partir de ejemplos, se equivoca y depende de los datos que le damos. No presentamos el taller como un curso completo de programación, sino como una puerta de entrada.",
      ],
    },
    audience: {
      heading: "¿Para quién es este taller?",
      items: [
        "Niñas y niños de 8 a 12 años curiosos por la inteligencia artificial y los videojuegos.",
        "No se necesita experiencia previa con Scratch.",
        "Familias que quieren una actividad corta antes de decidir por un curso completo.",
        "Ideal como actividad de vacaciones útiles desde casa.",
      ],
    },
    objectives: {
      heading: "Qué aprenderá tu hijo",
      items: [
        "Explicar con sus palabras qué es una IA que aprende con ejemplos.",
        "Entrenar un modelo con 2 o 3 gestos y comprobar si los reconoce bien.",
        "Mejorar el modelo agregando más ejemplos cuando se equivoca.",
        "Usar el resultado del modelo para mover un personaje en su juego.",
      ],
    },
    syllabus: {
      heading: "Temario: 2 sesiones",
      sessions: [
        { title: "Una IA que aprende con ejemplos", result: "Un modelo de gestos entrenado y probado." },
        { title: "Conectar el modelo con Scratch y jugar", result: "Un juego controlado con gestos funcionando." },
      ],
    },
    project: {
      heading: "Resultado final",
      text: "Un juego simple en el que el personaje se mueve con gestos de la mano, por ejemplo mano abierta a la derecha y puño a la izquierda.",
      items: ["Modelo de gestos entrenado por el alumno", "Personaje controlado con la cámara", "Contador de puntos"],
    },
    format: {
      heading: "Cómo es el taller",
      items: [
        { icon: "message", label: "Modalidad", value: "Online en vivo por Google Meet" },
        { icon: "calendar", label: "Días", value: "Sábado y domingo; fechas en vacaciones por confirmar" },
        { icon: "clock", label: "Duración", value: "2 sesiones de 1 hora" },
        { icon: "group", label: "Grupo", value: "Máximo 8 alumnos" },
      ],
      note: "No se graba la sesión. Las cámaras en Google Meet son opcionales; la cámara se usa en el navegador del alumno para entrenar su modelo.",
    },
    requirements: {
      heading: "Qué necesita tu hijo",
      items: [
        "Una computadora (no tablet) con cámara web.",
        "Google Chrome actualizado e internet estable.",
        "Un padre, madre o tutor presente o cerca durante las sesiones, para los permisos de cámara.",
        "Leer con fluidez y usar mouse y teclado.",
      ],
    },
    price: {
      heading: "Precio",
      options: [],
      fallback: "Consulta precio y fechas por WhatsApp",
      note: "El precio y las fechas del taller están por confirmar.",
    },
    certificate: {
      heading: "Certificado",
      text: "El certificado de finalización de Sparkia Academy está definido para los cursos de 8 sesiones (6 de 8 asistencias y proyecto final). Para este taller, consulta por WhatsApp.",
    },
    faqs: [
      {
        q: "¿Mi hijo tiene que crear una cuenta?",
        a: "No. Las herramientas que usamos son gratuitas, funcionan en el navegador y no piden cuenta al alumno. No usamos chatbots.",
      },
      {
        q: "¿Graban o guardan la imagen de mi hijo?",
        a: "Nosotros no grabamos ni guardamos las imágenes de la cámara, y la sesión de Meet no se graba. Pedimos entrenar con la mano, no con la cara, y con un fondo sin datos personales. Antes del taller te explicamos por WhatsApp cómo funciona cada herramienta.",
      },
      {
        q: "¿Qué pasa si la cámara no funciona?",
        a: "Te enviamos antes una guía corta sobre los permisos de cámara en Chrome y revisamos todo en los primeros minutos. Si una herramienta falla, el instructor tiene un plan alternativo para que tu hijo termine su juego.",
      },
      {
        q: "¿En qué se diferencia del curso de Scratch?",
        a: "El taller es una introducción de 2 horas con pocos bloques. El curso completo de Scratch dura 8 sesiones y enseña eventos, bucles, condicionales, variables y clones para crear un juego completo.",
      },
      {
        q: "¿Necesito estar presente?",
        a: "Te pedimos estar presente o cerca, sobre todo al inicio, para dar los permisos de cámara y apoyar si algo falla.",
      },
    ],
    cta: {
      heading: "Consulta fechas del taller",
      text: "Escríbenos para saber cuándo se abre el próximo taller y qué necesita la computadora de tu hijo.",
      button: "Consultar por el taller",
      whatsappMessage:
        "Hola, quisiera información sobre el taller de videojuegos con inteligencia artificial para niños de 8 a 12 años (fechas y precio).",
    },
    related: [
      {
        href: "/cursos/kids-scratch-videojuegos",
        label: "Curso de videojuegos con Scratch para niños",
        text: "El siguiente paso: 8 sesiones para crear un juego completo.",
      },
      {
        href: "/guias/vacaciones-utiles-online-curso-de-programacion",
        label: "Vacaciones útiles online: cómo elegir un curso de programación",
        text: "Preguntas clave antes de inscribir a tu hijo.",
      },
    ],
    schema: {
      educationalLevel: "Principiante",
      audience: "Niños de 8 a 12 años",
      workload: "PT2H",
      teaches: ["Inteligencia artificial", "Aprendizaje automático con ejemplos", "Creación de videojuegos"],
    },
  },
  {
    slug: "clases-particulares-programacion",
    path: "/clases-particulares-programacion",
    visual: "uni",
    tone: "navy",
    breadcrumb: "Clases particulares",
    courseName: "Clases particulares de programación",
    seo: {
      title: "Clases particulares de programación online en Perú",
      description:
        "Clases particulares de programación online: lógica, Python, Java, C#, JavaScript y SQL. Preparación para exámenes y guía en proyectos. S/35 la hora.",
      ogTitle: "Clases particulares de programación",
      ogEyebrow: "Universitarios y estudiantes",
    },
    eyebrow: "Clases particulares · Online",
    h1: "Clases particulares de programación online para universitarios y estudiantes",
    lead:
      "Refuerzo uno a uno en el tema que necesitas, en el horario que coordinemos. Ideal antes de un examen, cuando te atrasaste en un curso o cuando tu proyecto no avanza.",
    pills: [
      { icon: "clock", label: "Clases de 1 hora" },
      { icon: "calendar", label: "Horario a coordinar" },
      { icon: "code", label: "Atención individual" },
    ],
    intro: {
      heading: "Refuerzo de programación a tu ritmo",
      paragraphs: [
        "Cada clase parte de lo que necesitas: un tema que no quedó claro, ejercicios para practicar antes de un examen o un proyecto que no sabes cómo continuar. Nos cuentas el tema y la fecha, y armamos un plan para las horas que tengas.",
        "Te enseñamos y acompañamos para que entiendas y lo resuelvas tú. No hacemos tareas, trabajos ni evaluaciones por el alumno; esa regla es la que hace que el refuerzo sirva de verdad.",
      ],
    },
    audience: {
      heading: "¿Para quién son?",
      items: [
        "Universitarios que llevan un curso de programación y necesitan reforzar.",
        "Estudiantes que se preparan para un examen o una evaluación práctica.",
        "Quienes tienen un proyecto y necesitan guía para avanzar.",
        "Para menores de edad, la coordinación se hace con el padre, madre o tutor.",
      ],
    },
    objectives: {
      heading: "Qué puedes lograr",
      items: [
        "Entender el tema que te frena, con ejemplos a tu nivel.",
        "Practicar ejercicios tipo examen con retroalimentación inmediata.",
        "Encontrar y corregir errores en tu propio código.",
        "Ordenar tu proyecto y saber cuál es el siguiente paso.",
      ],
    },
    syllabus: {
      heading: "Temas que trabajamos",
      sessions: [
        { title: "Lógica de programación", result: "Resolver problemas paso a paso antes de escribir código." },
        { title: "Python", result: "Desde lo básico hasta funciones, listas y archivos." },
        { title: "Java", result: "Fundamentos y programación orientada a objetos." },
        { title: "C#", result: "Fundamentos del lenguaje y ejercicios prácticos." },
        { title: "JavaScript", result: "Lógica y desarrollo web." },
        { title: "SQL", result: "Consultas a bases de datos." },
        { title: "Preparación de exámenes", result: "Práctica con problemas tipo examen y tiempo límite." },
        { title: "Guía en proyectos", result: "Revisión de avances y orientación para seguir." },
      ],
    },
    format: {
      heading: "Cómo funcionan",
      items: [
        { icon: "message", label: "Modalidad", value: "Online en vivo por Google Meet" },
        { icon: "calendar", label: "Horario", value: "Día y hora a coordinar por WhatsApp" },
        { icon: "clock", label: "Duración", value: "Clases de 1 hora" },
        { icon: "code", label: "Atención", value: "Individual" },
      ],
      note: "Puedes reprogramar avisando con anticipación; los detalles están en las condiciones del servicio.",
    },
    requirements: {
      heading: "Qué necesitas",
      items: [
        "Computadora con internet estable y micrófono.",
        "El tema, el material de tu curso o tu proyecto a la mano.",
        "La fecha de tu examen o entrega, para planificar las horas.",
      ],
    },
    price: {
      heading: "Precios referenciales",
      options: [
        { label: "Clase particular", amount: 35, detail: "1 hora · Atención individual" },
        { label: "Paquete particular", amount: 120, detail: "4 horas · Coordina tus horarios" },
      ],
      note: "Precios referenciales; confirma disponibilidad y horario por WhatsApp.",
    },
    certificate: {
      heading: "Certificado",
      text: "El certificado de finalización se entrega en los cursos grupales. Las clases particulares se enfocan en tu objetivo puntual: un tema, un examen o un proyecto.",
    },
    faqs: [
      {
        q: "¿Me pueden hacer la tarea o el examen?",
        a: "No. Te explicamos, revisamos tus errores y te guiamos, pero el trabajo lo haces tú. Si se pide resolver una evaluación por el alumno, la clase se rechaza.",
      },
      {
        q: "¿Cómo coordino el horario?",
        a: "Por WhatsApp: cuéntanos el tema y tu disponibilidad, y acordamos día y hora.",
      },
      {
        q: "¿Qué conviene más, una clase o el paquete?",
        a: "Una clase sirve para una duda puntual. El paquete de 4 horas conviene si quieres avanzar con continuidad, por ejemplo durante las semanas previas a un examen.",
      },
      {
        q: "¿Puedo cancelar o reprogramar?",
        a: "Sí, avisando con anticipación. Si no avisas a tiempo o no te conectas, la clase se considera dictada.",
      },
      {
        q: "¿Puedo traer ejercicios de mi universidad?",
        a: "Sí, podemos revisar dudas sobre los temas de tu curso. Lo que no hacemos es resolver evaluaciones calificadas.",
      },
    ],
    cta: {
      heading: "Escríbenos el tema y la fecha de tu examen",
      text: "Te respondemos con disponibilidad y una propuesta de cómo aprovechar tus horas.",
      button: "Consultar clases particulares",
      whatsappMessage:
        "Hola, quisiera información sobre clases particulares de programación. Mi tema es: ",
    },
    related: [
      {
        href: "/cursos/universitarios-logica-algoritmos",
        label: "Curso de lógica de programación y algoritmos",
        text: "Refuerzo grupal para universitarios de primeros ciclos.",
      },
      {
        href: "/guias/como-prepararte-examen-programacion-universidad",
        label: "Cómo prepararte para tu examen de programación",
        text: "Un plan práctico para las semanas previas.",
      },
    ],
    schema: {
      educationalLevel: "Todos los niveles",
      audience: "Universitarios y estudiantes",
      teaches: ["Lógica de programación", "Python", "Java", "C#", "JavaScript", "SQL"],
    },
  },
];

export function getLanding(slug: LandingSlug): CourseLanding {
  const landing = landings.find((item) => item.slug === slug);
  if (!landing) throw new Error(`Landing no encontrada: ${slug}`);
  return landing;
}
