import { CardProps } from "tamagui";
import { Card, Text, Button } from "./Themed";

export type BusinessCardProps = CardProps & {
  name: string;
  category: string;
  peopleInQueue: number;
};

export function BusinessCard(props: BusinessCardProps) {
  return (
    <Card style={{ width: "30%" }} {...props}>
      <Card.Header padded>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: "#414141",
            marginBottom: 5,
          }}
        >
          {props.name}
        </Text>
        <Text style={{ fontSize: 14, color: "#777", marginBottom: 2 }}>
          {props.category}
        </Text>
        <Text style={{ fontSize: 14, color: "#777" }}>{`${
          props.peopleInQueue ?? 0
        } people in queue`}</Text>
      </Card.Header>
    </Card>
  );
}
