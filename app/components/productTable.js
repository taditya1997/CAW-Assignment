"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { MagnetIcon } from "lucide-react";
import { tabeleConfig } from "../../config/tableconfig";
import { dataConfig } from "../../config/dataConfig";
import {EditComponent} from "./editcomponent";
import { useSelector } from "react-redux";
import StatusCapsule from "./statusCapsule";

export default function ProductTable() {
  const products = useSelector((state) => state.products);
  console.log(products);
  return (
    <Table className="mt-10">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          {tabeleConfig.map((item, index) => (
            <TableHead key={index}>{item.header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {
         products.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{item.productName}</TableCell>
            <TableCell>{item.brand}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell className="font-medium">{item.total}</TableCell>
            <TableCell className={`font-medium`}>{item.status ? <StatusCapsule variant={item.status} /> : null }</TableCell>
            <TableCell>{<EditComponent key={index} item={item}/>}</TableCell>
          </TableRow>))
        }
      </TableBody>
    </Table>
  );
}

