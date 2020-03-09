import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';

class MemoList extends React.Component {
  renderMemo({ item }) {
    console.log(item);
    return (
      <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>{item.body}</Text>
          <Text style={styles.memoDate}>2020/12/12</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    const list = [];
    if (typeof this.props.memoList.forEach === 'function') {
      this.props.memoList.forEach((memo) => {
        list.push(memo);
      });
    }
    return (
      <View style={styles.memoList}>
        <FlatList data={list} renderItem={this.renderMemo.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a7a2a2',
  },
});

export default MemoList;
