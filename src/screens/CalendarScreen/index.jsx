import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Container, Header, Title, SelectedDateText } from './styles';

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
      <View style={{ marginTop: 180 }}> {/* Ajuste para garantir que a parte superior seja visível */}
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
