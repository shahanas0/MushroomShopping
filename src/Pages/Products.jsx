import React, { useState } from "react";
import { BiAlignRight } from "react-icons/bi";

const Products = () => {
    const MusroomProducts = [
        {
            id: 1,
            name: "Button Mushroom",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/Agaricus%20bisporus.jpg",
            price: 180,
            category: "Fresh Mushrooms",
            description: "Fresh white button mushrooms with a mild and delicate flavor.",
            weight: "250g",
            stock: 45,
            rating: 4.5
        },
        {
            id: 2,
            name: "Oyster Mushroom",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pleurotus%20ostreatus.jpg",
            price: 220,
            category: "Fresh Mushrooms",
            description: "Fresh oyster mushrooms with a soft texture and savory flavor.",
            weight: "250g",
            stock: 38,
            rating: 4.7
        },
        {
            id: 3,
            name: "Shiitake Mushroom",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lentinula%20edodes.jpg",
            price: 350,
            category: "Fresh Mushrooms",
            description: "Premium shiitake mushrooms with a rich umami flavor.",
            weight: "200g",
            stock: 25,
            rating: 4.8
        },
        {
            id: 4,
            name: "Portobello Mushroom",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fJX2t3Wu1bqN1YEn34BXuyz0p54-tRNiVZAv9VxK0g&s=10",
            price: 320,
            category: "Fresh Mushrooms",
            description: "Large mature mushrooms with a meaty texture and rich flavor.",
            weight: "300g",
            stock: 20,
            rating: 4.6
        },
        {
            id: 5,
            name: "Cremini Mushroom",
            image: "https://www.mushroomcouncil.com/wp-content/uploads/2022/07/03-crimini-2104295336.jpg",
            price: 240,
            category: "Fresh Mushrooms",
            description: "Young brown mushrooms with a deeper flavor than white mushrooms.",
            weight: "250g",
            stock: 42,
            rating: 4.4
        },
        {
            id: 6,
            name: "Enoki Mushroom",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/Enoki%20mushroom.jpg",
            price: 280,
            category: "Fresh Mushrooms",
            description: "Delicate long-stemmed mushrooms commonly used in Asian cuisine.",
            weight: "200g",
            stock: 30,
            rating: 4.6
        },
        {
            id: 7,
            name: "King Oyster Mushroom",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pleurotus%20eryngii.jpg",
            price: 390,
            category: "Premium Mushrooms",
            description: "Large oyster mushrooms with a firm and meaty texture.",
            weight: "250g",
            stock: 18,
            rating: 4.9
        },
        {
            id: 8,
            name: "Lion's Mane Mushroom",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hericium%20erinaceus.jpg",
            price: 550,
            category: "Premium Mushrooms",
            description: "Distinctive white mushroom with a soft and delicate texture.",
            weight: "200g",
            stock: 12,
            rating: 4.9
        },
        {
            id: 9,
            name: "Maitake Mushroom",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/Grifola%20frondosa.jpg",
            price: 480,
            category: "Premium Mushrooms",
            description: "Fragrant cluster mushroom with an earthy flavor.",
            weight: "200g",
            stock: 15,
            rating: 4.7
        },
        {
            id: 10,
            name: "Morel Mushroom",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/Morchella%20esculenta.jpg",
            price: 850,
            category: "Premium Mushrooms",
            description: "Gourmet mushroom with a distinctive honeycomb-like appearance.",
            weight: "100g",
            stock: 8,
            rating: 5.0
        },
        {
            id: 11,
            name: "Chanterelle Mushroom",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cantharellus%20cibarius.jpg",
            price: 720,
            category: "Premium Mushrooms",
            description: "Gourmet mushroom with a fruity aroma and delicate flavor.",
            weight: "150g",
            stock: 10,
            rating: 4.8
        },
        {
            id: 12,
            name: "Porcini Mushroom",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/Boletus%20edulis.jpg",
            price: 680,
            category: "Premium Mushrooms",
            description: "Earthy and aromatic gourmet mushroom.",
            weight: "150g",
            stock: 14,
            rating: 4.9
        },
        {
            id: 13,
            name: "Dried Shiitake",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dried%20shiitake%20mushrooms.jpg",
            price: 420,
            category: "Dried Mushrooms",
            description: "Dried shiitake mushrooms with concentrated umami flavor.",
            weight: "100g",
            stock: 35,
            rating: 4.7
        },
        {
            id: 14,
            name: "Dried Oyster Mushroom",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgiBFUj_1zpHSA64C8iR7CrBwDy6VKSjW-QrD9EhRuKw&s=10",
            price: 360,
            category: "Dried Mushrooms",
            description: "Dehydrated oyster mushrooms suitable for soups and curries.",
            weight: "100g",
            stock: 28,
            rating: 4.5
        },
        {
            id: 15,
            name: "Dried Morel Mushroom",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dried%20morels.jpg",
            price: 1200,
            category: "Dried Mushrooms",
            description: "Premium dried morels with an intense earthy flavor.",
            weight: "50g",
            stock: 7,
            rating: 4.9
        },
        {
            id: 16,
            name: "Mushroom Mix",
            image: "https://zamaorganics.com/cdn/shop/files/surpriseme_1.png?v=1753443738&width=1080",
            price: 450,
            category: "Mushroom Mix",
            description: "A combination of different edible mushrooms.",
            weight: "300g",
            stock: 22,
            rating: 4.8
        },
        {
            id: 17,
            name: "Organic Button Mushroom",
            image: "https://thumbs.dreamstime.com/b/organic-oyster-mushroom-growing-tree-bark-forest-delicious-nutritious-vegetable-selective-focus-411345981.jpg",
            price: 260,
            category: "Organic Mushrooms",
            description: "Fresh organically grown button mushrooms.",
            weight: "250g",
            stock: 32,
            rating: 4.6
        },
        {
            id: 18,
            name: "Organic Oyster Mushroom",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pleurotus%20ostreatus.jpg",
            price: 300,
            category: "Organic Mushrooms",
            description: "Fresh oyster mushrooms grown using natural cultivation methods.",
            weight: "250g",
            stock: 26,
            rating: 4.8
        },
        {
            id: 19,
            name: "Baby Button Mushroom",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLLgMCCuvDOkVoDE-20716JB6rd5kBCmKETQgnNC-N2sgYAWOzlF-K1l9n&s=10",
            price: 200,
            category: "Fresh Mushrooms",
            description: "Small tender button mushrooms perfect for salads and stir-fries.",
            weight: "200g",
            stock: 40,
            rating: 4.4
        },
        {
            id: 20,
            name: "Brown Mushroom",
            image: "https://www.zumos.in/cdn/shop/files/brownshimejimuhsroom.jpg?v=1747912621",
            price: 230,
            category: "Fresh Mushrooms",
            description: "Fresh brown mushrooms with a firm texture and earthy taste.",
            weight: "250g",
            stock: 34,
            rating: 4.5
        },
        {
            id: 21,
            name: "Gourmet Mushroom Box",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJDhkcIDq9Kdl4q6IdKo1tqYNn5aQH8CblZNIp4rJLgK5ogBSE6tibzvn&s=10",
            price: 950,
            category: "Mushroom Boxes",
            description: "A selection of gourmet edible mushrooms.",
            weight: "700g",
            stock: 9,
            rating: 4.9
        },
        {
            id: 22,
            name: "Mushroom Soup Mix",
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mushroom%20soup.jpg",
            price: 280,
            category: "Mushroom Products",
            description: "Ready-to-cook mushroom soup mix.",
            weight: "250g",
            stock: 30,
            rating: 4.3
        },
        {
            id: 23,
            name: "Mushroom Powder",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8TwYZcrXBNpgNKhuL_zyHyG1Qc_c5FYiei4k9P3fEo8AcU26vnVPJ9go&s=10",
            price: 380,
            category: "Mushroom Products",
            description: "Finely ground mushroom powder for seasoning.",
            weight: "100g",
            stock: 24,
            rating: 4.6
        },
        {
            id: 24,
            name: "Shiitake Mushroom Powder",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScgZOqDSTH-Kcf3f8bQA6Y_sbw39_r5DPLBsXNOIlTeWOTBZKKof-JvACE&s=10",
            price: 450,
            category: "Mushroom Products",
            description: "Concentrated shiitake mushroom powder.",
            weight: "100g",
            stock: 20,
            rating: 4.7
        },
        {
            id: 25,
            name: "Mushroom Pickle",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpITI9-f4Kcr3SOm9mN99vRDmXzZxWpeHMEy0YwMjcw_ebF0ne6JegGb7&s=10",
            price: 240,
            category: "Mushroom Products",
            description: "Spicy and tangy mushroom pickle.",
            weight: "300g",
            stock: 18,
            rating: 4.5
        },
        {
            id: 26,
            name: "Mushroom Chutney",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjckjfvqGEuNpbNjJhIzdpw86-Nk9HI9LKjABbSSVISuniiEJ7ZBvF9iQ&s=10",
            price: 190,
            category: "Mushroom Products",
            description: "Savory mushroom chutney for rice, bread and snacks.",
            weight: "200g",
            stock: 16,
            rating: 4.3
        },
        {
            id: 27,
            name: "Mushroom Pasta",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsohT3YQweYXBzRgVolVBdjWcZaDJjZAcBjXisW4hRP0K0SVwvIRv_SUaU&s=10",
            price: 320,
            category: "Mushroom Products",
            description: "Mushroom pasta product for quick and easy meals.",
            weight: "300g",
            stock: 21,
            rating: 4.6
        },
        {
            id: 28,
            name: "Mushroom Curry",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEB3z1EZiJnEfB7dj0MXRnrk9NAAHKjF7gAtAGBTSRRw&s=10",
            price: 290,
            category: "Mushroom Products",
            description: "Spiced mushroom curry product.",
            weight: "250g",
            stock: 27,
            rating: 4.4
        },
        {
            id: 29,
            name: "Truffle Mushroom",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwoTntxUqqBDE0xg1-cfI38e9tHTR-Hre6Q4i8wnQxsrOUZadCvtejEqg&s=10",
            price: 1100,
            category: "Premium Mushrooms",
            description: "Premium gourmet mushroom with an earthy aroma.",
            weight: "100g",
            stock: 6,
            rating: 4.9
        },
        {
            id: 30,
            name: "Chef's Mushroom Selection",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt4gPR1PZQ8h5tgwABXeTh4fuCuT78o_Xpx0Bd83mcan3UCA57jjKyT0Q7&s=10",
            price: 780,
            category: "Mushroom Boxes",
            description: "Curated selection of edible mushrooms for gourmet cooking.",
            weight: "500g",
            stock: 11,
            rating: 4.8
        }
    ];

    const [selectedMusroom, setSelectedMusroom] = useState(null);

    return (
        <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-16 xl:px-25 xl:py-15">

            {selectedMusroom && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-3 sm:p-5">

                    <div className="max-h-[95vh] w-full max-w-5xl overflow-y-auto rounded-xl bg-gray-100 p-3 shadow-2xl shadow-black sm:p-5">

                        <div className="min-h-full rounded-xl border border-orange-700 p-4 sm:p-6 md:p-8 lg:p-10">

                            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">

                                <div className="w-full rounded-lg border-2 border-orange-700 p-3 md:w-1/2">
                                    <img
                                        src={selectedMusroom.image}
                                        alt={selectedMusroom.name}
                                        className="max-h-80 w-full rounded-lg object-contain sm:max-h-96"
                                    />
                                </div>

                                <div className="w-full md:w-1/2">

                                    <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                                        {selectedMusroom.name}
                                    </h1>

                                    <p className="mt-4 text-xl font-bold text-orange-700 sm:text-2xl">
                                        ₹{selectedMusroom.price}
                                    </p>

                                    <p className="mt-4 text-base text-gray-600 sm:text-lg">
                                        {selectedMusroom.description}
                                    </p>

                                    <p className="mt-3 text-sm sm:text-base">
                                        <span className="font-bold">Category:</span>{" "}
                                        {selectedMusroom.category}
                                    </p>

                                    <p className="mt-2 text-sm sm:text-base">
                                        <span className="font-bold">Weight:</span>{" "}
                                        {selectedMusroom.weight}
                                    </p>

                                    <p className="mt-2 text-sm sm:text-base">
                                        <span className="font-bold">Stock:</span>{" "}
                                        {selectedMusroom.stock}
                                    </p>

                                    <p className="mt-2 text-sm sm:text-base">
                                        <span className="font-bold">Rating:</span>{" "}
                                        {selectedMusroom.rating}
                                    </p>

                                    <button
                                        onClick={() => setSelectedMusroom(null)}
                                        className="mt-6 rounded border border-orange-700 bg-orange-700 px-8 py-2 text-lg font-bold text-white transition hover:bg-gray-200 hover:text-orange-700 sm:mt-8 sm:px-10 sm:text-xl"
                                    >
                                        Back
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">

                {MusroomProducts.map((musroom) => (

                    <div
                        key={musroom.id}
                        className="min-w-0 rounded-lg border bg-white p-3 shadow-2xl shadow-gray-500 transition duration-500 hover:scale-[1.02] hover:bg-gray-200 sm:p-4 lg:p-5"
                    >

                        <img
                            src={musroom.image}
                            alt={musroom.name}
                            loading="lazy"
                            className="h-40 w-full rounded-md object-cover sm:h-44 md:h-48 lg:h-50"
                        />

                        <h1 className="mt-4 wrap-break-word text-base font-bold sm:text-lg">
                            {musroom.name}
                        </h1>

                        <div className="mt-3 flex items-center justify-between gap-2">

                            <p className="text-lg font-extrabold text-orange-700 sm:text-xl">
                                ₹{musroom.price}
                            </p>

                            <button
                                type="button"
                                onClick={() => setSelectedMusroom(musroom)}
                                aria-label={`View ${musroom.name} details`}
                                className="shrink-0 cursor-pointer text-2xl font-extrabold text-orange-700 transition hover:text-orange-500 sm:text-3xl"
                            >
                                <BiAlignRight />
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default Products;