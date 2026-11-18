import type { ContentBlock } from "./blocks";

export type GuiaSlug =
  | "a-que-edad-puede-un-nino-empezar-a-programar"
  | "scratch-o-python-con-que-empezar"
  | "vacaciones-utiles-online-curso-de-programacion"
  | "como-prepararte-examen-programacion-universidad"
  | "mi-hijo-quiere-crear-videojuegos";

export type Guia = {
  slug: GuiaSlug;
  path: string;
  title: string;
  seoTitle: string;
  description: string;
  audience: string;
  datePublished: string;
  dateModified: string;
  blocks: ContentBlock[];
  cta: { heading: string; text: string; links: { href: string; label: string }[] };
};

export const guias: Guia[] = [
  {
    slug: "mi-hijo-quiere-crear-videojuegos",
    path: "/guias/mi-hijo-quiere-crear-videojuegos",
    title: "Mi hijo quiere crear videojuegos: ¿por dónde empezar?",
    seoTitle: "Mi hijo quiere crear videojuegos: por dónde empezar",
    description:
      "Guía para madres y padres: cómo ayudar a tu hijo a pasar de jugar a crear videojuegos, qué herramientas gratuitas usar según su edad y qué esperar al inicio.",
    audience: "Madres y padres",
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    blocks: [
      {
        tipo: "parrafo",
        texto:
          "Muchos niños y adolescentes que pasan horas jugando terminan preguntando cómo se hace un videojuego. Es una buena señal: detrás de esa pregunta hay curiosidad por entender cómo funcionan las cosas, y esa curiosidad se puede convertir en una puerta de entrada a la programación. Esta guía te ayuda a dar los primeros pasos sin gastar de más y sin frustrar a tu hijo.",
      },
      { tipo: "subtitulo", texto: "Primero, conversa sobre qué juego le gustaría crear" },
      {
        tipo: "parrafo",
        texto:
          "Antes de elegir una herramienta, pregúntale qué tipo de juego imagina. ¿Uno de plataformas, donde un personaje salta obstáculos? ¿Una aventura con historia y decisiones? ¿Un juego de atrapar objetos? La respuesta te dice mucho sobre sus intereses y te permite poner una meta realista.",
      },
      {
        tipo: "parrafo",
        texto:
          "Conviene ajustar expectativas desde el inicio. Los juegos que tu hijo conoce fueron hechos por equipos grandes durante años. Su primer juego será mucho más simple, y eso está bien: un personaje que se mueve, unos obstáculos, un contador de puntos y una pantalla de “game over” ya son un logro enorme cuando lo construyó él mismo.",
      },
      { tipo: "subtitulo", texto: "Elige la herramienta según su edad" },
      {
        tipo: "parrafo",
        texto:
          "No existe una única respuesta, pero hay herramientas gratuitas que funcionan muy bien para empezar:",
      },
      {
        tipo: "lista",
        items: [
          "Para niños de 8 a 12 años, Scratch es una opción natural. Se programa uniendo bloques de colores, no hay que escribir código y el resultado se ve al instante. Permite crear juegos con personajes, puntaje, vidas y varios niveles.",
          "Para adolescentes de 13 a 17 años, Python es un buen siguiente paso. Es un lenguaje real, de escritura clara, y con la librería Pygame se pueden crear juegos en 2D con ventana, teclado y colisiones.",
          "Si tu hijo adolescente nunca programó, también puede empezar directamente con Python. Al principio avanzará más lento que en Scratch, pero aprenderá a escribir código de verdad desde el primer día.",
        ],
      },
      { tipo: "subtitulo", texto: "Qué aprende mientras crea un juego" },
      {
        tipo: "parrafo",
        texto:
          "Crear un videojuego obliga a pensar de forma ordenada. Para que un personaje pierda una vida al chocar con un enemigo, tu hijo tiene que describir exactamente qué pasa, en qué orden y bajo qué condición. Sin darse cuenta, está usando ideas centrales de la programación:",
      },
      {
        tipo: "lista",
        items: [
          "Secuencias: las instrucciones se ejecutan en un orden preciso.",
          "Eventos: algo ocurre cuando se presiona una tecla o cuando dos objetos se tocan.",
          "Condicionales: si el personaje toca la moneda, suma un punto.",
          "Bucles: el juego repite ciertas acciones una y otra vez mientras se juega.",
          "Variables: el puntaje y las vidas son datos que cambian.",
        ],
      },
      {
        tipo: "parrafo",
        texto:
          "Además aprende algo igual de valioso: que las cosas casi nunca funcionan a la primera. Encontrar por qué el personaje atraviesa una pared o por qué el puntaje no sube enseña paciencia y método para resolver problemas.",
      },
      { tipo: "subtitulo", texto: "Cómo acompañarlo desde casa" },
      {
        tipo: "parrafo",
        texto:
          "No necesitas saber programar para apoyarlo. Lo que más ayuda es interesarte por lo que hace. Pídele que te muestre su juego, que te explique cómo funciona una parte y que te cuente qué le gustaría agregar. Explicar en voz alta lo obliga a ordenar sus ideas y le da motivación para seguir.",
      },
      {
        tipo: "lista",
        items: [
          "Acuerden un horario fijo y corto para crear, distinto del tiempo para jugar.",
          "Celebra el avance, no solo el resultado final.",
          "Cuando se trabe, en lugar de resolverlo por él, pregúntale qué esperaba que pasara y qué está pasando en realidad.",
          "Revisa la configuración de privacidad de las plataformas que use, sobre todo si tiene menos de 13 años y necesita una cuenta creada por un adulto.",
        ],
      },
      { tipo: "subtitulo", texto: "¿Aprender solo o con un curso?" },
      {
        tipo: "parrafo",
        texto:
          "Hay muchos tutoriales gratuitos y algunos chicos avanzan muy bien por su cuenta. Otros se frustran cuando algo no funciona y abandonan. Un curso con un instructor y un grupo pequeño ayuda a mantener el ritmo, a resolver dudas en el momento y a terminar un proyecto completo, que es lo que más motiva.",
      },
      {
        tipo: "parrafo",
        texto:
          "Si decides buscar un curso, fíjate en que tenga un temario claro con lo que se logra en cada clase, un proyecto final concreto, grupos pequeños, una forma clara de comunicarse con los padres y reglas de privacidad para menores. Y si es posible, pide una clase de prueba antes de pagar.",
      },
      { tipo: "subtitulo", texto: "El primer paso puede ser pequeño" },
      {
        tipo: "parrafo",
        texto:
          "No hace falta comprar nada ni planificar meses de estudio. Una tarde explorando Scratch o instalando Python puede ser suficiente para saber si el interés es real. Si lo es, lo importante es darle continuidad y una meta concreta: terminar su primer juego y mostrárselo a alguien.",
      },
    ],
    cta: {
      heading: "¿Quieres que lo acompañemos en su primer juego?",
      text: "Tenemos un curso para cada edad, online y en grupos de máximo 8 alumnos. Puedes empezar con una clase demostrativa gratis.",
      links: [
        { href: "/cursos/kids-scratch-videojuegos", label: "Curso de videojuegos con Scratch (8 a 12 años)" },
        { href: "/cursos/teens-python-mini-rpg", label: "Curso de Python y mini-RPG (13 a 17 años)" },
      ],
    },
  },
  {
    slug: "a-que-edad-puede-un-nino-empezar-a-programar",
    path: "/guias/a-que-edad-puede-un-nino-empezar-a-programar",
    title: "¿A qué edad puede un niño empezar a programar?",
    seoTitle: "¿A qué edad puede un niño empezar a programar?",
    description:
      "Qué tener en cuenta para decidir si tu hijo está listo para aprender programación: lectura, motivación y herramientas adecuadas para cada etapa, sin presiones.",
    audience: "Madres y padres",
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    blocks: [
      {
        tipo: "parrafo",
        texto:
          "Es una de las preguntas que más se hacen las familias cuando escuchan hablar de clases de programación para niños. La respuesta corta es que no hay una edad exacta. Más que la edad, importan algunas habilidades previas, el interés del niño y que la herramienta sea adecuada para su etapa.",
      },
      { tipo: "subtitulo", texto: "Lo que importa más que la edad" },
      {
        tipo: "parrafo",
        texto:
          "Antes de inscribir a tu hijo en un curso, revisa si se cumplen estas condiciones. No son un examen, solo indicadores de que aprovechará mejor las clases:",
      },
      {
        tipo: "lista",
        items: [
          "Lee con fluidez. Aunque se programe con bloques, cada bloque tiene texto y las instrucciones de la clase también.",
          "Usa mouse y teclado con soltura. Arrastrar, soltar y escribir no deberían ser un reto en sí mismos.",
          "Puede mantener la atención alrededor de una hora, sobre todo si la actividad es práctica.",
          "Tiene curiosidad: le gustan los videojuegos, armar cosas, dibujar o resolver acertijos.",
        ],
      },
      {
        tipo: "parrafo",
        texto:
          "Si tu hijo todavía no lee con fluidez, no pasa nada. Hay actividades de pensamiento lógico sin pantalla, como seguir instrucciones paso a paso o juegos de mesa con reglas, que preparan el terreno sin apuro.",
      },
      { tipo: "subtitulo", texto: "Una referencia por etapas" },
      {
        tipo: "parrafo",
        texto:
          "Cada niño es distinto, pero esta guía general puede orientarte:",
      },
      {
        tipo: "lista",
        items: [
          "Primeros años de primaria: actividades de lógica y secuencias, idealmente acompañadas por un adulto. El equipo de Scratch tiene una versión simplificada para los más pequeños llamada ScratchJr.",
          "Desde los 8 años aproximadamente: Scratch, que se programa con bloques y permite crear juegos e historias animadas. Es una edad en la que muchos niños ya leen bien y disfrutan crear.",
          "Desde los 13 años aproximadamente: lenguajes escritos como Python. A esta edad suelen tener más paciencia para la sintaxis y les motiva usar un lenguaje real.",
        ],
      },
      {
        tipo: "parrafo",
        texto:
          "Estas edades no son reglas. Un niño de 11 años con experiencia en Scratch puede estar listo para Python, y un adolescente que nunca programó puede disfrutar empezar con bloques para ganar confianza.",
      },
      { tipo: "subtitulo", texto: "¿Programar significa más tiempo de pantalla?" },
      {
        tipo: "parrafo",
        texto:
          "Es una preocupación válida. La diferencia está en qué hace el niño frente a la pantalla. Ver videos o jugar es una actividad de consumo. Programar un juego es una actividad de creación: hay que pensar, planificar, probar, equivocarse y corregir. No reemplaza el juego al aire libre ni el descanso, pero sí puede transformar parte del tiempo de pantalla en algo más activo.",
      },
      {
        tipo: "parrafo",
        texto:
          "Una buena práctica es separar los momentos: un horario para crear y otro distinto para jugar. Así el niño entiende que son actividades diferentes.",
      },
      { tipo: "subtitulo", texto: "Señales de que es buen momento" },
      {
        tipo: "lista",
        items: [
          "Pregunta cómo se hacen los juegos o las aplicaciones que usa.",
          "Inventa reglas para sus propios juegos o le gusta modificar los existentes.",
          "Disfruta los rompecabezas, los legos o los retos de lógica.",
          "Se queda pensando en un problema hasta resolverlo.",
        ],
      },
      {
        tipo: "parrafo",
        texto:
          "Si reconoces varias de estas señales, probablemente disfrute aprender a programar. Si no, también puede descubrir el gusto en el camino: muchas veces el interés aparece al ver el primer personaje moverse en pantalla.",
      },
      { tipo: "subtitulo", texto: "Cómo elegir la primera experiencia" },
      {
        tipo: "parrafo",
        texto:
          "La primera experiencia marca mucho. Si es demasiado difícil o aburrida, el niño puede concluir que programar no es para él. Por eso conviene buscar algo con metas cortas y visibles, en grupos pequeños donde pueda preguntar, y con un proyecto final que pueda mostrar a la familia.",
      },
      {
        tipo: "lista",
        items: [
          "Que el curso indique qué logrará el niño en cada clase.",
          "Que los grupos sean pequeños para que el instructor lo acompañe.",
          "Que la comunicación sea con los padres o tutores, no directamente con el menor.",
          "Que haya reglas claras de privacidad, por ejemplo no grabar a los alumnos.",
          "Que puedas probar una clase antes de pagar.",
        ],
      },
      {
        tipo: "parrafo",
        texto:
          "Lo más importante es que la experiencia sea positiva. Empezar a programar no es una carrera contra el tiempo: es una habilidad que se construye poco a poco, y la mejor edad para empezar es aquella en la que tu hijo lo disfruta.",
      },
    ],
    cta: {
      heading: "¿Tu hijo tiene entre 8 y 12 años?",
      text: "En nuestro curso de Scratch crea su primer videojuego en 8 clases en vivo. Puedes reservar una clase demostrativa gratis.",
      links: [{ href: "/cursos/kids-scratch-videojuegos", label: "Ver el curso de videojuegos con Scratch" }],
    },
  },
  {
    slug: "scratch-o-python-con-que-empezar",
    path: "/guias/scratch-o-python-con-que-empezar",
    title: "Scratch o Python: ¿con qué debería empezar mi hijo?",
    seoTitle: "Scratch o Python: ¿con qué debería empezar mi hijo?",
    description:
      "Diferencias entre Scratch y Python para que elijas con qué empiece tu hijo según su edad, su experiencia y lo que quiere crear. Ventajas reales de cada opción.",
    audience: "Madres y padres",
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    blocks: [
      {
        tipo: "parrafo",
        texto:
          "Scratch y Python son dos de las opciones más comunes para empezar a programar, y ambas son gratuitas. No compiten entre sí: cumplen funciones distintas en momentos distintos. Esta guía te ayuda a decidir cuál conviene para tu hijo hoy.",
      },
      { tipo: "subtitulo", texto: "Qué es Scratch" },
      {
        tipo: "parrafo",
        texto:
          "Scratch es un entorno de programación visual creado en el MIT. En lugar de escribir código, se arrastran y encajan bloques de colores que representan instrucciones: mover, girar, repetir, preguntar si algo ocurre. Funciona en el navegador y permite crear juegos, animaciones e historias interactivas.",
      },
      {
        tipo: "lista",
        items: [
          "No hay errores de escritura: los bloques encajan solo si tienen sentido.",
          "El resultado se ve al instante en pantalla, lo que motiva mucho.",
          "Enseña las ideas centrales de la programación: eventos, bucles, condicionales y variables.",
          "Está pensado principalmente para niños desde los 8 años.",
        ],
      },
      { tipo: "subtitulo", texto: "Qué es Python" },
      {
        tipo: "parrafo",
        texto:
          "Python es un lenguaje de programación escrito, usado en el mundo profesional para desarrollo web, análisis de datos, automatización e inteligencia artificial, entre otros usos. Su sintaxis es más legible que la de otros lenguajes, por eso se usa mucho para enseñar a programar.",
      },
      {
        tipo: "lista",
        items: [
          "Se escribe código real, con palabras y símbolos que hay que escribir con precisión.",
          "Los errores de escritura son parte del aprendizaje y enseñan a leer mensajes de error.",
          "Con librerías como Pygame se pueden crear videojuegos en 2D.",
          "Requiere instalar programas o usar un editor en el navegador.",
        ],
      },
      { tipo: "subtitulo", texto: "Cómo decidir: tres preguntas" },
      {
        tipo: "parrafo",
        texto: "Para elegir, responde estas preguntas pensando en tu hijo, no en lo que se ve más avanzado:",
      },
      {
        tipo: "lista",
        ordenada: true,
        items: [
          "¿Qué edad tiene? Entre 8 y 12 años, Scratch suele ser la mejor puerta de entrada. Desde los 13, Python suele resultar más motivador porque se siente “de verdad”.",
          "¿Ha programado antes? Si ya hizo proyectos en Scratch y se siente cómodo, puede estar listo para pasar a Python aunque tenga 11 o 12 años.",
          "¿Cómo reacciona ante la frustración? Si se desanima rápido, empezar con bloques le dará victorias tempranas. Si disfruta resolver problemas difíciles, Python puede ser un buen reto.",
        ],
      },
      { tipo: "subtitulo", texto: "Mitos frecuentes" },
      {
        tipo: "parrafo",
        texto:
          "“Scratch es solo un juego y no enseña programación de verdad.” No es así. Las ideas que se aprenden en Scratch (secuencias, condicionales, repeticiones, variables) son las mismas que se usan en cualquier lenguaje. Lo que cambia es la forma de escribirlas.",
      },
      {
        tipo: "parrafo",
        texto:
          "“Si empieza con Python, avanzará más rápido.” No necesariamente. Un niño que se frustra con la sintaxis puede abandonar antes de entender las ideas. Empezar por el nivel adecuado suele ser más rápido a la larga.",
      },
      {
        tipo: "parrafo",
        texto:
          "“Tiene que elegir uno para siempre.” Tampoco. Lo habitual es empezar con Scratch y pasar a un lenguaje escrito cuando el niño crece o cuando los bloques empiezan a quedarle chicos.",
      },
      { tipo: "subtitulo", texto: "Qué necesita cada opción" },
      {
        tipo: "lista",
        items: [
          "Scratch: computadora con navegador e internet. Para guardar proyectos en línea se necesita una cuenta; los menores de 13 años requieren el correo de un adulto.",
          "Python: computadora (Windows, Mac o Linux) en la que se puedan instalar programas, o un editor en el navegador. Las herramientas son gratuitas.",
          "En ambos casos, una tablet no es lo más adecuado: se trabaja mejor con mouse y teclado.",
        ],
      },
      { tipo: "subtitulo", texto: "Videojuegos: el punto en común" },
      {
        tipo: "parrafo",
        texto:
          "Si a tu hijo le gustan los videojuegos, cualquiera de las dos opciones puede convertir ese interés en aprendizaje. En Scratch puede crear un juego con personajes, puntaje y vidas en pocas semanas. En Python puede construir una aventura de texto y luego un pequeño juego de rol con mapa, objetos y personajes. Aprender a programar creando videojuegos le da una meta clara y una razón para no rendirse cuando algo falla.",
      },
      {
        tipo: "parrafo",
        texto:
          "La mejor elección es la que mantiene a tu hijo motivado. Si tienes dudas, una clase de prueba es la forma más sencilla de ver cómo responde.",
      },
    ],
    cta: {
      heading: "Elige el curso según su edad",
      text: "Ambos cursos son online, en vivo, con grupos de máximo 8 alumnos y un videojuego propio como proyecto final.",
      links: [
        { href: "/cursos/kids-scratch-videojuegos", label: "Scratch para niños de 8 a 12 años" },
        { href: "/cursos/teens-python-mini-rpg", label: "Python para adolescentes de 13 a 17 años" },
      ],
    },
  },
  {
    slug: "vacaciones-utiles-online-curso-de-programacion",
    path: "/guias/vacaciones-utiles-online-curso-de-programacion",
    title: "Vacaciones útiles online: cómo elegir un curso de programación para tu hijo",
    seoTitle: "Vacaciones útiles 2027 online: cómo elegir un curso",
    description:
      "Qué revisar antes de inscribir a tu hijo en un curso de programación online para vacaciones útiles 2027: horarios, grupos, proyecto final, privacidad y costos.",
    audience: "Madres y padres",
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    blocks: [
      {
        tipo: "parrafo",
        texto:
          "Cuando termina el año escolar, muchas familias en Perú buscan vacaciones útiles: una actividad que mantenga a los chicos aprendiendo sin la presión del colegio. Los cursos de programación online son una opción cada vez más considerada porque se toman desde casa, sin traslados. Pero no todos los cursos son iguales. Estas son las preguntas que conviene hacer antes de inscribir a tu hijo.",
      },
      { tipo: "subtitulo", texto: "1. ¿Qué va a lograr al final?" },
      {
        tipo: "parrafo",
        texto:
          "Un buen curso de vacaciones debe terminar con algo concreto que tu hijo pueda mostrar: un videojuego, una animación, una página. Desconfía de descripciones vagas como “aprenderá habilidades del futuro” sin decir qué hará exactamente. Pide el temario y fíjate si indica el resultado de cada clase.",
      },
      { tipo: "subtitulo", texto: "2. ¿Es en vivo o grabado?" },
      {
        tipo: "parrafo",
        texto:
          "Los cursos grabados son flexibles y económicos, pero requieren mucha autonomía. Para niños y adolescentes que empiezan, las clases en vivo suelen funcionar mejor porque pueden preguntar en el momento y el instructor nota cuando alguien se traba. Pregunta también qué pasa si falta a una clase: ¿hay algún material para ponerse al día?",
      },
      { tipo: "subtitulo", texto: "3. ¿Cuántos alumnos hay por grupo?" },
      {
        tipo: "parrafo",
        texto:
          "En programación, cada alumno avanza a su ritmo y se traba en lugares distintos. Con grupos grandes, el instructor no alcanza a ayudar a todos. Un grupo pequeño permite que tu hijo reciba atención, haga preguntas sin vergüenza y no se quede atrás.",
      },
      { tipo: "subtitulo", texto: "4. ¿El horario encaja con las vacaciones de la familia?" },
      {
        tipo: "parrafo",
        texto:
          "Revisa las fechas de inicio y fin, los días y la duración de cada sesión. Piensa en viajes familiares y otras actividades. Un curso corto, de pocas semanas y con sesiones de una hora, suele ser más fácil de sostener que uno largo e intensivo. Las clases de fin de semana pueden ser útiles si los padres trabajan entre semana y quieren acompañar.",
      },
      { tipo: "subtitulo", texto: "5. ¿Qué necesita en casa?" },
      {
        tipo: "lista",
        items: [
          "¿Sirve una tablet o se necesita computadora?",
          "¿Hay que instalar programas? ¿Envían una guía o ayudan con la instalación?",
          "¿Las herramientas son gratuitas o hay que pagar licencias?",
          "¿Se necesita cámara, micrófono o alguna cuenta?",
        ],
      },
      {
        tipo: "parrafo",
        texto:
          "Conocer esto antes evita sorpresas en la primera clase y que tu hijo pierda tiempo mientras los demás avanzan.",
      },
      { tipo: "subtitulo", texto: "6. ¿Cómo cuidan la privacidad de los menores?" },
      {
        tipo: "parrafo",
        texto:
          "Es una pregunta que muchas familias olvidan. Pregunta si graban las clases, si la comunicación es con los padres o directamente con el menor, si agregan a los alumnos a grupos de WhatsApp o redes sociales y qué datos personales piden. Una academia seria debería responder estas preguntas con claridad y por escrito.",
      },
      { tipo: "subtitulo", texto: "7. ¿Qué incluye el precio y qué pasa si no funciona?" },
      {
        tipo: "parrafo",
        texto:
          "Compara precios mirando lo que incluyen: número de horas en vivo, tamaño del grupo, material y certificado. Pregunta también por las condiciones: qué pasa si el grupo no se abre, si tu hijo se retira o si la academia cambia el horario. Las condiciones claras dicen mucho de cómo te tratarán después de pagar.",
      },
      {
        tipo: "parrafo",
        texto:
          "Sobre el certificado: en cursos libres, suele ser una constancia de finalización emitida por la propia academia. Es un buen recuerdo y una motivación, pero conviene saber si es o no un documento oficial.",
      },
      { tipo: "subtitulo", texto: "8. ¿Se puede probar antes?" },
      {
        tipo: "parrafo",
        texto:
          "Una clase de prueba permite que tu hijo vea si le gusta y que tú conozcas al instructor y la forma de enseñar. Si puedes acompañarlo en esa clase, mejor: verás de primera mano qué hace y cómo responde.",
      },
      { tipo: "subtitulo", texto: "Una idea para planificar las vacaciones útiles 2027" },
      {
        tipo: "parrafo",
        texto:
          "Si estás pensando en enero o febrero, conviene empezar a consultar en diciembre. Muchos cursos abren grupos con cupos limitados y necesitan un mínimo de inscritos para iniciar. Pregunta por las fechas, pide el temario y aprovecha la clase de prueba para decidir con calma.",
      },
      {
        tipo: "parrafo",
        texto:
          "Y recuerda que el mejor curso no es el más largo ni el más caro, sino el que tu hijo termina con ganas de seguir aprendiendo.",
      },
    ],
    cta: {
      heading: "Vacaciones útiles desde casa",
      text: "Nuestros cursos son online, en vivo, los fines de semana y con un videojuego propio como proyecto final. Consulta las fechas de los próximos grupos.",
      links: [
        { href: "/cursos/kids-scratch-videojuegos", label: "Curso de videojuegos con Scratch (8 a 12 años)" },
        { href: "/cursos/taller-ia-videojuegos-kids", label: "Taller de videojuegos con inteligencia artificial" },
        { href: "/cursos/teens-python-mini-rpg", label: "Curso de Python y mini-RPG (13 a 17 años)" },
      ],
    },
  },
  {
    slug: "como-prepararte-examen-programacion-universidad",
    path: "/guias/como-prepararte-examen-programacion-universidad",
    title: "Cómo prepararte para tu examen de programación en la universidad",
    seoTitle: "Cómo prepararte para tu examen de programación",
    description:
      "Plan para tu examen de programación o algoritmos en la universidad: qué repasar, cómo practicar con tiempo límite y cómo usar la IA sin depender de ella.",
    audience: "Universitarios",
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    blocks: [
      {
        tipo: "parrafo",
        texto:
          "Los exámenes de programación tienen algo distinto: no basta con entender la teoría, tienes que resolver problemas nuevos con tiempo limitado, muchas veces en papel o sin ayuda del editor. Esta guía te propone un plan para las semanas previas, pensado para cursos introductorios de programación o algoritmos.",
      },
      { tipo: "subtitulo", texto: "Empieza por saber qué te van a evaluar" },
      {
        tipo: "parrafo",
        texto:
          "Revisa el sílabo, las prácticas calificadas y los exámenes anteriores si tu profesor los comparte. Anota los temas, el lenguaje (pseudocódigo, Python, Java, C, C++) y el formato: ¿es en computadora o en papel? ¿Te piden código completo, prueba de escritorio o explicar un algoritmo? Prepararte para el formato real cambia mucho tu resultado.",
      },
      { tipo: "subtitulo", texto: "Repasa la base en orden" },
      {
        tipo: "parrafo",
        texto:
          "Muchos problemas en el examen vienen de vacíos en temas básicos. Repasa en este orden y no avances si un tema no está claro:",
      },
      {
        tipo: "lista",
        ordenada: true,
        items: [
          "Entrada, proceso y salida: identificar qué datos recibes y qué debes devolver.",
          "Variables, tipos de datos y operadores, incluyendo división entera y residuo.",
          "Condicionales simples, dobles y anidados.",
          "Bucles: contadores, acumuladores y condiciones de parada.",
          "Funciones con parámetros y valor de retorno.",
          "Arreglos o listas: recorrer, buscar máximo, mínimo y promedio.",
          "Búsqueda y ordenamiento básicos, si están en tu sílabo.",
        ],
      },
      { tipo: "subtitulo", texto: "Practica resolviendo, no leyendo" },
      {
        tipo: "parrafo",
        texto:
          "Leer soluciones da una falsa sensación de dominio. Para el examen necesitas resolver. Toma un problema, intenta resolverlo solo y solo después compara con una solución. Si te equivocaste, no te quedes con la respuesta correcta: identifica en qué paso se rompió tu razonamiento.",
      },
      {
        tipo: "lista",
        items: [
          "Antes de escribir código, describe la solución en pasos o pseudocódigo.",
          "Haz la prueba de escritorio: sigue tu algoritmo a mano con datos de ejemplo y anota cómo cambian las variables.",
          "Prueba casos borde: cero, números negativos, listas vacías, el primer y el último elemento.",
          "Cuando funcione, intenta resolverlo de otra forma.",
        ],
      },
      { tipo: "subtitulo", texto: "Entrena con tiempo límite" },
      {
        tipo: "parrafo",
        texto:
          "En la última semana, simula el examen. Elige varios problemas, pon un cronómetro con el tiempo real de la evaluación y resuélvelos sin internet ni apuntes, en el mismo formato que tendrás. Al terminar, revisa con calma. Esto te ayuda a calcular cuánto tiempo darle a cada pregunta y a no bloquearte cuando un problema se complica.",
      },
      {
        tipo: "parrafo",
        texto:
          "Una estrategia útil durante el examen: lee todas las preguntas primero, empieza por la que te parezca más clara y deja para el final la más difícil. Si te trabas, escribe al menos el pseudocódigo: muchos profesores valoran el razonamiento aunque el código no esté completo.",
      },
      { tipo: "subtitulo", texto: "Usa la IA como tutor, no como atajo" },
      {
        tipo: "parrafo",
        texto:
          "Los asistentes de inteligencia artificial pueden ayudarte a estudiar si los usas bien. Pídeles que te expliquen un concepto con otras palabras, que te propongan ejercicios parecidos a los de tu curso o que te digan por qué tu código da un error, sin darte la solución completa. Lo que no te ayuda es copiar respuestas: en el examen no tendrás esa ayuda, y lo que no entendiste se nota.",
      },
      {
        tipo: "parrafo",
        texto:
          "Respeta además las reglas de tu universidad sobre el uso de IA en trabajos y evaluaciones.",
      },
      { tipo: "subtitulo", texto: "Cuida lo básico" },
      {
        tipo: "lista",
        items: [
          "Estudia en bloques cortos con pausas, varios días, en lugar de una sola noche larga.",
          "Duerme bien antes del examen: resolver problemas nuevos requiere la mente despejada.",
          "Si el examen es en computadora, verifica antes el entorno que usarás.",
          "Pregunta a tu profesor o a tus compañeros las dudas que tengas con tiempo.",
        ],
      },
      { tipo: "subtitulo", texto: "Cuándo pedir ayuda" },
      {
        tipo: "parrafo",
        texto:
          "Si después de practicar sigues sin entender un tema base, como bucles o funciones, es mejor pedir ayuda pronto que acumular vacíos. Un refuerzo enfocado, con ejercicios a tu nivel y alguien que revise tu razonamiento, puede ahorrarte muchas horas. Busca a alguien que te enseñe a resolver, no que resuelva por ti.",
      },
    ],
    cta: {
      heading: "¿Necesitas reforzar antes de tu examen?",
      text: "Puedes tomar clases particulares en el tema que necesites o consultar por el curso de lógica y algoritmos para universitarios.",
      links: [
        { href: "/clases-particulares-programacion", label: "Clases particulares de programación" },
        { href: "/cursos/universitarios-logica-algoritmos", label: "Curso de lógica de programación y algoritmos" },
      ],
    },
  },
];

export function getGuia(slug: GuiaSlug): Guia {
  const guia = guias.find((item) => item.slug === slug);
  if (!guia) throw new Error(`Guía no encontrada: ${slug}`);
  return guia;
}
