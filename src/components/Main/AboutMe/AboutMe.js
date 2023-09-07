import student from '../../../images/student.jpg';

const AboutMe = () => {
  return (
    <section
      className='student'
      id='student'
      aria-label='Информация о студенте'
    >
      <h2 className='student__heading'>Студент</h2>
      <div className='student__info'>
        <div className='student__text'>
          {/* <h3 className='student__name'>Алексей</h3>
          <p className='student__profession'>Фронтенд-разработчик, 34 года</p>
          <p className='student__about'>
            Я живу в Санкт-Петербурге, закончил факультет организации
            авиационных перевозок СПБГУГА. Люблю слушать музыку, а ещё увлекаюсь
            3D моделированием. Изучаю JS уже более года, за это время освоил
            библиотеку React.js с использованием React Hooks, Redux и React
            routing. Также немного серверной стороны - Express.js, mongoDB. На
            данный момент в активном поиске работы. Из практического опыта пока
            только несколько пет-проектов и администрирование маркетплейсов.
          </p> */}
          <h3 className='student__name'>Виталий</h3>
          <p className='student__profession'>Фронтенд-разработчик, 30 лет</p>
          <p className='student__about'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className='student__github link opacity07'
            href='https://github.com/lexev97'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
        <div className='student__image'>
          <img
            className='student__pic'
            src={student}
            alt='Фото студента'
          ></img>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
