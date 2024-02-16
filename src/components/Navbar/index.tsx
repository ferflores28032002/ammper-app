import Link from "next/link";

import { MaxWidthWrapper } from "..";

import { ModeToggle } from "../ModeToggle";
import { Icons } from "@/icons";

const Navbar = () => {
  return (
    <div className="sticky z-50 top-0 inset-x-0 h-16 bg-white dark:bg-gray-950">
      <header className="relative">
        <MaxWidthWrapper className="border-b border-y-gray-200 dark:border-y-gray-700">
          <div className="flex h-16 justify-between items-center">
            <div className="ml-4 flex  lg:ml-0">
              <Link href="/" id="cypress-btn-home-redirect">
                <Icons.logo className="h-10 w-10" />
              </Link>
            </div>
            <div>
              <ModeToggle />
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
