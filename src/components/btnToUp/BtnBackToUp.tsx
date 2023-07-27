"use client";
import React from "react";
import { Button } from "../ui/button";
import { GoMoveToTop } from "react-icons/go";
import { useState, useEffect } from "react";

export const BtnBackToUp = () => {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsBackToTopVisible(true);
      } else {
        setIsBackToTopVisible(false);
      }
    });
  }, []);

  return (
    <>
      {isBackToTopVisible && (
        <Button
          className="inline-block fixed bottom-[3rem] right-4 z-50 text-[2rem] bg-sky-700 rounded-full hover:bg-sky-500"
          onClick={scrollUp}
        >
          <GoMoveToTop />
        </Button>
      )}
    </>
  );
};
