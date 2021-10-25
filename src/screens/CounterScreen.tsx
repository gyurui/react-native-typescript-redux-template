import React, {Component, Dispatch} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import {connect} from 'react-redux';
import {changeCount} from '../actions/CountsAction';
import {CountState} from '../reducers/CountReducer';
import {ReduxAction} from '../actions/ReduxAction';

interface CounterScreenProps {
  increment: (count: number) => void;
  decrement: (count: number) => void;
  count: number;
}

class CounterScreen extends Component<CounterScreenProps> {
  constructor(props: CounterScreenProps) {
    super(props);
  }

  render() {
    const {count, decrement, increment} = this.props;
    return (
      <View style={styles.container}>
        <Button title="Increment" onPress={() => increment(count)} />
        <Text>{count}</Text>
        <Button title="Decrement" onPress={() => decrement(count)} />
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

const mapStateToProps = (state: CountState) => {
  return {count: state.count};
};

function bindToAction(dispatch: Dispatch<ReduxAction>) {
  return {
    increment: (count: number) => dispatch(changeCount(count + 1)),
    decrement: (count: number) => dispatch(changeCount(count - 1)),
  };
}
export default connect(mapStateToProps, bindToAction)(CounterScreen);
