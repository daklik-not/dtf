
import Link from "next/link"
import { useState } from "react";
import ClientTry from "./productTable";
import ProductTable from "./productTable";
import SearchBar from "./searchBar";

const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];
export default async function Secondpage() {

    return (
        <>
            <div className=" ps-80 pt-40">
                <SearchBar />
                <ProductTable products={PRODUCTS} />
            </div>
        </>
    )
}