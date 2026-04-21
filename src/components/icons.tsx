import Image from "next/image";

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Image
      src="https://res.cloudinary.com/dfb0umklg/images/c_scale,w_170,h_42,dpr_1.5/f_auto,q_auto/v1/paradisefurniture.in/wp-content/uploads/elementor/thumbs/cropped-paradise-logo-01-r30y1kxsgerwspiz2nqjfwq8tfpu2etrqeptunsg74/cropped-paradise-logo-01-r30y1kxsgerwspiz2nqjfwq8tfpu2etrqeptunsg74.png?_i=AA"
      alt="paradise furniture logo"
      width={100}
      height={100}
      className={props.className}
      priority
    />
  );
}
