import { Avatar } from "../avatar";
import Image from "next/image";
import { Breadcrumb } from "./breadcrumb";
import { useRouter } from "next/router";

export const NavigationBar = () => {
  const router = useRouter();
  const showBreadcrumb = router.pathname.startsWith("/session/[levelId]");

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-3 w-full bg-white  max-md:px-4 max-md:py-3 max-sm:px-4 max-sm:py-2">
        <div className="w-[100px]">
          <Image
            src="/logo-dark.svg"
            alt="Company Logo"
            width={40}
            height={40}
            className="object-contain w-10 h-10 aspect-square max-sm:w-8 max-sm:h-8"
          />
        </div>

        {showBreadcrumb && <Breadcrumb />}
        <div className="flex gap-8 items-center max-sm:gap-6 w-[100px]">
          <Image
            src="/file-input.svg"
            alt="Notification Icon"
            width={24}
            height={24}
            className="object-contain w-6 h-6 cursor-pointer aspect-square"
          />
          <Avatar initials="EP" />
        </div>
      </nav>
    </>
  );
};
