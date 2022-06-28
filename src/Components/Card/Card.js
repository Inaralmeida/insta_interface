import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Card = ({ item }) => {
  const likeadaIMG = require("../../img/likeada.png");
  const notLikeada = require("../../img/like.png");
  const { nome, descricao, imgperfil, imgPublicacao, likeada, likers } = item;

  function isLiked(likes) {
    if (likes === 0) return;
    else if (likes === 1) {
      return <Text style={styles.highligth}>{likes} curtida</Text>;
    } else {
      return <Text style={styles.highligth}>{likes} curtidas</Text>;
    }
  }
  return (
    <View>
      <View style={styles.header}>
        <Image source={{ uri: imgperfil }} style={styles.imgPerfil} />
        <Text style={styles.nomePerfil}>{nome}</Text>
      </View>
      <Image
        source={{ uri: imgPublicacao }}
        style={styles.publi}
        resizeMode="cover"
      />
      <View style={styles.icons}>
        <TouchableOpacity>
          <Image
            source={likeada ? likeadaIMG : notLikeada}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../img/comment.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../img/send.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.details}>
        {isLiked(likers)}
        <Text style={[styles.highligth, styles.text_medium]}>{nome}</Text>
        <Text>{descricao}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  imgPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  nomePerfil: {
    fontSize: 20,
  },
  publi: {
    height: 400,
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  details: {
    marginLeft: 10,
    marginBottom: 10,
  },
  highligth: {
    fontWeight: "bold",
  },
  text_medium: {
    fontSize: 20,
  },
});
