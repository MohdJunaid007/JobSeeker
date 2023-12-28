import React, { useState } from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { Stack, useRouter } from 'expo-router'  // same as react router
import { COLORS, icons, images, SIZES, FONT } from '../constants'
import { ScreenHeaderBtn, Welcome, Nearbyjobs, Popularjobs, } from '../components'

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");

    return <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                ),
                headerTitle: ""

            }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, padding: SIZES.medium }}>
                <Welcome
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleClick={() => {
                        if (searchTerm) {
                            router.push(`/search/${searchTerm}`);
                        }
                    }}
                />
                <Popularjobs />
                <Nearbyjobs />

                <Text style={{
                    fontFamily: FONT.regular,
                    fontSize: SIZES.large,
                    color: COLORS.secondary,
                    textAlign: 'center',
                }}>Make with love by Mohd Junaid</Text>


            </View>
        </ScrollView>
    </SafeAreaView>
}

export default Home;