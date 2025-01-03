export default function Sidebar() {
    return (
        <div className="sidebar dark:bg-coal-600 bg-light border-e border-e-gray-200 dark:border-e-coal-100 fixed top-0 bottom-0 z-20 hidden lg:flex flex-col items-stretch shrink-0" data-drawer="true" data-drawer-className="drawer drawer-start top-0 bottom-0" data-drawer-enable="true|lg:false" id="sidebar">
        <div className="sidebar-header hidden lg:flex items-center relative justify-between px-3 lg:px-6 shrink-0" id="sidebar_header">
          <a className="dark:hidden" href="html/demo1.html">
            <img className="default-logo min-h-[22px] max-w-none" src="assets/media/app/default-logo.svg" />
            <img className="small-logo min-h-[22px] max-w-none" src="assets/media/app/mini-logo.svg" />
          </a>
          <a className="hidden dark:block" href="html/demo1.html">
            <img className="default-logo min-h-[22px] max-w-none" src="assets/media/app/default-logo-dark.svg" />
            <img className="small-logo min-h-[22px] max-w-none" src="assets/media/app/mini-logo.svg" />
          </a>
          <button className="btn btn-icon btn-icon-md size-[30px] rounded-lg border border-gray-200 dark:border-gray-300 bg-light text-gray-500 hover:text-gray-700 toggle absolute start-full top-2/4 -translate-x-2/4 -translate-y-2/4 rtl:translate-x-2/4" data-toggle="body" data-toggle-className="sidebar-collapse" id="sidebar_toggle">
            <i className="ki-filled ki-black-left-line toggle-active:rotate-180 transition-all duration-300 rtl:translate rtl:rotate-180 rtl:toggle-active:rotate-0">
            </i>
          </button>
        </div>
        <div className="sidebar-content flex grow shrink-0 py-5 pe-2" id="sidebar_content">
          <div className="scrollable-y-hover grow shrink-0 flex ps-2 lg:ps-5 pe-1 lg:pe-3" data-scrollable="true" data-scrollable-dependencies="#sidebar_header" data-scrollable-height="auto" data-scrollable-offset="0px" data-scrollable-wrappers="#sidebar_content" id="sidebar_scrollable">
            <div className="menu flex flex-col grow gap-0.5" data-menu="true" data-menu-accordion-expand-all="false" id="sidebar_menu">
              <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <div className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]" tabIndex={0}>
                  <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                    <i className="ki-filled ki-element-11 text-lg">
                    </i>
                  </span>
                  <span className="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                    Dashboards
                  </span>
                  <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                    <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                    </i>
                    <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                    </i>
                  </span>
                </div>
                <div className="menu-accordion gap-0.5 ps-[10px] relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-gray-200">
                  <div className="menu-item">
                    <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1.html" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        Light Sidebar
                      </span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/dashboards/dark-sidebar.html" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        Dark Sidebar
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="menu-item pt-2.25 pb-px">
                <span className="menu-heading uppercase text-2sm font-medium text-gray-500 ps-[10px] pe-[10px]">
                  User
                </span>
              </div>
              <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <div className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]" tabIndex={0}>
                  <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                    <i className="ki-filled ki-profile-circle text-lg">
                    </i>
                  </span>
                  <span className="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                    Public Profile
                  </span>
                  <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                    <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                    </i>
                    <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                    </i>
                  </span>
                </div>
                <div className="menu-accordion gap-0.5 ps-[10px] relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-gray-200">
                  <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                    <div className="menu-link border border-transparent grow cursor-pointer gap-[14px] ps-[10px] pe-[10px] py-[8px]" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal me-1 text-gray-800 menu-item-active:text-primary menu-item-active:font-medium menu-link-hover:!text-primary">
                        Profiles
                      </span>
                      <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                        <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                        </i>
                        <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                        </i>
                      </span>
                    </div>
                    <div className="menu-accordion gap-0.5 relative before:absolute before:start-[32px] ps-[22px] before:top-0 before:bottom-0 before:border-s before:border-gray-200">
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/public-profile/profiles/default.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Default
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/public-profile/profiles/creator.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Creator
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/public-profile/profiles/company.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Company
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/public-profile/profiles/nft.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            NFT
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/public-profile/profiles/blogger.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Blogger
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/public-profile/profiles/crm.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            CRM
                          </span>
                        </a>
                      </div>
                      <div className="menu-item flex-col-reverse" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                        <div className="menu-link border border-transparent grow cursor-pointer gap-[5px] ps-[10px] pe-[10px] py-[8px]" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-600 dark:text-gray-500">
                            <span className="hidden menu-item-show:!flex">
                              Show less
                            </span>
                            <span className="flex menu-item-show:hidden">
                              Show 4 more
                            </span>
                          </span>
                          <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                            <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                            </i>
                            <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                            </i>
                          </span>
                        </div>
                        <div className="menu-accordion gap-0.5">
                          <div className="menu-item">
                            <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/public-profile/profiles/gamer.html" tabIndex={0}>
                              <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                              </span>
                              <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                                Gamer
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/public-profile/profiles/feeds.html" tabIndex={0}>
                              <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                              </span>
                              <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                                Feeds
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/public-profile/profiles/plain.html" tabIndex={0}>
                              <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                              </span>
                              <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                                Plain
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/public-profile/profiles/modal.html" tabIndex={0}>
                              <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                              </span>
                              <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                                Modal
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                    <div className="menu-link border border-transparent grow cursor-pointer gap-[14px] ps-[10px] pe-[10px] py-[8px]" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal me-1 text-gray-800 menu-item-active:text-primary menu-item-active:font-medium menu-link-hover:!text-primary">
                        Projects
                      </span>
                      <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                        <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                        </i>
                        <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                        </i>
                      </span>
                    </div>
                    <div className="menu-accordion gap-0.5 relative before:absolute before:start-[32px] ps-[22px] before:top-0 before:bottom-0 before:border-s before:border-gray-200">
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/public-profile/projects/3-columns.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            3 Columns
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/public-profile/projects/2-columns.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            2 Columns
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/public-profile/works.html" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        Works
                      </span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/public-profile/teams.html" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        Teams
                      </span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/public-profile/network.html" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        Network
                      </span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/public-profile/activity.html" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        Activity
                      </span>
                    </a>
                  </div>
                  <div className="menu-item flex-col-reverse" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                    <div className="menu-link border border-transparent grow cursor-pointer gap-[14px] ps-[10px] pe-[10px] py-[8px]" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal text-gray-600 dark:text-gray-500">
                        <span className="hidden menu-item-show:!flex">
                          Show less
                        </span>
                        <span className="flex menu-item-show:hidden">
                          Show 3 more
                        </span>
                      </span>
                      <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                        <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                        </i>
                        <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                        </i>
                      </span>
                    </div>
                    <div className="menu-accordion gap-0.5">
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/public-profile/campaigns/card.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Campaigns - Card
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/public-profile/campaigns/list.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Campaigns - List
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/public-profile/empty.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Empty
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <div className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]" tabIndex={0}>
                  <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                    <i className="ki-filled ki-setting-2 text-lg">
                    </i>
                  </span>
                  <span className="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                    My Account
                  </span>
                  <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                    <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                    </i>
                    <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                    </i>
                  </span>
                </div>
                <div className="menu-accordion gap-0.5 ps-[10px] relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-gray-200">
                  <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                    <div className="menu-link border border-transparent grow cursor-pointer gap-[14px] ps-[10px] pe-[10px] py-[8px]" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal me-1 text-gray-800 menu-item-active:text-primary menu-item-active:font-medium menu-link-hover:!text-primary">
                        Account Home
                      </span>
                      <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                        <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                        </i>
                        <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                        </i>
                      </span>
                    </div>
                    <div className="menu-accordion gap-0.5 relative before:absolute before:start-[32px] ps-[22px] before:top-0 before:bottom-0 before:border-s before:border-gray-200">
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/home/get-started.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Get Started
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/home/user-profile.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            User Profile
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/home/company-profile.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Company Profile
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/home/settings-sidebar.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Settings - With Sidebar
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/home/settings-enterprise.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Settings - Enterprise
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/home/settings-plain.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Settings - Plain
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/home/settings-modal.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Settings - Modal
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                    <div className="menu-link border border-transparent grow cursor-pointer gap-[14px] ps-[10px] pe-[10px] py-[8px]" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal me-1 text-gray-800 menu-item-active:text-primary menu-item-active:font-medium menu-link-hover:!text-primary">
                        Billing
                      </span>
                      <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                        <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                        </i>
                        <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                        </i>
                      </span>
                    </div>
                    <div className="menu-accordion gap-0.5 relative before:absolute before:start-[32px] ps-[22px] before:top-0 before:bottom-0 before:border-s before:border-gray-200">
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/billing/basic.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Billing - Basic
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/billing/enterprise.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Billing - Enterprise
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/billing/plans.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Plans
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/billing/history.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Billing History
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                    <div className="menu-link border border-transparent grow cursor-pointer gap-[14px] ps-[10px] pe-[10px] py-[8px]" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal me-1 text-gray-800 menu-item-active:text-primary menu-item-active:font-medium menu-link-hover:!text-primary">
                        Security
                      </span>
                      <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                        <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                        </i>
                        <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                        </i>
                      </span>
                    </div>
                    <div className="menu-accordion gap-0.5 relative before:absolute before:start-[32px] ps-[22px] before:top-0 before:bottom-0 before:border-s before:border-gray-200">
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/security/get-started.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Get Started
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/security/overview.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Security Overview
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/security/allowed-ip-addresses.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Allowed IP Addresses
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/security/privacy-settings.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Privacy Settings
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/security/device-management.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Device Management
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/security/backup-and-recovery.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Backup & Recovery
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/security/current-sessions.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Current Sessions
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/security/security-log.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Security Log
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                    <div className="menu-link border border-transparent grow cursor-pointer gap-[14px] ps-[10px] pe-[10px] py-[8px]" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal me-1 text-gray-800 menu-item-active:text-primary menu-item-active:font-medium menu-link-hover:!text-primary">
                        Members & Roles
                      </span>
                      <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                        <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                        </i>
                        <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                        </i>
                      </span>
                    </div>
                    <div className="menu-accordion gap-0.5 relative before:absolute before:start-[32px] ps-[22px] before:top-0 before:bottom-0 before:border-s before:border-gray-200">
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/members/team-starter.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Teams Starter
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/members/teams.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Teams
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/members/team-info.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Team Info
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/members/members-starter.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Members Starter
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/members/team-members.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Team Members
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/members/import-members.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Import Members
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/members/roles.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Roles
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/members/permissions-toggle.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Permissions - Toggler
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/members/permissions-check.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Permissions - Check
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/integrations.html" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        Integrations
                      </span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/notifications.html" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        Notifications
                      </span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/api-keys.html" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        API Keys
                      </span>
                    </a>
                  </div>
                  <div className="menu-item flex-col-reverse" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                    <div className="menu-link border border-transparent grow cursor-pointer gap-[14px] ps-[10px] pe-[10px] py-[8px]" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal text-gray-600 dark:text-gray-500">
                        <span className="hidden menu-item-show:!flex">
                          Show less
                        </span>
                        <span className="flex menu-item-show:hidden">
                          Show 3 more
                        </span>
                      </span>
                      <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                        <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                        </i>
                        <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                        </i>
                      </span>
                    </div>
                    <div className="menu-accordion gap-0.5">
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/appearance.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Appearance
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/invite-a-friend.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Invite a Friend
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/account/activity.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Activity
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <div className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]" tabIndex={0}>
                  <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                    <i className="ki-filled ki-users text-lg">
                    </i>
                  </span>
                  <span className="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                    Network
                  </span>
                  <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                    <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                    </i>
                    <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                    </i>
                  </span>
                </div>
                <div className="menu-accordion gap-0.5 ps-[10px] relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-gray-200">
                  <div className="menu-item">
                    <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/network/get-started.html" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        Get Started
                      </span>
                    </a>
                  </div>
                  <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                    <div className="menu-link border border-transparent grow cursor-pointer gap-[14px] ps-[10px] pe-[10px] py-[8px]" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal me-1 text-gray-800 menu-item-active:text-primary menu-item-active:font-medium menu-link-hover:!text-primary">
                        User Cards
                      </span>
                      <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                        <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                        </i>
                        <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                        </i>
                      </span>
                    </div>
                    <div className="menu-accordion gap-0.5 relative before:absolute before:start-[32px] ps-[22px] before:top-0 before:bottom-0 before:border-s before:border-gray-200">
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/network/user-cards/mini-cards.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Mini Cards
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/network/user-cards/team-crew.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Team Crew
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/network/user-cards/author.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Author
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/network/user-cards/nft.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            NFT
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/network/user-cards/social.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Social
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                    <div className="menu-link border border-transparent grow cursor-pointer gap-[14px] ps-[10px] pe-[10px] py-[8px]" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal me-1 text-gray-800 menu-item-active:text-primary menu-item-active:font-medium menu-link-hover:!text-primary">
                        User Table
                      </span>
                      <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                        <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                        </i>
                        <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                        </i>
                      </span>
                    </div>
                    <div className="menu-accordion gap-0.5 relative before:absolute before:start-[32px] ps-[22px] before:top-0 before:bottom-0 before:border-s before:border-gray-200">
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/network/user-table/team-crew.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Team Crew
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/network/user-table/app-roster.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            App Roster
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/network/user-table/market-authors.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Market Authors
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/network/user-table/saas-users.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            SaaS Users
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/network/user-table/store-clients.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Store Clients
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/network/user-table/visitors.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Visitors
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-label border border-transparent items-center grow gap-[14px] pe-[10px] py-[8px]" href="#" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal text-gray-800">
                        Cooperations
                      </span>
                      <span className="menu-badge me-[-10px]">
                        <span className="badge badge-xs">
                          Soon
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-label border border-transparent items-center grow gap-[14px] pe-[10px] py-[8px]" href="#" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal text-gray-800">
                        Leads
                      </span>
                      <span className="menu-badge me-[-10px]">
                        <span className="badge badge-xs">
                          Soon
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-label border border-transparent items-center grow gap-[14px] pe-[10px] py-[8px]" href="#" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal text-gray-800">
                        Donators
                      </span>
                      <span className="menu-badge me-[-10px]">
                        <span className="badge badge-xs">
                          Soon
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <div className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]" tabIndex={0}>
                  <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                    <i className="ki-filled ki-security-user text-lg">
                    </i>
                  </span>
                  <span className="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                    Authentication
                  </span>
                  <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                    <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                    </i>
                    <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                    </i>
                  </span>
                </div>
                <div className="menu-accordion gap-0.5 ps-[10px] relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-gray-200">
                  <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                    <div className="menu-link border border-transparent grow cursor-pointer gap-[14px] ps-[10px] pe-[10px] py-[8px]" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal me-1 text-gray-800 menu-item-active:text-primary menu-item-active:font-medium menu-link-hover:!text-primary">
                        classNameic
                      </span>
                      <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                        <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                        </i>
                        <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                        </i>
                      </span>
                    </div>
                    <div className="menu-accordion gap-0.5 relative before:absolute before:start-[32px] ps-[22px] before:top-0 before:bottom-0 before:border-s before:border-gray-200">
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/authentication/classNameic/sign-in.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Sign In
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/authentication/classNameic/sign-up.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Sign Up
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/authentication/classNameic/2fa.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            2FA
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/authentication/classNameic/check-email.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Check Email
                          </span>
                        </a>
                      </div>
                      <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                        <div className="menu-link border border-transparent grow cursor-pointer gap-[5px] ps-[10px] pe-[10px] py-[8px]" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal me-1 text-gray-800 menu-item-active:text-primary menu-item-active:font-medium menu-link-hover:!text-primary">
                            Reset Password
                          </span>
                          <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                            <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                            </i>
                            <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                            </i>
                          </span>
                        </div>
                        <div className="menu-accordion gap-0.5 relative before:absolute before:start-[32px] ps-[22px] before:top-0 before:bottom-0 before:border-s before:border-gray-200">
                          <div className="menu-item">
                            <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/authentication/classNameic/reset-password/enter-email.html" tabIndex={0}>
                              <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                              </span>
                              <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                                Enter Email
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/authentication/classNameic/reset-password/check-email.html" tabIndex={0}>
                              <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                              </span>
                              <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                                Check Email
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/authentication/classNameic/reset-password/change-password.html" tabIndex={0}>
                              <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                              </span>
                              <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                                Change Password
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/authentication/classNameic/reset-password/password-changed.html" tabIndex={0}>
                              <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                              </span>
                              <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                                Password is Changed
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                    <div className="menu-link border border-transparent grow cursor-pointer gap-[14px] ps-[10px] pe-[10px] py-[8px]" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal me-1 text-gray-800 menu-item-active:text-primary menu-item-active:font-medium menu-link-hover:!text-primary">
                        Branded
                      </span>
                      <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                        <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                        </i>
                        <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                        </i>
                      </span>
                    </div>
                    <div className="menu-accordion gap-0.5 relative before:absolute before:start-[32px] ps-[22px] before:top-0 before:bottom-0 before:border-s before:border-gray-200">
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/authentication/branded/sign-in.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Sign In
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/authentication/branded/sign-up.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Sign Up
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/authentication/branded/2fa.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            2FA
                          </span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/authentication/branded/check-email.html" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            Check Email
                          </span>
                        </a>
                      </div>
                      <div className="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                        <div className="menu-link border border-transparent grow cursor-pointer gap-[5px] ps-[10px] pe-[10px] py-[8px]" tabIndex={0}>
                          <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span className="menu-title text-2sm font-normal me-1 text-gray-800 menu-item-active:text-primary menu-item-active:font-medium menu-link-hover:!text-primary">
                            Reset Password
                          </span>
                          <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                            <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                            </i>
                            <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                            </i>
                          </span>
                        </div>
                        <div className="menu-accordion gap-0.5 relative before:absolute before:start-[32px] ps-[22px] before:top-0 before:bottom-0 before:border-s before:border-gray-200">
                          <div className="menu-item">
                            <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/authentication/branded/reset-password/enter-email.html" tabIndex={0}>
                              <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                              </span>
                              <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                                Enter Email
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/authentication/branded/reset-password/check-email.html" tabIndex={0}>
                              <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                              </span>
                              <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                                Check Email
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/authentication/branded/reset-password/change-password.html" tabIndex={0}>
                              <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                              </span>
                              <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                                Change Password
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/authentication/branded/reset-password/password-changed.html" tabIndex={0}>
                              <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                              </span>
                              <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                                Password is Changed
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/authentication/welcome-message.html" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        Welcome Message
                      </span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/authentication/account-deactivated.html" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        Account Deactivated
                      </span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/authentication/error-404.html" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        Error 404
                      </span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" href="html/demo1/authentication/error-500.html" tabIndex={0}>
                      <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span className="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        Error 500
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="menu-item pt-2.25 pb-px">
                <span className="menu-heading uppercase text-2sm font-medium text-gray-500 ps-[10px] pe-[10px]">
                  Apps
                </span>
              </div>
              <div className="menu-item">
                <div className="menu-label border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]" href="" tabIndex={0}>
                  <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                    <i className="ki-filled ki-users text-lg">
                    </i>
                  </span>
                  <span className="menu-title text-sm font-medium text-gray-800">
                    User Management
                  </span>
                  <span className="menu-badge me-[-10px]">
                    <span className="badge badge-xs">
                      Soon
                    </span>
                  </span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-label border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]" href="" tabIndex={0}>
                  <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                    <i className="ki-filled ki-questionnaire-tablet text-lg">
                    </i>
                  </span>
                  <span className="menu-title text-sm font-medium text-gray-800">
                    Projects
                  </span>
                  <span className="menu-badge me-[-10px]">
                    <span className="badge badge-xs">
                      Soon
                    </span>
                  </span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-label border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]" href="" tabIndex={0}>
                  <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                    <i className="ki-filled ki-handcart text-lg">
                    </i>
                  </span>
                  <span className="menu-title text-sm font-medium text-gray-800">
                    eCommerce
                  </span>
                  <span className="menu-badge me-[-10px]">
                    <span className="badge badge-xs">
                      Soon
                    </span>
                  </span>
                </div>
              </div>
              <div className="menu-item pt-2.25 pb-px">
                <span className="menu-heading uppercase text-2sm font-medium text-gray-500 ps-[10px] pe-[10px]">
                  Miscellaneous
                </span>
              </div>
              <div className="menu-item">
                <div className="menu-label border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]" href="" tabIndex={0}>
                  <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                    <i className="ki-filled ki-some-files text-lg">
                    </i>
                  </span>
                  <span className="menu-title text-sm font-medium text-gray-800">
                    Modals
                  </span>
                  <span className="menu-badge me-[-10px]">
                    <span className="badge badge-xs">
                      Soon
                    </span>
                  </span>
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-label border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]" href="" tabIndex={0}>
                  <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                    <i className="ki-filled ki-note-2 text-lg">
                    </i>
                  </span>
                  <span className="menu-title text-sm font-medium text-gray-800">
                    Wizards
                  </span>
                  <span className="menu-badge me-[-10px]">
                    <span className="badge badge-xs">
                      Soon
                    </span>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
}
