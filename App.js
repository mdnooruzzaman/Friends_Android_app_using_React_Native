/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Alert,
  Header,
  Pressable,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  FlatList,
  List
} from 'react-native';



const App = () => {
  const friend = [
    { id: 1, name: 'sonu', proffesion: 'Java developer' },
    { id: 2, name: 'shamsi', proffesion: 'MERN Developer' },
    { id: 3, name: 'shiblee', proffesion: 'B.com' },
    { id: 4, name: 'saifee', proffesion: 'Student' },
    { id: 5, name: 'kaifee', proffesion: 'Student' },
    { id: 6, name: 'negar', proffesion: 'Student' },
    { id: 7, name: 'sumi', proffesion: 'Student' },
    { id: 8, name: 'kamni', proffesion: 'Student' },
  ]
  const [text, setText] = useState('');
  const [prof, setProf] = useState('');

  const [fr, setFr] = useState(friend);

  const [toggel, setToggel] = useState(true);
  const [update, setUpdate] = useState(null)

  const onPressFunction = () => {
    if (!text && !prof) {
      Alert.alert('Sorry i can not add to the List your input is invalid')
    } else {

      setFr(fr => [...fr,
      {
        id: fr.length + 1,
        name: text,
        proffesion: prof
      }
      ])
      Alert.alert(`you are adding ${text} his/her professioin is ${prof}`);
      setText('');
      setProf('')
    }
  }

  const handleEdit = (id) => {
    const data = fr.find(c => c.id === id);
    // Alert.alert(`You are editing ${data.name} from friends list`);
    setText(data.name);
    setProf(data.proffesion)
    setUpdate(id);
    setToggel(false)
  }

  const handleDelete = (id) => {
    const data = fr.find(c => c.id === id);
    Alert.alert(`You are deleting ${data.name} from friends list`)
    const members = fr.filter(c => c.id !== id);
    setFr(members);
  }

  const handleUpdate = () => {
    setFr(fr.map(f => {
      if (f.id === update) {
        return { ...f, name: text, proffesion: prof }
      }
      return f;
    }))
    setToggel(true);
    setText("");
    setProf("")
  }

  const handleMenu = () => {
    Alert.alert("Now nothing to see")
  }

  return (
    <ScrollView>
      <StatusBar
        backgroundColor="#5c00e6"
        barStyle="light-content"
      />
      <View style={styles.header}>
        <Pressable onPress={handleMenu}>
          <Icon name="align-justify" size={25} color='white' />
        </Pressable>
        <Text style={styles.headerTitle}>My Profile</Text>
        <Icon name="cog" size={20} color='white' style={{ marginLeft: 170 }} />

      </View>
      <View style={styles.sectionContainer}>

        <View style={styles.set}>

          <View style={styles.sectionProfile}  >

            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'data:image/jpeg;base64,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'
              }}
            />
            <View>
              <Text style={styles.sectionTitle}>Md Nooruzzaman</Text>
              <Text style={styles.sectionDescription}>Software developer</Text>
            </View>

          </View>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="edit" size={18} color='purple' style={{ marginRight: 15 }} />

          </View>
        </View>

        <View style={styles.sectionInput}>
          <Text style={{ fontSize: 20, marginBottom: 10, color: 'black' }}>Add friends </Text>
          <TextInput
            style={{
              height: 40,
              borderBottomWidth: 1,
              borderColor: 'gray',
              borderRadius: 5,
              marginBottom: 5
            }}
            placeholder="Friend's name"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
          />
          <TextInput
            style={{
              height: 40,
              borderBottomWidth: 1,
              borderColor: 'gray',
              borderRadius: 5,
              marginBottom: 15
            }}
            placeholder="Profession"
            onChangeText={newProf => setProf(newProf)}
            defaultValue={prof}
          />
          {toggel
            ?
            <Pressable onPress={onPressFunction}>
              <Text style={styles.sectionPress}><Icon name="plus-square" size={20} color='white' style={{ margin: 15 }} />  Add Friends</Text>

            </Pressable>
            :
            <Pressable onPress={handleUpdate}>
              <Text style={styles.sectionPress}><Icon name="exchange-alt" size={20} color='white' style={{ margin: 15 }} />  Update</Text>

            </Pressable>
          }
        </View>

        <Text style={{ fontWeight: '600', fontSize: 15 }}>Friend's List</Text>

        {fr.map(f => (


          <View style={styles.set} key={f.id}>

            <View style={styles.sectionProfile}  >

              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84B7LvcKzDJKkixKTVyY6IqarBw6IK770Bw&usqp=CAU'
                }}
              />
              <View>
                <Text style={styles.sectionTitle}>{f.name}</Text>
                <Text style={styles.sectionDescription}>{f.proffesion}</Text>
              </View>

            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="edit" size={18} color='green' style={{ marginRight: 25 }} onPress={() => handleEdit(f.id)} />
              <Icon name="trash-alt" size={18} color='red' style={{ marginRight: 15 }} onPress={() => handleDelete(f.id)} />
            </View>
          </View>



        ))}

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 10,
    paddingHorizontal: 10,

  },
  sectionProfile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'

  },
  sectionInput: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10


  },
  set: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7300e6',

    padding: 10
  },
  headerTitle: {
    fontSize: 23,
    color: 'white',
    fontWeight: '500',
    marginLeft: 10
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'darkblue',
    marginLeft: 10,
    marginTop: 20

  },
  sectionDescription: {
    marginLeft: 10
  },
  sectionPress: {
    padding: 10,
    marginLeft: 80,
    marginRight: 80,
    backgroundColor: "blue",
    fontSize: 16,
    borderRadius: 5,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
