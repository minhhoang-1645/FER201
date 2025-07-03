import React from "react";
import hero from "../assets/hero.jpg";
const Hero = () => {
  const states = [
    { value: "1,200+ ", label: "Học sinh được quản lý" },
    { value: "20+", label: "Nhân viên y tế hỗ trợ" },
    { value: "100+", label: "Sự kiện y tế đã xử lý" },
    { value: "10+", label: "Năm triển khai toàn trường" },
  ];
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-r from-yellow-100 to-purple-100 "
    >
      <article className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <hgroup>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Quản lý sức khỏe học đường
              <mark className="text-yellow-400 bg-transparent">
                
                {""} Cho học sinh
              </mark>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Kết nối phụ huynh, học sinh và nhân viên y tế để bảo vệ sức khỏe
              mỗi ngày
            </p>
          </hgroup>
          <nav className="flex flex-row mb:flex-row gap-4 mb-12">
            <a
              href="#"
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-3 
                        rounded-full text-center transition shadow-lg hover:scale-105 duration-300 "
              aria-label="Đăng nhập hệ thống"
            >
              Khai báo hồ sơ sức khỏe
            </a>
            <a
              href="service"
              className="border border-yellow-400  text-yellow-400 hover:bg-yellow-100  px-8 py-3 
                        rounded-full text-center transition shadow-lg hover:scale-105 duration-300"
              aria-label="Dich vụ y tế"
            >
              Tài liệu y tế học đường
            </a>
          </nav>
          <aside className="px-4">
            <ul className="flex flex-wrap gap-4 justify-center md:gap-8 text-center">
              {states.map((state, index) => (
                <li key={index} className="px-2">
                  <strong className="text-2xl font-bold text-yellow-500">
                    {state.value}
                  </strong>
                  <small className="text-gray-600">{state.label}</small>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <figure className='md:w-1/2 flex justify-center md:mx-5'>
        <div className="relative w-full max-w-md ">
          <span
            className='bg-yellow-400 rounded-full w-76 h-76 absolute -top-10 -left-10 opacity-40  '
            aria-hidden="true"
          ></span>
          <span
            className='bg-yellow-200 rounded-full w-64 h-64 absolute -bottom-10 right-10 opacity-40 '
            aria-hidden="true"
          ></span>
          <img
            src={hero}
            alt="Hình ảnh minh họa quản lý sức khỏe học đường"
            className='relative z-10 rounded-full shadow-2xl w-100 h-100 max-w-xs md:max-w-sm object-cover'
            width="400"
            height="400"
            loading="eager"
            aria-label="Hình ảnh minh họa quản lý sức khỏe học đường"
          />
        </div>
        </figure>
      </article>
    </section>
  );
};

export default Hero;
