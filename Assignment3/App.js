import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {View,Text,Button,Pressable,TextInput,Image} from 'react-native';


const Stack=createNativeStackNavigator();
const App =() =>
{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerStyle: { backgroundColor: "gray" } }}></Stack.Screen>
        <Stack.Screen name="Sign-up" component={SignupScreen} options={{ headerStyle: { backgroundColor: "lightblue" }}}></Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerStyle: { backgroundColor: "pink" }}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>  
  )
}
export default App;


function LoginScreen({navigation}){
 
  return(
<View style={{backgroundColor:'lightblue',alignItems:'center',justifyContent:'center'}}>
      <View>
        <Text>LoginScreen</Text>
      </View>
      <View style={{ flex:1,backgroundColor: 'lightgrey',height:500,alignItems:'center',justifyContent:'space-around'}}>
      <View style = {{height:100}}></View>
          <Image style={{backgroundColor:'transparent',height:100,width:100}}source={{uri:'https://cms-assets.tutsplus.com/cdn-cgi/image/width=400/uploads/users/798/posts/27376/preview_image/firebase@2x.png'}}/>
          <View style = {{height:80}}></View>
          <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='Username'></TextInput>
          <View style = {{height:10}}></View>
          <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='Password' secureTextEntry='true'></TextInput>
          <View style = {{height:10}}></View>
          <Pressable style = {{backgroundColor:'green',width:250,height:20,fontWeight:'bold',alignItems:'center',justifyContent:'center'}} onPress={() => ('Pressed')}>
            <Text >LOGIN</Text>
          </Pressable>
            <Text>You don't have an account? Create one</Text>
          
           </View>
            <Button title="Go to SignupScreen" onPress={()=>navigation.navigate("Sign-up")}/>
     
    </View>
  );
}



function SignupScreen({navigation}){
  
  return(
<View style={{backgroundColor:'brown',alignItems:'center',justifyContent:'center'}}>
      <View>
        <Text>Signup Screen</Text>
      </View>
      <View style={{ flex:1,backgroundColor: 'lightgrey',height:500,alignItems:'center',justifyContent:'space-around'}}>
      <View style = {{height:100}}></View>
      <Image style={{backgroundColor:'transparent',height:100,width:100}}source={{uri:"https://www.w3schools.com/howto/img_avatar2.png"}}/>
                <View style = {{height:30}}></View>
         <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='Username'></TextInput>
          <View style = {{height:10}}></View>
          <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='Email' ></TextInput>
          <View style = {{height:10}}></View>
          <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='Contact-No'></TextInput>
          <View style = {{height:10}}></View>
          <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='Password' secureTextEntry='true'></TextInput>
          <View style = {{height:10}}></View>
          <Pressable style = {{backgroundColor:'green',width:250,height:20,fontWeight:'bold',alignItems:'center',justifyContent:'center',marginBottom:10}}  onPress={() => ('Pressed')}>
            <Text>SIGNUP</Text>
          </Pressable>
           </View>
          <Button title="Go to Profile Screen" onPress={()=>navigation.navigate("Profile")}/>
    </View>
  )

}
function ProfileScreen({navigation}){
  
  return(
      <View style={{backgroundColor:'purple',alignItems:'center',justifyContent:'center'}}>
            <View>
              <Text>ProfileScreen</Text>
            </View>
            <View style={{ flex:1,backgroundColor: 'lightgrey',height:500,alignItems:'center',justifyContent:'space-around'}}>
            <View style = {{height:100}}></View>
            <Text>Please complete your profile</Text>
            
              <Image style={{backgroundColor:'transparent',height:100,width:100}}source={{uri:"https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"}}/>
                <View style = {{height:30}}></View>
                <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='Username'></TextInput>
                <View style = {{height:10}}></View>
                <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='Address'></TextInput>
                <View style = {{height:10}}></View>
                <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='City'></TextInput>
                <View style = {{height:10}}></View>
                <TextInput style = {{width:250,height:30,borderWidth:2}} placeholder='Country'></TextInput>
                <View style = {{height:10}}></View>
                </View>
                  <Button title="Go to Login Screen" onPress={()=>navigation.navigate("Login")}/>
           
          </View>
        );
      }