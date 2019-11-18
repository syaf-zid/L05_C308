/**
 * Lesson 05 Activities
 */

import React from 'react';
import {View, Text} from 'react-native';

// let movie = {title: 'Doctor Sleep', year: '2019'};
const MOVIES_DATA = ['Doctor Strange', 'Midway'];

const App = () => {
  let moviesArr = [];
  for (let i = 0; i < MOVIES_DATA.length; i++) {
    let movie = MOVIES_DATA[i];
    moviesArr.push(<Text key={movie}>{movie}</Text>);
    console.log(moviesArr);
  }
  return (
    <View>
      {/*<Text>C308 Web Frameworks</Text>*/}
      {/*<Text>{movie.title}</Text>*/}
      {/*<Text>{movie.year}</Text>*/}

      {/*<Text key="Doctor Sleep">Doctor Sleep</Text>*/}
      {/*<Text key="2019">2019</Text>*/}

      <View>{moviesArr}</View>
    </View>
  );
};

export default App;
