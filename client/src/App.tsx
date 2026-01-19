import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";

// Public Pages
import Landing from "./pages/Landing";

// Sales Training Pages
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
      {/* Public Marketing Site */}
      <Route path="/site" component={Landing} />
      
      {/* Internal Training Hub (with Layout) */}
      <Route>
        <Layout>
          <Switch>
            {/* Sales Training Routes */}
            <Route path="/" component={Home} />
            <Route path="/playbook" component={Playbook} />
            <Route path="/scripts" component={Scripts} />
            <Route path="/objections" component={Objections} />
            
            {/* Fulfillment Ops Routes */}
            <Route path="/ai-website-setup" component={AIWebsiteSetup} />
            <Route path="/system-installation" component={SystemInstallation} />
            <Route path="/qa-checklist" component={QAChecklist} />
            
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Route>
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
