"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ComponentProps, MouseEvent } from "react";

interface SafeLinkProps extends ComponentProps<typeof Link> {
  href: string;
  prefetch?: boolean;
}

export function SafeLink({ 
  href, 
  onClick, 
  children, 
  prefetch = false, // Desabilitar prefetch por padrão
  ...props 
}: SafeLinkProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Prevenir navegação se href for undefined ou inválido
    if (!href || href === "undefined" || href === "#") {
      e.preventDefault();
      console.log("[LASY] Prevented navigation to invalid URL:", href);
      return;
    }

    // Tentar navegação client-side com fallback
    try {
      // Chamar onClick original se existir
      if (onClick) {
        onClick(e);
      }

      // Se não foi prevenido, fazer navegação programática
      if (!e.defaultPrevented) {
        e.preventDefault();
        router.push(href);
      }
    } catch (error) {
      console.log("[LASY] Navigation error caught, using fallback:", error);
      // Deixar navegação padrão acontecer
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
    <Link 
      href={href} 
      onClick={handleClick} 
      prefetch={prefetch}
      {...props}
    >
      {children}
    </Link>
  );
}
