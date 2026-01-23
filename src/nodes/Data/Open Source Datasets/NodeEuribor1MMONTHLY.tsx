import { createNodeComponent } from "../../createNodeComponent";
import * as dfd from "danfojs";

// Auto-generated from: ../src/nodes/Data/OpenDatasets/finance/emmi/euribor_1m_monthly.csv
// Generated on: Fri Jan 23 12:00:26 CET 2026

const dataset = [
  {
    "date": "1999-01-01",
    "rate": 3.254,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-02-01",
    "rate": 3.126,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-03-01",
    "rate": 3.122,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-04-01",
    "rate": 2.963,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-05-03",
    "rate": 2.568,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-06-01",
    "rate": 2.571,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-07-01",
    "rate": 2.631,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-08-02",
    "rate": 2.636,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-09-01",
    "rate": 2.605,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-10-01",
    "rate": 2.637,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-11-01",
    "rate": 2.892,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-12-01",
    "rate": 3.512,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-01-03",
    "rate": 3.171,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-02-01",
    "rate": 3.313,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-03-01",
    "rate": 3.443,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-04-03",
    "rate": 3.694,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-05-02",
    "rate": 3.944,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-06-01",
    "rate": 4.294,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-07-03",
    "rate": 4.423,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-08-01",
    "rate": 4.416,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-09-01",
    "rate": 4.664,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-10-02",
    "rate": 4.787,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-11-01",
    "rate": 4.956,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-12-01",
    "rate": 5.017,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-02-01",
    "rate": 4.776,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-03-01",
    "rate": 4.806,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-04-02",
    "rate": 4.722,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-05-02",
    "rate": 4.845,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-06-01",
    "rate": 4.562,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-07-02",
    "rate": 4.517,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-08-01",
    "rate": 4.505,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-09-03",
    "rate": 4.314,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-10-01",
    "rate": 3.727,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-10-15",
    "rate": null,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-11-01",
    "rate": 3.623,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-12-03",
    "rate": 3.422,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-01-02",
    "rate": 3.312,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-02-01",
    "rate": 3.351,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-03-01",
    "rate": 3.342,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-04-02",
    "rate": 3.361,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-05-02",
    "rate": 3.333,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-06-03",
    "rate": 3.387,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-07-01",
    "rate": 3.389,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-08-01",
    "rate": 3.345,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-09-02",
    "rate": 3.335,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-10-01",
    "rate": 3.313,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-11-01",
    "rate": 3.284,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-12-02",
    "rate": 3.138,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-01-02",
    "rate": 2.899,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-02-03",
    "rate": 2.832,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-03-03",
    "rate": 2.609,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-04-01",
    "rate": 2.568,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-05-02",
    "rate": 2.572,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-06-02",
    "rate": 2.352,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-07-01",
    "rate": 2.155,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-08-01",
    "rate": 2.12,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-09-01",
    "rate": 2.132,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-10-01",
    "rate": 2.103,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-11-03",
    "rate": 2.094,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-12-01",
    "rate": 2.155,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-01-02",
    "rate": 2.099,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-02-02",
    "rate": 2.073,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-03-01",
    "rate": 2.052,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-04-01",
    "rate": 2.022,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-05-03",
    "rate": 2.056,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-06-01",
    "rate": 2.064,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-07-01",
    "rate": 2.074,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-08-02",
    "rate": 2.075,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-09-01",
    "rate": 2.076,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-10-01",
    "rate": 2.079,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-11-01",
    "rate": 2.093,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-12-01",
    "rate": 2.169,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-01-03",
    "rate": 2.125,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-02-01",
    "rate": 2.106,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-03-01",
    "rate": 2.103,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-04-01",
    "rate": 2.104,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-05-02",
    "rate": 2.105,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-06-01",
    "rate": 2.104,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-07-01",
    "rate": 2.104,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-08-01",
    "rate": 2.111,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-09-01",
    "rate": 2.112,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-10-03",
    "rate": 2.122,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-11-01",
    "rate": 2.125,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-12-01",
    "rate": 2.406,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-01-02",
    "rate": 2.399,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-02-01",
    "rate": 2.39,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-03-01",
    "rate": 2.601,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-04-03",
    "rate": 2.647,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-05-02",
    "rate": 2.667,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-06-01",
    "rate": 2.821,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-07-03",
    "rate": 2.898,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-08-01",
    "rate": 3.033,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-09-01",
    "rate": 3.096,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-10-02",
    "rate": 3.291,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-11-01",
    "rate": 3.365,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-12-01",
    "rate": 3.588,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-01-02",
    "rate": 3.629,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-02-01",
    "rate": 3.609,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-03-01",
    "rate": 3.771,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-04-02",
    "rate": 3.864,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-05-01",
    "rate": 3.861,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-06-01",
    "rate": 4.034,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-07-02",
    "rate": 4.113,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-08-01",
    "rate": 4.105,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-09-03",
    "rate": 4.455,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-10-01",
    "rate": 4.389,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-11-01",
    "rate": 4.15,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-12-03",
    "rate": 4.834,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-01-02",
    "rate": 4.239,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-02-01",
    "rate": 4.19,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-03-03",
    "rate": 4.199,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-04-01",
    "rate": 4.357,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-05-02",
    "rate": 4.386,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-06-02",
    "rate": 4.464,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-07-01",
    "rate": 4.448,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-08-01",
    "rate": 4.483,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-09-01",
    "rate": 4.513,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-10-01",
    "rate": 5.088,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-11-03",
    "rate": 4.412,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-12-01",
    "rate": 3.523,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-01-02",
    "rate": 2.57,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-02-02",
    "rate": 1.735,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-03-02",
    "rate": 1.518,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-04-01",
    "rate": 1.105,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-05-04",
    "rate": 0.931,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-06-01",
    "rate": 0.933,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-07-01",
    "rate": 0.74,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-08-03",
    "rate": 0.526,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-09-01",
    "rate": 0.481,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-10-01",
    "rate": 0.439,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-11-02",
    "rate": 0.424,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-12-01",
    "rate": 0.476,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-01-04",
    "rate": 0.453,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-02-01",
    "rate": 0.425,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-03-01",
    "rate": 0.415,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-04-01",
    "rate": 0.4,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-05-03",
    "rate": 0.414,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-06-01",
    "rate": 0.428,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-07-01",
    "rate": 0.505,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-08-02",
    "rate": 0.646,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-09-01",
    "rate": 0.619,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-10-01",
    "rate": 0.704,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-11-01",
    "rate": 0.848,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-12-01",
    "rate": 0.812,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-01-03",
    "rate": 0.774,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-02-01",
    "rate": 0.915,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-03-01",
    "rate": 0.867,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-04-01",
    "rate": 0.984,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-05-02",
    "rate": 1.244,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-06-01",
    "rate": 1.223,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-07-01",
    "rate": 1.332,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-08-01",
    "rate": 1.434,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-09-01",
    "rate": 1.351,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-10-03",
    "rate": 1.355,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-11-01",
    "rate": 1.362,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-12-01",
    "rate": 1.205,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-01-02",
    "rate": 1.005,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-02-01",
    "rate": 0.701,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-03-01",
    "rate": 0.549,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-04-02",
    "rate": 0.417,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-05-02",
    "rate": 0.401,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-06-01",
    "rate": 0.384,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-07-02",
    "rate": 0.372,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-08-01",
    "rate": 0.144,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-09-03",
    "rate": 0.122,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-10-01",
    "rate": 0.116,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-11-01",
    "rate": 0.11,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-12-03",
    "rate": 0.113,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-01-02",
    "rate": 0.109,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-02-01",
    "rate": 0.122,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-03-01",
    "rate": 0.117,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-04-02",
    "rate": 0.117,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-05-01",
    "rate": 0.116,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-06-03",
    "rate": 0.113,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-07-01",
    "rate": 0.121,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-08-01",
    "rate": 0.13,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-09-02",
    "rate": 0.129,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-10-01",
    "rate": 0.128,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-11-01",
    "rate": 0.129,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-12-02",
    "rate": 0.17,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-01-02",
    "rate": 0.214,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-02-03",
    "rate": 0.225,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-03-03",
    "rate": 0.22,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-04-01",
    "rate": 0.235,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-05-02",
    "rate": 0.258,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-06-02",
    "rate": 0.25,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-07-01",
    "rate": 0.098,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-08-01",
    "rate": 0.097,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-09-01",
    "rate": 0.066,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-10-01",
    "rate": 0.006,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-11-03",
    "rate": 0.01,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-12-01",
    "rate": 0.021,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-01-02",
    "rate": 0.016,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-02-02",
    "rate": 0.003,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-03-02",
    "rate": -0.005,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-04-01",
    "rate": -0.017,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-05-04",
    "rate": -0.042,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-06-01",
    "rate": -0.057,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-07-01",
    "rate": -0.064,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-08-03",
    "rate": -0.078,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-09-01",
    "rate": -0.099,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-10-01",
    "rate": -0.113,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-11-02",
    "rate": -0.119,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-12-01",
    "rate": -0.161,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-01-04",
    "rate": -0.21,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-02-01",
    "rate": -0.232,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-03-01",
    "rate": -0.27,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-04-01",
    "rate": -0.335,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-05-02",
    "rate": -0.343,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-06-01",
    "rate": -0.349,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-07-01",
    "rate": -0.363,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-08-01",
    "rate": -0.371,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-09-01",
    "rate": -0.372,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-10-03",
    "rate": -0.371,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-11-01",
    "rate": -0.374,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-12-01",
    "rate": -0.372,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-01-02",
    "rate": -0.368,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-02-01",
    "rate": -0.372,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-03-01",
    "rate": -0.372,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-04-03",
    "rate": -0.372,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-05-02",
    "rate": -0.374,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-06-01",
    "rate": -0.374,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-07-03",
    "rate": -0.373,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-08-01",
    "rate": -0.371,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-09-01",
    "rate": -0.373,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-10-02",
    "rate": -0.373,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-11-01",
    "rate": -0.371,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-12-01",
    "rate": -0.369,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-01-02",
    "rate": -0.368,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-02-01",
    "rate": -0.369,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-03-01",
    "rate": -0.371,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-04-03",
    "rate": -0.372,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-05-02",
    "rate": -0.371,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-06-01",
    "rate": -0.371,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-07-02",
    "rate": -0.369,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-08-01",
    "rate": -0.369,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-09-03",
    "rate": -0.37,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-10-01",
    "rate": -0.371,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-11-01",
    "rate": -0.368,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-12-03",
    "rate": -0.368,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-01-02",
    "rate": -0.362,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-02-01",
    "rate": -0.369,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-03-01",
    "rate": -0.368,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-04-01",
    "rate": -0.367,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-05-02",
    "rate": -0.366,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-06-03",
    "rate": -0.378,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-07-01",
    "rate": -0.392,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-08-01",
    "rate": -0.393,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-09-02",
    "rate": -0.427,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-10-01",
    "rate": -0.467,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-11-01",
    "rate": -0.443,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-12-02",
    "rate": -0.439,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-01-02",
    "rate": -0.436,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-02-03",
    "rate": -0.455,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-03-02",
    "rate": -0.488,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-04-01",
    "rate": -0.468,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-05-04",
    "rate": -0.476,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-06-01",
    "rate": -0.498,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-07-01",
    "rate": -0.512,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-08-03",
    "rate": -0.516,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-09-01",
    "rate": -0.51,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-10-01",
    "rate": -0.526,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-11-02",
    "rate": -0.54,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-12-01",
    "rate": -0.548,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-01-04",
    "rate": -0.57,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-02-01",
    "rate": -0.56,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-03-01",
    "rate": -0.553,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-04-01",
    "rate": -0.551,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-05-03",
    "rate": -0.559,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-06-01",
    "rate": -0.56,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-07-01",
    "rate": -0.561,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-08-02",
    "rate": -0.556,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-09-01",
    "rate": -0.554,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-10-01",
    "rate": -0.557,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-11-01",
    "rate": -0.557,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-12-01",
    "rate": -0.573,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-01-03",
    "rate": -0.576,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-02-01",
    "rate": -0.56,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-03-01",
    "rate": -0.553,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-04-01",
    "rate": -0.541,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-05-02",
    "rate": -0.527,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-06-01",
    "rate": -0.541,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-07-01",
    "rate": -0.506,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-08-01",
    "rate": -0.062,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-09-01",
    "rate": 0.228,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-10-03",
    "rate": 0.674,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-11-01",
    "rate": 1.376,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-12-01",
    "rate": 1.526,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-01-02",
    "rate": 1.883,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-02-01",
    "rate": 2.19,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-03-01",
    "rate": 2.487,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-04-03",
    "rate": 2.928,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-05-02",
    "rate": 3.093,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-06-01",
    "rate": 3.21,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-07-03",
    "rate": 3.385,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-08-01",
    "rate": 3.58,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-09-01",
    "rate": 3.639,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-10-02",
    "rate": 3.858,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-11-01",
    "rate": 3.893,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-12-01",
    "rate": 3.869,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-01-02",
    "rate": 3.856,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-02-01",
    "rate": 3.873,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-03-01",
    "rate": 3.817,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-04-02",
    "rate": 3.855,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-05-02",
    "rate": 3.877,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-06-03",
    "rate": 3.69,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-07-01",
    "rate": 3.655,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-08-01",
    "rate": 3.606,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-09-02",
    "rate": 3.588,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-10-01",
    "rate": 3.33,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-11-01",
    "rate": 3.119,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-12-02",
    "rate": 2.987,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-01-02",
    "rate": 2.785,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-02-03",
    "rate": 2.644,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-03-03",
    "rate": 2.466,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-04-01",
    "rate": 2.349,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-05-02",
    "rate": 2.149,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-06-02",
    "rate": 1.984,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-07-01",
    "rate": 1.906,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-08-01",
    "rate": 1.893,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-09-01",
    "rate": 1.875,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-10-01",
    "rate": 1.909,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-11-03",
    "rate": 1.914,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-12-01",
    "rate": 1.961,
    "maturity_level": "0:01:00",
    "granularity": "monthly"
  }
];

const NodeEuribor1MMONTHLY = createNodeComponent({
  label: "Euribor 1M-MONTHLY",
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

export default NodeEuribor1MMONTHLY;
