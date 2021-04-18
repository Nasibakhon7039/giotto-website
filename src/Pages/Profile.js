import React, { useEffect } from 'react'
import { Box, Grid } from '@material-ui/core'
import Cabinet from '../Components/Cabinet'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Wrapper } from '../Components/Wrapper'
import Layout from '../Layout/Layout'
import Navibar from '../Components/Navibar'
import { Button } from 'react-bootstrap'
import { logout } from '../redux/actions/authActions/authActions'

export default function Profile() {
  const user = useSelector((state) => state.auth.user)
  const router = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!user) router.push('/')
  }, [user])

  return (
    user && (
      <Layout>
        <Navibar />
        <Wrapper>
          <Grid className='profile-page' container justify={'center'}>
            <Grid
              className='profile-text'
              item
              xs={12}
              md={12}
              justify={'center'}
              style={{ maxWidth: '75%', margin: '0 auto' }}
            >
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
              >
                <h2>Личные данные</h2>
                <Button variant='text' onClick={() => dispatch(logout())}>
                  Выйти
                </Button>
              </Box>
              <hr
                style={{
                  borderTop: '0.1px solid lightgrey!important',
                }}
              />
            </Grid>
            <Grid item xs={12} md={9} className={`cabinet_space`}>
              <Cabinet user={user} />
            </Grid>
          </Grid>
        </Wrapper>
      </Layout>
    )
  )
}
