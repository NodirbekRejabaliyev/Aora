import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, TextInputProps, useColorScheme } from "react-native";
import icons from "@/constants/icons";

interface FormFieldProps extends TextInputProps {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const colorscheme=useColorScheme();
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className={` ${colorscheme==='light'? 'color-white':'color-textmain'} text-base font-poppins-medium`}>{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-primary flex flex-row items-center justify-center">
        <TextInput
          className="flex-1 text-white font-poppins-semibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword} // Toggle based on showPassword state
          accessibilityLabel={title}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)} accessible={true}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
              accessibilityLabel={showPassword ? "Hide password" : "Show password"}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
