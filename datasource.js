var datasource = [
    {
        "Название": "Токарный станок из металла",
        "Область": "Промышленность",
        "Подгруппа": "Металлургия",
        "Страна": "Англия",
        "Автор": "Модсли Г.",
        "Год": "1800"
    },
    {
        "Название": "Автоматический станок",
        "Область": "Промышленность",
        "Подгруппа": "Ткачество",
        "Страна": "Франция",
        "Автор": "Жаккар ж. М.",
        "Год": "1808"
    },
    {
        "Название": "Конвертер",
        "Область": "Промышленность",
        "Подгруппа": "Металлургия",
        "Страна": "Англия",
        "Автор": "Бессемер Г.",
        "Год": "1856"
    },
    {
        "Название": "Мартеновская печь",
        "Область": "Промышленность",
        "Подгруппа": "Металлургия",
        "Страна": "Франция",
        "Автор": "Мартены Эмиль и Пьер",
        "Год": "1864"
    },
    {
        "Название": "Железная дорога",
        "Область": "Транспорт",
        "Подгруппа": "Машиностроение",
        "Страна": "Англия",
        "Автор": "Стефенсон Д.",
        "Год": "1825"
    },
    {
        "Название": "Пароход",
        "Область": "Транспорт",
        "Подгруппа": "Машиностроение",
        "Страна": "Франция",
        "Автор": "Фултон Р.",
        "Год": "1803"
    },
    {
        "Название": "Автомобиль на пару",
        "Область": "Транспорт",
        "Подгруппа": "Машиностроение",
        "Страна": "Англия",
        "Автор": "Эванс О.",
        "Год": "1803"
    },
    {
        "Название": "Автомобиль на бензиновом двигателе",
        "Область": "Транспорт",
        "Подгруппа": "Машиностроение",
        "Страна": "Германия",
        "Автор": "Бенц К.",
        "Год": "1885"
    },
    {
        "Название": "Прообраз современных автомобилей",
        "Область": "Транспорт",
        "Подгруппа": "Машиностроение",
        "Страна": "Германия",
        "Автор": "Даймлер Г.",
        "Год": "1895"
    },
    {
        "Название": "Электродуговая лампа",
        "Область": "Быт",
        "Подгруппа": "Освещение",
        "Страна": "Россия",
        "Автор": "Яблочков П.Н.",
        "Год": "1875"
    },
    {
        "Название": "Электрическая лампа",
        "Область": "Быт",
        "Подгруппа": "Освещение",
        "Страна": "Америка",
        "Автор": "Эдисон Т.",
        "Год": "1880"
    },
    {
        "Название": "Телеграф",
        "Область": "Быт",
        "Подгруппа": "Связь",
        "Страна": "Америка",
        "Автор": "Морзе С.",
        "Год": "1844"
    },
    {
        "Название": "Радио и беспроводной телеграф",
        "Область": "Быт",
        "Подгруппа": "Связь",
        "Страна": "Россия",
        "Автор": "Попов А.С.",
        "Год": "1896"
    },
    {
        "Название": "Электромагнитная индукция",
        "Область": "Наука",
        "Подгруппа": "Физика",
        "Страна": "Англия",
        "Автор": "Фарадей М.",
        "Год": "1831"
    },
    {
        "Название": "Теория электромагнитных волн",
        "Область": "Наука",
        "Подгруппа": "Физика",
        "Страна": "Англия",
        "Автор": "Максвелл Дж. К.",
        "Год": "1865"
    },
    {
        "Название": "Доказал теорию Максвелла",
        "Область": "Наука",
        "Подгруппа": "Физика",
        "Страна": "Германия",
        "Автор": "Герц Г.",
        "Год": "1883"
    },
    {
        "Название": "Магнитные волны – атомное строен. Веществ.",
        "Область": "Наука",
        "Подгруппа": "Физика",
        "Страна": "Нидерланды",
        "Автор": "Лоренц Х.",
        "Год": "1878"
    },
    {
        "Название": "Электрон",
        "Область": "Наука",
        "Подгруппа": "Физика",
        "Страна": "Англия",
        "Автор": "Стоней Дж.",
        "Год": "1891"
    },
    {
        "Название": "Рентгеновский луч",
        "Область": "Наука",
        "Подгруппа": "Физика",
        "Страна": "Германия",
        "Автор": "Рентген В. К.",
        "Год": "1895"
    },
    {
        "Название": "Паровоз",
        "Область": "Транспорт",
        "Подгруппа": "Машиностроение",
        "Страна": "Англия",
        "Автор": "Ричард Тревитик",
        "Год": "1801"
    },
    {
        "Название": "Прокатный стан",
        "Область": "Промышленность",
        "Подгруппа": "Металлургия",
        "Страна": "Германия",
        "Автор": "Маннесман",
        "Год": "1885"
    },
    {
        "Название": "Электропоезд",
        "Область": "Транспорт",
        "Подгруппа": "Машиностроение",
        "Страна": "Германия",
        "Автор": "Тревитик Р.",
        "Год": "1879"
    },
    {
        "Название": "Бензин",
        "Область": "Промышленность",
        "Подгруппа": "Топливо",
        "Страна": "Англия",
        "Автор": "Фарадей М.",
        "Год": "1825"
    },
    {
        "Название": "Керосиновая лампа",
        "Область": "Быт",
        "Подгруппа": "Освещение",
        "Страна": "Россия",
        "Автор": "Лукасевич И.",
        "Год": "1853"
    },
    {
        "Название": "Висячий железнодорожный мост",
        "Область": "Архитектура",
        "Подгруппа": "Строительство",
        "Страна": "Америка",
        "Автор": "Веррантиус, Пойе, Финли",
        "Год": "1801"
    },
    {
        "Название": "Аэростат",
        "Область": "Транспорт",
        "Подгруппа": "Аэротранспорт",
        "Страна": "Франция",
        "Автор": "Монгольфье",
        "Год": "1783"
    },
    {
        "Название": "Дирижабль",
        "Область": "Транспорт",
        "Подгруппа": "Аэротранспорт",
        "Страна": "Франция",
        "Автор": "Минье",
        "Год": "1780"
    },
    {
        "Название": "Телефон",
        "Область": "Быт",
        "Подгруппа": "Связь",
        "Страна": "Россия",
        "Автор": "Белл А.",
        "Год": "1876"
    },
    {
        "Название": "Фонограф",
        "Область": "Быт",
        "Подгруппа": "Запись",
        "Страна": "Америка",
        "Автор": "Эдисон Т.",
        "Год": "1877"
    },
    {
        "Название": "Кинематограф",
        "Область": "Быт",
        "Подгруппа": "Запись",
        "Страна": "Франция",
        "Автор": "Люмьер",
        "Год": "1895"
    }
];