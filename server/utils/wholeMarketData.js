
function getWholeMarketData() {


    let data = {
        location: "Austell International Farmers Market",
        address: "3565 Austell Rd SW, Marietta, GA 30008",
        hours: "7 days a week from 8:30am - 9:00pm",
        website: "https://www.facebook.com/austellfarmersmarket/",
        phone: "(770) 726-7672",
        parking: "Free parking is available in the parking lot adjacent to the market.",
      }
      
      data = JSON.stringify(data);
      
    
        return data;
      }

    
module.exports = getWholeMarketData;