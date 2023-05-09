import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Modal
          isVisible={this.state.modalOpen}
          testID={"modal"}
          backdropColor="#B4B3DB"
          backdropOpacity={0.8}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
        >
          <View
            style={{
              backgroundColor: "#ff2",
              borderRadius: 10,
              paddingVertical: 20,
            }}
          >
            <Text>I am the modal content</Text>
            <TouchableOpacity
              onPress={() => this.setState({ modalOpen: false })}
            >
              <Text>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({ modalOpen: true })}>
          <Text>Open Modal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
