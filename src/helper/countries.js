const COUNTRIES = [
    {
        "name": "Afghanistan",
        "isdCode": "+93",
        "isoCode": "AF"
    },
    {
        "name": "Aland Islands",
        "isdCode": "+358",
        "isoCode": "AX"
    },
    {
        "name": "Albania",
        "isdCode": "+355",
        "isoCode": "AL"
    },
    {
        "name": "Algeria",
        "isdCode": "+213",
        "isoCode": "DZ"
    },
    {
        "name": "AmericanSamoa",
        "isdCode": "+1684",
        "isoCode": "AS"
    },
    {
        "name": "Andorra",
        "isdCode": "+376",
        "isoCode": "AD"
    },
    {
        "name": "Angola",
        "isdCode": "+244",
        "isoCode": "AO"
    },
    {
        "name": "Anguilla",
        "isdCode": "+1264",
        "isoCode": "AI"
    },
    {
        "name": "Antarctica",
        "isdCode": "+672",
        "isoCode": "AQ"
    },
    {
        "name": "Antigua and Barbuda",
        "isdCode": "+1268",
        "isoCode": "AG"
    },
    {
        "name": "Argentina",
        "isdCode": "+54",
        "isoCode": "AR"
    },
    {
        "name": "Armenia",
        "isdCode": "+374",
        "isoCode": "AM"
    },
    {
        "name": "Aruba",
        "isdCode": "+297",
        "isoCode": "AW"
    },
    {
        "name": "Australia",
        "isdCode": "+61",
        "isoCode": "AU"
    },
    {
        "name": "Austria",
        "isdCode": "+43",
        "isoCode": "AT"
    },
    {
        "name": "Azerbaijan",
        "isdCode": "+994",
        "isoCode": "AZ"
    },
    {
        "name": "Bahamas",
        "isdCode": "+1242",
        "isoCode": "BS"
    },
    {
        "name": "Bahrain",
        "isdCode": "+973",
        "isoCode": "BH"
    },
    {
        "name": "Bangladesh",
        "isdCode": "+880",
        "isoCode": "BD"
    },
    {
        "name": "Barbados",
        "isdCode": "+1246",
        "isoCode": "BB"
    },
    {
        "name": "Belarus",
        "isdCode": "+375",
        "isoCode": "BY"
    },
    {
        "name": "Belgium",
        "isdCode": "+32",
        "isoCode": "BE"
    },
    {
        "name": "Belize",
        "isdCode": "+501",
        "isoCode": "BZ"
    },
    {
        "name": "Benin",
        "isdCode": "+229",
        "isoCode": "BJ"
    },
    {
        "name": "Bermuda",
        "isdCode": "+1441",
        "isoCode": "BM"
    },
    {
        "name": "Bhutan",
        "isdCode": "+975",
        "isoCode": "BT"
    },
    {
        "name": "Bolivia, Plurinational State of",
        "isdCode": "+591",
        "isoCode": "BO"
    },
    {
        "name": "Bosnia and Herzegovina",
        "isdCode": "+387",
        "isoCode": "BA"
    },
    {
        "name": "Botswana",
        "isdCode": "+267",
        "isoCode": "BW"
    },
    {
        "name": "Brazil",
        "isdCode": "+55",
        "isoCode": "BR"
    },
    {
        "name": "British Indian Ocean Territory",
        "isdCode": "+246",
        "isoCode": "IO"
    },
    {
        "name": "Brunei Darussalam",
        "isdCode": "+673",
        "isoCode": "BN"
    },
    {
        "name": "Bulgaria",
        "isdCode": "+359",
        "isoCode": "BG"
    },
    {
        "name": "Burkina Faso",
        "isdCode": "+226",
        "isoCode": "BF"
    },
    {
        "name": "Burundi",
        "isdCode": "+257",
        "isoCode": "BI"
    },
    {
        "name": "Cambodia",
        "isdCode": "+855",
        "isoCode": "KH"
    },
    {
        "name": "Cameroon",
        "isdCode": "+237",
        "isoCode": "CM"
    },
    {
        "name": "Canada",
        "isdCode": "+1",
        "isoCode": "CA"
    },
    {
        "name": "Cape Verde",
        "isdCode": "+238",
        "isoCode": "CV"
    },
    {
        "name": "Cayman Islands",
        "isdCode": "+ 345",
        "isoCode": "KY"
    },
    {
        "name": "Central African Republic",
        "isdCode": "+236",
        "isoCode": "CF"
    },
    {
        "name": "Chad",
        "isdCode": "+235",
        "isoCode": "TD"
    },
    {
        "name": "Chile",
        "isdCode": "+56",
        "isoCode": "CL"
    },
    {
        "name": "China",
        "isdCode": "+86",
        "isoCode": "CN"
    },
    {
        "name": "Christmas Island",
        "isdCode": "+61",
        "isoCode": "CX"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "isdCode": "+61",
        "isoCode": "CC"
    },
    {
        "name": "Colombia",
        "isdCode": "+57",
        "isoCode": "CO"
    },
    {
        "name": "Comoros",
        "isdCode": "+269",
        "isoCode": "KM"
    },
    {
        "name": "Congo",
        "isdCode": "+242",
        "isoCode": "CG"
    },
    {
        "name": "Congo, The Democratic Republic of the Congo",
        "isdCode": "+243",
        "isoCode": "CD"
    },
    {
        "name": "Cook Islands",
        "isdCode": "+682",
        "isoCode": "CK"
    },
    {
        "name": "Costa Rica",
        "isdCode": "+506",
        "isoCode": "CR"
    },
    {
        "name": "Cote d'Ivoire",
        "isdCode": "+225",
        "isoCode": "CI"
    },
    {
        "name": "Croatia",
        "isdCode": "+385",
        "isoCode": "HR"
    },
    {
        "name": "Cuba",
        "isdCode": "+53",
        "isoCode": "CU"
    },
    {
        "name": "Cyprus",
        "isdCode": "+357",
        "isoCode": "CY"
    },
    {
        "name": "Czech Republic",
        "isdCode": "+420",
        "isoCode": "CZ"
    },
    {
        "name": "Denmark",
        "isdCode": "+45",
        "isoCode": "DK"
    },
    {
        "name": "Djibouti",
        "isdCode": "+253",
        "isoCode": "DJ"
    },
    {
        "name": "Dominica",
        "isdCode": "+1767",
        "isoCode": "DM"
    },
    {
        "name": "Dominican Republic",
        "isdCode": "+1849",
        "isoCode": "DO"
    },
    {
        "name": "Ecuador",
        "isdCode": "+593",
        "isoCode": "EC"
    },
    {
        "name": "Egypt",
        "isdCode": "+20",
        "isoCode": "EG"
    },
    {
        "name": "El Salvador",
        "isdCode": "+503",
        "isoCode": "SV"
    },
    {
        "name": "Equatorial Guinea",
        "isdCode": "+240",
        "isoCode": "GQ"
    },
    {
        "name": "Eritrea",
        "isdCode": "+291",
        "isoCode": "ER"
    },
    {
        "name": "Estonia",
        "isdCode": "+372",
        "isoCode": "EE"
    },
    {
        "name": "Ethiopia",
        "isdCode": "+251",
        "isoCode": "ET"
    },
    {
        "name": "Falkland Islands (Malvinas)",
        "isdCode": "+500",
        "isoCode": "FK"
    },
    {
        "name": "Faroe Islands",
        "isdCode": "+298",
        "isoCode": "FO"
    },
    {
        "name": "Fiji",
        "isdCode": "+679",
        "isoCode": "FJ"
    },
    {
        "name": "Finland",
        "isdCode": "+358",
        "isoCode": "FI"
    },
    {
        "name": "France",
        "isdCode": "+33",
        "isoCode": "FR"
    },
    {
        "name": "French Guiana",
        "isdCode": "+594",
        "isoCode": "GF"
    },
    {
        "name": "French Polynesia",
        "isdCode": "+689",
        "isoCode": "PF"
    },
    {
        "name": "Gabon",
        "isdCode": "+241",
        "isoCode": "GA"
    },
    {
        "name": "Gambia",
        "isdCode": "+220",
        "isoCode": "GM"
    },
    {
        "name": "Georgia",
        "isdCode": "+995",
        "isoCode": "GE"
    },
    {
        "name": "Germany",
        "isdCode": "+49",
        "isoCode": "DE"
    },
    {
        "name": "Ghana",
        "isdCode": "+233",
        "isoCode": "GH"
    },
    {
        "name": "Gibraltar",
        "isdCode": "+350",
        "isoCode": "GI"
    },
    {
        "name": "Greece",
        "isdCode": "+30",
        "isoCode": "GR"
    },
    {
        "name": "Greenland",
        "isdCode": "+299",
        "isoCode": "GL"
    },
    {
        "name": "Grenada",
        "isdCode": "+1473",
        "isoCode": "GD"
    },
    {
        "name": "Guadeloupe",
        "isdCode": "+590",
        "isoCode": "GP"
    },
    {
        "name": "Guam",
        "isdCode": "+1671",
        "isoCode": "GU"
    },
    {
        "name": "Guatemala",
        "isdCode": "+502",
        "isoCode": "GT"
    },
    {
        "name": "Guernsey",
        "isdCode": "+44",
        "isoCode": "GG"
    },
    {
        "name": "Guinea",
        "isdCode": "+224",
        "isoCode": "GN"
    },
    {
        "name": "Guinea-Bissau",
        "isdCode": "+245",
        "isoCode": "GW"
    },
    {
        "name": "Guyana",
        "isdCode": "+595",
        "isoCode": "GY"
    },
    {
        "name": "Haiti",
        "isdCode": "+509",
        "isoCode": "HT"
    },
    {
        "name": "Holy See (Vatican City State)",
        "isdCode": "+379",
        "isoCode": "VA"
    },
    {
        "name": "Honduras",
        "isdCode": "+504",
        "isoCode": "HN"
    },
    {
        "name": "Hong Kong",
        "isdCode": "+852",
        "isoCode": "HK"
    },
    {
        "name": "Hungary",
        "isdCode": "+36",
        "isoCode": "HU"
    },
    {
        "name": "Iceland",
        "isdCode": "+354",
        "isoCode": "IS"
    },
    {
        "name": "India",
        "isdCode": "+91",
        "isoCode": "IN"
    },
    {
        "name": "Indonesia",
        "isdCode": "+62",
        "isoCode": "ID"
    },
    {
        "name": "Iran, Islamic Republic of Persian Gulf",
        "isdCode": "+98",
        "isoCode": "IR"
    },
    {
        "name": "Iraq",
        "isdCode": "+964",
        "isoCode": "IQ"
    },
    {
        "name": "Ireland",
        "isdCode": "+353",
        "isoCode": "IE"
    },
    {
        "name": "Isle of Man",
        "isdCode": "+44",
        "isoCode": "IM"
    },
    {
        "name": "Israel",
        "isdCode": "+972",
        "isoCode": "IL"
    },
    {
        "name": "Italy",
        "isdCode": "+39",
        "isoCode": "IT"
    },
    {
        "name": "Jamaica",
        "isdCode": "+1876",
        "isoCode": "JM"
    },
    {
        "name": "Japan",
        "isdCode": "+81",
        "isoCode": "JP"
    },
    {
        "name": "Jersey",
        "isdCode": "+44",
        "isoCode": "JE"
    },
    {
        "name": "Jordan",
        "isdCode": "+962",
        "isoCode": "JO"
    },
    {
        "name": "Kazakhstan",
        "isdCode": "+77",
        "isoCode": "KZ"
    },
    {
        "name": "Kenya",
        "isdCode": "+254",
        "isoCode": "KE"
    },
    {
        "name": "Kiribati",
        "isdCode": "+686",
        "isoCode": "KI"
    },
    {
        "name": "Korea, Democratic People's Republic of Korea",
        "isdCode": "+850",
        "isoCode": "KP"
    },
    {
        "name": "Korea, Republic of South Korea",
        "isdCode": "+82",
        "isoCode": "KR"
    },
    {
        "name": "Kuwait",
        "isdCode": "+965",
        "isoCode": "KW"
    },
    {
        "name": "Kyrgyzstan",
        "isdCode": "+996",
        "isoCode": "KG"
    },
    {
        "name": "Laos",
        "isdCode": "+856",
        "isoCode": "LA"
    },
    {
        "name": "Latvia",
        "isdCode": "+371",
        "isoCode": "LV"
    },
    {
        "name": "Lebanon",
        "isdCode": "+961",
        "isoCode": "LB"
    },
    {
        "name": "Lesotho",
        "isdCode": "+266",
        "isoCode": "LS"
    },
    {
        "name": "Liberia",
        "isdCode": "+231",
        "isoCode": "LR"
    },
    {
        "name": "Libyan Arab Jamahiriya",
        "isdCode": "+218",
        "isoCode": "LY"
    },
    {
        "name": "Liechtenstein",
        "isdCode": "+423",
        "isoCode": "LI"
    },
    {
        "name": "Lithuania",
        "isdCode": "+370",
        "isoCode": "LT"
    },
    {
        "name": "Luxembourg",
        "isdCode": "+352",
        "isoCode": "LU"
    },
    {
        "name": "Macao",
        "isdCode": "+853",
        "isoCode": "MO"
    },
    {
        "name": "Macedonia",
        "isdCode": "+389",
        "isoCode": "MK"
    },
    {
        "name": "Madagascar",
        "isdCode": "+261",
        "isoCode": "MG"
    },
    {
        "name": "Malawi",
        "isdCode": "+265",
        "isoCode": "MW"
    },
    {
        "name": "Malaysia",
        "isdCode": "+60",
        "isoCode": "MY"
    },
    {
        "name": "Maldives",
        "isdCode": "+960",
        "isoCode": "MV"
    },
    {
        "name": "Mali",
        "isdCode": "+223",
        "isoCode": "ML"
    },
    {
        "name": "Malta",
        "isdCode": "+356",
        "isoCode": "MT"
    },
    {
        "name": "Marshall Islands",
        "isdCode": "+692",
        "isoCode": "MH"
    },
    {
        "name": "Martinique",
        "isdCode": "+596",
        "isoCode": "MQ"
    },
    {
        "name": "Mauritania",
        "isdCode": "+222",
        "isoCode": "MR"
    },
    {
        "name": "Mauritius",
        "isdCode": "+230",
        "isoCode": "MU"
    },
    {
        "name": "Mayotte",
        "isdCode": "+262",
        "isoCode": "YT"
    },
    {
        "name": "Mexico",
        "isdCode": "+52",
        "isoCode": "MX"
    },
    {
        "name": "Micronesia, Federated States of Micronesia",
        "isdCode": "+691",
        "isoCode": "FM"
    },
    {
        "name": "Moldova",
        "isdCode": "+373",
        "isoCode": "MD"
    },
    {
        "name": "Monaco",
        "isdCode": "+377",
        "isoCode": "MC"
    },
    {
        "name": "Mongolia",
        "isdCode": "+976",
        "isoCode": "MN"
    },
    {
        "name": "Montenegro",
        "isdCode": "+382",
        "isoCode": "ME"
    },
    {
        "name": "Montserrat",
        "isdCode": "+1664",
        "isoCode": "MS"
    },
    {
        "name": "Morocco",
        "isdCode": "+212",
        "isoCode": "MA"
    },
    {
        "name": "Mozambique",
        "isdCode": "+258",
        "isoCode": "MZ"
    },
    {
        "name": "Myanmar",
        "isdCode": "+95",
        "isoCode": "MM"
    },
    {
        "name": "Namibia",
        "isdCode": "+264",
        "isoCode": "NA"
    },
    {
        "name": "Nauru",
        "isdCode": "+674",
        "isoCode": "NR"
    },
    {
        "name": "Nepal",
        "isdCode": "+977",
        "isoCode": "NP"
    },
    {
        "name": "Netherlands",
        "isdCode": "+31",
        "isoCode": "NL"
    },
    {
        "name": "Netherlands Antilles",
        "isdCode": "+599",
        "isoCode": "AN"
    },
    {
        "name": "New Caledonia",
        "isdCode": "+687",
        "isoCode": "NC"
    },
    {
        "name": "New Zealand",
        "isdCode": "+64",
        "isoCode": "NZ"
    },
    {
        "name": "Nicaragua",
        "isdCode": "+505",
        "isoCode": "NI"
    },
    {
        "name": "Niger",
        "isdCode": "+227",
        "isoCode": "NE"
    },
    {
        "name": "Nigeria",
        "isdCode": "+234",
        "isoCode": "NG"
    },
    {
        "name": "Niue",
        "isdCode": "+683",
        "isoCode": "NU"
    },
    {
        "name": "Norfolk Island",
        "isdCode": "+672",
        "isoCode": "NF"
    },
    {
        "name": "Northern Mariana Islands",
        "isdCode": "+1670",
        "isoCode": "MP"
    },
    {
        "name": "Norway",
        "isdCode": "+47",
        "isoCode": "NO"
    },
    {
        "name": "Oman",
        "isdCode": "+968",
        "isoCode": "OM"
    },
    {
        "name": "Pakistan",
        "isdCode": "+92",
        "isoCode": "PK"
    },
    {
        "name": "Palau",
        "isdCode": "+680",
        "isoCode": "PW"
    },
    {
        "name": "Palestinian Territory, Occupied",
        "isdCode": "+970",
        "isoCode": "PS"
    },
    {
        "name": "Panama",
        "isdCode": "+507",
        "isoCode": "PA"
    },
    {
        "name": "Papua New Guinea",
        "isdCode": "+675",
        "isoCode": "PG"
    },
    {
        "name": "Paraguay",
        "isdCode": "+595",
        "isoCode": "PY"
    },
    {
        "name": "Peru",
        "isdCode": "+51",
        "isoCode": "PE"
    },
    {
        "name": "Philippines",
        "isdCode": "+63",
        "isoCode": "PH"
    },
    {
        "name": "Pitcairn",
        "isdCode": "+872",
        "isoCode": "PN"
    },
    {
        "name": "Poland",
        "isdCode": "+48",
        "isoCode": "PL"
    },
    {
        "name": "Portugal",
        "isdCode": "+351",
        "isoCode": "PT"
    },
    {
        "name": "Puerto Rico",
        "isdCode": "+1939",
        "isoCode": "PR"
    },
    {
        "name": "Qatar",
        "isdCode": "+974",
        "isoCode": "QA"
    },
    {
        "name": "Romania",
        "isdCode": "+40",
        "isoCode": "RO"
    },
    {
        "name": "Russia",
        "isdCode": "+7",
        "isoCode": "RU"
    },
    {
        "name": "Rwanda",
        "isdCode": "+250",
        "isoCode": "RW"
    },
    {
        "name": "Reunion",
        "isdCode": "+262",
        "isoCode": "RE"
    },
    {
        "name": "Saint Barthelemy",
        "isdCode": "+590",
        "isoCode": "BL"
    },
    {
        "name": "Saint Helena, Ascension and Tristan Da Cunha",
        "isdCode": "+290",
        "isoCode": "SH"
    },
    {
        "name": "Saint Kitts and Nevis",
        "isdCode": "+1869",
        "isoCode": "KN"
    },
    {
        "name": "Saint Lucia",
        "isdCode": "+1758",
        "isoCode": "LC"
    },
    {
        "name": "Saint Martin",
        "isdCode": "+590",
        "isoCode": "MF"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "isdCode": "+508",
        "isoCode": "PM"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "isdCode": "+1784",
        "isoCode": "VC"
    },
    {
        "name": "Samoa",
        "isdCode": "+685",
        "isoCode": "WS"
    },
    {
        "name": "San Marino",
        "isdCode": "+378",
        "isoCode": "SM"
    },
    {
        "name": "Sao Tome and Principe",
        "isdCode": "+239",
        "isoCode": "ST"
    },
    {
        "name": "Saudi Arabia",
        "isdCode": "+966",
        "isoCode": "SA"
    },
    {
        "name": "Senegal",
        "isdCode": "+221",
        "isoCode": "SN"
    },
    {
        "name": "Serbia",
        "isdCode": "+381",
        "isoCode": "RS"
    },
    {
        "name": "Seychelles",
        "isdCode": "+248",
        "isoCode": "SC"
    },
    {
        "name": "Sierra Leone",
        "isdCode": "+232",
        "isoCode": "SL"
    },
    {
        "name": "Singapore",
        "isdCode": "+65",
        "isoCode": "SG"
    },
    {
        "name": "Slovakia",
        "isdCode": "+421",
        "isoCode": "SK"
    },
    {
        "name": "Slovenia",
        "isdCode": "+386",
        "isoCode": "SI"
    },
    {
        "name": "Solomon Islands",
        "isdCode": "+677",
        "isoCode": "SB"
    },
    {
        "name": "Somalia",
        "isdCode": "+252",
        "isoCode": "SO"
    },
    {
        "name": "South Africa",
        "isdCode": "+27",
        "isoCode": "ZA"
    },
    {
        "name": "South Sudan",
        "isdCode": "+211",
        "isoCode": "SS"
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "isdCode": "+500",
        "isoCode": "GS"
    },
    {
        "name": "Spain",
        "isdCode": "+34",
        "isoCode": "ES"
    },
    {
        "name": "Sri Lanka",
        "isdCode": "+94",
        "isoCode": "LK"
    },
    {
        "name": "Sudan",
        "isdCode": "+249",
        "isoCode": "SD"
    },
    {
        "name": "Suriname",
        "isdCode": "+597",
        "isoCode": "SR"
    },
    {
        "name": "Svalbard and Jan Mayen",
        "isdCode": "+47",
        "isoCode": "SJ"
    },
    {
        "name": "Swaziland",
        "isdCode": "+268",
        "isoCode": "SZ"
    },
    {
        "name": "Sweden",
        "isdCode": "+46",
        "isoCode": "SE"
    },
    {
        "name": "Switzerland",
        "isdCode": "+41",
        "isoCode": "CH"
    },
    {
        "name": "Syrian Arab Republic",
        "isdCode": "+963",
        "isoCode": "SY"
    },
    {
        "name": "Taiwan",
        "isdCode": "+886",
        "isoCode": "TW"
    },
    {
        "name": "Tajikistan",
        "isdCode": "+992",
        "isoCode": "TJ"
    },
    {
        "name": "Tanzania, United Republic of Tanzania",
        "isdCode": "+255",
        "isoCode": "TZ"
    },
    {
        "name": "Thailand",
        "isdCode": "+66",
        "isoCode": "TH"
    },
    {
        "name": "Timor-Leste",
        "isdCode": "+670",
        "isoCode": "TL"
    },
    {
        "name": "Togo",
        "isdCode": "+228",
        "isoCode": "TG"
    },
    {
        "name": "Tokelau",
        "isdCode": "+690",
        "isoCode": "TK"
    },
    {
        "name": "Tonga",
        "isdCode": "+676",
        "isoCode": "TO"
    },
    {
        "name": "Trinidad and Tobago",
        "isdCode": "+1868",
        "isoCode": "TT"
    },
    {
        "name": "Tunisia",
        "isdCode": "+216",
        "isoCode": "TN"
    },
    {
        "name": "Turkey",
        "isdCode": "+90",
        "isoCode": "TR"
    },
    {
        "name": "Turkmenistan",
        "isdCode": "+993",
        "isoCode": "TM"
    },
    {
        "name": "Turks and Caicos Islands",
        "isdCode": "+1649",
        "isoCode": "TC"
    },
    {
        "name": "Tuvalu",
        "isdCode": "+688",
        "isoCode": "TV"
    },
    {
        "name": "Uganda",
        "isdCode": "+256",
        "isoCode": "UG"
    },
    {
        "name": "Ukraine",
        "isdCode": "+380",
        "isoCode": "UA"
    },
    {
        "name": "United Arab Emirates",
        "isdCode": "+971",
        "isoCode": "AE"
    },
    {
        "name": "United Kingdom",
        "isdCode": "+44",
        "isoCode": "GB"
    },
    {
        "name": "United States",
        "isdCode": "+1",
        "isoCode": "US"
    },
    {
        "name": "Uruguay",
        "isdCode": "+598",
        "isoCode": "UY"
    },
    {
        "name": "Uzbekistan",
        "isdCode": "+998",
        "isoCode": "UZ"
    },
    {
        "name": "Vanuatu",
        "isdCode": "+678",
        "isoCode": "VU"
    },
    {
        "name": "Venezuela, Bolivarian Republic of Venezuela",
        "isdCode": "+58",
        "isoCode": "VE"
    },
    {
        "name": "Vietnam",
        "isdCode": "+84",
        "isoCode": "VN"
    },
    {
        "name": "Virgin Islands, British",
        "isdCode": "+1284",
        "isoCode": "VG"
    },
    {
        "name": "Virgin Islands, U.S.",
        "isdCode": "+1340",
        "isoCode": "VI"
    },
    {
        "name": "Wallis and Futuna",
        "isdCode": "+681",
        "isoCode": "WF"
    },
    {
        "name": "Yemen",
        "isdCode": "+967",
        "isoCode": "YE"
    },
    {
        "name": "Zambia",
        "isdCode": "+260",
        "isoCode": "ZM"
    },
    {
        "name": "Zimbabwe",
        "isdCode": "+263",
        "isoCode": "ZW"
    }
];

export default COUNTRIES;