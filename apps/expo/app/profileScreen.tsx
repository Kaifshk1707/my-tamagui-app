// File: apps/expo/app/profileScreen.tsx

import { useRouter, Stack } from 'expo-router'
import { useWindowDimensions, Image } from 'react-native'
import { YStack, Text, Input, Button, ScrollView } from 'tamagui'

export default function ProfileScreen() {
  const router = useRouter()
  const { width } = useWindowDimensions()

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <YStack f={1} bg="#3ec3aa" p="$4" jc="center" ai="center" space>
          <Image
            source={require('../assets/personImage.jpeg')}
            style={{
              width: width * 0.3,
              height: width * 0.3,
              resizeMode: 'cover',
              borderRadius: 500,
              marginVertical: 20,
            }}
          />

          <Text fontSize={22} color="#222" textAlign="center" mb="$6" fontWeight="500">
            What should we call you?
          </Text>

          <YStack width="100%" mb="$4">
            <Text fontWeight="600" mb="$2">
              Full Name
            </Text>
            <Input
              placeholder="Your Name"
              placeholderTextColor="#999"
              fontSize={16}
              bg="$background"
              borderRadius={10}
              px="$4"
              py="$3"
            />
          </YStack>

          <Button
            w="100%"
            bg="#1e1e1e"
            borderRadius={10}
            py="$3.5"
            onPress={() => router.push('/aboutScreen')}
          >
            <Text color="#fff" fontSize={16} fontWeight="bold">
              Let's Get To Know You
            </Text>
          </Button>

          <Text mt="$3" fontSize={14} color="$black">
            Your safety is our priority
          </Text>
        </YStack>
      </ScrollView>
    </>
  )
}
