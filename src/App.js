import React from 'react';
import shortid from 'shortid';
import Block from './components/Block';
import BlockHeader from './components/BlockHeader';
import List from './components/List';
import ListItem from './components/ListItem';
import TopRightBanner from './components/TopRightBanner';
import StockIndices from './components/StockIndices';
import YandexBanner from './components/Yandex';
import SearchForm from './components/SearchForm';
import MainBanner from './components/MainBanner';
import WeatherWidget from './components/WeatherWidget';
import './bootstrap.min.css';
import './App.css';

function App() {
  const newsCategories = [
    {
      href: '#',
      text: 'Сейчас в СМИ',
    },
    {
      href: '#',
      text: 'в Германии',
    },
    {
      href: '#',
      text: 'Рекомендуем',
    },
  ];

  const hotNews = [
    {
      icon: 'icon',
      href: '#',
      title: 'Путин упростил получение автомобильных номеров',
    },
    {
      icon: 'icon',
      href: '#',
      title: 'В команде Зеленского раскрыли план реформ на Украине',
    },
    {
      icon: 'icon',
      href: '#',
      title: '"Турпомощь" прокоментировала гибель десятклв россиян в Анталье',
    },
    {
      icon: 'icon',
      href: '#',
      title: 'Суд закрыл дело Демпартии США против России',
    },
    {
      icon: 'icon',
      href: '#',
      title: 'На Украине призвали создать ракеты для удара по Москве',
    },
  ];

  const topRightBanner = {
    img: '/',
    href: '#',
    title: 'Работа над ошибками',
    text: 'Смотрите на Яндексе и запоминайте',
  };

  const searchTypes = [
    'Видео',
    'Картинки',
    'Новости',
    'Карты',
    'Маркет',
    'Переводчик',
    'Эфир',
    'ещё',
  ];

  const mainBanner = {
    img: '/',
    href: '#',
  };

  const weather = {
    pic: 'rain',
    now: '+17',
    morning: '+17',
    afternoon: '+20',
  };

  const preferencies = [
    {
      href: '#',
      title: 'Недвижимость',
      text: ' - о сталинках',
    },
    {
      href: '#',
      title: 'Маркет',
      text: ' - люстры и люстры',
    },
    {
      href: '#',
      title: 'Авто.ру',
      text: ' - привод 4х4 до 500 000',
    },
  ];

  const tvProgramm = [
    {
      href: '#',
      title: '02:00 THT.Best',
      text: ' THT International',
    },
    {
      href: '#',
      title: '02:15 Джинглики',
      text: ' Карусель INT',
    },
    {
      href: '#',
      title: '02:25 Наедине со всеми',
      text: ' Первый',
    },
  ];

  const topRatedStreams = [
    {
      icon: 'icon',
      href: '#',
      title: 'Управление как исскуство',
      text: ' Успех',
    },
    {
      icon: 'icon',
      href: '#',
      title: 'Ночь. Мир в это время',
      text: ' earthTV',
    },
    {
      icon: 'icon',
      href: '#',
      title: 'АндрейВозн...',
      text: ' Соверенно секретно',
    },
  ];

  return (
    <body>
      <Block className='top-block'>
        <Block className='news'>
          <BlockHeader items={newsCategories}>
            <span className='date'>31 июня, среда 02 32</span>
          </BlockHeader>
          <List>
            {hotNews.map((item) => <ListItem key={shortid.generate()} item={item} />)}
          </List>
          <Block className='stocks'>
            <StockIndices />
          </Block>
        </Block>
        <Block className='top-right_banner'>
          <TopRightBanner {...topRightBanner} />
        </Block>
      </Block>
      <Block className='search-block_container'>
        <YandexBanner />
        <Block className='search'>
          <Block className='search-types_container'>
            {searchTypes.map((item) => <a key={shortid.generate()} href='#'>{item}</a>)}
          </Block>
          <SearchForm />
          <span className='search-hint'>Найдется всё. Например, <a className='search-sample' href="#">фазы луны сегодня</a></span>
        </Block>
      </Block>
      <Block className='main-banner'>
        <MainBanner {...mainBanner} />
      </Block>
      <Block className='info-blocks'>
        <Block className='info-block_item'>
          <Block className='weather-container'>
          <BlockHeader items={[{
            href: '#',
            text: 'Погода',
          }]} />
            <WeatherWidget {...weather} />
          </Block>
          <Block className='recent-pages'>
            <BlockHeader items={[{
              href: '#',
              text: 'Посещаемое',
            }]} />
            <List>
              {preferencies.map((item) => <ListItem key={shortid.generate()} item={item}>
                {item.text}
              </ListItem>)}
          </List>
          </Block>
        </Block>
        <Block className='info-block_item'>
          <Block className='maps'>
            <a href='#'>Карта Германии</a>
            <p>Рассписание</p>
          </Block>
          <Block className='tv'>
            <BlockHeader items={[{
              href: '#',
              text: 'Телепрограмма',
            }]}>
              <span className='tv-show'>Эфир</span>
            </BlockHeader>
            <List>
              {tvProgramm.map((item) => <ListItem key={shortid.generate()} item={item}>
                {item.text}
              </ListItem>)}
            </List>
          </Block>
        </Block>
        <Block className='info-block_item'>
        <Block className='stream'>
            <BlockHeader items={[{
              href: '#',
              text: 'Эфир',
            }]} />
            <List>
              {topRatedStreams.map((item) => <ListItem key={shortid.generate()} item={item}>
                {item.text}
              </ListItem>)}
            </List>
          </Block>
        </Block>
      </Block>
    </body>
  );
}

export default App;
