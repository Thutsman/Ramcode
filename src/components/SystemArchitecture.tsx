export function SystemArchitecture() {
  return (
    <div className="w-full" role="img" aria-label="System architecture showing field sensors connecting through remote unit and internet to control centre and monitoring staff">
      <svg
        viewBox="0 0 1200 800"
        className="mx-auto w-full max-w-5xl"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="architecture-title architecture-desc"
      >
        <title id="architecture-title">Leach Plant Monitoring System Architecture</title>
        <desc id="architecture-desc">
          Field sensors and actuators (FT, PT, TT, motor) connect to a remote PLC/RTU unit at the plant with local access.
          Data flows via 3G/4G/GPRS/SMS/ADSL through Internet or VPN to the control centre dashboards and maintenance staff,
          with SMS and email alarms sent to authorized users.
        </desc>

        <defs>
          {/* Arrow marker */}
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            fill="hsl(16, 100%, 60%)"
          >
            <polygon points="0 0, 10 3, 0 6" />
          </marker>
        </defs>

        {/* Mobile Layout - Vertical Stack (visible below md breakpoint) */}
        <g className="md:hidden">
          {/* Field Sensors - Bottom */}
          <g transform="translate(100, 650)">
            <rect x="0" y="0" width="300" height="120" rx="8" fill="hsl(225, 39%, 10%)" stroke="hsl(16, 100%, 60%, 0.3)" strokeWidth="2" />
            <text x="150" y="25" textAnchor="middle" fill="hsl(16, 100%, 60%)" fontSize="11" fontWeight="600" letterSpacing="0.5">FIELD SENSORS & ACTUATORS</text>
            
            {/* Sensor icons */}
            <g transform="translate(40, 45)">
              <circle cx="0" cy="15" r="12" fill="none" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
              <circle cx="0" cy="15" r="8" fill="hsl(220, 28%, 66%)" />
              <text x="0" y="40" textAnchor="middle" fill="hsl(222, 100%, 97%)" fontSize="10">FT</text>
            </g>
            <g transform="translate(110, 45)">
              <circle cx="0" cy="15" r="12" fill="none" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
              <line x1="-5" y1="10" x2="5" y2="20" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
              <line x1="-5" y1="20" x2="5" y2="10" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
              <text x="0" y="40" textAnchor="middle" fill="hsl(222, 100%, 97%)" fontSize="10">PT</text>
            </g>
            <g transform="translate(180, 45)">
              <circle cx="0" cy="15" r="12" fill="none" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
              <line x1="0" y1="8" x2="0" y2="22" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
              <text x="0" y="40" textAnchor="middle" fill="hsl(222, 100%, 97%)" fontSize="10">TT</text>
            </g>
            <g transform="translate(250, 45)">
              <rect x="-10" y="5" width="20" height="20" rx="2" fill="none" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
              <text x="0" y="18" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="9" fontWeight="700">M</text>
              <text x="0" y="40" textAnchor="middle" fill="hsl(222, 100%, 97%)" fontSize="10">Motor</text>
            </g>
          </g>

          {/* Arrow up */}
          <line x1="250" y1="640" x2="250" y2="560" stroke="hsl(16, 100%, 60%)" strokeWidth="3" markerEnd="url(#arrowhead)" />

          {/* Remote Unit - Middle Lower */}
          <g transform="translate(50, 420)">
            <rect x="0" y="0" width="400" height="120" rx="8" fill="hsl(225, 39%, 10%)" stroke="hsl(16, 100%, 60%, 0.3)" strokeWidth="2" />
            <text x="200" y="25" textAnchor="middle" fill="hsl(16, 100%, 60%)" fontSize="12" fontWeight="600" letterSpacing="0.5">REMOTE UNIT (PLC/RTU)</text>
            
            <rect x="80" y="45" width="240" height="50" rx="4" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%, 0.4)" strokeWidth="1.5" />
            <line x1="90" y1="55" x2="310" y2="55" stroke="hsl(16, 100%, 60%, 0.3)" strokeWidth="1" />
            <line x1="90" y1="65" x2="310" y2="65" stroke="hsl(16, 100%, 60%, 0.3)" strokeWidth="1" />
            <circle cx="300" cy="80" r="4" fill="hsl(16, 100%, 60%)" />
            
            <g transform="translate(20, 50)">
              <rect x="0" y="0" width="40" height="30" rx="2" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="1.5" />
              <rect x="5" y="4" width="30" height="18" fill="hsl(220, 28%, 66%, 0.2)" />
              <line x1="15" y1="26" x2="25" y2="26" stroke="hsl(220, 28%, 66%)" strokeWidth="1" />
              <text x="20" y="42" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="8">Local access</text>
            </g>
          </g>

          {/* Arrow up */}
          <line x1="250" y1="410" x2="250" y2="340" stroke="hsl(16, 100%, 60%)" strokeWidth="3" markerEnd="url(#arrowhead)" />
          
          {/* Communications label */}
          <g transform="translate(250, 370)">
            <text textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="9">3G / 4G / GPRS</text>
            <text y="12" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="9">SMS / ADSL</text>
          </g>

          {/* Internet/VPN Cloud - Middle Upper */}
          <g transform="translate(100, 240)">
            <ellipse cx="150" cy="30" rx="140" ry="35" fill="hsl(224, 38%, 14%)" stroke="hsl(16, 100%, 60%, 0.4)" strokeWidth="2" />
            <text x="150" y="35" textAnchor="middle" fill="hsl(222, 100%, 97%)" fontSize="12" fontWeight="600">INTERNET OR VPN</text>
          </g>

          {/* Arrow up - splits into three */}
          <line x1="250" y1="230" x2="250" y2="180" stroke="hsl(16, 100%, 60%)" strokeWidth="3" />
          <line x1="250" y1="180" x2="130" y2="140" stroke="hsl(16, 100%, 60%)" strokeWidth="3" markerEnd="url(#arrowhead)" />
          <line x1="250" y1="180" x2="250" y2="140" stroke="hsl(16, 100%, 60%)" strokeWidth="3" markerEnd="url(#arrowhead)" />
          <line x1="250" y1="180" x2="370" y2="140" stroke="hsl(16, 100%, 60%)" strokeWidth="3" markerEnd="url(#arrowhead)" />

          {/* Control Centre - Top Left */}
          <g transform="translate(30, 20)">
            <rect x="0" y="0" width="180" height="100" rx="8" fill="hsl(225, 39%, 10%)" stroke="hsl(16, 100%, 60%, 0.3)" strokeWidth="2" />
            <text x="90" y="20" textAnchor="middle" fill="hsl(16, 100%, 60%)" fontSize="11" fontWeight="600">CONTROL CENTRE</text>
            
            <rect x="20" y="35" width="45" height="35" rx="2" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="1.5" />
            <rect x="25" y="39" width="35" height="22" fill="hsl(16, 100%, 60%, 0.1)" />
            <line x1="30" y1="45" x2="55" y2="45" stroke="hsl(16, 100%, 60%)" strokeWidth="1" />
            
            <rect x="75" y="35" width="45" height="35" rx="2" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="1.5" />
            <rect x="80" y="39" width="35" height="22" fill="hsl(16, 100%, 60%, 0.1)" />
            <line x1="85" y1="45" x2="110" y2="45" stroke="hsl(16, 100%, 60%)" strokeWidth="1" />
            
            <rect x="130" y="35" width="45" height="35" rx="2" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="1.5" />
            <rect x="135" y="39" width="35" height="22" fill="hsl(16, 100%, 60%, 0.1)" />
            <line x1="140" y1="45" x2="165" y2="45" stroke="hsl(16, 100%, 60%)" strokeWidth="1" />
            
            <text x="90" y="88" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="9">Dashboards</text>
          </g>

          {/* Maintenance Staff - Top Center */}
          <g transform="translate(220, 20)">
            <rect x="0" y="0" width="140" height="100" rx="8" fill="hsl(225, 39%, 10%)" stroke="hsl(16, 100%, 60%, 0.3)" strokeWidth="2" />
            <text x="70" y="20" textAnchor="middle" fill="hsl(16, 100%, 60%)" fontSize="11" fontWeight="600">MAINTENANCE</text>
            
            <circle cx="70" cy="50" r="18" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
            <circle cx="70" cy="45" r="6" fill="hsl(220, 28%, 66%)" />
            <path d="M 55 65 Q 70 55 85 65" fill="none" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
            
            <text x="70" y="88" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="9">Staff & Mobile</text>
          </g>

          {/* Alarms - Top Right */}
          <g transform="translate(370, 20)">
            <rect x="0" y="0" width="120" height="100" rx="8" fill="hsl(225, 39%, 10%)" stroke="hsl(16, 100%, 60%, 0.3)" strokeWidth="2" />
            <text x="60" y="20" textAnchor="middle" fill="hsl(16, 100%, 60%)" fontSize="11" fontWeight="600">ALARMS</text>
            
            <rect x="20" y="38" width="30" height="22" rx="2" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="1.5" />
            <circle cx="35" cy="49" r="2" fill="hsl(220, 28%, 66%)" />
            <text x="60" y="52" fill="hsl(220, 28%, 66%)" fontSize="9">SMS</text>
            
            <rect x="20" y="66" width="30" height="22" rx="2" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="1.5" />
            <text x="27" y="80" fill="hsl(220, 28%, 66%)" fontSize="9">@</text>
            <text x="60" y="80" fill="hsl(220, 28%, 66%)" fontSize="9">Email</text>
          </g>
        </g>

        {/* Desktop Layout - Horizontal Flow (visible md and up) */}
        <g className="hidden md:block">
          {/* Field Sensors - Left */}
          <g transform="translate(50, 300)">
            <rect x="0" y="0" width="200" height="180" rx="8" fill="hsl(225, 39%, 10%)" stroke="hsl(16, 100%, 60%, 0.3)" strokeWidth="2" />
            <text x="100" y="30" textAnchor="middle" fill="hsl(16, 100%, 60%)" fontSize="13" fontWeight="600" letterSpacing="0.5">FIELD SENSORS</text>
            <text x="100" y="48" textAnchor="middle" fill="hsl(16, 100%, 60%)" fontSize="13" fontWeight="600" letterSpacing="0.5">& ACTUATORS</text>
            
            {/* Sensor icons in grid */}
            <g transform="translate(50, 75)">
              <circle cx="0" cy="0" r="16" fill="none" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
              <circle cx="0" cy="0" r="10" fill="hsl(220, 28%, 66%)" />
              <text x="0" y="30" textAnchor="middle" fill="hsl(222, 100%, 97%)" fontSize="11">FT</text>
              <text x="0" y="42" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="8">Flow</text>
            </g>
            <g transform="translate(150, 75)">
              <circle cx="0" cy="0" r="16" fill="none" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
              <line x1="-7" y1="-5" x2="7" y2="5" stroke="hsl(220, 28%, 66%)" strokeWidth="2.5" />
              <line x1="-7" y1="5" x2="7" y2="-5" stroke="hsl(220, 28%, 66%)" strokeWidth="2.5" />
              <text x="0" y="30" textAnchor="middle" fill="hsl(222, 100%, 97%)" fontSize="11">PT</text>
              <text x="0" y="42" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="8">Pressure</text>
            </g>
            <g transform="translate(50, 130)">
              <circle cx="0" cy="0" r="16" fill="none" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
              <line x1="0" y1="-10" x2="0" y2="10" stroke="hsl(220, 28%, 66%)" strokeWidth="2.5" />
              <text x="0" y="30" textAnchor="middle" fill="hsl(222, 100%, 97%)" fontSize="11">TT</text>
              <text x="0" y="42" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="8">Temperature</text>
            </g>
            <g transform="translate(150, 130)">
              <rect x="-14" y="-14" width="28" height="28" rx="3" fill="none" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
              <text x="0" y="6" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="13" fontWeight="700">M</text>
              <text x="0" y="30" textAnchor="middle" fill="hsl(222, 100%, 97%)" fontSize="11">Motor</text>
            </g>
          </g>

          {/* Arrow right */}
          <line x1="260" y1="390" x2="340" y2="390" stroke="hsl(16, 100%, 60%)" strokeWidth="4" markerEnd="url(#arrowhead)" />

          {/* Remote Unit - Center */}
          <g transform="translate(350, 280)">
            <rect x="0" y="0" width="260" height="220" rx="8" fill="hsl(225, 39%, 10%)" stroke="hsl(16, 100%, 60%, 0.3)" strokeWidth="2" />
            <text x="130" y="30" textAnchor="middle" fill="hsl(16, 100%, 60%)" fontSize="14" fontWeight="600" letterSpacing="0.5">REMOTE UNIT</text>
            <text x="130" y="50" textAnchor="middle" fill="hsl(16, 100%, 60%)" fontSize="13" fontWeight="600">(PLC / RTU)</text>
            
            {/* PLC Panel */}
            <rect x="40" y="75" width="180" height="90" rx="4" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%, 0.4)" strokeWidth="2" />
            <line x1="50" y1="90" x2="210" y2="90" stroke="hsl(16, 100%, 60%, 0.3)" strokeWidth="1.5" />
            <line x1="50" y1="105" x2="210" y2="105" stroke="hsl(16, 100%, 60%, 0.3)" strokeWidth="1.5" />
            <line x1="50" y1="120" x2="210" y2="120" stroke="hsl(16, 100%, 60%, 0.3)" strokeWidth="1.5" />
            <circle cx="200" cy="150" r="6" fill="hsl(16, 100%, 60%)" />
            <text x="130" y="190" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="10">Panel at plant</text>
            
            {/* Local laptop */}
            <g transform="translate(20, 75)">
              <rect x="-40" y="0" width="50" height="38" rx="3" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
              <rect x="-35" y="5" width="40" height="24" fill="hsl(220, 28%, 66%, 0.15)" />
              <line x1="-45" y1="38" x2="-5" y2="38" stroke="hsl(220, 28%, 66%)" strokeWidth="1.5" />
              <text x="-15" y="55" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="9">Local plant</text>
              <text x="-15" y="66" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="9">access</text>
            </g>
          </g>

          {/* Arrow right */}
          <line x1="620" y1="390" x2="700" y2="390" stroke="hsl(16, 100%, 60%)" strokeWidth="4" markerEnd="url(#arrowhead)" />
          
          {/* Communications label */}
          <g transform="translate(660, 350)">
            <text textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="10">3G / 4G</text>
            <text y="15" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="10">GPRS / SMS</text>
            <text y="30" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="10">ADSL</text>
          </g>

          {/* Internet/VPN Cloud */}
          <g transform="translate(710, 320)">
            <ellipse cx="90" cy="70" rx="85" ry="50" fill="hsl(224, 38%, 14%)" stroke="hsl(16, 100%, 60%, 0.4)" strokeWidth="2" />
            <text x="90" y="70" textAnchor="middle" fill="hsl(222, 100%, 97%)" fontSize="13" fontWeight="600">INTERNET</text>
            <text x="90" y="88" textAnchor="middle" fill="hsl(222, 100%, 97%)" fontSize="13" fontWeight="600">OR VPN</text>
          </g>

          {/* Arrow right - splits into three */}
          <line x1="885" y1="390" x2="940" y2="390" stroke="hsl(16, 100%, 60%)" strokeWidth="4" />
          <line x1="940" y1="390" x2="970" y2="150" stroke="hsl(16, 100%, 60%)" strokeWidth="3" markerEnd="url(#arrowhead)" />
          <line x1="940" y1="390" x2="970" y2="390" stroke="hsl(16, 100%, 60%)" strokeWidth="3" markerEnd="url(#arrowhead)" />
          <line x1="940" y1="390" x2="970" y2="630" stroke="hsl(16, 100%, 60%)" strokeWidth="3" markerEnd="url(#arrowhead)" />

          {/* Control Centre - Top Right */}
          <g transform="translate(980, 50)">
            <rect x="0" y="0" width="190" height="130" rx="8" fill="hsl(225, 39%, 10%)" stroke="hsl(16, 100%, 60%, 0.3)" strokeWidth="2" />
            <text x="95" y="25" textAnchor="middle" fill="hsl(16, 100%, 60%)" fontSize="13" fontWeight="600">CONTROL CENTRE</text>
            
            {/* Three monitors */}
            <rect x="15" y="45" width="50" height="40" rx="2" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
            <rect x="20" y="50" width="40" height="26" fill="hsl(16, 100%, 60%, 0.12)" />
            <line x1="25" y1="58" x2="55" y2="58" stroke="hsl(16, 100%, 60%)" strokeWidth="1.5" />
            
            <rect x="75" y="45" width="50" height="40" rx="2" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
            <rect x="80" y="50" width="40" height="26" fill="hsl(16, 100%, 60%, 0.12)" />
            <line x1="85" y1="58" x2="115" y2="58" stroke="hsl(16, 100%, 60%)" strokeWidth="1.5" />
            
            <rect x="135" y="45" width="50" height="40" rx="2" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
            <rect x="140" y="50" width="40" height="26" fill="hsl(16, 100%, 60%, 0.12)" />
            <line x1="145" y1="58" x2="175" y2="58" stroke="hsl(16, 100%, 60%)" strokeWidth="1.5" />
            
            <text x="95" y="108" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="11">Live dashboards</text>
          </g>

          {/* Maintenance Staff - Center Right */}
          <g transform="translate(980, 320)">
            <rect x="0" y="0" width="190" height="130" rx="8" fill="hsl(225, 39%, 10%)" stroke="hsl(16, 100%, 60%, 0.3)" strokeWidth="2" />
            <text x="95" y="25" textAnchor="middle" fill="hsl(16, 100%, 60%)" fontSize="13" fontWeight="600">MAINTENANCE</text>
            
            <circle cx="95" cy="68" r="24" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
            <circle cx="95" cy="62" r="8" fill="hsl(220, 28%, 66%)" />
            <path d="M 75 85 Q 95 72 115 85" fill="none" stroke="hsl(220, 28%, 66%)" strokeWidth="3" />
            
            <text x="95" y="110" textAnchor="middle" fill="hsl(220, 28%, 66%)" fontSize="11">Staff & mobile users</text>
          </g>

          {/* Alarms - Bottom Right */}
          <g transform="translate(980, 580)">
            <rect x="0" y="0" width="190" height="130" rx="8" fill="hsl(225, 39%, 10%)" stroke="hsl(16, 100%, 60%, 0.3)" strokeWidth="2" />
            <text x="95" y="25" textAnchor="middle" fill="hsl(16, 100%, 60%)" fontSize="13" fontWeight="600">ALARMS</text>
            
            {/* SMS */}
            <g transform="translate(35, 50)">
              <rect x="0" y="0" width="45" height="32" rx="3" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
              <circle cx="22" cy="16" r="3" fill="hsl(220, 28%, 66%)" />
              <text x="60" y="20" fill="hsl(220, 28%, 66%)" fontSize="12">SMS alerts</text>
            </g>
            
            {/* Email */}
            <g transform="translate(35, 90)">
              <rect x="0" y="0" width="45" height="32" rx="3" fill="hsl(224, 38%, 14%)" stroke="hsl(220, 28%, 66%)" strokeWidth="2" />
              <text x="13" y="22" fill="hsl(220, 28%, 66%)" fontSize="16" fontWeight="700">@</text>
              <text x="60" y="20" fill="hsl(220, 28%, 66%)" fontSize="12">Email alerts</text>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
