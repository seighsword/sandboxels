// Indian Foods Mod for Sandboxels
// Adds Roti, Curry, Rice, and Samosa with cooking mechanics

// Roti (Flatbread)
elements.roti = {
    color: "#e0c07a",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    tempHigh: 200,
    stateHigh: "ash",
    burn: 20,
    burnTime: 100,
};

// Raw Dough (Turns into Roti when heated)
elements.raw_dough = {
    color: "#d4b28c",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    tempHigh: 180,
    stateHigh: "roti",
};

// Curry (Changes color when mixed with spices)
elements.curry = {
    color: "#ff9900",
    behavior: behaviors.LIQUID,
    category: "food",
    state: "liquid",
    viscosity: 10,
    reactions: {
        "chili": { color: "#d44a00" },
        "milk": { color: "#f4e1c6" },
    },
};

// Rice (Can be cooked into Biryani)
elements.rice = {
    color: "#f5f5dc",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    tempHigh: 100,
    stateHigh: "cooked_rice",
};

elements.cooked_rice = {
    color: "#fff8dc",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
};

// Samosa (Fried when exposed to oil and heat)
elements.samosa = {
    color: "#c9975b",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    tempHigh: 180,
    stateHigh: "fried_samosa",
};

elements.fried_samosa = {
    color: "#b37440",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
};

// Cooking Oil for frying
elements.cooking_oil = {
    color: "#ffcc33",
    behavior: behaviors.LIQUID,
    category: "food",
    state: "liquid",
    tempHigh: 750,
    stateHigh: "fire",
};
