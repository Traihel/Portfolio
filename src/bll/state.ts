import {LinksNameType, SkillsNameType} from "../common/svgSelector/SvgSelector";
import SocialNetworkImg from '../assets/image/SocialNetwork.png'
import tidoListImg from '../assets/image/Todolist.png';

export const state: StateType = {
    en: {
        headerComponent: {
            menuName: 'Menu',
            nav: [
                {href: '#home', navName: 'Home'},
                {href: '#skills', navName: 'Skills'},
                {href: '#projects', navName: 'Portfolio'},
                {href: '#contacts', navName: 'Contact'},
            ],
            links: [
                {href: 'https://github.com/Traihel', svgName: 'GitHub'},
                {href: 'https://www.instagram.com/vova_tron/', svgName: 'Instagram'},
                {href: 'https://www.linkedin.com/in/vladimir-traihel/', svgName: 'Linkedin'},
                {href: 'https://vk.com/grodno1993', svgName: 'VK'},
                {href: 'https://www.codewars.com/users/Traihel', svgName: 'CodeWars'},
            ]
        },
        skillsComponent: {
            span: 'What I Do?',
            title: 'How I can help your next project',
            skills: [
                {
                    svgName: 'HTML',
                    description: 'The standard markup language for documents designed to be displayed in a web browser.'
                },
                {
                    svgName: 'CSS',
                    description: 'A Style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML'
                },
                {
                    svgName: 'SASS',
                    description: 'A CSS-based metalanguage designed to increase the abstraction level of CSS code and simplify cascading style sheet files.'
                },
                {
                    svgName: 'LESS',
                    description: 'Dynamic style language. It was influenced by the Sass style language, and in turn influenced its new "SCSS" syntax.'
                },
                {
                    svgName: 'JavaScript',
                    description: 'Multi-paradigm programming language. Supports object-oriented, imperative and functional styles. Is one of the core technologies of the World Wide Web'
                },
                {
                    svgName: 'TypeScript',
                    description: 'A programming language introduced by Microsoft in 2012 and positioned as a web application development tool that extends the capabilities of JavaScript.'
                },
                {
                    svgName: 'React',
                    description: 'An open source JavaScript library for developing user interfaces. Can be used to develop single page and mobile applications.'
                },
                {
                    svgName: 'Redux',
                    description: 'An open source JavaScript library for managing application state.'
                },
                {
                    svgName: 'Axios',
                    description: 'An open source library that allows you to make HTTP requests.'
                },
                {
                    svgName: 'Git',
                    description: 'A free and open source distributed version control system designed to process any project quickly and efficiently.'
                },
                {
                    svgName: 'Bootstrap',
                    description: 'A set of tools for creating sites and web applications. Includes HTML and CSS design templates for typography, web forms, buttons, labels, navigation blocks, and more.'
                },
                {
                    svgName: 'Material-ui',
                    description: 'A framework that produces ready-made Google solutions for fast and fairly simple web development.'
                },
                {
                    svgName: 'Postman',
                    description: 'An API platform that allows developers to design, build, test, and iterate their APIs.'
                },
                {
                    svgName: 'Storybook',
                    description: 'A UI library that can be used to document components. It also allows you to organize and assemble components.'
                },
                {
                    svgName: 'Snapshot Testing',
                    description: 'Tests that take a screenshot of the screen (reference screenshot) and compare it with the actual screenshot that is taken during the test run.'
                },
                {
                    svgName: 'Unit Testing',
                    description: 'The process of programming, checking the correctness of individual modules of the source code of programs.'
                },
            ]
        },
        projectsComponent: {
            span: 'Portfolio',
            title: 'Some of my most recent projects',
            projects: [
                {
                    title: 'Social Network',
                    img: SocialNetworkImg,
                    description: 'An online platform that is used for communication, dating, creating social relationships between people',
                },
                {
                    title: 'Todo list',
                    img: tidoListImg,
                    description: 'List of things you need to do or want to do',
                },

            ]
        }
    },
    ru: {
        headerComponent: {
            menuName: 'Меню',
            nav: [
                {href: '#home', navName: 'Главная'},
                {href: '#skills', navName: 'Скилы'},
                {href: '#projects', navName: 'Проекты'},
                {href: '#contacts', navName: 'Контакты'},
            ],
            links: [
                {href: 'https://github.com/Traihel', svgName: 'GitHub'},
                {href: 'https://www.instagram.com/vova_tron/', svgName: 'Instagram'},
                {href: 'https://www.linkedin.com/in/vladimir-traihel/', svgName: 'Linkedin'},
                {href: 'https://vk.com/grodno1993', svgName: 'VK'},
                {href: 'https://www.codewars.com/users/Traihel', svgName: 'CodeWars'},
            ]
        },
        skillsComponent: {
            span: 'Что я умею?',
            title: 'Мои навыки',
            skills: [
                {
                    svgName: 'HTML',
                    description: 'Стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере.'
                },
                {
                    svgName: 'CSS',
                    description: 'Формальный язык описания внешнего вида документа, написанного с использованием языка разметки.'
                },
                {
                    svgName: 'SASS',
                    description: 'Метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей.'
                },
                {
                    svgName: 'LESS',
                    description: 'Динамический язык стилей. Он создан под влиянием языка стилей Sass, и, в свою очередь, оказал влияние на его новый синтаксис «SCSS».'
                },
                {
                    svgName: 'JavaScript',
                    description: 'Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.'
                },
                {
                    svgName: 'TypeScript',
                    description: 'Язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript.'
                },
                {
                    svgName: 'React',
                    description: 'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Может использоваться для разработки одностраничных и мобильных приложений.'
                },
                {
                    svgName: 'Redux',
                    description: 'Библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения.'
                },
                {
                    svgName: 'Axios',
                    description: 'Библиотека с открытым исходным кодом, позволяющая делать HTTP-запросы.'
                },
                {
                    svgName: 'Git',
                    description: 'Бесплатная распределенная система управления версиями с открытым исходным кодом, предназначенная для быстрой и эффективной обработки любых проектов.'
                },
                {
                    svgName: 'Bootstrap',
                    description: 'Набор инструментов для создания сайтов и веб-приложений. Включает в себя HTML- и CSS-шаблоны оформления для типографики, веб-форм, кнопок, меток, блоков навигации и т.д.'
                },
                {
                    svgName: 'Material-ui',
                    description: 'Фрэймворк, предоставляющий готовые google решения для быстрой и довольно простой web разработки.'
                },
                {
                    svgName: 'Postman',
                    description: 'Платформа API, позволяющая разработчикам проектировать, создавать, тестировать и повторять свои API.'
                },
                {
                    svgName: 'Storybook',
                    description: 'Библиотека UI, которую можно использовать для документирования компонентов. Также она позволяет упорядочивать и собирать компоненты.'
                },
                {
                    svgName: 'Snapshot Testing',
                    description: 'Тесты, которые делают скриншот экрана (эталонный скриншот) и сравнивают с актуальным скриншотом, который делается во время прогона тестов.'
                },
                {
                    svgName: 'Unit Testing',
                    description: 'Процесс в программировании, позволяющий проверить на корректность отдельные модули исходного кода программы.'
                },
            ]
        },
        projectsComponent: {
            title: 'Некоторые из моих последних проектов',
            span: 'Портфолио',
            projects: [
                {
                    title: 'Social Network',
                    img: SocialNetworkImg,
                    description: 'Онлайн-платформа, которая используется для общения, знакомств, создания социальных отношений между людьми',
                },
                {
                    title: 'Todo list',
                    img: tidoListImg,
                    description: 'Список дел, которые вам нужно выполнить или того, что вы хотите сделать',
                },

            ]
        }
    },
}

//type
type StateType = {
    [key: string]: {
        headerComponent: HeaderComponentType
        skillsComponent: SkillsComponentsType
        projectsComponent: ProjectsComponentsType
    }
}

export type HeaderComponentType = {
    menuName: string
    nav: NavType[]
    links: LinksType[]
}

export type NavType = {
    href: HrefNavType
    navName: string
}

type HrefNavType = '#home' | '#skills' | '#projects' | '#contacts'

export type LinksType = {
    href: string
    svgName: LinksNameType
}

export type SkillsComponentsType = {
    span: string
    title: string
    skills: SkillType[]
}

type SkillType = {
    svgName: SkillsNameType
    description: string
}

export type ProjectsComponentsType = {
    span: string
    title: string
    projects: ProjectType[]
}

type ProjectType = {
    title: string
    img: string
    description: string
}