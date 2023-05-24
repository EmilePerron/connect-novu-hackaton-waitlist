import { BackgroundGradient, ViewProps } from "./Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, ScrollView } from "tamagui";

export function RootView(props: ViewProps) {
  return (
    <>
      <BackgroundGradient />
      <ScrollView>
        <SafeAreaView>
          <Stack
            paddingTop="$4"
            paddingHorizontal="$6"
            jc="flex-start"
            ac="flex-start"
            space
          >
            {props.children}
          </Stack>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}
