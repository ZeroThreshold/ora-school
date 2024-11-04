import type { ImgHTMLAttributes } from "react";

const mainBlack = "/images/logos/main-black.png";
const mainWhite = "/images/logos/main-white.png";
const driftrBlack = "/images/logos/driftr-black.png";
const mototripBlack = "/images/logos/mototrip-black.png";
const prodirtBlack = "/images/logos/prodirt-black.png";
const speedshopBlack = "/images/logos/speedshop-black.png";
const speedshopWhite = "/images/logos/speedshop-white.png";
const powerpartBlack = "/images/logos/powerpart-black.png";

interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  variant?: string;
  passString?: string;
  width: number;
  height: number;
  className?: string;
}

export default function Logo({
  variant = "default",
  width,
  height,
  passString = "",
  className = "",
  ...props
}: LogoProps) {
  const getVariantImage = () => {
    const finalVariant = passString || variant;
    switch (finalVariant) {
      case "mainblack":
        return mainBlack;
      case "mainwhite":
        return mainWhite;
      case "driftrblack":
        return driftrBlack;
      case "mototripblack":
        return mototripBlack;
      case "prodirtblack":
        return prodirtBlack;
      case "speedshopblack":
        return speedshopBlack;
      case "speedshopwhite":
        return speedshopWhite;
      case "powerpartblack":
        return powerpartBlack;
      default:
        return mainBlack;
    }
  };

  return (
    <img
      src={getVariantImage()}
      alt="Logo"
      width={width}
      height={height}
      className={`object-contain object-center ${className}`}
      {...props}
    />
  );
}
