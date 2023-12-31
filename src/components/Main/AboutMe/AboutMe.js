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
          <h3 className='student__name'>Алексей</h3>
          <p className='student__profession'>Фронтенд-разработчик, 34 года</p>
          <ul className='student__hard-skills'>
            <li>
            <div className='student__hard-skill hard-skill__1n'></div>
              Отработал начальные навыки HTML, CSS и JavaScript, узнал правила
              HTML-разметки, научился работать со стилями, освоил базовый
              синтаксис HTML и CSS. Ознакомился с flexbox, работой с
              медиафайлами, виджетами и формами, созданием анимаций. Освоил
              подключение к проекту системы контроля версий Git. <br />
              (102 часа)
            </li>
            <li>
            <div className='student__hard-skill hard-skill__2n'></div>
              Научился работать с макетами, создавать интерфейсы для разных
              устройств (настольных компьютеров, ноутбуков, планшетов,
              смартфонов), размещать сайт в интернете и публиковать изменения в
              нём. <br />
              (47 часов)
            </li>
            <li>
              <div className='student__hard-skill hard-skill__3n'></div>
              Исследовал типы данных, научился работать с условиями, циклами и
              функциями. Изучил DOM и научился добавлять вёрстку в проект с
              помощью JavaScript, а также научился делать интерактивные формы с
              проверкой данных. <br />
              (115 часов)
            </li>
            <li>
            <div className='student__hard-skill hard-skill__4n'></div>
              Освоил такие концепции языка как объектно-ориентированное
              программирование, асинхронность и обмен данными с сервером.
              Познакомился с менеджером пакетов npm и научится добавлять
              зависимости в проект. <br />
              (113 часов)
            </li>
            <li>
            <div className='student__hard-skill hard-skill__5n'></div>
              Изучил библиотеки React и её экосистемы, ознакомился со всеми
              базовыми концепциями React. <br />
              (113 часов)
            </li>
            <li>
            <div className='student__hard-skill hard-skill__6n'></div>
              Изучил JavaScript в среде Node.js, поднятие и настройку сервера.
              Ознакомился с фреймворком Express.js и базой данных MongoDB.{' '}
              <br />
              (115 часов)
            </li>
          </ul>
          <a
            className='student__github link opacity07'
            href='https://github.com/lexev97'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
