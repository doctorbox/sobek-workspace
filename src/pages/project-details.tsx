import { NavigationBar } from "../components/navigation/bar";
import { ProjectOverview } from "../components/project/overview";
import { StagesView } from "@/components/stage/view";

const ProjectDetails = () => {
  return (
    <div>
      <NavigationBar />
      <ProjectOverview />
      <StagesView />
    </div>
  );
};

export default ProjectDetails;
