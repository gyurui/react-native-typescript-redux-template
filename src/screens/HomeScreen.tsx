import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackParams';
import {MainStack} from '../models/navigation/MainStack';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

class HomeScreen extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to the Counter Screen"
          onPress={() => this.props.navigation.navigate(MainStack.counter)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
