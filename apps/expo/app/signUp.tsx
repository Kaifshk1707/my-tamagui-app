// File: apps/expo/app/signup.tsx

import { useRouter } from 'expo-router'
import { Image } from 'react-native'
import { YStack, Text, Input, Button, ScrollView } from 'tamagui'

export default function SignupScreen() {
  const router = useRouter()

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
      <YStack f={1} bg="#3ec3aa" p="$4" jc="center" ai="center" space>
        <Text fontSize={22} color="$black" textAlign="center">
          Welcome to <Text fontWeight="bold">okaBoka</Text>
        </Text>

        <Text fontSize={13} color="#333" textAlign="center">
          Connect with emotionally similar people
        </Text>

        <Image
          source={require('../assets/icon.png')}
          style={{
            width: 140,
            height: 140,
            resizeMode: 'contain',
            marginVertical: 20,
          }}
        />

        <Text fontSize={15} textAlign="center" fontWeight="500" color="#222" mb="$6">
          Let’s start with your number, your world begins here.
        </Text>

        <YStack width="100%" space>
          <Text fontWeight="600" color="$black">
            Phone Number
          </Text>

          <Input
            placeholder="Enter your number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            fontSize={16}
            bg="$background"
            borderRadius={10}
            px="$4"
            py="$3"
            mb="$4"
          />
        </YStack>

        <Text my="$2" fontSize={14} color="$black">
          or
        </Text>

        <Button bg="$background" borderRadius={10} py="$3" w="100%" onPress={() => {}}>
          <Text color="#000" fontSize={15} fontWeight="500">
            Continue With Whatsapp
          </Text>
        </Button>

        <Button
          bg="#1e1e1e"
          borderRadius={10}
          py="$3.5"
          w="100%"
          onPress={() => router.push('/verification')}
        >
          <Text color="#fff" fontSize={15} fontWeight="bold">
            Send Me The Code
          </Text>
        </Button>

        <Text fontSize={12} color="$black" mt="$2">
          We’ll never share your number
        </Text>
      </YStack>
    </ScrollView>
  )
}
