import React, { Component, useState } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import auth from '@react-native-firebase/auth';

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
            { id: 1, title: "CheckIn", image: "" },
            { id: 2, title: "checkOut", image: "" },
            { id: 3, title: "SuratIzin", image: "" },
            { id: 4, title: "History", image: "" },
            { id: 4, title: "Logout", image: "" }
        ])

    const clickEventListener = (item) => {
        Alert.alert(item.title)
        switch (item.title) {
            case "CheckIn":
                console.log("ini check In")
                navigation.navigate("CheckIn", {
                    dataID: name,
                    dataGambar: item.namaGambar,
                    urlGambar: item.gambar,
                })
                break;

            case "checkOut":
                console.log("ini check Out")
                navigation.navigate("CheckOut", {
                    dataID: name
                })
                break;

            case "SuratIzin":
                console.log("ini SuratIzin")
                navigation.navigate("SuratIzin")
                break;

            case "History":
                console.log("ini History")
                navigation.navigate("History")
                break;

            case "Logout":
                console.log("Logout")
                Logout()
                break;


        }
    }

    const Logout = () => {
        auth()
            .signOut()
            .then(() => {
                console.log('user telah logout!')
                navigation.navigate("Login")
            });
    }

    return (
        <View >
            <FlatList
                data={data}
                horizontal={false}
                numColumns={2}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => clickEventListener(item)}>
                            <View>
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <Text>{item.title}</Text>
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