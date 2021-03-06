// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data)

// 1: Show me how to calculate the average price of all items.

function question1() {
  // Answer:
  let sum = 0
  for (var i = 0; i < data.length; i++) {
    sum = sum + data[i].price
  }
  let average = sum / data.length
  console.log(average)
}

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  // Answer:

  let itemsWithOverEightMaterials = []
  for (var i = 0; i < data.length; i++) {
    if (data[i]["materials"].length >= 8) {
      itemsWithOverEightMaterials.push(data[i]["title"], data[i]["materials"].length, data[i]["materials"])
      console.log(data[i]["title"] + " has " + data[i]["materials"].length + " materials: ")
      for (var j = 0; j < data[i]["materials"][j].length; j++) {
        console.log("- " + data[i]["materials"][j])
      }

      // 3: Which item has a "GBP" currency code? Display it's name and price.
      function question3() {
        // Answer:
        data.forEach(function(data) {
          if (data["currency_code"] === "GBP") console.log(data.title + " " + data.price + " pounds")
        })
      }
    }

    // 4: Display a list of all items who are made of wood.
    function question4() {
      // Answer:
      data.forEach(function(data) {
        if (data.materials.includes("wood")) {
          console.log(data.title + " is made of wood")
        }
      })
    }
  }

  // 5: Which items are made of eight or more materials?
  //    Display the name, number of items and the items it is made of.
  function question5() {
    // Answer:
    let itemsWithOverEightMaterials = []
    for (var i = 0; i < data.length; i++) {
      if (data[i]["materials"].length >= 8) {
        itemsWithOverEightMaterials.push(data[i]["title"], data[i]["materials"].length, data[i]["materials"])
        console.log(data[i]["title"] + " has " + data[i]["materials"].length + " materials: ")
        for (var j = 0; j < data[i]["materials"][j].length; j++) {
          console.log("- " + data[i]["materials"][j])
        }
      }
    }
  }
}

// 6: How many items were made by their sellers?
// Answer:
function question6() {
  // Answer:
  let numMadeBySellers = 0
  data.forEach(function(items) {
    if (items.who_made === "i_did") {
      numMadeBySellers++
    }
  })
  console.log(numMadeBySellers + " items were made by their sellers.")
}
