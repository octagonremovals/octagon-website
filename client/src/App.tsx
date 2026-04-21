import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import FloatingWidgets from "./components/FloatingWidgets";
import AIChatWidget from "./components/AIChatWidget";
import ExitIntentPopup from "./components/ExitIntentPopup";
import CallbackWidget from "./components/CallbackWidget";
import CookieBanner from "./components/CookieBanner";
import LiveChatWidget from "./components/LiveChatWidget";
import ChatAdmin from "./pages/ChatAdmin";
import Home from "./pages/Home";
import LayoutA from "./pages/LayoutA";
import LayoutB from "./pages/LayoutB";
import LayoutC from "./pages/LayoutC";
import LayoutD from "./pages/LayoutD";
import LayoutE from "./pages/LayoutE";
import LayoutF from "./pages/LayoutF";
import LayoutG from "./pages/LayoutG";
import LayoutH from "./pages/LayoutH";
import LayoutI from "./pages/LayoutI";
import LayoutJ from "./pages/LayoutJ";
import LayoutABC from "./pages/LayoutABC";
import LayoutGFD from "./pages/LayoutGFD";
import LocationBromley from "./pages/LocationBromley";
import IslingtonLocation from "./pages/locations/IslingtonLocation";
import CamdenLocation from "./pages/locations/CamdenLocation";
import IslingtonHome from "./pages/islington/IslingtonHome";
import IslingtonHouseRemovals from "./pages/islington/IslingtonHouseRemovals";
import IslingtonOfficeRemovals from "./pages/islington/IslingtonOfficeRemovals";
import IslingtonStorage from "./pages/islington/IslingtonStorage";
import IslingtonAbout from "./pages/islington/IslingtonAbout";
import IslingtonContact from "./pages/islington/IslingtonContact";
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import StoragePage from "./pages/StoragePage";
import GetQuote from "./pages/GetQuote";
import QuoteLanding from "./pages/QuoteLanding";
import Locations from "./pages/Locations";
import LocationDynamic from "./pages/LocationDynamic";
import LayoutOptions from "./pages/LayoutOptions";
import LayoutGallery from "./pages/LayoutGallery";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Calculator from "./pages/Calculator";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Checklist from "./pages/Checklist";
import ServiceAreaMap from "./pages/ServiceAreaMap";

function Router() {
  return (
    <Switch>
      {/* Home — LayoutABC v3 (enhanced, real data) */}
      <Route path="/" component={LayoutABC} />
      <Route path="/home-classic" component={Home} />

      {/* Dedicated conversion landing page — for paid ads */}
      <Route path="/quote" component={QuoteLanding} />

      {/* Services — hub + individual pages */}
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServicePage} />

      {/* About — hub + sub-pages */}
      <Route path="/about" component={About} />
      <Route path="/about/:section" component={AboutPage} />

      {/* Locations — hub + individual pages */}
      <Route path="/locations" component={Locations} />
      {/* Specific SEO location pages — must come before the dynamic :slug route */}
      <Route path="/locations/bromley" component={LocationBromley} />
      <Route path="/locations/islington" component={IslingtonLocation} />
      <Route path="/locations/camden" component={CamdenLocation} />
      <Route path="/locations/:slug" component={LocationDynamic} />

      {/* Islington mini-site — 5 dedicated pages */}
      <Route path="/islington" component={IslingtonHome} />
      <Route path="/islington/house-removals" component={IslingtonHouseRemovals} />
      <Route path="/islington/office-removals" component={IslingtonOfficeRemovals} />
      <Route path="/islington/storage" component={IslingtonStorage} />
      <Route path="/islington/about" component={IslingtonAbout} />
      <Route path="/islington/contact" component={IslingtonContact} />

      {/* Storage */}
      <Route path="/storage" component={StoragePage} />

      {/* Other pages */}
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/get-quote" component={GetQuote} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/faq" component={FAQ} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/moving-checklist" component={Checklist} />
      <Route path="/service-areas" component={ServiceAreaMap} />
      <Route path="/layout-options" component={LayoutOptions} />
      <Route path="/layout-gallery" component={LayoutGallery} />
      <Route path="/admin/chat" component={ChatAdmin} />

      {/* Premium layout variants for review */}
      <Route path="/layout-a" component={LayoutA} />
      <Route path="/layout-b" component={LayoutB} />
      <Route path="/layout-c" component={LayoutC} />
      <Route path="/layout-d" component={LayoutD} />
      <Route path="/layout-e" component={LayoutE} />
      <Route path="/layout-f" component={LayoutF} />
      <Route path="/layout-g" component={LayoutG} />
      <Route path="/layout-h" component={LayoutH} />
      <Route path="/layout-i" component={LayoutI} />
      <Route path="/layout-j" component={LayoutJ} />
      <Route path="/layout-abc" component={LayoutABC} />
      <Route path="/layout-gfd" component={LayoutGFD} />

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
          {/* Global floating widgets — shown on all pages except /quote */}
          <FloatingWidgets />
          <AIChatWidget />
          <LiveChatWidget />
          <ExitIntentPopup />
          <CallbackWidget />
          <CookieBanner />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
