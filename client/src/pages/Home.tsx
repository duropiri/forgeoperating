import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ArrowRight, 
  Target, 
  Phone, 
  DollarSign, 
  TrendingUp,
  Zap,
  Users
} from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border pb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight mb-2">
            COMMAND <span className="text-primary">CENTER</span>
          </h1>
          <p className="text-muted-foreground font-mono text-sm md:text-base max-w-2xl">
            SYSTEM STATUS: ONLINE // TARGET: $25,000 DEAL // MODE: HUNTER
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/scripts">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wide">
              <Phone className="mr-2 w-4 h-4" /> START CALLING
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard 
          title="DAILY CALLS" 
          value="42" 
          target="/ 60" 
          icon={Phone} 
          trend="+12%" 
          color="text-blue-400"
        />
        <KpiCard 
          title="PIPELINE VALUE" 
          value="$125K" 
          target="" 
          icon={DollarSign} 
          trend="+5%" 
          color="text-primary"
        />
        <KpiCard 
          title="CLOSE RATE" 
          value="18%" 
          target="TARGET: 20%" 
          icon={Target} 
          trend="-2%" 
          color="text-red-400"
        />
        <KpiCard 
          title="LEADS ACTIVE" 
          value="843" 
          target="NEW: +50" 
          icon={Users} 
          trend="+8%" 
          color="text-green-400"
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Action Area */}
        <Card className="lg:col-span-2 border-border bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-display text-xl flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              MISSION CONTROL
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="p-4 rounded-lg border border-border bg-background/50 hover:border-primary/50 transition-colors group cursor-pointer">
              <Link href="/playbook">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Review The Playbook</h3>
                    <p className="text-sm text-muted-foreground font-mono mt-1">Master the "Digital Overhaul" pitch and value prop.</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>

            <div className="p-4 rounded-lg border border-border bg-background/50 hover:border-primary/50 transition-colors group cursor-pointer">
              <Link href="/objections">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Objection Killer</h3>
                    <p className="text-sm text-muted-foreground font-mono mt-1">Handle "Too Expensive" and "Not Interested" like a pro.</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>

            <div className="p-4 rounded-lg border border-border bg-background/50 hover:border-primary/50 transition-colors group cursor-pointer">
              <Link href="/scripts">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Live Call Scripts</h3>
                    <p className="text-sm text-muted-foreground font-mono mt-1">Access the "Review Repair" and "GPT Lead" scripts.</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Live Feed */}
        <Card className="border-border bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-display text-xl flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              LIVE WINS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Alex M.", deal: "$25,000", time: "12m ago", type: "Closed Deal" },
                { name: "Sarah K.", deal: "$15,000", time: "45m ago", type: "Closed Deal" },
                { name: "Mike R.", deal: "Meeting", time: "1h ago", type: "Booked Demo" },
                { name: "Jessica T.", deal: "$25,000", time: "2h ago", type: "Closed Deal" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0 last:pb-0">
                  <div>
                    <p className="font-bold text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{item.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-primary">{item.deal}</p>
                    <p className="text-[10px] text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-6 text-xs font-mono">VIEW ALL ACTIVITY</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function KpiCard({ title, value, target, icon: Icon, trend, color }: any) {
  return (
    <Card className="border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 rounded-md bg-background border border-border">
            <Icon className={`w-5 h-5 ${color}`} />
          </div>
          <span className={`text-xs font-mono font-bold ${trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
            {trend}
          </span>
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-1">{title}</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-display font-bold">{value}</h3>
            <span className="text-xs text-muted-foreground font-mono">{target}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
