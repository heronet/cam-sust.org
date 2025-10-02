// Schools data
export interface School {
  id: number;
  name: string;
  district: string;
  years: string[];
  latitude: number;
  longitude: number;
}

export const schools: School[] = [
  {
    id: 1,
    name: "SUST School and College",
    district: "Sylhet",
    years: ["2013"],
    latitude: 24.91649721625626,
    longitude: 91.83094062111402,
  },
  {
    id: 2,
    name: "Women's Model College",
    district: "Sylhet",
    years: ["2015", "2023"],
    latitude: 24.899557982981015,
    longitude: 91.8778506939985,
  },
  {
    id: 3,
    name: "Bhabanipur Haji Ibrahim Higher Secondary School",
    district: "Barisal",
    years: ["2017", "2018"],
    latitude: 22.854080497835614,
    longitude: 90.17544732462254,
  },
  {
    id: 4,
    name: "Sunamganj Govt. College",
    district: "Sunamganj",
    years: ["2019", "2020"],
    latitude: 25.064448692766334,
    longitude: 91.41473042469589,
  },
  {
    id: 5,
    name: "Annada Government High School",
    district: "Brahmanbaria",
    years: ["2019"],
    latitude: 23.977724835176883,
    longitude: 91.10728562465901,
  },
  {
    id: 6,
    name: "Govt. Model Girls High School",
    district: "Brahmanbaria",
    years: ["2019"],
    latitude: 24.01738667997163,
    longitude: 91.10210449083179,
  },
  {
    id: 7,
    name: "Sonargaon Kazi Fazlul Haque Women's College",
    district: "Narayanganj",
    years: ["2020"],
    latitude: 23.638574293869716,
    longitude: 90.5982709669749,
  },
  {
    id: 8,
    name: "Bridge Academy",
    district: "Sunamganj",
    years: ["2022"],
    latitude: 24.933407726945784,
    longitude: 91.67564539956528,
  },
  {
    id: 9,
    name: "Jaflong Valley Boarding School",
    district: "Sylhet",
    years: ["2022"],
    latitude: 25.173993185720295,
    longitude: 92.06975303819027,
  },
  {
    id: 10,
    name: "KIN School",
    district: "Sylhet",
    years: ["2017", "2019", "2023", "2025"],
    latitude: 24.916805121634983,
    longitude: 91.83079233818141,
  },
  {
    id: 11,
    name: "Reaz Public School",
    district: "Narayanganj",
    years: ["2023"],
    latitude: 23.634804143514447,
    longitude: 90.52334328232064,
  },
  {
    id: 12,
    name: "Sylhet Grammar School",
    district: "Sylhet",
    years: ["2023"],
    latitude: 24.898378279472773,
    longitude: 91.87833219399846,
  },
  {
    id: 13,
    name: "Jalalabad College",
    district: "Sylhet",
    years: ["2023"],
    latitude: 24.88802390009046,
    longitude: 91.88174335352623,
  },
  {
    id: 14,
    name: "Ragib-Rabeya Primary School, Tarapur",
    district: "Sylhet",
    years: ["2024"],
    latitude: 24.916796113972662,
    longitude: 91.85423796031222,
  },
  {
    id: 15,
    name: "Chanpur High School, Tahipur",
    district: "Sunamganj",
    years: ["2024"],
    latitude: 25.190451107200992,
    longitude: 91.22094981364614,
  },
];
