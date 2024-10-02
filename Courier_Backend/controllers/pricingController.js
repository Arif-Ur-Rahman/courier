exports.addPrice = async (req, res) => {
    try {
        const { weight, from, destination, category, serviceType } = req.body;

        let price = 50; // Default base price

        // Logic for Dhaka to Dhaka (Regular)
        if (category !== "Book" && from === "Dhaka City" && destination === "Dhaka City" && serviceType !== "SameDay") {
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
        // Logic for Dhaka to Dhaka (Same Day)
        else if (category !== "Book" && from === "Dhaka City" && destination === "Dhaka City" && serviceType === "SameDay") {
            price = 100;
            if (weight > 1.0) {
                let extraWeight = weight - 1.0;
                let extraCost = Math.ceil(extraWeight) * 20;
                price = 100 + extraCost;
            }
        }
        // Same day service not available outside of Dhaka City
        else if ((from !== "Dhaka City" || destination !== "Dhaka City") && serviceType === "SameDay") {
            return res.json({ error: "Same Day service not available outside of Dhaka City" });
        }
        // Logic for Dhaka to other cities (Regular or Book)
        else if (from === "Dhaka City" && destination !== "Dhaka City") {
            if (category === "Book") {
                price = 90;
            } else {
                price = 60; // Base price for Dhaka to other cities
            }

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
        // Logic for other cities to Dhaka (Regular or Book)
        else if (from !== "Dhaka City" && destination === "Dhaka City") {
            if (category === "Book") {
                price = 90;
            } else {
                price = 100; // Base price for other cities to Dhaka
            }

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
        // Logic for other city to other city (Regular or Book)
        else {
            if (category === "Book") {
                price = 50; // Base price for book delivery between other cities
            } else {
                price = 40; // Base price for other city to other city
            }

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
