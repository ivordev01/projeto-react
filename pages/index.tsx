//<div> = <view>
//<p> = <text>
import { StyleSheet, View } from "react-native";
export default function Page()
{
    //Código JavaScript
    //Containers, Funçõs, etc...
    const nome = "Ivor";

    // -----------------------------

    // Página será renderizada
    return (
        <View style={[styles.background, styles.text, styles.body]}>
            <View style={styles.text}>Matheus Ivor Grigolon dos Reis                
            </View>
        </View>
    )
}

const styles = StyleSheet.create
({
    background:
    {
        width: "100%",
        height: "100%",
        backgroundColor: "black"
    },

    text:
    {
        color: "#FFFFFF",
        width: "100%",
        fontSize: 20,
        fontFamily: "Arial",
        fontWeight: "medium",
        textAlign: "center",
    },

    body:
    {
        padding: 20
    }
})