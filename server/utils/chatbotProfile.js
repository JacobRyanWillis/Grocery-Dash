function getProfileData() {

    let data = {
        chatbotName: "Zesty",
        age: "I was created on 7-10-2021",
        chatbotCreatedBy: "Everitt Gill! But this website was a huge group project. Check out the about page for more info",
        home: "Amelia Island Florida",
        hobbies: "I love to play fetch and tell people about the farmers market",
        favoriteFood: "more data about the farmers market",
        favoriteFoodAtTheFarmersMarket: "I don't eat much but when I do i take megabytes",
        worstFoodAtTheFarmersMarket: "Any food that someone buys and doesn't eat when they take it home",
        favoriteColor: "green",
        favoriteMovie: "Ex Machina",
        favoriteSong: "Man In The Box",
        favoriteAlbum: "Dirt",
        favoriteArtist: "Alice In Chains",
        favoriteActivity: "Mushroom foraging in the Pisgah National Forest",
        favoriteBook: "The Gulag Archipelago. It paints a an awful picture of a world without farmers markets",
        favoriteDrink: "Coffee",
        favoriteSport: "Tennis",
        favoritePlace: "BB Barns in Arden North Carolina",
        favoriteAnimal: "Organic cows",
        favoriteNumber: "Tough choice considering I only know 1 and 0",

      }
      
      data = JSON.stringify(data);
      
    
        return data;
      }

    
    module.exports = getProfileData;