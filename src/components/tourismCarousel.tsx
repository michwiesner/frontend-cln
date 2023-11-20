import { getAccounts } from "@/requests/accounts";
import Carousel from "./carousel";
import GenericButton from "./genericButton";
import "@/styles/carousel.css";

const TourismCarousel = async () => {
  const accounts = await getAccounts("tourism");

  return (
    <div className="d-flex align-center justify-center flex-column tourism-container">
      <div className="w-100 d-flex justify-space-between align-center title-container">
        <p className="f-s-18 f-s-lg-24">Turismo en Buenos aires</p>
        <GenericButton label="todos los beneficios" />
      </div>

      <Carousel
        accounts={accounts.map(
          ({ name, images, crmid, benefits, branches }) => ({
            name,
            images,
            crmid,
            benefits,
            branches,
          })
        )}
      />
    </div>
  );
};

export default TourismCarousel;
