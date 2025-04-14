import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import Header from "../components/Header";


export default function AdminD() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <View style={styles.container}>
                    <Header />
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9E9E9',
    }
});