import React from "react";
import { View } from "react-native";
import { Dialog, Portal } from "react-native-paper";

const DialogBox = ({ visible, hideDialog, title, children }) => {
  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>{title}</Dialog.Title>
          {children}
        </Dialog>
      </Portal>
    </View>
  );
};

export default DialogBox;
