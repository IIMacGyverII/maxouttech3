import smokeCoImage from '../assets/images/ror_web.jpg'
import doorExtendedImage from '../assets/images/door.jpg'
import tamperImage from '../assets/images/3__ crow bar-crop-u1298.jpg'
import extremeImage from '../assets/images/extreme sensor.jpg'
import glassBreakImage from '../assets/images/glass break rf_argb_319_nn.png'
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
    slug: 'combination-smoke-and-carbon-monoxide-detector---wireless',
    name: 'Wireless Smoke & CO Detector',
    summary: 'Dual-sensor life safety protection with wireless reporting.',
    image: smokeCoImage,
    category: 'Life Safety',
  },
  {
    slug: 'doorwindow-sensor,-extended',
    name: 'Extended Door/Window Sensor',
    summary: 'Long-range magnetic contact for perimeter protection.',
    image: doorExtendedImage,
    category: 'Perimeter',
  },
  {
    slug: 'enclosure-tamper-switch',
    name: 'Enclosure Tamper Switch',
    summary: 'Detects cabinet or enclosure openings instantly.',
    image: tamperImage,
    category: 'Protection',
  },
  {
    slug: 'extreme-sensor---wireless',
    name: 'Extreme Sensor',
    summary: 'Rugged sensor built for harsh environments.',
    image: extremeImage,
    category: 'Industrial',
  },
  {
    slug: 'glass-break-detector--wireless',
    name: 'Wireless Glass Break Detector',
    summary: 'Audio pattern recognition for rapid glass break alerts.',
    image: glassBreakImage,
    category: 'Perimeter',
  },
  {
    slug: 'keyfob-control---wireless',
    name: 'Wireless Keyfob Control',
    summary: 'Compact arming control with secure encryption.',
    image: keyfobControlImage,
    category: 'Control',
  },
  {
    slug: 'keyfob-panic---wireless',
    name: 'Wireless Keyfob Panic',
    summary: 'One-touch emergency activation from anywhere.',
    image: keyfobPanicImage,
    category: 'Life Safety',
  },
  {
    slug: 'mini-doorwindow-sensors---wireless',
    name: 'Mini Door/Window Sensor',
    summary: 'Discrete contact for minimal visual impact.',
    image: miniDoorWindowImage,
    category: 'Perimeter',
  },
  {
    slug: 'motion-detector,-ceiling-mounted---wireless',
    name: 'Ceiling Mounted Motion Detector',
    summary: '360° coverage with reliable PIR detection.',
    image: ceilingMotionImage,
    category: 'Detection',
  },
  {
    slug: 'motion-detector,-wall-mounted-pir---wireless',
    name: 'Wall Mounted PIR Motion Detector',
    summary: 'Focused PIR coverage for interior spaces.',
    image: wallMotionImage,
    category: 'Detection',
  },
  {
    slug: 'panic---wireless',
    name: 'Wireless Panic Button',
    summary: 'Instant alert activation with accessory options.',
    image: panicButtonImage,
    category: 'Life Safety',
  },
  {
    slug: 'rate-of-rise-heat-detector---wireless',
    name: 'Rate-of-Rise Heat Detector',
    summary: 'Monitors rapid temperature changes for early alerts.',
    image: heatDetectorImage,
    category: 'Life Safety',
  },
  {
    slug: 'recessed-doorwindow-sensor---wireless',
    name: 'Recessed Door/Window Sensor',
    summary: 'Hidden contact for clean installations.',
    image: recessedDoorImage,
    category: 'Perimeter',
  },
  {
    slug: 'total-window-sensor---wireless',
    name: 'Total Window Sensor',
    summary: 'Multi-function window protection with shock detection.',
    image: totalWindowImage,
    category: 'Perimeter',
  },
  {
    slug: 'water-sensor',
    name: 'Water Sensor',
    summary: 'Detects leaks and pooling before damage spreads.',
    image: waterSensorImage,
    category: 'Environmental',
  },
]

const legacySlugs = products.map((product) => product.slug)

export { legacySlugs, products }
