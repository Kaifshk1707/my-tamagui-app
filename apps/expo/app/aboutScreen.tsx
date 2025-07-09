import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

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
          A little about you so we match better
        </Text>

        {/* Date of Birth */}
        <Text style={{ fontWeight: '600', marginBottom: 6 }}>Date of Birth</Text>
        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 20 }}>
          <TextInput
            placeholder="DD"
            keyboardType="number-pad"
            maxLength={2}
            value={dob.dd}
            onChangeText={(text) => setDob({ ...dob, dd: text })}
            style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              paddingVertical: 12,
              paddingHorizontal: 10,
              width: 70,
              textAlign: 'center',
              fontSize: 15,
            }}
          />
          <TextInput
            placeholder="MM"
            keyboardType="number-pad"
            maxLength={2}
            value={dob.mm}
            onChangeText={(text) => setDob({ ...dob, mm: text })}
            style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              paddingVertical: 12,
              paddingHorizontal: 10,
              width: 70,
              textAlign: 'center',
              fontSize: 15,
            }}
          />
          <TextInput
            placeholder="YYYY"
            keyboardType="number-pad"
            maxLength={4}
            value={dob.yyyy}
            onChangeText={(text) => setDob({ ...dob, yyyy: text })}
            style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              paddingVertical: 12,
              paddingHorizontal: 10,
              width: 100,
              textAlign: 'center',
              fontSize: 15,
            }}
          />
        </View>

        {/* Gender */}
        <Text style={{ fontWeight: '600', marginBottom: 6 }}>Gender</Text>
        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 20 }}>
          {['Male', 'Female', 'Other'].map((g) => (
            <TouchableOpacity
              key={g}
              onPress={() => selectGender(g)}
              style={{
                backgroundColor: gender === g ? '#000' : '#fff',
                paddingVertical: 12,
                paddingHorizontal: 18,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: gender === g ? '#fff' : '#000',
                  fontSize: 15,
                  fontWeight: '500',
                }}
              >
                {g}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Location */}
        <Text style={{ fontWeight: '600', marginBottom: 6 }}>Location (City, Country)</Text>
        <TextInput
          placeholder="Enter your location"
          value={location}
          onChangeText={setLocation}
          style={{
            backgroundColor: '#fff',
            borderRadius: 10,
            paddingVertical: 12,
            paddingHorizontal: 15,
            fontSize: 15,
            marginBottom: 10,
          }}
        />

        {/* Use current location */}
        <TouchableOpacity
          onPress={() => {
            setUseCurrentLocation(!useCurrentLocation)
            // Optionally trigger location permission here
          }}
          style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 50 }}
        >
          <Ionicons
            name="location-sharp"
            size={16}
            color={useCurrentLocation ? '#000' : '#666'}
            style={{ marginRight: 6 }}
          />
          <Text style={{ color: '#000' }}>Use current location</Text>
        </TouchableOpacity>

        {/* Continue Button */}
        <TouchableOpacity
          style={{
            backgroundColor: '#1e1e1e',
            borderRadius: 10,
            paddingVertical: 14,
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>Continue</Text>
        </TouchableOpacity>

        <Text style={{ textAlign: 'center', fontSize: 12, color: '#000' }}>
          Who are you open to connecting with?
        </Text>
      </ScrollView>
    </>
  )
}
