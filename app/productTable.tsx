'use client'
import { useState } from "react"
import SearchBar from "./searchBar"
import ProductRow from "./ProductRow"
import ProductCategoryRow from "./ProductCategoryRow";
import { useContext } from "react";
import { ClientContext } from "./ClientProvider";
export default function ProductTable({products}) {
  let { tryState } = useContext(ClientContext);

    const rows = [];
  let lastCategory :string ='';

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });
   
        return (
            <table className="border-4 border-indigo-500/100">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          );
        }

    
