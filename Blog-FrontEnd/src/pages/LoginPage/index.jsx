import { useState } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Api from '../../core/Api';

function LoginPage() {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    async function handleLogin() {
        const res = await Api.get('users?login=' + login)
        const { data } = res;
        if(data.length){
            const user = data[0]            
            if(user.password === senha){
                navigate('/home')
                return
            } else {
                alert("Login ou senha inválidos")
            }
        }
    }
    return (
        <Container>
            <Row className='mt-5'>
                <Col md={{ span: 4, offset: 4 }}>
                    <form>
                        <div className='mt-3'>
                            <Form.Label>Login</Form.Label>
                            <Form.Control type='text' value={login} onChange={e => setLogin(e.target.value)} />
                        </div>
                        <div className='mt-3'>
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type='password' value={senha} onChange={e => setSenha(e.target.value)} />
                        </div>
                        <div className='mt-3'>
                            <Button variant='primary' onClick={handleLogin}>
                                Acessar
                            </Button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage;