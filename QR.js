import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';




const QR = (navigation) => {

  const handleBarCodeScanned = ({ data }) => {
    alert(`Code QR scanné ! ${data}`);
  }
  
    return (
        
        <>
            <View style={{  backgroundColor: 'transparent', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: '#000', fontSize:20, marginTop:10 }}>Scannez un code QR</Text>
            </View>
        
                <BarCodeScanner
                onBarCodeScanned={handleBarCodeScanned}
                style={{ flex: 1,justifyContent: 'center'  }}
                >

                </BarCodeScanner>
        </>
      
    );
}


const styles = StyleSheet.create({

});
export default QR
