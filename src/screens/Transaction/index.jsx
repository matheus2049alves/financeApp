import React, { useState, useEffect } from "react";
import { View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Container, Header, Title, Input, ButtonContainer, ActionButton, ButtonText, 
  DateInputContainer, DateInputLabel, DateInput, SelectBoxContainer, SelectBoxView, 
  SelectBoxLabel, SubmitButton, SubmitButtonText } from './styles';
import IncomeIcon from '../../../assets/Incom.svg';
import OutcomeIcon from '../../../assets/Outcome.svg';
import { Picker } from '@react-native-picker/picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { api } from '../../services/api';

export const Transaction = () => {
  const navigation = useNavigation();
  
  // Estados para todos os campos do formulário
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [walletId, setWalletId] = useState('');
  const [description, setDescription] = useState('');
  
  // Estado para armazenar as carteiras do usuário
  const [wallets, setWallets] = useState([]);
  const [loading, setLoading] = useState(false);

  // Buscar carteiras do usuário ao carregar a tela
  useEffect(() => {
    fetchWallets();
  }, []);

  const fetchWallets = async () => {
    try {
      const response = await api.get('/wallets');
      setWallets(response.data);
      
      // Se houver carteiras, selecione a primeira por padrão
      if (response.data.length > 0) {
        setWalletId(response.data[0].id.toString());
      }
    } catch (error) {
      console.error('Erro ao buscar carteiras:', error);
      Alert.alert('Erro', 'Não foi possível carregar suas carteiras.');
    }
  };

  const handleDateChange = (text) => {
    let formattedDate = text.replace(/[^0-9]/g, '');
    if (formattedDate.length > 4) {
      formattedDate = formattedDate.slice(0, 4) + '-' + formattedDate.slice(4);
    }
    if (formattedDate.length > 7) {
      formattedDate = formattedDate.slice(0, 7) + '-' + formattedDate.slice(7);
    }
    if (formattedDate.length >= 7) {
      const year = parseInt(formattedDate.slice(0, 4), 10);
      const month = parseInt(formattedDate.slice(5, 7), 10);
      const day = parseInt(formattedDate.slice(8, 10), 10);

      if (month > 12) {
        formattedDate = formattedDate.slice(0, 5) + '12' + formattedDate.slice(7);
      }

      const daysInMonth = new Date(year, month, 0).getDate();
      if (day > daysInMonth) {
        formattedDate = formattedDate.slice(0, 8) + daysInMonth.toString().padStart(2, '0');
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

  const handleTransactionTypeChange = (selectedType) => {
    setType(selectedType);
  };

  // Função para converter formato da data YYYY-MM-DD para YYYY/MM/DD
  const formatDateForAPI = (dateString) => {
    return dateString.replace(/-/g, '/');
  };

  // Função para enviar a transação para o backend
  const handleSubmitTransaction = async () => {
    // Validação dos campos
    if (!value || value === '0') {
      Alert.alert('Erro', 'Por favor, insira um valor para a transação.');
      return;
    }

    if (!date) {
      Alert.alert('Erro', 'Por favor, insira a data da transação.');
      return;
    }

    if (!type) {
      Alert.alert('Erro', 'Por favor, selecione o tipo de transação (Entrada ou Saída).');
      return;
    }

    if (!category) {
      Alert.alert('Erro', 'Por favor, selecione uma categoria.');
      return;
    }

    if (!walletId) {
      Alert.alert('Erro', 'Por favor, selecione uma carteira.');
      return;
    }

    try {
      setLoading(true);
      
      const transactionData = {
        description: description || "Sem descrição",
        type: type,
        category: category,
        value: value,
        transaction_date: formatDateForAPI(date),
        wallet_id: walletId
      };

      await api.post('/transactions', transactionData);
      
      Alert.alert(
        'Sucesso', 
        'Transação registrada com sucesso!',
        [
          { 
            text: 'OK', 
            onPress: () => {
              // Limpar o formulário e voltar para a tela anterior
              setValue('');
              setDate('');
              setType('');
              setCategory('');
              setDescription('');
              navigation.goBack();
            } 
          }
        ]
      );
    } catch (error) {
      console.error('Erro ao registrar transação:', error);
      Alert.alert('Erro', 'Não foi possível registrar a transação. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <Header>
          <Title>Transação</Title>
        </Header>

        <Input
          placeholder="Valor"
          marginTop={`${hp('25%')}px`}
          keyboardType="numeric"
          value={value}
          onChangeText={setValue}
        />

        <DateInputContainer>
          <DateInputLabel>Data da Transação</DateInputLabel>
          <View style={{ position: 'relative' }}>
            <DateInput
              placeholder="YYYY-MM-DD"
              value={date}
              onChangeText={handleDateChange}
              onBlur={handleDateBlur}
              keyboardType="numeric"
              style={{ paddingRight: 40 }}
            />
            <Icon 
              name="calendar" 
              size={24} 
              color="#8C8C8C" 
              style={{
                position: 'absolute',
                right: 10,
                top: '50%',
                transform: [{ translateY: -12 }], 
              }} 
            />
          </View>
        </DateInputContainer>

        <ButtonContainer>
          <ActionButton
            onPress={() => handleTransactionTypeChange('income')}
            selected={type === 'income'}
          >
            <IncomeIcon width={24} height={24} />
            <ButtonText selected={type === 'income'}>
              Entrada
            </ButtonText>
          </ActionButton>
          <ActionButton
            onPress={() => handleTransactionTypeChange('expense')}
            selected={type === 'expense'}
          >
            <OutcomeIcon width={24} height={24} />
            <ButtonText selected={type === 'expense'}>
              Saída
            </ButtonText>
          </ActionButton>
        </ButtonContainer>

        <SelectBoxContainer>
          <SelectBoxLabel>Categoria</SelectBoxLabel>
          <SelectBoxView>
          <Picker
              selectedValue={category}
              onValueChange={(itemValue) => {
                setCategory(itemValue);
                console.log(itemValue);
              }}
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

        <SelectBoxContainer>
          <SelectBoxLabel>Carteira</SelectBoxLabel>
          <SelectBoxView>
            <Picker
              selectedValue={walletId}
              onValueChange={(itemValue) => setWalletId(itemValue)}
              enabled={wallets.length > 0}
            >
              {wallets.length === 0 ? (
                <Picker.Item label="Nenhuma carteira disponível" value="" />
              ) : (
                wallets.map(wallet => (
                  <Picker.Item 
                    key={wallet.id.toString()} 
                    label={wallet.name} 
                    value={wallet.id.toString()} 
                  />
                ))
              )}
            </Picker>
          </SelectBoxView>
        </SelectBoxContainer>

        <Input
          placeholder="Descrição"
          marginTop={`${hp('3%')}px`}
          value={description}
          onChangeText={setDescription}
        />

        <SubmitButton 
          onPress={handleSubmitTransaction}
          disabled={loading}
          style={{ opacity: loading ? 0.7 : 1 }}
        >
          <SubmitButtonText>{loading ? 'Enviando...' : 'Enviar'}</SubmitButtonText>
        </SubmitButton>
      </Container>
    </KeyboardAwareScrollView>
  );
};