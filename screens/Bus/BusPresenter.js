import React from 'react';
import styled from 'styled-components/native';
import Input from '../../navigation/components/bus/Input';
import ScrollContainer from '../../navigation/components/ScrollContainer';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';

const Container = styled.ScrollView`
  background-color: blue;
`;

export default ({ stationInfo, keyword, onChange, onSubmit }) => (
  <ScrollContainer
    refreshFn={onSubmit}
    loading={false}
    contentContainerStyle={{
      paddingTop: 10,
    }}
  >
    <Input
      placeholder={'Write a keyword'}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    {/* {stationInfo.length !== 0 && (
      <ScrollView title={'Results'}>
        {stationInfo.map((stationInfo) => (
          <Verticals
            key={stationInfo.id}
            id={movie.id}
            votes={movie.vote_average}
            title={movie.title}
            poster={movie.poster_path || movie.backdrop_path}
          />
        ))}
      </ScrollView>
    )} */}

    {/* 이부분 출력하고 싶은데 안나와~~~~~~~~~~~~~~~~~ */}
    {/* <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>asdfsdfsdfsdf</Text>
      </ScrollView>
    </SafeAreaView>
    ); */}
  </ScrollContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
