const AboutMe = () => {
  return (
    <section className='student' id="student">
      <h2 className='about-project__heading'>Студент</h2>
      <div className='student__info'>
        <div className='student__text'>
          <h3 className='student__name'>Алексей</h3>
          <p className='student__profession'>Фронтенд-разработчик, 34 года</p>
          <p className='student__about'>
            Я живу в Санкт-Петербурге, закончил факультет организации
            авиационных перевозок СПБГУГА. Люблю слушать музыку, а ещё увлекаюсь
            3D моделированием. Изучаю JS уже более года, за это время освоил
            библиотеку React.js с использованием React Hooks, Redux и React
            routing. Также немного серверной стороны - Express.js, mongoDB. На
            данный момент в активном поиске работы. Из практического опыта пока
            только несколько пет-проектов и администрирование маркетплейсов.
          </p>
        </div>
        <div className='student__image'></div>
      </div>
      <a
        className='student_github link opacity07'
        href='https://github.com/lexev97'
        target='_blank'
        rel='noreferrer'
      >
        Github
      </a>
    </section>
  );
};

export default AboutMe;
