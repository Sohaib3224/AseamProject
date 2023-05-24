import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const Instructors = () => {
    const navigation = useNavigation()
    const route = useRoute()
    console.log('route is ------------>>>>>>>>>>>>>>>>>>>>>>>>> ', route)
    
    const [data , setData] = useState([])
    setData(route.params.instructorsData)
    console.log('backend data is ------------------>', data)
    
    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <Image
                    resizeMode='center'
                    style={styles.imageStyle}
                    source={{
                        uri: data.image,
                    }}
                />
                <Text style={styles.nameStyle}>{data.name}</Text>
                <Text style={styles.designationStyle}>{data.designation}</Text>
            </View>
        </View>
    )
}

export default Instructors

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#195ecb',
        padding: 10,
    },

    nameStyle: {
        fontSize: 40,
        color: 'black',
        alignSelf: 'center',
        fontWeight: 'bold',
    },

    designationStyle: {
        fontSize: 25,
        color: '#195ecb',
        alignSelf: 'center',
        fontWeight: 'bold',

    },
    mainView: {
        borderWidth: 4,
        borderColor: 'black',
        borderRadius: 15,
        width: 380,
        padding: 10,
        alignSelf: 'center',
        backgroundColor: '#fff',
    },
    imageStyle: {
        height: 350,
        width: 350,
        alignSelf: 'center'
    },
})