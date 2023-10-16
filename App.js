import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./assets/just.png")}
          style={{
            width: 150,
            height: 150,
            borderRadius: 150 / 2,
            marginBottom: 10,
          }}
        />
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            marginBottom: 10,
          }}
        >
          Welcome To
        </Text>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 17,
            lineHeight: 30,
            textTransform:'uppercase',
            textAlign:'center'
            
          }}
        >
          JamHuriya University Of Sceince And Technology
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "gray" }}>
          Stay Connected With EveryOne hh Stay Connected With EveryOne hh
        </Text>
        <View>
          <TextInput
            placeholder="UserName"
            style={{
              borderWidth: 2,
              padding: 10,
              marginTop: 20,
              fontSize: 17,
              borderRadius: 10,
              borderColor: "gray",
            }}
          ></TextInput>
          <TextInput
            placeholder="Password"
            style={{
              borderWidth: 2,
              padding: 10,
              marginTop: 10,
              fontSize: 17,
              borderRadius: 10,
              borderColor: "gray",
              marginBottom: 10,
            }}
          ></TextInput>
         
          <TouchableOpacity style={styles.appButtonContainer}>
            <Text style= {styles.appButtonText}>Login</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row' ,marginTop:10, gap:15,alignItems:'center'}}>
            <Text style={{fontSize:15, lineHeight:18, }}>Does't Have An Account ?</Text>
            <TouchableOpacity>
              <Text style ={styles.text}>Sign UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 2,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  appButtonContainer: {
   
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  text:{
    
    color:'blue',
    fontSize:17
  },

  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
