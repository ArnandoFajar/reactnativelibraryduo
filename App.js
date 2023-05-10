import React, { Component } from "react";
import { View, Text } from "react-native";
import { FlatGrid } from "react-native-super-grid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <FlatGrid
          itemDimension={300}
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
    );
  }
}

export default App;
