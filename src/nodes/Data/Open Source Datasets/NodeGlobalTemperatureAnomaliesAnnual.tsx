import { createNodeComponent } from "../../createNodeComponent";
import * as dfd from "danfojs";

// Auto-generated from: ../src/nodes/Data/OpenDatasets/climate/nasa_giss_noaa_via_datahub/global_temperature_anomalies_annual.csv
// Generated on: Fri Jan 23 12:00:32 CET 2026

const dataset = [
  {
    "Source": "gcag",
    "Year": 1850.0,
    "Mean": -0.4177
  },
  {
    "Source": "gcag",
    "Year": 1851.0,
    "Mean": -0.2333
  },
  {
    "Source": "gcag",
    "Year": 1852.0,
    "Mean": -0.2294
  },
  {
    "Source": "gcag",
    "Year": 1853.0,
    "Mean": -0.2704
  },
  {
    "Source": "gcag",
    "Year": 1854.0,
    "Mean": -0.2915
  },
  {
    "Source": "gcag",
    "Year": 1855.0,
    "Mean": -0.2969
  },
  {
    "Source": "gcag",
    "Year": 1856.0,
    "Mean": -0.3204
  },
  {
    "Source": "gcag",
    "Year": 1857.0,
    "Mean": -0.4672
  },
  {
    "Source": "gcag",
    "Year": 1858.0,
    "Mean": -0.3888
  },
  {
    "Source": "gcag",
    "Year": 1859.0,
    "Mean": -0.2813
  },
  {
    "Source": "gcag",
    "Year": 1860.0,
    "Mean": -0.3902
  },
  {
    "Source": "gcag",
    "Year": 1861.0,
    "Mean": -0.4291
  },
  {
    "Source": "gcag",
    "Year": 1862.0,
    "Mean": -0.5364
  },
  {
    "Source": "gcag",
    "Year": 1863.0,
    "Mean": -0.3442
  },
  {
    "Source": "gcag",
    "Year": 1864.0,
    "Mean": -0.4655
  },
  {
    "Source": "gcag",
    "Year": 1865.0,
    "Mean": -0.3325
  },
  {
    "Source": "gcag",
    "Year": 1866.0,
    "Mean": -0.3413
  },
  {
    "Source": "gcag",
    "Year": 1867.0,
    "Mean": -0.357
  },
  {
    "Source": "gcag",
    "Year": 1868.0,
    "Mean": -0.3518
  },
  {
    "Source": "gcag",
    "Year": 1869.0,
    "Mean": -0.3166
  },
  {
    "Source": "gcag",
    "Year": 1870.0,
    "Mean": -0.3279
  },
  {
    "Source": "gcag",
    "Year": 1871.0,
    "Mean": -0.3686
  },
  {
    "Source": "gcag",
    "Year": 1872.0,
    "Mean": -0.3281
  },
  {
    "Source": "gcag",
    "Year": 1873.0,
    "Mean": -0.3413
  },
  {
    "Source": "gcag",
    "Year": 1874.0,
    "Mean": -0.3733
  },
  {
    "Source": "gcag",
    "Year": 1875.0,
    "Mean": -0.3756
  },
  {
    "Source": "gcag",
    "Year": 1876.0,
    "Mean": -0.4241
  },
  {
    "Source": "gcag",
    "Year": 1877.0,
    "Mean": -0.1011
  },
  {
    "Source": "gcag",
    "Year": 1878.0,
    "Mean": -0.0113
  },
  {
    "Source": "gcag",
    "Year": 1879.0,
    "Mean": -0.3036
  },
  {
    "Source": "GISTEMP",
    "Year": 1880.0,
    "Mean": -0.1725
  },
  {
    "Source": "gcag",
    "Year": 1880.0,
    "Mean": -0.3158
  },
  {
    "Source": "GISTEMP",
    "Year": 1881.0,
    "Mean": -0.0883
  },
  {
    "Source": "gcag",
    "Year": 1881.0,
    "Mean": -0.2322
  },
  {
    "Source": "GISTEMP",
    "Year": 1882.0,
    "Mean": -0.1067
  },
  {
    "Source": "gcag",
    "Year": 1882.0,
    "Mean": -0.2955
  },
  {
    "Source": "GISTEMP",
    "Year": 1883.0,
    "Mean": -0.1742
  },
  {
    "Source": "gcag",
    "Year": 1883.0,
    "Mean": -0.3465
  },
  {
    "Source": "GISTEMP",
    "Year": 1884.0,
    "Mean": -0.2808
  },
  {
    "Source": "gcag",
    "Year": 1884.0,
    "Mean": -0.4923
  },
  {
    "Source": "GISTEMP",
    "Year": 1885.0,
    "Mean": -0.3317
  },
  {
    "Source": "gcag",
    "Year": 1885.0,
    "Mean": -0.4711
  },
  {
    "Source": "GISTEMP",
    "Year": 1886.0,
    "Mean": -0.3158
  },
  {
    "Source": "gcag",
    "Year": 1886.0,
    "Mean": -0.4209
  },
  {
    "Source": "GISTEMP",
    "Year": 1887.0,
    "Mean": -0.3667
  },
  {
    "Source": "gcag",
    "Year": 1887.0,
    "Mean": -0.4988
  },
  {
    "Source": "GISTEMP",
    "Year": 1888.0,
    "Mean": -0.1758
  },
  {
    "Source": "gcag",
    "Year": 1888.0,
    "Mean": -0.3794
  },
  {
    "Source": "GISTEMP",
    "Year": 1889.0,
    "Mean": -0.1092
  },
  {
    "Source": "gcag",
    "Year": 1889.0,
    "Mean": -0.2499
  },
  {
    "Source": "GISTEMP",
    "Year": 1890.0,
    "Mean": -0.3558
  },
  {
    "Source": "gcag",
    "Year": 1890.0,
    "Mean": -0.5069
  },
  {
    "Source": "GISTEMP",
    "Year": 1891.0,
    "Mean": -0.2292
  },
  {
    "Source": "gcag",
    "Year": 1891.0,
    "Mean": -0.4013
  },
  {
    "Source": "GISTEMP",
    "Year": 1892.0,
    "Mean": -0.28
  },
  {
    "Source": "gcag",
    "Year": 1892.0,
    "Mean": -0.5076
  },
  {
    "Source": "GISTEMP",
    "Year": 1893.0,
    "Mean": -0.3192
  },
  {
    "Source": "gcag",
    "Year": 1893.0,
    "Mean": -0.4946
  },
  {
    "Source": "GISTEMP",
    "Year": 1894.0,
    "Mean": -0.3108
  },
  {
    "Source": "gcag",
    "Year": 1894.0,
    "Mean": -0.4838
  },
  {
    "Source": "GISTEMP",
    "Year": 1895.0,
    "Mean": -0.2392
  },
  {
    "Source": "gcag",
    "Year": 1895.0,
    "Mean": -0.4488
  },
  {
    "Source": "GISTEMP",
    "Year": 1896.0,
    "Mean": -0.12
  },
  {
    "Source": "gcag",
    "Year": 1896.0,
    "Mean": -0.284
  },
  {
    "Source": "GISTEMP",
    "Year": 1897.0,
    "Mean": -0.1175
  },
  {
    "Source": "gcag",
    "Year": 1897.0,
    "Mean": -0.2598
  },
  {
    "Source": "GISTEMP",
    "Year": 1898.0,
    "Mean": -0.2825
  },
  {
    "Source": "gcag",
    "Year": 1898.0,
    "Mean": -0.4858
  },
  {
    "Source": "GISTEMP",
    "Year": 1899.0,
    "Mean": -0.1825
  },
  {
    "Source": "gcag",
    "Year": 1899.0,
    "Mean": -0.3554
  },
  {
    "Source": "GISTEMP",
    "Year": 1900.0,
    "Mean": -0.0867
  },
  {
    "Source": "gcag",
    "Year": 1900.0,
    "Mean": -0.2345
  },
  {
    "Source": "GISTEMP",
    "Year": 1901.0,
    "Mean": -0.16
  },
  {
    "Source": "gcag",
    "Year": 1901.0,
    "Mean": -0.2934
  },
  {
    "Source": "GISTEMP",
    "Year": 1902.0,
    "Mean": -0.2858
  },
  {
    "Source": "gcag",
    "Year": 1902.0,
    "Mean": -0.439
  },
  {
    "Source": "GISTEMP",
    "Year": 1903.0,
    "Mean": -0.3767
  },
  {
    "Source": "gcag",
    "Year": 1903.0,
    "Mean": -0.5333
  },
  {
    "Source": "GISTEMP",
    "Year": 1904.0,
    "Mean": -0.4775
  },
  {
    "Source": "gcag",
    "Year": 1904.0,
    "Mean": -0.5975
  },
  {
    "Source": "GISTEMP",
    "Year": 1905.0,
    "Mean": -0.2683
  },
  {
    "Source": "gcag",
    "Year": 1905.0,
    "Mean": -0.4078
  },
  {
    "Source": "GISTEMP",
    "Year": 1906.0,
    "Mean": -0.2292
  },
  {
    "Source": "gcag",
    "Year": 1906.0,
    "Mean": -0.3191
  },
  {
    "Source": "GISTEMP",
    "Year": 1907.0,
    "Mean": -0.3933
  },
  {
    "Source": "gcag",
    "Year": 1907.0,
    "Mean": -0.5041
  },
  {
    "Source": "GISTEMP",
    "Year": 1908.0,
    "Mean": -0.43
  },
  {
    "Source": "gcag",
    "Year": 1908.0,
    "Mean": -0.5138
  },
  {
    "Source": "GISTEMP",
    "Year": 1909.0,
    "Mean": -0.4867
  },
  {
    "Source": "gcag",
    "Year": 1909.0,
    "Mean": -0.5357
  },
  {
    "Source": "GISTEMP",
    "Year": 1910.0,
    "Mean": -0.4408
  },
  {
    "Source": "gcag",
    "Year": 1910.0,
    "Mean": -0.5309
  },
  {
    "Source": "GISTEMP",
    "Year": 1911.0,
    "Mean": -0.45
  },
  {
    "Source": "gcag",
    "Year": 1911.0,
    "Mean": -0.5391
  },
  {
    "Source": "GISTEMP",
    "Year": 1912.0,
    "Mean": -0.3675
  },
  {
    "Source": "gcag",
    "Year": 1912.0,
    "Mean": -0.4755
  },
  {
    "Source": "GISTEMP",
    "Year": 1913.0,
    "Mean": -0.3492
  },
  {
    "Source": "gcag",
    "Year": 1913.0,
    "Mean": -0.467
  },
  {
    "Source": "GISTEMP",
    "Year": 1914.0,
    "Mean": -0.1567
  },
  {
    "Source": "gcag",
    "Year": 1914.0,
    "Mean": -0.2624
  },
  {
    "Source": "GISTEMP",
    "Year": 1915.0,
    "Mean": -0.1433
  },
  {
    "Source": "gcag",
    "Year": 1915.0,
    "Mean": -0.1917
  },
  {
    "Source": "GISTEMP",
    "Year": 1916.0,
    "Mean": -0.3617
  },
  {
    "Source": "gcag",
    "Year": 1916.0,
    "Mean": -0.42
  },
  {
    "Source": "GISTEMP",
    "Year": 1917.0,
    "Mean": -0.4617
  },
  {
    "Source": "gcag",
    "Year": 1917.0,
    "Mean": -0.5428
  },
  {
    "Source": "GISTEMP",
    "Year": 1918.0,
    "Mean": -0.2992
  },
  {
    "Source": "gcag",
    "Year": 1918.0,
    "Mean": -0.4244
  },
  {
    "Source": "GISTEMP",
    "Year": 1919.0,
    "Mean": -0.2783
  },
  {
    "Source": "gcag",
    "Year": 1919.0,
    "Mean": -0.3253
  },
  {
    "Source": "GISTEMP",
    "Year": 1920.0,
    "Mean": -0.275
  },
  {
    "Source": "gcag",
    "Year": 1920.0,
    "Mean": -0.2984
  },
  {
    "Source": "GISTEMP",
    "Year": 1921.0,
    "Mean": -0.1908
  },
  {
    "Source": "gcag",
    "Year": 1921.0,
    "Mean": -0.2404
  },
  {
    "Source": "GISTEMP",
    "Year": 1922.0,
    "Mean": -0.2842
  },
  {
    "Source": "gcag",
    "Year": 1922.0,
    "Mean": -0.339
  },
  {
    "Source": "GISTEMP",
    "Year": 1923.0,
    "Mean": -0.2658
  },
  {
    "Source": "gcag",
    "Year": 1923.0,
    "Mean": -0.3177
  },
  {
    "Source": "GISTEMP",
    "Year": 1924.0,
    "Mean": -0.2708
  },
  {
    "Source": "gcag",
    "Year": 1924.0,
    "Mean": -0.3118
  },
  {
    "Source": "GISTEMP",
    "Year": 1925.0,
    "Mean": -0.2225
  },
  {
    "Source": "gcag",
    "Year": 1925.0,
    "Mean": -0.2821
  },
  {
    "Source": "GISTEMP",
    "Year": 1926.0,
    "Mean": -0.1067
  },
  {
    "Source": "gcag",
    "Year": 1926.0,
    "Mean": -0.1226
  },
  {
    "Source": "GISTEMP",
    "Year": 1927.0,
    "Mean": -0.2175
  },
  {
    "Source": "gcag",
    "Year": 1927.0,
    "Mean": -0.2291
  },
  {
    "Source": "GISTEMP",
    "Year": 1928.0,
    "Mean": -0.2
  },
  {
    "Source": "gcag",
    "Year": 1928.0,
    "Mean": -0.2065
  },
  {
    "Source": "GISTEMP",
    "Year": 1929.0,
    "Mean": -0.3583
  },
  {
    "Source": "gcag",
    "Year": 1929.0,
    "Mean": -0.3924
  },
  {
    "Source": "GISTEMP",
    "Year": 1930.0,
    "Mean": -0.1575
  },
  {
    "Source": "gcag",
    "Year": 1930.0,
    "Mean": -0.1768
  },
  {
    "Source": "GISTEMP",
    "Year": 1931.0,
    "Mean": -0.0883
  },
  {
    "Source": "gcag",
    "Year": 1931.0,
    "Mean": -0.1034
  },
  {
    "Source": "GISTEMP",
    "Year": 1932.0,
    "Mean": -0.155
  },
  {
    "Source": "gcag",
    "Year": 1932.0,
    "Mean": -0.1455
  },
  {
    "Source": "GISTEMP",
    "Year": 1933.0,
    "Mean": -0.2817
  },
  {
    "Source": "gcag",
    "Year": 1933.0,
    "Mean": -0.3223
  },
  {
    "Source": "GISTEMP",
    "Year": 1934.0,
    "Mean": -0.1217
  },
  {
    "Source": "gcag",
    "Year": 1934.0,
    "Mean": -0.1743
  },
  {
    "Source": "GISTEMP",
    "Year": 1935.0,
    "Mean": -0.1967
  },
  {
    "Source": "gcag",
    "Year": 1935.0,
    "Mean": -0.2061
  },
  {
    "Source": "GISTEMP",
    "Year": 1936.0,
    "Mean": -0.1442
  },
  {
    "Source": "gcag",
    "Year": 1936.0,
    "Mean": -0.1695
  },
  {
    "Source": "GISTEMP",
    "Year": 1937.0,
    "Mean": -0.0275
  },
  {
    "Source": "gcag",
    "Year": 1937.0,
    "Mean": -0.0192
  },
  {
    "Source": "GISTEMP",
    "Year": 1938.0,
    "Mean": 0.0008
  },
  {
    "Source": "gcag",
    "Year": 1938.0,
    "Mean": -0.0122
  },
  {
    "Source": "GISTEMP",
    "Year": 1939.0,
    "Mean": -0.0167
  },
  {
    "Source": "gcag",
    "Year": 1939.0,
    "Mean": -0.0408
  },
  {
    "Source": "GISTEMP",
    "Year": 1940.0,
    "Mean": 0.125
  },
  {
    "Source": "gcag",
    "Year": 1940.0,
    "Mean": 0.0759
  },
  {
    "Source": "GISTEMP",
    "Year": 1941.0,
    "Mean": 0.1867
  },
  {
    "Source": "gcag",
    "Year": 1941.0,
    "Mean": 0.0381
  },
  {
    "Source": "GISTEMP",
    "Year": 1942.0,
    "Mean": 0.0675
  },
  {
    "Source": "gcag",
    "Year": 1942.0,
    "Mean": 0.0014
  },
  {
    "Source": "GISTEMP",
    "Year": 1943.0,
    "Mean": 0.0892
  },
  {
    "Source": "gcag",
    "Year": 1943.0,
    "Mean": 0.0064
  },
  {
    "Source": "GISTEMP",
    "Year": 1944.0,
    "Mean": 0.2033
  },
  {
    "Source": "gcag",
    "Year": 1944.0,
    "Mean": 0.1441
  },
  {
    "Source": "GISTEMP",
    "Year": 1945.0,
    "Mean": 0.0925
  },
  {
    "Source": "gcag",
    "Year": 1945.0,
    "Mean": 0.0431
  },
  {
    "Source": "GISTEMP",
    "Year": 1946.0,
    "Mean": -0.0733
  },
  {
    "Source": "gcag",
    "Year": 1946.0,
    "Mean": -0.1188
  },
  {
    "Source": "GISTEMP",
    "Year": 1947.0,
    "Mean": -0.0275
  },
  {
    "Source": "gcag",
    "Year": 1947.0,
    "Mean": -0.0912
  },
  {
    "Source": "GISTEMP",
    "Year": 1948.0,
    "Mean": -0.1067
  },
  {
    "Source": "gcag",
    "Year": 1948.0,
    "Mean": -0.1247
  },
  {
    "Source": "GISTEMP",
    "Year": 1949.0,
    "Mean": -0.1092
  },
  {
    "Source": "gcag",
    "Year": 1949.0,
    "Mean": -0.1438
  },
  {
    "Source": "GISTEMP",
    "Year": 1950.0,
    "Mean": -0.1742
  },
  {
    "Source": "gcag",
    "Year": 1950.0,
    "Mean": -0.2266
  },
  {
    "Source": "GISTEMP",
    "Year": 1951.0,
    "Mean": -0.0683
  },
  {
    "Source": "gcag",
    "Year": 1951.0,
    "Mean": -0.0612
  },
  {
    "Source": "GISTEMP",
    "Year": 1952.0,
    "Mean": 0.01
  },
  {
    "Source": "gcag",
    "Year": 1952.0,
    "Mean": 0.0154
  },
  {
    "Source": "GISTEMP",
    "Year": 1953.0,
    "Mean": 0.0792
  },
  {
    "Source": "gcag",
    "Year": 1953.0,
    "Mean": 0.0776
  },
  {
    "Source": "GISTEMP",
    "Year": 1954.0,
    "Mean": -0.1333
  },
  {
    "Source": "gcag",
    "Year": 1954.0,
    "Mean": -0.1168
  },
  {
    "Source": "GISTEMP",
    "Year": 1955.0,
    "Mean": -0.1408
  },
  {
    "Source": "gcag",
    "Year": 1955.0,
    "Mean": -0.1973
  },
  {
    "Source": "GISTEMP",
    "Year": 1956.0,
    "Mean": -0.1892
  },
  {
    "Source": "gcag",
    "Year": 1956.0,
    "Mean": -0.2632
  },
  {
    "Source": "GISTEMP",
    "Year": 1957.0,
    "Mean": 0.0483
  },
  {
    "Source": "gcag",
    "Year": 1957.0,
    "Mean": -0.0353
  },
  {
    "Source": "GISTEMP",
    "Year": 1958.0,
    "Mean": 0.0617
  },
  {
    "Source": "gcag",
    "Year": 1958.0,
    "Mean": -0.0176
  },
  {
    "Source": "GISTEMP",
    "Year": 1959.0,
    "Mean": 0.0308
  },
  {
    "Source": "gcag",
    "Year": 1959.0,
    "Mean": -0.048
  },
  {
    "Source": "GISTEMP",
    "Year": 1960.0,
    "Mean": -0.025
  },
  {
    "Source": "gcag",
    "Year": 1960.0,
    "Mean": -0.1155
  },
  {
    "Source": "GISTEMP",
    "Year": 1961.0,
    "Mean": 0.0575
  },
  {
    "Source": "gcag",
    "Year": 1961.0,
    "Mean": -0.02
  },
  {
    "Source": "GISTEMP",
    "Year": 1962.0,
    "Mean": 0.0308
  },
  {
    "Source": "gcag",
    "Year": 1962.0,
    "Mean": -0.064
  },
  {
    "Source": "GISTEMP",
    "Year": 1963.0,
    "Mean": 0.0542
  },
  {
    "Source": "gcag",
    "Year": 1963.0,
    "Mean": -0.0368
  },
  {
    "Source": "GISTEMP",
    "Year": 1964.0,
    "Mean": -0.1992
  },
  {
    "Source": "gcag",
    "Year": 1964.0,
    "Mean": -0.3059
  },
  {
    "Source": "GISTEMP",
    "Year": 1965.0,
    "Mean": -0.1067
  },
  {
    "Source": "gcag",
    "Year": 1965.0,
    "Mean": -0.2044
  },
  {
    "Source": "GISTEMP",
    "Year": 1966.0,
    "Mean": -0.0575
  },
  {
    "Source": "gcag",
    "Year": 1966.0,
    "Mean": -0.1489
  },
  {
    "Source": "GISTEMP",
    "Year": 1967.0,
    "Mean": -0.0242
  },
  {
    "Source": "gcag",
    "Year": 1967.0,
    "Mean": -0.1175
  },
  {
    "Source": "GISTEMP",
    "Year": 1968.0,
    "Mean": -0.0842
  },
  {
    "Source": "gcag",
    "Year": 1968.0,
    "Mean": -0.1686
  },
  {
    "Source": "GISTEMP",
    "Year": 1969.0,
    "Mean": 0.0517
  },
  {
    "Source": "gcag",
    "Year": 1969.0,
    "Mean": -0.0314
  },
  {
    "Source": "GISTEMP",
    "Year": 1970.0,
    "Mean": 0.0258
  },
  {
    "Source": "gcag",
    "Year": 1970.0,
    "Mean": -0.0851
  },
  {
    "Source": "GISTEMP",
    "Year": 1971.0,
    "Mean": -0.0808
  },
  {
    "Source": "gcag",
    "Year": 1971.0,
    "Mean": -0.2059
  },
  {
    "Source": "GISTEMP",
    "Year": 1972.0,
    "Mean": 0.0083
  },
  {
    "Source": "gcag",
    "Year": 1972.0,
    "Mean": -0.0938
  },
  {
    "Source": "GISTEMP",
    "Year": 1973.0,
    "Mean": 0.16
  },
  {
    "Source": "gcag",
    "Year": 1973.0,
    "Mean": 0.05
  },
  {
    "Source": "GISTEMP",
    "Year": 1974.0,
    "Mean": -0.0708
  },
  {
    "Source": "gcag",
    "Year": 1974.0,
    "Mean": -0.1725
  },
  {
    "Source": "GISTEMP",
    "Year": 1975.0,
    "Mean": -0.0133
  },
  {
    "Source": "gcag",
    "Year": 1975.0,
    "Mean": -0.1108
  },
  {
    "Source": "GISTEMP",
    "Year": 1976.0,
    "Mean": -0.0992
  },
  {
    "Source": "gcag",
    "Year": 1976.0,
    "Mean": -0.2158
  },
  {
    "Source": "GISTEMP",
    "Year": 1977.0,
    "Mean": 0.1775
  },
  {
    "Source": "gcag",
    "Year": 1977.0,
    "Mean": 0.1031
  },
  {
    "Source": "GISTEMP",
    "Year": 1978.0,
    "Mean": 0.0683
  },
  {
    "Source": "gcag",
    "Year": 1978.0,
    "Mean": 0.0053
  },
  {
    "Source": "GISTEMP",
    "Year": 1979.0,
    "Mean": 0.1658
  },
  {
    "Source": "gcag",
    "Year": 1979.0,
    "Mean": 0.0909
  },
  {
    "Source": "GISTEMP",
    "Year": 1980.0,
    "Mean": 0.2558
  },
  {
    "Source": "gcag",
    "Year": 1980.0,
    "Mean": 0.1961
  },
  {
    "Source": "GISTEMP",
    "Year": 1981.0,
    "Mean": 0.3225
  },
  {
    "Source": "gcag",
    "Year": 1981.0,
    "Mean": 0.25
  },
  {
    "Source": "GISTEMP",
    "Year": 1982.0,
    "Mean": 0.1367
  },
  {
    "Source": "gcag",
    "Year": 1982.0,
    "Mean": 0.0343
  },
  {
    "Source": "GISTEMP",
    "Year": 1983.0,
    "Mean": 0.3117
  },
  {
    "Source": "gcag",
    "Year": 1983.0,
    "Mean": 0.2238
  },
  {
    "Source": "GISTEMP",
    "Year": 1984.0,
    "Mean": 0.155
  },
  {
    "Source": "gcag",
    "Year": 1984.0,
    "Mean": 0.048
  },
  {
    "Source": "GISTEMP",
    "Year": 1985.0,
    "Mean": 0.1158
  },
  {
    "Source": "gcag",
    "Year": 1985.0,
    "Mean": 0.0497
  },
  {
    "Source": "GISTEMP",
    "Year": 1986.0,
    "Mean": 0.18
  },
  {
    "Source": "gcag",
    "Year": 1986.0,
    "Mean": 0.0957
  },
  {
    "Source": "GISTEMP",
    "Year": 1987.0,
    "Mean": 0.3192
  },
  {
    "Source": "gcag",
    "Year": 1987.0,
    "Mean": 0.243
  },
  {
    "Source": "GISTEMP",
    "Year": 1988.0,
    "Mean": 0.3858
  },
  {
    "Source": "gcag",
    "Year": 1988.0,
    "Mean": 0.2822
  },
  {
    "Source": "GISTEMP",
    "Year": 1989.0,
    "Mean": 0.2717
  },
  {
    "Source": "gcag",
    "Year": 1989.0,
    "Mean": 0.1793
  },
  {
    "Source": "GISTEMP",
    "Year": 1990.0,
    "Mean": 0.445
  },
  {
    "Source": "gcag",
    "Year": 1990.0,
    "Mean": 0.3606
  },
  {
    "Source": "GISTEMP",
    "Year": 1991.0,
    "Mean": 0.4033
  },
  {
    "Source": "gcag",
    "Year": 1991.0,
    "Mean": 0.3389
  },
  {
    "Source": "GISTEMP",
    "Year": 1992.0,
    "Mean": 0.22
  },
  {
    "Source": "gcag",
    "Year": 1992.0,
    "Mean": 0.1249
  },
  {
    "Source": "GISTEMP",
    "Year": 1993.0,
    "Mean": 0.23
  },
  {
    "Source": "gcag",
    "Year": 1993.0,
    "Mean": 0.1657
  },
  {
    "Source": "GISTEMP",
    "Year": 1994.0,
    "Mean": 0.3133
  },
  {
    "Source": "gcag",
    "Year": 1994.0,
    "Mean": 0.2335
  },
  {
    "Source": "GISTEMP",
    "Year": 1995.0,
    "Mean": 0.4442
  },
  {
    "Source": "gcag",
    "Year": 1995.0,
    "Mean": 0.3769
  },
  {
    "Source": "GISTEMP",
    "Year": 1996.0,
    "Mean": 0.3283
  },
  {
    "Source": "gcag",
    "Year": 1996.0,
    "Mean": 0.2767
  },
  {
    "Source": "GISTEMP",
    "Year": 1997.0,
    "Mean": 0.4633
  },
  {
    "Source": "gcag",
    "Year": 1997.0,
    "Mean": 0.4223
  },
  {
    "Source": "GISTEMP",
    "Year": 1998.0,
    "Mean": 0.605
  },
  {
    "Source": "gcag",
    "Year": 1998.0,
    "Mean": 0.5773
  },
  {
    "Source": "GISTEMP",
    "Year": 1999.0,
    "Mean": 0.38
  },
  {
    "Source": "gcag",
    "Year": 1999.0,
    "Mean": 0.3245
  },
  {
    "Source": "GISTEMP",
    "Year": 2000.0,
    "Mean": 0.3917
  },
  {
    "Source": "gcag",
    "Year": 2000.0,
    "Mean": 0.3311
  },
  {
    "Source": "GISTEMP",
    "Year": 2001.0,
    "Mean": 0.5325
  },
  {
    "Source": "gcag",
    "Year": 2001.0,
    "Mean": 0.4893
  },
  {
    "Source": "GISTEMP",
    "Year": 2002.0,
    "Mean": 0.6267
  },
  {
    "Source": "gcag",
    "Year": 2002.0,
    "Mean": 0.5435
  },
  {
    "Source": "GISTEMP",
    "Year": 2003.0,
    "Mean": 0.6167
  },
  {
    "Source": "gcag",
    "Year": 2003.0,
    "Mean": 0.5442
  },
  {
    "Source": "GISTEMP",
    "Year": 2004.0,
    "Mean": 0.5325
  },
  {
    "Source": "gcag",
    "Year": 2004.0,
    "Mean": 0.4674
  },
  {
    "Source": "GISTEMP",
    "Year": 2005.0,
    "Mean": 0.675
  },
  {
    "Source": "gcag",
    "Year": 2005.0,
    "Mean": 0.6069
  },
  {
    "Source": "GISTEMP",
    "Year": 2006.0,
    "Mean": 0.6375
  },
  {
    "Source": "gcag",
    "Year": 2006.0,
    "Mean": 0.5726
  },
  {
    "Source": "GISTEMP",
    "Year": 2007.0,
    "Mean": 0.6608
  },
  {
    "Source": "gcag",
    "Year": 2007.0,
    "Mean": 0.5917
  },
  {
    "Source": "GISTEMP",
    "Year": 2008.0,
    "Mean": 0.5433
  },
  {
    "Source": "gcag",
    "Year": 2008.0,
    "Mean": 0.4656
  },
  {
    "Source": "GISTEMP",
    "Year": 2009.0,
    "Mean": 0.655
  },
  {
    "Source": "gcag",
    "Year": 2009.0,
    "Mean": 0.5968
  },
  {
    "Source": "GISTEMP",
    "Year": 2010.0,
    "Mean": 0.7233
  },
  {
    "Source": "gcag",
    "Year": 2010.0,
    "Mean": 0.6804
  },
  {
    "Source": "GISTEMP",
    "Year": 2011.0,
    "Mean": 0.6058
  },
  {
    "Source": "gcag",
    "Year": 2011.0,
    "Mean": 0.5377
  },
  {
    "Source": "GISTEMP",
    "Year": 2012.0,
    "Mean": 0.6433
  },
  {
    "Source": "gcag",
    "Year": 2012.0,
    "Mean": 0.5776
  },
  {
    "Source": "GISTEMP",
    "Year": 2013.0,
    "Mean": 0.6733
  },
  {
    "Source": "gcag",
    "Year": 2013.0,
    "Mean": 0.6236
  },
  {
    "Source": "GISTEMP",
    "Year": 2014.0,
    "Mean": 0.7458
  },
  {
    "Source": "gcag",
    "Year": 2014.0,
    "Mean": 0.6729
  },
  {
    "Source": "GISTEMP",
    "Year": 2015.0,
    "Mean": 0.8975
  },
  {
    "Source": "gcag",
    "Year": 2015.0,
    "Mean": 0.8251
  },
  {
    "Source": "GISTEMP",
    "Year": 2016.0,
    "Mean": 1.0133
  },
  {
    "Source": "gcag",
    "Year": 2016.0,
    "Mean": 0.9329
  },
  {
    "Source": "GISTEMP",
    "Year": 2017.0,
    "Mean": 0.92
  },
  {
    "Source": "gcag",
    "Year": 2017.0,
    "Mean": 0.8452
  },
  {
    "Source": "GISTEMP",
    "Year": 2018.0,
    "Mean": 0.8475
  },
  {
    "Source": "gcag",
    "Year": 2018.0,
    "Mean": 0.7627
  },
  {
    "Source": "GISTEMP",
    "Year": 2019.0,
    "Mean": 0.9758
  },
  {
    "Source": "gcag",
    "Year": 2019.0,
    "Mean": 0.8911
  },
  {
    "Source": "GISTEMP",
    "Year": 2020.0,
    "Mean": 1.0092
  },
  {
    "Source": "gcag",
    "Year": 2020.0,
    "Mean": 0.9229
  },
  {
    "Source": "GISTEMP",
    "Year": 2021.0,
    "Mean": 0.8483
  },
  {
    "Source": "gcag",
    "Year": 2021.0,
    "Mean": 0.7619
  },
  {
    "Source": "GISTEMP",
    "Year": 2022.0,
    "Mean": 0.8933
  },
  {
    "Source": "gcag",
    "Year": 2022.0,
    "Mean": 0.8013
  },
  {
    "Source": "GISTEMP",
    "Year": 2023.0,
    "Mean": 1.1692
  },
  {
    "Source": "gcag",
    "Year": 2023.0,
    "Mean": 1.1003
  },
  {
    "Source": "gcag",
    "Year": 2024.0,
    "Mean": 1.1755
  }
];

const NodeGlobalTemperatureAnomaliesAnnual = createNodeComponent({
  label: "Global temperature anomalies (annual)",
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

export default NodeGlobalTemperatureAnomaliesAnnual;
