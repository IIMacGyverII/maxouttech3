import smokeCoImage from '../assets/images/smoke.webp'
import doorExtendedImage from '../assets/images/door.jpg'
import tamperImage from '../assets/images/3__ crow bar-crop-u1298.jpg'
import extremeImage from '../assets/images/extreme sensor.jpg'
import glassBreakImage from '../assets/images/glassbreakvideo4.webp'
import keyfobControlImage from '../assets/images/fob - hand.jpg'
import keyfobPanicImage from '../assets/images/keyfob panic in hand.jpg'
import miniDoorWindowImage from '../assets/images/dw white and brown.jpg'
import ceilingMotionImage from '../assets/images/cpir.jpg'
import wallMotionImage from '../assets/images/pir.png'
import panicButtonImage from '../assets/images/rf_panic_one_button_319_nn.png'
import heatDetectorImage from '../assets/images/cinch systems rate-of-rise heat sensor.jpg'
import recessedDoorImage from '../assets/images/recess d_w.jpg'
import totalWindowImage from '../assets/images/total window sensor-recovered copy.png'
import waterSensorImage from '../assets/images/water on floor.jpg'

const products = [
  {
    slug: 'mini-doorwindow-sensors---wireless',
    name: 'Mini Door/Window Sensor',
    summary: 'Discrete contact for minimal visual impact.',
    image: miniDoorWindowImage,
    category: 'Perimeter',
    description: `The Mini Door/Window Sensor is a supervised, wireless sensor that detects the opening and closing of doors or windows.

New, high–powered Microchip delivers exceptional range; 360° with no "dead spots" or signal drop-offs. Patented design with an isolated antenna 1/8" above board and separated from batteries for superior RF performance and transmission efficiency. Substantially reduced interference from metal door and window frames. Reduced battery energy draw—lengthens the battery life.

**Features:**
- Signals: supervisory, tamper, and low battery
- Dual tamper; sensor and case for added security
- Effective with vertical or horizontal mount
- Replaceable extra long-life batteries: 2-3VDC lithium coin-cell
- Smaller and narrow switch package
- Superior RF range and performance, even on steel surfaces

**Compatibility and Part Numbers:**
- **RF-CMDWS-319-NN:** 319.5 MHz. UTC®, Interlogix®, GE®, ITI®, and Qolsys®
- **RF-CMDWS-345-NN:** 345 MHz. Honeywell® and 2GIG®
- **RF-CMDWS-433-D-NN:** 433 MHz. DSC®
- **CEA-RF-CMDWS-ENC-BRN-KIT:** Brown sensor and magnet cover kit contains 5 each, brown: sensor covers, sensor bases, magnet cover and magnet bases.`,
  },
  {
    slug: 'recessed-doorwindow-sensor---wireless',
    name: 'Mini Recessed Door/Window',
    summary: 'Hidden contact for clean installations.',
    image: recessedDoorImage,
    category: 'Perimeter',
  },
  {
    slug: 'total-window-sensor---wireless',
    name: 'Total Window Sensor/Shock Detector',
    summary: 'Multi-function window protection with shock detection.',
    image: totalWindowImage,
    category: 'Perimeter',
  },
  {
    slug: 'doorwindow-sensor,-extended',
    name: 'Extended Door/Window',
    summary: 'Long-range magnetic contact for perimeter protection.',
    image: doorExtendedImage,
    category: 'Perimeter',
  },
  {
    slug: 'extreme-sensor---wireless',
    name: 'Extreme Outdoor Door/Gate Sensor',
    summary: 'Rugged sensor built for harsh environments.',
    image: extremeImage,
    category: 'Industrial',
  },
  {
    slug: 'motion-detector,-wall-mounted-pir---wireless',
    name: 'PIR 319 and 345 MHz',
    summary: 'Focused PIR coverage for interior spaces.',
    image: wallMotionImage,
    category: 'Detection',
  },
  {
    slug: 'motion-detector-pir-433-mhz---wireless',
    name: 'PIR 433 MHz',
    summary: 'Reliable 433 MHz PIR detection for interior coverage.',
    image: wallMotionImage,
    category: 'Detection',
  },
  {
    slug: 'motion-detector,-ceiling-mounted---wireless',
    name: 'CPIR',
    summary: '360° coverage with reliable PIR detection.',
    image: ceilingMotionImage,
    category: 'Detection',
  },
  {
    slug: 'glass-break-detector--wireless',
    name: 'Glass Break',
    summary: 'Audio pattern recognition for rapid glass break alerts.',
    image: glassBreakImage,
    category: 'Perimeter',
  },
  {
    slug: 'rate-of-rise-heat-detector---wireless',
    name: 'Rate-of-Rise Heat Detector',
    summary: 'Monitors rapid temperature changes for early alerts.',
    image: heatDetectorImage,
    category: 'Life Safety',
  },
  {
    slug: 'combination-smoke-and-carbon-monoxide-detector---wireless',
    name: 'Combination Smoke/Heat/Carbon Monoxide Detector',
    summary: 'Dual-sensor life safety protection with wireless reporting.',
    image: smokeCoImage,
    category: 'Life Safety',
  },
  {
    slug: 'water-sensor',
    name: 'Water Sensor',
    summary: 'Detects leaks and pooling before damage spreads.',
    image: waterSensorImage,
    category: 'Environmental',
  },
  {
    slug: 'keyfob-control---wireless',
    name: 'System Control FOB',
    summary: 'Compact arming control with secure encryption.',
    image: keyfobControlImage,
    category: 'Control',
  },
  {
    slug: 'keyfob-panic---wireless',
    name: 'FOB Panic Button',
    summary: 'One-touch emergency activation from anywhere.',
    image: keyfobPanicImage,
    category: 'Life Safety',
  },
  {
    slug: 'panic---wireless',
    name: 'Long-Range Panic Button',
    summary: 'Instant alert activation with accessory options.',
    image: panicButtonImage,
    category: 'Life Safety',
  },
  {
    slug: 'enclosure-tamper-switch',
    name: 'Control Panel Enclosure Tamper Switch',
    summary: 'Detects cabinet or enclosure openings instantly.',
    image: tamperImage,
    category: 'Protection',
  },
]

const legacySlugs = products.map((product) => product.slug)

export { legacySlugs, products }
