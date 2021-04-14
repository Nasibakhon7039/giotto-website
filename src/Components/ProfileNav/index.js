import React, { useState } from 'react'
import { MenuBox, MenuItem, MenuItemActive, MenuLink, MenuList } from "./Item"
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/authActions/authActions'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function ProfileNav({ active }) {
    const dispatch = useDispatch()
    const router = useRouter()

    const [urls, setUrls] = useState([
        {
            url: '/profile',
            name: 'settings',
            label: 'Личные данные'
        },
        {
            url: '/profile/orders',
            name: 'orders',
            label: 'Мои заказы'
        },
        {
            url: '/profile/address',
            name: 'address',
            label: 'Мои адреса'
        },
        {
            url: '/',
            name: 'logout',
            label: 'Выйти',
            onClick: (event) => {
                event.preventDefault()
                dispatch(logout())
                router.push('/')
            }
        },
    ])

    return (
        <div style={{
            position: 'sticky',
            top: '70px'
        }}>
            <MenuBox>
                <MenuList >
                    {
                        urls.map((item, i) =>
                            active === item.name ?
                                <MenuItemActive key={i}>
                                    <MenuLink href={item.url}>
                                        {item.label}
                                    </MenuLink>
                                </MenuItemActive> :
                                <MenuItem key={i}>
                                    <Link href={item.url} passHref>
                                        <MenuLink onClick={item.onClick}>
                                            {item.label}
                                        </MenuLink>
                                    </Link>
                                </MenuItem>
                        )
                    }
                </MenuList>
            </MenuBox>
        </div>
    )
}