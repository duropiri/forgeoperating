import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

// Public Customer-Facing Pages
import Landing from "./pages/Landing";
import FeaturePage from "./pages/FeaturePage";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";

// Internal Training Hub Pages
import Home from "./pages/Home";
import Playbook from "./pages/Playbook";
import Scripts from "./pages/Scripts";
import Objections from "./pages/Objections";

// Fulfillment Ops Pages
import AIWebsiteSetup from "./pages/AIWebsiteSetup";
import SystemInstallation from "./pages/SystemInstallation";
import QAChecklist from "./pages/QAChecklist";

function Router() {
  return (
    <Switch>
      {/* ========== PUBLIC CUSTOMER-FACING ROUTES ========== */}
      
      {/* Landing Page at Root */}
      <Route path="/" component={Landing} />
      
      {/* Feature Pages - /features/:feature */}
      <Route path="/features/:feature" component={FeaturePage} />
      
      {/* Static Pages */}
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/contact" component={Contact} />
      
      {/* ========== PROTECTED INTERNAL TRAINING HUB ROUTES ========== */}
      
      {/* Dashboard Home (accessed via Team Login) */}
      <Route path="/dashboard">
        <ProtectedRoute>
          <Layout>
            <Home />
          </Layout>
        </ProtectedRoute>
      </Route>
      
      {/* Sales Training Routes */}
      <Route path="/playbook">
        <ProtectedRoute>
          <Layout>
            <Playbook />
          </Layout>
        </ProtectedRoute>
      </Route>
      <Route path="/scripts">
        <ProtectedRoute>
          <Layout>
            <Scripts />
          </Layout>
        </ProtectedRoute>
      </Route>
      <Route path="/objections">
        <ProtectedRoute>
          <Layout>
            <Objections />
          </Layout>
        </ProtectedRoute>
      </Route>
      
      {/* Fulfillment Ops Routes */}
      <Route path="/ai-website-setup">
        <ProtectedRoute>
          <Layout>
            <AIWebsiteSetup />
          </Layout>
        </ProtectedRoute>
      </Route>
      <Route path="/system-installation">
        <ProtectedRoute>
          <Layout>
            <SystemInstallation />
          </Layout>
        </ProtectedRoute>
      </Route>
      <Route path="/qa-checklist">
        <ProtectedRoute>
          <Layout>
            <QAChecklist />
          </Layout>
        </ProtectedRoute>
      </Route>
      
      {/* 404 Fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster position="top-right" theme="dark" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
