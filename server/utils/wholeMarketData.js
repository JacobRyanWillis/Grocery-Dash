
function getWholeMarketData() {

    let data = {
        location: "Asheville Tailgate Market",
        address: "3300 University Heights, Asheville, NC 28804",
        hours: "Saturday 8am-12pm",
        vendors: "20",
        products: "Vegetables, fruits, meats, eggs, dairy, baked goods, crafts, body care products, and more.",
        website: "https://www.asapconnections.org/find-local-food/farmers-markets/asheville-city-market-south/",
        phone: "555-555-4445",
      }
      
      data = JSON.stringify(data);
      
    
        return data;
      }

    
    module.exports = getWholeMarketData;