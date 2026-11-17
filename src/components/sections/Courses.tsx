import { courses, type Course } from "@/content/courses";

import { CheckList, WhatsAppButton } from "../Brand";
import { Icon } from "../Icon";
import { CourseVisual, ProgramArt } from "../Illustrations";

const sectionClass: Record<Course["id"], string> = {
  kids: "kids-section",
  teens: "teens-section",
  uni: "uni-section",
};

export function QuickPrograms() {
  return (
    <section className="quick-programs container" id="programas" aria-label="Programas por edad">
      {courses.map((course) => (
        <a className={`quick-card ${course.id}`} href={`#${course.anchor}`} key={course.id} data-reveal>
          <div>
            <span className="quick-eyebrow">{course.quick.eyebrow}</span>
            <h2 className="quick-title">{course.quick.title}</h2>
            <p>{course.quick.text}</p>
            <span className="text-link">
              Conoce el programa <Icon name="arrow" size={17} />
            </span>
          </div>
          <ProgramArt type={course.id} symbol={course.quick.symbol} />
        </a>
      ))}
    </section>
  );
}

function CourseCopy({ course }: { course: Course }) {
  return (
    <div className="course-copy" data-reveal>
      <span className={`section-kicker ${course.kickerTone}`}>{course.kicker}</span>
      <h2>{course.title}</h2>
      <p>{course.summary}</p>
      {course.details.length > 0 && (
        <ul className="details-row" aria-label="Formato del curso">
          {course.details.map((detail) => (
            <li key={detail.label} className="detail-pill">
              <Icon name={detail.icon} size={17} />
              {detail.label}
            </li>
          ))}
        </ul>
      )}
      {course.outcomesTitle ? (
        <div className="outcome-box">
          <span className="mini-title">{course.outcomesTitle}</span>
          <CheckList items={course.outcomes} />
        </div>
      ) : (
        <CheckList items={course.outcomes} />
      )}
      {course.extraLanguages && (
        <div className="language-box">
          <b>También: clases particulares</b>
          {course.extraLanguages.map((language) => (
            <span key={language}>{language}</span>
          ))}
        </div>
      )}
      <WhatsAppButton message={course.whatsappMessage}>{course.cta}</WhatsAppButton>
    </div>
  );
}

export function Courses() {
  return (
    <>
      {courses.map((course) => {
        const reverse = course.id === "teens";
        return (
          <section
            key={course.id}
            className={`course-section ${sectionClass[course.id]}`}
            id={course.anchor}
          >
            <div className={`container course-grid ${reverse ? "reverse" : ""}`}>
              {reverse ? (
                <>
                  <CourseCopy course={course} />
                  <CourseVisual id={course.id} />
                </>
              ) : (
                <>
                  <CourseVisual id={course.id} />
                  <CourseCopy course={course} />
                </>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
