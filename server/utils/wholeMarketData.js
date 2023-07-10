
function getWholeMarketData() {

    let data = {
        location: "Asheville Tailgate Market",
        address: "3300 University Heights, Asheville, NC 28804",
        hours: "Saturday 8am-12pm",
        website: "https://www.asapconnections.org/find-local-food/farmers-markets/asheville-city-market-south/",
        phone: "555-555-5555",
        parking: "Free parking is available in the parking lot adjacent to the market.",
      }
      
      data = JSON.stringify(data);
      
    
        return data;
      }

    
    module.exports = getWholeMarketData;