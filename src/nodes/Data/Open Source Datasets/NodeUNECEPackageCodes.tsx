import { createNodeComponent } from "../../createNodeComponent";
import * as dfd from "danfojs";

// Auto-generated from: ../src/nodes/Data/OpenDatasets/reference/unece/unece_package_codes.csv
// Generated on: Fri Jan 23 12:00:36 CET 2026

const dataset = [
  {
    "Status": null,
    "Code": "1A",
    "Name": "Drum, steel",
    "Description": null,
    "Numeric code": "34"
  },
  {
    "Status": null,
    "Code": "1B",
    "Name": "Drum, aluminium",
    "Description": null,
    "Numeric code": "34"
  },
  {
    "Status": null,
    "Code": "1D",
    "Name": "Drum, plywood",
    "Description": null,
    "Numeric code": "34"
  },
  {
    "Status": null,
    "Code": "1F",
    "Name": "Container, flexible",
    "Description": "A packaging container of flexible construction.",
    "Numeric code": "93"
  },
  {
    "Status": null,
    "Code": "1G",
    "Name": "Drum, fibre",
    "Description": null,
    "Numeric code": "34"
  },
  {
    "Status": null,
    "Code": "1W",
    "Name": "Drum, wooden",
    "Description": null,
    "Numeric code": "34 or 35"
  },
  {
    "Status": null,
    "Code": "2C",
    "Name": "Barrel, wooden",
    "Description": null,
    "Numeric code": "44 or 45"
  },
  {
    "Status": null,
    "Code": "3A",
    "Name": "Jerrican, steel",
    "Description": null,
    "Numeric code": "23 or 33"
  },
  {
    "Status": null,
    "Code": "3H",
    "Name": "Jerrican, plastic",
    "Description": null,
    "Numeric code": "23 or 33"
  },
  {
    "Status": null,
    "Code": "43",
    "Name": "Bag, super bulk",
    "Description": "A cloth plastic or paper based bag having the dimensions of the pallet on which it is constructed.",
    "Numeric code": "64"
  },
  {
    "Status": null,
    "Code": "44",
    "Name": "Bag, polybag",
    "Description": "A type of plastic bag, typically used to wrap promotional pieces, publications, product samples, and/or catalogues. ",
    "Numeric code": "62 or 63"
  },
  {
    "Status": null,
    "Code": "4A",
    "Name": "Box, steel",
    "Description": null,
    "Numeric code": "21 to 25"
  },
  {
    "Status": null,
    "Code": "4B",
    "Name": "Box, aluminium",
    "Description": null,
    "Numeric code": "21 to 25"
  },
  {
    "Status": null,
    "Code": "4C",
    "Name": "Box, natural wood",
    "Description": null,
    "Numeric code": "21 to 25"
  },
  {
    "Status": null,
    "Code": "4D",
    "Name": "Box, plywood",
    "Description": null,
    "Numeric code": "21 to 25"
  },
  {
    "Status": null,
    "Code": "4F",
    "Name": "Box, reconstituted wood",
    "Description": null,
    "Numeric code": "21 to 25"
  },
  {
    "Status": null,
    "Code": "4G",
    "Name": "Box, fibreboard",
    "Description": null,
    "Numeric code": "21 to 25"
  },
  {
    "Status": null,
    "Code": "4H",
    "Name": "Box, plastic",
    "Description": null,
    "Numeric code": "21 to 25"
  },
  {
    "Status": null,
    "Code": "5H",
    "Name": "Bag, woven plastic",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "5L",
    "Name": "Bag, textile ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "5M",
    "Name": "Bag, paper ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "6H",
    "Name": "Composite packaging, plastic receptacle",
    "Description": null,
    "Numeric code": "24 or 25 or 33 or 34"
  },
  {
    "Status": null,
    "Code": "6P",
    "Name": "Composite packaging, glass receptacle",
    "Description": null,
    "Numeric code": "23 or 24 or 25 or 33 or 34 or 62 or 63"
  },
  {
    "Status": null,
    "Code": "7A",
    "Name": "Case, car",
    "Description": "A type of portable container designed to store equipment for carriage in an automobile.",
    "Numeric code": "22 or 23"
  },
  {
    "Status": null,
    "Code": "7B",
    "Name": "Case, wooden",
    "Description": "A case made of wood for retaining substances or articles.",
    "Numeric code": "24 or 25"
  },
  {
    "Status": null,
    "Code": "8A",
    "Name": "Pallet, wooden",
    "Description": "A platform or open-ended box, made of wood, on which goods are retained for ease of mechanical handling during transport and storage.",
    "Numeric code": "24 or 25"
  },
  {
    "Status": null,
    "Code": "8B",
    "Name": "Crate, wooden",
    "Description": "A receptacle, made of wood, on which goods are retained for ease of mechanical handling during transport and storage.",
    "Numeric code": "23 to 27"
  },
  {
    "Status": null,
    "Code": "8C",
    "Name": "Bundle, wooden",
    "Description": "Loose or unpacked pieces of wood tied or wrapped together. ",
    "Numeric code": "16"
  },
  {
    "Status": null,
    "Code": "AA",
    "Name": "Intermediate bulk container, rigid plastic",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "AB",
    "Name": "Receptacle, fibre ",
    "Description": "Containment vessel made of fibre used for retaining substances or articles.",
    "Numeric code": "21 to 23 or 31 to 33 or 41 to 43"
  },
  {
    "Status": null,
    "Code": "AC",
    "Name": "Receptacle, paper ",
    "Description": "Containment vessel made of paper for retaining substances or articles.",
    "Numeric code": "21 to 23 or 31 to 33 or 41 to 43"
  },
  {
    "Status": null,
    "Code": "AD",
    "Name": "Receptacle, wooden ",
    "Description": "Containment vessel made of wood for retaining substances or articles.",
    "Numeric code": "21 to 23 or 31 to 33 or 41 to 43"
  },
  {
    "Status": null,
    "Code": "AE",
    "Name": "Aerosol",
    "Description": null,
    "Numeric code": "42 or 43"
  },
  {
    "Status": null,
    "Code": "AF",
    "Name": "Pallet, modular, collars 80cms * 60cms ",
    "Description": "Standard sized pallet of dimensions 80 centimeters by 60 centimeters (cms).",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "AG",
    "Name": "Pallet, shrinkwrapped ",
    "Description": "Pallet load secured with transparent plastic film that has been wrapped around and then shrunk tightly.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "AH",
    "Name": "Pallet, 100cms * 110cms ",
    "Description": "Standard sized pallet of dimensions 100centimeters by 110 centimeters (cms).",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "AI",
    "Name": "Clamshell",
    "Description": null,
    "Numeric code": "21 to 23"
  },
  {
    "Status": null,
    "Code": "AJ",
    "Name": "Cone",
    "Description": "Container used in the transport of linear material such as yarn.",
    "Numeric code": "51"
  },
  {
    "Status": null,
    "Code": "AL",
    "Name": "Ball",
    "Description": "A spherical containment vessel for retaining substances or articles.",
    "Numeric code": "46"
  },
  {
    "Status": null,
    "Code": "AM",
    "Name": "Ampoule, non-protected ",
    "Description": null,
    "Numeric code": "31"
  },
  {
    "Status": null,
    "Code": "AP",
    "Name": "Ampoule, protected ",
    "Description": null,
    "Numeric code": "31"
  },
  {
    "Status": null,
    "Code": "AT",
    "Name": "Atomizer ",
    "Description": null,
    "Numeric code": "42 or 43"
  },
  {
    "Status": null,
    "Code": "AV",
    "Name": "Capsule",
    "Description": null,
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "B4",
    "Name": "Belt",
    "Description": "A band use to retain multiple articles together.",
    "Numeric code": "93"
  },
  {
    "Status": null,
    "Code": "BA",
    "Name": "Barrel ",
    "Description": null,
    "Numeric code": "44 or 45"
  },
  {
    "Status": null,
    "Code": "BB",
    "Name": "Bobbin ",
    "Description": null,
    "Numeric code": "91"
  },
  {
    "Status": null,
    "Code": "BC",
    "Name": "Bottlecrate / bottlerack ",
    "Description": null,
    "Numeric code": "29"
  },
  {
    "Status": null,
    "Code": "BD",
    "Name": "Board",
    "Description": null,
    "Numeric code": "16"
  },
  {
    "Status": null,
    "Code": "BE",
    "Name": "Bundle ",
    "Description": null,
    "Numeric code": "61 to 65"
  },
  {
    "Status": null,
    "Code": "BF",
    "Name": "Balloon, non-protected ",
    "Description": null,
    "Numeric code": "42 or 43"
  },
  {
    "Status": null,
    "Code": "BG",
    "Name": "Bag",
    "Description": "A receptacle made of flexible material with an open or closed top.",
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "BH",
    "Name": "Bunch",
    "Description": null,
    "Numeric code": "61 to 65"
  },
  {
    "Status": null,
    "Code": "BI",
    "Name": "Bin",
    "Description": null,
    "Numeric code": "21 or 25"
  },
  {
    "Status": null,
    "Code": "BJ",
    "Name": "Bucket ",
    "Description": null,
    "Numeric code": "51"
  },
  {
    "Status": null,
    "Code": "BK",
    "Name": "Basket ",
    "Description": null,
    "Numeric code": "27"
  },
  {
    "Status": null,
    "Code": "BL",
    "Name": "Bale, compressed ",
    "Description": null,
    "Numeric code": "65"
  },
  {
    "Status": null,
    "Code": "BM",
    "Name": "Basin",
    "Description": null,
    "Numeric code": "51"
  },
  {
    "Status": null,
    "Code": "BN",
    "Name": "Bale, non-compressed ",
    "Description": null,
    "Numeric code": "65"
  },
  {
    "Status": null,
    "Code": "BO",
    "Name": "Bottle, non-protected, cylindrical ",
    "Description": "A narrow-necked cylindrical shaped vessel without external protective packing material.",
    "Numeric code": "32 or 33"
  },
  {
    "Status": null,
    "Code": "BP",
    "Name": "Balloon, protected ",
    "Description": null,
    "Numeric code": "42 or 43"
  },
  {
    "Status": null,
    "Code": "BQ",
    "Name": "Bottle, protected cylindrical",
    "Description": "A narrow-necked cylindrical shaped vessel with external protective packing material.",
    "Numeric code": "32 or 33"
  },
  {
    "Status": null,
    "Code": "BR",
    "Name": "Bar",
    "Description": null,
    "Numeric code": "16"
  },
  {
    "Status": null,
    "Code": "BS",
    "Name": "Bottle, non-protected, bulbous ",
    "Description": "A narrow-necked bulb shaped vessel without external protective packing material.",
    "Numeric code": "42 or 43"
  },
  {
    "Status": null,
    "Code": "BT",
    "Name": "Bolt ",
    "Description": null,
    "Numeric code": "13"
  },
  {
    "Status": null,
    "Code": "BU",
    "Name": "Butt ",
    "Description": null,
    "Numeric code": "44 or 45"
  },
  {
    "Status": null,
    "Code": "BV",
    "Name": "Bottle, protected bulbous",
    "Description": "A narrow-necked bulb shaped vessel with external protective packing material.",
    "Numeric code": "42 or 43"
  },
  {
    "Status": null,
    "Code": "BW",
    "Name": "Box, for liquids",
    "Description": null,
    "Numeric code": "21 to 25"
  },
  {
    "Status": null,
    "Code": "BX",
    "Name": "Box",
    "Description": null,
    "Numeric code": "21 to 25"
  },
  {
    "Status": null,
    "Code": "BY",
    "Name": "Board, in bundle/bunch/truss ",
    "Description": null,
    "Numeric code": "16"
  },
  {
    "Status": null,
    "Code": "BZ",
    "Name": "Bars, in bundle/bunch/truss",
    "Description": null,
    "Numeric code": "16"
  },
  {
    "Status": null,
    "Code": "CA",
    "Name": "Can, rectangular ",
    "Description": null,
    "Numeric code": "22"
  },
  {
    "Status": null,
    "Code": "CB",
    "Name": "Crate, beer",
    "Description": null,
    "Numeric code": "23 to 27"
  },
  {
    "Status": null,
    "Code": "CC",
    "Name": "Churn",
    "Description": null,
    "Numeric code": "32 or 33"
  },
  {
    "Status": null,
    "Code": "CD",
    "Name": "Can, with handle and spout ",
    "Description": null,
    "Numeric code": "22"
  },
  {
    "Status": null,
    "Code": "CE",
    "Name": "Creel",
    "Description": null,
    "Numeric code": "27"
  },
  {
    "Status": null,
    "Code": "CF",
    "Name": "Coffer ",
    "Description": null,
    "Numeric code": "24"
  },
  {
    "Status": null,
    "Code": "CG",
    "Name": "Cage ",
    "Description": null,
    "Numeric code": "26"
  },
  {
    "Status": null,
    "Code": "CH",
    "Name": "Chest",
    "Description": null,
    "Numeric code": "25"
  },
  {
    "Status": null,
    "Code": "CI",
    "Name": "Canister ",
    "Description": null,
    "Numeric code": "21 or 22"
  },
  {
    "Status": null,
    "Code": "CJ",
    "Name": "Coffin ",
    "Description": null,
    "Numeric code": "54"
  },
  {
    "Status": null,
    "Code": "CK",
    "Name": "Cask ",
    "Description": null,
    "Numeric code": "44 or 45"
  },
  {
    "Status": null,
    "Code": "CL",
    "Name": "Coil ",
    "Description": null,
    "Numeric code": "14"
  },
  {
    "Status": null,
    "Code": "CM",
    "Name": "Card",
    "Description": "A flat package usually made of fibreboard from/to which product is often hung or attached.",
    "Numeric code": "67"
  },
  {
    "Status": null,
    "Code": "CN",
    "Name": "Container, not otherwise specified as transport equipment",
    "Description": null,
    "Numeric code": "25"
  },
  {
    "Status": null,
    "Code": "CO",
    "Name": "Carboy, non-protected",
    "Description": null,
    "Numeric code": "43"
  },
  {
    "Status": null,
    "Code": "CP",
    "Name": "Carboy, protected",
    "Description": null,
    "Numeric code": "43"
  },
  {
    "Status": null,
    "Code": "CQ",
    "Name": "Cartridge",
    "Description": "Package containing a charge such as propelling explosive for firearms or ink toner for a printer.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "CR",
    "Name": "Crate",
    "Description": null,
    "Numeric code": "24 to 25"
  },
  {
    "Status": null,
    "Code": "CS",
    "Name": "Case ",
    "Description": null,
    "Numeric code": "21 to 25"
  },
  {
    "Status": null,
    "Code": "CT",
    "Name": "Carton ",
    "Description": null,
    "Numeric code": "22 to 24"
  },
  {
    "Status": null,
    "Code": "CU",
    "Name": "Cup",
    "Description": null,
    "Numeric code": "51"
  },
  {
    "Status": null,
    "Code": "CV",
    "Name": "Cover",
    "Description": null,
    "Numeric code": "67"
  },
  {
    "Status": null,
    "Code": "CW",
    "Name": "Cage, roll ",
    "Description": null,
    "Numeric code": "26"
  },
  {
    "Status": null,
    "Code": "CX",
    "Name": "Can, cylindrical ",
    "Description": null,
    "Numeric code": "32"
  },
  {
    "Status": null,
    "Code": "CY",
    "Name": "Cylinder ",
    "Description": null,
    "Numeric code": "12"
  },
  {
    "Status": null,
    "Code": "CZ",
    "Name": "Canvas ",
    "Description": null,
    "Numeric code": "67"
  },
  {
    "Status": null,
    "Code": "DA",
    "Name": "Crate, multiple layer, plastic ",
    "Description": null,
    "Numeric code": "23 to 25 or 27"
  },
  {
    "Status": null,
    "Code": "DB",
    "Name": "Crate, multiple layer, wooden",
    "Description": null,
    "Numeric code": "23 to 25 or 27"
  },
  {
    "Status": null,
    "Code": "DC",
    "Name": "Crate, multiple layer, cardboard ",
    "Description": null,
    "Numeric code": "23 to 25 or 27"
  },
  {
    "Status": null,
    "Code": "DG",
    "Name": "Cage, Commonwealth Handling Equipment Pool  (CHEP)",
    "Description": null,
    "Numeric code": "26"
  },
  {
    "Status": null,
    "Code": "DH",
    "Name": "Box, Commonwealth Handling Equipment Pool (CHEP), Eurobox",
    "Description": "A box mounted on a pallet base under the control of CHEP.",
    "Numeric code": "27"
  },
  {
    "Status": null,
    "Code": "DI",
    "Name": "Drum, iron ",
    "Description": null,
    "Numeric code": "34"
  },
  {
    "Status": null,
    "Code": "DJ",
    "Name": "Demijohn, non-protected",
    "Description": null,
    "Numeric code": "43"
  },
  {
    "Status": null,
    "Code": "DK",
    "Name": "Crate, bulk, cardboard ",
    "Description": null,
    "Numeric code": "23 to 25 or 27"
  },
  {
    "Status": null,
    "Code": "DL",
    "Name": "Crate, bulk, plastic ",
    "Description": null,
    "Numeric code": "23 to 25 or 27"
  },
  {
    "Status": null,
    "Code": "DM",
    "Name": "Crate, bulk, wooden",
    "Description": null,
    "Numeric code": "23 to 25 or 27"
  },
  {
    "Status": null,
    "Code": "DN",
    "Name": "Dispenser",
    "Description": null,
    "Numeric code": "93"
  },
  {
    "Status": null,
    "Code": "DP",
    "Name": "Demijohn, protected",
    "Description": null,
    "Numeric code": "43"
  },
  {
    "Status": null,
    "Code": "DR",
    "Name": "Drum ",
    "Description": null,
    "Numeric code": "34"
  },
  {
    "Status": null,
    "Code": "DS",
    "Name": "Tray, one layer no cover, plastic",
    "Description": null,
    "Numeric code": "27"
  },
  {
    "Status": null,
    "Code": "DT",
    "Name": "Tray, one layer no cover, wooden ",
    "Description": null,
    "Numeric code": "27"
  },
  {
    "Status": null,
    "Code": "DU",
    "Name": "Tray, one layer no cover, polystyrene",
    "Description": null,
    "Numeric code": "27"
  },
  {
    "Status": null,
    "Code": "DV",
    "Name": "Tray, one layer no cover, cardboard",
    "Description": null,
    "Numeric code": "27"
  },
  {
    "Status": null,
    "Code": "DW",
    "Name": "Tray, two layers no cover, plastic tray",
    "Description": null,
    "Numeric code": "27 or 29"
  },
  {
    "Status": null,
    "Code": "DX",
    "Name": "Tray, two layers no cover, wooden",
    "Description": null,
    "Numeric code": "27 or 29"
  },
  {
    "Status": null,
    "Code": "DY",
    "Name": "Tray, two layers no cover, cardboard ",
    "Description": null,
    "Numeric code": "27 or 29"
  },
  {
    "Status": null,
    "Code": "EC",
    "Name": "Bag, plastic ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "ED",
    "Name": "Case, with pallet base ",
    "Description": null,
    "Numeric code": "23 to 25"
  },
  {
    "Status": null,
    "Code": "EE",
    "Name": "Case, with pallet base, wooden ",
    "Description": null,
    "Numeric code": "23 to 25"
  },
  {
    "Status": null,
    "Code": "EF",
    "Name": "Case, with pallet base, cardboard",
    "Description": null,
    "Numeric code": "23 to 25"
  },
  {
    "Status": null,
    "Code": "EG",
    "Name": "Case, with pallet base, plastic",
    "Description": null,
    "Numeric code": "23 to 25"
  },
  {
    "Status": null,
    "Code": "EH",
    "Name": "Case, with pallet base, metal",
    "Description": null,
    "Numeric code": "23 to 25"
  },
  {
    "Status": null,
    "Code": "EI",
    "Name": "Case, isothermic ",
    "Description": null,
    "Numeric code": "22 to 25"
  },
  {
    "Status": null,
    "Code": "EN",
    "Name": "Envelope ",
    "Description": null,
    "Numeric code": "67"
  },
  {
    "Status": null,
    "Code": "FB",
    "Name": "Flexibag",
    "Description": "A flexible containment bag made of plastic, typically for the transportation bulk non-hazardous cargoes using standard size shipping containers.",
    "Numeric code": "65"
  },
  {
    "Status": null,
    "Code": "FC",
    "Name": "Crate, fruit ",
    "Description": null,
    "Numeric code": "23 to 27"
  },
  {
    "Status": null,
    "Code": "FD",
    "Name": "Crate, framed",
    "Description": null,
    "Numeric code": "26"
  },
  {
    "Status": null,
    "Code": "FE",
    "Name": "Flexitank",
    "Description": "A flexible containment tank made of plastic, typically for the transportation bulk non-hazardous cargoes using standard size shipping containers.",
    "Numeric code": "65"
  },
  {
    "Status": null,
    "Code": "FI",
    "Name": "Firkin ",
    "Description": null,
    "Numeric code": "44 or 45"
  },
  {
    "Status": null,
    "Code": "FL",
    "Name": "Flask",
    "Description": null,
    "Numeric code": "42 or 43"
  },
  {
    "Status": null,
    "Code": "FO",
    "Name": "Footlocker ",
    "Description": null,
    "Numeric code": "23"
  },
  {
    "Status": null,
    "Code": "FP",
    "Name": "Filmpack ",
    "Description": null,
    "Numeric code": "67"
  },
  {
    "Status": null,
    "Code": "FR",
    "Name": "Frame",
    "Description": null,
    "Numeric code": "26"
  },
  {
    "Status": null,
    "Code": "FT",
    "Name": "Foodtainer",
    "Description": null,
    "Numeric code": "21 to 23"
  },
  {
    "Status": null,
    "Code": "FW",
    "Name": "Cart, flatbed",
    "Description": "Wheeled flat bedded device on which trays or other regular shaped items are packed for transportation purposes.",
    "Numeric code": "94"
  },
  {
    "Status": null,
    "Code": "FX",
    "Name": "Bag, flexible container",
    "Description": null,
    "Numeric code": "61 to 66"
  },
  {
    "Status": null,
    "Code": "GB",
    "Name": "Bottle, gas",
    "Description": "A narrow-necked metal cylinder for retention of liquefied or compressed gas.",
    "Numeric code": "31 or 35"
  },
  {
    "Status": null,
    "Code": "GI",
    "Name": "Girder ",
    "Description": null,
    "Numeric code": "16"
  },
  {
    "Status": null,
    "Code": "GL",
    "Name": "Container, gallon",
    "Description": "A container with a capacity of one gallon.",
    "Numeric code": "32"
  },
  {
    "Status": null,
    "Code": "GR",
    "Name": "Receptacle, glass ",
    "Description": "Containment vessel made of glass for retaining substances or articles.",
    "Numeric code": "21 to 23 or 31 to 33 or 41 to 43"
  },
  {
    "Status": null,
    "Code": "GU",
    "Name": "Tray, containing horizontally stacked flat items",
    "Description": "Tray containing flat items stacked on top of one another.",
    "Numeric code": "27"
  },
  {
    "Status": null,
    "Code": "GY",
    "Name": "Bag, gunny",
    "Description": "A sack made of gunny or burlap, used for transporting coarse commodities, such as grains, potatoes, and other agricultural products. ",
    "Numeric code": "63 to 64"
  },
  {
    "Status": null,
    "Code": "GZ",
    "Name": "Girders, in bundle/bunch/truss ",
    "Description": null,
    "Numeric code": "16"
  },
  {
    "Status": null,
    "Code": "HA",
    "Name": "Basket, with handle, plastic ",
    "Description": null,
    "Numeric code": "27"
  },
  {
    "Status": null,
    "Code": "HB",
    "Name": "Basket, with handle, wooden",
    "Description": null,
    "Numeric code": "27"
  },
  {
    "Status": null,
    "Code": "HC",
    "Name": "Basket, with handle, cardboard ",
    "Description": null,
    "Numeric code": "27"
  },
  {
    "Status": null,
    "Code": "HG",
    "Name": "Hogshead ",
    "Description": null,
    "Numeric code": "44 or 45"
  },
  {
    "Status": null,
    "Code": "HN",
    "Name": "Hanger",
    "Description": "A purpose shaped device with a hook at the top for hanging items from a rail.",
    "Numeric code": "93"
  },
  {
    "Status": null,
    "Code": "HR",
    "Name": "Hamper ",
    "Description": null,
    "Numeric code": "23"
  },
  {
    "Status": null,
    "Code": "IA",
    "Name": "Package, display, wooden ",
    "Description": null,
    "Numeric code": "21 to 23"
  },
  {
    "Status": null,
    "Code": "IB",
    "Name": "Package, display, cardboard",
    "Description": null,
    "Numeric code": "21 to 23"
  },
  {
    "Status": null,
    "Code": "IC",
    "Name": "Package, display, plastic",
    "Description": null,
    "Numeric code": "21 to 23"
  },
  {
    "Status": null,
    "Code": "ID",
    "Name": "Package, display, metal",
    "Description": null,
    "Numeric code": "21 to 23"
  },
  {
    "Status": null,
    "Code": "IE",
    "Name": "Package, show",
    "Description": null,
    "Numeric code": "21 to 23"
  },
  {
    "Status": null,
    "Code": "IF",
    "Name": "Package, flow ",
    "Description": "A flexible tubular package or skin, possibly transparent, often used for containment of foodstuffs (e.g. salami sausage).",
    "Numeric code": "61 or 62"
  },
  {
    "Status": null,
    "Code": "IG",
    "Name": "Package, paper wrapped",
    "Description": null,
    "Numeric code": "21 to 23"
  },
  {
    "Status": null,
    "Code": "IH",
    "Name": "Drum, plastic",
    "Description": null,
    "Numeric code": "34"
  },
  {
    "Status": null,
    "Code": "IK",
    "Name": "Package, cardboard, with bottle grip-holes ",
    "Description": "Packaging material made out of cardboard that facilitates the separation of individual glass or plastic bottles.    ",
    "Numeric code": "21 to 23"
  },
  {
    "Status": null,
    "Code": "IL",
    "Name": "Tray, rigid, lidded stackable (CEN TS 14482:2002)",
    "Description": "Lidded stackable rigid tray compliant with CEN TS 14482:2002.",
    "Numeric code": "27"
  },
  {
    "Status": null,
    "Code": "IN",
    "Name": "Ingot",
    "Description": null,
    "Numeric code": "17"
  },
  {
    "Status": null,
    "Code": "IZ",
    "Name": "Ingots, in bundle/bunch/truss",
    "Description": null,
    "Numeric code": "17"
  },
  {
    "Status": null,
    "Code": "JB",
    "Name": "Bag, jumbo",
    "Description": "A flexible containment bag, widely used for storage, transportation and handling of powder, flake or granular materials. Typically constructed from woven polypropylene (PP) fabric in the form of cubic bags. ",
    "Numeric code": "65"
  },
  {
    "Status": null,
    "Code": "JC",
    "Name": "Jerrican, rectangular",
    "Description": null,
    "Numeric code": "23"
  },
  {
    "Status": null,
    "Code": "JG",
    "Name": "Jug",
    "Description": null,
    "Numeric code": "41"
  },
  {
    "Status": null,
    "Code": "JR",
    "Name": "Jar",
    "Description": null,
    "Numeric code": "41"
  },
  {
    "Status": null,
    "Code": "JT",
    "Name": "Jutebag",
    "Description": null,
    "Numeric code": "61 or 65"
  },
  {
    "Status": null,
    "Code": "JY",
    "Name": "Jerrican, cylindrical",
    "Description": null,
    "Numeric code": "33"
  },
  {
    "Status": null,
    "Code": "KG",
    "Name": "Keg",
    "Description": null,
    "Numeric code": "44 or 45"
  },
  {
    "Status": null,
    "Code": "KI",
    "Name": "Kit",
    "Description": "A set of articles or implements used for a specific purpose.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "LE",
    "Name": "Luggage",
    "Description": "A collection of bags, cases and/or containers which hold personal belongings for a journey.",
    "Numeric code": "21 to 23 or 61 to 63"
  },
  {
    "Status": null,
    "Code": "LG",
    "Name": "Log",
    "Description": null,
    "Numeric code": "12"
  },
  {
    "Status": null,
    "Code": "LT",
    "Name": "Lot",
    "Description": null,
    "Numeric code": "01 to 03"
  },
  {
    "Status": null,
    "Code": "LU",
    "Name": "Lug",
    "Description": "A wooden box for the transportation and storage of fruit or vegetables.",
    "Numeric code": "23"
  },
  {
    "Status": null,
    "Code": "LV",
    "Name": "Liftvan",
    "Description": "A wooden or metal container used for packing household goods and personal effects.",
    "Numeric code": "22 to 24"
  },
  {
    "Status": null,
    "Code": "LZ",
    "Name": "Logs, in bundle/bunch/truss",
    "Description": null,
    "Numeric code": "12"
  },
  {
    "Status": null,
    "Code": "MA",
    "Name": "Crate, metal",
    "Description": "Containment box made of metal for retaining substances or articles.",
    "Numeric code": "23 to 25 or 27"
  },
  {
    "Status": null,
    "Code": "MB",
    "Name": "Bag, multiply",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "MC",
    "Name": "Crate, milk",
    "Description": null,
    "Numeric code": "27"
  },
  {
    "Status": null,
    "Code": "ME",
    "Name": "Container, metal",
    "Description": "A type of containment box made of metal for retaining substances or articles, not otherwise specified as transport equipment.",
    "Numeric code": "23 to 25 or 27"
  },
  {
    "Status": null,
    "Code": "MR",
    "Name": "Receptacle, metal ",
    "Description": "Containment vessel made of metal for retaining substances or articles.",
    "Numeric code": "21 to 23 or 31 to 33"
  },
  {
    "Status": null,
    "Code": "MS",
    "Name": "Sack, multi-wall ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "MT",
    "Name": "Mat",
    "Description": null,
    "Numeric code": "67"
  },
  {
    "Status": null,
    "Code": "MW",
    "Name": "Receptacle, plastic wrapped ",
    "Description": "Containment vessel wrapped with plastic for retaining substances or articles.",
    "Numeric code": "21 to 23 or 31 to 33 or 41 to 43 or 61 to 63 "
  },
  {
    "Status": null,
    "Code": "MX",
    "Name": "Matchbox ",
    "Description": null,
    "Numeric code": "21"
  },
  {
    "Status": null,
    "Code": null,
    "Name": "Not available",
    "Description": null,
    "Numeric code": "0"
  },
  {
    "Status": null,
    "Code": "NE",
    "Name": "Unpacked or unpackaged ",
    "Description": null,
    "Numeric code": "0"
  },
  {
    "Status": null,
    "Code": "NF",
    "Name": "Unpacked or unpackaged, single unit",
    "Description": null,
    "Numeric code": "0"
  },
  {
    "Status": null,
    "Code": "NG",
    "Name": "Unpacked or unpackaged, multiple units",
    "Description": null,
    "Numeric code": "0"
  },
  {
    "Status": null,
    "Code": "NS",
    "Name": "Nest ",
    "Description": null,
    "Numeric code": "24"
  },
  {
    "Status": null,
    "Code": "NT",
    "Name": "Net",
    "Description": null,
    "Numeric code": "66"
  },
  {
    "Status": null,
    "Code": "NU",
    "Name": "Net, tube, plastic ",
    "Description": null,
    "Numeric code": "66"
  },
  {
    "Status": null,
    "Code": "NV",
    "Name": "Net, tube, textile ",
    "Description": null,
    "Numeric code": "66"
  },
  {
    "Status": null,
    "Code": "OA",
    "Name": "Pallet, CHEP 40 cm x 60 cm",
    "Description": "Commonwealth Handling Equipment Pool (CHEP) standard pallet of dimensions 40 centimeters x 60 centimeters.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "OB",
    "Name": "Pallet, CHEP 80 cm x 120 cm",
    "Description": "Commonwealth Handling Equipment Pool (CHEP) standard pallet of dimensions 80 centimeters x 120 centimeters.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "OC",
    "Name": "Pallet, CHEP 100 cm x 120 cm",
    "Description": "Commonwealth Handling Equipment Pool (CHEP) standard pallet of dimensions 100 centimeters x 120 centimeters.",
    "Numeric code": "92"
  },
  {
    "Status": "¦",
    "Code": "OD",
    "Name": "Pallet, AS 4068-1993",
    "Description": "Australian standard pallet of dimensions 116.5 centimeters x 116.5 centimeters.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "OE",
    "Name": "Pallet, ISO T11",
    "Description": "ISO standard pallet of dimensions 110 centimeters x 110 centimeters, prevalent in Asia - Pacific region.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "OF",
    "Name": "Platform, unspecified weight or dimension",
    "Description": "A pallet equivalent shipping platform of unknown dimensions or unknown weight. ",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "OK",
    "Name": "Block",
    "Description": "A solid piece of a hard substance, such as granite, having one or more flat sides.",
    "Numeric code": "17"
  },
  {
    "Status": null,
    "Code": "OT",
    "Name": "Octabin",
    "Description": "A standard cardboard container of large dimensions for storing for example vegetables, granules of plastics or other dry products.",
    "Numeric code": "25"
  },
  {
    "Status": null,
    "Code": "OU",
    "Name": "Container, outer",
    "Description": "A type of containment box that serves as the outer shipping container, not otherwise specified as transport equipment.",
    "Numeric code": "23 to 25 or 27"
  },
  {
    "Status": null,
    "Code": "OG",
    "Name": "Pallet ISO 0 - 1/2 EURO Pallet",
    "Description": "Standard pallet with dimensions 80 X 60 cm.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "OH",
    "Name": "Pallet ISO 1 - 1/1 EURO Pallet",
    "Description": "Standard pallet with dimensions 80 X 120 cm.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "OI",
    "Name": "Pallet ISO 2 – 2/1 EURO Pallet",
    "Description": "Standard pallet with dimensions 100 X 120 cm.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "OJ",
    "Name": "1/4 EURO Pallet",
    "Description": "Standard pallet with dimensions 60 X 40 cm.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "OL",
    "Name": "1/8 EURO Pallet",
    "Description": "Standard pallet with dimensions 40 X 30 cm.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "OM",
    "Name": "Synthetic pallet ISO 1",
    "Description": "A standard pallet with standard dimensions 80 x 120cm made of a synthetic material for hygienic reasons.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "ON",
    "Name": "Synthetic pallet ISO 2",
    "Description": "A standard pallet with standard dimensions 100 x 120cm made of a synthetic material for hygienic reasons.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "OP",
    "Name": "Wholesaler pallet",
    "Description": "Pallet provided by the wholesaler.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "OQ",
    "Name": "Pallet 80 X 100 cm",
    "Description": "Pallet with dimensions 80 X 100 cm.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "OR",
    "Name": "Pallet 60 X 100 cm",
    "Description": "Pallet with dimensions 60 X 100 cm.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "OS",
    "Name": "Oneway pallet",
    "Description": "Pallet need not be returned to the point of expedition",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "OV",
    "Name": "Returnable pallet",
    "Description": "Pallet must be returned to the point of expedition.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "OW",
    "Name": "Large bag, pallet sized",
    "Description": "A non-rigid container made of fabric, paper, plastic, etc, with an opening at the top which can be closed and which is suitable for use on pallets",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "OX",
    "Name": "A wheeled pallet with raised rim (81 x 67 x 135)",
    "Description": "A wheeled pallet with raised rim for the storing and transporting of loads. Dimensions: 81 x 67 x 135 cm (length x width x height).",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "OY",
    "Name": "A Wheeled pallet with raised rim (81 x 72 x 135)",
    "Description": "A wheeled pallet with raised rim for the storing and transporting of loads. Dimensions: 81 x 72 x 135 cm (length x width x height).",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "OZ",
    "Name": "Wheeled pallet with raised rim ( 81 x 60 x 16)",
    "Description": "A wheeled pallet with raised rim for the storing and transporting of loads. Dimensions: 81 x 60 x 16 cm (length x width x height).",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "O1",
    "Name": "Two sided cage on wheels with fixing strap",
    "Description": "A two sided cage mounted on wheels with fixing strap. Dimensions: 900 x 770 x 1513 cm (length x width x height).",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "O2",
    "Name": "Trolley",
    "Description": "A low cart for the transportation and storage of groceries, milk, etc.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "O3",
    "Name": "Oneway pallet ISO 0 - 1/2 EURO Pallet",
    "Description": "Oneway pallet with dimensions 80 X 60 cm.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "O4",
    "Name": "Oneway pallet ISO 1 - 1/1 EURO Pallet",
    "Description": "Oneway pallet with dimensions 80 X 120 cm.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "O5",
    "Name": "Oneway pallet ISO 2 - 2/1 EURO Pallet",
    "Description": "Oneway pallet with dimensions 100 X 120 cm.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "O6",
    "Name": "Pallet with exceptional dimensions",
    "Description": "Pallet with non-standard dimensions",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "O7",
    "Name": "Wooden pallet  40 cm x 80 cm",
    "Description": "Wooden pallet with dimensions 40 cm x 80 cm.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "O8",
    "Name": "Plastic pallet SRS 60 cm x 80 cm",
    "Description": "SRS (Svenska Retursystem) standard synthetic pallet of dimensions 60 cm x 80 cm.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "O9",
    "Name": "Plastic pallet SRS 80 cm x 120 cm",
    "Description": "SRS (Svenska Retursystem) standard synthetic pallet of dimensions 80 cm x 120 cm.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "P1",
    "Name": "CHEP pallet 60 cm x 80 cm ",
    "Description": "Commonwealth Handling Equipment Pool (CHEP) standard pallet of dimensions 60 centimeters x 80 centimeters.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "P3",
    "Name": "LPR pallet 60 cm x 80 cm",
    "Description": "LPR (La Pallet Rouge) standard pallet of dimensions 60 cm x 80 cm.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "P4",
    "Name": "LPR pallet 80 cm x 120 cm",
    "Description": "LPR (La Pallet Rouge) standard pallet of dimensions 80 cm x 120 cm.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "P2",
    "Name": "Pan",
    "Description": "A shallow, wide, open container, usually of metal.",
    "Numeric code": "51"
  },
  {
    "Status": null,
    "Code": "PA",
    "Name": "Packet ",
    "Description": "Small package.",
    "Numeric code": "21 to 23"
  },
  {
    "Status": null,
    "Code": "PB",
    "Name": "Pallet, box Combined open-ended box and pallet",
    "Description": null,
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "PC",
    "Name": "Parcel ",
    "Description": null,
    "Numeric code": "21 to 23 or 61 to 63"
  },
  {
    "Status": null,
    "Code": "PD",
    "Name": "Pallet, modular, collars 80cms * 100cms ",
    "Description": "Standard sized pallet of dimensions 80 centimeters by 100 centimeters (cms).",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "PE",
    "Name": "Pallet, modular, collars 80cms * 120cms ",
    "Description": "Standard sized pallet of dimensions 80 centimeters by 120 centimeters (cms).",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "PF",
    "Name": "Pen ",
    "Description": "A small open top enclosure for retaining animals.",
    "Numeric code": "26 or 27"
  },
  {
    "Status": null,
    "Code": "PG",
    "Name": "Plate",
    "Description": null,
    "Numeric code": "15"
  },
  {
    "Status": null,
    "Code": "PH",
    "Name": "Pitcher",
    "Description": null,
    "Numeric code": "41"
  },
  {
    "Status": null,
    "Code": "PI",
    "Name": "Pipe ",
    "Description": null,
    "Numeric code": "11"
  },
  {
    "Status": null,
    "Code": "PJ",
    "Name": "Punnet",
    "Description": null,
    "Numeric code": "27"
  },
  {
    "Status": null,
    "Code": "PK",
    "Name": "Package",
    "Description": "Standard packaging unit.",
    "Numeric code": "21 to 23"
  },
  {
    "Status": null,
    "Code": "PL",
    "Name": "Pail ",
    "Description": null,
    "Numeric code": "51"
  },
  {
    "Status": null,
    "Code": "PN",
    "Name": "Plank",
    "Description": null,
    "Numeric code": "16"
  },
  {
    "Status": null,
    "Code": "PO",
    "Name": "Pouch",
    "Description": null,
    "Numeric code": "61"
  },
  {
    "Status": null,
    "Code": "PP",
    "Name": "Piece",
    "Description": "A loose or unpacked article. ",
    "Numeric code": "19"
  },
  {
    "Status": null,
    "Code": "PR",
    "Name": "Receptacle, plastic ",
    "Description": "Containment vessel made of plastic for retaining substances or articles.",
    "Numeric code": "21 to 23 or 31 to 33 or 41 to 43 or 61 to 63"
  },
  {
    "Status": null,
    "Code": "PT",
    "Name": "Pot",
    "Description": null,
    "Numeric code": "41"
  },
  {
    "Status": null,
    "Code": "PU",
    "Name": "Tray ",
    "Description": null,
    "Numeric code": "27"
  },
  {
    "Status": null,
    "Code": "PV",
    "Name": "Pipes, in bundle/bunch/truss ",
    "Description": null,
    "Numeric code": "11"
  },
  {
    "Status": null,
    "Code": "PX",
    "Name": "Pallet ",
    "Description": "Platform or open-ended box, usually made of wood, on which goods are retained for ease of mechanical handling during transport and storage.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "PY",
    "Name": "Plates, in bundle/bunch/truss",
    "Description": null,
    "Numeric code": "15"
  },
  {
    "Status": null,
    "Code": "PZ",
    "Name": "Planks, in bundle/bunch/truss",
    "Description": null,
    "Numeric code": "16"
  },
  {
    "Status": null,
    "Code": "QA",
    "Name": "Drum, steel, non-removable head",
    "Description": null,
    "Numeric code": "34"
  },
  {
    "Status": null,
    "Code": "QB",
    "Name": "Drum, steel, removable head",
    "Description": null,
    "Numeric code": "34"
  },
  {
    "Status": null,
    "Code": "QC",
    "Name": "Drum, aluminium, non-removable head",
    "Description": null,
    "Numeric code": "34"
  },
  {
    "Status": null,
    "Code": "QD",
    "Name": "Drum, aluminium, removable head",
    "Description": null,
    "Numeric code": "34"
  },
  {
    "Status": null,
    "Code": "QF",
    "Name": "Drum, plastic, non-removable head",
    "Description": null,
    "Numeric code": "34"
  },
  {
    "Status": null,
    "Code": "QG",
    "Name": "Drum, plastic, removable head",
    "Description": null,
    "Numeric code": "34"
  },
  {
    "Status": null,
    "Code": "QH",
    "Name": "Barrel, wooden, bung type",
    "Description": null,
    "Numeric code": "44 or 45"
  },
  {
    "Status": null,
    "Code": "QJ",
    "Name": "Barrel, wooden, removable head ",
    "Description": null,
    "Numeric code": "44 or 45"
  },
  {
    "Status": null,
    "Code": "QK",
    "Name": "Jerrican, steel, non-removable head",
    "Description": null,
    "Numeric code": "23 or 33"
  },
  {
    "Status": null,
    "Code": "QL",
    "Name": "Jerrican, steel, removable head",
    "Description": null,
    "Numeric code": "23 or 33"
  },
  {
    "Status": null,
    "Code": "QM",
    "Name": "Jerrican, plastic, non-removable head",
    "Description": null,
    "Numeric code": "23 or 33"
  },
  {
    "Status": null,
    "Code": "QN",
    "Name": "Jerrican, plastic, removable head",
    "Description": null,
    "Numeric code": "23 or 33"
  },
  {
    "Status": null,
    "Code": "QP",
    "Name": "Box, wooden, natural wood, ordinary",
    "Description": null,
    "Numeric code": "21 to 25"
  },
  {
    "Status": null,
    "Code": "QQ",
    "Name": "Box, wooden, natural wood, with sift proof walls",
    "Description": null,
    "Numeric code": "21 to 25"
  },
  {
    "Status": null,
    "Code": "QR",
    "Name": "Box, plastic, expanded ",
    "Description": null,
    "Numeric code": "21 to 25"
  },
  {
    "Status": null,
    "Code": "QS",
    "Name": "Box, plastic, solid",
    "Description": null,
    "Numeric code": "21 to 25"
  },
  {
    "Status": null,
    "Code": "RD",
    "Name": "Rod",
    "Description": null,
    "Numeric code": "12"
  },
  {
    "Status": null,
    "Code": "RG",
    "Name": "Ring ",
    "Description": null,
    "Numeric code": "14"
  },
  {
    "Status": null,
    "Code": "RJ",
    "Name": "Rack, clothing hanger",
    "Description": null,
    "Numeric code": "93"
  },
  {
    "Status": null,
    "Code": "RK",
    "Name": "Rack ",
    "Description": null,
    "Numeric code": "93"
  },
  {
    "Status": null,
    "Code": "RL",
    "Name": "Reel ",
    "Description": "Cylindrical rotatory device with a rim at each end on which materials are wound.",
    "Numeric code": "91"
  },
  {
    "Status": null,
    "Code": "RO",
    "Name": "Roll ",
    "Description": null,
    "Numeric code": "13"
  },
  {
    "Status": null,
    "Code": "RT",
    "Name": "Rednet ",
    "Description": "Containment material made of red mesh netting for retaining articles (e.g. trees).",
    "Numeric code": "66"
  },
  {
    "Status": null,
    "Code": "RZ",
    "Name": "Rods, in bundle/bunch/truss",
    "Description": null,
    "Numeric code": "12"
  },
  {
    "Status": null,
    "Code": "SA",
    "Name": "Sack ",
    "Description": null,
    "Numeric code": "65"
  },
  {
    "Status": null,
    "Code": "SB",
    "Name": "Slab",
    "Description": null,
    "Numeric code": "16 or 17"
  },
  {
    "Status": null,
    "Code": "SC",
    "Name": "Crate, shallow ",
    "Description": null,
    "Numeric code": "27"
  },
  {
    "Status": null,
    "Code": "SD",
    "Name": "Spindle",
    "Description": null,
    "Numeric code": "91"
  },
  {
    "Status": null,
    "Code": "SE",
    "Name": "Sea-chest",
    "Description": null,
    "Numeric code": "22 or 23"
  },
  {
    "Status": null,
    "Code": "SH",
    "Name": "Sachet ",
    "Description": null,
    "Numeric code": "61"
  },
  {
    "Status": null,
    "Code": "SI",
    "Name": "Skid ",
    "Description": "A low movable platform or pallet to facilitate the handling and transport of goods.",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "SK",
    "Name": "Case, skeleton ",
    "Description": null,
    "Numeric code": "26"
  },
  {
    "Status": null,
    "Code": "SL",
    "Name": "Slipsheet ",
    "Description": "Hard plastic sheeting primarily used as the base on which to stack goods to optimise the space within a container. May be used as an alternative to a palletized packaging.",
    "Numeric code": "67"
  },
  {
    "Status": null,
    "Code": "SM",
    "Name": "Sheetmetal ",
    "Description": null,
    "Numeric code": "15"
  },
  {
    "Status": null,
    "Code": "SO",
    "Name": "Spool ",
    "Description": "A packaging container used in the transport of such items as wire, cable, tape and yarn.",
    "Numeric code": "91"
  },
  {
    "Status": null,
    "Code": "SP",
    "Name": "Sheet, plastic wrapping",
    "Description": null,
    "Numeric code": "15"
  },
  {
    "Status": null,
    "Code": "SS",
    "Name": "Case, steel",
    "Description": null,
    "Numeric code": "21 to 25"
  },
  {
    "Status": null,
    "Code": "ST",
    "Name": "Sheet",
    "Description": null,
    "Numeric code": "15"
  },
  {
    "Status": null,
    "Code": "SU",
    "Name": "Suitcase ",
    "Description": null,
    "Numeric code": "21 to 23 or 61 to 63"
  },
  {
    "Status": null,
    "Code": "SV",
    "Name": "Envelope, steel",
    "Description": null,
    "Numeric code": "67"
  },
  {
    "Status": null,
    "Code": "SW",
    "Name": "Shrinkwrapped  ",
    "Description": "Goods retained in a transparent plastic film that has been wrapped around and then shrunk tightly on to the goods.",
    "Numeric code": "67"
  },
  {
    "Status": "X",
    "Code": "SX",
    "Name": "Set",
    "Description": null,
    "Numeric code": "11 to 45"
  },
  {
    "Status": null,
    "Code": "SY",
    "Name": "Sleeve",
    "Description": null,
    "Numeric code": "69"
  },
  {
    "Status": null,
    "Code": "SZ",
    "Name": "Sheets, in bundle/bunch/truss",
    "Description": null,
    "Numeric code": "15"
  },
  {
    "Status": null,
    "Code": "T1",
    "Name": "Tablet",
    "Description": "A loose or unpacked article in the form of a bar, block or piece. ",
    "Numeric code": "16"
  },
  {
    "Status": null,
    "Code": "TB",
    "Name": "Tub",
    "Description": null,
    "Numeric code": "51"
  },
  {
    "Status": null,
    "Code": "TC",
    "Name": "Tea-chest",
    "Description": null,
    "Numeric code": "21 to 23"
  },
  {
    "Status": null,
    "Code": "TD",
    "Name": "Tube, collapsible",
    "Description": null,
    "Numeric code": "61 to 65"
  },
  {
    "Status": null,
    "Code": "TE",
    "Name": "Tyre",
    "Description": "A ring made of rubber and/or metal surrounding a wheel.",
    "Numeric code": "93"
  },
  {
    "Status": null,
    "Code": "TG",
    "Name": "Tank container, generic",
    "Description": "A specially constructed container for transporting liquids and gases in bulk.",
    "Numeric code": "93"
  },
  {
    "Status": null,
    "Code": "TI",
    "Name": "Tierce",
    "Description": null,
    "Numeric code": "44"
  },
  {
    "Status": null,
    "Code": "TK",
    "Name": "Tank, rectangular",
    "Description": null,
    "Numeric code": "24 or 25"
  },
  {
    "Status": null,
    "Code": "TL",
    "Name": "Tub, with lid",
    "Description": null,
    "Numeric code": "51"
  },
  {
    "Status": null,
    "Code": "TN",
    "Name": "Tin",
    "Description": null,
    "Numeric code": "21 or 22"
  },
  {
    "Status": null,
    "Code": "TO",
    "Name": "Tun",
    "Description": null,
    "Numeric code": "44 or 45"
  },
  {
    "Status": null,
    "Code": "TR",
    "Name": "Trunk",
    "Description": null,
    "Numeric code": "24 or 25"
  },
  {
    "Status": null,
    "Code": "TS",
    "Name": "Truss",
    "Description": null,
    "Numeric code": "16"
  },
  {
    "Status": null,
    "Code": "TT",
    "Name": "Bag, tote",
    "Description": "A capacious bag or basket.",
    "Numeric code": "62 or 63"
  },
  {
    "Status": null,
    "Code": "TU",
    "Name": "Tube ",
    "Description": null,
    "Numeric code": "11"
  },
  {
    "Status": null,
    "Code": "TV",
    "Name": "Tube, with nozzle ",
    "Description": "A tube made of plastic, metal or cardboard fitted with a nozzle, containing a liquid or semi-liquid product, e.g. silicon.",
    "Numeric code": "31 or 32"
  },
  {
    "Status": null,
    "Code": "TW",
    "Name": "Pallet, triwall",
    "Description": "A lightweight pallet made from heavy duty corrugated board.  ",
    "Numeric code": "92"
  },
  {
    "Status": null,
    "Code": "TY",
    "Name": "Tank, cylindrical",
    "Description": null,
    "Numeric code": "34 or 35"
  },
  {
    "Status": null,
    "Code": "TZ",
    "Name": "Tubes, in bundle/bunch/truss ",
    "Description": null,
    "Numeric code": "11"
  },
  {
    "Status": null,
    "Code": "UC",
    "Name": "Uncaged ",
    "Description": null,
    "Numeric code": "0"
  },
  {
    "Status": null,
    "Code": "UN",
    "Name": "Unit",
    "Description": "A type of package composed of a single item or object, not otherwise specified as a unit of transport equipment.",
    "Numeric code": "23 to 25 or 27"
  },
  {
    "Status": null,
    "Code": "VA",
    "Name": "Vat",
    "Description": null,
    "Numeric code": "35"
  },
  {
    "Status": null,
    "Code": "VG",
    "Name": "Bulk, gas (at 1031 mbar and 15°C)",
    "Description": null,
    "Numeric code": "6"
  },
  {
    "Status": null,
    "Code": "VI",
    "Name": "Vial ",
    "Description": null,
    "Numeric code": "31"
  },
  {
    "Status": null,
    "Code": "VK",
    "Name": "Vanpack ",
    "Description": "A type of wooden crate. ",
    "Numeric code": "99"
  },
  {
    "Status": null,
    "Code": "VL",
    "Name": "Bulk, liquid ",
    "Description": null,
    "Numeric code": "4"
  },
  {
    "Status": null,
    "Code": "VO",
    "Name": "Bulk, solid, large particles (“nodules”) ",
    "Description": null,
    "Numeric code": "3"
  },
  {
    "Status": null,
    "Code": "VP",
    "Name": "Vacuum-packed",
    "Description": null,
    "Numeric code": "67"
  },
  {
    "Status": null,
    "Code": "VQ",
    "Name": "Bulk, liquefied gas (at abnormal temperature/pressure) ",
    "Description": null,
    "Numeric code": "5"
  },
  {
    "Status": null,
    "Code": "VN",
    "Name": "Vehicle",
    "Description": "A self-propelled means of conveyance.",
    "Numeric code": "93"
  },
  {
    "Status": null,
    "Code": "VR",
    "Name": "Bulk, solid, granular particles (“grains”) ",
    "Description": null,
    "Numeric code": "2"
  },
  {
    "Status": null,
    "Code": "VS",
    "Name": "Bulk, scrap metal",
    "Description": "Loose or unpacked scrap metal transported in bulk form. ",
    "Numeric code": "9"
  },
  {
    "Status": null,
    "Code": "VY",
    "Name": "Bulk, solid, fine particles (“powders”)",
    "Description": null,
    "Numeric code": "1"
  },
  {
    "Status": null,
    "Code": "WA",
    "Name": "Intermediate bulk container",
    "Description": "A reusable container made of metal, plastic, textile, wood or composite materials used to facilitate transportation of bulk solids and liquids in manageable volumes.",
    "Numeric code": "23 to 26 or 62 to 64"
  },
  {
    "Status": null,
    "Code": "WB",
    "Name": "Wickerbottle ",
    "Description": null,
    "Numeric code": "42 or 43"
  },
  {
    "Status": null,
    "Code": "WC",
    "Name": "Intermediate bulk container, steel ",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "WD",
    "Name": "Intermediate bulk container, aluminium ",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "WF",
    "Name": "Intermediate bulk container, metal ",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "WG",
    "Name": "Intermediate bulk container, steel, pressurised > 10 kpa",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "WH",
    "Name": "Intermediate bulk container, aluminium, pressurised > 10 kpa",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "WJ",
    "Name": "Intermediate bulk container, metal, pressure 10 kpa ",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "WK",
    "Name": "Intermediate bulk container, steel, liquid ",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "WL",
    "Name": "Intermediate bulk container, aluminium, liquid ",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "WM",
    "Name": "Intermediate bulk container, metal, liquid ",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "WN",
    "Name": "Intermediate bulk container, woven plastic, without coat/liner ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "WP",
    "Name": "Intermediate bulk container, woven plastic, coated ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "WQ",
    "Name": "Intermediate bulk container, woven plastic, with liner ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "WR",
    "Name": "Intermediate bulk container, woven plastic, coated and liner ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "WS",
    "Name": "Intermediate bulk container, plastic film",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "WT",
    "Name": "Intermediate bulk container, textile with out coat/liner ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "WU",
    "Name": "Intermediate bulk container, natural wood, with inner liner",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "WV",
    "Name": "Intermediate bulk container, textile, coated ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "WW",
    "Name": "Intermediate bulk container, textile, with liner ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "WX",
    "Name": "Intermediate bulk container, textile, coated and liner ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "WY",
    "Name": "Intermediate bulk container, plywood, with inner liner ",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "WZ",
    "Name": "Intermediate bulk container, reconstituted wood, with inner liner",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "XA",
    "Name": "Bag, woven plastic, without inner coat/liner ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "XB",
    "Name": "Bag, woven plastic, sift proof ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "XC",
    "Name": "Bag, woven plastic, water resistant",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "XD",
    "Name": "Bag, plastics film ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "XF",
    "Name": "Bag, textile, without inner coat/liner ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "XG",
    "Name": "Bag, textile, sift proof ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "XH",
    "Name": "Bag, textile, water resistant",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "XJ",
    "Name": "Bag, paper, multi-wall ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "XK",
    "Name": "Bag, paper, multi-wall, water resistant",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "YA",
    "Name": "Composite packaging, plastic receptacle in steel drum",
    "Description": null,
    "Numeric code": "33 or 34"
  },
  {
    "Status": null,
    "Code": "YB",
    "Name": "Composite packaging, plastic receptacle in steel crate box",
    "Description": null,
    "Numeric code": "24 or 25"
  },
  {
    "Status": null,
    "Code": "YC",
    "Name": "Composite packaging, plastic receptacle in aluminium drum",
    "Description": null,
    "Numeric code": "33 or 34"
  },
  {
    "Status": null,
    "Code": "YD",
    "Name": "Composite packaging, plastic receptacle in aluminium crate",
    "Description": null,
    "Numeric code": "24 or 25"
  },
  {
    "Status": null,
    "Code": "YF",
    "Name": "Composite packaging, plastic receptacle in wooden box",
    "Description": null,
    "Numeric code": "24 or 25"
  },
  {
    "Status": null,
    "Code": "YG",
    "Name": "Composite packaging, plastic receptacle in plywood drum",
    "Description": null,
    "Numeric code": "33 or 34"
  },
  {
    "Status": null,
    "Code": "YH",
    "Name": "Composite packaging, plastic receptacle in plywood box ",
    "Description": null,
    "Numeric code": "24 or 25"
  },
  {
    "Status": null,
    "Code": "YJ",
    "Name": "Composite packaging, plastic receptacle in fibre drum",
    "Description": null,
    "Numeric code": "33 or 34"
  },
  {
    "Status": null,
    "Code": "YK",
    "Name": "Composite packaging, plastic receptacle in fibreboard box",
    "Description": null,
    "Numeric code": "24 or 25"
  },
  {
    "Status": null,
    "Code": "YL",
    "Name": "Composite packaging, plastic receptacle in plastic drum",
    "Description": null,
    "Numeric code": "33 or 34"
  },
  {
    "Status": null,
    "Code": "YM",
    "Name": "Composite packaging, plastic receptacle in solid plastic box",
    "Description": null,
    "Numeric code": "24 or 25"
  },
  {
    "Status": null,
    "Code": "YN",
    "Name": "Composite packaging, glass receptacle in steel drum",
    "Description": null,
    "Numeric code": "33 or 34"
  },
  {
    "Status": null,
    "Code": "YP",
    "Name": "Composite packaging, glass receptacle in steel crate box",
    "Description": null,
    "Numeric code": "24 or 25"
  },
  {
    "Status": null,
    "Code": "YQ",
    "Name": "Composite packaging, glass receptacle in aluminium drum",
    "Description": null,
    "Numeric code": "33 or 34"
  },
  {
    "Status": null,
    "Code": "YR",
    "Name": "Composite packaging, glass receptacle in aluminium crate",
    "Description": null,
    "Numeric code": "24 or 25"
  },
  {
    "Status": null,
    "Code": "YS",
    "Name": "Composite packaging, glass receptacle in wooden box",
    "Description": null,
    "Numeric code": "24 or 25"
  },
  {
    "Status": null,
    "Code": "YT",
    "Name": "Composite packaging, glass receptacle in plywood drum",
    "Description": null,
    "Numeric code": "33 or 34"
  },
  {
    "Status": null,
    "Code": "YV",
    "Name": "Composite packaging, glass receptacle in wickerwork hamper",
    "Description": null,
    "Numeric code": "23"
  },
  {
    "Status": null,
    "Code": "YW",
    "Name": "Composite packaging, glass receptacle in fibre drum",
    "Description": null,
    "Numeric code": "33 or 34"
  },
  {
    "Status": null,
    "Code": "YX",
    "Name": "Composite packaging, glass receptacle in fibreboard box ",
    "Description": null,
    "Numeric code": "24 or 25"
  },
  {
    "Status": null,
    "Code": "YY",
    "Name": "Composite packaging, glass receptacle in expandable plastic pack",
    "Description": null,
    "Numeric code": "62 or 63"
  },
  {
    "Status": null,
    "Code": "YZ",
    "Name": "Composite packaging, glass receptacle in solid plastic pack",
    "Description": null,
    "Numeric code": "23 or 24"
  },
  {
    "Status": null,
    "Code": "ZA",
    "Name": "Intermediate bulk container, paper, multi-wall ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "ZB",
    "Name": "Bag, large ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "ZC",
    "Name": "Intermediate bulk container, paper, multi-wall, water resistant",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "ZD",
    "Name": "Intermediate bulk container, rigid plastic, with structural equipment, solids",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "ZF",
    "Name": "Intermediate bulk container, rigid plastic, freestanding, solids",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "ZG",
    "Name": "Intermediate bulk container, rigid plastic, with structural equipment, pressurised",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "ZH",
    "Name": "Intermediate bulk container, rigid plastic, freestanding, pressurised",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "ZJ",
    "Name": "Intermediate bulk container, rigid plastic, with structural equipment, liquids ",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "ZK",
    "Name": "Intermediate bulk container, rigid plastic, freestanding, liquids",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "ZL",
    "Name": "Intermediate bulk container, composite, rigid plastic, solids",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "ZM",
    "Name": "Intermediate bulk container, composite, flexible plastic, solids",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "ZN",
    "Name": "Intermediate bulk container, composite, rigid plastic, pressurised ",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "ZP",
    "Name": "Intermediate bulk container, composite, flexible plastic, pressurised",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "ZQ",
    "Name": "Intermediate bulk container, composite, rigid plastic, liquids",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "ZR",
    "Name": "Intermediate bulk container, composite, flexible plastic, liquids ",
    "Description": null,
    "Numeric code": "62 to 64"
  },
  {
    "Status": null,
    "Code": "ZS",
    "Name": "Intermediate bulk container, composite",
    "Description": null,
    "Numeric code": "23 to 26 or 62 to 64"
  },
  {
    "Status": null,
    "Code": "ZT",
    "Name": "Intermediate bulk container, fibreboard",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "ZU",
    "Name": "Intermediate bulk container, flexible",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "ZV",
    "Name": "Intermediate bulk container, metal, other than steel",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "ZW",
    "Name": "Intermediate bulk container, natural wood",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "ZX",
    "Name": "Intermediate bulk container, plywood",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "ZY",
    "Name": "Intermediate bulk container, reconstituted wood",
    "Description": null,
    "Numeric code": "23 to 26"
  },
  {
    "Status": null,
    "Code": "ZZ",
    "Name": "Mutually defined ",
    "Description": null,
    "Numeric code": "0"
  }
];

const NodeUNECEPackageCodes = createNodeComponent({
  label: "UNECE Package Codes",
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

export default NodeUNECEPackageCodes;
