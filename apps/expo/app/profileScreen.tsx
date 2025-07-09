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

export default function profileScreen() {
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
        <Image
          source={require('./../assets/personImage.jpeg')} // Ensure splash.png exists
          style={{
            width: width * 0.3,
            height: width * 0.3,
            marginVertical: 20,
            resizeMode: 'cover',
            borderRadius: 500,
          }}
        />

        <Text
          style={{
            textAlign: 'center',
            fontSize: 22,
            marginBottom: 30,
            fontWeight: '500',
            color: '#222',
          }}
        >
          What should we call you?
        </Text>

        <View style={{ width: '100%' }}>
          <Text
            style={{
              fontWeight: '600',
              marginBottom: 5,
              color: '#000',
            }}
          >
            Full Name
          </Text>
          <TextInput
            placeholder="Your Name"
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

        <TouchableOpacity
          onPress={() => router.push('/aboutScreen')}
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
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
            Lets Get To Know You
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, color: '#000', marginTop: 5 }}>
          Your safety is our priority
        </Text>
      </ScrollView>
    </>
  )
}
