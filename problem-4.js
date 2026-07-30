function topRatedRestaurant(restaurants) {
    let rating = 0;
    for(let i = 0; i < restaurants.length; i++){
        rating += restaurants[i];
    }
    return rating;
}

console.log(topRatedRestaurant([{ name: "Chillox", rating: 4.5 }, { name: "Sultan's Dine", rating: 4.8 }]))
