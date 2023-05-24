import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Pdf from 'react-native-pdf';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Linking } from 'react-native'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/store/reducer/ProductSlice';

// const API_URL = 'https://laravel.itcentre.pk/api/view-courses';

const Home = () => {

    const dispatch = useDispatch()

    const [apiData, setApiData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation()

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // THIS IS ICR APP API
            const response = await fetch('http://laravel.itcentre.pk/api/view-courses');
            const result = await response.json();
            setApiData(result.data);
            // console.log('Data from API ==========================>>>>>>>>', result.data)
        } catch (error) {
            console.error(error);
        }
    };

    const renderView = ({ item }) => {
        // console.log('ITEM IS ------>>>----->>>>>------>>>----->>>>>', item.instructors)


        return (
            <View style={styles.itemContainer}>
                <Image
                    resizeMode='center'
                    style={styles.iconStyle}
                    source={{
                        uri: item.icon,
                    }}
                />

                <Text style={styles.courseTitle}>{item.course_title}</Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.details}>Details</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.detailsTextLeft}>Duration</Text>
                        <Text style={styles.detailsTextRight}>{item.duration}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.detailsTextLeft}>Course Fee</Text>
                        <Text style={styles.detailsTextRight}>{item.fee}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.detailsTextLeft}>Batch</Text>
                        <Text style={styles.detailsTextRight}>{item.batch_no}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.detailsTextLeft}>Students Enrolled</Text>
                        <Text style={styles.detailsTextRight}>{item.student_enrolled}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.detailsTextLeft}>Course Type</Text>
                        <Text style={styles.detailsTextRight}>{item.course_type}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.detailsTextLeft}>Last Date</Text>
                        <Text style={styles.detailsTextRight}>{item.last_date}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(item.course_outline)}>
                        {/* If you want to done work precisely and professionally,
                            then use the showOutline() function and navigate to the Course Outline Screen */}
                        <Text style={styles.buttonText}>Course Outline</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => showInstructor(item.instructors)}>
                        <Text style={styles.buttonText}>Instructor Details</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.cartButton}
                    onPress={dispatch(addProduct(
                        { image: item.icon, title: item.course_title, fee: item.fee }))}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>


            </View>
        )

    };

    const handleSearch = () => {
        // Perform search logic here
        // You can filter the data array based on the search query
    };


    const showInstructor = (iData) => {
        // navigation.navigate('Instructors', { instructorsData: iData })
        console.log('data is ----------->>>>>>>>>>>>', iData)
    }


    // const showOutline = (url) => {
    //     navigation.navigate('CourseOutline', { pdfUrl :  url});
    // }
    // It is used when you have to use linking precisely

    const viewCart = () => {
        navigation.navigate('Cart')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.searchText}
                        placeholder="Search"
                        value={searchQuery}
                        onChangeText={text => setSearchQuery(text)}
                    />

                    <TouchableOpacity onPress={() => handleSearch()}>
                        <View style={styles.searchIcon}><Icon name="search" size={20} color="#fff" /></View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => viewCart()}>
                    <Icon name="shopping-cart" size={30} color="black" style={styles.cartIcon} />
                </TouchableOpacity>
            </View>
            {/* <Text style={styles.title}>{desc}</Text> */}
            <FlatList
                data={apiData}
                renderItem={renderView}
            // horizontal={true}
            // keyExtractor={(item, index) => index.toString()}
            // contentContainerStyle={styles.flatListContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignSelf: 'center',
        // margin: 10,
    },
    searchText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 10,
        // fontWeight: 'bold',
        width: 300
    },
    searchBar: {
        backgroundColor: '#195ecb',
        flexDirection: 'row',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15,

    },
    cartIcon: {
        margin: 5,
        marginTop: 10
    },
    searchIcon: {
        marginTop: '30%',
        marginLeft: 10,
        marginRight: 15
    },

    courseTitle: {
        fontSize: 40,
        color: '#1eabe2',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    flatListContainer: {
        flexGrow: 1,
    },
    details: {
        fontSize: 25,
        color: '#fff',
        alignSelf: 'center',
        fontWeight: 'bold',
        marginBottom: 15,

    },
    itemContainer: {
        borderWidth: 4,
        borderColor: '#195ecb',
        borderRadius: 15,
        width: 380,
        padding: 10,
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: 'black',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    detailsContainer: {
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#008000',
        padding: 10
    },
    button: {
        backgroundColor: '#195ecb',
        paddingVertical: 10,
        borderRadius: 12,
        width: '47.4%',
        margin: 10,
    },
    cartButton: {
        backgroundColor: '#195ecb',
        paddingVertical: 10,
        borderRadius: 12,
        width: '100%',
        margin: 10,
        marginTop: 0,
        alignSelf: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    iconStyle: {
        height: 200,
        width: 200,
        alignSelf: 'center'


    },
    detailsTextLeft: {
        fontSize: 20,
        color: '#fff',
        width: '65%',
        textAlign: 'left'
    },
    detailsTextRight: {
        fontSize: 20,
        color: '#fff',
        width: '35%',
        textAlign: 'right'
    },
});

export default Home;
