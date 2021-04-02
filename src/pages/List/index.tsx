import React from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import { Container, Content } from "./styles";

const List: React.FC = () => {
  const options = [
    { value: "Luiz", label: "Luiz" },
    { value: "Timbó", label: "Timbó" },
    { value: "Alcântara", label: "Alcântara" },
  ];

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#E44C4E">
        <SelectInput options={options} />
      </ContentHeader>

      <Content>
        <HistoryFinanceCard cardColor="#313862" tagColor="#E44C4E" title="Conta de Luz" subtitle="27/07/2020" amount="R$ 130" />
        <HistoryFinanceCard cardColor="#313862" tagColor="#E44C4E" title="Conta de Luz" subtitle="27/07/2020" amount="R$ 130" />
        <HistoryFinanceCard cardColor="#313862" tagColor="#E44C4E" title="Conta de Luz" subtitle="27/07/2020" amount="R$ 130" />
        <HistoryFinanceCard cardColor="#313862" tagColor="#E44C4E" title="Conta de Luz" subtitle="27/07/2020" amount="R$ 130" />
        <HistoryFinanceCard cardColor="#313862" tagColor="#E44C4E" title="Conta de Luz" subtitle="27/07/2020" amount="R$ 130" />
        <HistoryFinanceCard cardColor="#313862" tagColor="#E44C4E" title="Conta de Luz" subtitle="27/07/2020" amount="R$ 130" />
        <HistoryFinanceCard cardColor="#313862" tagColor="#E44C4E" title="Conta de Luz" subtitle="27/07/2020" amount="R$ 130" />
        <HistoryFinanceCard cardColor="#313862" tagColor="#E44C4E" title="Conta de Luz" subtitle="27/07/2020" amount="R$ 130" />
        <HistoryFinanceCard cardColor="#313862" tagColor="#E44C4E" title="Conta de Luz" subtitle="27/07/2020" amount="R$ 130" />
        <HistoryFinanceCard cardColor="#313862" tagColor="#E44C4E" title="Conta de Luz" subtitle="27/07/2020" amount="R$ 130" />
        <HistoryFinanceCard cardColor="#313862" tagColor="#E44C4E" title="Conta de Luz" subtitle="27/07/2020" amount="R$ 130" />
        <HistoryFinanceCard cardColor="#313862" tagColor="#E44C4E" title="Conta de Luz" subtitle="27/07/2020" amount="R$ 130" />
        <HistoryFinanceCard cardColor="#313862" tagColor="#E44C4E" title="Conta de Luz" subtitle="27/07/2020" amount="R$ 130" />
      </Content>
    </Container>
  );
};

export default List;
