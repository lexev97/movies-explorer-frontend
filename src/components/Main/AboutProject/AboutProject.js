const AboutProject = () => {
  return (
    <section className='about-project' id="about-project" aria-label="Описание дипломного проекта">
      <h2 className='about-project__heading'>О проекте</h2>
      <div className='about-project__duration'>
        <div className='about-project__thesis'>
          <h3 className='about-project__title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__description'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__thesis'>
          <h3 className='about-project__title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__description'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__timebar'>
        <div className="about-project__backend">
          <div className='about-project__period about-project__w1'>1 неделя</div>
          <div className='about-project__period about-project__w-des'>Back-end</div>
        </div>
        <div className="about-project__frontend">
          <div className='about-project__period about-project__w4'>4 недели</div>
          <div className='about-project__period about-project__w-des'>Front-end</div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
