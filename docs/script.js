/*function amplifyBs(sentence) {

    let sen1 = sentence+"!";
    let sen2 = sentence+"!!";
    let sen3 = sentence+"!!!";
    let sen4 = sentence+"!!!!";
    let sen5 = sentence+"!!!!!";

    let result = sen1.concat(sen2, sen3, sen4, sen5)
    
    console.log(result)
    return result
  }
  amplifyBs('Élvezd az életet')*/

function amplifyBs(sentence) {

    let result = "";

    for (let i = 1; i <= 5; i++) {

        result += sentence + "!".repeat(i)
        
        
    }
    console.log(result)
    return result

  }
  amplifyBs('Mókuska')

  function isGoodRecommendation(user, product) {

    const purchased = user.mostRecentPurchase

    const isRecommended = (purchased.category !== product.category) && (purchased.color == product.color) && (product.price < purchased.price)
    
    return {

      customerName: user.username,
      productColor: product.color,
      isProductRecommended: isRecommended

    }
  }
  
