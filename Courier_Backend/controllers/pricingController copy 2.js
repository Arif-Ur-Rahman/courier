 
// Define the function to calculate the price based on weight, from, and destination
exports.addPrice = async (req, res) => {
    try {
        const { weight, from, destination, serviceType } = req.body;

        let price = 50; // Default base price

        // Logic for Dhaka to Dhaka
        if (from === "Dhaka City" && destination === "Dhaka City" && serviceType !== "SameDay") {
            if (weight >= 0.2 && weight <= 0.5) {
                price = 60;
            } else if (weight >= 0.6 && weight <= 1.0) {
                price = 70;
            } else if (weight >= 1.1) {
                let extraWeight = weight - 1.0;
                let extraCost = Math.ceil(extraWeight) * 20;
                price = 70 + extraCost;
            }
        }
        else if (from === "Dhaka City" && destination === "Dhaka City" && serviceType === "SameDay"){
            price = 100;
            if (weight >= 1.1){
                let extraWeight = weight - 1.0;
                let extraCost = Math.ceil(extraWeight) * 20
                price = 100 + extraCost
                      }
            
        }
        else if (from !== "Dhaka city" && destination === "Dhaka City" && serviceType === "SameDay"){
            price = "Same Day service not available outside of Dhaka"

             
            
        }
        else if (from === "Dhaka city" && destination !== "Dhaka City" && serviceType === "SameDay"){
            price = "Same Day service not available outside of Dhaka"

             
            
        }
        // Logic for Dhaka to other cities
        else if (from === "Dhaka City" && destination !== "Dhaka City") {
            price = 60; // Base price for Dhaka to other cities
            if (weight >= 0.2 && weight <= 0.5) {
                price += 10;  // Additional for weight under 0.5kg
            } else if (weight >= 0.6 && weight <= 1.0) {
                price += 20;  // Additional for 0.6-1.0kg
            } else if (weight >= 1.1) {
                let extraWeight = weight - 1.0;
                let extraCost = Math.ceil(extraWeight) * 20;
                price += 20 + extraCost;
            }
        }
        // Logic for other cities to Dhaka
        else if (from !== "Dhaka City" && destination === "Dhaka City") {
            price = 100;  // Base price for other cities to Dhaka
            if (weight >= 0.2 && weight <= 0.5) {
                price += 10;
            } else if (weight >= 0.6 && weight <= 1.0) {
                price += 20;
            } else if (weight >= 1.1) {
                let extraWeight = weight - 1.0;
                let extraCost = Math.ceil(extraWeight) * 20;
                price += 20 + extraCost;
            }
        }
        // Logic for other city to other city
        else {
            price = 40; // Base price for other city to other city
            if (weight >= 0.2 && weight <= 0.5) {
                price += 10;
            } else if (weight >= 0.6 && weight <= 1.0) {
                price += 20;
            } else if (weight >= 1.1) {
                let extraWeight = weight - 1.0;
                let extraCost = Math.ceil(extraWeight) * 20;
                price += 20 + extraCost;
            }
        }

        // Respond with the calculated price
        res.json({ price });
    } catch (error) {
        console.error("Error calculating price:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

 