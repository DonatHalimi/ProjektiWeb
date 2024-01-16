import React, { useState, useEffect } from "react";

const ToTop = () => {
    // State variabla per me kontrollu vizibilitetin e butonit duke u bazu ne pozicionin e scroll
    const [showButton, setShowButton] = useState(false);

    // useEffect i cili cakton se a duhet me u shfaq butoni ToTop duke u bazuar ne koordinatat e y
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        // Shtojme nje scroll event listener kur komponenti behet unmount
        window.addEventListener("scroll", handleScroll);

        // Cleanup: Largon scroll event listener kur komponenti behet unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Funksion i cili ben handle kur klikohet butoni ToTop
    const handleClick = () => {
        const scrollToTop = () => {
            const currentPosition = window.scrollY;
            if (currentPosition > 0) {
                window.requestAnimationFrame(scrollToTop);
                window.scrollTo(0, currentPosition - currentPosition / 10);
            }
        };
        scrollToTop();
    };

    // Stilizimi i butonit ToTop
    const buttonStyle = {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#0D242F",
        color: "#fff",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        display: showButton ? "block" : "none",
        cursor: "pointer",
        width: "60px",
        height: "50px",
    };

    // JSX per me render faqen
    return (
        <button style={buttonStyle} onClick={handleClick}>
            <i className="fas fa-arrow-up"></i>
        </button>
    );
};

export default ToTop;
