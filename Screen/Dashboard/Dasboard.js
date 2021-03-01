import React, { Component, useState } from 'react';
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import stylee from './style';

const Dashboard = ({ navigation, route }) => {
    const { dataID } = route.params;
    const [name, setName] = useState(dataID)
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         data: [
    //             { id: 1, title: "checkIn", image: "" },
    //             { id: 2, title: "checkOut", image: "" },
    //             { id: 3, title: "Ijin", image: "" },
    //             { id: 4, title: "History", image: "" },
    //             { id: 4, title: "Logout", image: "" }
    //         ]
    //     };
    // }

    const [data, setData] = useState(
        [
            { id: 1, title: "CheckIn", image: "http://assets.stickpng.com/images/5aa78e207603fc558cffbf19.png" },
            { id: 2, title: "CheckOut", image: "http://assets.stickpng.com/images/5aa78e207603fc558cffbf19.png" },
            { id: 3, title: "SuratIzin", image: "https://img.icons8.com/color/70/000000/to-do.png" },
            { id: 4, title: "History", image: "https://toppng.com/uploads/preview/order-history-icon-export-csv-blue-icon-11553511776dpkqdrksk8.png" },
            { id: 4, title: "Logout", image: "https://www.pngfind.com/pngs/m/339-3396821_png-file-svg-download-icon-logout-transparent-png.png" }
        ])

    const clickEventListener = (item) => {
        // Alert.alert(item.title)
        switch (item.title) {
            case "CheckIn":
                
                navigation.navigate("CheckIn", {
                    dataID: name
                })
                break;

            case "CheckOut":
                
                navigation.navigate("CheckOut", {
                    dataID: name
                })
                break;

            case "SuratIzin":
                
                navigation.navigate("SuratIzin", {
                    dataID: name
                })
                break;

            case "History":
               
                navigation.navigate("History", {
                    dataID: name
                })
                break;

            case "Logout":
              
                Logout()
                break;


        }
    }

    const Logout = () => {
       
        auth()
            .signOut()
            .then(() => {
                console.log('user logout!')
                navigation.navigate("Login")
            });
    }

    return (
        <View style={stylee.container} >
            <FlatList
                style={stylee.list}
                contentContainerStyle={stylee.listContainer}
                data={data}
                horizontal={false}
                numColumns={2}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={stylee.card}
                            onPress={() => clickEventListener(item)}>
                            <View
                                style={stylee.cardFooter}
                            ></View>
                            <Image
                                style={stylee.cardImage}
                                source={{ uri: item.image }} />
                            <View
                                style={stylee.cardHeader}
                            >
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <Text
                                        style={stylee.title}
                                    >
                                        {item.title}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );

}

export default Dashboard;