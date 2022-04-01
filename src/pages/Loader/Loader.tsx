import { LoaderSpinner } from "../../components/LoaderSpinner";

export const LoaderScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
      className="animate__animated animate__fadeIn bg-dark"
    >
      <div
        style={{
          backgroundSize: "cover",
          backgroundImage: "url(https://res.cloudinary.com/dsulcam/image/upload/v1624776603/skueresoft_qoczsy.png)",
          width: "570px",
          height: "400px",
        }}
      ></div>
      <LoaderSpinner color="text-light" />
    </div>
  );
};
