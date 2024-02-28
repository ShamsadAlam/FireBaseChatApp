import firebase from "./Firebase";

const db = firebase.database();

export const createChat = (userId, chatId) => {
  db.ref(`chats/${userId}`).set({
    chatId,
  });
};

export const sendMessage = (chatId, message) => {
  db.ref(`messages/${chatId}`).push({
    message,
    timestamp: firebase.database.ServerValue.TIMESTAMP,
  });
};
