import React, { useState, useEffect } from 'react';
import { FlatList, Modal, Alert, ActivityIndicator } from 'react-native';
import { Container, Header, Title, AddButton, AddButtonText, 
  ModalContainer, ModalContent, Input, ModalActions, ModalButton,
  ModalButtonText, LoadingContainer } from './styles';
import { WalletCard } from '../../components/WalletCard';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

export const Wallets = () => {
  const [wallets, setWallets] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newWalletName, setNewWalletName] = useState('');
  const [newWalletBalance, setNewWalletBalance] = useState('');
  const [loading, setLoading] = useState(true);
  const [editingWallet, setEditingWallet] = useState(null);
  
  const { user } = useAuth();

  // Buscar carteiras da API
  const fetchWallets = async () => {
    try {
      setLoading(true);
      const response = await api.get('/wallets');
      setWallets(response.data);
    } catch (error) {
      console.error('Erro ao buscar carteiras:', error);
      Alert.alert('Erro', 'Não foi possível carregar suas carteiras.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWallets();
  }, []);

  // Adicionar uma nova carteira
  const addWallet = async () => {
    if (!newWalletName.trim() || newWalletBalance === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      setLoading(true);
      const walletData = {
        name: newWalletName,
        balance: parseFloat(newWalletBalance),
        userId: user.id 
      };
      
      if (editingWallet) {
        // Editando uma carteira existente
        await api.put(`/wallets/${editingWallet.id}`, walletData);
        Alert.alert('Sucesso', 'Carteira atualizada com sucesso!');
      } else {
        // Adicionando uma nova carteira
        await api.post('/wallets', walletData);
        Alert.alert('Sucesso', 'Carteira adicionada com sucesso!');
      }
      
      // Limpar campos e atualizar lista
      setNewWalletName('');
      setNewWalletBalance('');
      setModalVisible(false);
      setEditingWallet(null);
      fetchWallets();
    } catch (error) {
      console.error('Erro ao salvar carteira:', error);
      Alert.alert('Erro', 'Não foi possível salvar a carteira.');
    } finally {
      setLoading(false);
    }
  };

  // Editar uma carteira existente
  const handleEdit = (wallet) => {
    setEditingWallet(wallet);
    setNewWalletName(wallet.name);
    setNewWalletBalance(wallet.balance.toString());
    setModalVisible(true);
  };

  // Excluir uma carteira
  const handleDelete = async (id) => {
    Alert.alert(
      'Confirmar exclusão',
      'Tem certeza que deseja excluir esta carteira?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Excluir', 
          style: 'destructive',
          onPress: async () => {
            try {
              setLoading(true);
              await api.delete(`/wallets/${id}`);
              fetchWallets();
              Alert.alert('Sucesso', 'Carteira excluída com sucesso!');
            } catch (error) {
              console.error('Erro ao excluir carteira:', error);
              Alert.alert('Erro', 'Não foi possível excluir a carteira.');
            } finally {
              setLoading(false);
            }
          }
        }
      ]
    );
  };

  const renderWallet = ({ item }) => (
    <WalletCard
      name={item.name}
      balance={item.balance}
      onEdit={() => handleEdit(item)}
      onDelete={() => handleDelete(item.id)}
    />
  );

  const openAddWalletModal = () => {
    setEditingWallet(null);
    setNewWalletName('');
    setNewWalletBalance('');
    setModalVisible(true);
  };

  if (loading && wallets.length === 0) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#4E61B6" />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <Header>
        <Title>Minhas Carteiras</Title>
      </Header>

      <FlatList
        data={wallets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderWallet}
        refreshing={loading}
        onRefresh={fetchWallets}
      />

      <AddButton onPress={openAddWalletModal}>
        <AddButtonText>Adicionar Nova Carteira</AddButtonText>
      </AddButton>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setEditingWallet(null);
        }}
      >
        <ModalContainer>
          <ModalContent>
            <Title>{editingWallet ? 'Editar Carteira' : 'Nova Carteira'}</Title>
            <Input 
              placeholder="Nome da Carteira"
              value={newWalletName}
              onChangeText={setNewWalletName}
            />
            <Input 
              placeholder="Saldo"
              value={newWalletBalance}
              onChangeText={setNewWalletBalance}
              keyboardType="numeric"
            />
            <ModalActions>
              <ModalButton 
                onPress={() => {
                  setModalVisible(false);
                  setEditingWallet(null);
                }}
              >
                <ModalButtonText>Cancelar</ModalButtonText>
              </ModalButton>
              <ModalButton onPress={addWallet}>
                <ModalButtonText>
                  {editingWallet ? 'Salvar' : 'Adicionar'}
                </ModalButtonText>
              </ModalButton>
            </ModalActions>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  );
};