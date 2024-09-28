import { View, Text, SafeAreaView, ScrollView, Image, ImageBackground, ImageComponent } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';  // Custom hook for detecting color scheme
import { StatusBar } from 'react-native';

import CustomButton from "@/components/CustomButton"
const index = () => {
  const colorScheme = useColorScheme();
  const logoSource = colorScheme === 'dark'
    ? require('@/assets/images/logo.png') // Light logo for dark mode
    : require('@/assets/images/logo.png'); // Dark logo for light mode
  const path=require('@/assets/images/path.png')
  const boy=require('@/assets/images/boy.png')


  return (
    <>
    
    <SafeAreaView className="flex-1 items-center">
        <Image
          source={logoSource}
          className='w-[15vh] h-[15vh] mt-[1vh]'
          resizeMode='contain'
          
        />
        <Text className={`${colorScheme==='dark'? 'color-primary':'color-primary'} text-4xl font-poppins-medium mt-[2vh]`}>Listen <Text className={`${colorScheme==='dark'? 'color-white':'color-black'}`}>and Enjoy </Text></Text>
        <Text></Text>
        
        

        <Image
          source={path}
          className='w-[136px] h-[18px] absolute-bottom-10 -right-10'
          resizeMode='contain'
        />
        

        <ImageBackground source={boy} className='w-[50vh] h-[50vh] mb-[5vh]' resizeMode='contain'>
          <View className='flex-1  items-center bottom-0 z-0'>
            
            
          </View>


        </ImageBackground>
        <CustomButton
            title="Sign in with email"
            handlePress={()=>{}}
            containerStyles="w-[40vh] z=1 mb-[50vh] -translate-y-20"
            


          />
        

       
        
      
    </SafeAreaView>
  </>
  );
};

export default index;
