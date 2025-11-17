// import { ThemedText } from "@/components/themed-text";
// import { ThemedView } from "@/components/themed-view";
// import { COLORS } from "@/constants/colors";
// import { Feather as Icon, Ionicons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";
// import { useState } from "react";
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function Page() {
//   const router = useRouter();

//   const [emailAddress, setEmailAddress] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   return (
//     <KeyboardAwareScrollView
//       style={{ flex: 1 }}
//       contentContainerStyle={{ flexGrow: 1 }}
//       enableAutomaticScroll={true}
//       // extraScrollHeight={10}
//       keyboardShouldPersistTaps="handled"
//       enableOnAndroid={Platform.OS === "android" || Platform.OS === "ios"}
//     >
//        <SafeAreaView style={{ flex: 1 }}>
//       <ThemedView style={styles.container}>
//         {/* Back Arrow */}
//         <TouchableOpacity
//           onPress={() => router.back()}
//           style={styles.backButton}
//         >
//           <Ionicons name="arrow-back" size={26} color={COLORS.text} />
//         </TouchableOpacity>

//         {/* Title */}
//         <ThemedText style={styles.title}>Login</ThemedText>
//         <View style={styles.fieldContainer}>
//           {/* Name Label */}
//           <ThemedText style={styles.label}>Name</ThemedText>
//           <TextInput
//             value={emailAddress}
//             onChangeText={setEmailAddress}
//             placeholder="Your Name"
//             placeholderTextColor="#555"
//             style={styles.underlineInput}
//           />

//           {/* Password Label */}
//           <Text style={styles.label}>Password</Text>
//           <View style={styles.passwordUnderlineContainer}>
//             <TextInput
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry={!showPassword}
//               placeholder="Password"
//               placeholderTextColor="#555"
//               style={styles.passwordInput}
//             />

//             <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//               <Icon
//                 name={showPassword ? "eye" : "eye-off"}
//                 size={20}
//                 color="#555"
//               />
//             </TouchableOpacity>
//           </View>

//           {/* Login Button */}
//           <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
//             <Text style={styles.loginButtonText}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </ThemedView>
//       </SafeAreaView>
//     </KeyboardAwareScrollView>
//   );
// }

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "pink",
//       // backgroundColor: COLORS.background,
//     paddingHorizontal: 25,
//     paddingTop: 50,
//      paddingBottom: 40,
//   },
//   fieldContainer: {
//     flex: 1,
//     justifyContent: "center",
//     gap: 12,
//   },
//   backButton: {
//     position: "absolute",
//     top: 40,
//     left: 20,
//     zIndex: 10,
//   },

//   title: {
//     fontSize: 32,
//     fontWeight: "bold",
//     color: COLORS.text,
//     marginVertical: 30,
//     marginBottom: 20,
//     textAlign: "center",
//   },

//   label: {
//     fontSize: 15,
//     color: COLORS.text,
//     marginTop: 20,
//     marginBottom: 5,
//   },

//   underlineInput: {
//     borderBottomWidth: 1,
//     borderColor: COLORS.text,
//     fontSize: 16,
//     paddingVertical: 6,
//     color: COLORS.text,
//   },

//   /** 🔹 NEW PASSWORD FIELD STYLES (MATCHES NAME INPUT) */
//   passwordUnderlineContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderBottomWidth: 1,
//     borderColor: COLORS.text,
//   },

//   passwordInput: {
//     flex: 1,
//     fontSize: 16,
//     paddingVertical: 6,
//     color: COLORS.text,
//   },

//   loginButton: {
//     backgroundColor: COLORS.primary,
//     paddingVertical: 14,
//     borderRadius: 30,
//     marginTop: 40,
//     alignItems: "center",
//   },

//   loginButtonText: {
//     color: COLORS.white,
//     fontSize: 18,
//     fontWeight: "600",
//   },
// });

import { Feather as Icon, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { COLORS } from "@/constants/colors";

export default function LoginPage() {
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoider}
      >
        <ThemedView style={styles.container}>
          {/* Back Button */}
          <TouchableOpacity onPress={router.back} style={styles.backButton}>
            <Ionicons name="arrow-back" size={26} color={COLORS.text} />
          </TouchableOpacity>

          {/* Title */}
          <ThemedText style={styles.title}>Login</ThemedText>

          {/* Form */}
          <View style={styles.form}>
            {/* Name Field */}
            <ThemedText style={styles.label}>Name</ThemedText>
            <TextInput
              value={emailAddress}
              onChangeText={setEmailAddress}
              placeholder="Your Name"
              placeholderTextColor="#555"
              style={styles.inputUnderline}
            />

            {/* Password Field */}
            <ThemedText style={styles.label}>Password</ThemedText>

            <View style={styles.passwordContainer}>
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                placeholder="Password"
                placeholderTextColor="#555"
                style={styles.passwordInput}
              />

              <TouchableOpacity
                onPress={() => setShowPassword((prev) => !prev)}
              >
                <Icon
                  name={showPassword ? "eye" : "eye-off"}
                  size={20}
                  color="#2E7D32"
                />
              </TouchableOpacity>
            </View>
            {/* forgot password */}
            <View style={styles.forgotText}>
              <TouchableOpacity onPress={() => router.push("/sign-up")}>
                <Text style={{ color: COLORS.primary, fontWeight: "600" }}>
                  Forgot Password
                </Text>
              </TouchableOpacity>
            </View>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.signUpText}>
              <Text style={{ color: COLORS.text }}>Don't have an account?</Text>

              <TouchableOpacity onPress={() => router.push("/sign-up")}>
                <Text style={{ color: COLORS.primary, fontWeight: "600" }}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ThemedView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  keyboardAvoider: {
    flex: 1,
  },

  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 40,
    backgroundColor: COLORS.background,
  },

  backButton: {
    position: "absolute",
    top: 20,
    left: 10,
    zIndex: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.text,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 25,
  },

  form: {
    flex: 1,
    justifyContent: "center",
    gap: 18,
  },

  label: {
    fontSize: 15,
    color: COLORS.text,
    marginTop: 6,
  },

  inputUnderline: {
    borderBottomWidth: 1,
    borderColor: COLORS.text,
    fontSize: 16,
    paddingVertical: 6,
    color: COLORS.text,
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: COLORS.text,
  },

  passwordInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 6,
    color: COLORS.text,
  },

  loginButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 30,
    marginTop: 10,
    alignItems: "center",
  },

  loginButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "600",
  },
  forgotText: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  signUpText: {
    color: COLORS.text,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
});
