export default function Header() {
    return (
        <header className="flex justify-center">
            <div className="max-w-[1414px] w-[calc(100%-20px)] mx-auto flex flex-wrap gap-4 justify-between items-center">
                <div className="aspect-[202/40] max-w-[202px] overflow-hidden relative">
                    <img src="/img/logo/logo-header.svg" alt="" className="object-contain" />
                    <a href="javascript:void()" className="w-full h-full absolute" aria-label="trang chủ"></a>
                </div>
                <div className="flex gap-6 header-menu__container">
                    <a href="javascript:void()" className="header-menu__item" aria-label="trang chủ">Trang chủ</a>
                    <a href="javascript:void()" className="header-menu__item" aria-label="Câu chuyện">Câu chuyện</a>
                    <a href="javascript:void()" className="header-menu__item" aria-label="Sản phẩm">Sản phẩm</a>
                    <a href="javascript:void()" className="header-menu__item" aria-label="Tin tức">Tin tức</a>
                    <a href="javascript:void()" className="header-menu__item" aria-label="Video">Video</a>
                    <a href="javascript:void()" className="header-menu__item" aria-label="Liên hệ">Liên hệ</a>
                </div>
                <div className="container-header__function flex gap-4 items-center">
                    <div className="container-header__search px-4">
                        <input type="search" />
                    </div>
                </div>
            </div>
        </header>
    );
}