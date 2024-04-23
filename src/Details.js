import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {deviceHeight, deviceWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import {API_KEY} from './Constants';

export default function Details(props) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const {name} = props.route.params;

  // useEffect(() => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
  //   )
  //     .then(res => res.json())
  //     .then(res => {
  //       setData(res);
  //       console.log('===== data of weather =>', res);

  //       setIsLoading(false);
  //     })
  //     .catch(err => console.log(err));
  //   console.log('');
  // }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setIsLoading(true);
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
      );

      const res = await result.json();
      setData(res);
      setIsLoading(false);
      console.log('in try block', res);
    } catch (error) {
      setIsError(true);
      console.log('Error fetching data', error);
      setIsLoading(false);
      console.log('in catch block');
    }
  };

  const Data = ({title, value}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{color: 'gray', fontSize: 22}}>{title}</Text>
      <Text style={{color: 'white', fontSize: 22}}>{value}</Text>
    </View>
  );

  return (
    <View>
      <ImageBackground
        source={require('../images/image5.jpg')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
      />
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,
          }}>
          <Icon name="menu" size={46} color="white" />
          <Image
            source={require('../images/image1.jpg')}
            style={{height: 46, width: 46, borderRadius: 50}}
          />
        </View>

        {isLoading ? (
          <ActivityIndicator animating={isLoading} color={'red'} />
        ) : isError ? (
          <View
            style={{
              height: 400,
              widht: '90%',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text>Something went wrong</Text>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: deviceHeight - 100,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 40}}>{name}</Text>
              <Text style={{fontSize: 22, color: 'white', textAlign: 'center'}}>
                {data.weather[0].main}
              </Text>
            </View>

            <Text style={{color: 'white', fontSize: 64}}>
              {(data.main.temp - 273).toFixed(2)}&deg;C
            </Text>

            <View>
              <Text style={{color: 'white', fontSize: 22, marginBottom: 16}}>
                Weather Details
              </Text>
              <View style={{width: deviceWidth - 60}}>
                <Data value={data.wind.speed} title="Wind" />
                <Data value={data.main.pressure} title="Pressure" />
                <Data value={`${data.main.humidity}%`} title="Humidity" />
                <Data value={data.visibility} title="Visibility" />
                <Data value={data.sys.sunrise} title="Sunrise" />
                <Data value={data.sys.sunset} title="Sunset" />
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
