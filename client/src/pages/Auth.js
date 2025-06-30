import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useLocation} from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <Container 
    className='d-flex justify-content-center align-items-center'
    style={{height: window.innerHeight - 54}}
    >
    <Card style={{width: 600}} className='p-5'>
        <h2 className='m-auto'>{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className='d-flex flex-column'>
            <Form.Control
                className='mt-2'
                placeholder="Введите e-mail"
            />
            <Form.Control
                className='mt-2'
                placeholder="Введите пароль"
            />
            <Row 
            className='d-flex justify-content-between mt-3'>
                
                <Button 
                    style={{width: "fit-content"}}
                    className='mx-auto'
                
                    variant='outline-success'
                >
                    {isLogin ? "Войти" : "Зарегистрироваться"}
                </Button>
                {isLogin ? 
                <div className='text-center mt-2'>
                    Нет аккаунта?  
                    <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                </div>
                :
                <div className='text-center mt-2'>
                    Уже есть аккаунт?  
                    <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                </div>
                }
            </Row>
            
        </Form>
    </Card>
    
    </Container>
  )
}

export default Auth
