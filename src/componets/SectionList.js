import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

const SectionList = ({children}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingLeft: 28,
    paddingTop: 16,
    paddingBottom: 42,
  },
});
export default SectionList;
