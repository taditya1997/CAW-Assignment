import Button from "@/components/button";
import Image from "next/image";
import Header from "./components/header";
import OrderInfo from "./components/orderInfo";
import ProductList from "./components/productList";

export default function Home() {
  return (
    <main className="">
      <Header />
      <OrderInfo />
      <ProductList />
    </main>
  );
}
