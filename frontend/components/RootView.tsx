import { BackgroundGradient, ViewProps } from "./Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, ScrollView } from "tamagui";

export function RootView(props: ViewProps) {
  return (
    <>
      <BackgroundGradient />
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{
            justifyContent: "flex-start",
            alignContent: "flex-start",
          }}
          paddingTop="$4"
          paddingHorizontal="$6"
          space
          showsVerticalScrollIndicator={false}
        >
          {props.children}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
