import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

  const productsData = useSelector((state) => state.product.products)

  const renderView = ({ item }) => {
    console.log('Item in cart is --------------------->>>>>>>>>>>>>>>>>>>>>>>', item)

    return (
      <View>

      </View>
    )

  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={productsData}
        renderItem={renderView}
      />
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})