import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ViewStyle } from 'react-native'
import { TextStyle } from 'react-native'
interface CustomButtonProps {
    title: string;                             // Title of the button
    handlePress: () => void;                   // Function to handle button press
    containerStyles?: ViewStyle | ViewStyle[]; // Optional container styles (can accept array)
    textStyles?: TextStyle | TextStyle[];      // Optional text styles (can accept array)
    isLoading?: boolean;                       // Optional flag to show loading indicator
  }
const CustomButton = ({title,handlePress,containerStyles,textStyles,isLoading}:CustomButtonProps) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-primary 
        rounded-xl min-h-[60px] justify-center items-center
        ${containerStyles} ${isLoading? 'opacity-50':''}`}
        disabled={isLoading}
     ><Text className='font-poppins-semibold text-2xl'>{title}</Text>


    </TouchableOpacity>
  )
}

export default CustomButton