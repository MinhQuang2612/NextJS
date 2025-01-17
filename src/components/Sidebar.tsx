import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  
    return (
        <div className="sidebar dark:bg-coal-600 bg-light border-e border-e-gray-200 dark:border-e-coal-100 fixed top-0 bottom-0 z-20 hidden lg:flex flex-col items-stretch shrink-0" data-drawer="true" data-drawer-class="drawer drawer-start top-0 bottom-0" data-drawer-enable="true|lg:false" id="sidebar">
        <div className="sidebar-header hidden lg:flex items-center relative justify-between px-3 lg:px-6 shrink-0" id="sidebar_header">
          <a className="dark:hidden" href="html/demo1.html">
            <img className="default-logo min-h-[22px] max-w-none" src="media/app/default-logo.svg" />
            <img className="small-logo min-h-[22px] max-w-none" src="media/app/mini-logo.svg" />
          </a>
          <a className="hidden dark:block" href="html/demo1.html">
            <img className="default-logo min-h-[22px] max-w-none" src="media/app/default-logo-dark.svg" />
            <img className="small-logo min-h-[22px] max-w-none" src="media/app/mini-logo.svg" />
          </a>
          <button className="btn btn-icon btn-icon-md size-[30px] rounded-lg border border-gray-200 dark:border-gray-300 bg-light text-gray-500 hover:text-gray-700 toggle absolute start-full top-2/4 -translate-x-2/4 -translate-y-2/4 rtl:translate-x-2/4" data-toggle="body" data-toggle-class="sidebar-collapse" id="sidebar_toggle">
            <i className="ki-filled ki-black-left-line toggle-active:rotate-180 transition-all duration-300 rtl:translate rtl:rotate-180 rtl:toggle-active:rotate-0">
            </i>
          </button>
        </div>
        <div className="sidebar-content flex grow shrink-0 py-5 pe-2" id="sidebar_content">
          <div className="scrollable-y-hover grow shrink-0 flex ps-2 lg:ps-5 pe-1 lg:pe-3" data-scrollable="true" data-scrollable-dependencies="#sidebar_header" data-scrollable-height="auto" data-scrollable-offset="0px" data-scrollable-wrappers="#sidebar_content" id="sidebar_scrollable">
            <div className="menu flex flex-col grow gap-0.5" data-menu="true" data-menu-accordion-expand-all="false" id="sidebar_menu">
              <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <Link href="/dashboard" className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]" tabIndex={0}>
                  <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                    <i className="ki-filled ki-element-11 text-lg">
                    </i>
                  </span>
                  <span className="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                    Trang chủ
                  </span>
              
                </Link>
                
              </div>
              <div className="menu-item pt-2.25 pb-px">
                <span className="menu-heading uppercase text-2sm font-medium text-gray-500 ps-[10px] pe-[10px]">
                  SMS BRANDNAME
                </span>
              </div>
              <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <Link href="/brandname" className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]" tabIndex={0}>
                  <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                    <i className="ki-filled ki-profile-circle text-lg">
                    </i>
                  </span>
                  <span className="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                    Quản lý Brandname
                  </span>
                  
                </Link>
               
              </div>
              <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <Link href="/template" className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]" tabIndex={0}>
                  <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                    <i className="ki-filled ki-setting-2 text-lg">
                    </i>
                  </span>
                  <span className="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                    Quản lý mẫu tin
                  </span>
                  
                </Link>
                
              </div>
              <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <Link href="/campaign" className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]" tabIndex={0}>
                  <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                    <i className="ki-filled ki-users text-lg">
                    </i>
                  </span>
                  <span className="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                    Quản lý chiến dịch
                  </span>
                  
                </Link>
               
              </div>
              <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <div className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]" tabIndex={0}>
                  <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                    <i className="ki-filled ki-security-user text-lg">
                    </i>
                  </span>
                  <span className="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                    Gửi tin nhắn cơ bản
                  </span>
                  
                </div>
              </div>
        
              <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <div className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]" tabIndex={0}>
                  <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                    <i className="ki-filled ki-security-user text-lg">
                    </i>
                  </span>
                  <span className="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                    Gửi tin nhắn nâng cao
                  </span>
                  
                </div>
              </div>
              <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <div className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]" tabIndex={0}>
                  <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                    <i className="ki-filled ki-security-user text-lg">
                    </i>
                  </span>
                  <span className="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                    Tra cứu tin nhắn
                  </span>
                  
                </div>
              </div>
        
            </div>

          </div>
        </div>
      </div>
    );
}

