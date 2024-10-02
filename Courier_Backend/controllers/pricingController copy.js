// Define the function to calculate the price based on weight
exports.addPrice = async (req, res) => {
    try {
        const { weight } = req.body;

        // Initialize price to the default value
        let price = 50;

        // Apply pricing logic based on weight
        if (weight >= .2 && weight <= .5){
            price = 60;
        }
        else if (weight >= 0.6 && weight <= 1.0) {
            price = 70;
        } else if (weight >= 1.1) {
            let extraWeight = weight - 1.0;
            let extraCost = Math.ceil(extraWeight) * 20;
            price = 70 + extraCost;
        }

        // Respond with the calculated price
        res.json({ price });
    } catch (error) {
        // Handle potential errors
        console.error("Error calculating price:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
