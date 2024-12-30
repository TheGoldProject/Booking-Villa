"use client";
import { useEffect } from "react";
// import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";

// import fjGallery from "flickr-justified-gallery";
import lgZoom from "lightgallery/plugins/zoom";

import Image from "next/image";

export default function Gallery() {
  // useEffect(() => {
  //   fjGallery(document.querySelectorAll(".gallery"), {
  //     itemSelector: ".gallery__item",
  //     rowHeight: 180,
  //     lastRow: "start",
  //     gutter: 4,
  //     rowHeightTolerance: 0.1,
  //     calculateItemsHeight: false,
  //   });
  // }, []);
  return (
    <div className="pb-20">
      <div className="flex flex-col gap-20 w-3/5 mx-auto">
        <section id="gallery" className="mt-20">
          <p>This is gallery</p>
          {/* <LightGallery
            plugins={[lgZoom]}
            mode="lg-fade"
            elementClassNames={"gallery"}
            mobileSettings={{
              controls: false,
              showCloseIcon: false,
              download: false,
              rotate: false,
            }}
          >
            {Array.from({ length: 45 }).map((item, index) => (
              <a
                key={index}
                className="gallery__item"
                data-src={`/images/villa/${index + 1}.jpg`}
              >
                <img
                  className="img-responsive"
                  src={`/images/villa/${index + 1}.jpg`}
                />
              </a>
            ))}
          </LightGallery> */}
        </section>
      </div>
    </div>
  );
}
