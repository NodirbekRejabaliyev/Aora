import { Tabs } from 'expo-router';
import React from 'react';
import { View, Image, Text } from 'react-native';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import 'react-native-reanimated';
import { MotiView } from 'moti'
import { TailwindColorSchemeProviderProps } from 'tailwindcss-react-native/dist/context/color-scheme';

const active = '#ff6100';
const inactive = '#004aad';
const time=30;
const diff=5;

type TabIconProps = {
  
  
  name: string;
  focused: boolean;
};

const Home = ({name, focused }: TabIconProps) => {
  const colorScheme = useColorScheme();
  return (
    <View style={{ alignItems: 'center' }}>
      <MotiView
        from={{
          translateX: 0,
          rotate: '0deg',
          scale: focused ? 1 : 1.2,  // Initial scale before animation
        }}
        animate={{
          
          rotate: focused ? [
            { value: '-3deg', duration: time }, // Slight left rotation
            { value: '3deg', duration: time },  // Slight right rotation
            { value: '-3deg', duration: time },
            { value: '3deg', duration: time },
            { value: '0deg', duration: time },  // Reset rotation
          ] : '0deg',
          
          scale: focused ? 1.2 : 1,  // Scale the image when focused
        }}
        transition={{
          type:"spring",
          duration: 300,
        }}
      >
      <Image source={require('@/assets/icons/home.png')} className='w-5 h-5 mt-[1vh]' resizeMode='contain'
      style={{tintColor: focused ? active : inactive, }} />


      </MotiView>
      
      <Text className={`${focused? active:inactive} ${colorScheme==='dark'? 'color-white':'color-black'} ${ focused? "font-poppins-regular":"font-poppins-regular"}`}>{name}</Text>
    </View>
  );
};
const Search = ({name, focused }: TabIconProps) => {
  const colorScheme = useColorScheme();
  
  return (
    <View style={{ alignItems: 'center' }}>
      <MotiView
        from={{
          translateX: 0,
          rotate: '0deg',
          scale: focused ? 1 : 1.2,  // Initial scale before animation
        }}
        animate={{
          
          rotate: focused ? [
            { value: '-3deg', duration: time }, // Slight left rotation
            { value: '3deg', duration: time },  // Slight right rotation
            
            { value: '0deg', duration: time },  // Reset rotation
          ] : '0deg',
          
          scale: focused ? 1.2 : 1,  // Scale the image when focused
        }}
        transition={{
          type:"spring",
          duration: 300,
        }}
      >
      <Image source={require('@/assets/icons/search.png')} className='w-5 h-5 mt-[1vh]' resizeMode='contain'
        style={{tintColor: focused ? active : inactive, }} />

      </MotiView>
      <Text className={`${focused? 'color-primary':'color-secondary'} ${colorScheme==='dark'? 'color-white':'color-black'} ${ focused? "font-poppins-regular":"font-poppins-regular"}`}>{name}</Text>
    </View>
  );
};

const Profile = ({name, focused }: TabIconProps) => {
  const colorScheme = useColorScheme();
  return (
    <View style={{ alignItems: 'center' }}>

<MotiView
        from={{
          translateX: 0,
          rotate: '0deg',
          scale: focused ? 1 : 1.2,  // Initial scale before animation
        }}
        animate={{
          
          rotate: focused ? [
            { value: '-3deg', duration: time }, // Slight left rotation
            { value: '3deg', duration: time },  // Slight right rotation
           
            { value: '0deg', duration: time },  // Reset rotation
          ] : '0deg',
          
          scale: focused ? 1.2 : 1,  // Scale the image when focused
        }}
        transition={{
          type:"spring",
          duration: 300,
        }}
      >
      <Image source={require('@/assets/icons/profile.png')} className='w-5 h-5 mt-[1vh]' resizeMode='contain' 
      style={{tintColor: focused ? active : inactive, }}/>
      </MotiView>
      <Text className={`${focused? 'color-white':'color-secondary'} ${colorScheme==='dark'? 'color-white':'color-black'} ${ focused? "font-poppins-regular":"font-poppins-regular"}`}>{name}</Text>
    </View>
  );
};

const BookMark = ({name, focused }: TabIconProps) => {
  const colorScheme = useColorScheme();
  return (
    <View style={{ alignItems: 'center' }}>
      <MotiView
        from={{
          translateX: 0,
          rotate: '0deg',
          scale: focused ? 1 : 1.2,  // Initial scale before animation
        }}
        animate={{
          
          rotate: focused ? [
            { value: '-3deg', duration: time }, // Slight left rotation
            { value: '3deg', duration: time },  // Slight right rotation
           
            { value: '0deg', duration: time },  // Reset rotation
          ] : '0deg',
          
          scale: focused ? 1.2 : 1,  // Scale the image when focused
        }}
        transition={{
          type:"spring",
          duration: 300,
        }}
      >
      <Image source={require('@/assets/icons/bookmark.png')} className='w-5 h-5 mt-[1vh]' resizeMode='contain'
      style={{tintColor: focused ? active : inactive, }} />

      </MotiView>
      
      <Text className={`${focused? 'color-primary':'color-secondary'} ${colorScheme==='dark'? 'color-white':'color-black'} ${ focused? "font-poppins-regular":"font-poppins-regular"}`}>{name}</Text>
    </View>
  );
};


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarShowLabel:false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({color,focused}) => (
            <Home
              
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({focused }) => (
            <Search
              
              
              name="Search"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown:false,
          title: 'profile',
          
          tabBarIcon: ({focused }) => (
            <Profile
              name="profile"// Capitalized for consistency
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          headerShown:false,
          title: 'profile',
          
          tabBarIcon: ({focused }) => (
            <BookMark
              name="Book mark"// Capitalized for consistency
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
