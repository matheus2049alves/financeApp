import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Container, Header, Title, SelectedDateText } from './styles';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const CalendarScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    Alert.alert('Data Selecionada', `Você selecionou a data: ${day.dateString}`);
  };

  return (
    <Container>
      <Header>
        <Title>Calendário</Title>
      </Header>
      <View style={{ marginTop: hp('20%') }}>
        <Calendar
          onDayPress={onDayPress}
          markedDates={{
            [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' },
          }}
        />
        <SelectedDateText>Data selecionada: {selectedDate}</SelectedDateText>
      </View>
    </Container>
  );
};
