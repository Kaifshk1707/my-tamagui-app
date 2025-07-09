import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function RelationWorkScreen() {
  const router = useRouter()

  const [interest, setInterest] = useState('')
  const [relationship, setRelationship] = useState('')
  const [occupation, setOccupation] = useState('')

  const genderOptions = ['Male', 'Female', 'Other']
  const relationshipOptions = ['Single', 'In A Relationship', 'Prefer Not To Say']
  const occupationOptions = ['Student', 'Employee', 'Freelancer', 'Other']

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: '#3ec3aa',
          padding: 20,
          paddingTop: 50,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 25 }}>
          Let us understand who you're{'\n'}looking for and where you're at.
        </Text>

        {/* Interested In */}
        <Text style={{ fontWeight: '600', marginBottom: 4 }}>
          Interested In{' '}
          <Text style={{ fontWeight: 'normal', fontSize: 12 }}>
            (Who’s energy do you connect with?)
          </Text>
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
          {genderOptions.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => setInterest(item)}
              style={{
                backgroundColor: interest === item ? '#000' : '#fff',
                borderRadius: 10,
                paddingVertical: 12,
                paddingHorizontal: 18,
              }}
            >
              <Text
                style={{
                  color: interest === item ? '#fff' : '#000',
                  fontSize: 15,
                  fontWeight: '500',
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Relationship Status */}
        <Text style={{ fontWeight: '600', marginBottom: 6 }}>Relationship Status</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
          {relationshipOptions.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => setRelationship(item)}
              style={{
                backgroundColor: relationship === item ? '#000' : '#fff',
                borderRadius: 10,
                paddingVertical: 12,
                paddingHorizontal: 18,
              }}
            >
              <Text
                style={{
                  color: relationship === item ? '#fff' : '#000',
                  fontSize: 15,
                  fontWeight: '500',
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Are You */}
        <Text style={{ fontWeight: '600', marginBottom: 6 }}>Are You</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
          {occupationOptions.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => setOccupation(item)}
              style={{
                backgroundColor: occupation === item ? '#000' : '#fff',
                borderRadius: 10,
                paddingVertical: 12,
                paddingHorizontal: 18,
              }}
            >
              <Text
                style={{
                  color: occupation === item ? '#fff' : '#000',
                  fontSize: 15,
                  fontWeight: '500',
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={{
            backgroundColor: '#1e1e1e',
            borderRadius: 10,
            paddingVertical: 14,
            alignItems: 'center',
            marginBottom: 10,
          }}
          onPress={() => {
            // router.push('/next-screen')
            console.log({ interest, relationship, occupation })
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>Continue</Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 12,
            textAlign: 'center',
            marginBottom: 10,
            color: '#000',
          }}
        >
          Your very first vibe
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              color: '#000',
              fontWeight: 'bold',
              fontSize: 14,
              textDecorationLine: 'underline',
            }}
          >
            Skip For Now
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  )
}
