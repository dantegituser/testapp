export interface Persona{
  status: string;
  supplier: string;
  month: string;
  phase: string;
  order: number;
  amount: number;
}
export const datos: Persona[] = [
  {
    status: "Active",
  supplier: "Shanai Armitage",
  month: "January",
  phase: "Deployment",
  order: Math.trunc(Math.random() * 60000),
  amount: 5100
  },
  {
    status: "Pending Approval",
  supplier: "Ramone Terry",
  month: "February",
  phase: "Development",
  order: Math.trunc(Math.random() * 60000),
  amount: 3600
  },
  {
    status: "Active",
  supplier: "Evie-Mae Hewitt",
  month: "April",
  phase: "Research",
  order: Math.trunc(Math.random() * 60000),
  amount: 3700
  },
  {
    status: "Waiting Compensation",
  supplier: "Rikki Wharton",
  month: "June",
  phase: "Development",
  order: Math.trunc(Math.random() * 60000),
  amount: 4800
  },
  {
    status: "Active",
  supplier: "Carla Ryder",
  month: "August",
  phase: "Research",
  order: Math.trunc(Math.random() * 60000),
  amount: 5900
  },
  {
    status: "Waiting Compensation",
  supplier: "Musa Holmes",
  month: "August",
  phase: "Deployment",
  order: Math.trunc(Math.random() * 60000),
  amount: 3700
  },
  {
    status: "Pending Approval",
  supplier: "Veronica Houghton",
  month: "October",
  phase: "Development",
  order: Math.trunc(Math.random() * 60000),
  amount: 4500
  },
  {
    status: "Pending Approval",
  supplier: "Keely Mccullough",
  month: "March",
  phase: "Research",
  order: Math.trunc(Math.random() * 60000),
  amount: 4900
  },
  {
    status: "Active",
  supplier: "Ammarah Webber",
  month: "June",
  phase: "Development",
  order: Math.trunc(Math.random() * 60000),
  amount: 5200
  },
  {
    status: "Active",
  supplier: "Alison Daniel",
  month: "January",
  phase: "Research",
  order: Math.trunc(Math.random() * 60000),
  amount: 3600
  },
  {
    status: "Pending Approval",
  supplier: "Armand Reese",
  month: "August",
  phase: "Deployment",
  order: Math.trunc(Math.random() * 60000),
  amount: 5100
  },
]
