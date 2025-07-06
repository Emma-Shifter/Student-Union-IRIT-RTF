import image01 from "./img/image-01.png"; 
import image02 from "./img/image-02.png"; 
import image03 from "./img/image-03.png"; 
import image04 from "./img/image-04.png"; 
import image05 from "./img/image-05.png"; 
import image06 from "./img/image-06.png"; 

import simage01 from './img/s-image-01.png';
import simage02 from './img/s-image-02.png'
import simage03 from './img/s-image-03.png'

const importAll = (r) => r.keys().map(r);
const imagesNP = importAll(require.context('./img/np', false, /\.(png|jpe?g|svg)$/));

const sliderList = [
    {image: simage01},
    {image: simage02},
    {image: simage03},
    {image: simage01},
    {image: simage02},
    {image: simage03},
]

const eventsList = [
    {
        id: 'np',
        title: 'НЕДЕЛЯ ПЕРВОКУРСНИКОВ',
        image: image01,
        eImages: imagesNP,
        descAdd: 'Каждый год неделя первокурсников проходит в разных тематиках, но неизменным остается одно: она приносит яркие эмоции и остается в памяти участников надолго.',
        desc: 'Серия из нескольких мероприятий, направленных на знакомство первокурсников друг с другом, внеучебной жизнью, нашей командой и институтом.'
    }, 
    {
        id: 'dp',
        title: 'Дебют первокурсников',
        image: image02,
        cardClass: "reversed",
        desc: 'Главный звездный момент каждого первокурсника — конкурс творческих номеров, в котором участвуют академические группы. Это шанс проявить себя и показать таланты на главной сцене Университета.'
    },
    {        
        id: 'vs',
        title: 'Вселенная ИРИТ-РТФ',
        image: image03,
        desc: 'Мероприятие, посвященное дню рождения института. Оно является праздником для всех студентов, преподавателей и даже абитуриентов ИРИТ-РТФ.'
    },
    {
        id: 'hsa',
        title: 'Школа студенческого актива (ШСА)',
        image: image04,
        cardClass: "reversed",
        desc: 'Серия из четырех мероприятий для обучения и развития активистов. Участники заводят новые знакомства, получают знания о работе Союза студентов и навыки для организации собственных событий.'
    },
    {
        id: 'ssa',
        title: 'Слет студенческого актива',
        image: image05,
        desc: 'Каждую весну 64 активных студента отправляются на Слет студенческого актива, где развивают командный дух, коммуникативные, профессиональныеи творческие навыки.'
    },
    {
        id: 'dr',
        title: 'День радио',
        image: image06,
        cardClass: "reversed",
        desc: 'Главный праздник радистов, традиционно отмечаемый 7 мая. Он наполнен воспоминаниями, теплыми встречамии традициями. Его любят и ждут студенты, преподаватели, сотрудники и выпускники.'
    }
]

export {eventsList, sliderList};