import { createNodeComponent } from "../../createNodeComponent";
import * as dfd from "danfojs";

// Auto-generated from: ../src/nodes/Data/OpenDatasets/finance/emmi/euribor_2w_weekly.csv
// Generated on: Fri Jan 23 12:00:28 CET 2026

const dataset = [
  {
    "date": "2001-02-01",
    "rate": null,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-03-01",
    "rate": null,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-04-02",
    "rate": null,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-05-02",
    "rate": null,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-06-01",
    "rate": null,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-07-02",
    "rate": null,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-08-01",
    "rate": null,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-09-03",
    "rate": null,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-10-01",
    "rate": null,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-10-15",
    "rate": 3.828,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-11-01",
    "rate": 3.734,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-12-03",
    "rate": 3.321,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-01-02",
    "rate": 3.32,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-02-01",
    "rate": 3.348,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-03-01",
    "rate": 3.333,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-04-02",
    "rate": 3.341,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-05-02",
    "rate": 3.324,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-06-03",
    "rate": 3.365,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-07-01",
    "rate": 3.367,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-08-01",
    "rate": 3.336,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-09-02",
    "rate": 3.316,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-10-01",
    "rate": 3.314,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-11-01",
    "rate": 3.302,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-12-02",
    "rate": 3.216,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-01-02",
    "rate": 2.905,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-02-03",
    "rate": 2.829,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-03-03",
    "rate": 2.749,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-04-01",
    "rate": 2.571,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-05-02",
    "rate": 2.574,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-06-02",
    "rate": 2.495,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-07-01",
    "rate": 2.149,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-08-01",
    "rate": 2.103,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-09-01",
    "rate": 2.119,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-10-01",
    "rate": 2.088,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-11-03",
    "rate": 2.08,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-12-01",
    "rate": 2.087,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-01-02",
    "rate": 2.09,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-02-02",
    "rate": 2.065,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-03-01",
    "rate": 2.056,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-04-01",
    "rate": 2.029,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-05-03",
    "rate": 2.054,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-06-01",
    "rate": 2.055,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-07-01",
    "rate": 2.07,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-08-02",
    "rate": 2.065,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-09-01",
    "rate": 2.067,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-10-01",
    "rate": 2.071,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-11-01",
    "rate": 2.084,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-12-01",
    "rate": 2.083,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-01-03",
    "rate": 2.112,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-02-01",
    "rate": 2.098,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-03-01",
    "rate": 2.092,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-04-01",
    "rate": 2.093,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-05-02",
    "rate": 2.093,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-06-01",
    "rate": 2.1,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-07-01",
    "rate": 2.1,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-08-01",
    "rate": 2.101,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-09-01",
    "rate": 2.102,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-10-03",
    "rate": 2.107,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-11-01",
    "rate": 2.099,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-12-01",
    "rate": 2.335,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-01-02",
    "rate": 2.363,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-02-01",
    "rate": 2.363,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-03-01",
    "rate": 2.54,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-04-03",
    "rate": 2.626,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-05-02",
    "rate": 2.643,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-06-01",
    "rate": 2.666,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-07-03",
    "rate": 2.851,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-08-01",
    "rate": 2.951,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-09-01",
    "rate": 3.077,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-10-02",
    "rate": 3.214,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-11-01",
    "rate": 3.347,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-12-01",
    "rate": 3.451,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-01-02",
    "rate": 3.615,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-02-01",
    "rate": 3.593,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-03-01",
    "rate": 3.672,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-04-02",
    "rate": 3.853,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-05-01",
    "rate": 3.848,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-06-01",
    "rate": 3.925,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-07-02",
    "rate": 4.086,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-08-01",
    "rate": 4.084,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-09-03",
    "rate": 4.262,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-10-01",
    "rate": 4.196,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-11-01",
    "rate": 4.114,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-12-03",
    "rate": 4.122,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-01-02",
    "rate": 4.158,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-02-01",
    "rate": 4.166,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-03-03",
    "rate": 4.132,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-04-01",
    "rate": 4.254,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-05-02",
    "rate": 4.298,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-06-02",
    "rate": 4.257,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-07-01",
    "rate": 4.243,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-08-01",
    "rate": 4.42,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-09-01",
    "rate": 4.424,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-10-01",
    "rate": 4.887,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-11-03",
    "rate": 3.934,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-12-01",
    "rate": 3.16,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-01-02",
    "rate": 2.429,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-02-02",
    "rate": 1.527,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-03-02",
    "rate": 1.39,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-04-01",
    "rate": 1.008,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-05-04",
    "rate": 0.825,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-06-01",
    "rate": 0.897,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-07-01",
    "rate": 0.56,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-08-03",
    "rate": 0.392,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-09-01",
    "rate": 0.37,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-10-01",
    "rate": 0.368,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-11-02",
    "rate": 0.369,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-12-01",
    "rate": 0.394,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-01-04",
    "rate": 0.393,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-02-01",
    "rate": 0.361,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-03-01",
    "rate": 0.361,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-04-01",
    "rate": 0.358,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-05-03",
    "rate": 0.367,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-06-01",
    "rate": 0.375,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-07-01",
    "rate": 0.46,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-08-02",
    "rate": 0.6,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-09-01",
    "rate": 0.544,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-10-01",
    "rate": 0.665,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-11-01",
    "rate": 0.795,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-12-01",
    "rate": 0.668,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-01-03",
    "rate": 0.641,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-02-01",
    "rate": 0.931,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-03-01",
    "rate": 0.779,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-04-01",
    "rate": 0.856,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-05-02",
    "rate": 1.236,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-06-01",
    "rate": 1.102,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-07-01",
    "rate": 1.236,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-08-01",
    "rate": 1.299,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-09-01",
    "rate": 1.202,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-10-03",
    "rate": 1.246,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-11-01",
    "rate": 1.212,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-12-01",
    "rate": 0.986,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-01-02",
    "rate": 0.738,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-02-01",
    "rate": 0.48,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-03-01",
    "rate": 0.392,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-04-02",
    "rate": 0.337,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-05-02",
    "rate": 0.334,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-06-01",
    "rate": 0.333,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-07-02",
    "rate": 0.333,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-08-01",
    "rate": 0.109,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-09-03",
    "rate": 0.098,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-10-01",
    "rate": 0.09,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-11-01",
    "rate": 0.087,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-12-03",
    "rate": 0.083,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-01-02",
    "rate": 0.088,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-02-01",
    "rate": 0.094,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-03-01",
    "rate": 0.089,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-04-02",
    "rate": 0.092,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-05-01",
    "rate": 0.092,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-06-03",
    "rate": 0.093,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-07-01",
    "rate": 0.1,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-08-01",
    "rate": 0.111,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-09-02",
    "rate": 0.106,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-10-01",
    "rate": 0.107,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-11-01",
    "rate": 0.11,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-12-02",
    "rate": 0.129,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-01-02",
    "rate": 0.194,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-02-03",
    "rate": 0.197,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-03-03",
    "rate": 0.194,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-04-01",
    "rate": 0.205,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-05-02",
    "rate": 0.234,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-06-02",
    "rate": 0.241,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-07-01",
    "rate": 0.061,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-08-01",
    "rate": 0.058,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-09-01",
    "rate": 0.038,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-10-01",
    "rate": -0.012,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-11-03",
    "rate": -0.005,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-12-01",
    "rate": -0.002,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-01-02",
    "rate": -0.011,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-02-02",
    "rate": -0.017,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-03-02",
    "rate": -0.028,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-04-01",
    "rate": -0.047,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-05-04",
    "rate": -0.083,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-06-01",
    "rate": -0.108,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-07-01",
    "rate": -0.112,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-08-03",
    "rate": -0.124,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-09-01",
    "rate": -0.139,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-10-01",
    "rate": -0.143,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-11-02",
    "rate": -0.148,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-12-01",
    "rate": -0.174,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-01-04",
    "rate": -0.241,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-02-01",
    "rate": -0.252,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-03-01",
    "rate": -0.263,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-04-01",
    "rate": -0.348,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-05-02",
    "rate": -0.352,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-06-01",
    "rate": -0.36,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-07-01",
    "rate": -0.369,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-08-01",
    "rate": -0.372,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-09-01",
    "rate": -0.377,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-10-03",
    "rate": -0.373,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-11-01",
    "rate": -0.376,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-12-01",
    "rate": -0.373,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-01-02",
    "rate": -0.374,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-02-01",
    "rate": -0.375,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-03-01",
    "rate": -0.372,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-04-03",
    "rate": -0.372,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-05-02",
    "rate": -0.374,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-06-01",
    "rate": -0.372,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-07-03",
    "rate": -0.373,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-08-01",
    "rate": -0.378,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-09-01",
    "rate": -0.377,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-10-02",
    "rate": -0.376,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-11-01",
    "rate": -0.376,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-12-01",
    "rate": -0.373,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-01-02",
    "rate": -0.373,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-02-01",
    "rate": -0.372,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-03-01",
    "rate": -0.372,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-04-03",
    "rate": -0.376,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-05-02",
    "rate": -0.378,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-06-01",
    "rate": -0.374,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-07-02",
    "rate": -0.374,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-08-01",
    "rate": -0.371,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-09-03",
    "rate": -0.371,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-10-01",
    "rate": -0.371,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-11-01",
    "rate": -0.371,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-12-03",
    "rate": null,
    "maturity_level": "14 days, 0:00:00",
    "granularity": "weekly"
  }
];

const NodeEuribor2WWEEKLY = createNodeComponent({
  label: "Euribor 2W-WEEKLY",
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

export default NodeEuribor2WWEEKLY;
