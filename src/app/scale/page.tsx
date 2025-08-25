import Hero from "@/components/hero";
import scaleImage from "public/scale.jpg";

export default function ScalePage() {
  return (
    <div>
      <Hero
        imgData={scaleImage}
        imgAlt="steel factory"
        title="Scale your app to infinity."
      />
    </div>
  );
}
