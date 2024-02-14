import React from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

const RemoveModal = ({ modalVisible, closeModal, removeItem }) => {
  return (
    <Modal animationType="slide" transparent visible={modalVisible}>
      <View style={styles.modalContainer}>
        <Text>¿Quieres eliminar el producto?</Text>
        <Pressable onPress={closeModal}>
          <Text>No</Text>
        </Pressable>
        <Pressable onPress={removeItem}>
          <Text>Sí</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 200,
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2.5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 3,
  },
});

export default RemoveModal;
