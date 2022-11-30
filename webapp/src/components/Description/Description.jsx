import React, {useEffect} from "react";
import "../styles/description.css"
import Dragged from "../Dragged/Dragged";

function Description() {
    useEffect(() => {
        let but = document.querySelector("button.menu-button")
        but.addEventListener("click", () => {
            document.querySelectorAll("#description, li.header-block")
                .forEach((el) => {
                el.classList.toggle("active")
            })
        })
    }, [])
    return (
        <div id="description">
            <div className="desc-header">
                <div className="header-block">Выполнил: Миху Вадим Дмитриевич</div>
                <div className="header-block">s339106</div>
                <div className="header-block">P32301</div>
                <div className="header-block">#4578</div>
                <a href="https://github.com/filberol" className="header-block">GitHub</a>
                <Dragged />
            </div>
            <div className="desc-text">Переписать приложение из предыдущей лабораторной работы с использованием следующих технологий:</div>
            <ul>
                <li>Уровень back-end должен быть основан на Spring.</li>
                <li>Уровень front-end должен быть построен на React + Redux (необходимо использовать ES6 и JSX) с использованием набора компонентов Belle</li>
                <li>Взаимодействие между уровнями back-end и front-end должно быть организовано посредством REST API.</li>
            </ul>
            <div className="desc-text">Приложение по-прежнему должно включать в себя 2 страницы - стартовую и основную страницу приложения. Обе страницы приложения должны быть адаптированы для отображения в 3 режимах:</div>
            <ul>
                <li>"Десктопный" - для устройств, ширина экрана которых равна или превышает 1055 пикселей.</li>
                <li>"Планшетный" - для устройств, ширина экрана которых равна или превышает 859, но меньше 1055 пикселей.</li>
                <li>"Мобильный"- для устройств, ширина экрана которых меньше 859 пикселей.</li>
            </ul>
            <div className="desc-text">Дополнительные требования к приложению:</div>
            <ul>
                <li>Все результаты проверки должны сохраняться в базе данных под управлением СУБД PostgreSQL.</li>
                <li>Для доступа к БД необходимо использовать Spring Data.</li>
            </ul>
        </div>
    )
}

export default Description