import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const screenWidth = Dimensions.get('window').width

const EmotionItem = ({ emoji, label }: { emoji: string; label: string }) => (
  <View style={{ alignItems: 'center' }}>
    <Text style={{ fontSize: 30 }}>{emoji}</Text>
    <Text style={{ fontSize: 14, color: '#000', fontWeight: '600' }}>{label}</Text>
  </View>
)

const FeedItem = ({
  date,
  location,
  emoji,
  description,
  images,
  extraText,
}: {
  date: string
  location: string
  emoji: string
  description: string
  images: any[]
  extraText: string
}) => (
  <View
    style={{
      margin: 10,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 12,
      elevation: 2,
    }}
  >
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
      <View>
        <Text style={{ fontWeight: '600', marginBottom: 2 }}>{date}</Text>
        <Text style={{ fontSize: 12, color: '#444' }}>{location}</Text>
      </View>
      <View style={{ alignItems: 'center', right: '10%' }}>
        <Text style={{ fontSize: 10 }}>{emoji}</Text>
        <Text style={{ fontSize: 10 }}>feeling of the day</Text>
      </View>
      <Ionicons name="ellipsis-vertical" size={20} color="black" />
    </View>

    <Text style={{ fontSize: 13, marginBottom: 6, color: '#444' }}>{description}</Text>

    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
      {images.map((img, i) => (
        <Image
          key={i}
          source={img}
          style={{
            width: (screenWidth - 60) / 3,
            height: 80,
            borderRadius: 6,
          }}
        />
      ))}
    </View>

    <TouchableOpacity>
      <Text
        style={{
          padding: 10,
          fontSize: 16,
          marginTop: 6,
          color: '#666',
          alignSelf: 'center',
        }}
      >
        {extraText}
      </Text>
    </TouchableOpacity>
  </View>
)

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1, backgroundColor: '#3ec3aa' }}>
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 16,
            marginTop: 30,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('./../assets/icon.png')}
              style={{ width: 36, height: 36, marginRight: 8 }}
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>OkaBoka</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <Ionicons name="notifications" size={28} color="gold" />
            <Image
              source={require('./../assets/personImage.jpeg')}
              style={{ width: 38, height: 38, borderRadius: 15 }}
            />
          </View>
        </View>

        {/* Feeling Header */}
        <Text style={{ fontSize: 16, textAlign: 'center', color: '#000', fontWeight: '600' }}>
          How I’m Feeling Right Now
        </Text>

        {/* Feeling Selector */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginVertical: 10,
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>

          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>😢</Text>
            <Text style={{ fontSize: 16, color: '#000', fontWeight: '600' }}>Sad</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="people" size={20} color="black" />
              <Text style={{ fontSize: 16, marginLeft: 4 }}>1.5k</Text>
            </View>
          </View>

          <TouchableOpacity>
            <Ionicons name="arrow-forward" size={28} color="black" />
          </TouchableOpacity>
        </View>

        {/* Emotions List */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 10,
            paddingHorizontal: 20,
          }}
        >
          <EmotionItem emoji="😊" label="Happy" />
          <EmotionItem emoji="😘" label="Romantic" />
          <EmotionItem emoji="😐" label="Neutral" />
          <EmotionItem emoji="🤩" label="Excited" />
        </View>

        {/* Feed */}
        <ScrollView contentContainerStyle={{ backgroundColor: '#f5f5f5', paddingBottom: 90 }}>
          <FeedItem
            date="July 07, 2025"
            location="📍 Metro Manila, Philippines"
            emoji="😁"
            description="You spent time outdoors — surrounded by trees, sunlight, and the quiet rhythm of the city."
            images={[
              require('./../assets/Image1.jpeg'),
              require('./../assets/Image2.jpeg'),
              require('./../assets/Image3.jpeg'),
              require('./../assets/Image3.jpeg'),
              require('./../assets/Image5.jpeg'),
              require('./../assets/Image6.jpeg'),
            ]}
            extraText="8 More Moments"
          />

          <FeedItem
            date="July 27, 2025"
            location="📍 Bataan, Philippines"
            emoji="🤩"
            description="You spent time outdoors — surrounded by trees, sunlight, and the quiet rhythm of the city."
            images={[
              require('./../assets/party1.jpeg'),
              require('./../assets/part2.jpeg'),
              require('./../assets/party3.jpeg'),
              require('./../assets/party4.jpeg'),
              require('./../assets/party5.jpeg'),
              require('./../assets/party6.jpeg'),
            ]}
            extraText="5 More Moments"
          />
        </ScrollView>

        {/* Bottom Tab */}
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 60,
            backgroundColor: '#3ec3aa',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        >
          <TouchableOpacity onPress={() => console.log('OKA')}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>Oka (You)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              width: 45,
              height: 45,
              borderRadius: 22.5,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: -20,
            }}
          >
            <Ionicons name="add" size={32} color="#3ec3aa" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("Oka's")}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>Oka’s</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}
