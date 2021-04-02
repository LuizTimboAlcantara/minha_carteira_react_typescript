import React from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const options = [
    { value: "Luiz", label: "Luiz" },
    { value: "Timbó", label: "Timbó" },
    { value: "Alcântara", label: "Alcântara" },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};
export default Dashboard;
