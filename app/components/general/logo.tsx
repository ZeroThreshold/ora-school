import type { ImgHTMLAttributes } from "react";

const mainBlack = "/images/logos/main-black.webp";
const mainWhite = "/images/logos/main-white.webp";
const driftrBlack = "/images/logos/driftr-black.webp";
const mototripBlack = "/images/logos/mototrip-black.webp";
const prodirtBlack = "/images/logos/prodirt-black.webp";
const speedshopBlack = "/images/logos/speedshop-black.webp";
const speedshopWhite = "/images/logos/speedshop-white.webp";
const powerpartBlack = "/images/logos/powerpart-black.webp";

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
      alt={variant}
      width={width}
      height={height}
      className={`object-contain object-center ${className}`}
      {...props}
    />
  );
}
