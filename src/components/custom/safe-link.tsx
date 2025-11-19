"use client";

import Link from "next/link";
import { ComponentProps, MouseEvent } from "react";

interface SafeLinkProps extends ComponentProps<typeof Link> {
  href: string;
}

export function SafeLink({ href, onClick, children, ...props }: SafeLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Prevenir navegação se href for undefined ou inválido
    if (!href || href === "undefined" || href === "#") {
      e.preventDefault();
      console.log("Prevented navigation to invalid URL:", href);
      return;
    }

    // Chamar onClick original se existir
    if (onClick) {
      onClick(e);
    }
  };

  // Se href for inválido, renderizar como span
  if (!href || href === "undefined") {
    return (
      <span className={props.className} {...(props as any)}>
        {children}
      </span>
    );
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
