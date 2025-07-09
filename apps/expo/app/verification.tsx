// File: apps/expo/app/verification.tsx

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'expo-router'
import { Image } from 'react-native'
import { YStack, Text, Input, Button, ScrollView, XStack } from 'tamagui'

export default function VerificationScreen() {
  const router = useRouter()
  const [otp, setOtp] = useState(['', '', '', ''])
  const inputsRef = useRef<any[]>([])
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
    router.push('/profileScreen')
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
      <YStack f={1} bg="#3ec3aa" p="$4" jc="center" ai="center" space>
        <Image
          source={require('../assets/icon.png')}
          style={{
            width: 140,
            height: 140,
            resizeMode: 'contain',
            marginBottom: 30,
          }}
        />

        <Text fontSize={20} fontWeight="bold" mb="$2">
          Verify your number
        </Text>
        <Text fontSize={14} color="#333" mb="$4">
          We've sent a code to your phone
        </Text>

        <XStack space="$3" mb="$4">
          {otp.map((digit, index) => (
            <Input
              key={index}
              value={digit}
              keyboardType="numeric"
              maxLength={1}
              ref={(ref) => (inputsRef.current[index] = ref)}
              onChangeText={(text) => handleOtpChange(text, index)}
              textAlign="center"
              fontSize={20}
              fontWeight="bold"
              w={55}
              h={55}
              br={10}
              bg="$background"
            />
          ))}
        </XStack>

        <Button bg="#1e1e1e" borderRadius={10} py="$3.5" w="80%" onPress={handleVerify}>
          <Text color="#fff" fontSize={16} fontWeight="bold">
            Verify
          </Text>
        </Button>

        <Text fontSize={13} color="$black" mt="$4">
          Didn’t receive code?{' '}
          <Text
            onPress={() => timer === 0 && setTimer(30)}
            textDecorationLine={timer === 0 ? 'underline' : 'none'}
            opacity={timer === 0 ? 1 : 0.4}
            fontWeight="600"
          >
            Resend
          </Text>
        </Text>

        <Text fontSize={12} mt="$1" color="$black">
          You can request a new code in {timer} seconds
        </Text>
      </YStack>
    </ScrollView>
  )
}
