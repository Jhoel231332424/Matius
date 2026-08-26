"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { BrandAsset } from "@/data/media";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import styles from "./collection-accordion.module.css";

type CollectionPanel = {
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  image: BrandAsset;
};

export function CollectionAccordion({ panels }: { panels: CollectionPanel[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const closeRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const restoreFocusIndexRef = useRef<number | null>(null);

  const openPanel = (index: number) => {
    restoreFocusIndexRef.current = null;
    setActiveIndex(index);
  };

  const closePanel = (index: number) => {
    restoreFocusIndexRef.current = index;
    setActiveIndex(null);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && activeIndex !== null) {
        event.preventDefault();
        restoreFocusIndexRef.current = activeIndex;
        setActiveIndex(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex !== null) {
      closeRefs.current[activeIndex]?.focus();
      return;
    }

    const restoreIndex = restoreFocusIndexRef.current;
    if (restoreIndex !== null) {
      triggerRefs.current[restoreIndex]?.focus();
      restoreFocusIndexRef.current = null;
    }
  }, [activeIndex]);

  return (
    <div className={styles.accordion} data-open={activeIndex !== null}>
      {panels.map((panel, index) => {
        const active = activeIndex === index;
        const panelId = `collection-panel-${index}`;
        const titleId = `collection-title-${index}`;

        return (
          <article key={panel.title} className={styles.panel} data-active={active}>
            <Image
              src={panel.image.src}
              alt={panel.image.alt}
              fill
              sizes="(min-width: 768px) 70vw, 100vw"
              style={{ objectPosition: panel.image.objectPosition }}
              className={styles.image}
            />
            <div className={styles.overlay} aria-hidden="true" />

            {!active ? (
              <button
                ref={(node) => {
                  triggerRefs.current[index] = node;
                }}
                type="button"
                className={styles.toggle}
                aria-expanded="false"
                aria-controls={panelId}
                onClick={() => openPanel(index)}
              >
                <span className={styles.number}>0{index + 1}</span>
                <span className={styles.railLine} aria-hidden="true" />
                <span className={styles.railTitle}>{panel.title}</span>
                <span className={styles.plus} aria-hidden="true">+</span>
                <span className="sr-only">Abrir colección {panel.title}</span>
              </button>
            ) : (
              <div
                id={panelId}
                className={styles.content}
                role="region"
                aria-labelledby={titleId}
              >
                <button
                  ref={(node) => {
                    closeRefs.current[index] = node;
                  }}
                  type="button"
                  className={styles.close}
                  aria-label={`Cerrar colección ${panel.title}`}
                  aria-expanded="true"
                  aria-controls={panelId}
                  onClick={() => closePanel(index)}
                >
                  ×
                </button>
                <span className={styles.contentNumber}>0{index + 1}</span>
                <p className={styles.eyebrow}>{panel.eyebrow}</p>
                <h3 id={titleId} className={styles.title}>{panel.title}</h3>
                <p className={styles.description}>{panel.description}</p>
                <div className={styles.actions}>
                  <Link href={panel.href} className={styles.primaryLink}>
                    Explorar colección <span aria-hidden="true">→</span>
                  </Link>
                  <WhatsAppButton
                    source="product"
                    productName={`Colección ${panel.title}`}
                    variant="secondary"
                    className={styles.whatsapp}
                  >
                    Consultar por WhatsApp
                  </WhatsAppButton>
                </div>
                <button
                  type="button"
                  className={styles.mobileClose}
                  aria-expanded="true"
                  aria-controls={panelId}
                  onClick={() => closePanel(index)}
                >
                  Cerrar colección
                </button>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
