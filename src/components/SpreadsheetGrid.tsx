import { FaGlobe, FaUser } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { IoChevronDownCircle, IoLinkOutline } from "react-icons/io5";
import { FaArrowsRotate } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import type { Column, HeaderGroup, Row, Cell, CellProps, ColumnInstance } from "react-table";
import { useTable } from "react-table";

import bag from "../assets/bag.svg";
import submit from "../assets/submit.svg";

import emoji from "../assets/emoji.svg";
import icon from "../assets/icon.svg";
import icon1 from "../assets/icon1.svg";

import OrderTabs from "./OrderTabs";

type RowData = {
    id: number;
    jobRequest: string;
    submitted: string;
    status: string;
    submitter: string;
    url: string;
    assigned: string;
    priority: string;
    dueDate: string;
    estValue: string;
    last: string;
};

//static data
const generateData = (): RowData[] => {
    const baseData = [
        {
            jobRequest: "Launch social media campaign",
            submitted: "15-11-2024",
            status: "In-process",
            submitter: "Aisha Patel",
            url: "www.aishapatel...",
            assigned: "Sophie Choudhury",
            priority: "Medium",
            dueDate: "20-11-2024",
            estValue: "6,200,000",
            last: "",
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
            estValue: "3,500,000",
            last: "",
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
            estValue: "4,750,000",
            last: "",
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
            estValue: "5,900,000",
            last: "",
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
            estValue: "2,800,000",
            last: "",
        },
    ];
    const data: RowData[] = [];
    for (let i = 0; i < 100; i++) {
        if (i < 5) {
            data.push({ ...baseData[i], id: i + 1 });
        } else {
            data.push({
                id: i + 1,
                jobRequest: "",
                submitted: "",
                status: "",
                submitter: "",
                url: "",
                assigned: "",
                priority: "",
                dueDate: "",
                estValue: "",
                last: "",
            });
        }
    }
    return data;
};

const columns: Column<RowData>[] = [
    {
        Header: () => (
            <div className="flex justify-between items-center gap-x-2">
                <div className="flex items-center gap-x-2">
                    <img src={bag} alt="Job Request" className="w-5 h-5 text-gray-400" />
                    <span>Job Request</span>
                </div>

                <FiChevronDown className="w-4 h-4 text-gray-500" />
            </div>
        ),
        accessor: "jobRequest",
        Cell: ({ value }: CellProps<RowData, string>) => (
            <div className="text-gray-700">{value || <span className="text-gray-300">-</span>}</div>
        ),
    },

    {
        Header: () => (
            <div className="flex justify-between items-center gap-x-2">
                <div className="flex items-center gap-x-2">
                    {" "}
                    <img src={submit} alt="Submitted" className="w-5 h-5 text-gray-400" />
                    <span>Submitted</span>
                </div>

                <FiChevronDown className="w-4 h-4 text-gray-500" />
            </div>
        ),
        accessor: "submitted",
        Cell: ({ value }: CellProps<RowData, string>) => (
            <div className="text-gray-700">{value || <span className="text-gray-300">-</span>}</div>
        ),
    },
    {
        Header: () => (
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-x-2">
                    <IoChevronDownCircle className="w-4 h-4 text-gray-500" />
                    <span>Status</span>
                </div>
                <FiChevronDown className="w-4 h-4 text-gray-500" />
            </div>
        ),
        accessor: "status",
        Cell: ({ value }: CellProps<RowData, string>) => {
            if (!value) return <span className="text-gray-300">-</span>;
            return (
                <span
                    className={`font-semibold px-2 rounded-2xl text-sm ${
                        value === "In-process"
                            ? "text-[#475569] bg-[#E2E8F0] "
                            : value === "Need to start"
                            ? " bg-[#FFF3D6] text-[#85640B]"
                            : value === "Complete"
                            ? "text-[#107242] bg-[#D3F2E3]"
                            : value === "Blocked"
                            ? "text-[#C22219] bg-[#FFE1DE]"
                            : ""
                    }`}
                >
                    {value}
                </span>
            );
        },
    },
    {
        Header: () => (
            <div className="flex justify-between items-center gap-x-2">
                <div className="flex items-center gap-x-2">
                    {" "}
                    <FaUser className="w-4 h-4 text-gray-500" />
                    <span>Submitter</span>
                </div>

                <FiChevronDown className="w-4 h-4 text-gray-500" />
            </div>
        ),
        accessor: "submitter",
        Cell: ({ value }: CellProps<RowData, string>) => (
            <div className="text-gray-700">{value || <span className="text-gray-300">-</span>}</div>
        ),
    },
    {
        Header: () => (
            <div className="flex  justify-between items-center gap-x-2">
                <div className="flex items-center gap-x-2">
                    {" "}
                    <FaGlobe className="w-4 h-4 text-gray-500" />
                    <span>URL</span>
                </div>

                <FiChevronDown className="w-4 h-4 text-gray-500" />
            </div>
        ),
        accessor: "url",
        Cell: ({ value }: CellProps<RowData, string>) => (
            <div className={`text-gray-700 ${value ? "underline" : ""}`}>
                {value || <span className="text-gray-300">-</span>}
            </div>
        ),
    },
    {
        Header: () => (
            <div className="flex items-center gap-x-2">
                <img src={emoji} alt="Assigned" className="w-5 h-5" />
                <span>Assigned</span>
            </div>
        ),
        accessor: "assigned",
        Cell: ({ value }: CellProps<RowData, string>) => (
            <div className="text-gray-700">{value || <span className="text-gray-300">-</span>}</div>
        ),
    },
    {
        Header: () => (
            <div className="flex items-center gap-x-2">
                <span>Priority</span>
            </div>
        ),
        accessor: "priority",
        Cell: ({ value }: CellProps<RowData, string>) => {
            if (!value) return <span className="text-gray-300">-</span>;
            return (
                <span
                    className={`font-semibold px-2 rounded-2xl text-sm ${
                        value === "Low"
                            ? "text-[#2290ff]  "
                            : value === "Medium"
                            ? "  text-[#85640B]"
                            : value === "High"
                            ? "text-[#C22219] "
                            : ""
                    }`}
                >
                    {value}
                </span>
            );
        },
    },
    {
        Header: () => <div className="flex items-Center  gap-x-2"> Due Date</div>,
        accessor: "dueDate",
        Cell: ({ value }: CellProps<RowData, string>) => (
            <div className="text-gray-700">{value || <span className="text-gray-300">-</span>}</div>
        ),
    },
    {
        Header: () => <div className="flex items-center  gap-x-2 w-[150px] "> Est. Value</div>,
        accessor: "estValue",
        Cell: ({ value }: CellProps<RowData, string>) => (
            <div className="text-gray-700">
                {value ? (
                    <span>
                        {value}
                        <span className="text-gray-200 ml-3 ">₹</span>
                    </span>
                ) : (
                    <span className="text-gray-300">-</span>
                )}
            </div>
        ),
    },
    {
        Header: () => <div className="flex items-Center  gap-x-2 w-[130px]"> </div>,
        accessor: "last",
        Cell: ({ value }: CellProps<RowData, string>) => (
            <div className="text-gray-700 w-[130px]">
                {value || <span className="text-gray-300">-</span>}
            </div>
        ),
    },
];
const SpreadsheetGrid: React.FC = () => {
    const data = generateData();
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<RowData>({
        columns,
        data,
    });
    return (
        <div className=" flex-1 overflow-x-auto w-[100%] scrollbar-hidden">
            <div className=" flex w-full ">
                <div className="px-2 py-1 text-sm text-gray-700 truncate border border-[#eeeeee] w-[30px]"></div>

                <div className="flex px-2 py-1 text-sm truncate gap-2 items-center bg-[#e2e2e2] border border-[#eeeeee] content-center w-[647px]">
                    <div className="flex items-center gap-1 bg-[#eeeeee] py-1 px-1.5  rounded-md border border-[#eeeeee] cursor-pointer">
                        <IoLinkOutline className="text-blue-700  w-4 text-lg" />
                        <span className="text-gray-500">Q3 Financial Overview</span>
                    </div>
                    <FaArrowsRotate className="w-4 h-4 text-red-500" />
                </div>

                <div
                    className="px-2 py-1 truncate  text-sm text-gray-700 border border-[#eeeeee]"
                    style={{ width: "154px" }}
                ></div>

                <div
                    className="flex items-center justify-center gap-1 py-1 px-2 text-sm bg-[#d2e0d4] text-gray-600 truncate border border-[#eeeeee] cursor-pointer"
                    style={{ width: "156px" }}
                >
                    <img src={icon1} alt="ABC" className="w-5 text-gray-300" />
                    <span className="font-[500] tracking-wide">ABC</span>
                    <span
                        className="text-[#afafaf] tracking-wider text-lg  ml-2 -translate-x-1 "
                        style={{ lineHeight: "1" }}
                    >
                        ...
                    </span>
                </div>

                <div
                    className="px-2 py-1 text-sm text-gray-600 truncate flex items-center justify-center gap-1 bg-[#DCCFFC] border border-[#eeeeee] cursor-pointer "
                    style={{ width: "215px" }}
                >
                    <img src={icon} alt="Answer a question" className="w-5 text-gray-300" />
                    <span className="font-[500] tracking-wide">Answer a question</span>
                    <span className="text-[#afafaf] text-lg tracking-wider ml-2 -translate-1">
                        ...
                    </span>
                </div>

                <div
                    className="px-2 py-1 text-sm text-gray-700 truncate border border-[#eeeeee] flex items-center justify-center bg-[#fac2af] gap-1 cursor-pointer "
                    style={{ width: "180px" }}
                >
                    <img className="w-5" alt="Extract" src={icon} />
                    <span className="font-[500] tracking-wide">Extract</span>
                    <span className="text-[#afafaf] text-lg tracking-wider ml-2 -translate-1">
                        ...
                    </span>
                </div>

                <div
                    className="px-2 py-1 text-sm text-gray-700 truncate border border-[#eeeeee] bg-[#eeeeee] flex items-center justify-center cursor-pointer "
                    style={{ width: "140px" }}
                >
                    <IoMdAdd className="w-5 text-3xl" />
                </div>
            </div>

            <div className="flex sticky top-0 z-10 bg-white">
                <div>
                    <div className="px-2 py-1 text-lg  text-[#BCBCBC] bg-gray-100 border border-[#eeeeee] text-center w-[30px]">
                        #
                    </div>

                    {data.map((_, index) => (
                        <div
                            key={index}
                            className="h-10 flex items-center justify-center border-b border-gray-200 text-gray-500"
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>

                <table {...getTableProps()} className="min-w-full border text-sm">
                    <thead className="bg-gray-100">
                        {headerGroups.map((headerGroup: HeaderGroup<RowData>) => {
                            const { key: headerKey, ...headerProps } =
                                headerGroup.getHeaderGroupProps();
                            return (
                                <tr key={headerKey} {...headerProps}>
                                    {headerGroup.headers.map((column: ColumnInstance<RowData>) => {
                                        const { key: colKey, ...colProps } =
                                            column.getHeaderProps();
                                        return (
                                            <th
                                                key={colKey}
                                                {...colProps}
                                                className="relative border p-2 text-left font-semibold text-gray-600 bg-[#F3F3F3] sticky top-0 z-11"
                                            >
                                                {column.render("Header")}
                                                <div className="absolute cursor-col-resize top-0 right-0 w-2 h-full"></div>
                                            </th>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row: Row<RowData>) => {
                            prepareRow(row);
                            const { key: rowKey, ...rowProps } = row.getRowProps();
                            return (
                                <tr
                                    key={rowKey}
                                    {...rowProps}
                                    className="hover:bg-gray-50 cursor-pointer"
                                >
                                    {row.cells.map((cell: Cell<RowData>) => {
                                        const { key: cellKey, ...cellProps } = cell.getCellProps();
                                        return (
                                            <td
                                                key={cellKey}
                                                {...cellProps}
                                                className="border px-4 py-2"
                                                onClick={() =>
                                                    console.log(
                                                        `Clicked ${cell.column.id} | Value: ${cell.value}`
                                                    )
                                                }
                                            >
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {/* </div> */}

            <OrderTabs />
        </div>
    );
};

export default SpreadsheetGrid;
