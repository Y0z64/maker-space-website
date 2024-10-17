import cn from "@/utils/cn";
import { Icons } from "./icons.ts";

interface Path {
  d: string;
  class?: string;
}

interface Props {
  name: string;
  className?: string;
}

export default function Icon({ name, className }: Props) {
  let icon = (Icons as any)[name] || {};

  let paths: Path[] = icon.paths || [];

  return (
    <svg
      className={cn(icon.class, className)}
      height={icon.height}
      viewBox={icon.viewBox}
      width={icon.width}
      fill={icon.fill}
      clip-rule={icon.clipRule}
      fill-rule={icon.fillRule}
      stroke={icon.stroke}
      stroke-width={icon.strokeWidth}
      stroke-linecap={icon.strokeLinecap}
      stroke-linejoin={icon.strokeLinejoin}
    >
      <title>{icon.title}</title>
      {paths.map((path: Path) => (
        <path d={path.d} className={path.class || ""} />
      ))}
    </svg>
  );
}
