import React, { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "@/components/DashboardLayout";

interface Brand {
    id: number;
    name: string;
}
interface Campaign {
    id: number;
    name: string;
    brand: {
        id: number;
        name: string;
    };
    status: {
        value: string;
        description: string;
        color: 'default' | 'success' | 'warning' | 'danger' | 'dark';
    };
    type: {
        value: string;
        description: string;
        color: 'default' | 'success' | 'warning' | 'danger' | 'primary';
    };
    total_import: number;
    total_sent: number;
    sent_time: string;
    created_at: string;
    updated_at: string;
}

interface SortConfig {
    key: string;
    direction: 'asc' | 'desc' | '';
}

export default function Campaign() {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [campaignData, setCampaignData] = useState<Campaign[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filterStatus, setFilterStatus] = useState<string>("");
    const [filterBrand, setFilterBrand] = useState<string>("");
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [sortConfig, setSortConfig] = useState<SortConfig>({
        key: '',
        direction: ''
    });

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const authToken = localStorage.getItem("authToken");
                if (!authToken) {
                    console.error("Token không tồn tại. Vui lòng đăng nhập lại.");
                    return;
                }

                const config = {
                    method: "get",
                    url: "https://api.gw-sms.com/api/portal/brand", // URL API lấy danh sách brand
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: `Bearer ${authToken}`,
                    },
                };

                const response = await axios.request(config);
                setBrands(response.data.data);
            } catch (error) {
                console.error("Lỗi khi lấy danh sách brand: ", error);
            }
        };

        fetchBrands();
    }, []); // Chỉ gọi một lần khi component mount

    useEffect(() => {
        const fetchData = async () => {
            try {
                const authToken = localStorage.getItem("authToken");
                if (!authToken) {
                    console.error("Token không tồn tại. Vui lòng đăng nhập lại.");
                    return;
                }

                const queryParams: Record<string, string> = {
                    "page[number]": currentPage.toString(),
                    "page[size]": itemsPerPage.toString(),
                };

                if (searchTerm) {
                    queryParams["filter[keyword]"] = searchTerm;
                }
                if (filterStatus) {
                    queryParams["filter[status]"] = filterStatus;
                }
                if (filterBrand) {
                    queryParams["filter[brand_id]"] = filterBrand;
                }
                if (sortConfig.key && sortConfig.direction) {
                    queryParams["sort"] = sortConfig.direction === 'desc' ? `-${sortConfig.key}` : sortConfig.key;
                }

                const query = new URLSearchParams(queryParams).toString();

                const config = {
                    method: "get",
                    url: `https://api.gw-sms.com/api/portal/brand/campaign?${query}`,
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: `Bearer ${authToken}`,
                    },
                };

                const response = await axios.request(config);
                setCampaignData(response.data.data);
                setTotalItems(response.data.meta.total);

            } catch (error) {
                console.error("Lỗi khi gọi API: ", error);
            }
        };

        fetchData();
    }, [searchTerm, filterStatus, filterBrand, currentPage, itemsPerPage, sortConfig]);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleSearchChange = (term: string) => {
        setSearchTerm(term);
        setCurrentPage(1);
    };

    const handleFilterChange = (status: string) => {
        setFilterStatus(status);
        setCurrentPage(1);
    };

    const handleBrandChange = (brand: string) => {
        setFilterBrand(brand);
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
        <DashboardLayout title="Quản lý Campaign">
            <main className="grow content pt-5" id="content" role="content">
                <div className="container-fixed">
                    <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
                        <div className="flex flex-col justify-center gap-2">
                            <h1 className="text-xl font-medium leading-none text-gray-900">
                                Chiến dịch
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
                                            <i className="ki-filled ki-magnifier"></i>
                                            <input
                                                placeholder="Tìm theo nội dung"
                                                type="text"
                                                style={{ width: "220px" }}
                                                value={searchTerm}
                                                onChange={(e) => handleSearchChange(e.target.value)}
                                            />
                                        </label>
                                    </div>
                                    <div className="flex">
                                        <select
                                            className="select select-sm w-40"
                                            value={filterBrand}
                                            onChange={(e) => handleBrandChange(e.target.value)}
                                        >
                                            <option value="">Chọn Brandname</option>
                                            {brands.map((brand) => (
                                                <option key={brand.id} value={brand.id}>
                                                    {brand.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="flex flex-wrap gap-2.5">
                                        <select
                                            className="select select-sm w-40"
                                            value={filterStatus}
                                            onChange={(e) => handleFilterChange(e.target.value)}
                                        >
                                            <option value="">Chọn trạng thái</option>
                                            <option value="sent">Đã gửi</option>
                                            <option value="review">Chờ xem xét</option>
                                            <option value="new">Mới</option>
                                        </select>
                                    </div>
                                    <div className="flex">
                                        <button className="btn btn-sm btn-light">
                                            Thời gian gửi
                                        </button>
                                    </div>
                                    <div className="flex">
                                        <button className="btn btn-sm btn-light">
                                            Thời gian tạo
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div data-datatable="true" data-datatable-page-size="10">
                                    <div className="overflow-x-auto">
                                        <table className="table table-auto table-border w-full">
                                            <thead>
                                                <tr>
                                                    <th className="min-w-[180px]">
                                                        <span
                                                            className={`sort ${sortConfig.key === 'name'
                                                                ? (sortConfig.direction === 'asc' ? 'asc' : 'desc')
                                                                : ''}`}
                                                            onClick={() => handleSort('name')}
                                                        >
                                                            <span className="sort-label font-normal text-gray-700">
                                                                Tên chiến dịch
                                                            </span>
                                                            <span className="sort-icon"></span>
                                                        </span>
                                                    </th>
                                                    <th className="min-w-[100px]">
                                                        <span className="sort-label font-normal text-gray-700">
                                                            Brandname
                                                        </span>
                                                    </th>
                                                    <th className="min-w-[175px] text-center">
                                                        <span className="sort-label font-normal text-gray-700">
                                                            Loại tin nhắn
                                                        </span>
                                                    </th>
                                                    <th className="min-w-[150px] text-center">
                                                        <span className="sort-label font-normal text-gray-700">
                                                            Tổng Import
                                                        </span>
                                                    </th>
                                                    <th className="min-w-[150px] text-center">
                                                        <span className="sort-label font-normal text-gray-700">
                                                            Tổng đã gửi
                                                        </span>
                                                    </th>
                                                    <th className="min-w-[175px] text-center">
                                                        <span className="sort-label font-normal text-gray-700">
                                                            Trạng thái
                                                        </span>
                                                    </th>
                                                    <th className="min-w-[200px] text-center">
                                                        <span
                                                            className={`sort ${sortConfig.key === 'sent_time'
                                                                ? (sortConfig.direction === 'asc' ? 'asc' : 'desc')
                                                                : ''}`}
                                                            onClick={() => handleSort('sent_time')}
                                                        >
                                                            <span className="sort-label font-normal text-gray-700">
                                                                Thời gian gửi
                                                            </span>
                                                            <span className="sort-icon"></span>
                                                        </span>
                                                    </th>
                                                    <th className="min-w-[200px] text-center">
                                                        <span
                                                            className={`sort ${sortConfig.key === 'created_at'
                                                                ? (sortConfig.direction === 'asc' ? 'asc' : 'desc')
                                                                : ''}`}
                                                            onClick={() => handleSort('created_at')}
                                                        >
                                                            <span className="sort-label font-normal text-gray-700">
                                                                Ngày tạo
                                                            </span>
                                                            <span className="sort-icon"></span>
                                                        </span>
                                                    </th>
                                                    <th className="min-w-[200px] text-center">
                                                        <span
                                                            className={`sort ${sortConfig.key === 'updated_at'
                                                                ? (sortConfig.direction === 'asc' ? 'asc' : 'desc')
                                                                : ''}`}
                                                            onClick={() => handleSort('updated_at')}
                                                        >
                                                            <span className="sort-label font-normal text-gray-700">
                                                                Ngày cập nhật
                                                            </span>
                                                            <span className="sort-icon"></span>
                                                        </span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {campaignData.map((campaign, index) => {
                                                    const statusColor = campaign?.status?.color || 'default';
                                                    const typeColor = campaign?.type?.color || 'default';
                                                    const colorClasses = {
                                                        default: 'bg-gray-100 text-gray-500',
                                                        success: 'bg-green-100 text-green-600',
                                                        warning: 'bg-yellow-100 text-yellow-600',
                                                        danger: 'bg-red-100 text-red-600',
                                                        dark: 'bg-gray-800 text-white',
                                                        primary: 'bg-blue-100 text-blue-600',
                                                    };
                                                    const statusClass = colorClasses[statusColor] || colorClasses['default'];
                                                    const typeClass = colorClasses[typeColor] || colorClasses['default'];

                                                    return (
                                                        <tr key={index}>
                                                            <td>
                                                                <div className="flex items-center gap-2.5">
                                                                    <div className="flex flex-col">
                                                                        <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px">
                                                                            {campaign?.name}
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="flex flex-wrap gap-1.5">
                                                                    <span className="text-gray-800 font-medium text-sm">
                                                                        {campaign?.brand?.name}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="flex flex-wrap gap-1.5 justify-center">
                                                                    <span className={`text-sm font-medium px-2 py-1 rounded-md ${typeClass}`}>
                                                                        {campaign?.type?.description}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="text-gray-800 font-medium text-center">
                                                                {campaign?.total_import}
                                                            </td>
                                                            <td className="text-gray-800 font-medium text-center">
                                                                {campaign?.total_sent}
                                                            </td>
                                                            <td>
                                                                <div className="flex flex-wrap gap-1.5 justify-center">
                                                                    <span className={`text-sm font-medium px-2 py-1 rounded-md ${statusClass}`}>
                                                                        {campaign?.status?.description}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="text-gray-800 font-medium text-center">
                                                                {new Date(campaign?.sent_time).toLocaleString()}
                                                            </td>
                                                            <td className="text-gray-800 font-medium text-center">
                                                                {new Date(campaign?.created_at).toLocaleString()}
                                                            </td>
                                                            <td className="text-gray-800 font-medium text-center">
                                                                {new Date(campaign?.updated_at).toLocaleString()}
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
                                            <select
                                                className="select select-sm w-16"
                                                value={itemsPerPage}
                                                onChange={(e) => {
                                                    setItemsPerPage(Number(e.target.value));
                                                    setCurrentPage(1);
                                                }}
                                            >
                                                <option value="10">10</option>
                                                <option value="20">20</option>
                                                <option value="30">30</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select>
                                            per page
                                        </div>
                                        <div className="flex items-center gap-4 order-1 md:order-2">
                                            <span>
                                                {`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(
                                                    currentPage * itemsPerPage,
                                                    totalItems
                                                )} of ${totalItems}`}
                                            </span>
                                            <div className="pagination flex items-center gap-2">
                                                <button
                                                    className={`btn ${currentPage === 1 ? "btn-disabled" : ""}`}
                                                    onClick={() => handlePageChange(currentPage - 1)}
                                                    disabled={currentPage === 1}
                                                >
                                                    <i className="ki-outline ki-black-left rtl:transform rtl:rotate-180"></i>
                                                </button>

                                                {Array.from({ length: totalPages }, (_, i) => i + 1)
                                                    .filter((page) => {
                                                        if (totalPages <= 5) {
                                                            return true;
                                                        }
                                                        if (currentPage <= 3) {
                                                            return page <= 4;
                                                        }
                                                        if (currentPage >= totalPages - 2) {
                                                            return page >= totalPages - 3;
                                                        }
                                                        return Math.abs(page - currentPage) <= 1;
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