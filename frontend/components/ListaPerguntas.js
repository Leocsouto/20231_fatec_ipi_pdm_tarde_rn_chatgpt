import { View, StyleSheet } from 'react-native'
import React from 'react'
import {
    ListItem
    , Text
    , Card
} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ListaPerguntas({ lista }) {

    return (
        <Card containerStyle={styles.itemLista}>
            <ListItem containerStyle={styles.cardPergunta}>
                <Icon
                    name='person'
                    style={styles.icon}/>
                <ListItem.Content >
                    <ListItem.Title style={styles.title} >USUÁRIO</ListItem.Title>
                    <ListItem.Subtitle>{lista.item}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem containerStyle={styles.cardResposta}>
                <ListItem.Content style={styles.contentResposta}>
                    <ListItem.Title style={styles.title}>
                        CHATGPT
                    </ListItem.Title>
                    <ListItem.Subtitle>{lista.item}</ListItem.Subtitle>
                </ListItem.Content>

                <Icon
                    name='logo-android'
                    style={styles.icon} />
            </ListItem>
            {/* <Text>
                {lista.item}
              </Text>*/}
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        // width: '100%',
        marginBottom: 10,
        backgroundColor: '#accec0'
    },
    lembreteTextInput: {
        // borderBottomColor: '#CCC',
        // borderBottomWidth: 1,
        // padding: 12,
        textAlign: 'center',
        // outlineStyle: 'none',
        marginBottom: 5,
    },
    itemLista: {
        marginTop: 10,
        textAlign: 'center',
        padding: 12,
        borderWidth: 0,
        backgroundColor: '#fefefe',
        borderRadius:10,
        borderColor:'#a1a1a1',
    },
    icon:{
        color:'#1a6c74', 
        borderRadius: 'inherit',   
        fontSize:35
    },
    cardPergunta: {
        backgroundColor: "#b39c82",
        borderRadius:10,    
        
    },
    cardResposta: {
        backgroundColor: "#f0d399",
        borderRadius:10,
        marginTop:5
    },
    contentResposta:{
         alignItems: 'flex-end' 
    }
    ,
    title:{
        fontWeight:'bold'
    }


})