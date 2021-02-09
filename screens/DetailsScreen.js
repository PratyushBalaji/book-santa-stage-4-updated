import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import config from '../config';
import db from '../config';
import firebase from firebase;

export default class DetailsScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            userId:firebase.auth().currentUser.email,
            recieverId:this.props.navigation.getParam('details')['reciever_id'],
            request_id:this.props.navigation.getParam("details")["request_id"],
            book_name:this.props.navigation.getParam("details")["book_name"],
            reason_to_request:this.props.navigation.getParam("details")["reason_to_request"],
        }
    }
    getReceiverDetails(){
        db.collection('users').where("email_id","==",this.state.recieverId).get()
        .then()
    }
    render(){
        return(
            <Text> Details Screen </Text>
        )
    }
}