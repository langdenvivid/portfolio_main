"use client";
import { ArrowLeft, Eye, Github, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/header";
import Body from "../components/body";

export interface Project {
    title: string,
    description: string,
    gitLink: string,
    websiteLink?: string,
}

export default function Page() {
    const project: Project = {
        title: "EazyBuy",
        description: "Full-stack ecommerce application that features a user registration system, order tracking, product reviews, and payment processing.",
        gitLink: "https://github.com/Graham2000/EazyBuy",
    }

	return (
        <div className="bg-zinc-50 min-h-screen">
            <Header project={project} />

            <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteles">
                <h3>Best Sellers</h3>
                <p>The top 10 most frequently sold products are selected from each category and displayed to the user.</p>
                <img src="../image/index.png" className="rounded-md border border-zinc-200" />

                <h3>Product Categories</h3>
                <p>Customized filters are available for each product category which allows the user to narrow their query for products stored in the database.</p>
                <img src="../image/category.png" className="rounded-md border border-zinc-200" />

                <h3>User Cart</h3>
                <p>The user’s cart view shows products that have been added to the cart. The total item count and total price are each dynamically updated using AJAX. When checkout is initiated the PHP PayPal SDK is used the facilitate the transaction.</p>
                <img src="../image/cart.png" className="rounded-md border border-zinc-200" />

                <h3>Orders</h3>
                <p>A transaction history is stored in the database to track which products a user has purchased. The unique order id, item name, product quantity, and order total are displayed for each order and sorted by the last order date.</p>
                <img src="../image/orders.png" className="rounded-md border border-zinc-200" />

                <h3>Product Reviews</h3>
                <p>For any given product in an order, the user may leave a review. This review is dynamically rendered for others to view under the summary view of the product.</p>
                <img src="../image/review.png" className="rounded-md border border-zinc-200" />

                <h3>Product Summary</h3>
                <p>When a product is selected by the user, the corresponding details are dynamically retrieved from the database. Reviews that were made by customers who have already purchased the item are also displayed below the product.</p>
                <img src="../image/product.png" className="rounded-md border border-zinc-200" />

                <h3>PayPal SDK</h3>
                <p>The PHP PayPal SDK is used to process and execute a transaction on checkout. A summary is also provided of each item that the user had in their cart upon initiating checkout. In order to securely complete each transaction, the processing and execution are each handled on the server.</p>
                <img src="../image/checkout.png" className="rounded-md border border-zinc-200" />

                <h3>User Registration System</h3>
                <p>The user registration system requires a user to login before completing a transaction. When a new account is created, the details are inserted into appropriate database table. Otherwise, if the user signs in, credentials are validated against data already stored in the database. Passwords that are stored in the database are encrypted using the bcrypt algorithm.</p>
                <div style={{display:"flex", flexDirection:"row", maxWidth:"50%"}}>
                    <img src="../image/register.png" className="rounded-md border border-zinc-200" style={{marginRight:"10px"}} />
                    <img src="../image/sign-in.png" className="rounded-md border border-zinc-200" />
                </div>
            </article>
        </div>
	);
};
