import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();
  const [finalPrice, setFinalPrice] = useState();
  const [savePrice, setPriceSave] = useState();
  var totalAmount = price - (price * discount) / 100;
  var totalSave = price - totalAmount;

  useEffect(() => {
    setFinalPrice(totalAmount.toFixed(2));
    setPriceSave(totalSave.toFixed(2));
  });

  function handlechangeDiscount(evt) {
    if (evt.target.value < 0) {
      alert("Value Must be Greater Than 0!");
    } else if (evt.target.value > 100) {
      alert("Value Must be Less Than 100!");
    } else {
      setDiscount(evt.target.value);
    }
  }

  function handlechangePrice(evt) {
    if (evt.target.value < 0) {
      alert("Value Must be Greater Than Zero!");
    } else {
      setPrice(evt.target.value);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.pageWrapper}>
        <Text style={styles.titleText}>Discount Calculator</Text>
        <Text style={styles.text}>Price:</Text>
        <TextInput
          style={styles.textfield}
          onChange={(newPrice) => handlechangePrice(newPrice)}
          value={price}
        />
        <Text style={styles.text}>Discount:</Text>
        <TextInput
          style={styles.textfield}
          onChange={(newDiscount) => handlechangeDiscount(newDiscount)}
          value={discount}
        />
        <Text style={styles.text}>Final Price:</Text>
        <TextInput style={styles.textfield} value={finalPrice} />
        <Text style={styles.text}>Saved Amount:</Text>
        <TextInput style={styles.textfield} value={savePrice} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleText: {
    textAlign: "center",
    fontSize: 24,
  },

  pageWrapper: {
    paddingTop: 80,
  },
  textfield: {
    marginTop: 20,
    margin: 20,
    borderBottomWidth: 1,
    fontSize: 20,
  },

  text: {
    marginTop: 50,
    marginLeft: 20,
    fontSize: 20,
  },
});
