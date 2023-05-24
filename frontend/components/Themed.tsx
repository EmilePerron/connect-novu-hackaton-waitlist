/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "../constants/Colors";
import {
  styled,
  H1 as DefaultH1,
  H2 as DefaultH2,
  Card as DefaultCard,
  Button as DefaultButton,
} from "tamagui";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export const H1 = styled(DefaultH1, {
  fontSize: "$10",
  fontWeight: "800",
  lineHeight: Platform.OS !== "web" ? "$10" : 1,
});

export const H2 = styled(DefaultH2, {
  fontSize: "$8",
  fontWeight: "400",
  lineHeight: Platform.OS !== "web" ? "$8" : 1,
});

export const Card = styled(DefaultCard, {
  borderRadius: "$6",
});

export const Button = styled(DefaultButton, {
  backgroundColor: "#000",
  color: "#fff",
  borderRadius: "$6",
});

export function BackgroundGradient() {
  return (
    <LinearGradient
      style={{
        minHeight: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      colors={["#cb00cf10", "#cd007314", "#cf000015"]}
      start={{ x: 0.15, y: -0.05 }}
      end={{ x: 0.8, y: 1.05 }}
    />
  );
}
