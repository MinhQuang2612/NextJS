import React from "react";

interface HeaderProps {
  onLogout: () => void,
  user: any
}

export default function Header({ onLogout, user }: HeaderProps) {
  return (
    <header className="header fixed top-0 z-10 start-0 end-0 flex items-stretch shrink-0 bg-[--tw-page-bg] dark:bg-[--tw-page-bg-dark]" data-sticky="true" data-sticky-class="shadow-sm" data-sticky-name="header" id="header">

      <div className="container-fluid flex justify-between items-stretch lg:gap-4" id="header_container">

        <div className="flex gap-1 lg:hidden items-center -ms-1">
          <a className="shrink-0" href="html/demo1.html">
            <img className="max-h-[25px] w-full" src="media/app/mini-logo.svg" />
          </a>
          <div className="flex items-center">
            <button className="btn btn-icon btn-light btn-clear btn-sm" data-drawer-toggle="#sidebar">
              <i className="ki-filled ki-menu">
              </i>
            </button>
            <button className="btn btn-icon btn-light btn-clear btn-sm" data-drawer-toggle="#mega_menu_wrapper">
              <i className="ki-filled ki-burger-menu-2">
              </i>
            </button>
          </div>
        </div>

        <div className="flex items-stretch" id="mega_menu_container">

          <div className="flex items-stretch" data-reparent="true" data-reparent-mode="prepend|lg:prepend" data-reparent-target="body|lg:#mega_menu_container">

            <div className="hidden lg:flex lg:items-stretch" data-drawer="true" data-drawer-class="drawer drawer-start fixed z-10 top-0 bottom-0 w-full me-5 max-w-[250px] p-5 lg:p-0 overflow-auto" data-drawer-enable="true|lg:false" id="mega_menu_wrapper">

              <div className="menu flex-col lg:flex-row gap-5 lg:gap-7.5" data-menu="true" id="mega_menu">

                

              </div>

            </div>

          </div>

        </div>

        <div className="flex items-center gap-2 lg:gap-3.5">
          <div className="menu" data-menu="true">
            <div className="menu-item" data-menu-item-offset="20px, 10px" data-menu-item-offset-rtl="-20px, 10px" data-menu-item-placement="bottom-end" data-menu-item-placement-rtl="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">
              <div className="menu-toggle btn btn-icon rounded-full">
                <img alt="" className="size-9 rounded-full border-2 border-success shrink-0" src={user?.avatar} />

              </div>
              <div className="menu-dropdown menu-default light:border-gray-300 w-screen max-w-[250px]">
                <div className="flex items-center justify-between px-5 py-1.5 gap-1.5">
                  <div className="flex items-center gap-2">
                    <img alt="" className="size-9 rounded-full border-2 border-success" src={user?.avatar} />
                    <div className="flex flex-col gap-1.5">
                      <span className="text-sm text-gray-800 font-semibold leading-none">
                        {user?.name}
                      </span>
                      <a className="text-xs text-gray-600 hover:text-primary font-medium leading-none" href="html/demo1/account/home/get-started.html">
                        c.fisher@gmail.com
                      </a>
                    </div>

                  </div>
                  <span className="badge badge-xs badge-primary badge-outline">
                    Pro
                  </span>
                </div>
                <div className="menu-separator">
                </div>
                <div className="flex flex-col">
                  <div className="menu-item">
                    <a className="menu-link" href="html/demo1/public-profile/profiles/default.html">
                      <span className="menu-icon">
                        <i className="ki-filled ki-badge">
                        </i>
                      </span>
                      <span className="menu-title">
                        Thông tin tài khoản
                      </span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link" href="html/demo1/account/home/user-profile.html">
                      <span className="menu-icon">
                        <i className="ki-filled ki-profile-circle">
                        </i>
                      </span>
                      <span className="menu-title">
                        Đổi mật khẩu
                      </span>
                    </a>
                  </div>
                 
                </div>
                <div className="menu-separator">
                </div>
                <div className="flex flex-col">
                  <div className="menu-item mb-0.5">
                    <div className="menu-link">
                      <span className="menu-icon">
                        <i className="ki-filled ki-moon">
                        </i>
                      </span>
                      <span className="menu-title">
                        Dark Mode
                      </span>
                      <label className="switch switch-sm">
                        <input data-theme-state="dark" data-theme-toggle="true" name="check" type="checkbox" value="1" />

                      </label>
                    </div>
                  </div>
                  <div className="menu-item px-4 py-1.5">
                    <button
                      className="btn btn-sm btn-light justify-center"
                      onClick={onLogout} 
                    >
                      Log out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </header>
  );
}