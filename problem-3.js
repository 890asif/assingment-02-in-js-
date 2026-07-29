function calculateAiCost(tokensUsed) {
    if(typeof tokensUsed !== "number" || tokensUsed < 0){
        return  "Invalid";l
    }
    if(tokensUsed <= 500){
        return 0;
    }
    let totalTokenUsed = tokensUsed - 500;
    let total = Math.floor(totalTokenUsed / 100);
    let rate = total * 5;
    return rate;
}
console.log(calculateAiCost(300))
console.log(calculateAiCost(500))
console.log(calculateAiCost(650))
console.log(calculateAiCost(1000))
console.log(calculateAiCost(-10))
console.log(calculateAiCost("500"))

