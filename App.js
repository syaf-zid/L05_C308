/**
 * Lesson 05 Activities
 */

import React from 'react';
import {View, Text} from 'react-native';

const MOVIES_DATA = [
  {title: 'Doctor Sleep', year: '2019'},
  {title: 'Midway', year: '2019'},
];

const App = () => {
  let moviesArr = [];
  for (let i = 0; i < MOVIES_DATA.length; i++) {
    let movie = MOVIES_DATA[i];
    moviesArr.push(<Text key={movie.title}>{movie.title}</Text>);
    moviesArr.push(<Text key={movie.year}>{movie.year}</Text>);
    console.log(moviesArr);
  }
  return (
    <View>
      <View>{moviesArr}</View>
    </View>
  );
};

export default App;
