import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';  // Custom hook for detecting color scheme
import CustomButton from "@/components/CustomButton";
import { router, Router } from 'expo-router';
const index = () => {
  const colorScheme = useColorScheme();
  const logoSource = colorScheme === 'dark'
    ? require('@/assets/images/logo.png') // Light logo for dark mode
    : require('@/assets/images/logo.png'); // Dark logo for light mode
  const path = require('@/assets/images/path.png');
  const boy = require('@/assets/images/boy.png');

  const bgdark = "#0a1128";
  const bglight = "#e9d69e";

  return (
    <>
      <SafeAreaView
        className={`${colorScheme === 'dark' ? 'bg-bglight' : 'bg-bgdark'} flex-1`}
        style={{
          backgroundColor: colorScheme === 'dark' ? bgdark : bglight,
        }}
      >
        {/* Wrapping everything inside ScrollView */}
        <ScrollView 
          contentContainerStyle={{ alignItems: 'center', height:'110%' }} // Center all content
          showsVerticalScrollIndicator={false} // Hide scroll indicator for cleaner UI
        >
          <Image
            source={logoSource}
            className="w-[15vh] h-[15vh] mt-[1vh]"
            resizeMode="contain"
          />
          <Text className={`${colorScheme === 'dark' ? 'color-white' : 'color-textmain'} text-4xl font-poppins-medium mt-[2vh]`}>
            Listen <Text className={`${colorScheme === 'dark' ? 'color-white' : 'color-textmain'}`}>and Enjoy</Text>
          </Text>

          <Text className={`${colorScheme === 'dark' ? 'color-white' : 'color-textmain'} font-poppins-regular text-xl`}>
            with our innovative app <Text className="color-primary font-poppins-semi-bold">Mix</Text>
          </Text>

          <Image
            source={path}
            className="w-[136px] h-[18px] absolute-bottom-10 -right-20"
            resizeMode="contain"
          />
          <Image source={boy} className="w-[50vh] h-[50vh] mb-[5vh]" resizeMode="contain" />

          <CustomButton
            title="Sign in with email"
            handlePress={() => router.push('/signUp')}
            containerStyles="w-[40vh] z-1 mb-[50vh] -translate-y-20"
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default index;
