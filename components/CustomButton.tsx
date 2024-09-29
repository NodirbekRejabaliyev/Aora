import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';

interface CustomButtonProps {
    title: string;                             // Title of the button
    handlePress: () => void;                   // Function to handle button press
    containerStyles?: string;                  // Tailwind class names as a string
    textStyles?: string;                       // Tailwind class names for text
    isLoading?: boolean;                       // Optional flag to show loading indicator
}

const CustomButton = ({
    title,
    handlePress,
    containerStyles = '',                      // Default to an empty string if not provided
    textStyles = '',                           // Default text styles
    isLoading = false,
}: CustomButtonProps) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-primary rounded-xl min-h-[60px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
        >
            {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
            ) : (
                <Text className={`font-poppins-semibold text-2xl ${textStyles}`}>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default CustomButton;
