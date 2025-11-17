import { Feather as Icon, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { COLORS } from "@/constants/colors";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        enableAutomaticScroll
        keyboardShouldPersistTaps="handled"
        extraScrollHeight={Platform.OS === "ios" ? 20 : 0}
      >
        <ThemedView style={styles.container}>
          {/* Back Button */}
          <TouchableOpacity onPress={router.back} style={styles.backButton}>
            <Ionicons name="arrow-back" size={26} color={COLORS.text} />
          </TouchableOpacity>

          {/* Title */}
          <ThemedText style={styles.title}>Forgot Password</ThemedText>

          {/* Form */}
          <View style={styles.form}>
            <ThemedText style={styles.label}>Email</ThemedText>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor="#555"
              keyboardType="email-address"
              style={styles.inputUnderline}
            />

            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ThemedView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 20,
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
    marginTop: 20,
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
  submitButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
  },
  submitButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "600",
  },
});
