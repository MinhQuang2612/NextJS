export default function Header() {
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

                    <div className="menu-item active">
                      <a className="menu-link text-nowrap text-sm text-gray-800 font-medium menu-item-hover:text-primary menu-item-active:text-gray-900 menu-item-active:font-medium" href="html/demo1.html">
                        <span className="menu-title text-nowrap">
                          Home
                        </span>
                      </a>
                    </div>

                    <div className="menu-item" data-menu-item-placement="bottom-start" data-menu-item-placement-rtl="bottom-end" data-menu-item-toggle="accordion|lg:dropdown" data-menu-item-trigger="click|lg:hover">
                      <div className="menu-link text-sm text-gray-800 menu-link-hover:text-primary menu-item-active:text-gray-900 menu-item-show:text-primary menu-item-here:text-gray-900 menu-item-active:font-medium menu-item-here:font-medium">
                        <span className="menu-title text-nowrap">
                          Profiles
                        </span>
                        <span className="menu-arrow flex lg:hidden">
                          <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                          </i>
                          <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                          </i>
                        </span>
                      </div>
                      <div className="menu-dropdown w-full gap-0 lg:max-w-[875px]">
                        <div className="pt-4 pb-2 lg:p-7.5">
                          <div className="grid lg:grid-cols-2 gap-5 lg:gap-10">
                            <div className="menu menu-default menu-fit flex-col">
                              <h3 className="text-sm text-gray-800 font-semibold leading-none ps-2.5 mb-2 lg:mb-5">
                                Profiles
                              </h3>
                              <div className="grid lg:grid-cols-2 lg:gap-5">
                                <div className="flex flex-col">
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/public-profile/profiles/default.html" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-badge">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Default
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/public-profile/profiles/creator.html" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-coffee">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Creator
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/public-profile/profiles/company.html" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-abstract-41">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Company
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/public-profile/profiles/nft.html" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-bitcoin">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        NFT
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/public-profile/profiles/blogger.html" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-message-text">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Blogger
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/public-profile/profiles/crm.html" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-devices">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        CRM
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/public-profile/profiles/gamer.html" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-ghost">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Gamer
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                <div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/public-profile/profiles/feeds.html" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-book">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Feeds
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/public-profile/profiles/plain.html" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-files">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Plain
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/public-profile/profiles/modal.html" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-mouse-square">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Modal
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="#" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-financial-schedule">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Freelancer
                                      </span>
                                      <span className="menu-badge">
                                        <span className="badge badge-xs">
                                          Soon
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="#" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-technology-4">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Developer
                                      </span>
                                      <span className="menu-badge">
                                        <span className="badge badge-xs">
                                          Soon
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="#" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-users">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Team
                                      </span>
                                      <span className="menu-badge">
                                        <span className="badge badge-xs">
                                          Soon
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="#" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-calendar-tick">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Events
                                      </span>
                                      <span className="menu-badge">
                                        <span className="badge badge-xs">
                                          Soon
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="menu menu-default menu-fit flex-col">
                              <h3 className="text-sm text-gray-800 font-semibold leading-none ps-2.5 mb-2 lg:mb-5">
                                Other Pages
                              </h3>
                              <div className="grid lg:grid-cols-2 lg:gap-5">
                                <div className="flex flex-col">
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/public-profile/projects/3-columns.html" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-element-6">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Projects - 3 Columns
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/public-profile/projects/2-columns.html" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-element-4">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Projects - 2 Columns
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/public-profile/works.html" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-office-bag">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Works
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/public-profile/teams.html" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-people">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Teams
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/public-profile/network.html" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-icon">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Network
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/public-profile/activity.html" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-chart-line-up-2">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Activity
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/public-profile/campaigns/card.html" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-element-11">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Campaigns - Card
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                <div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/public-profile/campaigns/list.html" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-kanban">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Campaigns - List
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/public-profile/empty.html" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-file-sheet">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Empty Page
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="#" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-document">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Documents
                                      </span>
                                      <span className="menu-badge">
                                        <span className="badge badge-xs">
                                          Soon
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="#" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-award">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Badges
                                      </span>
                                      <span className="menu-badge">
                                        <span className="badge badge-xs">
                                          Soon
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="#" tabIndex={0}>
                                      <span className="menu-icon">
                                        <i className="ki-filled ki-gift">
                                        </i>
                                      </span>
                                      <span className="menu-title grow-0">
                                        Awards
                                      </span>
                                      <span className="menu-badge">
                                        <span className="badge badge-xs">
                                          Soon
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center lg:justify-between rounded-xl lg:rounded-t-none bg-light-active dark:bg-coal-500 border border-gray-300 lg:border-0 lg:border-t lg:border-t-gray-300 dark:lg:border-t-gray-100 px-4 py-4 lg:px-7.5 lg:py-5 gap-2.5">
                          <div className="flex flex-col gap-1.5">
                            <div className="text-md font-semibold text-gray-900 leading-none">
                              Read to Get Started ?
                            </div>
                            <div className="text-2sm fomt-medium text-gray-600">
                              Take your docs to the next level of Metronic
                            </div>
                          </div>
                          <a className="btn btn-sm btn-dark" href="#">
                            Read Documentation
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="menu-item" data-menu-item-offset="-300px, 0" data-menu-item-offset-rtl="300px, 0" data-menu-item-overflow="true" data-menu-item-placement="bottom-start" data-menu-item-placement-rtl="bottom-end" data-menu-item-toggle="accordion|lg:dropdown" data-menu-item-trigger="click|lg:hover">
                      <div className="menu-link text-sm text-gray-700 font-medium menu-link-hover:text-primary menu-item-active:text-gray-900 menu-item-show:text-primary menu-item-here:text-gray-900 menu-item-active:font-semibold menu-item-here:font-semibold">
                        <span className="menu-title text-nowrap">
                          My Account
                        </span>
                        <span className="menu-arrow flex lg:hidden">
                          <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                          </i>
                          <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                          </i>
                        </span>
                      </div>
                      <div className="menu-dropdown flex-col lg:flex-row gap-0 w-full lg:max-w-[1240px]">
                        <div className="lg:w-[250px] mt-2 lg:mt-0 lg:border-r lg:border-r-gray-200 rounded-xl lg:rounded-l-xl lg:rounded-r-none shrink-0 px-3 py-4 lg:p-7.5 bg-light-active dark:bg-coal-500 dark:lg:border-r-coal-100">
                          <h3 className="text-sm text-gray-800 font-semibold leading-none ps-2.5 mb-2 lg:mb-5">
                            General Pages
                          </h3>
                          <div className="menu menu-default menu-fit flex-col">
                            <div className="menu-item">
                              <a className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100" href="html/demo1/account/integrations.html">
                                <span className="menu-icon">
                                  <i className="ki-filled ki-technology-2">
                                  </i>
                                </span>
                                <span className="menu-title grow-0">
                                  Integrations
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100" href="html/demo1/account/notifications.html">
                                <span className="menu-icon">
                                  <i className="ki-filled ki-notification-1">
                                  </i>
                                </span>
                                <span className="menu-title grow-0">
                                  Notifications
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100" href="html/demo1/account/api-keys.html">
                                <span className="menu-icon">
                                  <i className="ki-filled ki-key">
                                  </i>
                                </span>
                                <span className="menu-title grow-0">
                                  API Keys
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100" href="html/demo1/account/appearance.html">
                                <span className="menu-icon">
                                  <i className="ki-filled ki-eye">
                                  </i>
                                </span>
                                <span className="menu-title grow-0">
                                  Appearance
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100" href="html/demo1/account/invite-a-friend.html">
                                <span className="menu-icon">
                                  <i className="ki-filled ki-user-tick">
                                  </i>
                                </span>
                                <span className="menu-title grow-0">
                                  Invite a Friend
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100" href="html/demo1/account/activity.html">
                                <span className="menu-icon">
                                  <i className="ki-filled ki-support">
                                  </i>
                                </span>
                                <span className="menu-title grow-0">
                                  Activity
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100" href="#">
                                <span className="menu-icon">
                                  <i className="ki-filled ki-verify">
                                  </i>
                                </span>
                                <span className="menu-title grow-0">
                                  Brand
                                </span>
                                <span className="menu-badge">
                                  <span className="badge badge-xs">
                                    Soon
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100" href="#">
                                <span className="menu-icon">
                                  <i className="ki-filled ki-euro">
                                  </i>
                                </span>
                                <span className="menu-title grow-0">
                                  Get Paid
                                </span>
                                <span className="menu-badge">
                                  <span className="badge badge-xs">
                                    Soon
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="pt-4 pb-2 lg:p-7.5 lg:pb-5 grow">
                          <div className="grid lg:grid-cols-5 gap-5">
                            <div className="flex flex-col">
                              <h3 className="text-sm text-gray-800 font-semibold leading-none ps-2.5 mb-2 lg:mb-5">
                                Account Home
                              </h3>
                              <div className="menu menu-default menu-fit flex-col">
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/home/get-started.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Get Started
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/home/user-profile.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      User Profile
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/home/company-profile.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Company Profile
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/home/settings-sidebar.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      With Sidebar
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/home/settings-enterprise.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Enterprise
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/home/settings-plain.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Plain
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/home/settings-modal.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Modal
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <h3 className="text-sm text-gray-800 font-semibold leading-none ps-2.5 mb-2 lg:mb-5">
                                Billing
                              </h3>
                              <div className="menu menu-default menu-fit flex-col">
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/billing/basic.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Basic Billing
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/billing/enterprise.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Enterprise
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/billing/plans.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Plans
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/billing/history.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Billing History
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Tax Info
                                    </span>
                                    <span className="menu-badge">
                                      <span className="badge badge-xs">
                                        Soon
                                      </span>
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Invoices
                                    </span>
                                    <span className="menu-badge">
                                      <span className="badge badge-xs">
                                        Soon
                                      </span>
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="#" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Gateaways
                                    </span>
                                    <span className="menu-badge">
                                      <span className="badge badge-xs">
                                        Soon
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <h3 className="text-sm text-gray-800 font-semibold leading-none ps-2.5 mb-2 lg:mb-5">
                                Security
                              </h3>
                              <div className="menu menu-default menu-fit flex-col">
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/security/get-started.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Get Started
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/security/overview.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Security Overview
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/security/allowed-ip-addresses.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      IP Addresses
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/security/privacy-settings.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Privacy Settings
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/security/device-management.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Device Management
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/security/backup-and-recovery.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Backup & Recovery
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/security/current-sessions.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Current Sessions
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/security/security-log.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Security Log
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <h3 className="text-sm text-gray-800 font-semibold leading-none ps-2.5 mb-2 lg:mb-5">
                                Members & Roles
                              </h3>
                              <div className="menu menu-default menu-fit flex-col">
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/members/team-starter.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Teams Starter
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/members/teams.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Teams
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/members/team-info.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Team Info
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/members/members-starter.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Members Starter
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/members/team-members.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Team Members
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/members/import-members.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Import Members
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/members/roles.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Roles
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/members/permissions-toggle.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Persmissions - Toggler
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/members/permissions-check.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Persmissions - Check
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <h3 className="text-sm text-gray-800 font-semibold leading-none ps-2.5 mb-2 lg:mb-5">
                                Other Pages
                              </h3>
                              <div className="menu menu-default menu-fit flex-col">
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/integrations.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Integrations
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/notifications.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Notifications
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/api-keys.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      API Keys
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/appearance.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Appearance
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/invite-a-friend.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Invite a Friend
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link" href="html/demo1/account/activity.html" tabIndex={0}>
                                    <span className="menu-title grow-0">
                                      Activity
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="menu-item" data-menu-item-offset="-300px, 0" data-menu-item-offset-rtl="300px, 0" data-menu-item-overflow="true" data-menu-item-placement="bottom-start" data-menu-item-placement-rtl="bottom-end" data-menu-item-toggle="accordion|lg:dropdown" data-menu-item-trigger="click|lg:hover">
                      <div className="menu-link text-sm text-gray-700 font-medium menu-link-hover:text-primary menu-item-active:text-gray-900 menu-item-show:text-primary menu-item-here:text-gray-900 menu-item-active:font-semibold menu-item-here:font-semibold">
                        <span className="menu-title text-nowrap">
                          Network
                        </span>
                        <span className="menu-arrow flex lg:hidden">
                          <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                          </i>
                          <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                          </i>
                        </span>
                      </div>
                      <div className="menu-dropdown flex-col gap-0 w-full lg:max-w-[670px]">
                        <div className="flex flex-col lg:flex-row">
                          <div className="flex flex-col gap-5 lg:w-[250px] mt-2 lg:mt-0 lg:border-r lg:border-r-gray-200 rounded-xl lg:rounded-none lg:rounded-tl-xl shrink-0 px-3 py-4 lg:p-7.5 bg-light-active dark:bg-coal-500 dark:lg:border-r-coal-100">
                            <h3 className="text-sm text-gray-800 font-semibold leading-none ps-2.5 h-3.5">
                              General Pages
                            </h3>
                            <div className="menu menu-default menu-fit flex-col">
                              <div className="menu-item">
                                <a className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100" href="#">
                                  <span className="menu-icon">
                                    <i className="ki-filled ki-flag">
                                    </i>
                                  </span>
                                  <span className="menu-title grow-0">
                                    Get Started
                                  </span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100" href="#">
                                  <span className="menu-icon">
                                    <i className="ki-filled ki-users">
                                    </i>
                                  </span>
                                  <span className="menu-title grow-0">
                                    Colleagues
                                  </span>
                                  <span className="menu-badge">
                                    <span className="badge badge-xs">
                                      Soon
                                    </span>
                                  </span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100" href="#">
                                  <span className="menu-icon">
                                    <i className="ki-filled ki-heart">
                                    </i>
                                  </span>
                                  <span className="menu-title grow-0">
                                    Donators
                                  </span>
                                  <span className="menu-badge">
                                    <span className="badge badge-xs">
                                      Soon
                                    </span>
                                  </span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100" href="#">
                                  <span className="menu-icon">
                                    <i className="ki-filled ki-abstract-21">
                                    </i>
                                  </span>
                                  <span className="menu-title grow-0">
                                    Leads
                                  </span>
                                  <span className="menu-badge">
                                    <span className="badge badge-xs">
                                      Soon
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="pt-4 pb-2 lg:p-7.5 lg:pb-5 grow">
                            <div className="grid lg:grid-cols-2 gap-5">
                              <div className="flex flex-col gap-5">
                                <h3 className="flex items-center gap-1.5 text-sm text-gray-800 font-semibold leading-none ps-2.5 h-3.5">
                                  User Cards
                                </h3>
                                <div className="menu menu-default menu-fit flex-col">
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/network/user-cards/mini-cards.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Mini Cards
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/network/user-cards/team-crew.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Team Crew
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/network/user-cards/nft.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Authors
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/network/user-cards/social.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        NFT Users
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="#" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Social Users
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="#" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Gamers
                                      </span>
                                      <span className="menu-badge">
                                        <span className="badge badge-xs">
                                          Soon
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-5">
                                <h3 className="flex items-center gap-1.5 text-sm text-gray-800 font-semibold leading-none ps-2.5 h-3.5">
                                  User Base
                                  <span className="left-auto badge badge-xs badge-primary badge-outline">
                                    Datatables
                                  </span>
                                </h3>
                                <div className="menu menu-default menu-fit flex-col">
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/network/user-table/team-crew.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Team Crew
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/network/user-table/app-roster.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        App Roster
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/network/user-table/market-authors.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Market Authors
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/network/user-table/saas-users.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        SaaS Users
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/network/user-table/store-clients.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Store Clients
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/network/user-table/visitors.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Visitors
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center lg:justify-between rounded-xl lg:rounded-t-none bg-light-active dark:bg-coal-500 border border-gray-300 lg:border-0 lg:border-t lg:border-t-gray-300 dark:lg:border-t-gray-100 px-4 py-4 lg:px-7.5 lg:py-5 gap-2.5">
                          <div className="flex flex-col gap-1.5">
                            <div className="text-md font-semibold text-gray-900 leading-none">
                              Read to Get Started ?
                            </div>
                            <div className="text-2sm fomt-medium text-gray-600">
                              Take your docs to the next level of Metronic
                            </div>
                          </div>
                          <a className="btn btn-sm btn-dark" href="#">
                            Read Documentation
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="menu-item" data-menu-item-offset="-300px, 0" data-menu-item-offset-rtl="300px, 0" data-menu-item-overflow="true" data-menu-item-placement="bottom-start" data-menu-item-placement-rtl="bottom-end" data-menu-item-toggle="accordion|lg:dropdown" data-menu-item-trigger="click|lg:hover">
                      <div className="menu-link text-sm text-gray-700 font-medium menu-link-hover:text-primary menu-item-active:text-gray-900 menu-item-show:text-primary menu-item-here:text-gray-900 menu-item-active:font-semibold menu-item-here:font-semibold">
                        <span className="menu-title text-nowrap">
                          Authentication
                        </span>
                        <span className="menu-arrow flex lg:hidden">
                          <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                          </i>
                          <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                          </i>
                        </span>
                      </div>
                      <div className="menu-dropdown flex-col gap-0 w-full lg:max-w-[670px]">
                        <div className="flex flex-col lg:flex-row">
                          <div className="pt-4 pb-2 lg:p-7.5 lg:pb-5 grow">
                            <div className="grid lg:grid-cols-2 gap-5">
                              <div className="flex flex-col">
                                <h3 className="text-sm text-gray-800 font-semibold leading-none ps-2.5 mb-2 lg:mb-5">
                                  classNameic Layout
                                </h3>
                                <div className="menu menu-default menu-fit flex-col">
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/authentication/classNameic/sign-in.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Sign In
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/authentication/classNameic/sign-up.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Sign Up
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/authentication/classNameic/2fa.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        2FA
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/authentication/classNameic/check-email.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Check Email
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item pt-1">
                                    <span className="text-gray-600 font-medium text-2sm p-2.5">
                                      Reset Password
                                    </span>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/authentication/classNameic/reset-password/enter-email.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Enter Email
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/authentication/classNameic/reset-password/check-email.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Check Email
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/authentication/classNameic/reset-password/change-password.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Change Password
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/authentication/classNameic/reset-password/password-changed.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Password is Changed
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <h3 className="text-sm text-gray-800 font-semibold leading-none ps-2.5 mb-2 lg:mb-5">
                                  Branded Layout
                                </h3>
                                <div className="menu menu-default menu-fit flex-col">
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/authentication/branded/sign-in.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Sign In
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/authentication/branded/sign-up.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Sign Up
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/authentication/branded/2fa.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        2FA
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/authentication/branded/check-email.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Check Email
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item pt-1">
                                    <span className="text-gray-600 font-medium text-2sm p-2.5">
                                      Reset Password
                                    </span>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/authentication/branded/reset-password/enter-email.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Enter Email
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/authentication/branded/reset-password/check-email.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Check Email
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/authentication/branded/reset-password/change-password.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Change Password
                                      </span>
                                    </a>
                                  </div>
                                  <div className="menu-item">
                                    <a className="menu-link" href="html/demo1/authentication/branded/reset-password/password-changed.html" tabIndex={0}>
                                      <span className="menu-title grow-0">
                                        Password is Changed
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="lg:w-[250px] mb-4 lg:mb-0 lg:border-l lg:border-l-gray-200 rounded-xl lg:rounded-r-xl lg:rounded-l-none shrink-0 px-3 py-4 lg:p-7.5 bg-light-active dark:bg-coal-500 dark:lg:border-l-coal-100">
                            <h3 className="text-sm text-gray-800 font-semibold leading-none ps-2.5 mb-5">
                              Other Pages
                            </h3>
                            <div className="menu menu-default menu-fit flex-col">
                              <div className="menu-item">
                                <a className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100" href="html/demo1/authentication/welcome-message.html">
                                  <span className="menu-icon">
                                    <i className="ki-filled ki-like-2">
                                    </i>
                                  </span>
                                  <span className="menu-title grow-0">
                                    Welcome Message
                                  </span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100" href="html/demo1/authentication/account-deactivated.html">
                                  <span className="menu-icon">
                                    <i className="ki-filled ki-shield-cross">
                                    </i>
                                  </span>
                                  <span className="menu-title grow-0">
                                    Account Deactivated
                                  </span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100" href="html/demo1/authentication/error-404.html">
                                  <span className="menu-icon">
                                    <i className="ki-filled ki-message-question">
                                    </i>
                                  </span>
                                  <span className="menu-title grow-0">
                                    Error 404
                                  </span>
                                </a>
                              </div>
                              <div className="menu-item">
                                <a className="menu-link border border-transparent menu-link-hover:!bg-light menu-link-hover:border-gray-200 menu-item-active:!bg-light menu-item-active:border-gray-200 dark:menu-link-hover:!bg-coal-600 dark:menu-link-hover:border-gray-100 dark:menu-item-active:!bg-coal-600 dark:menu-item-active:border-gray-100" href="html/demo1/authentication/error-500.html">
                                  <span className="menu-icon">
                                    <i className="ki-filled ki-information">
                                    </i>
                                  </span>
                                  <span className="menu-title grow-0">
                                    Error 500
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center lg:justify-between rounded-xl lg:rounded-t-none bg-light-active dark:bg-coal-500 border border-gray-300 lg:border-0 lg:border-t lg:border-t-gray-300 dark:lg:border-t-gray-100 px-4 py-4 lg:px-7.5 lg:py-5 gap-2.5">
                          <div className="flex flex-col gap-1.5">
                            <div className="text-md font-semibold text-gray-900 leading-none">
                              Read to Get Started ?
                            </div>
                            <div className="text-2sm fomt-medium text-gray-600">
                              Take your docs to the next level of Metronic
                            </div>
                          </div>
                          <a className="btn btn-sm btn-dark" href="#">
                            Read Documentation
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="menu-item" data-menu-item-offset="0,0|lg:-20px, 0" data-menu-item-offset-rtl="0,0|lg:20px, 0" data-menu-item-overflow="true" data-menu-item-placement="bottom-start" data-menu-item-placement-rtl="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
                      <div className="menu-link text-sm text-gray-700 font-medium menu-link-hover:text-primary menu-item-active:text-gray-900 menu-item-show:text-primary menu-item-here:text-gray-900 menu-item-active:font-semibold menu-item-here:font-semibold">
                        <span className="menu-title text-nowrap">
                          Help
                        </span>
                        <span className="menu-arrow flex lg:hidden">
                          <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                          </i>
                          <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                          </i>
                        </span>
                      </div>
                      <div className="menu-dropdown menu-default py-2.5 w-full max-w-[220px]">
                        <div className="menu-item">
                          <a className="menu-link" href="https://keenthemes.com/metronic/tailwind/docs/getting-started/installation" tabIndex={0}>
                            <span className="menu-icon">
                              <i className="ki-filled ki-coffee">
                              </i>
                            </span>
                            <span className="menu-title grow-0">
                              Getting Started
                            </span>
                          </a>
                        </div>
                        <div className="menu-item" data-menu-item-placement="right-start" data-menu-item-placement-rtl="left-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
                          <div className="menu-link">
                            <span className="menu-icon">
                              <i className="ki-filled ki-information">
                              </i>
                            </span>
                            <span className="menu-title">
                              Support Forum
                            </span>
                            <span className="menu-arrow">
                              <i className="ki-filled ki-right text-3xs rtl:transform rtl:rotate-180">
                              </i>
                            </span>
                          </div>
                          <div className="menu-dropdown menu-default w-full max-w-[175px] lg:max-w-[220px]">
                            <div className="menu-item">
                              <a className="menu-link" href="https://devs.keenthemes.com" tabIndex={0}>
                                <span className="menu-icon">
                                  <i className="ki-filled ki-questionnaire-tablet">
                                  </i>
                                </span>
                                <span className="menu-title grow-0">
                                  All Questions
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="https://devs.keenthemes.com/popular" tabIndex={0}>
                                <span className="menu-icon">
                                  <i className="ki-filled ki-star">
                                  </i>
                                </span>
                                <span className="menu-title grow-0">
                                  Popular Questions
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="https://devs.keenthemes.com/question/create" tabIndex={0}>
                                <span className="menu-icon">
                                  <i className="ki-filled ki-message-question">
                                  </i>
                                </span>
                                <span className="menu-title grow-0">
                                  Ask Question
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="https://keenthemes.com/metronic/tailwind/docs/getting-started/license" tabIndex={0}>
                            <span className="menu-icon">
                              <i className="ki-filled ki-subtitle">
                              </i>
                            </span>
                            <span className="menu-title">
                              Licenses & FAQ
                            </span>
                            <span className="menu-badge" data-tooltip="#menu_tooltip_3">
                              <i className="ki-filled ki-information-2 text-gray-500 text-md">
                              </i>
                            </span>
                            <div className="tooltip" id="menu_tooltip_3">
                              Learn more about licenses
                            </div>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="https://keenthemes.com/metronic/tailwind/docs" tabIndex={0}>
                            <span className="menu-icon">
                              <i className="ki-filled ki-questionnaire-tablet">
                              </i>
                            </span>
                            <span className="menu-title grow-0">
                              Documentation
                            </span>
                          </a>
                        </div>
                        <div className="menu-separator">
                        </div>
                        <div className="menu-item">
                          <a className="menu-link" href="https://keenthemes.com/contact" tabIndex={0}>
                            <span className="menu-icon">
                              <i className="ki-filled ki-share">
                              </i>
                            </span>
                            <span className="menu-title grow-0">
                              Contact Us
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div className="flex items-center gap-2 lg:gap-3.5">
              <div className="menu" data-menu="true">
                <div className="menu-item" data-menu-item-offset="20px, 10px" data-menu-item-offset-rtl="-20px, 10px" data-menu-item-placement="bottom-end" data-menu-item-placement-rtl="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">
                  <div className="menu-toggle btn btn-icon rounded-full">
                    <img alt="" className="size-9 rounded-full border-2 border-success shrink-0" src="media/avatars/300-2.png" />

                  </div>
                  <div className="menu-dropdown menu-default light:border-gray-300 w-screen max-w-[250px]">
                    <div className="flex items-center justify-between px-5 py-1.5 gap-1.5">
                      <div className="flex items-center gap-2">
                        <img alt="" className="size-9 rounded-full border-2 border-success" src="media/avatars/300-2.png" />
                        <div className="flex flex-col gap-1.5">
                          <span className="text-sm text-gray-800 font-semibold leading-none">
                            Cody Fisher
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
                            Public Profile
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
                            My Profile
                          </span>
                        </a>
                      </div>
                      <div className="menu-item" data-menu-item-offset="-50px, 0" data-menu-item-placement="left-start" data-menu-item-placement-rtl="right-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
                        <div className="menu-link">
                          <span className="menu-icon">
                            <i className="ki-filled ki-setting-2">
                            </i>
                          </span>
                          <span className="menu-title">
                            My Account
                          </span>
                          <span className="menu-arrow">
                            <i className="ki-filled ki-right text-3xs rtl:transform rtl:rotate-180">
                            </i>
                          </span>
                        </div>
                        <div className="menu-dropdown menu-default light:border-gray-300 w-full max-w-[220px]">
                          <div className="menu-item">
                            <a className="menu-link" href="html/demo1/account/home/get-started.html">
                              <span className="menu-icon">
                                <i className="ki-filled ki-coffee">
                                </i>
                              </span>
                              <span className="menu-title">
                                Get Started
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="html/demo1/account/home/user-profile.html">
                              <span className="menu-icon">
                                <i className="ki-filled ki-some-files">
                                </i>
                              </span>
                              <span className="menu-title">
                                My Profile
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="#">
                              <span className="menu-icon">
                                <i className="ki-filled ki-icon">
                                </i>
                              </span>
                              <span className="menu-title">
                                Billing
                              </span>
                              <span className="menu-badge" data-tooltip="true" data-tooltip-placement="top">
                                <i className="ki-filled ki-information-2 text-md text-gray-500">
                                </i>
                                <span className="tooltip" data-tooltip-content="true">
                                  Payment and subscription info
                                </span>
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="html/demo1/account/security/overview.html">
                              <span className="menu-icon">
                                <i className="ki-filled ki-medal-star">
                                </i>
                              </span>
                              <span className="menu-title">
                                Security
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="html/demo1/account/members/teams.html">
                              <span className="menu-icon">
                                <i className="ki-filled ki-setting">
                                </i>
                              </span>
                              <span className="menu-title">
                                Members & Roles
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="html/demo1/account/integrations.html">
                              <span className="menu-icon">
                                <i className="ki-filled ki-switch">
                                </i>
                              </span>
                              <span className="menu-title">
                                Integrations
                              </span>
                            </a>
                          </div>
                          <div className="menu-separator">
                          </div>
                          <div className="menu-item">
                            <a className="menu-link" href="html/demo1/account/security/overview.html">
                              <span className="menu-icon">
                                <i className="ki-filled ki-shield-tick">
                                </i>
                              </span>
                              <span className="menu-title">
                                Notifications
                              </span>
                              <label className="switch switch-sm">
                                <input checked="" name="check" type="checkbox" value="1" onChange={() => {}} />

                              </label>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="https://devs.keenthemes.com">
                          <span className="menu-icon">
                            <i className="ki-filled ki-message-programming">
                            </i>
                          </span>
                          <span className="menu-title">
                            Dev Forum
                          </span>
                        </a>
                      </div>
                      <div className="menu-item" data-menu-item-offset="-10px, 0" data-menu-item-placement="left-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
                        <div className="menu-link">
                          <span className="menu-icon">
                            <i className="ki-filled ki-icon">
                            </i>
                          </span>
                          <span className="menu-title">
                            Language
                          </span>
                          <div className="flex items-center gap-1.5 rounded-md border border-gray-300 text-gray-600 p-1.5 text-2xs font-medium shrink-0">
                            English
                            <img alt="" className="inline-block size-3.5 rounded-full" src="media/flags/united-states.svg" />
                          </div>
                        </div>
                        <div className="menu-dropdown menu-default light:border-gray-300 w-full max-w-[170px]">
                          <div className="menu-item active">
                            <a className="menu-link h-10" href="?dir=ltr">
                              <span className="menu-icon">
                                <img alt="" className="inline-block size-4 rounded-full" src="media/flags/united-states.svg" />
                              </span>
                              <span className="menu-title">
                                English
                              </span>
                              <span className="menu-badge">
                                <i className="ki-solid ki-check-circle text-success text-base">
                                </i>
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link h-10" href="?dir=rtl">
                              <span className="menu-icon">
                                <img alt="" className="inline-block size-4 rounded-full" src="media/flags/saudi-arabia.svg" />
                              </span>
                              <span className="menu-title">
                                Arabic(Saudi)
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link h-10" href="?dir=ltr">
                              <span className="menu-icon">
                                <img alt="" className="inline-block size-4 rounded-full" src="media/flags/spain.svg" />
                              </span>
                              <span className="menu-title">
                                Spanish
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link h-10" href="?dir=ltr">
                              <span className="menu-icon">
                                <img alt="" className="inline-block size-4 rounded-full" src="media/flags/germany.svg" />
                              </span>
                              <span className="menu-title">
                                German
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link h-10" href="?dir=ltr">
                              <span className="menu-icon">
                                <img alt="" className="inline-block size-4 rounded-full" src="media/flags/japan.svg" />
                              </span>
                              <span className="menu-title">
                                Japanese
                              </span>
                            </a>
                          </div>
                        </div>
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
                        <a className="btn btn-sm btn-light justify-center" href="html/demo1/authentication/classNameic/sign-in.html">
                          Log out
                        </a>
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