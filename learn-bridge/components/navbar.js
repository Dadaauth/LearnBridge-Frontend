"use client"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import AddIcon from '@mui/icons-material/Add';
import { Avatar, Badge } from '@nextui-org/react';
import {
    Dropdown,
    DropdownItem,
    DropdownTrigger,
    DropdownMenu,
} from '@nextui-org/react';

import styles from './navbar.module.css';

export default function NavBar() {
    return (
        <>
            <Navbar
                // shouldHideOnScroll
                classNames={{
                    base: "",
                    wrapper: "px-5 max-w-full",
                    brand: "max-w-[30%]"
                }}
            >
                <MenuIcon />
                <NavbarBrand className=''>
                    <p>LearnBridge</p>
                </NavbarBrand>
                <NavbarContent className='hidden sm:flex ' justify='center'>
                    <Input
                        type='search'
                        color='default'
                        placeholder='Search'
                        variant='bordered'
                        radius='lg'
                        className='w-96 max-w-96'
                        // value={searchValue}
                        // onValueChange={setSearchValue}
                        // onKeyDown={(e) => onSearchKeyDown(e)}
                        endContent={
                            <SearchIcon
                                className='cursor-pointer'
                            />
                        }
                    />
                </NavbarContent>
                <NavbarContent justify='end'>
                    <NavbarItem>
                        <AddIcon className='cursor-pointer' />
                    </NavbarItem>
                    <NavbarItem>
                        <Badge content="9+" color='danger'>
                            <NotificationsNoneRoundedIcon className='cursor-pointer' />
                        </Badge>
                    </NavbarItem>
                    <NavbarItem>
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Avatar
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                    name="A User"
                                    size="sm"
                                    isBordered
                                    as="button"
                                    className="transition-transform"
                                    color="primary"
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat">
                                <DropdownItem key="profile" className="h-14 gap-2">
                                    <p className="font-semibold">Signed in as</p>
                                    <p className="font-semibold">zoey@example.com</p>
                                </DropdownItem>
                                <DropdownItem key="settings">My Settings</DropdownItem>
                                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                                <DropdownItem key="analytics">Analytics</DropdownItem>
                                <DropdownItem key="system">System</DropdownItem>
                                <DropdownItem key="configurations">Configurations</DropdownItem>
                                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                                <DropdownItem key="logout" color="danger">
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );
}
