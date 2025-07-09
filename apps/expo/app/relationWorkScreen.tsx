// File: apps/expo/app/relationWork.tsx

import React, { useState } from 'react'
import { useRouter, Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { YStack, XStack, Text, Button, ScrollView, Separator } from 'tamagui'
import { TouchableOpacity } from 'react-native'

export default function RelationWorkScreen() {
  const router = useRouter()

  const [interest, setInterest] = useState('')
  const [relationship, setRelationship] = useState('')
  const [occupation, setOccupation] = useState('')

  const genderOptions = ['Male', 'Female', 'Other']
  const relationshipOptions = ['Single', 'In A Relationship', 'Prefer Not To Say']
  const occupationOptions = ['Student', 'Employee', 'Freelancer', 'Other']

  const renderOptionGroup = (
    label: string,
    options: string[],
    selected: string,
    onSelect: (val: string) => void
  ) => (
    <>
      <Text fontWeight="600" mb="$2">
        {label}
      </Text>
      <XStack flexWrap="wrap" gap="$2" mb="$5">
        {options.map((item) => (
          <Button
            key={item}
            br={10}
            size="$3"
            bg={selected === item ? '$color' : '$background'}
            onPress={() => onSelect(item)}
            px="$4"
            py="$2"
          >
            <Text color={selected === item ? '#fff' : '#000'} fontWeight="500">
              {item}
            </Text>
          </Button>
        ))}
      </XStack>
    </>
  )

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <YStack f={1} bg="#3ec3aa" p="$4" pt="$6">
          {/* Back button */}
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>

          <Text fontSize={18} fontWeight="bold" mt="$4" mb="$5">
            Let us understand who you're{'\n'}looking for and where you're at.
          </Text>

          {/* Interested In */}
          {renderOptionGroup(
            'Interested In (Who’s energy do you connect with?)',
            genderOptions,
            interest,
            setInterest
          )}

          {/* Relationship Status */}
          {renderOptionGroup(
            'Relationship Status',
            relationshipOptions,
            relationship,
            setRelationship
          )}

          {/* Are You */}
          {renderOptionGroup('Are You', occupationOptions, occupation, setOccupation)}

          {/* Continue Button */}
          <Button
            bg="#1e1e1e"
            br={10}
            py="$3.5"
            onPress={() => {
              console.log({ interest, relationship, occupation })
              // router.push('/next-screen')
            }}
            mb="$3"
          >
            <Text color="#fff" fontWeight="bold" fontSize={15}>
              Continue
            </Text>
          </Button>

          <Text fontSize={12} textAlign="center" color="$black" mb="$2">
            Your very first vibe
          </Text>

          <TouchableOpacity>
            <Text
              textAlign="center"
              fontSize={14}
              fontWeight="bold"
              textDecorationLine="underline"
              color="#000"
            >
              Skip For Now
            </Text>
          </TouchableOpacity>
        </YStack>
      </ScrollView>
    </>
  )
}
