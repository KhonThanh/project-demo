export default function Header() {
    return (
        <header className="flex justify-center sticky top-0 z-50 shadow bg-[var(--white-color)]">
            <div className="max-w-[1414px] py-2  w-[calc(100%-20px)] mx-auto flex flex-wrap gap-4 justify-between items-center">
                <div className="aspect-[202/40] max-w-[202px] overflow-hidden relative">
                    <img src="/img/logo/logo-header.svg" alt="" className="object-contain" />
                    <a href="javascript:void()" className="inset-0 absolute" aria-label="trang chủ"></a>
                </div>
                <div className="flex gap-6 header-menu__container">
                    <a href="#" className="header-menu__item text-[var(--black-color)] text-[14px]" aria-label="trang chủ">Trang chủ</a>
                    <a href="#" className="header-menu__item text-[var(--black-color)] text-[14px]" aria-label="Câu chuyện">Câu chuyện</a>
                    <a href="#" className="header-menu__item text-[var(--black-color)] text-[14px]" aria-label="Sản phẩm">Sản phẩm</a>
                    <a href="#" className="header-menu__item text-[var(--black-color)] text-[14px]" aria-label="Tin tức">Tin tức</a>
                    <a href="#" className="header-menu__item text-[var(--black-color)] text-[14px]" aria-label="Video">Video</a>
                    <a href="#" className="header-menu__item text-[var(--black-color)] text-[14px]" aria-label="Liên hệ">Liên hệ</a>
                </div>
                <div className="container-header__function flex gap-4 items-center">
                    <div className="container-header__search bg-[var(--second-white-color)] flex gap-4 items-center px-4 py-4 rounded-[5px]">
                        <div className="container-header__search-icon aspect-square overflow-hidden max-w-[14px]">
                            <img src="/img/icon/search.svg" alt="icon tìm kiếm" className="object-cover" />
                        </div>
                        <input type="text" placeholder="Tìm kiếm sản phẩm" className="border-none bg-transparent container-header__search-bar text-[var(--black-color)] text-[14px]" />
                    </div>
                    <div className="aspect-square bg-[var(--second-white-color)] overflow-hidden relative max-w-[53px] px-4 py-4">
                        <img src="/img/icon/bag.svg" alt="giỏ hàng" />
                        <div className="absolute top-1 right-1 w-[20px] h-[20px] bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                            <span className="text-[var(--black-color)] text-[10px] font-bold leading-none">2</span>
                        </div>
                        <a href="javascript:void()" className="inset-0 absolute" aria-label="giỏ hàng"></a>
                    </div>
                    <div className="aspect-square menu-bar__container cursor-pointer bg-[var(--second-white-color)] overflow-hidden relative max-w-[53px] px-4 py-4">
                        <img src="/img/icon/bars.svg" alt="icon bar menu" />
                    </div>
                </div>
                <div className="gap-6 py-6 px-6 w-[80vw] max-w-[320px] text-right rounded-2xl shadow-lg header-menuMB__container flex-col top-full right-0 absolute bg-[var(--white-color)]">
                    <a href="#" className="py-2 border-b-mist-700 header-menuMB__item text-[var(--black-color)] text-[14px]" aria-label="trang chủ">Trang chủ</a>
                    <a href="#" className="py-2 border-b-mist-700 header-menuMB__item text-[var(--black-color)] text-[14px]" aria-label="Câu chuyện">Câu chuyện</a>
                    <a href="#" className="py-2 border-b-mist-700 header-menuMB__item text-[var(--black-color)] text-[14px]" aria-label="Sản phẩm">Sản phẩm</a>
                    <a href="#" className="py-2 border-b-mist-700 header-menuMB__item text-[var(--black-color)] text-[14px]" aria-label="Tin tức">Tin tức</a>
                    <a href="#" className="py-2 border-b-mist-700 header-menuMB__item text-[var(--black-color)] text-[14px]" aria-label="Video">Video</a>
                    <a href="#" className="py-2 border-b-mist-700 header-menuMB__item text-[var(--black-color)] text-[14px]" aria-label="Liên hệ">Liên hệ</a>
                    <div className="container-header__searchMB bg-[var(--second-white-color)] flex gap-4 items-center px-4 py-4 rounded-[5px]">
                        <div className="container-header__search-icon aspect-square overflow-hidden max-w-[14px]">
                            <img src="/img/icon/search.svg" alt="icon tìm kiếm" className="object-cover" />
                        </div>
                        <input type="text" placeholder="Tìm kiếm sản phẩm" className="border-none bg-transparent container-header__search-bar text-[var(--black-color)] text-[14px]" />
                    </div>
                </div>
            </div>
        </header>
    );
}