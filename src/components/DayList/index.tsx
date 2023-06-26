import { DateTitle } from "@components/DateTitle";
import { SectionList } from "react-native";
import {
  CardStatusStyleProps,
  Card,
  CardDescription,
  CardHour,
  CardStatus,
  Container,
  Divider,
} from "./styles";

type Props = {
  hour: String;
  text: String;
  type?: CardStatusStyleProps;
};

export function DayList() {
  const foods = [
    {
      date: "24.06.2023",
      data: [
        {
          id: "1",
          hour: "21:30",
          content: "X-Salada",
          healthier: "BAD",
        },
        {
          id: "2",
          hour: "22:30",
          content: "Whey Protein",
          healthier: "GOOD",
        },
        {
          id: "3",
          hour: "23:30",
          content: "Mingau de aveia",
          healthier: "BAD" as CardStatusStyleProps,
        },
      ],
    },
  ];
  return (
    <>
      <Container>
        <SectionList
          renderSectionHeader={({ section: { date } }) => (
            <DateTitle date={date} />
          )}
          sections={foods}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card>
              <CardHour>{item.hour}</CardHour>
              <Divider />
              <CardDescription>{item.content}</CardDescription>
              <CardStatus healthier={item.healthier} />
            </Card>
          )}
        ></SectionList>
      </Container>
    </>
  );
}
