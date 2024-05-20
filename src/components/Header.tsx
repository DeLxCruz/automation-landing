import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const Header = () => {
  return (
    <header className="py-16 px-10">
      <section className="flex w-full items-center justify-between">
        <div className="md:w-[520px]">
          <h1 className="font-medium text-6xl leading-[70.4px] text-[#181D26]">
            Domótica: Innovación y Confort en tu Hogar
          </h1>
          <p className="text-[#254FAD] font-medium text-lg mt-4">
            Mejora tu calidad de vida con tecnología inteligente
          </p>
        </div>
        <img className="md:h-full md:w-[700px] rounded-2xl" src="../../public/img/mujer-joven-tecnologia-casera.jpg" alt="" />
      </section>
    <section className="mt-16 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <img width={130} height={40} src="../../public/img/google-2015-logo-svgrepo-com.svg" alt="" />
            </li>
            <li>
            <img width={130} height={40} src="../../public/img/amazon-echo-logo-svgrepo-com.svg" alt=""/>
            </li>
            <li>
            <img width={130} height={40} src="../../public/img/samsung-1-logo-svgrepo-com.svg" alt="" />
            </li>
            <li>
            <img width={130} height={40} src="../../public/img/lg-electronics-logo-svgrepo-com.svg" alt="" />
            </li>
            <li>
            <img width={130} height={40} src="../../public/img/xiaomi-logo-svgrepo-com.svg" alt="" />
            </li>
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            <li>
            <img width={130} height={40} src="../../public/img/google-2015-logo-svgrepo-com.svg" alt="" />
            </li>
            <li>
            <img width={130} height={40} src="../../public/img/amazon-echo-logo-svgrepo-com.svg" alt=""/>
            </li>
            <li>
            <img width={130} height={40} src="../../public/img/samsung-1-logo-svgrepo-com.svg" alt="" />
            </li>
            <li>
            <img width={130} height={40} src="../../public/img/lg-electronics-logo-svgrepo-com.svg" alt="" />
            </li>
            <li>
            <img width={130} height={40} src="../../public/img/xiaomi-logo-svgrepo-com.svg" alt="" />
            </li>
          </ul>
        </section>
    </header>
  );
};

export default Header;
