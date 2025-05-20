/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/srcservices/AuthService";
import { useUser } from "@/srccontext/user.provider";
import { protectedRoutes } from "@/srcconstant";
import { useGetUser } from "@/srchooks/user.hook";

const NavbarDropdown = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { user, setIsLoading: userLoading } = useUser();

  const { data } = useGetUser();

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  const handleLogout = () => {
    logout();
    userLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Avatar className="cursor-pointer" src={data?.data?.profilePhoto} />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem
            onClick={() => handleNavigation("/profile")}
            key="profile"
          >
            Profile
          </DropdownItem>

          <DropdownItem
            onClick={() => handleNavigation("/profile/settings")}
            key="settings"
          >
            Settings
          </DropdownItem>

          <DropdownItem
            onClick={() => handleNavigation("/profile/create-post")}
            key="create-post"
          >
            Create Post
          </DropdownItem>

          <DropdownItem
            onClick={() => handleLogout()}
            key="logout"
            className="text-danger"
            color="danger"
          >
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavbarDropdown;
