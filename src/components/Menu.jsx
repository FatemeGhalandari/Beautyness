import React from "react";
import { useState, useRef } from "react";
import { close, menu } from "../assets";
import { NavLink } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import OutsideMenu from "./OutsideMenu";
export function Menu() {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const ref = useRef();
  OutsideMenu(ref, () => {
    setToggle();
  });
  return (
    <div className="flex items-center justify-center px-4 " ref={ref}>
      <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain"
        onClick={() => setToggle((prev) => !prev)}
      />
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } absolute top-14 left-0 w-full bg-[#FFF]`}
      >
        <Card className=" w-full py-4 sm:px-20 px-4 ">
          <div className="p-2">
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
            />
          </div>
          <List>
            <Accordion
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 1 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Pages
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="px-8">
                  <NavLink to="/Blog">
                    <ListItem>Blog</ListItem>
                  </NavLink>
                  <NavLink to="/About">
                    <ListItem>About</ListItem>
                  </NavLink>
                  <NavLink to="/Services">
                    <ListItem>Services</ListItem>
                  </NavLink>
                  <NavLink to="/Contact">
                    <ListItem>Contact</ListItem>
                  </NavLink>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 2 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <hr className="my-2 border-blue-gray-50" />
            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Inbox
              <ListItemSuffix>
                <Chip
                  value="14"
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Profile
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Settings
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </Card>
      </div>
    </div>
  );
}
