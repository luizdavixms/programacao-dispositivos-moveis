import { View, Text } from "react-native"

function PadraoAndroid(){
    return(
        <View style={{
            flex: 1}}>

            <View style={{
                height: 64, 
                justifyContent: "center",
                paddingLeft: 16,
                backgroundColor: "gray"
                }}>

                <Text style={{
                    fontSize: 24,
                    color: "white" }}> Meu App </Text>
            </View>

            <View style={{
                height: 64, 
                justifyContent: "center",
                borderColor: "#333",
                borderBottomWidth: 1,
                paddingHorizontal: 16}}>
                <Text>Item 1</Text>
                <Text>Descrição 1</Text>
            </View>

            <View style={{
                height: 64, 
                justifyContent: "center",
                borderColor: "#333",
                borderBottomWidth: 1,
                paddingHorizontal: 16}}>
                <Text>Item 2</Text>
                <Text>Descrição 2</Text>
            </View>

            <View style={{
                height: 64, 
                justifyContent: "center",
                borderColor: "#333",
                borderBottomWidth: 1,
                paddingHorizontal: 16}}>
                <Text>Item 3</Text>
                <Text>Descrição 3</Text>
            </View>

            <View style={{
                height: 48, 
                width: 48, 
                justifyContent: "center",
                alignItems: 'center',
                borderRadius: "16",
                position: "absolute",
                bottom: 16,
                right: 16,
                backgroundColor: "lightgray"}}>
                <Text>+</Text>
            </View>

        </View>
    )
}

export default PadraoAndroid 