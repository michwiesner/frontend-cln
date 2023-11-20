import { getAccounts } from "@/requests/accounts";
import Carousel from "./carousel";
import GenericButton from "./genericButton";

const BenefitsCarousel = async () => {
  const accounts = await getAccounts("benefits");
  return (
    <div className="d-flex flex-column align-center justify-center benefits-container">
      <div className="w-100 d-flex align-center justify-space-between title-container">
        <div>
          <p className="f-s-18 f-s-lg-24">Códigos de descuento</p>
          <p
            className=" d-none d-md-block f-s-md-14"
            style={{ marginTop: "5px" }}
          >
            ¿Sos socio de Club LA NACION? Descargá tu código y disfrutá
            beneficios exclusivos en tus marcas favoritas
          </p>
        </div>
        <GenericButton label="todos los códigos" />
      </div>
      <Carousel
        accounts={accounts.map(({ name, images, crmid }) => ({
          name,
          images,
          crmid,
          promoCode: true,
        }))}
      />
    </div>
  );
};

export default BenefitsCarousel;
