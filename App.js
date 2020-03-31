import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

const App = () => {
  return(
  <View style= {styles.viewTop}>
    <View style={styles.view} >
    <Text style={styles.text} >ما تبطاش</Text>
    </View>
  </View>
  );
};


const styles = StyleSheet.create ({

  viewTop: { 
    backgroundColor: 'red', 
    height: 60 
  },
  view: {
    top: 60,
    backgroundColor: 'red',
    alignItems: 'center'  
  },
  text: {
    fontSize: 25,
    color: 'white'
  }

});

export default App;