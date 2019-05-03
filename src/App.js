import React, { Component } from 'react';
import MapComponent from './components/Map/MapComponent'
import Sidebar from './components/Sidebar/Sidebar.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
        places : [
            {
                name: 'Севкабель Порт',
                adress: 'Кожевенная линия 40, Гавань В.О',
                lat:  59.924415,
                lng: 30.241039,
                style: '1 стиль',
                architector: 'Неизвестен',
                pic: 'https://s.inyourpocket.com/gallery/213565.jpg',
                desc: 'Порт «Севкабель» — это проект преобразования исторического «серого пояса» \n' +
                    'в полифункциональное культурно-деловое пространство, открывающее новую \n' +
                    'морскую набережную Санкт-Петербурга. \n' +
                    '\n' +
                    'Платформа проекта — промышленный комплекс «Севкабель», первая в России кабельная\n' +
                    'мануфактура «Сименс & Гальске», расположенная на побережье Невы и Финского залива. \n' +
                    '\n' +
                    'Стратегическая цель долгосрочного развития — создание благоприятной\n' +
                    'городской среды, улучшение качества жизни в Гавани Васильевского острова. '
            },
            {
                name: 'Ферма Бенуа',
                adress: 'Тихорецкий пр., 17Г',
                lat: 60.019562,
                lng: 30.370316,
                style: '4 стиль',
                architector: '4 архитектор',
                pic: 'https://i1.wp.com/antennadaily.ru/wp-content/uploads/2016/10/fermaphoto4-e1477775602234.jpg',
                desc: 'Ресторан Ферма Бенуа вмещает до 250 гостей в зимнее время и до 400 – в летнее, благодаря террасе в Саду Бенуа. Доброжелательные хостесс встретят теплой улыбкой каждого гостя и проводят в один из залов Фермы Бенуа. Зона рядом с детской комнатой - излюбленное место семей с детьми. Любителям живой музыки и оживленной беседы подойдет центральный зал со сценой, где находится открытая кухня. Если вы планируете небольшое мероприятие, то рекомендуем занять нашу по-домашнему уютную гостиную, отделенную от основного зала стеклянными дверями. А на чашку кофе мы приглашаем вас пройти в Лавку, где продается свежая выпечка и сладости, производимые в нашей кондитерской.'
            },
            {
                name: 'Парк 300-летия Санкт-Петербурга',
                adress: 'Приморский пр., 74',
                lat: 59.983694,
                lng: 30.194355,
                style: '2 стиль',
                architector: '2 архитектор',
                pic: 'https://lh5.googleusercontent.com/p/AF1QipOIOBOCAXkSnU0KytelSkehOsMZ_2kvNrCA-0W6=w155-h168-p-k-no',
                desc: 'Открытая территория с просторным пляжем, тенистыми аллеями и чистым морским воздухом. Находится непосредственно рядом с Финским заливом.\n' + 'Самый юный парк Петербурга с впечатляющими возможностями для досуга: от наслаждения морским бризом и пляжным отдыхом на берегу до головокружительных приключений на аттракционах и городских праздниках. Парк зелёный и приятный для прогулок. Здесь много цветов, растут яблони, которые подарил парку город Хельсинки, липы и многое другое. Есть бассейн и фонтаны.\n' +
                    '\n' +
                    'Источник: https://kudago.com/spb/place/300-letiya/'
            },
            {
                name: 'ЦНИИ РТК',
                adress: 'Тихорецкий пр., 21',
                lat: 60.021126,
                lng: 30.369702,
                style: 'Советский модернизм',
                architector: 'Артюшин Б. И., Савин С. В.',
                pic: 'https://lh5.googleusercontent.com/p/AF1QipNpHzneSou6g4qkwsSPmycw-ImryLzdudy22-qk=w314-h168-p-k-no',
                desc: 'Строительство здания для конструкторского бюро было начато еще в 1973 году по проекту архитекторов С. В. Савина и Б. И. Артюшина. Стройка затянулась до 1987 года. Архитектурной доминатой комплекса была и остается башня-лаборатория для испытания космической техники. По своей устремленной в небеса форме она контрастировала с низким, вытянутым зданием института.'
            },
            {
                name: 'Лахта-центр',
                adress: 'Парадная ул., 1',
                lat: 59.987263,
                lng: 30.177687,
                style: 'Современный',
                architector: 'Компания RMJM под руководством Тони Кеттла',
                pic: 'https://img.tourister.ru/files/2/1/5/4/0/8/3/2/original.jpg',
                desc: 'Лахта Центр – многофункциональный комплекс в Санкт-Петербурге со штаб-квартирой группы «Газпром» и общественными пространствами, занимающими около трети площадей. '
            }
        ]
    }
  }

  render() {
    return (
        <div className='main__container'>
          <Sidebar places={this.state.places} />
          <MapComponent places={this.state.places}/>
        </div>
    );
  }
}

export default App;
