import smokeCoImage from '../assets/images/smoke.webp'
import doorExtendedImage from '../assets/images/extendeddoorwindow.png'
import tamperImage from '../assets/images/Control Panel Enclosure Tamper Switch.png'
import extremeImage from '../assets/images/RF-CMDWS-OD-319-NN.png'
import glassBreakImage from '../assets/images/RF-ARGB-NN.png'
import keyfobControlImage from '../assets/images/RF-KEYFOB-319-NN.png'
import keyfobPanicImage from '../assets/images/FOB Panic Button.png'
import miniDoorWindowImage from '../assets/images/RF-CMDWS-319-NN.png'
import ceilingMotionImage from '../assets/images/RF-CPIR-319-NN_blank.png'
import wallMotionImage from '../assets/images/RF-ARPIR-319-NN.png'
import panicButtonImage from '../assets/images/RF-PANIC-ONE-BUTTON-319-NN.png'
import heatDetectorImage from '../assets/images/RF-ROR-135S-319-NN.png'
import recessedDoorImage from '../assets/images/RF-RDWS-319-NN.png'
import totalWindowImage from '../assets/images/shock sensor.png'
import waterSensorImage from '../assets/images/RF-WATER-319-NN.png'
import pir433Image from '../assets/images/Wall Mounted PIR 433.png'

const products = [
  {
    slug: 'mini-doorwindow-sensors---wireless',
    name: 'Mini Door/Window Sensor',
    summary: 'Discrete contact for minimal visual impact.',
    image: miniDoorWindowImage,
    category: 'Perimeter',
    description: `The Mini Door/Window Sensor is a supervised, wireless sensor that detects the opening and closing of doors or windows.

New, high–powered Microchip delivers exceptional range; 360° with no "dead spots" or signal drop-offs. Patented design with an isolated antenna 1/8" above board and separated from batteries for superior RF performance and transmission efficiency. Substantially reduced interference from metal door and window frames. Reduced battery energy draw—lengthens the battery life.

Features:
• Signals: supervisory, tamper, and low battery
• Dual tamper; sensor and case for added security
• Effective with vertical or horizontal mount
• Replaceable extra long-life batteries: 2-3VDC lithium coin-cell
• Smaller and narrow switch package
• Superior RF range and performance, even on steel surfaces

Compatibility and Part Numbers:
• RF-CMDWS-319-NN: 319.5 MHz. UTC®, Interlogix®, GE®, ITI®, and Qolsys®
• RF-CMDWS-345-NN: 345 MHz. Honeywell® and 2GIG®
• RF-CMDWS-433-D-NN: 433 MHz. DSC®
• CEA-RF-CMDWS-ENC-BRN-KIT: Brown sensor and magnet cover kit contains 5 each, brown: sensor covers, sensor bases, magnet cover and magnet bases.`,
  },
  {
    slug: 'recessed-doorwindow-sensor---wireless',
    name: 'Mini Recessed Door/Window Sensor',
    summary: 'Hidden contact for clean installations.',
    image: recessedDoorImage,
    category: 'Perimeter',
    description: `The Recessed Door/Window Sensor is a supervised, wireless sensor that detects the opening and closing of doors or windows.

New, high–powered Microchip delivers exceptional range; no "dead spots" or signal drop-offs. Isolated spiral antenna provides much greater RF surface area to improve range. The antenna is mounted above the board and separated from batteries for contributing to the superior RF performance and transmission efficiency. Reduced battery energy draw—lengthens the battery life.

Features:
• Signals: supervisory, tamper, and low battery
• Tamper for added security
• Effective with vertical or horizontal mount
• Replaceable 3VDC lithium battery with exceptional long life
• Superior RF range and performance, even on steel surfaces

Compatibility and Part Numbers:
• RF-RDWS-319-NN: 319.5 MHz. UTC®, Interlogix®, GE®, ITI®, and Qolsys®
• RF-RDWS-345-NN: 345 MHz. Honeywell® and 2GIG®`,
  },
  {
    slug: 'total-window-sensor---wireless',
    name: 'Total Window Sensor/Shock Detector',
        summary: 'Multi-function door/window sensor with shock detection.',
    image: totalWindowImage,
    category: 'Perimeter',
    description: `A window sensor is great at detecting and sending an alarm signal when a contact is opened. ......but what if entry is made through smashing the window? The intruder is in the house - with no alarm signal!

The Wireless TOTAL Window Sensor™ provides complete intrusion protection for windows. It detects both a contact opening and window impact or breaking glass. The sensor contains a reed switch for openings and a tiny piezo detection device that detects vibrations and impact when mounted on a window frame. The detection circuit can be adjusted during installation to ensure TOTAL protection with the proper sensitivity.

Features:
• LED activates on impact activation and goes out on restore
• Adjustable potentiometer for impact/shock sensitivity
• Effective with vertical or horizontal mount
• Replaceable extra long-life batteries: 2-3VDC lithium coin cell
• Small and narrow switch package
• Superior RF performance, even on steel surfaces

Compatibility and Part Numbers:
• RF-SHK-319-NN: 319.5 MHz. UTC®, Interlogix®, GE®, ITI®, and Qolsys®
• RF-SHK-345-NN: 345 MHz. Honeywell® and 2GIG®`,
  },
  {
    slug: 'doorwindow-sensor,-extended',
    name: 'Extended Door/Window Sensor',
        summary: 'Door/window sensor with external contact.',
    image: doorExtendedImage,
    category: 'Perimeter',
    description: `The Mini Door/Window Sensor with Extended/External Contact is a supervised, wireless sensor that detects the opening and closing of doors or windows. When activated, the sensor transmits an open (trip) or close (restore) signal to the panel. These are the signals the unit provides: supervisory, tamper and low battery (as needed). An external contact can be connected to the transmitter by feeding contact wiring through the housing.

New, high–powered microchip delivers exceptional range; 360° with no dead spots or signal drop-offs. Patented design with an isolated antenna 1/8" above board and separated from batteries for superior RF performance and transmission efficiency. Reduced interference from metal door and window frames. Reduced battery energy draw lengthens the battery life.

Features:
• Option for wired external contact
• Signals: supervisory, tamper, and low battery
• Dual tamper; sensor and case for added security
• Effective with vertical or horizontal mount
• Replaceable extra long-life batteries: 2-3VDC lithium coin-cell
• Smaller and narrow switch package
• Superior RF range and performance, even on steel surfaces

Compatibility and Part Numbers:
• RF-CMDWSX-319-NN: 319.5 MHz. UTC®, Interlogix®, GE®, ITI®, and Qolsys®
• RF-CMDWSX-345-NN: 345 MHz. Honeywell® and 2GIG®`,
  },
  {
    slug: 'extreme-sensor---wireless',
    name: 'Extreme Outdoor Door/Gate Sensor',
        summary: 'Rugged sensor built for outdoor environments.',
    image: extremeImage,
        category: 'Perimeter',
    description: `The Extreme Sensor is a supervised, wireless sensor that detects the opening and closing of doors, window, gates, garage doors, etc. in extreme environment. –32°F (-35.6°C) to 120°F (49°C).

Developed and tested in Minnesota, US in extreme cold. Flawless RF transmission during one of the coldest weeks in Minnesota in 22 years (1/25/19-2/1/19), –32°F, with wind-chill temperatures down to –60°F! The unique design allows mounting the device outdoors with wood screws, plastic zip-ties or a combination of both. Powered by two extra long-life batteries. Available in 319.5 or 345 MHz frequencies.

Features:
• Rugged design to withstand outdoor application
• Small in size; 1/2 the size of other outdoor door and gate sensors
• Very small footprint. Sensor: 3.39"L x 1.34" W x .79" H. Magnet: 3"L x 1" W x .8" H
• Maximum magnet gap: 1.75"
• Mounting with screws, zip-type plastic straps or use both
• Operating temperature: -32 to 140°F (-35 to 60°C)
• 2 extra long-life batteries

Applications:
• Fences • Porches • Unheated Enclosed Areas • Doors • Storage Areas • Garages and Garage Doors • Windows • Hot Tub Buildings • Barns, Sheds, and Out Buildings • Gates • Pool Areas and Buildings • High Humidity and Wet Environment

Regulatory:
• FCC
• IC

Part Numbers and Compatibility:
• RF-CMDWS-OD-319-NN: 319.5 MHz. UTC®, Interlogix®, GE®, ITI®, and Qolsys®
• RF-CMDWS-OD-345-NN: 345 MHz. Honeywell®, 2GIG®`,
  },
  {
    slug: 'motion-detector,-wall-mounted-pir---wireless',
    name: 'Wall Mounted PIR 319 and 345 MHz',
    summary: 'Focused PIR coverage for interior spaces.',
    image: wallMotionImage,
    category: 'Detection',
    description: `A motion sensor (passive-infrared or PIR) detects movement within a specific area by sensing the infrared energy emitted from a body as it moves across the sensor's field of view. When this motion is detected, the sensor transmits an alarm signal to the control panel. Use the motion sensor to protect locations where door/window sensors are impractical, not needed and for dual protection.

Features:
• Selectable sensitivity
• Pet immunity
• Signals: supervisory, tamper, and low battery
• Dual tamper; detector and case for added security
• Effective with wall or corner mount
• Replaceable extra long-life batteries: 1-CR123 lithium used for 319 and 345 MHz, 2-CR123 lithium used for 433 MHz
• Superior RF range and performance
• Compact size; 3.2 x 2.4 x 1.7 inches (319 and 345 MHz), 3-3/8 x 2-3/8 x 1-5/8 inches (433 MHz)

Compatibility and Part Numbers:
• RF-ARPIR-319-NN: 319.5 MHz. UTC®, Interlogix®, GE®, ITI®, and Qolsys®
• RF-ARPIR-345-NN: 345 MHz. Honeywell® and 2GIG®
• RF-PIR-433-D-NN: 433 MHz. DSC®`,
  },
  {
    slug: 'motion-detector-pir-433-mhz---wireless',
    name: 'Wall Mounted PIR 433 MHz',
    summary: 'Reliable 433 MHz PIR detection for interior coverage.',
        image: pir433Image,
    category: 'Detection',
  },
  {
    slug: 'motion-detector,-ceiling-mounted---wireless',
    name: 'Ceiling Mounted PIR (CPIR)',
    summary: '360° coverage with reliable PIR detection.',
    image: ceilingMotionImage,
    category: 'Detection',
    description: `The RF-CPIR (Ceiling-Mounted PIR) is a 360 degree passive infrared motion detector designed for ceiling mount applications.

Features:
• Three minute motion lock-out to conserve battery life
• LED—lights on motion for easy set-up and testing
• The compact design allows for an easy installation
• Dimensions 2.95" diameter x 1.39" H
• Two sensitivity settings also provides for different types for environments and detection
• The motion detector is designed for a ceiling mount application and provides 360 degrees of detection range
• Patented antenna design. Maximizes signal transmission strength with the maximum FCC allowable transmission output. More output for greater RF range
• High-tension battery holder design ensure maximum power transfer to extend battery life
• Two battery design vs. one in competitive detectors. Delivers more than double battery life
• Easy to install. Easy to "Learn" into: 319.5 MHz control panels; UTC® Interlogix, GE®, and Qolsys®

The coverage pattern is dependent on the mounting height of the detector, areas cans be masked off to prevent unwanted detection.

Mounting Height / Detection Area:
• 8' → 20'
• 10' → 30'
• 12' → 45'

Regulatory:
• FCC
• IC

Part Numbers and Compatibility:
• RF-CPIR-319-NN: 319.5 MHz. UTC®, Interlogix®, GE®, ITI®, and Qolsys®`,
  },
  {
    slug: 'glass-break-detector--wireless',
    name: 'Glass Break Detector',
    summary: 'Audio pattern recognition for rapid glass break alerts.',
    image: glassBreakImage,
        category: 'Detection',
    description: `The Wireless Glass Break Detector is used to detect breaking glass that may result in entry - sending an alarm to the control panel. A red LED light is used to convey messages on detector status. Powered is supplied by two long-life replaceable 3-VDC, Lithium batteries.

Features:
• Selectable sensitivity
• Test mode
• Signals: supervisory, tamper, and low battery
• Tamper for added security
• Two Replaceable extra long-life CR123 lithium batteries
• Superior RF range and performance
• Compact size; 3.8 x 2.75 x .8 inches

Compatibility and Part Numbers:
• RF-ARGB-NN: 319.5 MHz. UTC®, Interlogix®, GE®, ITI®, and Qolsys®`,
  },
  {
    slug: 'rate-of-rise-heat-detector---wireless',
    name: 'Rate-of-Rise Heat Detector',
    summary: 'Monitors rapid temperature changes for early alerts.',
    image: heatDetectorImage,
    category: 'Life Safety',
    description: `The RF-ROR series (Radio Frequency Rate-of-Rise) and the hardwire version of wireless heat detectors use electronic processing to detect and report rising heat conditions. The micro-processor trips the on-board transmitter when the temperature at the detector location reaches a selectable fixed temperature of 135°F (57°C) or 200°F (93°C).

Features:
• Automatic reset after sensors cools
• Ceiling mount-small Footprint
• Tamper
• Extra long-life battery
• Selectable temperature, 135°F (57°C) or 200°F (93°C)

Regulatory:
• UL 521-Heat detectors for fire and protective signaling systems
• UL 985-Household fire warning systems units
• CAN/ULC-S530-Heat actuated fire detectors for fire alarm systems

Part Numbers and Compatibility:
• RF-ROR-135S-319-NN: 319.5 MHz. UTC®, Interlogix®, GE®, ITI®, and Qolsys®
• RF-ROR-135S-345-NN: 345 MHz. Honeywell®, 2GIG®
• HD-4WDT-NN: Hard Wire`,
  },
  {
    slug: 'combination-smoke-and-carbon-monoxide-detector---wireless',
    name: 'Combination Smoke/Heat/Carbon Monoxide Detector',
    summary: 'Dual-sensor life safety protection with wireless reporting.',
    image: smokeCoImage,
    category: 'Life Safety',
    description: `The Wireless Combination Smoke/Heat and Carbon Monoxide Detector is a 2xCR123A battery powered wireless detector intended for use with a compatible wireless alarm system. The detector consists of a photoelectric smoke sensor, thermistor heat sensor and electrochemical carbon monoxide sensor coupled to a wireless transmitter, which communicates with the control panel.

When fire or carbon monoxide is detected, the detector sounds a loud local alarm and the built-in transmitter sends a signal to the control panel. The Wireless Combination Smoke, Heat and Carbon Monoxide Detector contains an integrated fixed 41°F and 5°C temperature freeze sensor that will send a warning signal based on temperature detected. This detector is designed to provide protection with 70-foot spacing capability.

The detector can send alarm, tamper and battery condition messages to the system’s receiver. Refer to the wireless system’s instruction for the maximum number of transmitters that can be supported. The detector has an operational life of 10 years. After 10 years of operation the detector will provide audio visual trouble indication and must be replaced.

Features:
• Three technologies, one device: Photoelectric smoke detector, thermistor heat detector plus 41° freeze notification, electrochemical CO detector
• Power: Two CR123A Panasonic batteries
• Wireless signals: Alarm, tamper, and low battery
• Detector siren sounds in alarm: Smoke and heat (Temporal 3), CO (Temporal 4)
• Operational life: 10 years
• Push button to Hush feature
• LED indicators: Red = alarm, Yellow = trouble/fault, Green = normal operation
• Detector dirty notification feature
• End of life notification feature
• Low battery notification

Compatibility and Part Numbers:
• RF-APCMB-345-NN: 345 MHz. Honeywell® and 2GIG®`,
  },
  {
    slug: 'water-sensor',
    name: 'Water Sensor',
    summary: 'Detects leaks and pooling before damage spreads.',
    image: waterSensorImage,
    category: 'Environmental',
    description: `Wherever the possibility of unwanted water exists in a home or business, the Water Sensor is the ideal "peace of mind" sensor to add to your security and life safety system.

If there is the possibility of water/toilet overflow, hose leak, sump pump failure, or pipe leak, the Water Sensor is on guard to alert of water accumulation and damage. Water is detected when water rises to the contacts, 1/32" from the floor. The sensor checks for water every 5 seconds and requires two positive checks for a valid alarm, reducing false alarms.

Suggested placement areas include:
• Near hot water heater
• Near washing machine water hoses
• Under sinks
• Near sump pumps
• Near bath or hot tubs

Features:
• Water detection probe is very sensitive, detecting as little as 1/32" of water when water contacts both probes at once
• Detects water early and reports signal/alarm to control panel before severe water damage can occur
• Patented antenna design
• Maximizes signal transmission strength while minimizing battery energy draw, extending battery replacement time
• Two battery design vs. one in competitive sensors, delivering more than double battery life
• Easy to install and easy to "Learn" into 319.5 MHz control panels, such as UTC® Interlogix, GE®, and Qolsys®
• Compact size, attractive design, matte finish, and neutral color complement any décor

Compatibility and Part Numbers:
• RF-WATER-319-NN: 319.5 MHz. UTC®, Interlogix®, GE®, ITI®, and Qolsys®
• RF-WATER-345-NN: 345 MHz. Honeywell® and 2GIG®`,
  },
  {
    slug: 'keyfob-control---wireless',
    name: 'System Control FOB',
        summary: 'Compact arming control.',
    image: keyfobControlImage,
    category: 'Control',
    description: `The RF-Keyfob-319-NN is a wireless hand-held device used to turn on and off a 319.5 MHz alarm system. It allows arming, disarming, and panic activation. The sensor is powered by a replaceable 3-VDC lithium coin-cell battery.

The Keyfob provides the user with these modes:
• Arm-Away Mode — all devices active
• Arm-Stay Mode — interior devices off
• Panic activation
• Activate lights — if control panel supports
• Auxiliary out — requires panel features

Compatibility and Part Numbers:
• RF-KEYFOB-319-NN: 319.5 MHz. UTC®, Interlogix®, GE®, ITI®, and Qolsys®`,
  },
  {
    slug: 'keyfob-panic---wireless',
    name: 'FOB Panic Button',
    summary: 'One-touch emergency activation from anywhere.',
    image: keyfobPanicImage,
    category: 'Life Safety',
    description: `The RF-Keyfob Panic is a wireless hand-held device used as a portable panic or life-safety device, programmed into a 319.5 or 345 MHz control panel.

False alarm feature: 2-second button hold to send signal to the panel and on to central station for assistance. This 2-second hold helps prevent false alarms from unintentional button press or bump.

The keyfob is powered by a replaceable 3-VDC lithium coin-cell battery.

Features:
• Simple 1-step learn-in for 319.5 or 345 MHz wireless control panels
• Lightweight and compact: 2.37" L x 1.5" W x .4" D
• Silicone, non-slip button offers a secure feel and is easy to find on the fob, even in the dark
• LED ring activates when function button is pressed, indicating a signal has been sent
• Long-life battery (5 years), easy to replace
• Built with MaxOut™ Technology for maximum RF security sensor reliability
• MaxOut high-performance sensors deliver strong signal strength and range
• Includes neck lanyard`,
  },
  {
    slug: 'panic---wireless',
    name: 'Long-Range Panic Button',
    summary: 'Instant alert activation with accessory options.',
    image: panicButtonImage,
    category: 'Life Safety',
    description: `The RF-Panic-One-Button-319 is a wireless hand-held device used as a portable panic or life-safety device, programmed into a 319.5 MHz control panel.

False alarm feature: 2-second button hold or 2 quick presses send a signal to the panel and on to central station for assistance. This helps prevent false alarms from unintentional button presses or bumps.

The Wireless Panic is powered by a replaceable 3-VDC lithium coin-cell battery.

Includes:
• Panic device
• Mounting bracket for discrete mounting
• Removable belt clip
• Removable lanyard clip

Features:
• Powerful performance with exceptional range
• Simple 1-step learn-in for 319.5 MHz wireless control panels
• Lightweight and compact: 3" L x 2" W x .7" D
• Silicone, non-slip button is easy to find, even in the dark
• Red LED activates when function button is pressed, indicating a signal has been sent
• Long-life battery (5 years), easy to replace
• Built with MaxOut™ Technology for maximum RF security sensor reliability
• MaxOut high-performance sensors deliver strong signal strength and range
• Internal gasket to protect against moisture

Compatibility and Part Numbers:
• RF-PANIC-ONE-BUTTON-319-NN: 319.5 MHz. UTC®, Interlogix®, GE®, ITI®, and Qolsys®`,
  },
  {
    slug: 'enclosure-tamper-switch',
    name: 'Control Panel Enclosure Tamper Switch',
    summary: 'Detects cabinet or enclosure openings instantly.',
    image: tamperImage,
    category: 'Protection',
        description: `The System Enclosure Tamper is used to protect security system enclosures from removal and/or cover tamper. The System Enclosure Tamper can be used as a wall tamper, a cover tamper, or both, as illustrated in image.

Adjustable plunger screw can be set to accommodate different wall or cover gap sizes. The tamper may be mounted with or without self-adjusting extender screw in place. With the extender screw removed, the plunger will recede flush to housing.

Features:
• Compare with Sentrol 3025 tamper switch
• Reed-actuated wall and cover tamper switch
• Closed-loop with built-in automatic service shunt`,
  },
]

const legacySlugs = products.map((product) => product.slug)

export { legacySlugs, products }
