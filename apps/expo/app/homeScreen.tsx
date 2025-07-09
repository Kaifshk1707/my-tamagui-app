// File: apps/expo/app/homeScreen.tsx

import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { YStack, XStack, Text, ScrollView, Button } from 'tamagui'
import { Image, Dimensions, TouchableOpacity } from 'react-native'

const screenWidth = Dimensions.get('window').width

const EmotionItem = ({ emoji, label }: { emoji: string; label: string }) => (
  <YStack ai="center" space="$1">
    <Text fontSize={30}>{emoji}</Text>
    <Text fontSize={14} fontWeight="600" color="#000">
      {label}
    </Text>
  </YStack>
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
  <YStack bg="$background" m="$3" p="$3" br={12} elevation="$2" space>
    <XStack jc="space-between" mb="$2">
      <YStack>
        <Text fontWeight="600">{date}</Text>
        <Text fontSize={12} color="#444">
          {location}
        </Text>
      </YStack>

      <YStack ai="center" mr="$4">
        <Text fontSize={10}>{emoji}</Text>
        <Text fontSize={10}>feeling of the day</Text>
      </YStack>

      <Ionicons name="ellipsis-vertical" size={20} color="black" />
    </XStack>

    <Text fontSize={13} color="#444">
      {description}
    </Text>

    <XStack flexWrap="wrap" gap="$2">
      {images.map((img, i) => (
        <Image
          key={i}
          source={img}
          style={{
            width: (screenWidth - 60) / 3,
            height: 80,
            borderRadius: 6,
            marginTop: 6,
          }}
        />
      ))}
    </XStack>

    <TouchableOpacity>
      <Text textAlign="center" fontSize={15} color="#666" mt="$2">
        {extraText}
      </Text>
    </TouchableOpacity>
  </YStack>
)

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <YStack f={1} bg="#3ec3aa">
        {/* Header */}
        <XStack jc="space-between" ai="center" px="$4" mt="$6">
          <XStack ai="center" space="$2">
            <Image source={require('./../assets/icon.png')} style={{ width: 36, height: 36 }} />
            <Text fontSize={18} fontWeight="bold" color="#000">
              OkaBoka
            </Text>
          </XStack>

          <XStack ai="center" space="$3">
            <Ionicons name="notifications" size={28} color="gold" />
            <Image
              source={require('./../assets/personImage.jpeg')}
              style={{ width: 38, height: 38, borderRadius: 15 }}
            />
          </XStack>
        </XStack>

        {/* Feeling */}
        <Text mt="$3" fontSize={16} fontWeight="600" textAlign="center" color="#000">
          How I’m Feeling Right Now
        </Text>

        {/* Feeling Selector */}
        <XStack jc="space-around" ai="center" px="$4" mt="$2">
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>

          <YStack ai="center">
            <Text fontSize={30}>😢</Text>
            <Text fontSize={16} color="#000" fontWeight="600">
              Sad
            </Text>
            <XStack ai="center">
              <Ionicons name="people" size={20} color="black" />
              <Text ml="$2" fontSize={16}>
                1.5k
              </Text>
            </XStack>
          </YStack>

          <TouchableOpacity>
            <Ionicons name="arrow-forward" size={28} color="black" />
          </TouchableOpacity>
        </XStack>

        {/* Emotion Icons */}
        <XStack jc="space-around" px="$4" mt="$4" mb="$3">
          <EmotionItem emoji="😊" label="Happy" />
          <EmotionItem emoji="😘" label="Romantic" />
          <EmotionItem emoji="😐" label="Neutral" />
          <EmotionItem emoji="🤩" label="Excited" />
        </XStack>

        {/* Feed */}
        <ScrollView
          contentContainerStyle={{
            backgroundColor: '#f5f5f5',
            paddingBottom: 90,
          }}
        >
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
        <XStack
          position="absolute"
          bottom={0}
          w="100%"
          h={60}
          bg="#3ec3aa"
          jc="space-around"
          ai="center"
          brT="$4"
        >
          <TouchableOpacity>
            <Text fontSize={18} fontWeight="bold" color="#000">
              Oka (You)
            </Text>
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

          <TouchableOpacity>
            <Text fontSize={18} fontWeight="bold" color="#000">
              Oka’s
            </Text>
          </TouchableOpacity>
        </XStack>
      </YStack>
    </>
  )
}
