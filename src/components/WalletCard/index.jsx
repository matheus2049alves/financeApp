import React from "react";
import {
  CardContainer,
  InfoContainer,
  WalletName,
  WalletBalance,
  ActionButtons,
  ActionButton,
  ButtonText,
} from "./styles";

export const WalletCard = ({ name, balance, onEdit, onDelete }) => {
  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <CardContainer>
      <InfoContainer>
        <WalletName>{name}</WalletName>
        <WalletBalance>R$ {balance.toFixed(2)}</WalletBalance>
      </InfoContainer>
      <ActionButtons>
        <ActionButton onPress={onEdit}>
          <ButtonText>Editar</ButtonText>
        </ActionButton>
        <ActionButton onPress={onDelete}>
          <ButtonText>Excluir</ButtonText>
        </ActionButton>
      </ActionButtons>
    </CardContainer>
  );
};
