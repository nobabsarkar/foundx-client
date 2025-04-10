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
import { useRouter } from "next/navigation";
import { logout } from "@/srcservices/AuthService";

const NavbarDropdown = () => {
  const router = useRouter();

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Avatar className="cursor-pointer" name="Joe" />
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
            onClick={() => logout()}
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
