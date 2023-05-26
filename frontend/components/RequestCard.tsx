import { CardProps } from "tamagui";
import { Button, Card, Text } from "./Themed";

export type RequestCardProps = CardProps & {
  name: string;
  description: string;
};

export function RequestCard(props: RequestCardProps) {
  return (
    <Card style={{ width: "100%" }} {...props}>
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
        <Text style={{ fontSize: 14, color: "#777" }}>{props.description}</Text>
      </Card.Header>
      <Card.Footer padded style={{ paddingTop: 0 }}>
        <Button>Cancel request</Button>
      </Card.Footer>
    </Card>
  );
}
