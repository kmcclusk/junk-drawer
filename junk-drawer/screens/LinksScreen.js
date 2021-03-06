import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';


export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Links',
    },
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>
        
        

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
