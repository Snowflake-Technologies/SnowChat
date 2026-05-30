import { ReactNode }
from "react";

import ServerSidebar
from "./ServerSidebar";

import ChannelSidebar
from "./ChannelSidebar";

interface Props {

  children: ReactNode;

}

export default function Layout({
  children
}: Props) {

  return (

    <div
      className="layout"
    >

      <ServerSidebar />

      <ChannelSidebar />

      <main>

        {children}

      </main>

    </div>

  );

}
