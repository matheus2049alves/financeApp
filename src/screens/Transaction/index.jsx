import React, { useState } from "react";
import { View, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Title, Input, ButtonContainer, ActionButton, ButtonText, DateInputContainer, DateInputLabel, DateInput, SelectBoxContainer, SelectBoxView, SelectBoxLabel, SubmitButton, SubmitButtonText } from './styles';
import IncomeIcon from '../../../assets/Incom.svg';
import OutcomeIcon from '../../../assets/Outcome.svg';
import { Picker } from '@react-native-picker/picker';

export const Transaction = () => {
  const [date, setDate] = useState('');
  const [transactionType, setTransactionType] = useState('');

  const handleDateChange = (text) => {
    let formattedDate = text.replace(/[^0-9]/g, '');
    if (formattedDate.length > 4) {
      formattedDate = formattedDate.slice(0, 4) + '-' + formattedDate.slice(4);
    }
    if (formattedDate.length > 7) {
      formattedDate = formattedDate.slice(0, 7) + '-' + formattedDate.slice(7);
    }
    if (formattedDate.length >= 7) {
      const month = parseInt(formattedDate.slice(5, 7), 10);
      if (month > 12) {
        formattedDate = formattedDate.slice(0, 5) + '12' + formattedDate.slice(7);
      }
    }
    setDate(formattedDate);
  };

  const handleDateBlur = () => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) {
      Alert.alert('Data inválida', 'Por favor, insira uma data no formato YYYY-MM-DD');
    }
  };

  const handleTransactionTypeChange = (type) => {
    setTransactionType(type);
  };

  return (
    <Container>
      <Header>
        <Title>Transação</Title>
      </Header>
      <Input
        placeholder="Destino"
        marginTop="180px" // 153px (Header height) + 27px
      />
      <Input
        placeholder="Valor"
        marginTop="12px" // 12px below the Name input
      />
      <DateInputContainer>
        <DateInputLabel>Data da Transação</DateInputLabel>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <DateInput
            placeholder="YYYY-MM-DD"
            value={date}
            onChangeText={handleDateChange}
            onBlur={handleDateBlur}
            keyboardType="numeric"
          />
          <Icon name="calendar" size={24} color="#000" style={{ marginLeft: 10 }} />
        </View>
      </DateInputContainer>
      <ButtonContainer>
        <ActionButton
          onPress={() => handleTransactionTypeChange('income')}
          selected={transactionType === 'income'}
        >
          <IncomeIcon width={24} height={24} />
          <ButtonText selected={transactionType === 'income'}>
            Income
          </ButtonText>
        </ActionButton>
        <ActionButton
          onPress={() => handleTransactionTypeChange('outcome')}
          selected={transactionType === 'outcome'}
        >
          <OutcomeIcon width={24} height={24} />
          <ButtonText selected={transactionType === 'outcome'}>
            Outcome
          </ButtonText>
        </ActionButton>
      </ButtonContainer>
      <SelectBoxContainer>
        <SelectBoxLabel>Categoria</SelectBoxLabel>
        <SelectBoxView>
          <Picker
            selectedValue={'defult'}
            onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
          >
            <Picker.Item label="Comida" value="food" />
            <Picker.Item label="Transporte" value="transport" />
            <Picker.Item label="Saúde" value="health" />
            <Picker.Item label="Educação" value="education" />
            <Picker.Item label="Entretenimento" value="entertainment" />
            <Picker.Item label="Compras" value="shopping" />
            <Picker.Item label="Outros" value="others" />
            <Picker.Item label="Salário" value="salary" />
            <Picker.Item label="Freelance" value="freelance" />
            <Picker.Item label="Investimentos" value="investments" />
            <Picker.Item label="Negócios" value="business" />
            <Picker.Item label="Outros Rendimentos" value="other_income" />
          </Picker>
        </SelectBoxView>
      </SelectBoxContainer>
      <SubmitButton>
        <SubmitButtonText>Enviar</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
};
