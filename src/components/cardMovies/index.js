import React from 'react'
import {View,Image,Text,TouchableOpacity} from 'react-native';
import styles from './style';


export default function CardMovies({titulo,nota,imagem}){

    

    return(
     
        <TouchableOpacity style={styles.containerJogos} >

        <Image style={styles.images} source ={{uri:`https://image.tmdb.org/t/p/original/${imagem}`}} />
        <Text style ={styles.titulo}>{titulo} </Text> 
        
        <Text style ={styles.textNota}> {nota} </Text>
       
       
    </TouchableOpacity>

  

    );


}