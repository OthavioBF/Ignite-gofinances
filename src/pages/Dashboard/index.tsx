import React from "react";
import { HighLightCard } from "../../components/HighLightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighLightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "income",
      title: "Desenvolvimento de Site",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2020",
    },
    {
      id: "2",
      type: "outcome",
      title: "Desenvolvimento de Site",
      amount: "R$ 1.200,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2020",
    },
    {
      id: "3",
      type: "outcome",
      title: "Desenvolvimento de Site",
      amount: "R$ 2.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2020",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/59673868?v=4",
              }}
            />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Othavio</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighLightCards>
        <HighLightCard
          type="up"
          title="Entrada"
          amount="R$ 17.400,00"
          lastTransaction="Ultima entrada dia 13 de abril"
        />
        <HighLightCard
          type="down"
          title="Saidas"
          amount="R$ 17.400,00"
          lastTransaction="Ultima entrada dia 13 de abril"
        />
        <HighLightCard
          type="total"
          title="Total"
          amount="R$ 17.400,00"
          lastTransaction="Ultima entrada dia 13 de abril"
        />
      </HighLightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
