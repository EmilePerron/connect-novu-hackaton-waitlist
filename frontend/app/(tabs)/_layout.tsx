import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";
import { BlurView } from "expo-blur";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>["name"];
  color: string;
}) {
  return <Feather size={22} style={{ marginBottom: 0 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarBackground: () => (
            <BlurView
              tint="light"
              intensity={50}
              style={StyleSheet.absoluteFill}
            />
          ),
          tabBarStyle: {
            backgroundColor: "transparent",
            borderTopWidth: 0,
            position: "absolute",
            left: 0,
            bottom: 0,
            right: 0,
          },
          tabBarInactiveTintColor:
            Colors[colorScheme ?? "light"].tabIconDefault,
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          tabBarLabelPosition: "below-icon",
          tabBarLabelStyle: { marginBottom: 5 },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Customer",
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="business"
          options={{
            title: "My Business",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="briefcase" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="settings" color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
