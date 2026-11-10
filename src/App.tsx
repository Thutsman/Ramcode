import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { CustomCursor } from "@/components/CustomCursor";
import { ScrollManager } from "@/components/ScrollManager";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Home from "@/pages/Home";

// /mining, the RFQ page and /credits are code-split so the homepage bundle stays small.
const Mining = lazy(() => import("@/pages/Mining"));
const RequestQuote = lazy(() => import("@/pages/RequestQuote"));
const Credits = lazy(() => import("@/pages/Credits"));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main" className="skip-link">Skip to main content</a>
      <CustomCursor />
      <ScrollManager />
      <SiteHeader />
      <main id="main">
        <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mining" element={<Mining />} />
            <Route path="/mining/request-quote" element={<RequestQuote />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

export default App;
