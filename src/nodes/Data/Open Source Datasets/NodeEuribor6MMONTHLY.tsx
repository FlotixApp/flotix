import { createNodeComponent } from "../../createNodeComponent";
import * as dfd from "danfojs";

// Auto-generated from: ../src/nodes/Data/OpenDatasets/finance/emmi/euribor_6m_monthly.csv
// Generated on: Fri Jan 23 12:00:27 CET 2026

const dataset = [
  {
    "date": "1999-01-01",
    "rate": 3.233,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-02-01",
    "rate": 3.017,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-03-01",
    "rate": 3.059,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-04-01",
    "rate": 2.92,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-05-03",
    "rate": 2.604,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-06-01",
    "rate": 2.615,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-07-01",
    "rate": 2.811,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-08-02",
    "rate": 3.012,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-09-01",
    "rate": 3.089,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-10-01",
    "rate": 3.178,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-11-01",
    "rate": 3.546,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "1999-12-01",
    "rate": 3.473,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-01-03",
    "rate": 3.523,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-02-01",
    "rate": 3.697,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-03-01",
    "rate": 3.822,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-04-03",
    "rate": 4.002,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-05-02",
    "rate": 4.277,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-06-01",
    "rate": 4.672,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-07-03",
    "rate": 4.782,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-08-01",
    "rate": 4.916,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-09-01",
    "rate": 5.044,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-10-02",
    "rate": 5.047,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-11-01",
    "rate": 5.195,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2000-12-01",
    "rate": 5.03,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-02-01",
    "rate": 4.606,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-03-01",
    "rate": 4.629,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-04-02",
    "rate": 4.431,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-05-02",
    "rate": 4.764,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-06-01",
    "rate": 4.416,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-07-02",
    "rate": 4.361,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-08-01",
    "rate": 4.323,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-09-03",
    "rate": 4.13,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-10-01",
    "rate": 3.546,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-10-15",
    "rate": null,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-11-01",
    "rate": 3.342,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2001-12-03",
    "rate": 3.22,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-01-02",
    "rate": 3.228,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-02-01",
    "rate": 3.415,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-03-01",
    "rate": 3.413,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-04-02",
    "rate": 3.602,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-05-02",
    "rate": 3.498,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-06-03",
    "rate": 3.643,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-07-01",
    "rate": 3.524,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-08-01",
    "rate": 3.399,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-09-02",
    "rate": 3.339,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-10-01",
    "rate": 3.164,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-11-01",
    "rate": 3.133,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2002-12-02",
    "rate": 2.977,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-01-02",
    "rate": 2.794,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-02-03",
    "rate": 2.725,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-03-03",
    "rate": 2.418,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-04-01",
    "rate": 2.423,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-05-02",
    "rate": 2.406,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-06-02",
    "rate": 2.2,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-07-01",
    "rate": 2.071,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-08-01",
    "rate": 2.155,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-09-01",
    "rate": 2.196,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-10-01",
    "rate": 2.093,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-11-03",
    "rate": 2.219,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2003-12-01",
    "rate": 2.243,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-01-02",
    "rate": 2.151,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-02-02",
    "rate": 2.13,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-03-01",
    "rate": 2.041,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-04-01",
    "rate": 1.936,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-05-03",
    "rate": 2.105,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-06-01",
    "rate": 2.151,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-07-01",
    "rate": 2.184,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-08-02",
    "rate": 2.185,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-09-01",
    "rate": 2.162,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-10-01",
    "rate": 2.208,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-11-01",
    "rate": 2.195,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2004-12-01",
    "rate": 2.2,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-01-03",
    "rate": 2.209,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-02-01",
    "rate": 2.183,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-03-01",
    "rate": 2.199,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-04-01",
    "rate": 2.201,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-05-02",
    "rate": 2.147,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-06-01",
    "rate": 2.127,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-07-01",
    "rate": 2.104,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-08-01",
    "rate": 2.156,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-09-01",
    "rate": 2.155,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-10-03",
    "rate": 2.216,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-11-01",
    "rate": 2.38,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2005-12-01",
    "rate": 2.597,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-01-02",
    "rate": 2.643,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-02-01",
    "rate": 2.699,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-03-01",
    "rate": 2.79,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-04-03",
    "rate": 2.992,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-05-02",
    "rate": 3.03,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-06-01",
    "rate": 3.126,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-07-03",
    "rate": 3.239,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-08-01",
    "rate": 3.335,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-09-01",
    "rate": 3.46,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-10-02",
    "rate": 3.582,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-11-01",
    "rate": 3.696,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2006-12-01",
    "rate": 3.743,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-01-02",
    "rate": 3.857,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-02-01",
    "rate": 3.923,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-03-01",
    "rate": 3.96,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-04-02",
    "rate": 4.048,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-05-01",
    "rate": 4.135,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-06-01",
    "rate": 4.258,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-07-02",
    "rate": 4.316,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-08-01",
    "rate": 4.371,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-09-03",
    "rate": 4.765,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-10-01",
    "rate": 4.753,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-11-01",
    "rate": 4.618,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2007-12-03",
    "rate": 4.775,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-01-02",
    "rate": 4.703,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-02-01",
    "rate": 4.356,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-03-03",
    "rate": 4.379,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-04-01",
    "rate": 4.732,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-05-02",
    "rate": 4.878,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-06-02",
    "rate": 4.928,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-07-01",
    "rate": 5.145,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-08-01",
    "rate": 5.16,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-09-01",
    "rate": 5.165,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-10-01",
    "rate": 5.405,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-11-03",
    "rate": 4.786,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2008-12-01",
    "rate": 3.859,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-01-02",
    "rate": 2.945,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-02-02",
    "rate": 2.162,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-03-02",
    "rate": 1.919,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-04-01",
    "rate": 1.656,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-05-04",
    "rate": 1.553,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-06-01",
    "rate": 1.464,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-07-01",
    "rate": 1.303,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-08-03",
    "rate": 1.137,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-09-01",
    "rate": 1.08,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-10-01",
    "rate": 1.017,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-11-02",
    "rate": 1.004,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2009-12-01",
    "rate": 0.997,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-01-04",
    "rate": 0.996,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-02-01",
    "rate": 0.966,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-03-01",
    "rate": 0.959,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-04-01",
    "rate": 0.945,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-05-03",
    "rate": 0.971,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-06-01",
    "rate": 0.991,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-07-01",
    "rate": 1.056,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-08-02",
    "rate": 1.145,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-09-01",
    "rate": 1.134,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-10-01",
    "rate": 1.184,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-11-01",
    "rate": 1.269,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2010-12-01",
    "rate": 1.258,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-01-03",
    "rate": 1.224,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-02-01",
    "rate": 1.331,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-03-01",
    "rate": 1.382,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-04-01",
    "rate": 1.556,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-05-02",
    "rate": 1.682,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-06-01",
    "rate": 1.714,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-07-01",
    "rate": 1.797,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-08-01",
    "rate": 1.82,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-09-01",
    "rate": 1.748,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-10-03",
    "rate": 1.757,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-11-01",
    "rate": 1.782,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2011-12-01",
    "rate": 1.697,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-01-02",
    "rate": 1.606,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-02-01",
    "rate": 1.409,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-03-01",
    "rate": 1.267,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-04-02",
    "rate": 1.072,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-05-02",
    "rate": 0.992,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-06-01",
    "rate": 0.943,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-07-02",
    "rate": 0.928,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-08-01",
    "rate": 0.664,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-09-03",
    "rate": 0.533,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-10-01",
    "rate": 0.438,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-11-01",
    "rate": 0.387,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2012-12-03",
    "rate": 0.342,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-01-02",
    "rate": 0.319,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-02-01",
    "rate": 0.38,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-03-01",
    "rate": 0.328,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-04-02",
    "rate": 0.332,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-05-01",
    "rate": 0.315,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-06-03",
    "rate": 0.299,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-07-01",
    "rate": 0.34,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-08-01",
    "rate": 0.34,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-09-02",
    "rate": 0.344,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-10-01",
    "rate": 0.338,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-11-01",
    "rate": 0.341,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2013-12-02",
    "rate": 0.331,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-01-02",
    "rate": 0.387,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-02-03",
    "rate": 0.387,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-03-03",
    "rate": 0.387,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-04-01",
    "rate": 0.418,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-05-02",
    "rate": 0.437,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-06-02",
    "rate": 0.394,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-07-01",
    "rate": 0.302,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-08-01",
    "rate": 0.308,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-09-01",
    "rate": 0.259,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-10-01",
    "rate": 0.181,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-11-03",
    "rate": 0.189,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2014-12-01",
    "rate": 0.179,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-01-02",
    "rate": 0.169,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-02-02",
    "rate": 0.134,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-03-02",
    "rate": 0.11,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-04-01",
    "rate": 0.088,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-05-04",
    "rate": 0.064,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-06-01",
    "rate": 0.049,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-07-01",
    "rate": 0.049,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-08-03",
    "rate": 0.049,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-09-01",
    "rate": 0.039,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-10-01",
    "rate": 0.027,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-11-02",
    "rate": 0.007,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2015-12-01",
    "rate": -0.045,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-01-04",
    "rate": -0.041,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-02-01",
    "rate": -0.094,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-03-01",
    "rate": -0.135,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-04-01",
    "rate": -0.131,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-05-02",
    "rate": -0.141,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-06-01",
    "rate": -0.153,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-07-01",
    "rate": -0.182,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-08-01",
    "rate": -0.186,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-09-01",
    "rate": -0.193,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-10-03",
    "rate": -0.203,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-11-01",
    "rate": -0.211,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2016-12-01",
    "rate": -0.219,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-01-02",
    "rate": -0.22,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-02-01",
    "rate": -0.244,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-03-01",
    "rate": -0.237,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-04-03",
    "rate": -0.243,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-05-02",
    "rate": -0.249,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-06-01",
    "rate": -0.254,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-07-03",
    "rate": -0.271,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-08-01",
    "rate": -0.272,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-09-01",
    "rate": -0.273,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-10-02",
    "rate": -0.272,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-11-01",
    "rate": -0.276,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2017-12-01",
    "rate": -0.271,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-01-02",
    "rate": -0.271,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-02-01",
    "rate": -0.278,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-03-01",
    "rate": -0.271,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-04-03",
    "rate": -0.27,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-05-02",
    "rate": -0.269,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-06-01",
    "rate": -0.269,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-07-02",
    "rate": -0.269,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-08-01",
    "rate": -0.269,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-09-03",
    "rate": -0.268,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-10-01",
    "rate": -0.268,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-11-01",
    "rate": -0.258,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2018-12-03",
    "rate": -0.248,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-01-02",
    "rate": -0.238,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-02-01",
    "rate": -0.235,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-03-01",
    "rate": -0.23,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-04-01",
    "rate": -0.228,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-05-02",
    "rate": -0.232,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-06-03",
    "rate": -0.254,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-07-01",
    "rate": -0.313,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-08-01",
    "rate": -0.363,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-09-02",
    "rate": -0.439,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-10-01",
    "rate": -0.387,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-11-01",
    "rate": -0.348,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2019-12-02",
    "rate": -0.345,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-01-02",
    "rate": -0.323,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-02-03",
    "rate": -0.338,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-03-02",
    "rate": -0.4,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-04-01",
    "rate": -0.276,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-05-04",
    "rate": -0.157,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-06-01",
    "rate": -0.163,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-07-01",
    "rate": -0.295,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-08-03",
    "rate": -0.417,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-09-01",
    "rate": -0.441,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-10-01",
    "rate": -0.481,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-11-02",
    "rate": -0.513,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2020-12-01",
    "rate": -0.508,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-01-04",
    "rate": -0.532,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-02-01",
    "rate": -0.528,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-03-01",
    "rate": -0.508,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-04-01",
    "rate": -0.512,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-05-03",
    "rate": -0.518,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-06-01",
    "rate": -0.517,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-07-01",
    "rate": -0.513,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-08-02",
    "rate": -0.523,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-09-01",
    "rate": -0.521,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-10-01",
    "rate": -0.526,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-11-01",
    "rate": -0.529,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2021-12-01",
    "rate": -0.541,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-01-03",
    "rate": -0.539,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-02-01",
    "rate": -0.503,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-03-01",
    "rate": -0.496,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-04-01",
    "rate": -0.362,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-05-02",
    "rate": -0.204,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-06-01",
    "rate": -0.034,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-07-01",
    "rate": 0.238,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-08-01",
    "rate": 0.654,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-09-01",
    "rate": 1.24,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-10-03",
    "rate": 1.775,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-11-01",
    "rate": 2.168,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2022-12-01",
    "rate": 2.405,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-01-02",
    "rate": 2.732,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-02-01",
    "rate": 3.009,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-03-01",
    "rate": 3.311,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-04-03",
    "rate": 3.335,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-05-02",
    "rate": 3.622,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-06-01",
    "rate": 3.721,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-07-03",
    "rate": 3.913,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-08-01",
    "rate": 3.948,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-09-01",
    "rate": 3.934,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-10-02",
    "rate": 4.138,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-11-01",
    "rate": 4.081,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2023-12-01",
    "rate": 4.004,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-01-02",
    "rate": 3.861,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-02-01",
    "rate": 3.832,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-03-01",
    "rate": 3.912,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-04-02",
    "rate": 3.842,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-05-02",
    "rate": 3.828,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-06-03",
    "rate": 3.755,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-07-01",
    "rate": 3.678,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-08-01",
    "rate": 3.563,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-09-02",
    "rate": 3.351,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-10-01",
    "rate": 3.092,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-11-01",
    "rate": 2.912,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2024-12-02",
    "rate": 2.675,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-01-02",
    "rate": 2.562,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-02-03",
    "rate": 2.536,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-03-03",
    "rate": 2.331,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-04-01",
    "rate": 2.309,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-05-02",
    "rate": 2.143,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-06-02",
    "rate": 2.063,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-07-01",
    "rate": 2.051,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-08-01",
    "rate": 2.07,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-09-01",
    "rate": 2.086,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-10-01",
    "rate": 2.079,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-11-03",
    "rate": 2.142,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  },
  {
    "date": "2025-12-01",
    "rate": 2.123,
    "maturity_level": "0:06:00",
    "granularity": "monthly"
  }
];

const NodeEuribor6MMONTHLY = createNodeComponent({
  label: "Euribor 6M-MONTHLY",
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

export default NodeEuribor6MMONTHLY;
