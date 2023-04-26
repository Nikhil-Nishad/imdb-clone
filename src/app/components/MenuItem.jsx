import Link from "next/link";
import React from "react";

const MenuItem = ({ title, Icon, address }) => {
  return (
    <>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-500">
        <Icon className="text-2xl sm:hidden mx-2 " />
        <span className=" hidden my-2 sm:inline text-sm m-2 text-2.5xl hover:border-b-2 font-semibold ">
          {title}
        </span>
      </Link>
    </>
  );
};

export default MenuItem;
