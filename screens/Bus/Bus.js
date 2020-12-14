import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import { busApi } from '../../api';
import { apisAreAvailable } from 'expo';
import axios from 'axios';
import BusPresenter from './BusPresenter';

// //국토교통부 버스위치정보 OpenAPI 인증키
// const API_KEY =
//   'x%2BYUuNnhQpBl9OkEMrTrJrJ5Ro2p65qsya0xESq7vMr%2BHSHvOp1xU4y0gPBNzzAmIBpkWWgQTlosh5BlhF092g%3D%3D';

// //버스 정보 가져옴
// // citycode : 12, cityname : 세종특별시
// const getBusInfo = async () => {
//   const data = await axios.get(
//     //citycode get
//     // `http://openapi.tago.go.kr/openapi/service/ArvlInfoInqireService/getCtyCodeList?serviceKey=${API_KEY}`,
//     //buslist get
//     `http://openapi.tago.go.kr/openapi/service/BusSttnInfoInqireService/getSttnNoList?cityCode=12&numOfRows=10000&serviceKey=${API_KEY}`,
//   );

//   console.log(data);
// };

export default () => {
  //초기값 셋팅
  const [bus, setBus] = useState({
    stationInfo: [],
    stationInfoError: null,
  });
  const [keyword, setKeyword] = useState('');

  const onChange = (text) => setKeyword(text);

  //데이터요청
  const getData = async () => {
    const [stationInfo, stationInfoError] = await busApi.busStationInfo(
      keyword,
    );
    console.log(stationInfo, stationInfoError);
    setBus({
      stationInfo,
      stationInfoError,
    });
  };

  //componentdidmount;
  useEffect(() => {
    getData();
    //getBusInfo();
  }, []);
  return (
    <BusPresenter
      //{...results}
      onChange={onChange}
      onSubmit={getData}
      keyword={keyword}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: 'white',
  },
  text: {
    color: '#ffffff',
    fontSize: 30,
  },
});
