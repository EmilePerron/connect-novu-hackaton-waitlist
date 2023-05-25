import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

import { RootView } from "../components/RootView";
import { ScrollView, YStack } from "tamagui";
import { Card, H2, Input, Text } from "../components/Themed";

import * as Location from "expo-location";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { BusinessCard } from "../components/BusinessCard";

export default function ModalScreen() {
  const [locations, setLocations] = useState([]);

  const onSearchCallback = useDebouncedCallback((query) => {
    search(query || "")
      .then((results) => {
        setLocations(results);
      })
      .catch(console.error);
  }, 500);

  return (
    <RootView>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />

      <YStack space>
        <H2>Find a location</H2>
        <Input onChangeText={onSearchCallback}></Input>

        <ScrollView>
          {locations.map((location) => (
            <BusinessCard
              name={location.name}
              category={location.address}
              peopleInQueue={0}
            />
          ))}
        </ScrollView>
      </YStack>
    </RootView>
  );
}

async function search(query: string) {
  let { status } = await Location.requestForegroundPermissionsAsync();
  let userCoords = "";
  if (status === "granted") {
    let userLocation = await Location.getLastKnownPositionAsync();

    if (!userLocation) {
      userLocation = await Location.getCurrentPositionAsync();
    }

    if (userLocation) {
      userCoords = `${userLocation?.coords.latitude},${userLocation?.coords.longitude}`;
    }
  }

  const url = new URL("http://localhost:8080/location/search");
  url.searchParams.append("query", query);
  url.searchParams.append("location", userCoords);

  const response = await fetch(url).then((response) => response.json());

  return response;
}
