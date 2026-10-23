import Image from "next/image";
import Header from "./header";
import Footer from "./footer";
import Script from "next/script";
import { qualityList, inforNews } from "./data/index-data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className=" bg-[var(--second-white-color)]">
          <div className="main-hero__container max-w-[1414px] w-[calc(100%-20px)] py-6 mx-auto flex flex-wrap gap-6 items-center">
            <div className="main-hero__right col-60  flex flex-col gap-3">
              <div className="hero-tag bg-[var(--third-white-color)] rounded-[12px] flex items-center gap-2 py-2 px-2">
                <div className="hero-tag__dot aspect-square rounded-[50px] bg-[var(--black-color)] max-w-[8px] min-w-[8px]"></div>
                <span className="text-[var(--primary-color)] text-[11px] uppercase">HERITAGE & MANIFESTO 2020-2025</span>
              </div>
              <h1 className="text-6xl">Hành Trình Từ Nông Trại Cao Nguyên Đến Tách Cà Phê Hoàn Hảo.</h1>
              <p className="text-[18px]">KAFÉ HYBRID khởi nguồn từ niềm say mê thuần khiết dành cho thổ nhưỡng Việt Nam. Chúng tôi tin rằng mỗi hạt cà phê là một bản ghi địa lý sống động, chuyên chở hương vị của mây mù, nắng sương bazan và bàn tay bền bỉ của người nông dân bản địa.</p>
              <div className="main-hero__quality flex items-center gap-3">
                {qualityList.map((item, index) => (
                  <div key={index} className="main-hero__quality-item flex items-center gap-2 px-4 py-2">
                    <div className="aspect-square max-w-[17px]">
                      <img src={item.icon} alt={item.value} className="object-contain" />
                    </div>
                    <div className="hero__quality-item__content flex flex-col gap-1">
                      <span className="uppercase text-[11px]">{item.label}</span>
                      <b className="capitalize text-[20px]">{item.label}</b>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="main-hero__left col-40  gap-3 aspect-[480/600] overflow-hidden relative rounded-[8px]">
              <img src="/img/content/main-hero.svg" alt="" className="object-cover w-full h-full" />
              <div className="flex gap-3 main-hero__container py-4 px-4 rounded-[8px] bg-[var(--third-white-color)] absolute bottom-3 left-3 right-3 flex items-center">
                <div className="main-hero__icon max-w-[40px] py-3 px-3 aspect-square rounded-[8px] bg-[var(--black-color)]">
                  <img src="/img/icon/check-white.svg" alt="dấu check màu trắng" className="object-contain" />
                </div>
                <div className="main-hero__container-content flex flex-col">
                  <span className="text-xs capitalize font-semibold">Direct-Trade Hợp Tác Xã</span>
                  <p className="text-sm">Thu mua giá cao hơn 35% so với thị trường tự do.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[var(--white-color)]">
          <div className="news-container max-w-[1414px] w-[calc(100%-20px)] py-6 mx-auto flex flex-col gap-10">
            <div className="news-container__title flex justify-between items-end">
              <div className="news-title__header col-60 flex flex-col gap-3">
                <span className="text-[var(--primary-color)] uppercase text-xs">BẢN ĐỒ NGUỒN CỘI TERROIR</span>
                <h2 className="capitalize font-bold text-4xl">Ba Miền Thổ Nhưỡng, Ba Tầng Hương Vị Đặc Tuyển</h2>
              </div>
              <div className="news-title__dec col-40 h-fit">
                <p>Mỗi vùng cao nguyên Việt Nam nắm giữ một bí mật khoáng chất và vi khí
                  hậu độc nhất, định hình tính cách hương vị khác biệt trong từng mẻ rang.</p>
              </div>
            </div>
            <div className="news-grid__container flex gap-6">
              {inforNews.map((item, index) => (
               <div key={index} className="col-3 hover-border-primary relative news-grid__item flex flex-col gap-4 py-3 px-3 bg-[var(--second-white-color)] rounded-[12px]">
                  <div className="news-grid__avatar aspect-video rounded-[8px] overflow-hidden relative">
                    <img src={item.avatar} alt={item.title} className="object-cover w-full h-full" />
                    <span className="text-[var(--white-color)] text-xs uppercase px-2 py-1 font-bold rounded-[8px] bg-[var(--primary-color)] absolute top-[10px] left-[10px] z-10">
                      {item.altitude}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-[8px] bg-[var(--white-color)] font-bold capitalize absolute bottom-[10px] right-[10px] z-10">
                      {item.location}
                    </span>
                  </div>
                  <div className="news-grid__infor flex flex-col gap-2">
                    <div className="news-grid__header flex justify-between items-end">
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="uppercase text-[var(--primary-color)] text-xs h-fit font-semibold">
                        {item.process}
                      </p>
                    </div>
                    <p className="line-clamp-2 text-sm">
                      {item.description}
                    </p>
                    <div className="flex flex-col py-2 px-2 news-grid__tag-container gap-2 bg-[var(--third-white-color)] rounded-[8px]">
                      <span className="uppercase text-[10px] font-bold text-gray-500">HỒ SƠ NẾM THỬ (CUPPING NOTES)</span>
                      <div className="news-grid__tag-list flex flex-wrap gap-2">
                        {item.cuppingNotes.map((note, noteIndex) => (
                          <p key={noteIndex} className="py-1 px-2 rounded-[4px] text-xs bg-[var(--white-color)]">
                            {note}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <a href={item.link} aria-label={`xem chi tiết ${item.title}`} className="absolute inset-0 z-20"></a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-">

        </section>
      </main>
      <Footer />
    </>
  );
}