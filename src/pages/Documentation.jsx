const pdfUrl = (fileName) =>
  new URL(`../assets/pdfs/${fileName}`, import.meta.url).href

const installationManuals = [
  {
    title: 'Door & Window Sensors',
    items: [
      {
        label: 'Mini Door/Window Sensor, 319 MHz',
        partNumber: 'RF-CMDWS-319-NN',
        file: 'a_rf_cmdws_319_nn_im.pdf',
      },
      {
        label: 'Mini Door/Window Sensor, 345 MHz',
        partNumber: 'RF-CMDWS-345-NN',
        file: 'b_rf_cmdws_345_nn_im.pdf',
      },
      {
        label: 'Mini Door/Window Sensor, 433 MHz',
        partNumber: 'RF-CMDWS-433-NN',
        file: 'c_rf_cmdws_433_d_nn_im.pdf',
      },
      {
        label: 'Mini Door/Window Sensor, Extended 319 MHz',
        partNumber: 'RF-CMDWSX-319',
        file: 'd_rf_cmdwsx_319_nn_im.pdf',
      },
      {
        label: 'Mini Door/Window Sensor, Extended 345 MHz',
        partNumber: 'RF-CMDWSX-345',
        file: 'e_rf_cmdwsx_345_nn_im.pdf',
      },
      {
        label: 'TOTAL Window Sensor, 319 MHz',
        partNumber: 'RF-SHK-319-NN',
        file: 'h_rf_shk_319_nn_im-(2).pdf',
      },
      {
        label: 'TOTAL Window Sensor, 345 MHz',
        partNumber: 'RF-SHK-345-NN',
        file: 'i_rf_shk_345_nn_im.pdf',
      },
      {
        label: 'Recessed Door/Window Sensor, 319 MHz',
        partNumber: 'RF-RDWS-319-NN',
        file: 'f_rf_rdws_319_nn_im.pdf',
      },
      {
        label: 'Recessed Door/Window Sensor, 345 MHz',
        partNumber: 'RF-RDWS-345-NN',
        file: 'g_rf_rdws_345_nn_-im.pdf',
      },
      {
        label: 'Extreme Sensor, Outdoor Door/Gate, 319 MHz',
        partNumber: 'RF-CMDWS-OD-319-NN',
        file: 'k_rf_cmdws_od_-319_nn_im.pdf',
      },
      {
        label: 'Extreme Sensor, Outdoor Door/Gate, 345 MHz',
        partNumber: 'RF-CMDWS-OD-345-NN',
        file: 'j_rf_cmdws_od_-345_nn_im.pdf',
      },
    ],
  },
  {
    title: 'Motion & Glass Break',
    items: [
      {
        label: 'Wall Mounted PIR, 319 MHz',
        partNumber: 'RF-ARPIR-319-NN',
        file: 'q_rf_arpir_319_nn_im.pdf',
      },
      {
        label: 'Wall Mounted PIR, 345 MHz',
        partNumber: 'RF-ARPIR-345-NN',
        file: 'r_rf_arpir_345_nn_im.pdf',
      },
      {
        label: 'Wall Mounted PIR, 433 MHz',
        partNumber: 'RF-PIR-433-D-NN',
        file: 's_rf_pir_433_d_nn_im.pdf',
      },
      {
        label: 'Ceiling Mounted PIR, 319 MHz',
        partNumber: 'RF-CPIR-319-NN',
        file: 't_rf_cpir_319_nn_im.pdf',
      },
      {
        label: 'Glass Break Detector, 319 MHz',
        partNumber: 'RF-ARGB-319-NN',
        file: 'l_rf_argb_319_nn_im.pdf',
      },
    ],
  },
  {
    title: 'Life Safety & Environmental',
    items: [
      {
        label: 'Water Detector, 319 MHz',
        partNumber: 'RF-WATER-319-NN',
        file: 'y_rf_water_319_nn_im.pdf',
      },
      {
        label: 'Water Detector, 345 MHz',
        partNumber: 'RF-WATER-345-NN',
        file: 'z_rf_water_345_nn_im.pdf',
      },
      {
        label: 'Smoke, Heat, CO Detector, 345 MHz',
        partNumber: 'RF-APCMB-345-NN',
        file: 'x_rf_apcmb_345_nn_im.pdf',
      },
      {
        label: 'Rate-of-Rise Heat Detector, 319 MHz',
        partNumber: 'RF-ROR-135S-319-NN',
        file: 'u_rf_ror-135s-319_nn_im.pdf',
      },
      {
        label: 'Rate-of-Rise Heat Detector, 345 MHz',
        partNumber: 'RF-ROR-135S-345-NN',
        file: 'v_rf_ror_135_345_nn_-im.pdf',
      },
    ],
  },
  {
    title: 'Remote Controls & Panic',
    items: [
      {
        label: 'Keyfob Control, 319 MHz',
        partNumber: 'RF-KEYFOB-319-NN',
        file: 'm_rf_keyfob_319_nn_im.pdf',
      },
      {
        label: 'Keyfob Panic, 319 MHz',
        partNumber: 'RF-FOB-PANIC-319-NN',
        file: 'n_rf_fob_panic_319_nn-im.pdf',
      },
      {
        label: 'Keyfob Panic, 345 MHz',
        partNumber: 'RF-FOB-PANIC-345-NN',
        file: 'o_rf_fob_panic_345_nn_im.pdf',
      },
      {
        label: 'Keyfob Panic, 345 MHz (Rev 4/5/2022)',
        partNumber: 'RF-FOB-PANIC-345-NN',
        file: 'rf-fob-panic-345-nn-installation-manual--rev-4-5_13_2022.pdf',
      },
      {
        label: 'Long-Range Panic, 319 MHz',
        partNumber: 'RF-PANIC-ONE-BUTTON-319-NN',
        file: 'p_rf_panic_one_button_319_nn_im.pdf',
      },
    ],
  },
  {
    title: 'Accessories',
    items: [
      {
        label: 'Enclosure Tamper Switch',
        partNumber: 'ACC-TS-HS-KIT',
        file: 'zz_acc_ts_hs_kit-im.pdf',
      },
    ],
  },
]

const dataSheets = [
  {
    label: 'Mini Door/Window Sensor, 319, 345, and 433 MHz',
    partNumber: 'RF-CMDWS-319-NN\nRF-CMDWS-345-NN\nRF-CMDWS-433-D-NN',
    file: '1_rf_cmdws_nn_pds.pdf',
  },
  {
    label: 'Mini Door/Window Sensor, Extended, 319 and 345 MHz',
    partNumber: 'RF-CMDWSX-319-NN\nRF-CMDWSX-345-NN',
    file: '2_rf_cmdwsx_nn_pds.pdf',
  },
  {
    label: 'Recessed Door/Window Sensor, 319 and 345 MHz',
    partNumber: 'RF-RDWS-319-NN\nRF-RDWS-345-NN',
    file: '3_rf_rdws_nn_pds.pdf',
  },
  {
    label: 'TOTAL Window Sensor, 319 and 345 MHz',
    partNumber: 'RF-SHK-319-NN\nRF-SHK-345-NN',
    file: '4_rf_shk_nn_pds.pdf',
  },
  {
    label: 'Extreme Sensor, Outdoor, 319 and 345 MHz',
    partNumber: 'RF-CMDWS-OD-319-NN\nRF-CMDWS-OD-345-NN',
    file: '5_rf_cmdws_od_pds.pdf',
  },
  {
    label: 'Glass Break Detector, 319 MHz',
    partNumber: 'RF-ARGB-319-NN',
    file: '6_rf_argb_319_nn_pds.pdf',
  },
  {
    label: 'Keyfob Control, 319 MHz',
    partNumber: 'RF-KEYFOB-319-NN',
    file: '7_rf_keyfob_319_nn_pds.pdf',
  },
  {
    label: 'Keyfob Panic, 319 and 345 MHz',
    partNumber: 'RF-FOB-PANIC-319-NN\nRF-FOB-PANIC-345-NN',
    file: '8_rf_fob_panic_nn-pds.pdf',
  },
  {
    label: 'Long-Range Panic, 319 MHz',
    partNumber: 'RF-PANIC-ONE-BUTTON-319-NN',
    file: '9_rf_panic_one_button_319_nn_pds.pdf',
  },
  {
    label: 'Wall Mounted PIR, 319 and 345 MHz',
    partNumber: 'RF-ARPIR-319-NN\nRF-ARPIR-345-NN',
    file: '10_rf_arpir_nn_-pds.pdf',
  },
  {
    label: 'Wall Mounted PIR, 433 MHz',
    partNumber: 'RF-PIR-433-D-NN',
    file: '11_rf_pir_433_nn-pds.pdf',
  },
  {
    label: 'Ceiling Mounted PIR, 319 MHz',
    partNumber: 'RF-CPIR-319-NN',
    file: '12_rf_cpir_319_nn_pds.pdf',
  },
  {
    label: 'Rate-of-Rise Heat Detector, 319 and 345 MHz',
    partNumber: 'RF-ROR-135S-319-NN\nRF-ROR-135S-345-NN\nHD-4WDT-NN',
    file: '13_rf_ror_nn_pds.pdf',
  },
  {
    label: 'Smoke/Heat/CO Detector',
    partNumber: 'RF-APCMB-345-NN',
    file: '14_rf_apcmb_345_nn_pds.pdf',
  },
  {
    label: 'Water Detector, 319 and 345 MHz',
    partNumber: 'RF-WATER-319-NN\nRF-WATER-345-NN',
    file: '15_rf_water_nn_pds.pdf',
  },
  {
    label: 'High Security Tamper Switch',
    partNumber: 'ACC-TS-HS-KIT',
    file: '16_high_security_tamper-switch_pds.pdf',
  },
]

const additionalResources = [
  { label: 'MaxOut Line Card', file: 'line-card-8_1_25.pdf' },
  {
    label: 'RF Shock Advantages',
    file: '5_maxout-rf-shock-advantages.pdf',
  },
]

const pressReleases = [
  {
    label: 'MaxOut Technology News Release',
    file: 'final_-maxout-technology-news-release..pdf',
  },
  {
    label: 'Total Window Sensor News Release',
    file: 'news-release-total-window-sensor-(1).pdf',
  },
  {
    label: 'Wireless Recessed Door/Window Sensor Release',
    file: 'news-release-wireless-recessed-door-window-security-sensor.pdf',
  },
]

import { MetaTags } from '../components/MetaTags'

function Documentation() {
  return (
    <>
      <MetaTags 
        title="Documentation | MaxOut Technology"
        description="Access installation manuals, technical datasheets, and product documentation for all MaxOut Technology wireless sensors and life safety devices."
        url="https://IIMacGyverII.github.io/maxouttech3/#/documentation"
      />
      <div className="page">
      <section className="section">
        <div className="container">
          <p className="eyebrow">Documentation</p>
          <h1>Product datasheets and installation manuals.</h1>
          <p className="lead">
            Access technical specifications, datasheets, and installation guides to
            support fast installations and confident system design.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Product data sheets</p>
              <h2>Specs, ranges, and certifications.</h2>
              <p className="lead">
                Quick reference guides (PDF) for specifying products.
              </p>
            </div>
          </div>
          <div className="resource-grid">
            {dataSheets.map((sheet) => (
              <div className="resource-card" key={sheet.file}>
                <h3>{sheet.label}</h3>
                <a
                  className="doc-link"
                  href={pdfUrl(sheet.file)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {sheet.label}
                  {sheet.partNumber ? (
                    <span className="doc-part-number">{sheet.partNumber}</span>
                  ) : null}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Installation manuals</p>
              <h2>MaxOut Technology sensors and detectors.</h2>
              <p className="lead">
                Select a product family to open the correct installation manual.
              </p>
            </div>
          </div>
          <div className="resource-grid">
            {installationManuals.map((section) => (
              <div className="resource-card" key={section.title}>
                <h3>{section.title}</h3>
                <ul className="doc-list">
                  {section.items.map((item) => (
                    <li key={item.file}>
                      <a
                        className="doc-link"
                        href={pdfUrl(item.file)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.label}
                        {item.partNumber ? (
                          <span className="doc-part-number">{item.partNumber}</span>
                        ) : null}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Additional resources</p>
              <h2>Line card and product updates.</h2>
              <p className="lead">
                Marketing assets, line card download, and recent announcements.
              </p>
            </div>
          </div>
          <div className="resource-grid">
            {additionalResources.map((resource) => (
              <div className="resource-card" key={resource.file}>
                <h3>{resource.label}</h3>
                <a
                  className="doc-link"
                  href={pdfUrl(resource.file)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download PDF
                </a>
              </div>
            ))}
            {pressReleases.map((release) => (
              <div className="resource-card" key={release.file}>
                <h3>{release.label}</h3>
                <a
                  className="doc-link"
                  href={pdfUrl(release.file)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Documentation
