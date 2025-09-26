import Listcomp from "../components/list-comp";
import Sidebar from "../components/sidebar";

const List = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Listcomp />
    </div>
  );
};

export default List;
