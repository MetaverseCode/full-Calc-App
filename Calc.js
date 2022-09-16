import React, { Component } from 'react';
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Text,
  useColorScheme,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

var input = "";
var i = ""
var value1 = ""
var value2 = ""
var array = ""
var array1 = ""
var array2 = ""
class App extends Component {
  state = {
    text : 0,
    size: 70,
    top: -1350
  }
s13 = () => {
  input += 9
  this.setState({
    text: input
  })
}
s12 = () => {
  input += 8
  this.setState({
    text: input
  })
}
s11 = () => {
  input += 7
  this.setState({
    text: input
  })
}
s10 = () => {
  input += "-"
  this.setState({
    text: input
  })
}
s9 = () => {
  input += 6
  this.setState({
    text: input
  })
}
s8 = () => {
  input += 5
  this.setState({
    text: input
  })
}
s7 = () => {
  input += 4
  this.setState({
    text: input
  })
}
s6 = () => {
  input += "+"
  this.setState({
    text: input
  })
}
s5 = () => {
  input += 3
  this.setState({
    text: input
  })
}
s4 = () => {
  input += 2
  this.setState({
    text: input
  })
}
s3 = () => {
  input += 1
  this.setState({
    text: input
  })
}
s2 = () => {
  input += 0
  this.setState({
    text: input
  })
}
s1 = () => {
  input += "."
  this.setState({
    text: input
  })
}
s14 = () => {
  input += "X"
  this.setState({
    text: input
  })
}
s15 = () => {
  input += "%"
  this.setState({
    text: input
  })
}
s16 = () => {
  input += "÷"
  this.setState({
    text: input
  })
}
clear =() => {
  input = ""
  this.setState({
    text: 0,
    size: 70
  })
}
arraypop = () => {
array = Array.from(this.state.text)
array.pop()
array2 = array.join('')
input = array2
this.setState({
  text : array2
})
if(this.state.text == ""){
  this.setState({
    text : 0
  })
}
if(input == ""){
 input += ""
}
if(array == ""){
  input += ""
  this.setState({
    text : 0
  })
}
}
result = () =>{
  for (let x of Array.from(this.state.text)) {
    if(x == "+"){
     i = this.state.text.split("+")
     value1 = i[0]
     value2 = i[1]
     this.setState({
      text: parseFloat(value1) + parseFloat(value2)
     })
     if(value2 == "" && value1 == "1"){
      this.setState({
       text: "Crafted By Suraj",
       size: 50,
       top: -1330
      })
    }
    }
    if(x == "-"){
      i = this.state.text.split("-")
      value1 = i[0]
      value2 = i[1]
      this.setState({
       text: parseFloat(value1) - parseFloat(value2)
      })
     }
     if(x == "X"){
      i = this.state.text.split("X")
      value1 = i[0]
      value2 = i[1]
      this.setState({
       text: parseFloat(value1) * parseFloat(value2)
      })
     }
     if(x == "÷"){
      i = this.state.text.split("÷")
      value1 = i[0]
      value2 = i[1]
      this.setState({
       text: parseFloat(value1) / parseFloat(value2)
      })
      if(value2 == "0"){
        this.setState({
          text: "Out of The World",
          size: 50,
       top: -1380
         })
      }
     }
     if(x == "%"){
      i = this.state.text.split("%")
      value1 = i[0]
      value2 = i[1]
      this.setState({
       text: (parseFloat(value1)/parseFloat(value2))*100 + "%"
      })
     }
  }
}

  render() {
    return (
      <View style = {style.vv}>
      <View style = {style.vv1}>
         <Text style={[style.displayy, { fontSize: this.state.size }]}>{this.state.text}</Text>
      </View>
      <View style = {style.MainContainer}>
       
        <View style = {[style.view1, {top: this.state.top}]}>
          

        <TouchableOpacity onPress = {this.s16} style = {style.to20}>
      <Text style = {style.text6}>÷</Text>
      </TouchableOpacity>


        <TouchableOpacity onPress = {this.s15} style = {style.to19}>
      <Text style = {style.text5}>%</Text>
      </TouchableOpacity>

        <TouchableOpacity onPress = {this.clear} style = {style.to18}>
      <Text style = {style.text5}>CE</Text>
      </TouchableOpacity>

        <TouchableOpacity onPress = {this.clear} style = {style.to17}>
      <Text style = {style.text5}>C</Text>
      </TouchableOpacity>

        <TouchableOpacity onPress = {this.s14} style = {style.to16}>
      <Text style = {style.text5}>X</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress = {this.s13} style = {style.to15}>
      <Text style = {style.text}>9</Text>
      </TouchableOpacity>

        <TouchableOpacity onPress = {this.s12} style = {style.to14}>
      <Text style = {style.text}>8</Text>
      </TouchableOpacity>

        <TouchableOpacity onPress = {this.s11} style = {style.to13}>
      <Text style = {style.text}>7</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress = {this.s10} style = {style.to12}>
      <Text style = {style.text4}>-</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress = {this.s9}  style = {style.to11}>
      <Text style = {style.text}>6</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress = {this.s8} style = {style.to10}>
      <Text style = {style.text}>5</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress = {this.s7} style = {style.to9}>
      <Text style = {style.text}>4</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress = {this.s6} style = {style.to8}>
      <Text style = {style.text3}>+</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress = {this.s5} style = {style.to7}>
      <Text style = {style.text}>3</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress = {this.s4} style = {style.to6}>
      <Text style = {style.text}>2</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress = {this.s3} style = {style.to5}>
      <Text style = {style.text}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {this.s1} style = {style.to1}>
        <Text style = {style.text}>.</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {this.s2} style = {style.to2}>
      <Text style = {style.text}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {this.arraypop} style = {style.to3}>
      <Text style = {style.text1}>←</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {this.result} style = {style.to4}>
      <Text style = {style.text2}>=</Text>
      </TouchableOpacity>
   </View>
     


      </View>
      </View>
    );
  }
}












const style = StyleSheet.create({
  MainContainer: 
  {
    padding: 30,
  backgroundColor: '#F1F2F3',
   
  },
  to1 : {
    backgroundColor : "white",
    width:74,
    height:74,
    marginTop: 700,
    position: 'relative',
    top:-50,
    borderRadius: 10
  },
  text: {
    fontWeight: "500",
    fontSize: 30,
    textAlign: 'center',
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto"
  },
  text1:{
    fontWeight: "500",
    fontSize: 30,
    textAlign: 'center',
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 9,
    marginBottom: "auto"
  },
  to2 : {
    backgroundColor : "#ffffff",
    width:74,
    height:74,
  marginTop: -75,
  marginLeft:90,
    borderRadius: 14,
    position: 'relative',
    top:-50,
  },
  to3 : {
    backgroundColor : "#fff",
    width:74,
    height:74,
  marginTop: -75,
  marginLeft:180,
    borderRadius: 14,
    position: 'relative',
    top:-50,

  },
  to4 : {
    backgroundColor : "dodgerblue",
    width:74,
    height:74,
  marginTop: -75,
  marginLeft:270,
    borderRadius: 14,
    position: 'relative',
    top:-50,
  },
  text2 :{
    fontWeight: "500",
    fontSize: 30,
    textAlign: 'center',
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    color:"white"
  },
  to5: {
    backgroundColor : "#ffffff",
    width:74,
    height:74,
    borderRadius: 14,
    position: 'relative',
    top:630,
  },
  
  to6 : {
    backgroundColor : "#ffffff",
    width:74,
    height:74,
    borderRadius: 14,
    position: 'relative',
    top:704,
    marginLeft: 90
  },
  to7: {
    backgroundColor : "#ffffff",
    width:74,
    height:74,
    borderRadius: 14,
    position: 'relative',
    top:778,
    marginLeft: 180
  },
  text3 : {
    fontWeight: "500",
    fontSize: 30,
    textAlign: 'center',
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    color:"white"
  },
  to8 : {
    backgroundColor : "orange",
    width:74,
    height:74,
    borderRadius: 14,
    position: 'relative',
    top:850,
    marginLeft: 270
  }
  ,
  
  to9 : {
    backgroundColor : "#ffffff",
    width:74,
    height:74,
    borderRadius: 14,
    position: 'relative',
    top:832,
  },
  to10 : {
    backgroundColor : "#ffffff",
    width:74,
    height:74,
    borderRadius: 14,
    position: 'relative',
    top:905,
    marginLeft: 90
  },
  to11 : {
    backgroundColor : "#ffffff",
    width:74,
    height:74,
    borderRadius: 14,
    position: 'relative',
    top:979,
    marginLeft: 180
  },
  to12 : {
    backgroundColor : "dodgerblue",
    width:74,
    height:74,
    borderRadius: 14,
    position: 'relative',
    top:1053,
    marginLeft: 270
  },

text4 : {
  fontWeight: "500",
  fontSize: 30,
  textAlign: 'center',
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "auto",
  marginBottom: "auto",
  color:"white"
},
to13 : {
  backgroundColor : "#ffffff",
  width:74,
  height:74,
  borderRadius: 14,
  position: 'relative',
  top:1033,
  marginLeft: 0
},
to14 : {
  backgroundColor : "#ffffff",
  width:74,
  height:74,
  borderRadius: 14,
  position: 'relative',
  top:1107,
  marginLeft: 90
},
to15 : {
  backgroundColor : "#ffffff",
  width:74,
  height:74,
  borderRadius: 14,
  position: 'relative',
  top:1181,
  marginLeft: 180
},
to16 : {
  backgroundColor : "dodgerblue",
  width:74,
  height:74,
  borderRadius: 14,
  position: 'relative',
  top:1253,
  marginLeft: 270
},
text5 : {
  fontWeight: "500",
  fontSize: 30,
  textAlign: 'center',
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "auto",
  marginBottom: "auto",
  color:"white"
},
to17 : {
  backgroundColor : "#4e505f",
  width:74,
  height:74,
  borderRadius: 14,
  position: 'relative',
  top:1235,
  marginLeft: 0
},
to18 : {
  backgroundColor : "#4e505f",
  width:74,
  height:74,
  borderRadius: 14,
  position: 'relative',
  top:1308,
  marginLeft: 90
},
to19 : {
  backgroundColor : "#4e505f",
  width:74,
  height:74,
  borderRadius: 14,
  position: 'relative',
  top:1381,
  marginLeft: 180
},
to20 : {
  backgroundColor : "dodgerblue",
  width:74,
  height:74,
  borderRadius: 14,
  position: 'relative',
  top:1453,
  marginLeft: 270
},
text6:{
  fontWeight: "500",
  fontSize: 30,
  textAlign: 'center',
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "auto",
  marginBottom: "auto",
  color:"white"
},
displayy: {
  fontWeight: "200",
  marginLeft: "auto",
  marginRight:50  

},
vv1:{
  marginTop:50
},
  view1 : {
    position: 'relative',
  },
  vv:{
  backgroundColor: '#F1F2F3'
  }
})


export default App;
