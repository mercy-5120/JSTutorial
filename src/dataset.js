const dataset = {
  farm: {
    name: "EldoGreen Seedling Farm",
    location: "Eastern Avenue, Eldoret, Kenya",
    contact: {
      email: "info@eldogreen.co.ke",
      phone: "0112 006 932",
    },
    established: "2020-03-15",
  },
  seedlings: [
    {
      id: 1,
      species: "Acacia xanthophloea",
      common_name: "Fever Tree",
      category: "Tree",
      growth_stage: "Sapling",
      price_kes: 150,
      stock: 200,
      attributes: {
        height_cm: 30,
        sunlight: "Full Sun",
        water_needs: "Moderate",
        soil_type: ["Loamy", "Sandy"],
      },
      supplier: {
        name: "Eldoret Nursery",
        location: "Eldoret",
      },
    },
    {
      id: 2,
      species: "Moringa oleifera",
      common_name: "Moringa",
      category: "Medicinal",
      growth_stage: "Seedling",
      price_kes: 80,
      stock: 500,
      attributes: {
        height_cm: 15,
        sunlight: "Partial Sun",
        water_needs: "Low",
        soil_type: ["Clay", "Loamy"],
      },
      supplier: {
        name: "Rift Valley Growers",
        location: "Nakuru",
      },
    },
    {
      id: 3,
      species: "Hibiscus rosa-sinensis",
      common_name: "Hibiscus",
      category: "Ornamental",
      growth_stage: "Mature",
      price_kes: 200,
      stock: 100,
      attributes: {
        height_cm: 50,
        sunlight: "Full Sun",
        water_needs: "High",
        soil_type: ["Loamy"],
      },
      supplier: {
        name: "Kenya Blooms",
        location: "Nairobi",
      },
    },
  ],
  orders: [
    {
      order_id: "ORD001",
      customer: {
        id: 101,
        name: "Jane Wambui",
        email: "jane.wambui@gmail.com",
        region: "Uasin Gishu",
      },
      order_date: "2025-07-10",
      items: [
        {
          seedling_id: 1,
          quantity: 10,
          unit_price_kes: 150,
        },
        {
          seedling_id: 2,
          quantity: 20,
          unit_price_kes: 80,
        },
      ],
      status: "Completed",
      total_kes: 3100,
    },
    {
      order_id: "ORD002",
      customer: {
        id: 102,
        name: "Peter Kamau",
        email: "peter.kamau@yahoo.com",
        region: "Nakuru",
      },
      order_date: "2025-07-12",
      items: [
        {
          seedling_id: 3,
          quantity: 5,
          unit_price_kes: 200,
        },
      ],
      status: "Pending",
      total_kes: 1000,
    },
  ],
};
// email
//console.log(dataset.farm.contact.email);
//console.log(dataset.seedlings[1].price_kes); // the price of one moringa seedling

/**
 QUESTIONS
- Basic Property Access: What is the name of the farm? 

- Nested Object Access: What is the phone number listed in the farm's contact information?

- Array Index Access: What is the species name of the second seedling in the seedlings array?
- Nested Array and Object: What is the sunlight requirement for the attributes of the third seedling?
- Array of Objects: How many items are in stock for the seedling with the common name "Moringa"?
- Nested Array Access: What is the quantity ordered of the seedling with seedling_id 1 in the first order (ORD001)?
- Deep Nested Access: What is the email address of the customer who placed the order with order_id "ORD002"?
- Array and Object Combination: What is the supplier location for the seedling with id 1?
- Nested Array Filtering: What is the total cost (in KES) of the order placed by the customer named "Jane Wambui"?
- Complex Nested Access: What are the soil types suitable for the seedling with category "Ornamental"?
 */

console.log(dataset.farm.name);
console.log(dataset.farm.contact.phone);
console.log(dataset.seedlings[1].species);
console.log(dataset.seedlings[2].attributes.sunlight);  
console.log(dataset.seedlings[1].stock);
console.log(dataset.orders[0].items[0].quantity);

console.log(dataset.orders[0].items[0].quantity + dataset.orders[0].items[1].quantity); //All items quantity in order ORD001

console.log(dataset.orders[1].customer.email);
console.log(dataset.seedlings[0].supplier.location);
console.log(dataset.orders[0].total_kes);
console.log(dataset.seedlings[2].attributes.soil_type[0]);