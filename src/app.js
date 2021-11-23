import { useState } from 'react';
import { Container, Navbar, Row, Col, Form } from 'react-bootstrap';
import * as d3 from 'd3';
import { TableWrapper } from './components/table-wrapper';

const { Brand } = Navbar;
const { Control } = Form;

const emptyData = [[]];
emptyData.columns = [];

export const App = () => {
  const [data, setData] = useState(emptyData);

  const onFileSelect = async evt => {
    const file = evt.target.files.length === 1 ? evt.target.files[0] : null;

    if (!file) {
      setData(emptyData);
      return;
    }

    const url = URL.createObjectURL(file);

    try {
      const csvData = await d3.csv(url);

      setData(csvData);
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Brand className='ms-2'>
          <img 
            src='/digestable_512.png' 
            alt='digestable logo'
            height='25px'
            className='me-1 align-text-bottom'              
          />
          <span className='align-text-bottom'>diges<b>table</b></span>
        </Brand>        
        <Form>
          <Control 
            type='file'
            accept='.csv'
            onChange={ onFileSelect }
          />
        </Form>
      </Navbar>
      <Container fluid style={{ height: "calc(100% - 100px)" }}>      
        <Row style={{ height: "100%" }}>
          <Col className='mt-3' style={{ height: "100%"}}>
            <TableWrapper data={ data } />
          </Col>
        </Row>
      </Container>
    </>
  );
};
