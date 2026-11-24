import { ArrowDown, Radio, Server, Cloud, Monitor, Users, Bell } from "lucide-react";

export function SystemArchitecture() {
  return (
    <div className="w-full" role="img" aria-label="System architecture showing field sensors connecting through remote unit and internet to control centre and monitoring staff">
      {/* Mobile Layout - HTML/CSS Cards */}
      <div className="md:hidden space-y-4">
        {/* Field Sensors */}
        <div className="border border-primary/30 bg-card/80 p-6 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <Radio className="h-10 w-10 text-primary shrink-0" />
            <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
              Field Sensors & Actuators
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full border-2 border-muted-foreground/60 flex items-center justify-center shrink-0">
                <div className="h-4 w-4 rounded-full bg-muted-foreground/60" />
              </div>
              <span className="text-muted-foreground">FT · Flow</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full border-2 border-muted-foreground/60 flex items-center justify-center shrink-0">
                <div className="text-muted-foreground/60 font-bold text-xs">×</div>
              </div>
              <span className="text-muted-foreground">PT · Pressure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full border-2 border-muted-foreground/60 flex items-center justify-center shrink-0">
                <div className="h-4 w-0.5 bg-muted-foreground/60" />
              </div>
              <span className="text-muted-foreground">TT · Temperature</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded border-2 border-muted-foreground/60 flex items-center justify-center shrink-0">
                <span className="text-muted-foreground/60 font-bold text-sm">M</span>
              </div>
              <span className="text-muted-foreground">Motor</span>
            </div>
          </div>
        </div>

        {/* Arrow Connector */}
        <div className="flex justify-center">
          <ArrowDown className="h-8 w-8 text-primary" />
        </div>

        {/* Remote Unit */}
        <div className="border border-primary/30 bg-card/80 p-6 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <Server className="h-10 w-10 text-primary shrink-0" />
            <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
              Remote Unit (PLC/RTU)
            </h3>
          </div>
          <div className="space-y-3">
            <div className="border border-muted/40 bg-muted/20 p-4 rounded">
              <p className="text-sm text-muted-foreground">Control panel at plant site</p>
              <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                <Monitor className="h-4 w-4" />
                <span>Local plant access via HMI/laptop</span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Connector with Label */}
        <div className="flex flex-col items-center gap-2">
          <ArrowDown className="h-8 w-8 text-primary" />
          <div className="text-center space-y-0.5">
            <p className="text-xs text-muted-foreground">3G / 4G / GPRS</p>
            <p className="text-xs text-muted-foreground">SMS / ADSL</p>
          </div>
        </div>

        {/* Internet/VPN */}
        <div className="border border-primary/40 bg-card/80 p-6 rounded-lg">
          <div className="flex items-center gap-4">
            <Cloud className="h-10 w-10 text-primary shrink-0" />
            <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
              Internet or VPN
            </h3>
          </div>
        </div>

        {/* Arrow Connector */}
        <div className="flex justify-center">
          <ArrowDown className="h-8 w-8 text-primary" />
        </div>

        {/* Destinations - Three Cards */}
        <div className="space-y-4">
          {/* Control Centre */}
          <div className="border border-primary/30 bg-card/80 p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-3">
              <Monitor className="h-9 w-9 text-primary shrink-0" />
              <h3 className="font-display text-base font-bold tracking-tight text-foreground">
                Control Centre
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">Live dashboards and plant screens</p>
          </div>

          {/* Maintenance Staff */}
          <div className="border border-primary/30 bg-card/80 p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-3">
              <Users className="h-9 w-9 text-primary shrink-0" />
              <h3 className="font-display text-base font-bold tracking-tight text-foreground">
                Maintenance Staff
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">Mobile users and technicians</p>
          </div>

          {/* Alarms */}
          <div className="border border-primary/30 bg-card/80 p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-3">
              <Bell className="h-9 w-9 text-primary shrink-0" />
              <h3 className="font-display text-base font-bold tracking-tight text-foreground">
                SMS & Email Alarms
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">Instant alerts to authorized users</p>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Improved SVG */}
      <svg
        viewBox="0 0 1400 700"
        className="hidden md:block mx-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="architecture-title architecture-desc"
      >
        <title id="architecture-title">Leach Plant Monitoring System Architecture</title>
        <desc id="architecture-desc">
          Field sensors and actuators connect to a remote PLC/RTU unit at the plant with local access.
          Data flows via 3G/4G/GPRS/SMS/ADSL through Internet or VPN to the control centre dashboards and maintenance staff,
          with SMS and email alarms sent to authorized users.
        </desc>

        <defs>
          <marker
            id="arrowhead"
            markerWidth="12"
            markerHeight="12"
            refX="10"
            refY="3.5"
            orient="auto"
            fill="hsl(16, 100%, 60%)"
          >
            <polygon points="0 0, 12 3.5, 0 7" />
          </marker>
        </defs>

        {/* Field Sensors - Left */}
        <g transform="translate(50, 250)">
          <rect x="0" y="0" width="240" height="200" rx="8" fill="hsl(225, 39%, 10%)" stroke="hsl(16, 100%, 60%, 0.35)" strokeWidth="2.5" />
          <text x="120" y="32" textAnchor="middle" fill="hsl(16, 100%, 60%)" fontSize="15" fontWeight="600" letterSpacing="0.5">FIELD SENSORS</text>
          <text x="120" y="52" textAnchor="middle" fill="hsl(16, 100%, 60%)" fontSize="15" fontWeight="600" letterSpacing="0.5">& ACTUATORS</text>
          
          <g transform="translate(60, 85)">
            <circle cx="0" cy="0" r="18" fill="none" stroke="hsl(220, 28%, 66%)" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="11" fill="hsl(220, 28%, 66%)" />
            <text x="0" y="34" textAnchor="middle" fill="hsl(222, 100%, 97%)" fontSize="13" fontWeight="600">FT</text>
            <text x="0" y="50" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="11">Flow</text>
          </g>
          <g transform="translate(180, 85)">
            <circle cx="0" cy="0" r="18" fill="none" stroke="hsl(220, 28%, 66%)" strokeWidth="2.5" />
            <line x1="-8" y1="-6" x2="8" y2="6" stroke="hsl(220, 28%, 66%)" strokeWidth="3" />
            <line x1="-8" y1="6" x2="8" y2="-6" stroke="hsl(220, 28%, 66%)" strokeWidth="3" />
            <text x="0" y="34" textAnchor="middle" fill="hsl(222, 100%, 97%)" fontSize="13" fontWeight="600">PT</text>
            <text x="0" y="50" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="11">Pressure</text>
          </g>
          <g transform="translate(60, 145)">
            <circle cx="0" cy="0" r="18" fill="none" stroke="hsl(220, 28%, 66%)" strokeWidth="2.5" />
            <line x1="0" y1="-11" x2="0" y2="11" stroke="hsl(220, 28%, 66%)" strokeWidth="3" />
            <text x="0" y="34" textAnchor="middle" fill="hsl(222, 100%, 97%)" fontSize="13" fontWeight="600">TT</text>
            <text x="0" y="50" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="11">Temp.</text>
          </g>
          <g transform="translate(180, 145)">
            <rect x="-16" y="-16" width="32" height="32" rx="3" fill="none" stroke="hsl(220, 28%, 66%)" strokeWidth="2.5" />
            <text x="0" y="7" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="16" fontWeight="700">M</text>
            <text x="0" y="34" textAnchor="middle" fill="hsl(222, 100%, 97%)" fontSize="13" fontWeight="600">Motor</text>
          </g>
        </g>

        {/* Arrow */}
        <line x1="300" y1="350" x2="400" y2="350" stroke="hsl(16, 100%, 60%)" strokeWidth="4" markerEnd="url(#arrowhead)" />

        {/* Remote Unit - Center */}
        <g transform="translate(410, 240)">
          <rect x="0" y="0" width="300" height="220" rx="8" fill="hsl(225, 39%, 10%)" stroke="hsl(16, 100%, 60%, 0.35)" strokeWidth="2.5" />
          <text x="150" y="30" textAnchor="middle" fill="hsl(16, 100%, 60%)" fontSize="16" fontWeight="600" letterSpacing="0.5">REMOTE UNIT</text>
          <text x="150" y="52" textAnchor="middle" fill="hsl(16, 100%, 60%)" fontSize="15" fontWeight="600">(PLC / RTU)</text>
          
          <rect x="50" y="75" width="200" height="100" rx="4" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%, 0.5)" strokeWidth="2" />
          <line x1="60" y1="92" x2="240" y2="92" stroke="hsl(16, 100%, 60%, 0.3)" strokeWidth="2" />
          <line x1="60" y1="110" x2="240" y2="110" stroke="hsl(16, 100%, 60%, 0.3)" strokeWidth="2" />
          <line x1="60" y1="128" x2="240" y2="128" stroke="hsl(16, 100%, 60%, 0.3)" strokeWidth="2" />
          <circle cx="230" cy="160" r="7" fill="hsl(16, 100%, 60%)" />
          <text x="150" y="200" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="12">Control panel at plant</text>
          
          <g transform="translate(20, 90)">
            <rect x="-45" y="0" width="55" height="42" rx="3" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
            <rect x="-40" y="5" width="45" height="27" fill="hsl(220, 28%, 66%, 0.15)" />
            <line x1="-50" y1="42" x2="-5" y2="42" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
            <text x="-17.5" y="62" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="10">Local plant</text>
            <text x="-17.5" y="75" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="10">access</text>
          </g>
        </g>

        {/* Arrow */}
        <line x1="720" y1="350" x2="820" y2="350" stroke="hsl(16, 100%, 60%)" strokeWidth="4" markerEnd="url(#arrowhead)" />
        
        <g transform="translate(770, 300)">
          <text textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="12">3G / 4G</text>
          <text y="17" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="12">GPRS / SMS</text>
          <text y="34" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="12">ADSL</text>
        </g>

        {/* Internet/VPN Cloud */}
        <g transform="translate(830, 285)">
          <ellipse cx="100" cy="65" rx="95" ry="55" fill="hsl(224, 38%, 14%)" stroke="hsl(16, 100%, 60%, 0.45)" strokeWidth="2.5" />
          <text x="100" y="62" textAnchor="middle" fill="hsl(222, 100%, 97%)" fontSize="15" fontWeight="600">INTERNET</text>
          <text x="100" y="82" textAnchor="middle" fill="hsl(222, 100%, 97%)" fontSize="15" fontWeight="600">OR VPN</text>
        </g>

        {/* Arrows to destinations */}
        <line x1="1025" y1="350" x2="1080" y2="350" stroke="hsl(16, 100%, 60%)" strokeWidth="4" />
        <line x1="1080" y1="350" x2="1120" y2="130" stroke="hsl(16, 100%, 60%)" strokeWidth="3.5" markerEnd="url(#arrowhead)" />
        <line x1="1080" y1="350" x2="1120" y2="350" stroke="hsl(16, 100%, 60%)" strokeWidth="3.5" markerEnd="url(#arrowhead)" />
        <line x1="1080" y1="350" x2="1120" y2="570" stroke="hsl(16, 100%, 60%)" strokeWidth="3.5" markerEnd="url(#arrowhead)" />

        {/* Control Centre */}
        <g transform="translate(1130, 50)">
          <rect x="0" y="0" width="220" height="140" rx="8" fill="hsl(225, 39%, 10%)" stroke="hsl(16, 100%, 60%, 0.35)" strokeWidth="2.5" />
          <text x="110" y="28" textAnchor="middle" fill="hsl(16, 100%, 60%)" fontSize="15" fontWeight="600">CONTROL CENTRE</text>
          
          <rect x="20" y="48" width="55" height="45" rx="2" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
          <rect x="25" y="53" width="45" height="30" fill="hsl(16, 100%, 60%, 0.12)" />
          <line x1="30" y1="62" x2="65" y2="62" stroke="hsl(16, 100%, 60%)" strokeWidth="2" />
          
          <rect x="83" y="48" width="55" height="45" rx="2" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
          <rect x="88" y="53" width="45" height="30" fill="hsl(16, 100%, 60%, 0.12)" />
          <line x1="93" y1="62" x2="128" y2="62" stroke="hsl(16, 100%, 60%)" strokeWidth="2" />
          
          <rect x="146" y="48" width="55" height="45" rx="2" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
          <rect x="151" y="53" width="45" height="30" fill="hsl(16, 100%, 60%, 0.12)" />
          <line x1="156" y1="62" x2="191" y2="62" stroke="hsl(16, 100%, 60%)" strokeWidth="2" />
          
          <text x="110" y="118" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="13">Live dashboards</text>
        </g>

        {/* Maintenance Staff */}
        <g transform="translate(1130, 280)">
          <rect x="0" y="0" width="220" height="140" rx="8" fill="hsl(225, 39%, 10%)" stroke="hsl(16, 100%, 60%, 0.35)" strokeWidth="2.5" />
          <text x="110" y="28" textAnchor="middle" fill="hsl(16, 100%, 60%)" fontSize="15" fontWeight="600">MAINTENANCE</text>
          
          <circle cx="110" cy="75" r="26" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="2.5" />
          <circle cx="110" cy="68" r="9" fill="hsl(220, 28%, 66%)" />
          <path d="M 90 90 Q 110 77 130 90" fill="none" stroke="hsl(220, 28%, 66%)" strokeWidth="3.5" />
          
          <text x="110" y="122" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="13">Staff & mobile users</text>
        </g>

        {/* Alarms */}
        <g transform="translate(1130, 510)">
          <rect x="0" y="0" width="220" height="140" rx="8" fill="hsl(225, 39%, 10%)" stroke="hsl(16, 100%, 60%, 0.35)" strokeWidth="2.5" />
          <text x="110" y="28" textAnchor="middle" fill="hsl(16, 100%, 60%)" fontSize="15" fontWeight="600">ALARMS</text>
          
          <g transform="translate(40, 55)">
            <rect x="0" y="0" width="50" height="36" rx="3" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
            <circle cx="25" cy="18" r="4" fill="hsl(220, 28%, 66%)" />
            <text x="65" y="24" fill="hsl(220, 28%, 66%)" fontSize="14">SMS alerts</text>
          </g>
          
          <g transform="translate(40, 100)">
            <rect x="0" y="0" width="50" height="36" rx="3" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
            <text x="15" y="25" fill="hsl(220, 28%, 66%)" fontSize="18" fontWeight="700">@</text>
            <text x="65" y="24" fill="hsl(220, 28%, 66%)" fontSize="14">Email alerts</text>
          </g>
        </g>
      </svg>
    </div>
  );
}
