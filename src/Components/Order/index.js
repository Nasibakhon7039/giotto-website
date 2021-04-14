import React from "react";
import {
    OrderContainer, OrderHorizontalChild,
    OrderHorizontalItem,
    OrderHorizontalList,
    OrderSubTitle,
    OrderTitle, OrderVerticalItem,
    OrderVerticalList
} from "./item";
import { Grid } from "@material-ui/core";
import { numberToPrice } from '../../libs/numberToPrice'
import { calcTotalPrice } from '../../libs/calcTotalPrice'

export default function OrderItem(props) {
    const { order } = props;

    return (
        <OrderContainer>
            <OrderTitle>Заявка принята</OrderTitle>
            <OrderSubTitle>Спасибо за ваш выбор. Мы приняли ваш заказ.</OrderSubTitle>
            <OrderHorizontalList>
                <OrderHorizontalItem>
                    <OrderHorizontalChild>
                        <span>Статус</span>
                        <span>{order.status}</span>
                    </OrderHorizontalChild>
                </OrderHorizontalItem>
                <OrderHorizontalItem>
                    <OrderHorizontalChild>
                        <span>Метод оплаты</span>
                        <span>{order.payment_method}</span>
                    </OrderHorizontalChild>
                </OrderHorizontalItem>
                <OrderHorizontalItem>
                    <OrderHorizontalChild>
                        <span>Дата заказа</span>
                        <span>{order.created_at}</span>
                    </OrderHorizontalChild>
                </OrderHorizontalItem>
                <OrderHorizontalItem>
                    <OrderHorizontalChild>
                        <span>Общая сумма</span>
                        <span>{numberToPrice(calcTotalPrice(order.items))}</span>
                    </OrderHorizontalChild>
                </OrderHorizontalItem>
            </OrderHorizontalList>
            <OrderTitle>Список продуктов</OrderTitle>
            <Grid container>
                <Grid item md={12}>
                    <OrderVerticalList>
                        <OrderVerticalItem>
                            <span><b>Имя продукта</b></span>
                            <span><b>Цена</b></span>
                            <span><b>Кол-во</b></span>
                            <span><b>Общая цена</b></span>
                        </OrderVerticalItem>
                        {
                            order.items.map((item, i) =>
                                <OrderVerticalItem key={i}>
                                    <span>{item.product_name}</span>
                                    <span>{numberToPrice(item.price)}</span>
                                    <span>{item.quantity}</span>
                                    <span>{numberToPrice(item.quantity * item.price)}</span>
                                </OrderVerticalItem>
                            )
                        }
                    </OrderVerticalList>
                </Grid>
            </Grid>
        </OrderContainer>
    )
}