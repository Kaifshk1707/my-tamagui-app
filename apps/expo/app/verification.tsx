import React, { useState, useRef, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native'
import { Stack, useRouter } from 'expo-router'

export default function VerificationScreen() {
  const router = useRouter()
  const [otp, setOtp] = useState(['', '', '', ''])
  const inputsRef = useRef<TextInput[]>([])
  const [timer, setTimer] = useState(30)

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000)
      return () => clearTimeout(countdown)
    }
  }, [timer])

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp]
    newOtp[index] = text
    setOtp(newOtp)

    if (text && index < 3) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handleVerify = () => {
    const code = otp.join('')
    console.log('Verifying code:', code)
    router.push('/profileScreen') // Navigate on success
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: '#3ec3aa',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require('./../assets/icon.png')}
          style={{
            width: Dimensions.get('window').width * 0.4,
            height: Dimensions.get('window').width * 0.4,
            resizeMode: 'contain',
            marginBottom: 30,
          }}
        />

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 6 }}>
          Verify your number
        </Text>
        <Text style={{ fontSize: 14, color: '#333', marginBottom: 25 }}>
          We've sent a code to your phone
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
            marginBottom: 25,
          }}
        >
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              value={digit}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(text) => handleOtpChange(text, index)}
              ref={(ref) => (inputsRef.current[index] = ref!)}
              style={{
                width: 55,
                height: 55,
                backgroundColor: '#fff',
                borderRadius: 10,
                textAlign: 'center',
                fontSize: 22,
                fontWeight: 'bold',
              }}
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={handleVerify}
          style={{
            backgroundColor: '#1e1e1e',
            borderRadius: 10,
            paddingVertical: 14,
            paddingHorizontal: 20,
            width: '80%',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Verify</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 13, color: '#000' }}>
          Didn’t receive code?{' '}
          <Text
            style={{
              color: '#000',
              fontWeight: '600',
              textDecorationLine: timer === 0 ? 'underline' : 'none',
              opacity: timer === 0 ? 1 : 0.4,
            }}
            onPress={() => timer === 0 && setTimer(30)}
          >
            Resend
          </Text>
        </Text>
        <Text style={{ fontSize: 12, marginTop: 4, color: '#000' }}>
          You can request a new code in {timer} seconds
        </Text>
      </ScrollView>
    </>
  )
}
