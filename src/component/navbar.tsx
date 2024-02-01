import { Outlet } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 border-b border-zinc-100 h-[72px] overflow-hidden bg-white z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8  ">
          <div className="flex items-center justify-between h-[72px]">
            <div className="flex gap-4  items-center ">
              <img
                src="https://www.testvalley.kr/logo/logo-new.svg"
                alt="testvalley"
              />
              <div className="flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <p className="text-primary">카테고리</p>
              </div>
            </div>
            <div className="relative w-[335px] ">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
                <svg
                  className="w-5 h-5 "
                  fill="none"
                  stroke="grey"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full h-[41.96px] p-4 ps-10 text-sm bg-white border border-gray-300 rounded-lg  focus:ring-primary focus:border-primary outline-none"
                placeholder="살까말까 고민된다면 검색해보세요!"
                required
              />
            </div>

            <div className="flex divide-x space-x-2 h-[20]">
              <img
                src="https://www.testvalley.kr/common/home-event.svg"
                alt="icon"
              />

              <button className="px-2 text-[16px]">로그인 / 회원가입</button>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Navbar
