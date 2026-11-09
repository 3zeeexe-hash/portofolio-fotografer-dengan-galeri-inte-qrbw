import React from "react";
import { Route, Routes } from "react-router-dom";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<RouteTransition><Gallery /></RouteTransition>} />
          <Route path="/services" element={<RouteTransition><Services /></RouteTransition>} />
          <Route path="/contact" element={<RouteTransition><Contact /></RouteTransition>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

// Wrapper transisi ringan
function RouteTransition({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-fade-in">
      {children}
    </div>
  );
}
