import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  getPaginationRowModel,
} from '@tanstack/react-table';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Submission {
  id: string;
  userId: string;
  data: {
    agency: {
      type: string;
      name: string;
    };
    asset: {
      type: string;
      details: string;
    };
    description: string;
    location?: string;
  };
  files: string[];
  timestamp: any;
}

interface SubmissionsTableProps {
  data: Submission[];
}

const columnHelper = createColumnHelper<Submission>();

const columns = [
  columnHelper.accessor(row => row.timestamp?.toDate().toLocaleDateString(), {
    id: 'date',
    cell: info => info.getValue(),
    header: 'Date',
  }),
  columnHelper.accessor(row => row.data.agency.name, {
    id: 'agency',
    cell: info => info.getValue(),
    header: 'Agency',
  }),
  columnHelper.accessor(row => row.data.asset.type, {
    id: 'assetType',
    cell: info => info.getValue(),
    header: 'Asset Type',
  }),
  columnHelper.accessor(row => row.data.description, {
    id: 'description',
    cell: info => info.getValue(),
    header: 'Description',
  }),
  columnHelper.accessor(row => row.data.location || 'N/A', {
    id: 'location',
    cell: info => info.getValue(),
    header: 'Location',
  }),
  columnHelper.accessor(row => row.files.length, {
    id: 'files',
    cell: info => `${info.getValue()} file(s)`,
    header: 'Files',
  }),
];

export const SubmissionsTable = ({ data }: SubmissionsTableProps) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer select-none"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center gap-2">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getIsSorted() === 'asc' ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : header.column.getIsSorted() === 'desc' ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination Controls */}
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing{' '}
              <span className="font-medium">{table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}</span>{' '}
              to{' '}
              <span className="font-medium">
                {Math.min((table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize, data.length)}
              </span>{' '}
              of{' '}
              <span className="font-medium">{data.length}</span>{' '}
              results
            </p>
          </div>
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                Previous
              </button>
              <button
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
