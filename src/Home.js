// import Card from './Card';

// export default function Home(props) {
//   const [city, setCity] = useState('');
//   const [filteredCities, setFiteredCities] = useState([]);

//   const cityName = [
//     {name: 'Anantpur'},
//     {name: 'Assam'},
//     {name: 'Hyderabad'},
//     {name: 'Manipur'},
//     {name: 'Mumbai'},
//     {name: 'Kalaburagi'},
//     {name: 'Kanpur'},
//     {name: 'Bangalore'},
//     {name: 'Bhopal'},
//     {name: 'Haldwani'},
//     {name: 'Dehradun'},
//     {name: 'New Delhi'},
//     {name: 'Nagpur'},
//     {name: 'Surat'},
//     {name: 'Shimla'},
//     {name: 'Chandigarh'},
//     {name: 'Jaipur'},
//   ];

//   const filterCities = val => {
//     if (!!val) {
//       const filterArr = cityName.filter(city => city.name.includes(val)); //[{name: 'Anantpur'}]
//       console.log('=====', filterArr);
//       setFiteredCities(filterArr);
//       setCity(val);
//     } else {
//       setFiteredCities([]);
//       setCity(val);
//     }
//   };

//   return (
//     <View>
//       <View
//         style={{
//           position: 'absolute',
//           paddingVertical: 20,
//           paddingHorizontal: 10,
//         }}>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             width: deviceWidth - 20,
//           }}>
//           <Icon name="menu" size={46} color="white" />
//           <Image
//             source={require('../images/image1.jpg')}
//             style={{height: 46, width: 46, borderRadius: 50}}
//           />
//         </View>

//         <View style={{paddingHorizontal: 20, marginTop: 100}}>
//           <Text style={{color: 'white', fontSize: 22}}>
//             Welcome to Weather App
//           </Text>
//           <Text style={{color: 'white', fontSize: 18}}>
//             Search by City Name
//           </Text>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               borderRadius: 50,
//               borderWidth: 1,
//               borderColor: 'white',
//               marginTop: 10,
//               paddingHorizontal: 10,
//             }}>
//             <TextInput
//               value={city}
//               //onChangeText={text => filterCities(text)}
//               onChangeText={filterCities}
//               //onChangeText={text => setCity(text)}
//               placeholder="Search City"
//               placeholderTextColor="white"
//               style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
//             />
//             <TouchableOpacity
//               onPress={() =>
//                 props.navigation.navigate('Details', {name: city})
//               }>
//               <Icon name="search" size={22} color="white" />
//             </TouchableOpacity>
//           </View>
//           <FlatList
//             data={filteredCities}
//             renderItem={({item}) => {
//               console.log(item);
//               return (
//                 <TouchableOpacity onPress={() => setCity(item.name)}>
//                   <Text style={{color: 'white', fontSize: 20}}>
//                     {item.name}
//                   </Text>
//                 </TouchableOpacity>
//               );
//             }}
//           />
//           <Text
//             style={{
//               color: 'white',
//               fontSize: 22,
//               paddingHorizontal: 10,
//               marginTop: 5,
//               marginBottom: 1,
//             }}>
//             My Locations
//           </Text>

//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               borderRadius: 50,
//               borderWidth: 1,
//               borderColor: 'white',
//               marginTop: 10,
//               paddingHorizontal: 10,
//             }}>
//             <TouchableOpacity
//               onPress={() =>
//                 props.navigation.navigate('Details', {name: city})
//               }>
//               <Text> Get details</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }

// // const styles = StyleSheet.create({});
// // {
// //   /* <FlatList
// //   data={cityName}
// //   renderItem={({item}) => (
// //     <Card
// //       // filterCities={item.name}
// //       name={item.name}
// //       image={item.image}
// //       navigation={props.navigation}
// //     />
// //   )}
// // />; */
// // }
