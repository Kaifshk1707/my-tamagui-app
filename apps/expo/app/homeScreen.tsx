import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { Stack } from 'expo-router'
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons'

export default function HomeScreen() {
  const screenWidth = Dimensions.get('window').width

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
              source={require('./../assets/personImage.jpeg')} // your profile avatar
              style={{ width: 38, height: 38, borderRadius: 15 }}
            />
          </View>
        </View>

        {/* Feeling Header */}
        <Text style={{ fontSize: 16, textAlign: 'center', color: '#000', fontWeight: '600' }}>
          How I’m Feeling Right Now
        </Text>

        {/* Feeling Emotions Selector */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: 10,
            marginBottom: 10,
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>😢</Text>
            <Text style={{ fontSize: 16, color: '#000', fontWeight: '600' }}>Sad</Text>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="people" size={20} color="black" />{' '}
              <Text style={{ fontSize: 16 }}>1.5k</Text>
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
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>😊</Text>
            <Text style={{ fontSize: 14, color: '#000', fontWeight: '600' }}>Happy</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>😘</Text>
            <Text style={{ fontSize: 14, color: '#000', fontWeight: '600' }}>Romantic</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>😐</Text>
            <Text style={{ fontSize: 14, color: '#000', fontWeight: '600' }}>Neutral</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>🤩</Text>
            <Text style={{ fontSize: 14, color: '#000', fontWeight: '600' }}>Exited</Text>
          </View>
        </View>

        {/* Feed */}
        <ScrollView contentContainerStyle={{ backgroundColor: '#f5f5f5', paddingBottom: 90 }}>
          {/* Feed Item 1 */}
          <View
            style={{
              margin: 10,
              padding: 10,
              backgroundColor: '#fff',
              borderRadius: 12,
              elevation: 2,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 6,
              }}
            >
              <View>
                <Text style={{ fontWeight: '600', marginBottom: 2 }}>July 07, 2025</Text>
                <Text style={{ fontSize: 12, color: '#444' }}>📍 Metro Manila, Philippines</Text>
              </View>
              <View style={{ flexDirection: 'column', alignItems: 'center', right: '10%' }}>
                <Text style={{ fontSize: 10 }}>😁</Text>
                <Text style={{ fontSize: 10 }}>feeling of the day</Text>
              </View>
              <Ionicons name="ellipsis-vertical" size={20} color="black" />
            </View>

            <Text
              style={{
                fontSize: 13,
                marginBottom: 6,
                color: '#444',
              }}
            >
              You spent time outdoors — surrounded by trees, sunlight, and the quiet rhythm of the
              city.
            </Text>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
              <Image
                source={require('./../assets/Image1.jpeg')}
                style={{
                  width: (screenWidth - 60) / 3,
                  height: 80,
                  borderRadius: 6,
                }}
              />
              <Image
                source={require('./../assets/Image2.jpeg')}
                style={{
                  width: (screenWidth - 60) / 3,
                  height: 80,
                  borderRadius: 6,
                }}
              />
              <Image
                source={require('./../assets/Image3.jpeg')}
                style={{
                  width: (screenWidth - 60) / 3,
                  height: 80,
                  borderRadius: 6,
                }}
              />
              <Image
                source={require('./../assets/Image3.jpeg')}
                style={{
                  width: (screenWidth - 60) / 3,
                  height: 80,
                  borderRadius: 6,
                }}
              />
              <View style={{ flexDirection: 'column', position: 'relative' }}>
                {/* Image */}
                <Image
                  source={require('./../assets/Image5.jpeg')}
                  style={{
                    width: (screenWidth - 5) / 3,
                    height: 120,
                    borderRadius: 6,
                  }}
                />

                {/* Gray overlay from half of the image */}
                <View
                  style={{
                    position: 'absolute',
                    top: 80,
                    left: 0,
                    right: 0,
                    height: 40,
                    backgroundColor: 'rgba(211, 211, 211, 0.5)', // light gray with transparency
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                  }}
                >
                  {/* Text */}
                  <Text
                    style={{
                      fontSize: 14,
                      marginTop: 4,
                      textAlign: 'center',
                      fontWeight: 'semibold',
                      color: '#000',
                    }}
                  >
                    Best moments of the day
                  </Text>
                </View>
              </View>

              <Image
                source={require('./../assets/Image6.jpeg')}
                style={{
                  width: (screenWidth - 60) / 3.5,
                  height: 80,
                  borderRadius: 6,
                }}
              />
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
                8 More Moments
              </Text>
            </TouchableOpacity>
          </View>

          {/* Repeat same block for other feed entries */}
          {/* Feed Item 2 */}
          <View
            style={{
              margin: 10,
              padding: 10,
              backgroundColor: '#fff',
              borderRadius: 12,
              elevation: 2,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 6,
              }}
            >
              <View>
                <Text style={{ fontWeight: '600', marginBottom: 2 }}>July 27, 2025</Text>
                <Text style={{ fontSize: 12, color: '#444' }}>📍 Bataan, Philippines</Text>
              </View>
              <View style={{ flexDirection: 'column', alignItems: 'center', right: '10%' }}>
                <Text style={{ fontSize: 10 }}>🤩</Text>
                <Text style={{ fontSize: 10 }}>feeling of the day</Text>
              </View>
              <Ionicons name="ellipsis-vertical" size={20} color="black" />
            </View>

            <Text
              style={{
                fontSize: 13,
                marginBottom: 6,
                color: '#444',
              }}
            >
              You spent time outdoors — surrounded by trees, sunlight, and the quiet rhythm of the
              city.
            </Text>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
              <Image
                source={require('./../assets/party1.jpeg')}
                style={{
                  width: (screenWidth - 60) / 3,
                  height: 80,
                  borderRadius: 6,
                }}
              />
              <Image
                source={require('./../assets/part2.jpeg')}
                style={{
                  width: (screenWidth - 60) / 3,
                  height: 80,
                  borderRadius: 6,
                }}
              />
              <Image
                source={require('./../assets/party3.jpeg')}
                style={{
                  width: (screenWidth - 60) / 3,
                  height: 80,
                  borderRadius: 6,
                }}
              />
              <Image
                source={require('./../assets/party4.jpeg')}
                style={{
                  width: (screenWidth - 60) / 3,
                  height: 80,
                  borderRadius: 6,
                }}
              />
              <Image
                source={require('./../assets/party5.jpeg')}
                style={{
                  width: (screenWidth - 60) / 3,
                  height: 80,
                  borderRadius: 6,
                }}
              />
              <Image
                source={require('./../assets/party6.jpeg')}
                style={{
                  width: (screenWidth - 60) / 3,
                  height: 80,
                  borderRadius: 6,
                }}
              />
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
                5 More Moments
              </Text>
            </TouchableOpacity>
          </View>
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
            <Text style={{ fontWeight: 'bold', color: '#000' }}>Oka (You)</Text>
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
            <Text style={{ fontSize: 28, color: '#3ec3aa' }}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Oka's")}>
            <Text style={{ fontWeight: 'bold', color: '#000' }}>Oka’s</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}
