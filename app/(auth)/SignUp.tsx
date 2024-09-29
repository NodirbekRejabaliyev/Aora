import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image, useColorScheme } from "react-native";

import images from "@/constants/images";

import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";


const SignUp = () => {
  
  const colorscheme=useColorScheme();
  const oraliq="mt-3";
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert("Error", "Please fill in all fields");
      return false;
    }
    if (!validateEmail(form.email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return false;
    }
    if (form.password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return false;
    }
    return true;
  };
  const submit = async () => {
    if (form.email === "" || form.password === "" || form.username==="") {
      Alert.alert("Error", "Please fill in all fields");
    }

    

    try {
      

      Alert.alert("Success", "User signed in successfully");
      router.replace('/home')
    } catch (error) {
      
    } finally {
      
    }
  };

  

  return (
    <SafeAreaView className={`${colorscheme==='dark'? 'bg-white':'bg-bgdark'} flex-start justify-evenly items-center`}>
      <ScrollView 
          contentContainerStyle={{ alignItems: 'center', height:'120%', }} // Center all content
          showsVerticalScrollIndicator={false} 
          >
        <View
          className="w-full flex-1 justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          

          <Text className={` ${colorscheme=='light'? 'color-white':'color-textmain'} text-2xl font-poppins-semibold  mt-10 font-psemibold`}>
            Sign Up to Mix
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(username) => setForm({ ...form, username })}
            otherStyles="mt-[5vh]"
            placeholder="enter your username"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(email) => setForm({ ...form, email })}
            otherStyles={oraliq}
            keyboardType="email-address"
            placeholder="enter you email"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(password) => setForm({ ...form, password })}
            otherStyles={oraliq}
            secureTextEntry={true} // Ensure the password is masked
            placeholder="enter your password"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-[5vh] w-[300px]"
            isLoading={isSubmitting}
             
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className={` ${colorscheme=='light'? 'color-white':'color-textmain'} text-lg font-poppins-regular  mt-10 `}>
              Have an account already?
            </Text>
            <Link
              href="/signIn"
              className="text-lg font-psemibold text-secondary"
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
