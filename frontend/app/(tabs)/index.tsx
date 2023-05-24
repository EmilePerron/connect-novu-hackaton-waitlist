import { SafeAreaView } from "react-native-safe-area-context";
import { BusinessCard } from "../../components/BusinessCard";
import {
  BackgroundGradient,
  Button,
  H1,
  H2,
  Text,
} from "../../components/Themed";
import { ScrollView, Spacer, Stack, XStack, YStack } from "tamagui";
import { RootView } from "../../components/RootView";
import { RequestCard } from "../../components/RequestCard";

export default function HomeScreen() {
  return (
    <RootView>
      <H2>Your requests</H2>
      <YStack space="$3">
        <RequestCard
          name="Garage Reul Thivierge & Fils"
          description="Changement d'huile"
        ></RequestCard>
        <RequestCard
          name="Coiffeuse XYZ"
          description="Coupe pour femme, teinture"
        ></RequestCard>
      </YStack>
      <Button>Join a waitlist</Button>

      <Spacer size="$4" />

      <H2>Popular businesses nearby</H2>
      <ScrollView
        horizontal
        space
        overflow="visible"
        showsHorizontalScrollIndicator={false}
      >
        <BusinessCard
          name="Garage Reul Thivierge & Fils"
          category="Garage"
          peopleInQueue={2}
        ></BusinessCard>
        <BusinessCard
          name="Garage Reul Thivierge & Fils"
          category="Garage"
          peopleInQueue={2}
        ></BusinessCard>
        <BusinessCard
          name="Garage Reul Thivierge & Fils"
          category="Garage"
          peopleInQueue={2}
        ></BusinessCard>
      </ScrollView>
      <Button>Browse locations</Button>
    </RootView>
  );
}
