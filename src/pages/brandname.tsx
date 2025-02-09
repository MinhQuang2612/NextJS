import React, { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "@/components/DashboardLayout";

interface Brand {
    id: number;
    name: string;
    contract_num: string;
    status: {
        value: string;
        description: string;
        color: 'default' | 'success' | 'warning' | 'error';
    };
    note: string | null;
    option: {
        quota_remaining: number;
    };
    created_at: string;
    updated_at: string;
}

interface SortConfig {
    key: string;
    direction: 'asc' | 'desc' | '';
}

export default function BrandName() {
    const [brandData, setBrandData] = useState<Brand[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filterStatus, setFilterStatus] = useState<string>("");

    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalItems, setTotalItems] = useState<number>(0);

    const [sortConfig, setSortConfig] = useState<SortConfig>({
        key: '',
        direction: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const authToken = localStorage.getItem("authToken");
                if (!authToken) {
                    console.error("Token không tồn tại. Vui lòng đăng nhập lại.");
                    return;
                }

                // Thêm searchTerm và filterStatus vào query string
                const query = new URLSearchParams({
                    "page[size]": itemsPerPage.toString(),
                    "page[number]": currentPage.toString(),
                    ...(searchTerm ? { "filter[keyword]": searchTerm } : {}),
                    ...(filterStatus ? { "filter[status]": filterStatus } : {}),
                    ...(sortConfig ? {
                        "sort": sortConfig.direction === 'desc' ? `-${sortConfig.key}` : sortConfig.key
                    } : {})
                }).toString();

                console.log("Query string: ", query);

                const config = {
                    method: "get",
                    url: `https://api.gw-sms.com/api/portal/brand?${query}`,
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: `Bearer ${authToken}`,
                    },
                };

                const response = await axios.request(config);
                setBrandData(response.data.data);
                setTotalItems(response.data.meta.total);

            } catch (error) {
                console.error("Lỗi khi gọi API: ", error);
            }
        };

        fetchData();
    }, [searchTerm, filterStatus, currentPage, itemsPerPage, sortConfig]);

    // Tính tổng số trang
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Chuyển trang
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Cập nhật tìm kiếm
    const handleSearchChange = (term: string) => {
        setSearchTerm(term);
        setCurrentPage(1); 
    };

    // Cập nhật trạng thái lọc
    const handleFilterChange = (status: string) => {
        setFilterStatus(status);
        setCurrentPage(1); 
    };

    const handleSort = (key: string) => {
        setSortConfig(prevSort => {
            if (prevSort.key === key) {
                const nextDirection =
                    prevSort.direction === '' ? 'asc' :
                    prevSort.direction === 'asc' ? 'desc' : '';
                return { key: nextDirection ? key : '', direction: nextDirection };
            }
            return { key, direction: 'asc' };
        });
        setCurrentPage(1); 
    };

    return (
        <DashboardLayout title="Quản lý Brandname">
            <main className="grow content pt-5" id="content" role="content">

                <div className="container-fixed" id="content_container">
                </div>

                <div className="container-fixed">
                    <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
                        <div className="flex flex-col justify-center gap-2">
                            <h1 className="text-xl font-medium leading-none text-gray-900">
                                Brandname
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container-fixed">
                    <div className="grid gap-5 lg:gap-7.5">
                        <div className="card card-grid min-w-full">
                            <div className="card-header flex-wrap gap-2">
                                <h3 className="card-title font-medium text-sm">

                                </h3>
                                <div className="flex flex-wrap gap-2 lg:gap-5">
                                    <div className="flex">
                                        <label className="input input-sm">
                                            <i className="ki-filled ki-magnifier">
                                            </i>
                                            <input placeholder="Tìm theo Brandname hoặc số hợp đồng" type="text" style={{ width: "220px" }} value={searchTerm}
                                                onChange={(e) => handleSearchChange(e.target.value)}>
                                            </input>
                                        </label>
                                    </div>
                                    <div className="flex flex-wrap gap-2.5">
                                        <select className="select select-sm w-40" value={filterStatus}
                                            onChange={(e) => handleFilterChange(e.target.value)}>
                                            <option value="">
                                                Chọn trạng thái
                                            </option>
                                            <option value="new">
                                                Mới
                                            </option>
                                            <option value="active">
                                                Hoạt động
                                            </option>
                                            <option value="inactive">
                                                Ngừng hoạt động
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">

                                <div data-datatable="true" data-datatable-page-size="10">
                                    <div className="overflow-x-auto">
                                        <table className="table table-auto table-border w-full" data-datatable-table="true">
                                            <thead>
                                                <tr>

                                                    <th className="min-w-[150px]">
                                                        <span
                                                            className={`sort ${sortConfig.key === 'name'
                                                                ? (sortConfig.direction === 'asc' ? 'asc' : 'desc')
                                                                : ''
                                                                }`}
                                                            onClick={() => handleSort('name')}
                                                        >
                                                            <span className="sort-label font-normal text-gray-700">
                                                                Name
                                                            </span>
                                                            <span className="sort-icon">
                                                            </span>
                                                        </span>
                                                    </th>
                                                    <th className="min-w-[150px]">
                                                        <span
                                                            className={`sort ${sortConfig.key === 'contract_num'
                                                                ? (sortConfig.direction === 'asc' ? 'asc' : 'desc')
                                                                : ''  
                                                                }`}
                                                            onClick={() => handleSort('contract_num')}
                                                        >
                                                            <span className="sort-label font-normal text-gray-700">
                                                                Số hợp đồng
                                                            </span>
                                                            <span className="sort-icon">
                                                            </span>
                                                        </span>
                                                    </th>
                                                    <th className="min-w-[175px] text-center">
                                                        <span className="sort">
                                                            <span className="sort-label font-normal text-gray-700">
                                                                Ghi chú
                                                            </span>

                                                        </span>
                                                    </th>
                                                    <th className="min-w-[175px] text-center">
                                                        <span className="sort">
                                                            <span className="sort-label font-normal text-gray-700">
                                                                Trạng thái
                                                            </span>

                                                        </span>
                                                    </th>
                                                    <th className="min-w-[120px] text-center">
                                                        <span className="sort">
                                                            <span className="sort-label font-normal text-gray-700">
                                                                Hạn mức
                                                            </span>

                                                        </span>
                                                    </th>
                                                    <th className="min-w-[150px] text-center">
                                                        <span className="sort">
                                                            <span className="sort-label font-normal text-gray-700">
                                                                Hạn mức còn lại
                                                            </span>

                                                        </span>
                                                    </th>
                                                    <th className="min-w-[200px] text-center">
                                                        <span
                                                            className={`sort ${sortConfig.key === 'created_at'
                                                                ? (sortConfig.direction === 'asc' ? 'asc' : 'desc')
                                                                : ''
                                                                }`}
                                                            onClick={() => handleSort('created_at')}
                                                        >
                                                            <span className="sort-label font-normal text-gray-700">
                                                                Ngày tạo
                                                            </span>
                                                            <span className="sort-icon">
                                                            </span>
                                                        </span>
                                                    </th>
                                                    <th className="min-w-[200px] text-center">
                                                        <span
                                                            className={`sort ${sortConfig.key === 'updated_at'
                                                                    ? (sortConfig.direction === 'asc' ? 'asc' : 'desc')
                                                                    : ''
                                                                }`}
                                                            onClick={() => handleSort('updated_at')}
                                                        >
                                                            <span className="sort-label font-normal text-gray-700">
                                                                Ngày cập nhật
                                                            </span>
                                                            <span className="sort-icon">
                                                            </span>
                                                        </span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {brandData.map((brand, index) => {

                                                    const statusColor = brand?.status?.color || 'default';


                                                    const colorClasses = {
                                                        default: 'bg-gray-100 text-gray-500',
                                                        success: 'bg-green-100 text-green-600',
                                                        warning: 'bg-yellow-100 text-yellow-600',
                                                        error: 'bg-red-100 text-red-600',

                                                    };

                                                    const statusClass = colorClasses[statusColor] || colorClasses['default'];

                                                    return (
                                                        <tr key={index}>
                                                            <td>
                                                                <div className="flex items-center gap-2.5">
                                                                    <div className="flex flex-col">
                                                                        <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                            {brand?.name}
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="flex flex-wrap gap-1.5">
                                                                    <span className="text-gray-800 font-medium text-sm">
                                                                        {brand?.contract_num}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="flex flex-col">
                                                                    {brand?.note}
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="flex flex-wrap gap-1.5 justify-center">
                                                                    <span className={`text-sm font-medium px-2 py-1 rounded-md ${statusClass}`}>
                                                                        {brand?.status?.description}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="flex justify-center">
                                                                    {brand?.option?.quota_remaining}
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="flex justify-center">
                                                                    {brand?.option?.quota_remaining}
                                                                </div>
                                                            </td>
                                                            <td className="text-gray-800 font-medium text-center">
                                                                {new Date(brand?.created_at).toLocaleString()}
                                                            </td>
                                                            <td className="text-gray-800 font-medium text-center">
                                                                {new Date(brand?.updated_at).toLocaleString()}
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium">
                                        <div className="flex items-center gap-2 order-2 md:order-1">
                                            Show
                                            <select className="select select-sm w-16" data-datatable-size="true" name="perpage" value={itemsPerPage}
                                                onChange={(e) => {
                                                    setItemsPerPage(Number(e.target.value));
                                                    setCurrentPage(1);
                                                }}>
                                                <option value="10">10</option>
                                                <option value="20">20</option>
                                                <option value="30">30</option>
                                                <option value="50">50</option>
                                                <option value="100 ">100</option>
                                            </select>
                                            per page
                                        </div>
                                        <div className="flex items-center gap-4 order-1 md:order-2">
                                            <span data-datatable-info="true">
                                                {`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(
                                                    currentPage * itemsPerPage,
                                                    totalItems
                                                )} of ${totalItems}`}
                                            </span>
                                            <div className="pagination flex items-center gap-2">
                                                {/* Nút quay lại */}
                                                <button
                                                    className={`btn ${currentPage === 1 ? "btn-disabled" : ""}`}
                                                    onClick={() => handlePageChange(currentPage - 1)}
                                                    disabled={currentPage === 1}
                                                >
                                                    <i className="ki-outline ki-black-left rtl:transform rtl:rotate-180"></i>
                                                </button>

                                                {/* Hiển thị các số trang */}
                                                {Array.from({ length: totalPages }, (_, i) => i + 1)
                                                    .filter((page) => {
                                                        if (totalPages <= 5) {
                                                            return true; // Hiển thị tất cả nếu số trang <= 5
                                                        }
                                                        if (currentPage <= 3) {
                                                            return page <= 4; // Hiển thị 1, 2, 3, 4 khi đang ở trang đầu
                                                        }
                                                        if (currentPage >= totalPages - 2) {
                                                            return page >= totalPages - 3; // Hiển thị 4 trang cuối
                                                        }
                                                        return Math.abs(page - currentPage) <= 1; // Hiển thị trang gần nhất
                                                    })
                                                    .map((page) => (
                                                        <button
                                                            key={page}
                                                            className={`btn ${page === currentPage ? "active" : ""}`}
                                                            onClick={() => handlePageChange(page)}
                                                        >
                                                            {page}
                                                        </button>
                                                    ))}

                                                {/* Nút tiến tới */}
                                                <button
                                                    className={`btn ${currentPage === totalPages ? "btn-disabled" : ""}`}
                                                    onClick={() => handlePageChange(currentPage + 1)}
                                                    disabled={currentPage === totalPages}
                                                >
                                                    <i className="ki-outline ki-black-right rtl:transform rtl:rotate-180"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </DashboardLayout>
    );
}
