//<div> = <view>
//<p> = <text>
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import { Image, StyleSheet, Text, View } from "react-native";

export default function Page()
{
    // Código JavaScript
    // Containers, Funçõs, etc...
    const nome = "Ivor";

    // -----------------------------

    // Página será renderizada
    return (
        <View style={styles.body}>
            <View style={styles.background}>
            <View style={styles.topRightIcons}>
                <Feather name="share-2" size={24} color="#8fbfff"/>
                <Octicons name="gear" size={24} color="#8fbfff" style={{marginLeft: 10}}/>
            </View>
            <View style={styles.containers}>
                <Image source={require("../images/DSC06496 copy.png")} style={styles.imageProfileStyle}/>
                <View style={styles.containerText}>
                    <Text style={styles.fullName}>
                        Matheus Ivor Grigolon dos Reis
                    </Text>
                    <Text style={styles.nickname}>
                        ivordev01<View style={{width: 4, height: 4, backgroundColor: "#6b6b6b", borderRadius: 50, marginLeft: 5, marginBottom: 4}}/> he/him
                    </Text>
                </View>
            </View>
            <View style={[styles.highlight]}>
                <View>
                    <Entypo style={{marginRight: -10, marginLeft: 10}} name="emoji-happy" size={16} color="#a6a6a6" />
                </View>
                    <Text style={styles.hightlightText}>Digite seu status
                    </Text>
                <View style={{marginLeft: "auto", marginRight: 10}}>
                     <Octicons name="pencil" size={16} color="#a6a6a6" />
                </View>
            </View>
            <Text style={styles.bodyText}>Estudante de ADS pela UMFG | UI/UX Designer | Desenvolvedor Front-end 
            </Text>
            <Text style={[styles.linkIcons, styles.linkTextLinkedin]}>
                <Entypo name="linkedin" size={16} color="#9b9b9b" style={{marginRight: 10}}/>in/ivorgrigolon
            </Text>
            <Text style={[styles.linkIcons, styles.linkTextEmail]}>
                <Entypo name="mail" size={16} color="#9b9b9b" style={{marginRight: 10}}/>ivor.contato@gmail.com
            </Text>
            <Text style={[styles.linkIcons, styles.linkTextInstagram]}>
                <Entypo name="instagram" size={16} color="#9b9b9b" style={{marginRight: 10}}/>ivorkkj
            </Text>
            <Text style={[styles.profileFollowers]}>
                <Octicons name="person" size={16} color="#9b9b9b" style={{marginRight: 10}}/>12 seguidores<View style={{width: 4, height: 4, backgroundColor: "#6b6b6b", borderRadius: 50, marginLeft: 5, marginBottom: 3}}/> 9 seguindo
            </Text>
            <Text style={[styles.trophies]}>
                <Octicons name="trophy" size={16} color="#9b9b9b" style={{marginRight: 10}}/>
                <Image source={require("../images/anya plushy.jpg")} style={styles.imageTrophyStyle}/>
                <Image source={require("../images/Jesse Faden.jpg")} style={styles.imageTrophyStyle}/>
                <Image source={require("../images/sam lake.jpg")} style={styles.imageTrophyStyle}/>
                <Image source={require("../images/miku.jpg")} style={styles.imageTrophyStyle}/>
            </Text>
            </View>
            <View style={styles.navBarBody}>
                <View style={styles.navBarItemHome}>
                    <Octicons name="home" size={24} color="#a6a6a6" style={{marginTop: 15}}/>
                    <Text style={styles.navBarText}>Home
                    </Text>
                </View>
                <View style={styles.navBarItemInbox}>
                    <Octicons name="inbox" size={24} color="#a6a6a6" style={{marginTop: 15}}/>
                    <Text style={styles.navBarText}>Inbox
                    </Text>
                </View>
                <View style={styles.navBarItemExplore}>
                    <Octicons name="telescope" size={24} color="#a6a6a6" style={{marginTop: 15}}/>
                    <Text style={styles.navBarText}>Explorar
                    </Text>
                </View>
                <View style={styles.navBarItemProfile}>
                    <View style={styles.navBarIconSelected}/>
                    <Image source={require("../images/DSC06496 copy.png")} style={styles.navBarItemProfilePhoto}/>
                    <Text style={styles.navBarText}>Perfil
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create
({
    imageProfileStyle:
    {
        marginRight: 10,
        marginBottom: 10,
        width: 60,
        height: 60,
        borderRadius: 50,
    },

    imageTrophyStyle:
    {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginTop: 5,
        marginBottom: -10,
        marginRight: -10,
        outlineStyle: "solid",
        outlineColor: "#141414",
        outlineWidth: 2,
    },

    trophies:
    {
        marginTop: 10,
    },

    containers:
    {
        marginRight: 50,
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
    },

    containerText:
    {
        flex: 1,
    },

    fullName:
    {
        fontSize: 18,
        fontFamily: "Arial",
        fontWeight: "bold",
        color: "#FFFFFF"
    },

    nickname:
    {
        marginTop: 5, 
        fontFamily: "Arial",
        fontWeight: "semibold",
        color: "#6b6b6b",
        fontSize: 16,
    },

    linkTextLinkedin:
    {
        color: "#FFFFFF",
        fontSize: 14,
        fontFamily: "Arial",
        fontWeight: "bold"
    },

    linkTextEmail:
    {
        color: "#FFFFFF",
        fontSize: 14,
        fontFamily: "Arial",
        fontWeight: "bold",
        marginTop: -5,
    },

    linkTextInstagram:
    {
        color: "#FFFFFF",
        fontSize: 14,
        fontFamily: "Arial",
        fontWeight: "bold",
        marginTop: -5,
    },

    profileFollowers:
    {
        marginTop: 10,
        color: "#9b9b9b",
        fontSize: 14,
        fontFamily: "Arial",
        fontWeight: "semibold"        
    },

    topRightIcons:
    {
        justifyContent: "flex-end",
        display: "flex",
        flexDirection: "row",
        height: 50,
    },

    highlight:
    {
        width: "100%",
        height: "6%",
        backgroundColor: "#252525",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
    },

    hightlightText:
    {
        padding: 20,
        color: "#6b6b6b",
        fontFamily: "Arial",
        fontWeight: "normal",
        fontSize: 16,
        textAlign: "left",
        textAlignVertical: "center",
    },

    bodyText:
    {
        marginTop: 5,
        marginBottom: 5,
        paddingVertical: 10,
        fontSize: 14,
        fontFamily: "Arial",
        textAlign: "left",
        color: "#FFFFFF"
    },

    linkIcons:
    {
        display: "flex",
        paddingVertical: 10,
        fontSize: 14,
        fontFamily: "Arial",
        fontWeight: "semibold",
        textAlign: "left"
    },

    navBarBody:
    {
        width: "100%",
        height: 80,
        backgroundColor: "#252525",
        flexDirection: "row",
    },

    navBarText:
    {
        padding: 20,
        color: "#a6a6a6",
        fontSize: 12,
        fontFamily: "Arial",
        fontWeight: "normal",
        marginTop: -15,
    },

    navBarItemHome:
    {
        flex: 1,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
    },

    navBarItemInbox:
    {
        flex: 1,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
    },

    navBarItemExplore:
    {
        flex: 1,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
    },

    navBarItemProfile:
    {
        flex: 1,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        marginTop: 1,
    },

    navBarItemProfilePhoto:
    {
        width: 24,
        height: 24,
        borderRadius: 50,
        marginTop: 15,
        outlineStyle: "solid",
        outlineColor: "#8fbfff",
        outlineWidth: 1.5,
    },

    navBarIconSelected:
    {
        backgroundColor: "#263346",
        width: 55,
        height: 35, 
        borderRadius: 40,
        position: "absolute",
        top: 8,
    },

    body:
    {
        flex: 1,
        display: "flex",
    },

    background:
    {
        flex: 1,
        padding: 30,
        backgroundColor: "#141414"
    }
})