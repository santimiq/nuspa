import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import styles from './dropdown.scss'

const DropdownApa = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="butttonResponsive">
      <Button  onClick={toggle} cssModule={styles.togglebtn}>{props.title}</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          {props.children}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default DropdownApa;