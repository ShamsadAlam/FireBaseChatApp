// ChatScreen.js
import React from "react";
import { View, Text } from "react-native";

const ChatScreen = ({ route }) => {
  const { chatId } = route.params;
  return (
    <View>
      <Text>{`Chat Screen - ${chatId}`}</Text>
      {/* Implement the chat messages here */}
    </View>
  );
};

export default ChatScreen;
