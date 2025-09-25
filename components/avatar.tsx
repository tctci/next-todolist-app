"use client";

import { auth } from "@/auth";
import { Avatar } from "@heroui/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { Listbox, ListboxSection, ListboxItem } from "@heroui/listbox";
import { signOutWithGitHub } from "@/app/lib/actions";

export const UserAvatar = () => {
  function handleClickAction(key: React.Key) {
    switch (key) {
        case 'Logout':
            signOutWithGitHub()
            break;
    
        default:
            break;
    }
  }
  return (
    <Popover placement="right">
      <PopoverTrigger>
        <div className="w-full flex justify-center items-center">
          <Avatar
            size="md"
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-40">
        <Listbox
          aria-label="Actions"
          onAction={(key: React.Key) => handleClickAction(key)}
        >
          <ListboxItem key="Setting">Setting</ListboxItem>
          <ListboxItem key="Statistic">Statistic</ListboxItem>
          <ListboxItem key="Logout" className="text-danger" color="danger">
            Logout
          </ListboxItem>
        </Listbox>
      </PopoverContent>
    </Popover>
  );
};
