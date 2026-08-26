"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent } from "react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { brandMedia } from "@/data/media";
import styles from "./fullscreen-menu.module.css";

const menuItems = [
  { label: "Inicio", href: "/", meta: "Portada", imageIndex: 0 },
  { label: "Zapatos", href: "/#zapatos", meta: "Colecciones", imageIndex: 1 },
  { label: "Fabricación", href: "/#fabricacion", meta: "Oficio", imageIndex: 2 },
  { label: "Tiendas", href: "/tiendas", meta: "Cochabamba", imageIndex: 3 },
] as const;

export function FullscreenMenu() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const reducedMotion = useCallback(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  const closeMenu = useCallback(
    (restoreFocus = true) => {
      setOpen(false);
      if (restoreFocus) triggerRef.current?.focus({ preventScroll: true });

      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      closeTimerRef.current = setTimeout(
        () => setMounted(false),
        reducedMotion() ? 0 : 520,
      );
    },
    [reducedMotion],
  );

  const openMenu = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveIndex(0);
    setMounted(true);
    requestAnimationFrame(() => setOpen(true));
  };

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusClose = () => closeRef.current?.focus({ preventScroll: true });
    focusClose();
    const focusFrame = requestAnimationFrame(focusClose);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.getAttribute("aria-hidden") !== "true");

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [closeMenu, open]);

  useEffect(
    () => () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    },
    [],
  );

  const handleMenuNavigation = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const [targetPath, targetHash] = href.split("#");
    const normalizedPath = targetPath || pathname;

    if (normalizedPath !== pathname) {
      event.preventDefault();
      window.location.assign(href);
      return;
    }

    event.preventDefault();
    closeMenu();

    const delay = reducedMotion() ? 0 : 360;
    window.setTimeout(() => {
      if (!targetHash) {
        window.scrollTo({ top: 0, behavior: reducedMotion() ? "auto" : "smooth" });
        return;
      }

      const target = document.getElementById(targetHash);
      target?.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "start" });
      window.history.replaceState(null, "", `#${targetHash}`);
    }, delay);
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        aria-label="Abrir menú"
        aria-expanded={open}
        aria-controls="matius-fullscreen-menu"
        onClick={openMenu}
      >
        <span>Menú</span>
        <span className={styles.triggerIcon} aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      {mounted ? (
        <div
          ref={dialogRef}
          id="matius-fullscreen-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú principal"
          aria-hidden={!open}
          data-open={open}
          data-active-index={activeIndex}
          className={styles.overlay}
        >
          <div className={styles.media} aria-hidden="true">
            {brandMedia.campaign.map((asset, index) => (
              <Image
                key={asset.src}
                src={asset.src}
                alt=""
                fill
                sizes="100vw"
                loading="eager"
                style={{ objectPosition: asset.objectPosition }}
                className={`${styles.mediaImage} ${activeIndex === index ? styles.mediaImageActive : ""}`}
              />
            ))}
            <div className={styles.scrim} />
          </div>

          <div className={styles.inner}>
            <div className={styles.topline}>
              <div className={styles.menuBrand} aria-hidden="true">
                <span className={styles.menuBrandMain}>MATIUS</span>
                <span className={styles.menuBrandSub}>Perfect</span>
              </div>
              <button
                ref={closeRef}
                type="button"
                className={styles.close}
                aria-label="Cerrar menú"
                tabIndex={open ? 0 : -1}
                onClick={() => closeMenu()}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className={styles.menuBody}>
              <p className={styles.kicker}>Matius Perfect · Cochabamba</p>
              <nav aria-label="Navegación fullscreen" className={styles.nav}>
                {menuItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-label={item.label}
                    tabIndex={open ? 0 : -1}
                    aria-current={item.href === pathname ? "page" : undefined}
                    data-active={activeIndex === item.imageIndex}
                    className={styles.navItem}
                    style={{ "--menu-index": index } as CSSProperties}
                    onMouseEnter={() => setActiveIndex(item.imageIndex)}
                    onFocus={() => setActiveIndex(item.imageIndex)}
                    onClick={(event) => handleMenuNavigation(event, item.href)}
                  >
                    <span className={styles.navIndex}>0{index + 1}</span>
                    <span className={styles.navLabel}>{item.label}</span>
                    <span className={styles.navMeta}>{item.meta}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className={styles.footerline}>
              <span>Cochabamba · Bolivia</span>
              <WhatsAppButton
                source="general"
                variant="secondary"
                className="!border-white/65 !bg-transparent !text-white hover:!border-white hover:!bg-white hover:!text-black"
              >
                Consultar por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
