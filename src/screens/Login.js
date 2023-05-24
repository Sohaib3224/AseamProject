import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {

  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Login</Text>
        
        <TextInput
          style={styles.inputField}
          placeholder='Enter Email'
          // placeholderTextColor="#fff"
          // selectionColor="black"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.inputField}
          placeholder='Enter Password'
          // placeholderTextColor="#fff"
          // selectionColor="black"
          onChangeText={(text) => setPass(text)}
        />

        <TouchableOpacity style={styles.Button} onPress={()=> navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.bottomText}>
        <Text style={{ color: '#fff' }}>Do not have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.bottomTextSignup}>SignUp</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#195ecb',
    alignItems: "center"
  },

  heading: {
    marginTop: 200,
    marginBottom:40,
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

  bottomTextSignup: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  bottomText: {
    flexDirection: 'row',
    marginTop: 280
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