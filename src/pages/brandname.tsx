export default function BrandName() {
    return (
        <main className="grow content pt-5" id="content" role="content">
     
     <div className="container-fixed" id="content_container">
     </div>
     
     <div className="container-fixed">
      <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
       <div className="flex flex-col justify-center gap-2">
        <h1 className="text-xl font-medium leading-none text-gray-900">
         SaaS Users
        </h1>
        <div className="flex items-center flex-wrap gap-1.5 font-medium">
         <span className="text-md text-gray-600">
          All Members:
         </span>
         <span className="text-md text-gray-800 font-semibold me-2">
          49,053
         </span>
         <span className="text-md text-gray-600">
          Pro Licenses
         </span>
         <span className="text-md text-gray-800 font-semibold">
          1724
         </span>
        </div>
       </div>
       <div className="flex items-center gap-2.5">
        <a className="btn btn-sm btn-light" href="#">
         Import CSV
        </a>
        <a className="btn btn-sm btn-primary" href="#">
         Add Member
        </a>
       </div>
      </div>
     </div>
    
     <div className="container-fixed">
      <div className="grid gap-5 lg:gap-7.5">
       <div className="card card-grid min-w-full">
        <div className="card-header flex-wrap gap-2">
         <h3 className="card-title font-medium text-sm">
          Showing 10 of 49,053 users
         </h3>
         <div className="flex flex-wrap gap-2 lg:gap-5">
          <div className="flex">
           <label className="input input-sm">
            <i className="ki-filled ki-magnifier">
            </i>
            <input placeholder="Search users" type="text" value="">
            </input>
           </label>
          </div>
          <div className="flex flex-wrap gap-2.5">
           <select className="select select-sm w-28">
            <option value="1">
             Active
            </option>
            <option value="2">
             Disabled
            </option>
            <option value="2">
             Pending
            </option>
           </select>
           <select className="select select-sm w-28">
            <option value="1">
             Latest
            </option>
            <option value="2">
             Older
            </option>
            <option value="3">
             Oldest
            </option>
           </select>
           <button className="btn btn-sm btn-outline btn-primary">
            <i className="ki-filled ki-setting-4">
            </i>
            Filters
           </button>
          </div>
         </div>
        </div>
        <div className="card-body">
         <div data-datatable="true" data-datatable-page-size="10">
          <div className="scrollable-x-auto">
           <table className="table table-auto table-border" data-datatable-table="true">
            <thead>
             <tr>
              <th className="w-[60px] text-center">
               <input className="checkbox checkbox-sm" data-datatable-check="true" type="checkbox"/>
              </th>
              <th className="min-w-[300px]">
               <span className="sort asc">
                <span className="sort-label font-normal text-gray-700">
                 Subscriber
                </span>
                <span className="sort-icon">
                </span>
               </span>
              </th>
              <th className="min-w-[200px]">
               <span className="sort">
                <span className="sort-label font-normal text-gray-700">
                 Products
                </span>
                <span className="sort-icon">
                </span>
               </span>
              </th>
              <th className="min-w-[175px]">
               <span className="sort">
                <span className="sort-label font-normal text-gray-700">
                 License
                </span>
                <span className="sort-icon">
                </span>
               </span>
              </th>
              <th className="min-w-[175px]">
               <span className="sort">
                <span className="sort-label font-normal text-gray-700">
                 Last Payment
                </span>
                <span className="sort-icon">
                </span>
               </span>
              </th>
              <th className="min-w-[137px]">
               <span className="sort">
                <span className="sort-label font-normal text-gray-700">
                 Enforce 2FA
                </span>
                <span className="sort-icon">
                </span>
               </span>
              </th>
              <th className="w-28 text-center">
               <span className="sort">
                <span className="sort-label font-normal text-gray-700">
                 Invoices
                </span>
                <span className="sort-icon">
                </span>
               </span>
              </th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="1"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-3.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Tyler Hero
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  tyler.hero@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 NFT
                </span>
                <span className="badge badge-sm">
                 Artwork
                </span>
                <span className="badge badge-sm">
                 Widget
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Premium
                </span>
                <span className="text-xs text-gray-600">
                 4 months left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               6 Aug, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input checked="" type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="2"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-1.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Esther Howard
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  esther.howard@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 Design
                </span>
                <span className="badge badge-sm">
                 Template
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Trial
                </span>
                <span className="text-xs text-gray-600">
                 16 days left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               21 Apr, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="3"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-11.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Jacob Jones
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  jacob.jones@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 App
                </span>
                <span className="badge badge-sm">
                 Plugin
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Premium
                </span>
                <span className="text-xs text-gray-600">
                 2 months left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               14 Mar, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input checked="" type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="4"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-2.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Cody Fisher
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  cody.fisher@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 Template
                </span>
                <span className="badge badge-sm">
                 NFT
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Standard
                </span>
                <span className="text-xs text-gray-600">
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               20 Apr, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input checked="" type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="5"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-5.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Leslie Alexander
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  leslie.alexander@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 Artwork
                </span>
                <span className="badge badge-sm">
                 App
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Premium
                </span>
                <span className="text-xs text-gray-600">
                 6 months left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               29 Jan, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="6"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-4.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Robert Fox
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  robert.fox@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 Design
                </span>
                <span className="badge badge-sm">
                 Widget
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Trial
                </span>
                <span className="text-xs text-gray-600">
                 5 days left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               17 Mar, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="7"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-20.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Guy Hawkins
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  guy.hawkins@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 Plugin
                </span>
                <span className="badge badge-sm">
                 Artwork
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Standard
                </span>
                <span className="text-xs text-gray-600">
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               20 Jul, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="8"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-23.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Theresa Webb
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  theresa.webb@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 NFT
                </span>
                <span className="badge badge-sm">
                 Template
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Trial
                </span>
                <span className="text-xs text-gray-600">
                 2 days left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               06 May, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input checked="" type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="9"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-22.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Marvin McKinney
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  marvin.mckenney@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 Widget
                </span>
                <span className="badge badge-sm">
                 App
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Premium
                </span>
                <span className="text-xs text-gray-600">
                 1 months left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               16 Apr, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input checked="" type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="10"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-18.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Ronald Richards
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  ronald.richards@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 Artwork
                </span>
                <span className="badge badge-sm">
                 Design
                </span>
                <span className="badge badge-sm">
                 Plugin
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Premium
                </span>
                <span className="text-xs text-gray-600">
                 3 months left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               15 Jun, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="11"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-6.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  William Wilson
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  william.wilson@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 App
                </span>
                <span className="badge badge-sm">
                 Design
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Trial
                </span>
                <span className="text-xs text-gray-600">
                 10 days left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               28 Jul, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input checked="" type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="12"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-7.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Sophia Anderson
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  sophia.anderson@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 Plugin
                </span>
                <span className="badge badge-sm">
                 Template
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Standard
                </span>
                <span className="text-xs text-gray-600">
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               12 Aug, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="13"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-8.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Mason Taylor
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  mason.taylor@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 NFT
                </span>
                <span className="badge badge-sm">
                 Artwork
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Premium
                </span>
                <span className="text-xs text-gray-600">
                 5 months left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               09 Sep, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input checked="" type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="14"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-9.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Isabella Lee
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  isabella.lee@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 App
                </span>
                <span className="badge badge-sm">
                 Widget
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Trial
                </span>
                <span className="text-xs text-gray-600">
                 8 days left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               22 Oct, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="15"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-10.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  James Martinez
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  james.martinez@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 Template
                </span>
                <span className="badge badge-sm">
                 Design
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Standard
                </span>
                <span className="text-xs text-gray-600">
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               15 Nov, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input checked="" type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="16"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-12.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Emily Thomas
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  emily.thomas@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 Artwork
                </span>
                <span className="badge badge-sm">
                 Plugin
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Premium
                </span>
                <span className="text-xs text-gray-600">
                 7 months left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               03 Dec, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="17"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-13.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Benjamin Harris
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  benjamin.harris@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 NFT
                </span>
                <span className="badge badge-sm">
                 App
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Trial
                </span>
                <span className="text-xs text-gray-600">
                 12 days left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               21 Jan, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input checked="" type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="18"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-14.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Charlotte Young
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  charlotte.young@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 Template
                </span>
                <span className="badge badge-sm">
                 Plugin
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Standard
                </span>
                <span className="text-xs text-gray-600">
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               10 Feb, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="19"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-15.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Henry Clark
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  henry.clark@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 Design
                </span>
                <span className="badge badge-sm">
                 Widget
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Premium
                </span>
                <span className="text-xs text-gray-600">
                 9 months left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               08 Mar, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input checked="" type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="20"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-16.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Amelia Lewis
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  amelia.lewis@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 Artwork
                </span>
                <span className="badge badge-sm">
                 Template
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Trial
                </span>
                <span className="text-xs text-gray-600">
                 3 days left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               26 Apr, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="21"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-17.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Lucas Walker
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  lucas.walker@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 App
                </span>
                <span className="badge badge-sm">
                 Plugin
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Standard
                </span>
                <span className="text-xs text-gray-600">
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               19 May, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input checked="" type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="22"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-19.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Grace Allen
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  grace.allen@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 Widget
                </span>
                <span className="badge badge-sm">
                 Design
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Premium
                </span>
                <span className="text-xs text-gray-600">
                 11 months left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               03 Jun, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="23"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-21.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Jack Harris
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  jack.harris@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 NFT
                </span>
                <span className="badge badge-sm">
                 Template
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Trial
                </span>
                <span className="text-xs text-gray-600">
                 9 days left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               25 Jul, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input checked="" type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="24"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-24.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Aiden King
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  aiden.king@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 App
                </span>
                <span className="badge badge-sm">
                 Artwork
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Standard
                </span>
                <span className="text-xs text-gray-600">
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               02 Aug, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="25"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-25.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Avery Green
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  avery.green@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 Plugin
                </span>
                <span className="badge badge-sm">
                 Widget
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Premium
                </span>
                <span className="text-xs text-gray-600">
                 10 months left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               15 Sep, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input checked="" type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="26"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-26.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Ella White
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  ella.white@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 NFT
                </span>
                <span className="badge badge-sm">
                 Template
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Trial
                </span>
                <span className="text-xs text-gray-600">
                 14 days left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               09 Oct, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="27"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-27.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Henry King
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  henry.king@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 Design
                </span>
                <span className="badge badge-sm">
                 App
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Standard
                </span>
                <span className="text-xs text-gray-600">
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               20 Nov, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input checked="" type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="28"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-28.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Olivia Green
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  olivia.green@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 Plugin
                </span>
                <span className="badge badge-sm">
                 Artwork
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Premium
                </span>
                <span className="text-xs text-gray-600">
                 8 months left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               05 Dec, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="29"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-29.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Mason Lewis
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  mason.lewis@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 Template
                </span>
                <span className="badge badge-sm">
                 Widget
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Trial
                </span>
                <span className="text-xs text-gray-600">
                 7 days left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               22 Jan, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input checked="" type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="30"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-30.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Sophia Lee
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  sophia.lee@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 Design
                </span>
                <span className="badge badge-sm">
                 Plugin
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Standard
                </span>
                <span className="text-xs text-gray-600">
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               11 Feb, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
              </td>
             </tr>
             <tr>
              <td className="text-center">
               <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="31"/>
              </td>
              <td>
               <div className="flex items-center gap-2.5">
                <img alt="" className="rounded-full size-7 shrink-0" src="media/avatars/300-31.png"/>
                <div className="flex flex-col">
                 <a className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                  Matthew Martinez
                 </a>
                 <a className="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                  matthew.martinez@gmail.com
                 </a>
                </div>
               </div>
              </td>
              <td>
               <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-sm">
                 NFT
                </span>
                <span className="badge badge-sm">
                 App
                </span>
               </div>
              </td>
              <td>
               <div className="flex flex-col">
                <span className="text-sm text-gray-800 font-medium">
                 Premium
                </span>
                <span className="text-xs text-gray-600">
                 6 months left
                </span>
               </div>
              </td>
              <td className="text-gray-800 font-medium">
               28 Mar, 2024
              </td>
              <td>
               <label className="switch switch-sm">
                <input checked="" type="checkbox" value="1"/>
               </label>
              </td>
              <td>
               <div className="flex justify-center">
                <a className="btn btn-link" href="">
                 Download
                </a>
               </div>
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
            <span data-datatable-info="true">
            </span>
            <div className="pagination" data-datatable-pagination="true">
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
       <div className="card">
        <div className="card-header">
         <h3 className="card-title">
          FAQ
         </h3>
        </div>
        <div className="card-body py-3">
         <div data-accordion="true" data-accordion-expand-all="true">
          <div className="accordion-item [&:not(:last-child)]:border-b border-b-gray-200" data-accordion-item="true">
           <button className="accordion-toggle py-4" data-accordion-toggle="#faq_1_content">
            <span className="text-base text-gray-900">
             How is pricing determined for each plan ?
            </span>
            <i className="ki-filled ki-plus text-gray-600 text-sm accordion-active:hidden block">
            </i>
            <i className="ki-filled ki-minus text-gray-600 text-sm accordion-active:block hidden">
            </i>
           </button>
           <div className="accordion-content hidden" id="faq_1_content">
            <div className="text-gray-700 text-md pb-4">
             Metronic embraces flexible licensing options that empower you to choose the perfect fit for your projects needs and budget. 
			Understanding the factors influencing each plans pricing helps you make an informed decision. 
			Metronic embraces flexible licensing options that empower you to choose the perfect fit for your projects needs and budget. 
			Understanding the factors influencing each plans pricing helps you make an informed decision.
			Metronic embraces flexible licensing options that empower you to choose the perfect fit for your projects needs and budget. 
			Understanding the factors influencing each plans pricing helps you make an informed decision
            </div>
           </div>
          </div>
          <div className="accordion-item [&:not(:last-child)]:border-b border-b-gray-200" data-accordion-item="true">
           <button className="accordion-toggle py-4" data-accordion-toggle="#faq_2_content">
            <span className="text-base text-gray-900">
             What payment methods are accepted for subscriptions ?
            </span>
            <i className="ki-filled ki-plus text-gray-600 text-sm accordion-active:hidden block">
            </i>
            <i className="ki-filled ki-minus text-gray-600 text-sm accordion-active:block hidden">
            </i>
           </button>
           <div className="accordion-content hidden" id="faq_2_content">
            <div className="text-gray-700 text-md pb-4">
             Metronic embraces flexible licensing options that empower you to choose the perfect fit for your projects needs and budget. 
			Understanding the factors influencing each plans pricing helps you make an informed decision
            </div>
           </div>
          </div>
          <div className="accordion-item [&:not(:last-child)]:border-b border-b-gray-200" data-accordion-item="true">
           <button className="accordion-toggle py-4" data-accordion-toggle="#faq_3_content">
            <span className="text-base text-gray-900">
             Are there any hidden fees in the pricing ?
            </span>
            <i className="ki-filled ki-plus text-gray-600 text-sm accordion-active:hidden block">
            </i>
            <i className="ki-filled ki-minus text-gray-600 text-sm accordion-active:block hidden">
            </i>
           </button>
           <div className="accordion-content hidden" id="faq_3_content">
            <div className="text-gray-700 text-md pb-4">
             Metronic embraces flexible licensing options that empower you to choose the perfect fit for your projects needs and budget. 
			Understanding the factors influencing each plans pricing helps you make an informed decision
            </div>
           </div>
          </div>
          <div className="accordion-item [&:not(:last-child)]:border-b border-b-gray-200" data-accordion-item="true">
           <button className="accordion-toggle py-4" data-accordion-toggle="#faq_4_content">
            <span className="text-base text-gray-900">
             Is there a discount for annual subscriptions ?
            </span>
            <i className="ki-filled ki-plus text-gray-600 text-sm accordion-active:hidden block">
            </i>
            <i className="ki-filled ki-minus text-gray-600 text-sm accordion-active:block hidden">
            </i>
           </button>
           <div className="accordion-content hidden" id="faq_4_content">
            <div className="text-gray-700 text-md pb-4">
             Metronic embraces flexible licensing options that empower you to choose the perfect fit for your projects needs and budget. 
			Understanding the factors influencing each plans pricing helps you make an informed decision
            </div>
           </div>
          </div>
          <div className="accordion-item [&:not(:last-child)]:border-b border-b-gray-200" data-accordion-item="true">
           <button className="accordion-toggle py-4" data-accordion-toggle="#faq_5_content">
            <span className="text-base text-gray-900">
             Do you offer refunds on subscription cancellations ?
            </span>
            <i className="ki-filled ki-plus text-gray-600 text-sm accordion-active:hidden block">
            </i>
            <i className="ki-filled ki-minus text-gray-600 text-sm accordion-active:block hidden">
            </i>
           </button>
           <div className="accordion-content hidden" id="faq_5_content">
            <div className="text-gray-700 text-md pb-4">
             Metronic embraces flexible licensing options that empower you to choose the perfect fit for your projects needs and budget. 
			Understanding the factors influencing each plans pricing helps you make an informed decision
            </div>
           </div>
          </div>
          <div className="accordion-item [&:not(:last-child)]:border-b border-b-gray-200" data-accordion-item="true">
           <button className="accordion-toggle py-4" data-accordion-toggle="#faq_6_content">
            <span className="text-base text-gray-900">
             Can I add extra features to my current plan ?
            </span>
            <i className="ki-filled ki-plus text-gray-600 text-sm accordion-active:hidden block">
            </i>
            <i className="ki-filled ki-minus text-gray-600 text-sm accordion-active:block hidden">
            </i>
           </button>
           <div className="accordion-content hidden" id="faq_6_content">
            <div className="text-gray-700 text-md pb-4">
             Metronic embraces flexible licensing options that empower you to choose the perfect fit for your projects needs and budget. 
			Understanding the factors influencing each plans pricing helps you make an informed decision
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
       <div className="grid lg:grid-cols-2 gap-5 lg:gap-7.5">
        <div className="card">
         <div className="card-body px-10 py-7.5 lg:pr-12.5">
          <div className="flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-10">
           <div className="flex flex-col items-start gap-3">
            <h2 className="text-1.5xl font-medium text-gray-900">
             Questions ?
            </h2>
            <p className="text-sm text-gray-800 leading-5.5 mb-2.5">
             Visit our Help Center for detailed assistance on billing, payments, and subscriptions.
            </p>
           </div>
           <img alt="image" className="dark:hidden max-h-[150px]" src="media/illustrations/29.svg"/>
           <img alt="image" className="light:hidden max-h-[150px]" src="media/illustrations/29-dark.svg"/>
          </div>
         </div>
         <div className="card-footer justify-center">
          <a className="btn btn-link" href="">
           Go to Help Center
          </a>
         </div>
        </div>
        <div className="card">
         <div className="card-body px-10 py-7.5 lg:pr-12.5">
          <div className="flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-10">
           <div className="flex flex-col items-start gap-3">
            <h2 className="text-1.5xl font-medium text-gray-900">
             Contact Support
            </h2>
            <p className="text-sm text-gray-800 leading-5.5 mb-2.5">
             Need assistance? Contact our support team for prompt, personalized help your queries & concerns.
            </p>
           </div>
           <img alt="image" className="dark:hidden max-h-[150px]" src="media/illustrations/31.svg"/>
           <img alt="image" className="light:hidden max-h-[150px]" src="media/illustrations/31-dark.svg"/>
          </div>
         </div>
         <div className="card-footer justify-center">
          <a className="btn btn-link" href="">
           Contact Support
          </a>
         </div>
        </div>
       </div>
      </div>
     </div>
    </main>
    );
}
