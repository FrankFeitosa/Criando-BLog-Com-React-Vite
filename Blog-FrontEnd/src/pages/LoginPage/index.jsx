import { useState } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    async function handleLogin() {
       navigate('/home')
    }
    return (
        <Container>
            <Row className='mt-5'>
                <Col md={{span: 4, offset: 4}}>
                    <form>
                        <div className='mt-3'>
                            <Form.Label>Login</Form.Label>
                            <Form.Control type='text' onChange={e => setLogin(e.target.value)} />
                        </div>
                        <div className='mt-3'>
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type='password' onChange={e => setSenha(e.target.value)} />
                        </div>
                        <div className='mt-3'>
                            <Button variant='primary' onClick={handleLogin()}>
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