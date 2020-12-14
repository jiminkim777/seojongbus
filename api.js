import axios from 'axios';

//국토교통부 버스위치정보 OpenAPI 인증키
const API_KEY =
  'x%2BYUuNnhQpBl9OkEMrTrJrJ5Ro2p65qsya0xESq7vMr%2BHSHvOp1xU4y0gPBNzzAmIBpkWWgQTlosh5BlhF092g%3D%3D';

//api 요청
const makeRequest = (path, params) =>
  axios.get(
    `http://openapi.tago.go.kr/openapi/service${path}?serviceKey=${API_KEY}`,
    {
      params: {
        ...params,
        // serviceKey: API_KEY,
      },
    },
  );

//makeRequest api 요청전에 오류검사
const getAnything = async (path, params = {}) => {
  try {
    const {
      data: {
        response: {
          body: {
            items: { item },
          },
        },
        data,
      },
    } = await makeRequest(path, params);
    //console.log(item);
    return [item || data, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

//도착 정보 조회 서비스
//ArvlInfoInqireService

//버스 노선정보 조회 서비스
//BusRouteInfoInqireService

//버스 정류소정보 조회 서비스
//BusSttnInqireService

//버스 위치정보 조회 서비스
//BusLcInfoInqireService

//bus 관련 api
export const busApi = {
  busStationInfo: (word) =>
    getAnything('/BusSttnInfoInqireService/getSttnNoList', {
      cityCode: 12,
      numOfRows: 10000,
      nodeNm: `${word}`,
    }),
  search: (word) => getAnything(),
  show: (id) => getAnything(),
};

//station 관련 api
export const stationApi = {
  search: (word) => getAnything(),
  show: (id) => getAnything(),
};
