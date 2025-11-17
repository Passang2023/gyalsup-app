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
import { Feather as Icon, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { COLORS } from "@/constants/colors";

export default function SignUpPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [cadetNumber, setCadetNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "height" : "padding"}
        style={styles.keyboardAvoider}
      >
        <ThemedView style={styles.container}>
          {/* Back Button */}
          <TouchableOpacity onPress={router.back} style={styles.backButton}>
            <Ionicons name="arrow-back" size={26} color={COLORS.text} />
          </TouchableOpacity>

          {/* Title */}
          <ThemedText style={styles.title}>Sign Up</ThemedText>

          {/* Form */}
          <View style={styles.form}>
            {/* Name */}
            <ThemedText style={styles.label}>Name</ThemedText>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Your Name"
              placeholderTextColor="#555"
              style={styles.inputUnderline}
            />

            {/* Cadet Number */}
            <ThemedText style={styles.label}>Cadet Number</ThemedText>
            <TextInput
              value={cadetNumber}
              onChangeText={setCadetNumber}
              placeholder="Cadet Number"
              placeholderTextColor="#555"
              style={styles.inputUnderline}
            />

            {/* Email */}
            <ThemedText style={styles.label}>Email</ThemedText>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="#555"
              keyboardType="email-address"
              style={styles.inputUnderline}
            />

            {/* Password */}
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

            {/* Sign Up Button */}
            <TouchableOpacity style={styles.signUpButton}>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>

            {/* Already have account */}
            <View style={styles.loginLink}>
              <Text style={{ color: COLORS.text }}>
                Already have an account?{" "}
              </Text>
              <TouchableOpacity onPress={() => router.push("/sign-in")}>
                <Text style={{ color: COLORS.primary, fontWeight: "600" }}>
                  Login
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
    marginVertical: 30,
  },

  form: {
    flex: 1,
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

  signUpButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
  },

  signUpButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "600",
  },

  loginLink: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
});
