import { Image, Pressable, ScrollView, StyleSheet, Text, View, _Image } from 'react-native';
import React from 'react';
import Img from "../../../assets/img.png"
import { MyBtn, MyCheckBox, MyInput } from '../../Components';
import Back from "../../../assets/backarrow.png"
import Plus from "../../../assets/plus.png"
export default function EditProfile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={Back} style={styles.headerPic} /></Pressable>
        <View style={{ justifyContent: "center", alignItems: "center", width: "90%" }}>
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }} >Edit Card</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.main}>
          <Image source={Img} style={{
            width: 125,
            height: 110
          }} />
          <MyBtn btnStyle={styles.btn} txtStyle={styles.text} source={Plus} imgStyle={styles.ImgStyle}>
            Add Image</MyBtn>
        </View>
        <View style={{ padding: 10 }}>
          <MyInput mode="outlined" label="Name" style={styles.Input1} />
          <View style={styles.InputBox}>
            <MyInput mode="outlined" label="Dosage" style={styles.Input2} />
            <MyInput mode="outlined" label="Quantity" style={styles.Input2} />
          </View>
          <MyInput mode="outlined" label="Form" style={styles.Input1} />
          <View style={styles.InputBox}>
            <MyInput mode="outlined" label="Manufacture" style={styles.Input2} />
            <MyInput mode="outlined" label="Date" style={styles.Input2} />
          </View>
          <View style={styles.CheckBox1}>
            <View style={styles.CheckBox2}>
              <MyCheckBox />
              <Text>For Humans</Text>
            </View>
            <View style={{ marginLeft: 20, flexDirection: "row", width: "50%", alignItems: "center" }}>
              <MyCheckBox />
              <Text>For Animals</Text>
            </View>
          </View>
          <MyInput mode="outlined" label="Description" multiline={true} style={{ height: 100 }} />
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  InputBox:{ flexDirection: "row", justifyContent: "space-between" },
  CheckBox1:{ flexDirection: "row", justifyContent: "space-between" },
  CheckBox2:{ flexDirection: "row", width: "50%", alignItems: "center" },
  main: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20
  },
  Input1:{ height: 50 },
  Input2:{ height: 50, width: "45%" },
  headerPic:{ width: 10, height: 20, marginLeft: 20 },
  ImgStyle:{ width: 16, height: 16 },
  btn: {
    height: 30,
    width: 124,
    backgroundColor: '#4DC6FD',
    borderRadius: 10,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-evenly",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  text: {
    color: "#fff",
  },
  header: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: "#0DB1FC",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 65,
    width: "100%",
    // justifyContent:"center",
    alignItems: "center",
    flexDirection: "row",
  },

});
