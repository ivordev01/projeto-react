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
        <View style={[styles.text, styles.body, styles.background]}>
            <View style={styles.text}>Matheus Ivor Grigolon dos Reis                
            </View>

            <View style={[styles.highlight]}>
                    <View style={styles.hightlightText}>Digite seu status
                    </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create
({
    text:
    {
        padding: 20,
        color: "#FFFFFF",
        width: "100%",
        fontSize: 20,
        fontFamily: "Arial",
        fontWeight: "bold",
        textAlign: "left"
    },

    highlight:
    {
        width: "100%",
        height: "8%",
        backgroundColor: "#252525",
        marginTop: 0,
        marginRight: 10,
        borderRadius: 15
    },

    hightlightText:
    {
        padding: 30,
        color: "#6b6b6b",
        fontFamily: "Arial",
        fontWeight: "normal",
        fontSize: 16,
        textAlign: "left",
        textAlignVertical: "center",
        marginTop: -20
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