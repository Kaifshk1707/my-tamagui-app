// File: apps/expo/app/signup.tsx

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native'
import { useRouter, Stack } from 'expo-router'

export default function SignupScreen() {
  const router = useRouter()
  const { width } = Dimensions.get('window')

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: '#3ec3aa',
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={{ fontSize: 22, color: '#000', textAlign: 'center', marginBottom: 4 }}>
          Welcome to <Text style={{ fontWeight: 'bold' }}>okaBoka</Text>
        </Text>

        <Text style={{ fontSize: 13, color: '#333', marginBottom: 20, textAlign: 'center' }}>
          Connect with emotionally similar people
        </Text>

        <Image
          source={require('./../assets/icon.png')} // Ensure splash.png exists
          style={{
            width: width * 0.4,
            height: width * 0.4,
            marginVertical: 20,
            resizeMode: 'contain',
          }}
        />

        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            marginBottom: 30,
            fontWeight: '500',
            color: '#222',
          }}
        >
          Let’s start with your number your world begins here.
        </Text>

        <View style={{ width: '100%' }}>
          <Text
            style={{
              fontWeight: '600',
              marginBottom: 5,
              color: '#000',
            }}
          >
            Phone Number
          </Text>
          <TextInput
            placeholder="Enter your number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            style={{
              width: '100%',
              backgroundColor: '#fff',
              borderRadius: 10,
              paddingHorizontal: 15,
              paddingVertical: 12,
              fontSize: 16,
              marginBottom: 15,
            }}
          />
        </View>

        <Text style={{ marginVertical: 10, fontSize: 14, color: '#000' }}>or</Text>

        <TouchableOpacity
          style={{
            backgroundColor: '#fff',
            borderRadius: 10,
            paddingVertical: 12,
            paddingHorizontal: 15,
            width: '100%',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <Text style={{ color: '#000', fontSize: 15, fontWeight: '500' }}>
            Continue With Whatsapp
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/verification')}
          style={{
            backgroundColor: '#1e1e1e',
            borderRadius: 10,
            paddingVertical: 14,
            paddingHorizontal: 15,
            width: '100%',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>Send Me The Code</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 12, color: '#000', marginTop: 5 }}>
          We’ll never share your number
        </Text>
      </ScrollView>
    </>
  )
}
