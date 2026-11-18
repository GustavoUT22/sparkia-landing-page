import { getWhatsAppDisplay, hasRealEmail, siteConfig } from "@/config/site";

import type { ContentBlock } from "./blocks";

export type LegalPage = {
  slug: "condiciones" | "privacidad";
  path: string;
  title: string;
  seoTitle: string;
  description: string;
  status: string;
  blocks: ContentBlock[];
};

const whatsapp = getWhatsAppDisplay();
const contactLine = hasRealEmail()
  ? `WhatsApp ${whatsapp} o el correo ${siteConfig.contact.email}`
  : `WhatsApp ${whatsapp}`;

export const condiciones: LegalPage = {
  slug: "condiciones",
  path: "/condiciones",
  title: "Condiciones del servicio",
  seoTitle: "Condiciones del servicio",
  description:
    "Condiciones del servicio de Sparkia Academy: inscripción, pagos, apertura de grupos, devoluciones, faltas, certificado e integridad académica en las clases.",
  status:
    "Versión preliminar. Algunos puntos están marcados como propuesta y pueden cambiar antes de su versión final; ante cualquier duda, consúltanos por WhatsApp antes de pagar.",
  blocks: [
    {
      tipo: "parrafo",
      texto:
        "Sparkia Academy es una academia de programación 100% online, dirigida por Gustavo Ugarte (persona natural, Perú). Estas condiciones explican cómo funcionan la inscripción, los pagos, las clases y las devoluciones. Al inscribirte, o inscribir a tu hijo o hija, aceptas estas condiciones.",
    },
    {
      tipo: "parrafo",
      texto:
        "En este documento, “padre o tutor” se refiere al padre, madre o tutor legal del alumno menor de edad. Si el alumno es mayor de edad, él o ella es quien acepta estas condiciones.",
    },
    { tipo: "subtitulo", texto: "1. Inscripción y pago" },
    {
      tipo: "lista",
      ordenada: true,
      items: [
        "La inscripción se coordina por WhatsApp; te enviamos el formulario y los datos de pago.",
        "El pago se realiza por Yape o Plin.",
        `Después de pagar, envía la captura del pago por WhatsApp al ${whatsapp}, con el nombre del alumno.`,
        "La vacante queda reservada solo cuando confirmamos el pago. Llenar el formulario sin pagar no reserva la vacante.",
        "Por ahora entregamos una constancia de pago simple por WhatsApp. Si en el futuro la academia obtiene RUC, se emitirá el comprobante que corresponda.",
      ],
    },
    { tipo: "parrafo", texto: "Precios vigentes:" },
    {
      tipo: "lista",
      items: [
        "Cursos grupales (Scratch para 8 a 12 años, Python para 13 a 17 años): S/150 el curso completo. Es un precio referencial; el precio final se confirma por WhatsApp antes del pago.",
        "Universitarios: precio y formato por confirmar.",
        "Clase particular: S/35 por hora.",
        "Paquete de clases particulares: S/120 por 4 horas.",
        "Clase demostrativa: gratis.",
      ],
    },
    { tipo: "subtitulo", texto: "2. Qué incluye" },
    { tipo: "parrafo", texto: "Cursos grupales:" },
    {
      tipo: "lista",
      items: [
        "8 clases en vivo de 1 hora por Google Meet, sábados y domingos, durante 4 semanas.",
        "Grupos de máximo 8 alumnos.",
        "Material del curso y proyecto base, solo para alumnos con pago confirmado.",
        "Video corto de repaso si el alumno falta a una clase (ver punto 5).",
        "Certificado de finalización si cumple los requisitos (ver punto 9).",
      ],
    },
    { tipo: "parrafo", texto: "Clases particulares:" },
    {
      tipo: "lista",
      items: [
        "Clase online de 1 hora en el día y hora acordados.",
        "Temas: lógica, Python, Java, C#, JavaScript o SQL; preparación para exámenes y guía en proyectos.",
        "El paquete de 4 horas debe usarse dentro del plazo que te indicamos al momento del pago.",
      ],
    },
    {
      tipo: "parrafo",
      texto:
        "No incluye: computadora, internet, ni la instalación de programas fuera de lo indicado en la guía del curso.",
    },
    { tipo: "subtitulo", texto: "3. Apertura del grupo" },
    {
      tipo: "lista",
      ordenada: true,
      items: [
        "Cada grupo se abre con un mínimo de 4 pagos confirmados.",
        "Si unos días antes de la fecha de inicio no se llega al mínimo, te avisaremos por WhatsApp y tú eliges: devolución total del monto pagado o cambio de fecha al siguiente grupo disponible.",
        "La devolución se hace por el mismo medio de pago (Yape o Plin).",
      ],
    },
    { tipo: "subtitulo", texto: "4. Devoluciones" },
    {
      tipo: "nota",
      texto: "Propuesta por confirmar: los montos y plazos de esta sección pueden ajustarse antes de la versión final.",
    },
    { tipo: "parrafo", texto: "Cursos grupales:" },
    {
      tipo: "lista",
      items: [
        "Antes de la primera clase: devolución total (100%).",
        "Después de la primera clase y antes de la tercera: a elección, devolución proporcional de las clases no dictadas o crédito por el monto restante para otro curso o clases particulares.",
        "Desde la tercera clase en adelante: crédito por las clases no dictadas, por un plazo limitado. No hay devolución en dinero salvo motivo de fuerza mayor (por ejemplo, de salud), que se evalúa caso por caso.",
        "Cálculo proporcional: S/150 / 8 clases = S/18.75 por clase. Por ejemplo, si el alumno se retira después de 2 clases, se devuelven 6 x S/18.75 = S/112.50.",
        "Si la academia cancela el curso o no puede dictarlo, se devuelve el 100% de las clases no dictadas.",
      ],
    },
    { tipo: "parrafo", texto: "Clases particulares:" },
    {
      tipo: "lista",
      items: [
        "Puedes cancelar o reprogramar sin costo avisando con anticipación.",
        "Si no avisas a tiempo o no te conectas, la clase se considera dictada.",
        "Horas no usadas del paquete: devolución proporcional (S/30 por hora) o crédito, a tu elección, dentro del plazo de uso del paquete.",
      ],
    },
    {
      tipo: "parrafo",
      texto: `Cómo pedir una devolución: escríbenos por WhatsApp al ${whatsapp} indicando el nombre del alumno y el curso. La devolución se hace por Yape o Plin.`,
    },
    { tipo: "subtitulo", texto: "5. Faltas y recuperación" },
    {
      tipo: "lista",
      ordenada: true,
      items: [
        "Avísanos por WhatsApp si sabes que el alumno va a faltar.",
        "Si el alumno falta, enviamos al padre o tutor un video corto de repaso grabado por el instructor con la demostración de la sesión.",
        "Las clases en vivo no se graban y los alumnos nunca son grabados.",
        "Las faltas no se recuperan con una clase en vivo adicional, salvo que se acuerde aparte (por ejemplo, con una clase particular pagada).",
        "Las faltas no generan devolución.",
      ],
    },
    { tipo: "subtitulo", texto: "6. Cambios de horario por parte de la academia" },
    {
      tipo: "lista",
      ordenada: true,
      items: [
        "Si la academia necesita cambiar o suspender una clase (por ejemplo, por un corte de luz o de internet), avisará por WhatsApp lo antes posible.",
        "La clase se reprograma en una fecha acordada con el grupo o se compensa con un video de la sesión más una sesión de consultas.",
        "Si el nuevo horario no le funciona al alumno, puede elegir crédito o devolución proporcional de esa clase.",
        "Si la academia cambia de forma permanente el horario del grupo y el alumno no puede asistir, puede elegir devolución proporcional de las clases restantes o pasar a otro grupo.",
      ],
    },
    { tipo: "subtitulo", texto: "7. Conducta en clase" },
    {
      tipo: "lista",
      items: [
        "Respeto con el profesor y con los compañeros, en voz y en el chat.",
        "Micrófono apagado mientras no se está hablando.",
        "Cámara: recomendada, pero no obligatoria.",
        "No compartir el enlace de Meet con otras personas.",
        "No grabar, fotografiar ni hacer capturas de pantalla de la clase o de los compañeros.",
        "No compartir datos personales (dirección, teléfono, redes sociales) en el chat.",
      ],
    },
    {
      tipo: "parrafo",
      texto:
        "Si un alumno no respeta estas normas, primero se conversa con él o ella y con su padre o tutor. Si la conducta se repite, la academia puede retirarlo del grupo y devolver el monto proporcional de las clases no dictadas.",
    },
    { tipo: "subtitulo", texto: "8. Propiedad de los proyectos" },
    {
      tipo: "lista",
      ordenada: true,
      items: [
        "El proyecto que crea el alumno es del alumno. Puede guardarlo, mostrarlo y seguir mejorándolo.",
        "El material del curso (diapositivas, ejercicios, proyectos base, guías y videos) es de Sparkia Academy. Es para uso personal del alumno y no debe compartirse ni venderse.",
        "La academia no publica los proyectos de los alumnos sin autorización escrita del padre o tutor (o del alumno, si es mayor de edad).",
      ],
    },
    { tipo: "subtitulo", texto: "9. Certificado" },
    {
      tipo: "lista",
      ordenada: true,
      items: [
        "Al terminar un curso grupal, el alumno recibe un certificado de finalización digital si asiste por lo menos a 6 de las 8 clases y presenta su proyecto final.",
        "Es un certificado de finalización emitido por Sparkia Academy. No es un título ni un certificado oficial del Ministerio de Educación ni de otra entidad.",
      ],
    },
    { tipo: "subtitulo", texto: "10. Integridad académica" },
    {
      tipo: "lista",
      ordenada: true,
      items: [
        "Sparkia Academy enseña y acompaña. No hacemos tareas, trabajos, exámenes ni evaluaciones por el alumno.",
        "En clases particulares podemos explicar temas, revisar errores y guiar un proyecto, pero el trabajo lo hace el alumno.",
        "Si se solicita hacer una tarea o un examen por el alumno, la academia puede rechazar la clase.",
      ],
    },
    { tipo: "subtitulo", texto: "11. Comunicación con menores de edad" },
    {
      tipo: "lista",
      ordenada: true,
      items: [
        "Toda la comunicación sobre alumnos menores de edad se hace solo con el padre o tutor.",
        "Los alumnos menores nunca se agregan a grupos públicos de WhatsApp ni de redes sociales.",
        "Si el alumno es menor de edad, en la clase demostrativa debe estar presente su padre o tutor.",
      ],
    },
    { tipo: "subtitulo", texto: "12. Datos personales" },
    {
      tipo: "parrafo",
      texto: "El uso de los datos personales se explica en el Aviso de privacidad, publicado en esta misma web.",
    },
    { tipo: "subtitulo", texto: "13. Reclamos" },
    {
      tipo: "parrafo",
      texto:
        "Si no estás conforme con el servicio, escríbenos por WhatsApp y lo revisamos contigo. Cuando la academia habilite un Libro de Reclamaciones virtual, lo publicaremos en esta web.",
    },
    { tipo: "subtitulo", texto: "14. Cambios a estas condiciones" },
    {
      tipo: "parrafo",
      texto:
        "Podemos actualizar estas condiciones. Los cambios no afectan a un curso ya pagado, salvo que sean a favor del alumno.",
    },
    { tipo: "subtitulo", texto: "15. Contacto" },
    {
      tipo: "lista",
      items: [`Responsable: Gustavo Ugarte, Sparkia Academy.`, `Contacto: ${contactLine}.`],
    },
  ],
};

export const privacidad: LegalPage = {
  slug: "privacidad",
  path: "/privacidad",
  title: "Aviso de privacidad",
  seoTitle: "Aviso de privacidad",
  description:
    "Cómo Sparkia Academy recoge, usa y protege los datos personales de familias y alumnos, con cuidado especial de los menores de edad, y cómo ejercer tus derechos.",
  status:
    "Versión preliminar. Algunos puntos están marcados como propuesta o en revisión y pueden cambiar antes de su versión final.",
  blocks: [
    {
      tipo: "parrafo",
      texto:
        "Este aviso explica qué datos personales recogemos, para qué los usamos y cómo puedes ejercer tus derechos, de acuerdo con la Ley N.° 29733, Ley de Protección de Datos Personales, y su reglamento vigente.",
    },
    { tipo: "subtitulo", texto: "1. Quién es responsable de tus datos" },
    {
      tipo: "lista",
      items: [
        "Responsable: Gustavo Ugarte, persona natural, que opera bajo el nombre comercial Sparkia Academy.",
        `Contacto: ${contactLine}.`,
      ],
    },
    { tipo: "subtitulo", texto: "2. Qué datos recogemos" },
    { tipo: "parrafo", texto: "Solo los necesarios para inscribir y atender al alumno:" },
    {
      tipo: "lista",
      items: [
        "Nombre y apellido, teléfono (WhatsApp) y correo electrónico del padre, madre o tutor, o del alumno si es mayor de edad.",
        "Nombre de pila y edad del alumno, y el curso elegido.",
        "Constancia de pago (captura de Yape o Plin) de quien paga.",
        "Asistencia y avance del alumno en el curso.",
      ],
    },
    {
      tipo: "parrafo",
      texto:
        "No pedimos DNI del alumno, dirección, colegio, fotos, datos de salud ni ningún otro dato que no sea necesario.",
    },
    { tipo: "subtitulo", texto: "3. Para qué usamos tus datos" },
    {
      tipo: "lista",
      ordenada: true,
      items: [
        "Gestionar la inscripción, el pago y la vacante.",
        "Enviarte el enlace de clase, avisos, reportes de avance y el video de repaso cuando el alumno falta.",
        "Registrar asistencia y emitir el certificado de finalización.",
        "Atender consultas, reclamos y solicitudes de devolución.",
        "Solo si lo autorizas aparte: avisarte de nuevos cursos de Sparkia Academy. Puedes dejar de recibir estos avisos cuando quieras escribiendo “BAJA” por WhatsApp.",
      ],
    },
    { tipo: "parrafo", texto: "No usamos tus datos para ningún otro fin." },
    { tipo: "subtitulo", texto: "4. Base legal: tu consentimiento" },
    {
      tipo: "parrafo",
      texto:
        "Tratamos los datos con tu consentimiento libre, previo, expreso, informado e inequívoco, que das al aceptar el formulario de inscripción. También usamos los datos para cumplir lo que contrataste (el curso o la clase).",
    },
    {
      tipo: "parrafo",
      texto:
        "Puedes retirar tu consentimiento en cualquier momento (ver punto 9). Si lo retiras, es posible que no podamos seguir brindando el servicio, porque sin datos de contacto no podemos enviar el enlace de clase ni avisos.",
    },
    { tipo: "subtitulo", texto: "5. Cuidado especial con los datos de menores de edad" },
    {
      tipo: "lista",
      ordenada: true,
      items: [
        "Los datos de alumnos menores de edad solo se reciben del padre, madre o tutor, con su consentimiento.",
        "Para todos los menores de 18 años pedimos el consentimiento del padre o tutor.",
        "Toda la comunicación sobre el alumno menor de edad se hace solo con el padre o tutor.",
        "Los alumnos menores no se agregan a grupos públicos de WhatsApp ni de redes sociales.",
        "Los alumnos nunca son grabados en clase.",
      ],
    },
    { tipo: "subtitulo", texto: "6. No vendemos ni compartimos tus datos" },
    {
      tipo: "lista",
      items: [
        "No vendemos, alquilamos ni cedemos tus datos a nadie.",
        "No compartimos datos de un alumno con otros alumnos ni con otros padres.",
        "Solo se compartirán datos si una autoridad competente lo exige por ley.",
      ],
    },
    { tipo: "subtitulo", texto: "7. Dónde guardamos los datos" },
    {
      tipo: "lista",
      ordenada: true,
      items: [
        "En Google Drive y Google Sheets (cuenta de Google de la academia, con contraseña segura y verificación en dos pasos), y en WhatsApp Business para la comunicación.",
        "Google y WhatsApp (Meta) pueden guardar la información en servidores fuera del Perú. Esto se considera flujo transfronterizo de datos; al aceptar este aviso, lo autorizas.",
        "Solo Gustavo Ugarte tiene acceso a los datos. Si en el futuro se suma otro instructor, solo verá los datos de sus alumnos y se le informará de este aviso.",
        "Los formularios y hojas de cálculo no se comparten mediante enlaces públicos.",
      ],
    },
    { tipo: "subtitulo", texto: "8. Cuánto tiempo guardamos los datos" },
    { tipo: "nota", texto: "Propuesta por confirmar: los plazos de esta sección pueden ajustarse." },
    {
      tipo: "lista",
      items: [
        "Datos de contacto y del alumno: hasta 1 año después de terminado el último curso o clase. Luego se eliminan.",
        "Asistencia y certificado emitido: hasta 1 año después de terminado el curso, para reenviar el certificado si se pierde.",
        "Constancias de pago y reclamos: el tiempo que exijan las normas aplicables.",
        "Personas que solo consultaron y no se inscribieron: hasta 6 meses desde el último mensaje.",
      ],
    },
    {
      tipo: "parrafo",
      texto:
        "Si pides la eliminación antes, la atendemos según el punto 9, salvo los datos que debamos conservar por ley.",
    },
    { tipo: "subtitulo", texto: "9. Tus derechos y cómo ejercerlos" },
    {
      tipo: "lista",
      items: [
        "Acceso: saber qué datos tuyos o de tu hijo o hija tenemos.",
        "Rectificación: corregir datos incorrectos o incompletos.",
        "Cancelación: pedir que eliminemos tus datos.",
        "Oposición: oponerte a un uso concreto, por ejemplo, a los avisos de nuevos cursos.",
        "También puedes revocar tu consentimiento en cualquier momento.",
      ],
    },
    {
      tipo: "parrafo",
      texto: `Para ejercerlos, escríbenos por ${contactLine}, indicando tu nombre, el nombre del alumno, qué derecho quieres ejercer y qué pides. Podemos pedirte que confirmes tu identidad, por ejemplo escribiendo desde el número registrado en la inscripción. Respondemos dentro de los plazos que fija el reglamento vigente.`,
    },
    {
      tipo: "parrafo",
      texto:
        "Si no estás conforme con la respuesta, puedes acudir a la Autoridad Nacional de Protección de Datos Personales del Ministerio de Justicia y Derechos Humanos.",
    },
    { tipo: "subtitulo", texto: "10. Uso de imágenes" },
    {
      tipo: "lista",
      ordenada: true,
      items: [
        "No tomamos fotos ni grabamos a los alumnos. Las clases no se graban.",
        "Los videos de repaso los graba solo el instructor y no muestran a los alumnos.",
        "Si en algún momento quisiéramos usar una imagen, voz, nombre o proyecto de un alumno, lo haríamos solo con una autorización escrita y separada del padre o tutor, que se puede revocar en cualquier momento. Sin esa autorización, la respuesta es siempre no.",
      ],
    },
    { tipo: "subtitulo", texto: "11. Seguridad" },
    {
      tipo: "lista",
      items: [
        "Cuentas de Google y WhatsApp protegidas con contraseña segura y verificación en dos pasos.",
        "Acceso solo desde dispositivos propios con bloqueo de pantalla.",
        "Los datos de pago no incluyen números de tarjeta ni contraseñas; solo la captura de Yape o Plin.",
      ],
    },
    { tipo: "subtitulo", texto: "12. Registro del banco de datos" },
    {
      tipo: "nota",
      texto:
        "En revisión: estamos verificando si corresponde inscribir el banco de datos en el Registro Nacional de Protección de Datos Personales y actualizaremos este punto.",
    },
    { tipo: "subtitulo", texto: "13. Cambios a este aviso" },
    {
      tipo: "parrafo",
      texto:
        "Si cambiamos este aviso, publicaremos la nueva versión en esta página y avisaremos por WhatsApp si el cambio afecta el uso de tus datos.",
    },
  ],
};
