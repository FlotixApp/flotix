import { createNodeComponent } from "../../createNodeComponent";
import * as dfd from "danfojs";

// Auto-generated from: ../src/nodes/Data/OpenDatasets/finance/emmi/euribor_1w_weekly.csv
// Generated on: Fri Jan 23 12:00:25 CET 2026

const dataset = [
  {
    "date": "1999-01-01",
    "rate": 3.245,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "1999-02-01",
    "rate": 3.145,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "1999-03-01",
    "rate": 3.129,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "1999-04-01",
    "rate": 3.001,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "1999-05-03",
    "rate": 2.556,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "1999-06-01",
    "rate": 2.557,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "1999-07-01",
    "rate": 2.621,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "1999-08-02",
    "rate": 2.604,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "1999-09-01",
    "rate": 2.584,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "1999-10-01",
    "rate": 2.586,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "1999-11-01",
    "rate": 2.795,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "1999-12-01",
    "rate": 3.074,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2000-01-03",
    "rate": 3.1,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2000-02-01",
    "rate": 3.3,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2000-03-01",
    "rate": 3.394,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2000-04-03",
    "rate": 3.63,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2000-05-02",
    "rate": 3.926,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2000-06-01",
    "rate": 4.158,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2000-07-03",
    "rate": 4.375,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2000-08-01",
    "rate": 4.373,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2000-09-01",
    "rate": 4.621,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2000-10-02",
    "rate": 4.727,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2000-11-01",
    "rate": 4.887,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2000-12-01",
    "rate": 4.863,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-02-01",
    "rate": 4.782,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-03-01",
    "rate": 4.825,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-04-02",
    "rate": 4.804,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-05-02",
    "rate": 4.842,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-06-01",
    "rate": 4.566,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-07-02",
    "rate": 4.553,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-08-01",
    "rate": 4.528,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-09-03",
    "rate": 4.314,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-10-01",
    "rate": 3.788,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-10-15",
    "rate": null,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-11-01",
    "rate": 3.764,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2001-12-03",
    "rate": 3.32,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-01-02",
    "rate": 3.317,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-02-01",
    "rate": 3.347,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-03-01",
    "rate": 3.333,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-04-02",
    "rate": 3.338,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-05-02",
    "rate": 3.324,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-06-03",
    "rate": 3.364,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-07-01",
    "rate": 3.363,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-08-01",
    "rate": 3.334,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-09-02",
    "rate": 3.316,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-10-01",
    "rate": 3.315,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-11-01",
    "rate": 3.307,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2002-12-02",
    "rate": 3.381,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-01-02",
    "rate": 2.908,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-02-03",
    "rate": 2.83,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-03-03",
    "rate": 2.851,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-04-01",
    "rate": 2.572,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-05-02",
    "rate": 2.575,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-06-02",
    "rate": 2.685,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-07-01",
    "rate": 2.148,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-08-01",
    "rate": 2.102,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-09-01",
    "rate": 2.119,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-10-01",
    "rate": 2.088,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-11-03",
    "rate": 2.08,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2003-12-01",
    "rate": 2.083,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-01-02",
    "rate": 2.087,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-02-02",
    "rate": 2.064,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-03-01",
    "rate": 2.058,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-04-01",
    "rate": 2.033,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-05-03",
    "rate": 2.054,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-06-01",
    "rate": 2.055,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-07-01",
    "rate": 2.069,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-08-02",
    "rate": 2.065,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-09-01",
    "rate": 2.066,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-10-01",
    "rate": 2.072,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-11-01",
    "rate": 2.084,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2004-12-01",
    "rate": 2.076,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-01-03",
    "rate": 2.112,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-02-01",
    "rate": 2.095,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-03-01",
    "rate": 2.091,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-04-01",
    "rate": 2.092,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-05-02",
    "rate": 2.092,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-06-01",
    "rate": 2.099,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-07-01",
    "rate": 2.099,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-08-01",
    "rate": 2.098,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-09-01",
    "rate": 2.101,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-10-03",
    "rate": 2.104,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-11-01",
    "rate": 2.092,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2005-12-01",
    "rate": 2.304,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-01-02",
    "rate": 2.361,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-02-01",
    "rate": 2.355,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-03-01",
    "rate": 2.452,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-04-03",
    "rate": 2.614,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-05-02",
    "rate": 2.636,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-06-01",
    "rate": 2.621,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-07-03",
    "rate": 2.84,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-08-01",
    "rate": 2.835,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-09-01",
    "rate": 3.071,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-10-02",
    "rate": 3.082,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-11-01",
    "rate": 3.346,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2006-12-01",
    "rate": 3.335,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-01-02",
    "rate": 3.614,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-02-01",
    "rate": 3.587,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-03-01",
    "rate": 3.583,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-04-02",
    "rate": 3.855,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-05-01",
    "rate": 3.848,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-06-01",
    "rate": 3.806,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-07-02",
    "rate": 4.076,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-08-01",
    "rate": 4.074,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-09-03",
    "rate": 4.208,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-10-01",
    "rate": 4.101,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-11-01",
    "rate": 4.109,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2007-12-03",
    "rate": 4.108,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-01-02",
    "rate": 4.124,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-02-01",
    "rate": 4.152,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-03-03",
    "rate": 4.111,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-04-01",
    "rate": 4.247,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-05-02",
    "rate": 4.264,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-06-02",
    "rate": 4.209,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-07-01",
    "rate": 4.13,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-08-01",
    "rate": 4.394,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-09-01",
    "rate": 4.397,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-10-01",
    "rate": 4.846,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-11-03",
    "rate": 3.811,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2008-12-01",
    "rate": 3.132,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-01-02",
    "rate": 2.357,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-02-02",
    "rate": 1.421,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-03-02",
    "rate": 1.324,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-04-01",
    "rate": 0.981,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-05-04",
    "rate": 0.773,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-06-01",
    "rate": 0.882,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-07-01",
    "rate": 0.47,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-08-03",
    "rate": 0.354,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-09-01",
    "rate": 0.341,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-10-01",
    "rate": 0.35,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-11-02",
    "rate": 0.357,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2009-12-01",
    "rate": 0.379,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-01-04",
    "rate": 0.369,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-02-01",
    "rate": 0.347,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-03-01",
    "rate": 0.344,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-04-01",
    "rate": 0.344,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-05-03",
    "rate": 0.354,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-06-01",
    "rate": 0.361,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-07-01",
    "rate": 0.446,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-08-02",
    "rate": 0.577,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-09-01",
    "rate": 0.512,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-10-01",
    "rate": 0.64,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-11-01",
    "rate": 0.77,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2010-12-01",
    "rate": 0.606,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-01-03",
    "rate": 0.59,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-02-01",
    "rate": 0.951,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-03-01",
    "rate": 0.706,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-04-01",
    "rate": 0.777,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-05-02",
    "rate": 1.231,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-06-01",
    "rate": 1.058,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-07-01",
    "rate": 1.177,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-08-01",
    "rate": 1.194,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-09-01",
    "rate": 1.098,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-10-03",
    "rate": 1.197,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-11-01",
    "rate": 1.134,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2011-12-01",
    "rate": 0.894,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-01-02",
    "rate": 0.652,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-02-01",
    "rate": 0.396,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-03-01",
    "rate": 0.347,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-04-02",
    "rate": 0.318,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-05-02",
    "rate": 0.316,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-06-01",
    "rate": 0.317,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-07-02",
    "rate": 0.321,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-08-01",
    "rate": 0.099,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-09-03",
    "rate": 0.091,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-10-01",
    "rate": 0.084,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-11-01",
    "rate": 0.079,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2012-12-03",
    "rate": 0.076,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-01-02",
    "rate": 0.08,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-02-01",
    "rate": 0.084,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-03-01",
    "rate": 0.08,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-04-02",
    "rate": 0.084,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-05-01",
    "rate": 0.083,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-06-03",
    "rate": 0.087,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-07-01",
    "rate": 0.091,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-08-01",
    "rate": 0.106,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-09-02",
    "rate": 0.097,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-10-01",
    "rate": 0.098,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-11-01",
    "rate": 0.102,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2013-12-02",
    "rate": 0.124,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-01-02",
    "rate": 0.183,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-02-03",
    "rate": 0.184,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-03-03",
    "rate": 0.184,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-04-01",
    "rate": 0.196,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-05-02",
    "rate": 0.225,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-06-02",
    "rate": 0.244,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-07-01",
    "rate": 0.051,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-08-01",
    "rate": 0.049,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-09-01",
    "rate": 0.031,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-10-01",
    "rate": -0.014,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-11-03",
    "rate": -0.012,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2014-12-01",
    "rate": -0.004,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-01-02",
    "rate": -0.02,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-02-02",
    "rate": -0.022,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-03-02",
    "rate": -0.031,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-04-01",
    "rate": -0.054,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-05-04",
    "rate": -0.095,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-06-01",
    "rate": -0.122,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-07-01",
    "rate": -0.123,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-08-03",
    "rate": -0.133,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-09-01",
    "rate": -0.143,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-10-01",
    "rate": -0.146,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-11-02",
    "rate": -0.148,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2015-12-01",
    "rate": -0.171,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-01-04",
    "rate": -0.251,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-02-01",
    "rate": -0.262,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-03-01",
    "rate": -0.268,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-04-01",
    "rate": -0.356,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-05-02",
    "rate": -0.359,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-06-01",
    "rate": -0.364,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-07-01",
    "rate": -0.369,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-08-01",
    "rate": -0.375,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-09-01",
    "rate": -0.381,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-10-03",
    "rate": -0.381,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-11-01",
    "rate": -0.379,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2016-12-01",
    "rate": -0.381,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-01-02",
    "rate": -0.371,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-02-01",
    "rate": -0.38,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-03-01",
    "rate": -0.378,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-04-03",
    "rate": -0.379,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-05-02",
    "rate": -0.378,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-06-01",
    "rate": -0.379,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-07-03",
    "rate": -0.379,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-08-01",
    "rate": -0.379,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-09-01",
    "rate": -0.379,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-10-02",
    "rate": -0.38,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-11-01",
    "rate": -0.379,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2017-12-01",
    "rate": -0.376,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-01-02",
    "rate": -0.379,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-02-01",
    "rate": -0.379,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-03-01",
    "rate": -0.378,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-04-03",
    "rate": -0.379,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-05-02",
    "rate": -0.38,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-06-01",
    "rate": -0.378,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-07-02",
    "rate": -0.38,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-08-01",
    "rate": -0.377,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-09-03",
    "rate": -0.377,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-10-01",
    "rate": -0.378,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-11-01",
    "rate": -0.376,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2018-12-03",
    "rate": -0.376,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2019-01-02",
    "rate": -0.372,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2019-02-01",
    "rate": -0.375,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2019-03-01",
    "rate": -0.373,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2019-04-01",
    "rate": -0.379,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2019-05-02",
    "rate": -0.377,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2019-06-03",
    "rate": -0.391,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2019-07-01",
    "rate": -0.398,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2019-08-01",
    "rate": -0.414,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2019-09-02",
    "rate": -0.413,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2019-10-01",
    "rate": -0.497,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2019-11-01",
    "rate": -0.488,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2019-12-02",
    "rate": -0.472,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2020-01-02",
    "rate": -0.491,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2020-02-03",
    "rate": -0.51,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2020-03-02",
    "rate": -0.52,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2020-04-01",
    "rate": -0.516,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2020-05-04",
    "rate": -0.5,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2020-06-01",
    "rate": -0.52,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2020-07-01",
    "rate": -0.524,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2020-08-03",
    "rate": -0.537,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2020-09-01",
    "rate": -0.529,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2020-10-01",
    "rate": -0.555,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2020-11-02",
    "rate": -0.538,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2020-12-01",
    "rate": -0.552,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2021-01-04",
    "rate": -0.579,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2021-02-01",
    "rate": -0.56,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2021-03-01",
    "rate": -0.566,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2021-04-01",
    "rate": -0.555,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2021-05-03",
    "rate": -0.568,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2021-06-01",
    "rate": -0.57,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2021-07-01",
    "rate": -0.567,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2021-08-02",
    "rate": -0.571,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2021-09-01",
    "rate": -0.573,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2021-10-01",
    "rate": -0.562,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2021-11-01",
    "rate": -0.562,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2021-12-01",
    "rate": -0.576,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2022-01-03",
    "rate": -0.587,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2022-02-01",
    "rate": -0.567,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2022-03-01",
    "rate": -0.565,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2022-04-01",
    "rate": -0.564,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2022-05-02",
    "rate": -0.568,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2022-06-01",
    "rate": -0.577,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2022-07-01",
    "rate": -0.565,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2022-08-01",
    "rate": -0.071,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2022-09-01",
    "rate": -0.073,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2022-10-03",
    "rate": 0.659,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2022-11-01",
    "rate": 1.159,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2022-12-01",
    "rate": 1.398,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2023-01-02",
    "rate": 1.876,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2023-02-01",
    "rate": 1.907,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2023-03-01",
    "rate": 2.368,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2023-04-03",
    "rate": 2.895,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2023-05-02",
    "rate": 2.91,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2023-06-01",
    "rate": 3.154,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2023-07-03",
    "rate": 3.388,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2023-08-01",
    "rate": 3.532,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2023-09-01",
    "rate": 3.642,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2023-10-02",
    "rate": 3.858,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2023-11-01",
    "rate": 3.868,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2023-12-01",
    "rate": 3.839,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2024-01-02",
    "rate": 3.848,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2024-02-01",
    "rate": 3.843,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2024-03-01",
    "rate": 3.872,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2024-04-02",
    "rate": 3.87,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2024-05-02",
    "rate": 3.858,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2024-06-03",
    "rate": 3.828,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2024-07-01",
    "rate": 3.641,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2024-08-01",
    "rate": 3.642,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2024-09-02",
    "rate": 3.608,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2024-10-01",
    "rate": 3.328,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2024-11-01",
    "rate": 3.131,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2024-12-02",
    "rate": 3.16,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2025-01-02",
    "rate": 2.911,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2025-02-03",
    "rate": 2.787,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2025-03-03",
    "rate": 2.622,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2025-04-01",
    "rate": 2.39,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2025-05-02",
    "rate": 2.144,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2025-06-02",
    "rate": 2.181,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2025-07-01",
    "rate": 1.902,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2025-08-01",
    "rate": 1.866,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2025-09-01",
    "rate": 1.852,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2025-10-01",
    "rate": 1.914,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2025-11-03",
    "rate": 1.921,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  },
  {
    "date": "2025-12-01",
    "rate": 1.929,
    "maturity_level": "7 days, 0:00:00",
    "granularity": "weekly"
  }
];

const NodeEuribor1WWEEKLY = createNodeComponent({
  label: "Euribor 1W-WEEKLY",
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

export default NodeEuribor1WWEEKLY;
