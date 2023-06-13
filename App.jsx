import {useState} from 'react'
import { Text, View,StyleSheet,TouchableOpacity} from 'react-native'




const App = () => {


const [color,setColor] = useState('rgb(32,100,126)');





const changeColor = () => {
  const randomColor = `rgb(
    ${Math.floor(Math.random()*256)},
    ${Math.floor(Math.random()*256)},
    ${Math.floor(Math.random()*256)})`
    setColor(randomColor)
}
  



  return (
    <View style={[styles.container,{backgroundColor: color}]}>

      <TouchableOpacity onPress={changeColor}>
      <Text style={styles.text}>
      TAP ME
</Text>




      </TouchableOpacity>


   

    </View>
  )
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    
  },
  text:{
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',

  }

})

export default App