import Image from "next/image";
import Sidebar from "./component/Sidebar/Sidebar";
import Topbar from "./component/Topbar";
import Feed from "./component/Sidebar/Feed";
import Rightbar from "./component/Sidebar/Rightbar";

export default function Home() {
  return (
<>
<Topbar/>
<main>
<Sidebar/>
<Feed/>
<Rightbar/>
</main>
</>

  );
}
