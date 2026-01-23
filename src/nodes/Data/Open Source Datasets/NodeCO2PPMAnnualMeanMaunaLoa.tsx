import { createNodeComponent } from "../../createNodeComponent";
import * as dfd from "danfojs";

// Auto-generated from: ../src/nodes/Data/OpenDatasets/climate/noaa_scripps_via_datahub/co2_ppm_annual_mean_mauna_loa.csv
// Generated on: Fri Jan 23 12:00:30 CET 2026

const dataset = [
  {
    "Year": 1959.0,
    "Mean": 315.98,
    "Uncertainty": 0.12
  },
  {
    "Year": 1960.0,
    "Mean": 316.91,
    "Uncertainty": 0.12
  },
  {
    "Year": 1961.0,
    "Mean": 317.64,
    "Uncertainty": 0.12
  },
  {
    "Year": 1962.0,
    "Mean": 318.45,
    "Uncertainty": 0.12
  },
  {
    "Year": 1963.0,
    "Mean": 318.99,
    "Uncertainty": 0.12
  },
  {
    "Year": 1964.0,
    "Mean": 319.62,
    "Uncertainty": 0.12
  },
  {
    "Year": 1965.0,
    "Mean": 320.04,
    "Uncertainty": 0.12
  },
  {
    "Year": 1966.0,
    "Mean": 321.37,
    "Uncertainty": 0.12
  },
  {
    "Year": 1967.0,
    "Mean": 322.18,
    "Uncertainty": 0.12
  },
  {
    "Year": 1968.0,
    "Mean": 323.05,
    "Uncertainty": 0.12
  },
  {
    "Year": 1969.0,
    "Mean": 324.62,
    "Uncertainty": 0.12
  },
  {
    "Year": 1970.0,
    "Mean": 325.68,
    "Uncertainty": 0.12
  },
  {
    "Year": 1971.0,
    "Mean": 326.32,
    "Uncertainty": 0.12
  },
  {
    "Year": 1972.0,
    "Mean": 327.46,
    "Uncertainty": 0.12
  },
  {
    "Year": 1973.0,
    "Mean": 329.68,
    "Uncertainty": 0.12
  },
  {
    "Year": 1974.0,
    "Mean": 330.19,
    "Uncertainty": 0.12
  },
  {
    "Year": 1975.0,
    "Mean": 331.13,
    "Uncertainty": 0.12
  },
  {
    "Year": 1976.0,
    "Mean": 332.03,
    "Uncertainty": 0.12
  },
  {
    "Year": 1977.0,
    "Mean": 333.84,
    "Uncertainty": 0.12
  },
  {
    "Year": 1978.0,
    "Mean": 335.41,
    "Uncertainty": 0.12
  },
  {
    "Year": 1979.0,
    "Mean": 336.84,
    "Uncertainty": 0.12
  },
  {
    "Year": 1980.0,
    "Mean": 338.76,
    "Uncertainty": 0.12
  },
  {
    "Year": 1981.0,
    "Mean": 340.12,
    "Uncertainty": 0.12
  },
  {
    "Year": 1982.0,
    "Mean": 341.48,
    "Uncertainty": 0.12
  },
  {
    "Year": 1983.0,
    "Mean": 343.15,
    "Uncertainty": 0.12
  },
  {
    "Year": 1984.0,
    "Mean": 344.87,
    "Uncertainty": 0.12
  },
  {
    "Year": 1985.0,
    "Mean": 346.35,
    "Uncertainty": 0.12
  },
  {
    "Year": 1986.0,
    "Mean": 347.61,
    "Uncertainty": 0.12
  },
  {
    "Year": 1987.0,
    "Mean": 349.31,
    "Uncertainty": 0.12
  },
  {
    "Year": 1988.0,
    "Mean": 351.69,
    "Uncertainty": 0.12
  },
  {
    "Year": 1989.0,
    "Mean": 353.2,
    "Uncertainty": 0.12
  },
  {
    "Year": 1990.0,
    "Mean": 354.45,
    "Uncertainty": 0.12
  },
  {
    "Year": 1991.0,
    "Mean": 355.7,
    "Uncertainty": 0.12
  },
  {
    "Year": 1992.0,
    "Mean": 356.54,
    "Uncertainty": 0.12
  },
  {
    "Year": 1993.0,
    "Mean": 357.21,
    "Uncertainty": 0.12
  },
  {
    "Year": 1994.0,
    "Mean": 358.96,
    "Uncertainty": 0.12
  },
  {
    "Year": 1995.0,
    "Mean": 360.97,
    "Uncertainty": 0.12
  },
  {
    "Year": 1996.0,
    "Mean": 362.74,
    "Uncertainty": 0.12
  },
  {
    "Year": 1997.0,
    "Mean": 363.88,
    "Uncertainty": 0.12
  },
  {
    "Year": 1998.0,
    "Mean": 366.84,
    "Uncertainty": 0.12
  },
  {
    "Year": 1999.0,
    "Mean": 368.54,
    "Uncertainty": 0.12
  },
  {
    "Year": 2000.0,
    "Mean": 369.71,
    "Uncertainty": 0.12
  },
  {
    "Year": 2001.0,
    "Mean": 371.32,
    "Uncertainty": 0.12
  },
  {
    "Year": 2002.0,
    "Mean": 373.45,
    "Uncertainty": 0.12
  },
  {
    "Year": 2003.0,
    "Mean": 375.98,
    "Uncertainty": 0.12
  },
  {
    "Year": 2004.0,
    "Mean": 377.7,
    "Uncertainty": 0.12
  },
  {
    "Year": 2005.0,
    "Mean": 379.98,
    "Uncertainty": 0.12
  },
  {
    "Year": 2006.0,
    "Mean": 382.09,
    "Uncertainty": 0.12
  },
  {
    "Year": 2007.0,
    "Mean": 384.02,
    "Uncertainty": 0.12
  },
  {
    "Year": 2008.0,
    "Mean": 385.83,
    "Uncertainty": 0.12
  },
  {
    "Year": 2009.0,
    "Mean": 387.64,
    "Uncertainty": 0.12
  },
  {
    "Year": 2010.0,
    "Mean": 390.1,
    "Uncertainty": 0.12
  },
  {
    "Year": 2011.0,
    "Mean": 391.85,
    "Uncertainty": 0.12
  },
  {
    "Year": 2012.0,
    "Mean": 394.06,
    "Uncertainty": 0.12
  },
  {
    "Year": 2013.0,
    "Mean": 396.74,
    "Uncertainty": 0.12
  },
  {
    "Year": 2014.0,
    "Mean": 398.81,
    "Uncertainty": 0.12
  },
  {
    "Year": 2015.0,
    "Mean": 401.01,
    "Uncertainty": 0.12
  },
  {
    "Year": 2016.0,
    "Mean": 404.41,
    "Uncertainty": 0.12
  },
  {
    "Year": 2017.0,
    "Mean": 406.76,
    "Uncertainty": 0.12
  },
  {
    "Year": 2018.0,
    "Mean": 408.72,
    "Uncertainty": 0.12
  },
  {
    "Year": 2019.0,
    "Mean": 411.65,
    "Uncertainty": 0.12
  },
  {
    "Year": 2020.0,
    "Mean": 414.21,
    "Uncertainty": 0.12
  },
  {
    "Year": 2021.0,
    "Mean": 416.41,
    "Uncertainty": 0.12
  },
  {
    "Year": 2022.0,
    "Mean": 418.53,
    "Uncertainty": 0.12
  },
  {
    "Year": 2023.0,
    "Mean": 421.08,
    "Uncertainty": 0.12
  },
  {
    "Year": 2024.0,
    "Mean": 424.61,
    "Uncertainty": 0.12
  }
];

const NodeCO2PPMAnnualMeanMaunaLoa = createNodeComponent({
  label: "CO2 PPM (annual mean,Mauna Loa)",
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

export default NodeCO2PPMAnnualMeanMaunaLoa;
