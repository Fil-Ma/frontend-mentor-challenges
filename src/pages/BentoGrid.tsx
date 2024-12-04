import CreateAccountCard from "@components/BentoGrid/CreateAccountCard";
import GrowFollowersCard from "@components/BentoGrid/GrowFollowersCard";
import Layout from "@components/BentoGrid/Layout";
import MaintainScheduleCard from "@components/BentoGrid/MaintainScheduleCard";
import ManageAccountsCard from "@components/BentoGrid/ManageAccountsCard";
import ScheduleMediaCard from "@components/BentoGrid/ScheduleMediaCard";
import SocialMediaCard from "@components/BentoGrid/SocialMediaCard";
import { BentoCardItem } from "@components/BentoGrid/types";
import WriteContentCard from "@components/BentoGrid/WriteContentCard";

const cards: BentoCardItem[] = [
  {
    area: "create",
    Component: <CreateAccountCard />,
  },
  {
    area: "media",
    Component: <SocialMediaCard />,
  },
  {
    area: "schedule",
    Component: <ScheduleMediaCard />,
  },
  {
    area: "write",
    Component: <WriteContentCard />,
  },
  {
    area: "manage",
    Component: <ManageAccountsCard />,
  },
  {
    area: "maintain",
    Component: <MaintainScheduleCard />,
  },
  {
    area: "followers",
    Component: <GrowFollowersCard />,
  },
];

const BentoGrid = () => {
  return <Layout cards={cards} />;
};

export default BentoGrid;
