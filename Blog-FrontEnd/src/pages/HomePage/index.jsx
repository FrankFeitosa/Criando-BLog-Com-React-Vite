    import { useState } from 'react';
    import { Row, Col, Container, Form, Button } from 'react-bootstrap'
    import Header from '../../layouts/Header.';
    import LayoutDefault from '../../layouts/LayoutDefault';

    function HomePage() {

        return (
            <LayoutDefault>
                <Container>
                    <Row className='mt-5'>
                        <Col>
                            HomePage
                        </Col>
                    </Row>
                </Container>
            </LayoutDefault>
        )
    }

    export default HomePage;