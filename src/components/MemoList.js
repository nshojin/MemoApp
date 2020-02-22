import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>構造化のアイデア</Text>
          <Text style={styles.memoDate}>2020/2/14</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>構造化のアイデア</Text>
          <Text style={styles.memoDate}>2020/2/14</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>構造化のアイデア</Text>
          <Text style={styles.memoDate}>2020/2/14</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>構造化のアイデア</Text>
          <Text style={styles.memoDate}>2020/2/14</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>構造化のアイデア</Text>
          <Text style={styles.memoDate}>2020/2/14</Text>
        </View>
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
