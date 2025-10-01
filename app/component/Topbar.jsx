import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Person, Search, Chat, Notifications } from "@mui/icons-material";

export default function Topbar() {
  return (
    <header className="w-full h-[65px] font-semibold bg-[#1877f2]">
      <nav className="flex justify-between items-center text-white h-full w-full px-6">
        <Link href="/">
          <h2>TOMY</h2>
        </Link>
        <div className="w-[30vw] ">
          <div className="flex h-[40px] rounded-full bg-white px-4 items-center justify-center">
            <Search className="text-black" />
            <input
              type="text"
              placeholder="Search for friends, posts and videos"
              className="h-full w-full text-black focus:outline-none bg-transparent"
            />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-3 items-center text-white">
            <Link href="/">
              <h2>HOME</h2>
            </Link>
            <Link href="/profile">
              <h2>PROFILE</h2>
            </Link>
            <div className="flex gap-3 items-center text-white">
              <div className="relative cursor-pointer">
                <Person sx={{ fontSize: 32 }} />
                <span
                  className="text-xs flex items-center justify-center
absolute bg-[red] w-[15px] h-[15px] rounded-full -top-[5px] -right-[5px]"
                >
                  2
                </span>
              </div>
              <div className="relative cursor-pointer">
                <Chat />
                <span
                  className="text-xs flex items-center justify-center
absolute bg-[red] w-[15px] h-[15px] rounded-full -top-[5px] -right-[5px]"
                >
                  5
                </span>
              </div>
              <div className="relative cursor-pointer">
                <Notifications />
                <span
                  className="text-xs flex items-center justify-center
absolute bg-[red] w-[15px] h-[15px] rounded-full -top-[5px] -right-[5px]"
                >
                  4
                </span>
              </div>
              <Link href="/profile">
                <Image
                  src="/assets/team/girl.png"
                  alt="profile logo"
                  width={32}
                  height={32}
                  className="rounded-full object-cover ml-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

// import { headers } from "next/headers";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { Person, Search, Chat, Notifications, NotificationsActiveRounded, } from "@mui/icons-material";

// export default function Topbar() {
//   return (
//     <header className="w-full h-[65px] bg-[#1877F2]">
//       <nav className="flex justify-between items-center text-white">
//         <Link href="/">
//           <h2>TOMY</h2>
//         </Link>
//         <div className="w-[30vw]">
//           <div className="flex h[40px] rounded-full  bg-white px-4 items-center justify-self-center ">
//            <Search className="text-black"/>
//            <input
//            type="text"
//            placeholder="Search friends"
//            className="h-full w-full text-black focus:outline-none"
//            />
//           </div>
//         </div>

//         <div className="flex gap-6">
//           <div className="flex gap-3 items-center text-white">
//             <Link href='/profile'>
//             <h2>
//             HOME
//             </h2>
//             </Link>
//              <Link href='/profile'>
//             <h2>
//             PROFILE
//             </h2>
//             </Link>
//             <div className="flex gap-3 items-center text-white">
//             <div className="relative cursor-pointer">
//               <Person sx={ { fontSize: 32} }/>
//               <span className="tex-xs flex items-center justify-center
//               absolute bg-[red] w-[15px] h-[15px] rounded-full -top-[5px] -right-[5px]">
//                 2
//               </span>
//             </div>
//             <div className="relative cursor-pointer">
//               <Chat/>
//               <span className="tex-xs flex items-center justify-center
//               absolute bg-[red] w-[15px] h-[15px] rounded-full -top-[5px] -right-[5px]">
//                 5
//               </span>
//             </div>
//            <Link href="/profile">
//             </Link>
//             <div className="relative cursor-pointer">
//               <Notifications/>
//               <span className="tex-xs flex items-center justify-center
//               absolute bg-[red] w-[15px] h-[15px] rounded-full -top-[5px] -right-[5px]">
//                 4
//               </span>
//             </div>
//            <Link href="/profile">
//             <Image
//             src="/assets/team/girl.png"
//             alt="profile logo"
//             width={32}
//             height={32}
//             className="rounded-full object-cover ml-2"
//             />

//            </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }
