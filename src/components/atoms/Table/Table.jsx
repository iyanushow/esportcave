import { useReducer, useState } from "react";
import S from "./table.module.css";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const defaultData = [
  {
    card: "1",
    effect: "HOLD ON",
    explanation: "The same player plays again.",
  },
  {
    card: "2",
    effect: "PICK TWO",
    explanation: `The next player must either play another two(to defend), or must draw two cards from the stock instead. After cards have been drawn for the two(s), the next player can play any legal card.`,
  },
  {
    card: "5",
    effect: "PICK THREE",
    explanation: `The next player must either play another five(to defend) or must draw three cards from the stock instead.
After cards have been drawn for the five(s), the next player can play any legal`,
  },
  {
    card: "8",
    effect: "SUSPENSION",
    explanation: "The next player misses a turn.",
  },
  {
    card: "14",
    effect: "GENERAL MARKET",
    explanation: `
      All players except the person who played the 14 must immediately draw one card from the stock.
    `,
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("card", {
    cell: info => info.getValue(),
    header: () => <span>Card</span>,
  }),
  columnHelper.accessor("effect", {
    cell: info => info.getValue(),
    header: () => <span>Effect</span>,
  }),
  columnHelper.accessor("explanation", {
    header: () => <span>Explanation</span>,
    cell: info => info.renderValue(),
  }),
];

export default function Table() {
  const [data] = useState(() => [...defaultData]);
  const rerender = useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={S.table}>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
