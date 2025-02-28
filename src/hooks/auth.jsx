// src/hook/auth.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';

// 1. Criar o contexto
export const AuthContext = createContext({});

// 2. Criar o provedor do contexto
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Carregar dados salvos ao iniciar a aplicação
  useEffect(() => {
    async function loadStoredData() {
      const [token, storedUser] = await Promise.all([
        AsyncStorage.getItem('@FinanceApp:token'),
        AsyncStorage.getItem('@FinanceApp:user')
      ]);

      if (token && storedUser) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        setUser(JSON.parse(storedUser));
      }
      
      setLoading(false);
    }

    loadStoredData();
  }, []);

  // Função de login
  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { token, user: userData } = response.data;

      // Salva nos headers das próximas requisições
      api.defaults.headers.authorization = `Bearer ${token}`;
      
      // Salva localmente para persistência
      await AsyncStorage.setItem('@FinanceApp:token', token);
      await AsyncStorage.setItem('@FinanceApp:user', JSON.stringify(userData));

      setUser(userData);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Erro ao fazer login'
      };
    }
  }

  // Função de cadastro
  async function signUp(userData) {
    try {
      await api.post('/users', userData);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Erro ao criar conta'
      };
    }
  }

  // Função de logout
  async function signOut() {
    await AsyncStorage.removeItem('@FinanceApp:token');
    await AsyncStorage.removeItem('@FinanceApp:user');
    setUser(null);
  }

  // 3. Retornar o Provider com os valores/funções que serão compartilhados
  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        loading,
        signIn,
        signUp, 
        signOut,
        isAuthenticated: !!user 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// 4. Hook customizado para facilitar o uso do contexto
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}