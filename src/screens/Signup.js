import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Signup = () => {

  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [name2, setName2] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Sign Up</Text>
        <TextInput
          style={styles.inputField}
          placeholder='First Name'
          // placeholderTextColor="#fff"
          // selectionColor="black"
          // textAlign={'center'}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.inputField}
          placeholder='Last Name'
          // placeholderTextColor="#fff"
          // selectionColor="black"
          onChangeText={(text) => setName2(text)}
        />
        <TextInput
          style={styles.inputField}
          placeholder='Email'
          // placeholderTextColor="#fff"
          // selectionColor="black"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.inputField}
          placeholder='Password'
          // placeholderTextColor="#fff"
          // selectionColor="black"
          onChangeText={(text) => setPass(text)}
        />

        <TouchableOpacity style={styles.Button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.bottomText}>
        <Text style={{ color: '#fff' }}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.bottomTextLogin}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Signup

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#195ecb',
    alignItems: "center"
  },

  heading: {
    marginTop: 200,
    alignSelf: 'center',
    color: '#195ecb',
    fontSize: 60,
    textShadowColor: '#fff',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 4,
  },

  inputField: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
    // fontWeight: 'bold',
    width: 340,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 30,
    // alignSelf: 'center',
    paddingLeft: 15
  },

  bottomTextLogin: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  bottomText: {
    flexDirection: 'row',
    marginTop: 170
  },

  Button: {
    width: 100,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 30,
    alignSelf: 'center',

  },

  buttonText: {
    color: '#195ecb',
    fontSize: 20,
    fontWeight: 'bold',
  },
})