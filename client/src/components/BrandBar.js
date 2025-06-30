import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { Row, Col, Card } from 'react-bootstrap'; // Добавлен Col

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex flex-wrap"> {/* flex-wrap для переноса на новую строку */}
      {device.brands.map((brand) => (
        <Col key={brand.id} className="mb-3"> {/* Адаптивные колонки */}
          <Card
            style={{ cursor: 'pointer' }}
            className="p-3"
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand?.id ? 'primary' : 'light'} // Защита от undefined
          >
            {brand.name}
          </Card>
        </Col>
      ))}
    </Row>
  );
});

export default BrandBar;