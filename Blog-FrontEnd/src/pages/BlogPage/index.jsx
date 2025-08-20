import { useState } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import LayoutDefault from '../../layouts/LayoutDefault';

function BlogPage() {

    return (
        <LayoutDefault>
            <Container>
                <Row className='mt-5'>
                    <Col>
                        BlogPage
                    </Col>
                </Row>
            </Container>
        </LayoutDefault>
    )
}

export default BlogPage;