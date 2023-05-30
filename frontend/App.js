import React, { useState } from 'react';
import {
  Avatar
  , Header
  , Button
  , Input
  , ListItem
  , Text
  , Card
} from '@rneui/themed';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ListaPerguntas from './components/ListaPerguntas';


export default function App() {
  const [lembrete, setLembrete] = useState('');
  const [lista, setLista] = useState([]);

  const capturarLembrete = (lembreteDigitado) => {
    setLembrete(lembreteDigitado)

  }

  const onLongPressing = () => {
    console.log('testando')
  }
  const adicionarLembrete = () => {

    setLista((lista) => {
      const aux = [lembrete, ...lista]
      setLembrete('')
      return aux
    })
  }

  return (
    <SafeAreaProvider style={styles.container}>
      <Header
        backgroundColor="#61a6ab"
        centerComponent={{
          text: 'ChatGPT',
          style: styles.textHeader
        }}
      >
      </Header>

      <Card containerStyle={styles.card}>
        <Input style={styles.lembreteTextInput}
          placeholder='ESCREVA O TEXTO'
          onChangeText={capturarLembrete}
          value={lembrete.value}
        />
        <Button
          title='OK'
          onPress={adicionarLembrete}
          buttonStyle={styles.botao}
        />
      </Card>

      <FlatList
        data={lista}
        renderItem={(lista) => <>
          <TouchableOpacity
          onLongPress={onLongPressing}
          >
            <ListaPerguntas lista={lista} />
          </TouchableOpacity>
        </>
        }
      />
    </SafeAreaProvider >

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#DDD',
    borderRadius: 10
  },
  lembreteTextInput: {
    textAlign: 'center',
    marginBottom: 5,
  },
  botao: {
    backgroundColor: 'rgba(111, 202, 186, 1)',
    borderRadius: 5,
  },
  textHeader: {
    color: '#fff', alignItems: 'center', fontSize: 25
  },
  card: {
    backgroundColor: '#fefefe',
    borderRadius: 10
  }

})
