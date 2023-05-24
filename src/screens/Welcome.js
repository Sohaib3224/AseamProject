import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Welcome = () => {

  const navigation = useNavigation()
  // const searchButton = (
  //   <Icon.Button
  //     name="search"
  //     backgroundColor="#3b5998"
  //     color='black'
  //   // onPress={}
  //   >
  //     Search
  //   </Icon.Button>
  // );

  const [search, setSearch] = useState('')

  const myIcon = <Icon name="search" size={20} color="#fff" />
  // const myIcon2 = <Icon name="search1" size={20} color="#195ecb" />


  const gotoSignup = () => {
    navigation.navigate('Signup')
  }

  const gotoLogin = () => {
    navigation.navigate('Login')
  }

  const searchCourses = () => {

  }

  return (
    <View style={styles.container}>


      <TouchableOpacity>
        <View style={styles.courseButton}>
          <Text style={styles.bottomText}>Courses</Text>
        </View>

      </TouchableOpacity>


      <View>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchText}
            placeholder='Search'
            // placeholderTextColor="#fff"
            selectionColor="gray"
            // textAlign={'center'}
            onChangeText={(text) => setSearch(text)}

          // onChangeText={(text) => hitAPI(text)}
          />
          <TouchableOpacity>
            <View style={styles.searchIcon}>{myIcon}</View>
          </TouchableOpacity>

        </View>

        <Image
          style={styles.Logo}
          source={{ uri: 'https://www.pngall.com/wp-content/uploads/8/Trade-PNG-HD-Image.png', }}

        />

        <Text style={styles.LogoText}>ASEAM</Text>
        <View style={styles.Buttons}>
          <TouchableOpacity style={styles.Button} onPress={() => gotoLogin()}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.space}></View>
          <TouchableOpacity style={styles.Button} onPress={() => gotoSignup()}>
            <Text style={styles.buttonText}>Sign UP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.bottomItem}>
            <Text style={styles.bottomText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomItem}>
            <Text style={styles.bottomText}>Contact Us</Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  courseButton: {
    flexDirection: 'row',
    backgroundColor: '#195ecb',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },

  bottomBar: {
    flexDirection: 'row',
    backgroundColor: '#195ecb',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 210
  },

  bottomItem: {
    paddingHorizontal: 10,
  },

  bottomText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  Logo: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 200,
  },

  LogoText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    textShadowColor: '#192ecb',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 15,
  },

  space: {
    width: 30,
  },

  Buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  Button: {
    width: 100,
    height: 50,
    backgroundColor: '#195ecb',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderColor: '#ccc',
    borderWidth: 1,


  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  searchBar: {
    backgroundColor: '#195ecb',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,

  },

  searchIcon: {
    marginTop:'45%',
    marginLeft: 10
  },

  searchText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
    // fontWeight: 'bold',
    width: 340
  },

})