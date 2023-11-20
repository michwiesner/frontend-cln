import Image from "next/image";
import { IAccountCarousel } from "@/interfacesAndTypes/accounts";
import Link from "next/link";
import locationIcon from "@/../public/icons/location.svg";
import { getLocation } from "@/utils/utils";

const urlNavigation = "https://club.lanacion.com.ar";

const CarouselCard = ({
  name,
  images,
  crmid,
  benefits,
  branches,
  promoCode,
}: IAccountCarousel) => (
  <div className="carousel-card col-6 col-md-3">
    <Link href={`${urlNavigation}/${crmid}`} target="_blank">
      <Image
        src={images[0].url}
        width={194}
        height={194}
        className="w-100"
        alt="card-image"
      />
    </Link>
    <div className="d-flex flex-column carousel-card-content">
      <Link href={`${urlNavigation}/${crmid}`} target="_blank">
        <p className="f-s-16 pointer">{name}</p>
      </Link>
      {benefits && benefits?.length > 0 && (
        <div className="d-flex">
          {benefits.map(({ type }, index: number) => (
            <p key={index} className={index > 0 ? "m-l-15" : ""}>
              {type}
            </p>
          ))}
        </div>
      )}
      {branches && branches.length > 0 && (
        <div className="d-flex align-center">
          <Image
            src={locationIcon}
            width={18}
            height={18}
            alt="location-icon"
          />
          <p className="f-s-14 m-l-10">{getLocation(branches)}</p>
        </div>
      )}
      {promoCode && (
        <Link href={`${urlNavigation}/${crmid}`} target="_blank">
          <button type="button" className="pointer promocode-button">
            Quiero mi codigo
          </button>
        </Link>
      )}
    </div>
  </div>
);

export default CarouselCard;
