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
        <View style={[styles.background, styles.text, styles.body, styles.container1]}>
            <View style={styles.text}>Matheus Ivor Grigolon dos Reis                
            </View>
        </View>
    )
}

const styles = StyleSheet.create
({
    text:
    {
        padding: 40,
        color: "#FFFFFF",
        width: "100%",
        fontSize: 20,
        fontFamily: "Arial",
        fontWeight: "bold",
        textAlign: "left"
    },
    container1:
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFFFFF",
    },

    body:
    {
        padding: 20,
        display: "flex",
        color: "#FFFFFF",
        width: "100%",
        height: "100%",
    },

        background:
    {
        width: "100%",
        height: "100%",
        backgroundColor: "#141414"
    }
})