import Image from "next/image";

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Image
      src="https://urbangreyfurniture.com/wp-content/uploads/2025/05/logo-1.png"
      alt="Urbangrey Logo"
      width={100}
      height={100}
      className={props.className}
      priority
    />
  );
}
