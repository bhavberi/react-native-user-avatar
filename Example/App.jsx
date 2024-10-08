import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

import UserAvatar from "@bhavberi/react-native-user-avatar";

export default function App() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
    >
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>User Avatar</Text>
          <Text style={styles.sectionDescription}>
            These are some of the UserAvatar component implementations
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={{ fontSize: 30 }}>Avatar Initials</Text>
          <UserAvatar name="Bhav Beri" size={100} textColor={"yellow"}/>
          <Text style={{ fontSize: 30 }}>Avatar Image</Text>
          <UserAvatar
            name="Bhav Beri"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK6b4w236Ag3g-MpRYGKFM-4RqCGAlOShG5g&s"
            }
            size={100}
          />
          <Text style={{ fontSize: 30 }}>Avatar Custom Component</Text>
          <UserAvatar
            name="Bhav Beri"
            component={
              <Image
                source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                style={{ width: 50, height: 50 }}
              />
            }
            size={100}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  body: {
    backgroundColor: "#ffffff",
    flex: 1,
    padding: 40,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000000",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: "#000000",
    textAlign: "center",
  },
});
