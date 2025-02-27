import React, { useState } from 'react';
import { FlatList, Modal } from 'react-native';
import { Container, Header, Title, AddButton, AddButtonText, 
  ModalContainer, ModalContent, Input, ModalActions, ModalButton,
  ModalButtonText } from './styles';
import { WalletCard } from '../../components/WalletCard';

export const Wallets = () => {
  const [wallets, setWallets] = useState([
    { id: '1', name: 'Dinheiro', balance: 1800.00 },
    { id: '2', name: 'Cartão de Crédito', balance: 2500.00 },
    { id: '3', name: 'Conta Bancária', balance: 3200.00 },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newWalletName, setNewWalletName] = useState('');
  const [newWalletBalance, setNewWalletBalance] = useState('');

  const addWallet = () => {
    if (newWalletName.trim() && newWalletBalance !== '') {
      const newWallet = {
        id: Date.now().toString(),
        name: newWalletName,
        balance: parseFloat(newWalletBalance),
      };
      setWallets([...wallets, newWallet]);
      setNewWalletName('');
      setNewWalletBalance('');
      setModalVisible(false);
    }
  };

  const renderWallet = ({ item }) => (
    <WalletCard
      name={item.name}
      balance={item.balance}
      onEdit={() => {/* lógica de edição */}}
      onDelete={() => {/* lógica de exclusão */}}
    />
  );

  return (
    <Container>
      <Header>
        <Title>Minhas Carteiras</Title>
      </Header>

      <FlatList
        data={wallets}
        keyExtractor={(item) => item.id}
        renderItem={renderWallet}
      />

      <AddButton onPress={() => setModalVisible(true)}>
        <AddButtonText>Adicionar Nova Carteira</AddButtonText>
      </AddButton>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalContainer>
          <ModalContent>
            <Input 
              placeholder="Nome da Carteira"
              value={newWalletName}
              onChangeText={setNewWalletName}
            />
            <Input 
              placeholder="Saldo Inicial"
              value={newWalletBalance}
              onChangeText={setNewWalletBalance}
              keyboardType="numeric"
            />
            <ModalActions>
              <ModalButton onPress={() => setModalVisible(false)}>
                <ModalButtonText>Cancelar</ModalButtonText>
              </ModalButton>
              <ModalButton onPress={addWallet}>
                <ModalButtonText>Adicionar</ModalButtonText>
              </ModalButton>
            </ModalActions>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  );
};
