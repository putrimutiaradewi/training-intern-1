import React from "react";
import { IconType } from "react-icons";
import {
  HiOutlineArrowCircleUp,
  HiOutlineArrowCircleDown,
  HiOutlineDownload,
} from "react-icons/hi";
import SearchButton from "../components/SearchButton";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

type DashboardBoxData = {
  key: string;
  title: string;
  value: string;
  description: string;
  className?: string;
  icon?: IconType;
};

const dummyData: DashboardBoxData[] = [
  {
    key: "newProject",
    title: "NEW PROJECT",
    value: "94",
    description: "14% INCREASE",
    className:
      "bg-[#2399F1] text-white border-none rounded-md shadow-md shadow-[#2399F1]  ",
    icon: HiOutlineArrowCircleUp,
  },
  {
    key: "teamMember",
    title: "TEAM MEMBERS",
    value: "5,590",
    description: "4% INCREASE",
    className:
      "bg-[#66B92E] text-white border-none rounded-md shadow-md shadow-[#66B92E]",
    icon: HiOutlineArrowCircleUp,
  },
  {
    key: "totalBudget",
    title: "TOTAL BUDGET",
    value: "80,890",
    description: "21% DECREASE",
    className:
      "bg-[#DA932C] text-white border-none rounded-md shadow-md shadow-[#DA932C]",
    icon: HiOutlineArrowCircleDown,
  },
  {
    key: "newCustomers",
    title: "NEW CUSTOMERS",
    value: "3",
    description: "13% DECREASE",
    className:
      "bg-[#D65B4A] text-white border-none rounded-md shadow-md shadow-[#D65B4A]",
    icon: HiOutlineArrowCircleDown,
  },
];

type DashboardBoxProps = { data: DashboardBoxData };
interface Project {
  id: number;
  name: string;
  deadline: string;
  leader: string;
  team: string[];
  budget: string;
  status: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "New Dashboard",
    deadline: "17th Oct,15",
    leader: "Myrtle Erickson",
    team: ["UK Design Team"],
    budget: "$4,670",
    status: "Early Stages",
  },
  {
    id: 2,
    name: "Landing Page",
    deadline: "2nd Jan, 16",
    leader: "Joseph Mullins",
    team: ["External Company"],
    budget: "$5,740",
    status: " QA",
  },
  {
    id: 3,
    name: "UX Consulting",
    deadline: "1st Apr, 16",
    leader: "Anne Freeman",
    team: ["UX Warriors"],
    budget: "$4,000",
    status: "Waiting For Client",
  },
  {
    id: 4,
    name: "CUstommer Care Interface",
    deadline: "23th Dec, 15",
    leader: "Marcus Morgan",
    team: ["Dribble Research"],
    budget: "$2,500",
    status: "Finishing",
  },
  {
    id: 5,
    name: "Mongo DB Integration",
    deadline: "10th Apr, 16",
    leader: "Harriest Revees",
    team: ["SF Dev Team"],
    budget: "$800",
    status: "Early Stagges",
  },
  {
    id: 6,
    name: "Small Design Call",
    deadline: "1st Mar, 16",
    leader: "Susan Stewart",
    team: ["UX Design Team"],
    budget: "$390",
    status: "Finishing",
  },
  {
    id: 7,
    name: "UX Consulting",
    deadline: "1st Jan , 16",
    leader: "Chad Sandoval",
    team: ["Moscow Office"],
    budget: "$2,180",
    status: "Designing",
  },
];

const DashboardBox: React.FC<DashboardBoxProps> = ({ data }) => {
  return (
    <div
      className={`border h-full border-gray-300 p-5 ${data.className || ""}`}
    >
      <div className="flex item-center justify-between">
        <h2 className="text-1xl font-semibold">{data.title}</h2>
        {data.icon && <data.icon className="text-4xl opacity-25 " />}
      </div>
      <p className="text-3xl font-bold ">{data.value}</p>
      <p className="text-white text-xs border-t font-light">
        {data.description}
      </p>
    </div>
  );
};

const HomePages: React.FC = () => {
  return (
    <div className="bg-[#1B2431] flex h-full gap-5 flex-col overflow-auto items-center">
      <div className="bg-[#273142] border-none w-full p-2 items-center flex justify-between">
        <div className="flex items-center gap-2 ">
          <div className=" text-nowrap text-md ml-7 font-semibold text-white flex flex-row-reverse">
            Projects Result{" "}
          </div>
          <div className=" w-full  text-xs text-[#848C96]">| Dashboard </div>
        </div>
        <div className="flex items-center gap-2">
          <SearchButton
            onSearch={(query) => console.log("Searching for:", query)}
          />
        </div>
      </div>
      <div className=" w-[70vw] justify-center ">
        <div className="gap-4 grid items-center justify-center grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {dummyData.map((item, index) => (
            <DashboardBox key={index} data={item} />
          ))}
        </div>
      </div>
      <div className="bg-[#273142] w-[70vw] rounded-md">
        <div className="items-center flex justify-between">
          <div className="flex items-center gap-2 p-3">
            <div className=" text-nowrap text-xl ml-7 font-bold text-white flex flex-row-reverse">
              Ongoing Projects{" "}
            </div>
            <div className=" w-full  text-xs text-[#848C96]">
              | 32 Projects{" "}
            </div>
          </div>
          <div className=" text-xl text-white mr-8">
            <HiOutlineDownload />
          </div>
        </div>
        <div className="container mx-auto p-2">
          <table className="min-w-full bg-[#273142] border-[#627084] text-white">
            <thead>
              <tr className="bg-[#313D4F] text-[#627084] ">
                <th className="py-2 px-4  ">Project</th>
                <th className="py-2 px-4 ">Deadline</th>
                <th className="py-2 px-4 ">Leader & Team</th>
                <th className="py-2 px-4 ">Budget</th>
                <th className="py-2 px-4 ">Status</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-[#627084] text-white">
                  <td className="py-3 border-b border-[#728195] font-semibold text-[14px] text-white ">
                    {project.name}
                  </td>
                  <td className="border-b py-3 border-[#728195] font-semibold text-[12px] text-white">
                    {project.deadline}
                  </td>
                  <td className="border-b py-3 border-[#728195] font-md text-[14px] text-white">
                    <strong>{project.leader}</strong>
                    <ul className="font-base text-[10px] text-[#728195]">
                      {project.team.map((member, index) => (
                        <li key={index}>{member}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="border-b py-3 border-[#728195] font-semibold text-[12px]">
                    {project.budget}
                  </td>
                  <td className="border-b py-3 border-[#728195] font-semibold text-[12px]">
                    {project.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-wrap gap-12">
        <button className="bg-[#313D4F] text-4xl rounded-sm text-[#728195]">
          <GoChevronLeft />
        </button>
        <div className=" text-[#848C96] text-[12px] items-center p-2">
          Page 2 of 3
        </div>
        <button className="bg-[#313D4F] text-4xl rounded-sm text-[#728195]">
          <GoChevronRight />
        </button>
      </div>
    </div>
  );
};

export default HomePages;
