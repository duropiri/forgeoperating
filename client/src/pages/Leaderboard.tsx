import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, Medal, Star } from "lucide-react";

export default function Leaderboard() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="border-b border-border pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">LEADERBOARD</h1>
          <p className="text-muted-foreground font-mono">TOP PERFORMERS // THIS MONTH</p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-xs font-mono text-muted-foreground">TOTAL REVENUE</p>
          <p className="text-3xl font-display font-bold text-primary">$485,000</p>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mb-12">
        {/* 2nd Place */}
        <div className="order-2 md:order-1">
          <PodiumCard 
            rank={2} 
            name="Sarah Jenkins" 
            revenue="$85,000" 
            deals="3" 
            avatar="SJ"
            color="text-gray-300"
            borderColor="border-gray-500/50"
          />
        </div>
        
        {/* 1st Place */}
        <div className="order-1 md:order-2 -mt-8 md:-mt-12 z-10">
          <PodiumCard 
            rank={1} 
            name="Michael Ross" 
            revenue="$112,500" 
            deals="5" 
            avatar="MR"
            color="text-yellow-400"
            borderColor="border-yellow-500"
            glow
          />
        </div>
        
        {/* 3rd Place */}
        <div className="order-3 md:order-3">
          <PodiumCard 
            rank={3} 
            name="David Chen" 
            revenue="$62,000" 
            deals="2" 
            avatar="DC"
            color="text-amber-700"
            borderColor="border-amber-700/50"
          />
        </div>
      </div>

      {/* The Rest of the Pack */}
      <Card className="border-border bg-card/50">
        <CardHeader>
          <CardTitle className="font-display text-lg">THE PACK</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {[
              { rank: 4, name: "Jessica T.", revenue: "$50,000", deals: 2, trend: "+1" },
              { rank: 5, name: "Alex M.", revenue: "$25,000", deals: 1, trend: "-1" },
              { rank: 6, name: "Ryan K.", revenue: "$25,000", deals: 1, trend: "=" },
              { rank: 7, name: "Emily W.", revenue: "$15,000", deals: 1, trend: "+2" },
              { rank: 8, name: "Chris P.", revenue: "$0", deals: 0, trend: "=" },
            ].map((rep) => (
              <div key={rep.rank} className="flex items-center justify-between p-4 hover:bg-background/50 rounded-lg transition-colors group">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-muted-foreground w-6 text-center">{rep.rank}</span>
                  <Avatar className="h-8 w-8 border border-border">
                    <AvatarFallback className="bg-background text-xs">{rep.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <span className="font-bold text-sm">{rep.name}</span>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right hidden sm:block">
                    <span className="text-xs text-muted-foreground font-mono block">DEALS</span>
                    <span className="font-bold text-sm">{rep.deals}</span>
                  </div>
                  <div className="text-right w-24">
                    <span className="text-xs text-muted-foreground font-mono block">REVENUE</span>
                    <span className="font-bold text-primary font-mono">{rep.revenue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function PodiumCard({ rank, name, revenue, deals, avatar, color, borderColor, glow }: any) {
  return (
    <Card className={`relative border-2 ${borderColor} bg-card/80 backdrop-blur-sm ${glow ? 'shadow-[0_0_30px_rgba(255,215,0,0.15)]' : ''}`}>
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold font-display border-2 ${borderColor} bg-background ${color}`}>
          {rank}
        </div>
      </div>
      <CardContent className="pt-8 pb-6 text-center">
        <Avatar className={`h-16 w-16 mx-auto mb-3 border-2 ${borderColor}`}>
          <AvatarFallback className="bg-background text-lg font-bold">{avatar}</AvatarFallback>
        </Avatar>
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        <p className={`font-mono font-bold text-xl ${glow ? 'text-primary' : 'text-muted-foreground'}`}>{revenue}</p>
        <div className="mt-4 flex justify-center gap-2">
          <Badge variant="outline" className="font-mono text-[10px] border-border">
            {deals} DEALS
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
