import { createNodeComponent } from "../../createNodeComponent";
import * as dfd from "danfojs";

// Auto-generated from: ../src/nodes/Data/OpenDatasets/finance/emmi/euribor_3m_monthly.csv
// Generated on: Fri Jan 23 12:00:24 CET 2026

const dataset = [
  {
    "date": "1999-01-01",
    "rate": 3.245,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-02-01",
    "rate": 3.078,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-03-01",
    "rate": 3.099,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-04-01",
    "rate": 2.942,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-05-03",
    "rate": 2.583,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-06-01",
    "rate": 2.585,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-07-01",
    "rate": 2.655,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-08-02",
    "rate": 2.697,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-09-01",
    "rate": 2.699,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-10-01",
    "rate": 3.126,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-11-01",
    "rate": 3.501,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-12-01",
    "rate": 3.45,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-01-03",
    "rate": 3.338,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-02-01",
    "rate": 3.496,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-03-01",
    "rate": 3.633,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-04-03",
    "rate": 3.833,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-05-02",
    "rate": 4.104,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-06-01",
    "rate": 4.467,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-07-03",
    "rate": 4.551,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-08-01",
    "rate": 4.636,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-09-01",
    "rate": 4.829,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-10-02",
    "rate": 4.991,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-11-01",
    "rate": 5.137,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-12-01",
    "rate": 5.021,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-02-01",
    "rate": 4.714,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-03-01",
    "rate": 4.756,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-04-02",
    "rate": 4.571,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-05-02",
    "rate": 4.817,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-06-01",
    "rate": 4.513,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-07-02",
    "rate": 4.435,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-08-01",
    "rate": 4.429,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-09-03",
    "rate": 4.254,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-10-01",
    "rate": 3.656,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-10-15",
    "rate": null,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-11-01",
    "rate": 3.512,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-12-03",
    "rate": 3.346,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-01-02",
    "rate": 3.279,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-02-01",
    "rate": 3.375,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-03-01",
    "rate": 3.367,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-04-02",
    "rate": 3.446,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-05-02",
    "rate": 3.383,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-06-03",
    "rate": 3.483,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-07-01",
    "rate": 3.438,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-08-01",
    "rate": 3.371,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-09-02",
    "rate": 3.351,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-10-01",
    "rate": 3.279,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-11-01",
    "rate": 3.236,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-12-02",
    "rate": 3.036,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-01-02",
    "rate": 2.861,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-02-03",
    "rate": 2.807,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-03-03",
    "rate": 2.503,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-04-01",
    "rate": 2.514,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-05-02",
    "rate": 2.504,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-06-02",
    "rate": 2.258,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-07-01",
    "rate": 2.145,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-08-01",
    "rate": 2.129,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-09-01",
    "rate": 2.151,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-10-01",
    "rate": 2.121,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-11-03",
    "rate": 2.163,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-12-01",
    "rate": 2.16,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-01-02",
    "rate": 2.12,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-02-02",
    "rate": 2.091,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-03-01",
    "rate": 2.047,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-04-01",
    "rate": 1.96,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-05-03",
    "rate": 2.072,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-06-01",
    "rate": 2.087,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-07-01",
    "rate": 2.116,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-08-02",
    "rate": 2.115,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-09-01",
    "rate": 2.115,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-10-01",
    "rate": 2.148,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-11-01",
    "rate": 2.152,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-12-01",
    "rate": 2.174,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-01-03",
    "rate": 2.154,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-02-01",
    "rate": 2.142,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-03-01",
    "rate": 2.136,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-04-01",
    "rate": 2.147,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-05-02",
    "rate": 2.126,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-06-01",
    "rate": 2.124,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-07-01",
    "rate": 2.107,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-08-01",
    "rate": 2.126,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-09-01",
    "rate": 2.133,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-10-03",
    "rate": 2.178,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-11-01",
    "rate": 2.264,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-12-01",
    "rate": 2.474,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-01-02",
    "rate": 2.488,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-02-01",
    "rate": 2.554,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-03-01",
    "rate": 2.666,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-04-03",
    "rate": 2.818,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-05-02",
    "rate": 2.86,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-06-01",
    "rate": 2.944,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-07-03",
    "rate": 3.055,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-08-01",
    "rate": 3.17,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-09-01",
    "rate": 3.267,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-10-02",
    "rate": 3.424,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-11-01",
    "rate": 3.563,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-12-01",
    "rate": 3.638,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-01-02",
    "rate": 3.725,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-02-01",
    "rate": 3.785,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-03-01",
    "rate": 3.856,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-04-02",
    "rate": 3.927,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-05-01",
    "rate": 4.017,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-06-01",
    "rate": 4.124,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-07-02",
    "rate": 4.176,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-08-01",
    "rate": 4.264,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-09-03",
    "rate": 4.741,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-10-01",
    "rate": 4.791,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-11-01",
    "rate": 4.598,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-12-03",
    "rate": 4.839,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-01-02",
    "rate": 4.665,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-02-01",
    "rate": 4.367,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-03-03",
    "rate": 4.383,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-04-01",
    "rate": 4.731,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-05-02",
    "rate": 4.855,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-06-02",
    "rate": 4.865,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-07-01",
    "rate": 4.955,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-08-01",
    "rate": 4.968,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-09-01",
    "rate": 4.961,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-10-01",
    "rate": 5.291,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-11-03",
    "rate": 4.733,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-12-01",
    "rate": 3.816,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-01-02",
    "rate": 2.859,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-02-02",
    "rate": 2.077,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-03-02",
    "rate": 1.811,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-04-01",
    "rate": 1.498,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-05-04",
    "rate": 1.354,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-06-01",
    "rate": 1.266,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-07-01",
    "rate": 1.085,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-08-03",
    "rate": 0.886,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-09-01",
    "rate": 0.819,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-10-01",
    "rate": 0.754,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-11-02",
    "rate": 0.722,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-12-01",
    "rate": 0.72,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-01-04",
    "rate": 0.7,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-02-01",
    "rate": 0.665,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-03-01",
    "rate": 0.655,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-04-01",
    "rate": 0.635,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-05-03",
    "rate": 0.665,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-06-01",
    "rate": 0.702,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-07-01",
    "rate": 0.782,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-08-02",
    "rate": 0.898,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-09-01",
    "rate": 0.886,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-10-01",
    "rate": 0.942,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-11-01",
    "rate": 1.046,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-12-01",
    "rate": 1.026,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-01-03",
    "rate": 1.001,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-02-01",
    "rate": 1.082,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-03-01",
    "rate": 1.096,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-04-01",
    "rate": 1.249,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-05-02",
    "rate": 1.395,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-06-01",
    "rate": 1.434,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-07-01",
    "rate": 1.556,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-08-01",
    "rate": 1.609,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-09-01",
    "rate": 1.543,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-10-03",
    "rate": 1.557,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-11-01",
    "rate": 1.585,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-12-01",
    "rate": 1.469,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-01-02",
    "rate": 1.343,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-02-01",
    "rate": 1.115,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-03-01",
    "rate": 0.967,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-04-02",
    "rate": 0.771,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-05-02",
    "rate": 0.704,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-06-01",
    "rate": 0.665,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-07-02",
    "rate": 0.652,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-08-01",
    "rate": 0.381,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-09-03",
    "rate": 0.276,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-10-01",
    "rate": 0.223,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-11-01",
    "rate": 0.197,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-12-03",
    "rate": 0.19,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-01-02",
    "rate": 0.188,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-02-01",
    "rate": 0.234,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-03-01",
    "rate": 0.206,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-04-02",
    "rate": 0.21,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-05-01",
    "rate": 0.207,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-06-03",
    "rate": 0.2,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-07-01",
    "rate": 0.222,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-08-01",
    "rate": 0.228,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-09-02",
    "rate": 0.225,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-10-01",
    "rate": 0.225,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-11-01",
    "rate": 0.226,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-12-02",
    "rate": 0.236,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-01-02",
    "rate": 0.284,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-02-03",
    "rate": 0.29,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-03-03",
    "rate": 0.288,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-04-01",
    "rate": 0.313,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-05-02",
    "rate": 0.336,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-06-02",
    "rate": 0.309,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-07-01",
    "rate": 0.206,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-08-01",
    "rate": 0.208,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-09-01",
    "rate": 0.159,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-10-01",
    "rate": 0.082,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-11-03",
    "rate": 0.085,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-12-01",
    "rate": 0.082,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-01-02",
    "rate": 0.076,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-02-02",
    "rate": 0.055,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-03-02",
    "rate": 0.039,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-04-01",
    "rate": 0.018,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-05-04",
    "rate": -0.007,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-06-01",
    "rate": -0.013,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-07-01",
    "rate": -0.014,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-08-03",
    "rate": -0.023,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-09-01",
    "rate": -0.033,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-10-01",
    "rate": -0.043,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-11-02",
    "rate": -0.066,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-12-01",
    "rate": -0.116,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-01-04",
    "rate": -0.132,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-02-01",
    "rate": -0.162,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-03-01",
    "rate": -0.207,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-04-01",
    "rate": -0.245,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-05-02",
    "rate": -0.25,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-06-01",
    "rate": -0.261,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-07-01",
    "rate": -0.29,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-08-01",
    "rate": -0.297,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-09-01",
    "rate": -0.299,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-10-03",
    "rate": -0.301,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-11-01",
    "rate": -0.313,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-12-01",
    "rate": -0.313,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-01-02",
    "rate": -0.318,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-02-01",
    "rate": -0.328,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-03-01",
    "rate": -0.329,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-04-03",
    "rate": -0.33,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-05-02",
    "rate": -0.329,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-06-01",
    "rate": -0.329,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-07-03",
    "rate": -0.331,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-08-01",
    "rate": -0.331,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-09-01",
    "rate": -0.329,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-10-02",
    "rate": -0.329,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-11-01",
    "rate": -0.329,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-12-01",
    "rate": -0.326,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-01-02",
    "rate": -0.329,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-02-01",
    "rate": -0.328,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-03-01",
    "rate": -0.327,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-04-03",
    "rate": -0.328,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-05-02",
    "rate": -0.329,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-06-01",
    "rate": -0.321,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-07-02",
    "rate": -0.321,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-08-01",
    "rate": -0.319,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-09-03",
    "rate": -0.319,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-10-01",
    "rate": -0.317,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-11-01",
    "rate": -0.318,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-12-03",
    "rate": -0.316,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-01-02",
    "rate": -0.31,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-02-01",
    "rate": -0.308,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-03-01",
    "rate": -0.31,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-04-01",
    "rate": -0.31,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-05-02",
    "rate": -0.309,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-06-03",
    "rate": -0.323,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-07-01",
    "rate": -0.346,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-08-01",
    "rate": -0.377,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-09-02",
    "rate": -0.436,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-10-01",
    "rate": -0.428,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-11-01",
    "rate": -0.399,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-12-02",
    "rate": -0.4,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-01-02",
    "rate": -0.379,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-02-03",
    "rate": -0.393,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-03-02",
    "rate": -0.434,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-04-01",
    "rate": -0.343,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-05-04",
    "rate": -0.286,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-06-01",
    "rate": -0.325,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-07-01",
    "rate": -0.417,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-08-03",
    "rate": -0.469,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-09-01",
    "rate": -0.478,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-10-01",
    "rate": -0.498,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-11-02",
    "rate": -0.52,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-12-01",
    "rate": -0.526,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-01-04",
    "rate": -0.546,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-02-01",
    "rate": -0.543,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-03-01",
    "rate": -0.533,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-04-01",
    "rate": -0.538,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-05-03",
    "rate": -0.535,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-06-01",
    "rate": -0.545,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-07-01",
    "rate": -0.54,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-08-02",
    "rate": -0.543,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-09-01",
    "rate": -0.55,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-10-01",
    "rate": -0.547,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-11-01",
    "rate": -0.558,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-12-01",
    "rate": -0.572,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-01-03",
    "rate": -0.57,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-02-01",
    "rate": -0.547,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-03-01",
    "rate": -0.534,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-04-01",
    "rate": -0.461,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-05-02",
    "rate": -0.416,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-06-01",
    "rate": -0.335,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-07-01",
    "rate": -0.176,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-08-01",
    "rate": 0.246,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-09-01",
    "rate": 0.712,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-10-03",
    "rate": 1.185,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-11-01",
    "rate": 1.737,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-12-01",
    "rate": 1.972,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-01-02",
    "rate": 2.162,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-02-01",
    "rate": 2.483,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-03-01",
    "rate": 2.783,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-04-03",
    "rate": 3.053,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-05-02",
    "rate": 3.274,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-06-01",
    "rate": 3.462,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-07-03",
    "rate": 3.597,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-08-01",
    "rate": 3.723,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-09-01",
    "rate": 3.77,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-10-02",
    "rate": 3.951,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-11-01",
    "rate": 3.953,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-12-01",
    "rate": 3.96,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-01-02",
    "rate": 3.905,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-02-01",
    "rate": 3.884,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-03-01",
    "rate": 3.938,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-04-02",
    "rate": 3.883,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-05-02",
    "rate": 3.853,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-06-03",
    "rate": 3.782,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-07-01",
    "rate": 3.709,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-08-01",
    "rate": 3.638,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-09-02",
    "rate": 3.469,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-10-01",
    "rate": 3.252,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-11-01",
    "rate": 3.085,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-12-02",
    "rate": 2.924,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-01-02",
    "rate": 2.736,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-02-03",
    "rate": 2.562,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-03-03",
    "rate": 2.464,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-04-01",
    "rate": 2.324,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-05-02",
    "rate": 2.142,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-06-02",
    "rate": 1.979,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-07-01",
    "rate": 1.961,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-08-01",
    "rate": 1.994,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-09-01",
    "rate": 2.074,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-10-01",
    "rate": 2.017,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-11-03",
    "rate": 2.023,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-12-01",
    "rate": 2.06,
    "maturity_level": "0:03:00",
    "granularity": "monthly"
  }
];

const NodeEuribor3MMonthly = createNodeComponent({
  label: "Euribor 3M (monthly)",
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

export default NodeEuribor3MMonthly;
