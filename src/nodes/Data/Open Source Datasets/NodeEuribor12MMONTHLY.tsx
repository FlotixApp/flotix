import { createNodeComponent } from "../../createNodeComponent";
import * as dfd from "danfojs";

// Auto-generated from: ../src/nodes/Data/OpenDatasets/finance/emmi/euribor_12m_monthly.csv
// Generated on: Fri Jan 23 12:00:27 CET 2026

const dataset = [
  {
    "date": "2014-01-02",
    "rate": 0.555,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-02-03",
    "rate": 0.549,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-03-03",
    "rate": 0.554,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-04-01",
    "rate": 0.591,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-05-02",
    "rate": 0.612,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-06-02",
    "rate": 0.569,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-07-01",
    "rate": 0.488,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-08-01",
    "rate": 0.489,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-09-01",
    "rate": 0.428,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-10-01",
    "rate": 0.338,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-11-03",
    "rate": 0.339,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-12-01",
    "rate": 0.33,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-01-02",
    "rate": 0.323,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-02-02",
    "rate": 0.271,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-03-02",
    "rate": 0.23,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-04-01",
    "rate": 0.196,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-05-04",
    "rate": 0.17,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-06-01",
    "rate": 0.161,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-07-01",
    "rate": 0.164,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-08-03",
    "rate": 0.166,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-09-01",
    "rate": 0.161,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-10-01",
    "rate": 0.14,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-11-02",
    "rate": 0.109,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-12-01",
    "rate": 0.045,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-01-04",
    "rate": 0.058,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-02-01",
    "rate": 0.01,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-03-01",
    "rate": -0.026,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-04-01",
    "rate": -0.002,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-05-02",
    "rate": -0.012,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-06-01",
    "rate": -0.018,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-07-01",
    "rate": -0.052,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-08-01",
    "rate": -0.048,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-09-01",
    "rate": -0.051,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-10-03",
    "rate": -0.064,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-11-01",
    "rate": -0.069,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-12-01",
    "rate": -0.079,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-01-02",
    "rate": -0.083,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-02-01",
    "rate": -0.103,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-03-01",
    "rate": -0.114,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-04-03",
    "rate": -0.111,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-05-02",
    "rate": -0.121,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-06-01",
    "rate": -0.131,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-07-03",
    "rate": -0.157,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-08-01",
    "rate": -0.151,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-09-01",
    "rate": -0.161,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-10-02",
    "rate": -0.172,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-11-01",
    "rate": -0.187,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-12-01",
    "rate": -0.188,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-01-02",
    "rate": -0.186,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-02-01",
    "rate": -0.191,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-03-01",
    "rate": -0.191,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-04-03",
    "rate": -0.19,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-05-02",
    "rate": -0.189,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-06-01",
    "rate": -0.184,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-07-02",
    "rate": -0.181,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-08-01",
    "rate": -0.177,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-09-03",
    "rate": -0.166,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-10-01",
    "rate": -0.158,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-11-01",
    "rate": -0.148,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-12-03",
    "rate": -0.143,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-01-02",
    "rate": -0.121,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-02-01",
    "rate": -0.11,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-03-01",
    "rate": -0.108,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-04-01",
    "rate": -0.112,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-05-02",
    "rate": -0.114,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-06-03",
    "rate": -0.175,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-07-01",
    "rate": -0.217,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-08-01",
    "rate": -0.3,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-09-02",
    "rate": -0.384,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-10-01",
    "rate": -0.33,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-11-01",
    "rate": -0.281,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-12-02",
    "rate": -0.27,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-01-02",
    "rate": -0.248,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-02-03",
    "rate": -0.29,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-03-02",
    "rate": -0.327,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-04-01",
    "rate": -0.168,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-05-04",
    "rate": -0.108,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-06-01",
    "rate": -0.103,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-07-01",
    "rate": -0.233,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-08-03",
    "rate": -0.336,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-09-01",
    "rate": -0.373,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-10-01",
    "rate": -0.442,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-11-02",
    "rate": -0.486,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-12-01",
    "rate": -0.487,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-01-04",
    "rate": -0.502,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-02-01",
    "rate": -0.511,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-03-01",
    "rate": -0.478,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-04-01",
    "rate": -0.488,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-05-03",
    "rate": -0.486,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-06-01",
    "rate": -0.487,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-07-01",
    "rate": -0.485,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-08-02",
    "rate": -0.502,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-09-01",
    "rate": -0.496,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-10-01",
    "rate": -0.488,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-11-01",
    "rate": -0.443,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-12-01",
    "rate": -0.505,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-01-03",
    "rate": -0.499,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-02-01",
    "rate": -0.431,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-03-01",
    "rate": -0.363,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-04-01",
    "rate": -0.086,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-05-02",
    "rate": 0.213,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-06-01",
    "rate": 0.417,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-07-01",
    "rate": 0.961,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-08-01",
    "rate": 0.942,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-09-01",
    "rate": 1.851,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-10-03",
    "rate": 2.5,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-11-01",
    "rate": 2.686,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-12-01",
    "rate": 2.842,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-01-02",
    "rate": 3.316,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-02-01",
    "rate": 3.414,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-03-01",
    "rate": 3.745,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-04-03",
    "rate": 3.651,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-05-02",
    "rate": 3.822,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-06-01",
    "rate": 3.875,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-07-03",
    "rate": 4.145,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-08-01",
    "rate": 4.076,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-09-01",
    "rate": 4.055,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-10-02",
    "rate": 4.198,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-11-01",
    "rate": 4.044,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-12-01",
    "rate": 3.902,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-01-02",
    "rate": 3.532,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-02-01",
    "rate": 3.505,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-03-01",
    "rate": 3.744,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-04-02",
    "rate": 3.664,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-05-02",
    "rate": 3.728,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-06-03",
    "rate": 3.722,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-07-01",
    "rate": 3.567,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-08-01",
    "rate": 3.349,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-09-02",
    "rate": 3.072,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-10-01",
    "rate": 2.749,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-11-01",
    "rate": 2.629,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-12-02",
    "rate": 2.431,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-01-02",
    "rate": 2.448,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-02-03",
    "rate": 2.436,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-03-03",
    "rate": 2.365,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-04-01",
    "rate": 2.277,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-05-02",
    "rate": 2.045,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-06-02",
    "rate": 2.057,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-07-01",
    "rate": 2.07,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-08-01",
    "rate": 2.147,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-09-01",
    "rate": 2.148,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-10-01",
    "rate": 2.204,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-11-03",
    "rate": 2.199,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-12-01",
    "rate": 2.227,
    "maturity_level": "0:12:00",
    "granularity": "monthly"
  }
];

const NodeEuribor12MMONTHLY = createNodeComponent({
  label: "Euribor 12M-MONTHLY",
  description: "Dataset node generated automatically from CSV.",
  width: 260,
  initialInputs: [],
  outputType: "dataframe",
  initialState: {},

  computeOutput: () => new dfd.DataFrame(dataset),

  renderInputControls: () => null,

  renderControls: () => (
    <div className="text-xs text-white font-mono bg-black bg-opacity-30 rounded p-2">
      Rows: {dataset.length}<br />
      Columns: {Object.keys(dataset[0]).length}
    </div>
  ),

  renderOutput: (value) =>
    value instanceof dfd.DataFrame ? (
      <div className="text-white text-xs font-mono pt-1">
        Output: DataFrame [{value.shape[0]}×{value.shape[1]}]
      </div>
    ) : null,
});

export default NodeEuribor12MMONTHLY;
