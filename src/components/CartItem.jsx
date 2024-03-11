// CartItem.js
import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable, Modal } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const CartItem = ({ item, onRemove }) => {
    const [showModal, setShowModal] = useState(false);

    const handleRemove = () => {
        setShowModal(false);
        onRemove(item);
    };

    return (
        <View style={styles.container}>
            <Entypo name="trash" size={24} color="black" onPress={() => setShowModal(true)} />
            <View style={styles.itemDetails}>
                <Text>{item.title}</Text>
                <Text>{item.brand}</Text>
                <Text>{item.price}</Text>
            </View>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => setShowModal(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Do you want to delete this item?</Text>
                        <View style={styles.modalButtons}>
                            <Pressable onPress={handleRemove}>
                                <Text style={styles.modalButton}>Yes</Text>
                            </Pressable>
                            <Pressable onPress={() => setShowModal(false)}>
                                <Text style={styles.modalButton}>Cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemDetails: {
        flex: 1,
        marginLeft: 10,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalButton: {
        fontSize: 16,
        color: 'black',
    },
});

export default CartItem;
