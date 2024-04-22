import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {deviceHeight, deviceWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-gesture-handler';

export default function HomeScreen(props) {
  const [city, setCity] = useState('');
  const [show, setShow] = useState(true);
  const [filteredCities, setFiteredCities] = useState([]);

  const cityName = [
    {name: 'Anantpur'},
    {name: 'Assam'},
    {name: 'Hyderabad'},
    {name: 'Manipur'},
    {name: 'Mumbai'},
    {name: 'Kalaburagi'},
    {name: 'Kanpur'},
    {name: 'Bangalore'},
    {name: 'Bhopal'},
    {name: 'Haldwani'},
    {name: 'Dehradun'},
    {name: 'New Delhi'},
    {name: 'Nagpur'},
    {name: 'Surat'},
    {name: 'Shimla'},
    {name: 'Chandigarh'},
    {name: 'Jaipur'},
  ];

  const filterCities = val => {
    if (!!val) {
      const filterArr = cityName.filter(city => city.name.includes(val)); //[{name: 'Anantpur'}]
      console.log('=====', filterArr);
      setFiteredCities(filterArr);
      setCity(val);
    } else {
      setFiteredCities([]);
      setCity(val);
    }
  };

  return (
    <View>
      <ImageBackground
        source={require('../images/image7.jpg')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
      />

      <View
        style={{
          position: 'absolute',
          paddingVertical: 0,
          paddingHorizontal: 0,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,
          }}></View>

        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{color: 'white', fontSize: 50}}>
            Welcome to Weather App
          </Text>
          <View style={{paddingHorizontal: 20, marginTop: 80}}>
            <Text style={{color: 'white', fontSize: 25}}>
              Search by City Name
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'white',
              marginTop: 10,
              paddingHorizontal: 10,
            }}>
            <TextInput
              value={city}
              //onChangeText={text => filterCities(text)}
              onChangeText={filterCities}
              //onChangeText={text => setCity(text)}
              placeholder="Search City"
              placeholderTextColor="white"
              style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
            />
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('Details', {name: city})
              }>
              {/* <Icon name="search" size={22} color="white" /> */}
            </TouchableOpacity>
          </View>
          <FlatList
            data={filteredCities}
            renderItem={({item}) => {
              console.log(item);
              return (
                <TouchableOpacity onPress={() => setCity(item.name)}>
                  <Text style={{color: 'white', fontSize: 20}}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'white',
              marginTop: 30,
              paddingHorizontal: 20,

              backgroundColor: 'gray',
            }}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('Details', {name: city})
              }>
              <Text
                style={{
                  paddingHorizontal: 10,
                  color: 'white',
                  fontSize: 16,
                  padding: 10,
                  fontSize: 20,
                }}>
                Get details
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
{
  /* <Text
            style={{
              color: 'white',
              fontSize: 22,
              paddingHorizontal: 10,
              marginTop: 5,
              marginBottom: 1,
            }}>
            My Locations
          </Text> */
}
