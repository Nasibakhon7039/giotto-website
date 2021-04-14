import React from 'react'
import { FeatureContainer, Headline, Info, SubHeadline, FeatureItem, Details, Line, StyledLink } from './Product'

export default function Features({ product }) {
    return (
        <FeatureContainer id="features">
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
            {/* <Headline>Характеристики</Headline>
            <SubHeadline>Основные характеристики</SubHeadline>
            <FeatureItem>
                <Info>Тип</Info>
                <Line />
                <Details>ЖК-телевизор</Details>
            </FeatureItem>
            <FeatureItem>
                <Info>Диагональ</Info>
                <Line />
                <Details>24" (61 см)</Details>
            </FeatureItem>
            <FeatureItem>
                <Info>Формат экрана</Info>
                <Line />
                <Details>16:9</Details>
            </FeatureItem>
            <FeatureItem>
                <Info>Разрешение</Info>
                <Line />
                <Details>1366x768</Details>
            </FeatureItem>
            <FeatureItem>
                <Info>Разрешение HD</Info>
                <Line />
                <Details>720p HD</Details>
            </FeatureItem>
            <FeatureItem>
                <Info>Светодиодная (LED) подсветка</Info>
                <Line />
                <Details>есть</Details>
            </FeatureItem>
            <FeatureItem>
                <Info>Стереозвук</Info>
                <Line />
                <Details>есть</Details>
            </FeatureItem>
            <FeatureItem>
                <Info>Частота обновления экрана</Info>
                <Line />
                <Details>50 Гц</Details>
            </FeatureItem>
            <FeatureItem>
                <Info>Smart TV</Info>
                <Line />
                <Details>есть</Details>
            </FeatureItem>
            <FeatureItem>
                <Info>Платформа Smart TV</Info>
                <Line />
                <Details>Linux</Details>
            </FeatureItem>
            <FeatureItem>
                <Info>Год создания модели</Info>
                <Line />
                <Details>2020</Details>
            </FeatureItem>
            <SubHeadline>Изображение</SubHeadline>
            <FeatureItem>
                <Info>Яркость</Info>
                <Line />
                <Details>200 кд/м2</Details>
            </FeatureItem>
            <FeatureItem>
                <Info>Динамическая контрастность</Info>
                <Line />
                <Details>80000:1</Details>
            </FeatureItem>
            <FeatureItem>
                <Info>Угол обзора</Info>
                <Line />
                <Details>178°</Details>
            </FeatureItem>
            <FeatureItem>
                <Info>Время отклика пикселя</Info>
                <Line />
                <Details>6 мс</Details>
            </FeatureItem>
            <FeatureItem>
                <Info>Прогрессивная развертка</Info>
                <Line />
                <Details>есть</Details>
            </FeatureItem>
            <FeatureItem>
                <Info>Страна производства</Info>
                <Line />
                <Details>Россия</Details>
            </FeatureItem>
            <Link href="/product" passHref>
                <StyledLink big>Все характеристики</StyledLink>
            </Link> */}
        </FeatureContainer>
    )
}
