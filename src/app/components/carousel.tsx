import { IAccountCarousel } from "@/app/interfacesAndTypes/accounts";
import CarouselCard from "./carouselCard";
import chevronRight from "@/../public/icons/chevron-right-black.svg";
import chevronLeft from "@/../public/icons/chevron-left-black.svg";
import Image from "next/image";

const Carousel = ({ accounts }: { accounts: IAccountCarousel[] }) => (
  <div className="d-flex flex-column flex-md-row carousel-container align-center">
    <a className="d-none d-lg-block pointer">
      <Image src={chevronLeft} width={35} height={35} alt="prev-slider" />
    </a>
    {accounts.map((account) => (
      <CarouselCard key={account.name} {...account} />
    ))}
    <a className="d-none d-lg-block pointer">
      <Image src={chevronRight} width={35} height={35} alt="next-slider" />
    </a>
  </div>
);

export default Carousel;
