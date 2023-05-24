import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Pdf from 'react-native-pdf'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Linking } from 'react-native'

const CourseOutline = () => {
    // We are using a simple method that's why we are not using this screen code
    const navigation = useNavigation()
    const route = useRoute()

    const Url = route.params.pdfUrl;
    console.log('PDF URL IS ---------->>>>>>>', Url)

    useEffect(() => {
        openPdf(Url);
      }, []);
    
      const openPdf = async (url) => {
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          await Linking.openURL(url);
        } else {
          console.log("Don't know how to open URL: ", url);
        }
      };
    
      return null;
    };
export default CourseOutline

const styles = StyleSheet.create({})