// HomeScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { signIn, signOut } from "../services/Auth";
import { createChat, sendMessage } from "../services/Database";

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    // Check if the user is signed in
    // Update the user state accordingly
    // Fetch the list of chats and update the chats state
  }, []);

  const handleSignIn = async () => {
    await signIn("user@email.com", "password");
    // Update user state
  };

  const handleSignOut = async () => {
    await signOut();
    // Update user state
  };

  const handleCreateChats = async () => {
    // Create two single-user chats and one group chat
    createChat(user.uid, "chat1");
    createChat(user.uid, "chat2");
    createChat("otherUserUid", "chat3"); // Replace 'otherUserUid' with another user's UID
    createChat(user.uid, "groupChat");
  };

  const handleSendMessage = (chatId, message) => {
    sendMessage(chatId, message);
  };

  useEffect(() => {
    // Fetch the list of chats and update the chats state
    // Sort the chats by last activity (you may need to maintain a timestamp in the database)
  }, [user]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Chat", { chatId: item.chatId })}
    >
      <Text>{item.chatId}</Text>
      {/* Display last message, last activity timestamp, etc. */}
    </TouchableOpacity>
  );

  return (
    <View>
      <Text>{user ? `Welcome, ${user.email}` : "Not signed in"}</Text>
      {user ? (
        <TouchableOpacity onPress={handleSignOut}>
          <Text>Sign Out</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleSignIn}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={handleCreateChats}>
        <Text>Create Chats</Text>
      </TouchableOpacity>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.chatId}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;
