import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList,TouchableHighlight, StyleSheet,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const availableZipItems = [
    { place: 'ชุมพร', code: '86000' },
    { place: 'เชียงใหม่', code: '50200' },
    { place: 'นครปฐม', code: '73000'  },
    { place: 'ขอนแก่น', code: '40000'  },
    { place: 'ปราจีนบุรี', code: '25000'  },
]



const ZipItem = ({ place, code, navigation , a }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View style={styles.center}>
            <Text style={styles.front}>{place}</Text>
            <Text style={styles.front2}>{code}</Text>
        </View>
    </TouchableHighlight>
)


const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <ImageBackground source={require('./bg.jpg')} style={styles.backdrop}>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );

}
const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        marginTop: 10,
        opacity: 0.75,
        backgroundColor: 'gray',
         
        
    },
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    front: {
        fontSize: 60,
        color: 'yellow',
    },
    front2: {
        fontSize: 25,
        color: 'red',
    },
    
    
});