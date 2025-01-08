import DashboardLayout from "@/components/DashboardLayout";

export default function BrandName() {
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
                                            <input placeholder="Tìm Brandname hoặc số hợp đồng" type="text" value="" style={{ width: "200px" }}>
                                            </input>
                                        </label>
                                    </div>
                                    <div className="flex flex-wrap gap-2.5">
                                        <select className="select select-sm w-40">
                                            <option value="" disabled selected>
                                                Chọn trạng thái
                                            </option>
                                            <option value="1">
                                                Active
                                            </option>
                                            <option value="2">
                                                Disabled
                                            </option>
                                            <option value="3">
                                                Pending
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
                                                        <span className="sort asc">
                                                            <span className="sort-label font-normal text-gray-700">
                                                                Name
                                                            </span>
                                                            <span className="sort-icon">
                                                            </span>
                                                        </span>
                                                    </th>
                                                    <th className="min-w-[150px]">
                                                        <span className="sort">
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
                                                        <span className="sort asc">
                                                            <span className="sort-label font-normal text-gray-700">
                                                                Ngày tạo
                                                            </span>
                                                            <span className="sort-icon">
                                                            </span>
                                                        </span>
                                                    </th>
                                                    <th className="min-w-[200px] text-center">
                                                        <span className="sort asc">
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
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand A
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-gray-500 bg-gray-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Mới
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand B
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                    <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-green-600 bg-green-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Hoạt động
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand C
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-yellow-600 bg-yellow-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Ngừng hoạt động
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand D
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-gray-500 bg-gray-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Mới
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand E
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-green-600 bg-green-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Hoạt động
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand D
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-yellow-600 bg-yellow-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Ngừng hoạt động
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand E
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-gray-500 bg-gray-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Mới
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand F
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-green-600 bg-green-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Hoạt động
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand G
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-yellow-600 bg-yellow-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Ngừng hoạt động
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand H
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-gray-500 bg-gray-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Mới
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand I
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-green-600 bg-green-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Hoạt động
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand J
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-yellow-600 bg-yellow-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Ngừng hoạt động
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand K
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-gray-500 bg-gray-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Mới
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand L
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-green-600 bg-green-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Hoạt động
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand M
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-yellow-600 bg-yellow-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Ngừng hoạt động
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand N
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-gray-500 bg-gray-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Mới
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand O
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-green-600 bg-green-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Hoạt động
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand P
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-yellow-600 bg-yellow-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Ngừng hoạt động
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand Q
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-gray-500 bg-gray-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Mới
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand R
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-green-600 bg-green-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Hoạt động
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand S
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-yellow-600 bg-yellow-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Ngừng hoạt động
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand T
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-gray-500 bg-gray-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Mới
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand U
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-green-600 bg-green-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Hoạt động
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand V
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-yellow-600 bg-yellow-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Ngừng hoạt động
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand X
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-gray-500 bg-gray-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Mới
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand Y
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-green-600 bg-green-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Hoạt động
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand Z
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-yellow-600 bg-yellow-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Ngừng hoạt động
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand A
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-gray-500 bg-gray-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Mới
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand A
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-green-600 bg-green-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Hoạt động
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand B
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-yellow-600 bg-yellow-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Ngừng hoạt động
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <div className="flex items-center gap-2.5">

                                                            <div className="flex flex-col">
                                                                <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                                                    Brand C
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            <span className="text-gray-800 font-medium text-sm">
                                                                A12345
                                                            </span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col">

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                                            <span className="text-gray-500 bg-gray-100 border border-gray-400 px-2 py-1 rounded-md font-medium text-sm">
                                                                Mới
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex justify-center">
                                                            0
                                                        </div>
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                    <td className="text-gray-800 font-medium text-center">
                                                        02/12/2024 17:05
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium">
                                        <div className="flex items-center gap-2 order-2 md:order-1">
                                            Show
                                            <select className="select select-sm w-16" data-datatable-size="true" name="perpage">
                                            </select>
                                            per page
                                        </div>
                                        <div className="flex items-center gap-4 order-1 md:order-2">
                                            <span data-datatable-info="true">1-5 of 31
                                            </span>
                                            <div className="pagination" data-datatable-pagination="true">
                                                <div className="pagination">
                                                    <button className="btn disabled" disabled>
                                                        <i className="ki-outline ki-black-left rtl:transform rtl:rotat e-180"></i>
                                                    </button>
                                                    <button className="btn active disabled" disabled>1</button>
                                                    <button className="btn">2</button>
                                                    <button className="btn">3</button>
                                                    <button className="btn">...</button>
                                                    <button className="btn">
                                                        <i className="ki-outline ki-black-right rtl:transform rtl:rotat e-180"></i>
                                                    </button>
                                                </div>
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
