exports = async function (changeEvent) {
    const doc1 = {
        name: "basketball",
        category: "sports",
        quantity: 20,
        reviews: [],
    };
    const doc2 = {
        name: "football",
        category: "sports",
        quantity: 30,
        reviews: [],
    };
    const { fullDocument } = changeEvent;
    console.log("fullDocument", JSON.stringify(fullDocument));
    const mongodb = context.services.get("Cluster0");
    const hourly_worker_count = mongodb
        .db("alterSense")
        .collection("hourly_worker_count");
    try {
        const result = await hourly_worker_count.insertMany([doc1, doc2]);
        console.log(result.json());
    } catch (error) {
        console.log(error);
    }
};
