// File: apps/expo/app/index.tsx
import { useEffect } from 'react'
import { useRouter } from 'expo-router'
import { Image } from 'react-native' // ❗ still using this for static image
import { View, Spinner } from 'tamagui'

export default function SplashScreen() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/homeScreen')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <View f={1} jc="center" ai="center" bg="$background">
      <Image
        source={require('../assets/splash.png')}
        style={{ width: '100%', height: '110%', resizeMode: 'contain' }}
      />
      <Spinner size="large" color="$gray10" />
    </View>
  )
}
