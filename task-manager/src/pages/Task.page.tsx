import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import Title from "../components/Title.component";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  function onBackClick() {
    navigate(-1);
  }

  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500px] mx-auto space-y-4">
        <div className="relative mb-6">
          <Button onClick={onBackClick}>
            <ChevronLeftIcon />
          </Button>
          <Title>Task Details</Title>
        </div>

        <div className="bg-slate-200 rounded-md shadow p-6">
          <h2 className="text-xl  font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
