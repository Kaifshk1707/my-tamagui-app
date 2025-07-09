// File: apps/expo/app/about.tsx

import { useState } from 'react'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { YStack, XStack, Text, Input, ScrollView, Button, Separator } from 'tamagui'
import { TouchableOpacity } from 'react-native'

export default function AboutScreen() {
  const router = useRouter()
  const [dob, setDob] = useState({ dd: '', mm: '', yyyy: '' })
  const [gender, setGender] = useState('')
  const [location, setLocation] = useState('')
  const [useCurrentLocation, setUseCurrentLocation] = useState(false)

  const selectGender = (value: string) => {
    setGender(value)
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
      <YStack f={1} bg="#3ec3aa" p="$4" pt="$6" space>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <Text fontSize={18} fontWeight="bold" mt="$3" mb="$4">
          A little about you so we match better
        </Text>

        {/* Date of Birth */}
        <Text fontWeight="600" mb="$2">
          Date of Birth
        </Text>
        <XStack space="$2" mb="$4">
          <Input
            placeholder="DD"
            value={dob.dd}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={(text) => setDob({ ...dob, dd: text })}
            w={70}
            textAlign="center"
            fontSize={15}
            br={10}
            px="$2"
            py="$2"
            bg="$background"
          />
          <Input
            placeholder="MM"
            value={dob.mm}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={(text) => setDob({ ...dob, mm: text })}
            w={70}
            textAlign="center"
            fontSize={15}
            br={10}
            px="$2"
            py="$2"
            bg="$background"
          />
          <Input
            placeholder="YYYY"
            value={dob.yyyy}
            keyboardType="number-pad"
            maxLength={4}
            onChangeText={(text) => setDob({ ...dob, yyyy: text })}
            w={100}
            textAlign="center"
            fontSize={15}
            br={10}
            px="$2"
            py="$2"
            bg="$background"
          />
        </XStack>

        {/* Gender */}
        <Text fontWeight="600" mb="$2">
          Gender
        </Text>
        <XStack space="$2" mb="$4">
          {['Male', 'Female', 'Other'].map((g) => (
            <Button
              key={g}
              bg={gender === g ? '$color' : '$background'}
              onPress={() => selectGender(g)}
              br={10}
              px="$4"
              py="$2"
              size="$3"
            >
              <Text fontWeight="500" color={gender === g ? '#fff' : '#000'}>
                {g}
              </Text>
            </Button>
          ))}
        </XStack>

        {/* Location */}
        <Text fontWeight="600" mb="$2">
          Location (City, Country)
        </Text>
        <Input
          placeholder="Enter your location"
          value={location}
          onChangeText={setLocation}
          fontSize={15}
          br={10}
          px="$4"
          py="$3"
          mb="$4"
          bg="$background"
        />

        {/* Use current location */}
        <TouchableOpacity
          onPress={() => setUseCurrentLocation(!useCurrentLocation)}
          style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}
        >
          <Ionicons
            name="location-sharp"
            size={16}
            color={useCurrentLocation ? '#000' : '#666'}
            style={{ marginRight: 6 }}
          />
          <Text color="$black">Use current location</Text>
        </TouchableOpacity>

        {/* Continue Button */}
        <Button bg="#1e1e1e" br={10} py="$3.5" onPress={() => router.push('/homeScreen')}>
          <Text color="#fff" fontWeight="bold" fontSize={15}>
            Continue
          </Text>
        </Button>

        <Text textAlign="center" fontSize={12} color="$black" mt="$3">
          Who are you open to connecting with?
        </Text>
      </YStack>
    </ScrollView>
  )
}
