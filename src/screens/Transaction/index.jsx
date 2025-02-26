import React from "react";
import {Container, Header, Title, Input, ButtonContainer, ActionButton, ButtonText, SelectBoxContainer, SubmitButton, SubmitButtonText} from './styles';
import IncomeIcon from '../../../assets/Incom.svg';
import OutcomeIcon from '../../../assets/Outcome.svg';
import { Picker } from '@react-native-picker/picker';

export const Transaction = () => {
  return (
    <Container>
      <Header>
        <Title>Transaction</Title>
      </Header>
      <Input
        placeholder="Nome"
        marginTop="180px" // 153px (Header height) + 27px
      />
      <Input
        placeholder="Preço"
        marginTop="12px" // 12px below the Name input
      />
      <ButtonContainer>
        <ActionButton>
          <IncomeIcon width={24} height={24} />
          <ButtonText>Income</ButtonText>
        </ActionButton>
        <ActionButton>
          <OutcomeIcon width={24} height={24} />
          <ButtonText>Outcome</ButtonText>
        </ActionButton>
      </ButtonContainer>
      <SelectBoxContainer>
        <Picker
          selectedValue={"default"}
          onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
          style={{ flex: 1, justifyContent: 'center', textAlign: 'left' }}
        >
          <Picker.Item label="Categoria" value="default" />
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
      </SelectBoxContainer>
      <SubmitButton>
        <SubmitButtonText>Enviar</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
};
