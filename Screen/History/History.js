import React, { Component, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import styles from './style';
import { DataTable } from 'react-native-paper';

const History = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        firestore()
            .collection('Checkin')
            .get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);
                const users = [];
                querySnapshot.forEach(documentSnapshot => {
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    
                });
                setUser(users);
            });
    }, [])

   

    return (
        <View >

            <FlatList
                data={users}
                renderItem={({ item }) => {
                    return (
                        <DataTable style={{ marginBottom: 20 }}>
                            <DataTable.Header>
                                <DataTable.Title> {"jam masuk : " + item.jamMasuk}</DataTable.Title>
                            </DataTable.Header>
                            <DataTable.Row>
                                <DataTable.Title> {"hari : " + item.hari}</DataTable.Title>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Title> {"lokasi : " + item.gps}</DataTable.Title>
                            </DataTable.Row>
                           
                        </DataTable>
                       
                    )
                }}
            />

        </View>



    );

}

export default History;