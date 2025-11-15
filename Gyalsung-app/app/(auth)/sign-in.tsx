
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { COLORS } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View,Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Platform } from 'react-native';


export default function Page() {
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      enableAutomaticScroll={true}
      extraScrollHeight={10}
      keyboardShouldPersistTaps="handled"
      enableOnAndroid={Platform.OS === 'android' || Platform.OS === 'ios'}
      // keyboardOpeningTime={1}
      >
      <ThemedView style={styles.container}>
        {/* <Image
          source={require("../../assets/images/splash-icon.png")}
          style={styles.illustration}
          /> */}
         
          <ThemedText style={styles.title}>Log in</ThemedText>
          

        {error ? (
          <ThemedView style={styles.errorBox}>
            <Ionicons name="alert-circle" size={20} />

            <ThemedText style={styles.errorText}> {error} </ThemedText>
            <TouchableOpacity onPress={() => setError("")}>
              <Ionicons name="close-circle" size={20} />
            </TouchableOpacity>
          </ThemedView>
        ) : null}

        <TextInput
          style={[styles.input, error && styles.errorInput]}
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Enter email"
          placeholderTextColor="#9a8478"
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
        <TextInput
          style={[styles.input, error && styles.errorInput]}
          value={password}
          placeholder="Enter password"
          secureTextEntry={true}
          placeholderTextColor="#9a8478"
          onChangeText={(password) => setPassword(password)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            ("");
          }}
        >
          <ThemedText style={styles.buttonText}>Continue</ThemedText>
        </TouchableOpacity>
      <View style={styles.footerContainer}>
        <ThemedText style={styles.footerText}>
          Don't have an account?
        </ThemedText>
        <Link href="/sign-up" asChild>
          <TouchableOpacity>
            <ThemedText style={styles.linkText}>sign up</ThemedText>
          </TouchableOpacity>
        </Link>
      </View>
      </ThemedView>
    </KeyboardAwareScrollView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    // paddingTop: 150,
    padding: 20,
    justifyContent: "center",
  },
  illustration: {
    width: 310,
    height: 310,
    resizeMode: "contain",

    alignSelf: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.text,
    marginVertical: 30,
    textAlign: "center",
    // textDecorationLine: "underline",
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    fontSize: 16,
    color: COLORS.text,
  },
  errorInput: {
    borderColor: COLORS.expense,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "600",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
  },
  footerText: {
    color: COLORS.text,
    fontSize: 16,
  },
  linkText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "600",
  },
  verificationContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  verificationTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 20,
    textAlign: "center",
  },
  verificationInput: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    fontSize: 16,
    color: COLORS.text,
    width: "100%",
    textAlign: "center",
    letterSpacing: 2,
  },

  // 🔴 Error styles
  errorBox: {
    backgroundColor: "#FFE5E5",
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.expense,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  errorText: {
    color: COLORS.text,
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
  },
});
