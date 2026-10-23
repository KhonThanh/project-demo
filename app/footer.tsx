export default function Footer() {
    return (
        <footer className="bg-[var(--third-white-color)] footer-container py-6 flex flex-col justify-center">
            <div className="max-w-[1414px] w-[calc(100%-20px)] mx-auto  footer-container__content flex flex-wrap gap-4">
                <div className="col-4 flex flex-col gap-3 footer-container__item">
                    <div className="footer-logo aspect-[186/32] max-w-[186] overflow-hidden">
                        <img src="/img/logo/logo-footer.svg" alt="logo footer" className="object-contain" />
                    </div>
                    <p className="">Không gian cà phê thế hệ mới kết hợp giữa nghệ thuật rang xay thủ công specialty coffee và trải nghiệm thưởng thức số linh hoạt.</p>
                    <div className="flex gap-3 flex-wrap tag-footer__container">
                        <span className="py-[5px] px-[5px] text-[11px] tag-footer__tag uppercase bg-[var(--second-white-color)] text-[var(--primary-color)]">Direct trade</span>
                        <span className="py-[5px] px-[5px] text-[11px] tag-footer__tag uppercase bg-[var(--second-white-color)] text-[var(--primary-color)]">Batch craft</span>
                    </div>
                </div>
                <div className="col-4 flex flex-col gap-3 footer-container__item">
                    <h2 className="">điều hướng & quy trình</h2>
                    <a className="">Hành trình hạt Robusta & Arabica</a>
                    <a className="">Dụng cụ pha chế thủ công</a>
                    <a className="">Tiêu chuẩn chiết xuất cupping</a>
                    <a className="">Giao hàng tươi trong 48h</a>
                </div>
                <div className="col-4 flex flex-col gap-3 footer-container__item">
                    <h2 className="">Roastery & Giờ mở cửa</h2>
                    <p className="">240 Đường Pasteur, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh</p>
                    <p className="">Hotline: (028) 3822 5900</p>
                    <div className="footer-time__work flex flex-col gap-2 bg-[var(--second-white-color)] py-3 px-3 rounded-[8px]">
                        <b>Giờ phục vụ cafe:</b>
                        <span>Thứ 2 - Chủ Nhật: 07:00 - 22:30</span>
                    </div>
                </div>
                <div className="col-4 flex flex-col gap-3 footer-container__item">
                    <h2 className="">Kết Nối Cộng Đồng</h2>
                    <p className="">Theo dõi bản tin hạt mới và workshop thử nếm hàng tuần.</p>
                    <div className="footer-time__social flex gap-3">
                        <div className="bg-[var(--second-white-color)] max-w-[32px] py-2 px-2 relative aspect-square overflow-hidden">
                            <img src="/img/icon/ins.svg" alt="ins" className="object-contain" />
                            <a href="#" className="absolute inset-0"></a>
                        </div>
                        <div className="bg-[var(--second-white-color)] max-w-[32px] py-2 px-2 relative aspect-square overflow-hidden">
                            <img src="/img/icon/gol.svg" alt="ins" className="object-contain" />
                            <a href="#" className="absolute inset-0"></a>
                        </div>
                        <div className="bg-[var(--second-white-color)] max-w-[32px] py-2 px-2 relative aspect-square overflow-hidden">
                            <img src="/img/icon/mes.svg" alt="ins" className="object-contain" />
                            <a href="#" className="absolute inset-0"></a>
                        </div>
                        <div className="bg-[var(--second-white-color)] max-w-[32px] py-2 px-2 relative aspect-square overflow-hidden">
                            <img src="/img/icon/pod.svg" alt="ins" className="object-contain" />
                            <a href="#" className="absolute inset-0"></a>
                        </div>
                    </div>
                    <div className="footer-slogan flex items-center gap-2">
                        <div className="footer-slogan__icon max-w-[12px] aspect-square overflow-hidden">
                            <img src="/img/icon/leaf.svg" alt="chiếc lá" />
                        </div>
                        <p className="uppercase text-[11px]">100% BAO BÌ TÁI SINH HỮU CƠ</p>
                    </div>
                </div>
            </div>
            <div className="max-w-[1414px] w-[calc(100%-20px)] mx-auto flex justify-between">
                <div className="">
                    <p className="text-[14px]">© 2025 KAFÉ HYBRID Roastery Co. Bảo lưu mọi quyền.</p>
                </div>
                <div className="flex gap-3 items-center">
                    <p className="capitalize font-bold text-[12px]">SCA Certified Lab</p>
                    <p className="capitalize font-bold text-[12px]">Q-Grader Approved</p>
                    <p className="capitalize font-bold text-[12px]">Bảo mật thông tin</p>
                </div>
            </div>
        </footer>
    );
}