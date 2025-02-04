import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="rules"
        options={{
          title: "Règles",
          tabBarIcon: ({ color }) => (
            <Feather size={22} name="book" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Jouer",
          tabBarIcon: ({ color }) => (
            <Feather size={22} name="play" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Paramètres",
          tabBarIcon: ({ color }) => (
            <Feather size={22} name="settings" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
