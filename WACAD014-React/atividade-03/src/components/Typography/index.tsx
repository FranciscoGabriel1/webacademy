import React from "react";
import { Row } from "react-bootstrap";

interface TypographyProps {
  title: string;
}

const Typography: React.FC<TypographyProps> = ({ title }) => {
  return (
    <Row>
      <h3 style={{ color: "#E5E5E5" }}>{title}</h3>
    </Row>
  );
};

export default Typography;
