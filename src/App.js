
import './App.css';
import kartin1 from "./kartin/S10_025.jpg"
import kartin2 from "./kartin/S10_019.jpg"
import kartin3 from "./kartin/S10_012.jpg"
import kartin4 from "./kartin/S10_021.jpg"
import kartin5 from "./kartin/S101_04.jpg"
import kartin6 from "./kartin/S101_01a.jpg"

function App() {
  return (
      <div className="App">
        <header className="App-header">
            SPECTR.AR.STUDIO
        </header>
        <section className="section about-section">
          <h2>О нас</h2>
            <div className="aboutUs">
                <h4>Мы - молодая команда, которая занимается разработкой AR- квестов для музеев и выставок с применением игровых механик.</h4>
            </div>
            <div className="aboutDot">
                У нас состоится первая выставка в галерее Sistema. Мы подготовили для вас AR- игры для картин двух великих художников Дмитрия Шорина и Андрея Двина.
                Необходимо будет скачать приложение.
            </div>
            <div className="NewWorld">
                Когда и где?
                <h4>
                    Галерея Система
                    с 15 декабря по 24 февраля
                </h4>
            </div>
        </section>

          <section className="section services-section">
              <h2>О картинах и выставке</h2>
              <div className="Kartin">
                  <img src={kartin1}/>
                  <img src={kartin2}/>
                  <img src={kartin3}/>
              </div>

              <div className="picture">
                  Мы подготовили для вас мини-игры и AR-контент для картин серии "Небо", вот примеры картин, которые вас
                  встретят на выставке.
              </div>
              <div className="Kartin">
                  <img src={kartin4}/>
                  <img src={kartin5}/>
                  <img src={kartin6}/>
              </div>
              <div>
                  <h5>
                      Цена выставки 290 рублей за вход.
                  </h5>

              </div>
          </section>

          <section className="section contact-section">
              <h2>Наши контакты и согласие на обработку данных</h2>
              <div className="contact">
                  +79813512667 Кирилл Викторович
              </div>
              <div className="ser">
                  spectr.museum@mail.ru
              </div>
              <div>
                  ИНН: 602715854716
                  ОГРНИП: 323600000027158
                  ИП ЕФИМОВ КИРИЛЛ ВИКТОРОВИЧ
              </div>
               <a href="https://disk.yandex.ru/i/9n7cdJn-fJkh-Q" target="_blank" rel="noopener noreferrer">Скачивая наше приложение, вы соглашаетесь с пользовательским соглашением</a>
          </section>
      </div>
  );
}

export default App;
