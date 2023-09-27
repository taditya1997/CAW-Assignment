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

export default function ProductTable() {
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
         dataConfig.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{item.ProductName}</TableCell>
            <TableCell>{item.Brand}</TableCell>
            <TableCell>{item.Price}</TableCell>
            <TableCell>{item.Quantity}</TableCell>
            <TableCell className="font-medium">{item.Total}</TableCell>
            <TableCell>{<EditComponent key={index} item={item}/>}</TableCell>
          </TableRow>))
        }
      </TableBody>
    </Table>
  );
}
