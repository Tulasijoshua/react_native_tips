import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Platform, SafeAreaView, StyleSheet, Text } from "react-native";
import TweetContent from "../../components/TweetContent";
import { useLayoutEffect } from "react";

export default function TweetDetailScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const {params} = route;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: params.tweet.author.name,
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
            <TweetContent tweet={params.tweet} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})