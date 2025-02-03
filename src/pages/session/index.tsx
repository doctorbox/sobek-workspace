import { ProjectOverview } from "@/components/project/overview";
import { StagesView } from "@/components/stage/view";

const ProjectDetails = () => {
  return (
    <div>
      <ProjectOverview />
      <StagesView />
    </div>
  );
};

export default ProjectDetails;
