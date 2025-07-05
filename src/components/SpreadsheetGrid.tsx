import { useTable, Column } from "react-table";

type RowData = {
    jobRequest: string;
    submitted: string;
    status: string;
    submitter: string;
    url: string;
    assigned: string;
    priority: string;
    dueDate: string;
    estValue: string;
};

//static data
const data: RowData[] = [
    {
        jobRequest: "Launch social media campaign",
        submitted: "15-11-2024",
        status: "In-process",
        submitter: "Aisha Patel",
        url: "www.aishapatel...",
        assigned: "Sophie Choudhury",
        priority: "Medium",
        dueDate: "20-11-2024",
        estValue: "₹6,200,000",
    },
    {
        jobRequest: "Update press kit",
        submitted: "28-10-2024",
        status: "Need to start",
        submitter: "Irfan Khan",
        url: "www.irfankhanp...",
        assigned: "Tejas Pandey",
        priority: "High",
        dueDate: "30-10-2024",
        estValue: "₹3,500,000",
    },
    {
        jobRequest: "Finalize user testing",
        submitted: "05-12-2024",
        status: "In-process",
        submitter: "Mark Johnson",
        url: "www.markjohnso...",
        assigned: "Rachel Lee",
        priority: "Medium",
        dueDate: "10-12-2024",
        estValue: "₹4,750,000",
    },
    {
        jobRequest: "Design new features",
        submitted: "10-01-2025",
        status: "Complete",
        submitter: "Emily Green",
        url: "www.emilygreen...",
        assigned: "Tom Wright",
        priority: "Low",
        dueDate: "15-01-2025",
        estValue: "₹5,900,000",
    },
    {
        jobRequest: "Prepare financial report Q4",
        submitted: "25-01-2025",
        status: "Blocked",
        submitter: "Jessica Brown",
        url: "www.jessicabro...",
        assigned: "Kevin Smith",
        priority: "Low",
        dueDate: "30-01-2025",
        estValue: "₹2,800,000",
    },
];

const columns: Column<RowData>[] = [
    { Header: "Job Request", accessor: "jobRequest" },
    { Header: "Submitted", accessor: "submitted" },
    { Header: "Status", accessor: "status" },
    { Header: "Submitter", accessor: "submitter" },
    { Header: "URL", accessor: "url" },
    { Header: "Assigned", accessor: "assigned" },
    { Header: "Priority", accessor: "priority" },
    { Header: "Due Date", accessor: "dueDate" },
    { Header: "Est. Value", accessor: "estValue" },
];
const SpreadsheetGrid = () => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<RowData>({
        columns,
        data,
    });
    return (
        <div className="overflow-x-auto">
            <table {...getTableProps()} className=" min-w-full border text-sm">
                <thead className="bg-gray-100">
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps()}
                                    className="border px-4 py-2 text-left font-medium text-gray-700"
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className="hover:bg-gray-50">
                                {row.cells.map((cell) => (
                                    <td
                                        {...cell.getCellProps()}
                                        className="border px-4 py-2"
                                        onClick={() =>
                                            console.log(
                                                `Clicked ${cell.column.id} | Value: ${cell.value}`
                                            )
                                        }
                                    >
                                        {cell.render("Cell")}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default SpreadsheetGrid;
