import { useEffect } from 'react'
import { View, Image, ActivityIndicator, Text } from 'react-native'
import { useRouter, Stack } from 'expo-router'

export default function SplashScreen() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/homeScreen')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Header config */}
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}
      >
        <Image
          source={require('./../assets/splash.png')} // ✅ path to your image
          style={{ width: '100%', height: '110%', resizeMode: 'contain' }}
        />
      </View>
    </>
  )
}
