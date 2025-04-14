import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import axios from "axios";

import BASE_URL from "../apiConfig";
const apiUrl = `${BASE_URL}/login`;


export default function Index() {
  const router = useRouter();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handledSubmit = async () => {
    try {
      const response = await axios.post(apiUrl, {
        email, password
      });

      const role = response.data.role;
      if (role === 'admin') {
        router.push('AdminD');
      } else if (role === 'user') {
        router.push('UserD');
      }
    } catch (error) { 
      console.log(error); 
    }
  };



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View style={styles.top}></View>
          <View style={styles.box}>
            <Image
              source={require('../assets/logo/Radiant Glow Logo.png')}
              style={{ width: 200, height: 200, marginBottom: 10 }}
            />

            <View style={styles.inputBox}>
              <View style={styles.inputWrapper}>
                <Image source={require('../assets/icons/email icon.png')} style={styles.loginIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="white"
                  autoCapitalize="none"
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  onChangeText={setEmail}
                />
              </View>

              <View style={styles.inputWrapper}>
                <Image source={require('../assets/icons/Password Icon.png')} style={styles.loginIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="white"
                  autoCapitalize="none"
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  secureTextEntry={!passwordVisible}
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                  <Image
                    source={
                      passwordVisible
                        ? require('../assets/icons/Hide Icon.png')
                        : require('../assets/icons/Show Icon.png')
                    }
                    style={styles.eyeIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>

            

            <View>
              <TouchableOpacity style={styles.button} onPress={handledSubmit}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.aBox}>
              <Text style={styles.aText}>Don't have an account? click to </Text>
              <TouchableOpacity onPress={() => router.push('/Register')}>
                <Text style={styles.aTextB}>Sign Up</Text>
              </TouchableOpacity>
            </View>

          </View>

          <View style={styles.bottom}>
            <Text>© copyright @ 2024 by Mauzar & Resare</Text>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E9E9E9',
    padding: 20,
  },
  box: {
    backgroundColor: '#605678',
    width: "90%",
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    flexDirection: 'column',
  },
  inputBox: {
    width: "100%",
    gap: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4F4860',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 40,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  loginIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  eyeIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  aBox: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
  aText: {
    color: '#fff',
  },
  aTextB: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: '#7057AB',
    borderRadius: 20,
    marginTop: 20,
    borderColor: '#CEB0B0',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  top: {
    width: "100%",
  },
  bottom: {
    width: "100%",
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

