import { COLORS } from "@/constants/colors";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Image */}
        <Image
          source={require("../assets/images/gyalsung1.jpg")} // Replace with your image
          style={styles.image}
          resizeMode="contain"
        />

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.signUpButton]}
            onPress={() => router.push("/sign-up")}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.signUpText}>
            <Text style={{ color: COLORS.text }}>Don't have an account?</Text>

            <TouchableOpacity onPress={() => router.push("/sign-in")}>
              <Text style={{ color: COLORS.primary, fontWeight: "600", textDecorationLine: "underline" }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 40,
  },
  buttonsContainer: {
    width: "100%",
  },
  button: {
    paddingVertical: 15,
    borderRadius: 30,
    marginBottom: 15,
    alignItems: "center",
  },
  signInButton: {
    backgroundColor: COLORS.primary,
  },
  signUpButton: {
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "600",
  },
  signUpText: {
    color: COLORS.text,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    gap: 3,
  },
});
