import { useEffect, useState } from 'react';
import { Row, Col, Container, Form, Button, Card } from 'react-bootstrap'
import LayoutDefault from '../../layouts/LayoutDefault';
import Api from '../../core/Api';
import Modals from '../../components/Modals';

function BlogPage() {

    const [list, setList] = useState([])
    const [title, setTitle] = useState([])
    const [content, setContent] = useState([])
    const [show, setShow] = useState(false);


    async function getList() {
        const res = await Api.get('posts');
        setList(res.data)
    }
    async function handleSave() {
        await Api.post('posts', {
            title,
            content
        });
        alert("Post criado com sucesso!")
        setTitle('')
        setContent('')
        setShow(false)
        getList()
    }

    async function handleDelete(item) {
        const check = confirm("Tem certeza!")
        if (check) {
            await Api.delete('posts/' + item.id);
            getList();
        }
    }
    useEffect(() => {
        getList()
    }, [])

    return (
        <LayoutDefault>
            <Container>
                <Row>
                    <Col>
                        <h3>Posts</h3>
                        <Modals btnName="Novo Post" title="Novo Post" show={show} setShow={setShow} handleSave={handleSave}>
                            <form>
                                <div className='mt-3'>
                                    <Form.Label >Titulo</Form.Label>
                                    <Form.Control required type='text' value={title} onChange={e => setTitle(e.target.value)} />
                                </div>
                                <div className='mt-3'>
                                    <Form.Label>Conteúdo</Form.Label>
                                    <Form.Control required as='textarea' value={content} onChange={e => setContent(e.target.value)} />
                                </div>
                            </form>
                        </Modals>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {list.map((item, indice) => (
                            <Card className='mb-5' key={indice}>
                                <Card.Header>{item.title}</Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p>
                                            {' '}
                                            {item.content}.{' '}
                                        </p>
                                        <a href="">Comentar</a>
                                    </blockquote>
                                    <Button variant='danger' size='sm' onClick={() => handleDelete(item)}>Excluir</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        </LayoutDefault>
    )
}

export default BlogPage;