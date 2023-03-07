import uuid from 'uuid/v4';

export const dataForPage = {
  submenu: {
    [uuid()]: {
      linkText: 'Доставка',
      link: '#'
    },
    [uuid()]: {
      linkText: 'Оплата',
      link: '#'
    },
    [uuid()]: {
      linkText: 'Отзывы',
      link: '#'
    },
    [uuid()]: {
      linkText: 'Вопрос - ответ',
      link: '#'
    },
    [uuid()]: {
      linkText: 'Контакты',
      link: '#'
    }
  },
  menu: {
    [uuid()]: {
      linkText: 'Парикмахерская',
      link: '#'
    },
    [uuid()]: {
      linkText: 'Барбершоп',
      link: '#'
    },
    [uuid()]: {
      linkText: 'Маникюр',
      link: '#'
    },
    [uuid()]: {
      linkText: 'Педикюр',
      link: '#'
    },
    [uuid()]: {
      linkText: 'Массаж',
      link: '#'
    },
    [uuid()]: {
      linkText: 'Мебель',
      link: '#'
    }
  },
  specialOffersProducts: {
    [uuid()]: {
      imageClass: 'product-image_product-0001',
      text: 'Парикмахерское кресло «Норм» гидравлическое',
      price: '9 900 ₽',
      buttonText: 'Купить'
    },
    [uuid()]: {
      imageClass: 'product-image_product-0001',
      text: 'Парикмахерское кресло «Норм» гидравлическое',
      price: '9 900 ₽',
      buttonText: 'Купить'
    },
    [uuid()]: {
      imageClass: 'product-image_product-0001',
      text: 'Парикмахерское кресло «Норм» гидравлическое',
      price: '9 900 ₽',
      buttonText: 'Купить'
    },
    [uuid()]: {
      imageClass: 'product-image_product-0001',
      text: 'Парикмахерское кресло «Норм» гидравлическое',
      price: '9 900 ₽',
      buttonText: 'Купить'
    }
  },
  infoBlockItems: {
    [uuid()]: {
      title: 'Получайте бонусы и подарки',
      text: `Каждый месяц разыгрываем\n10 000 рублей для наших клиентов`,
      input: {
        id: 'input_info-block1',
        type: 'email',
        name: 'email',
        value: 'Введите e-mail'
      },
      imageClass: 'info-block__item_envelope'
    },
    [uuid()]: {
      title: 'Заходите к нам',
      text: `Более 300 магазинов\nпо всей России`,
      buttonText: 'Карта магазинов'
    }
  },
  socialIcons: {
    [uuid()]: {
      imageClass: 'social-links-menu__button_youtube',
      link: 'https://www.youtube.com'
    },
    [uuid()]: {
      imageClass: 'social-links-menu__button_vk',
      link: 'https://vk.com'
    },
    [uuid()]: {
      imageClass: 'social-links-menu__button_fb',
      link: 'https://www.facebook.com'
    },
    [uuid()]: {
      imageClass: 'social-links-menu__button_instagram',
      link: 'https://www.instagram.com'
    }
  }
};
