import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import ArticleIcon from '@mui/icons-material/Article';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

import { Button, } from "@nextui-org/react";

export default function SideBar({ children }) {
    return (
        <div className="grid h-screen w-full pl-[53px]">
        <aside className="inset-y fixed left-0 z-20 flex h-full flex-col">
          <nav className="grid gap-1 p-1">
            <Button
              variant="light"
              className="rounded-lg flex flex-col justify-center gap-0 min-w-0 p-2 py-9"
              aria-label="Home"
              href="/"
            >
              <HomeIcon />
              {/* <HomeOutlinedIcon /> */}
              <p className='text-xs font-thin font-mono'>Home</p>
            </Button>

            <Button
              variant="light"
              className="rounded-lg flex flex-col justify-center gap-0 min-w-0 p-2 py-9"
              aria-label="Articles"
            >
              {/* <ArticleIcon /> */}
              <ArticleOutlinedIcon />
              <p className='text-xs font-thin font-mono'>Articles</p>
            </Button>

            <Button
              variant="light"
              className="rounded-lg flex flex-col justify-center gap-0 min-w-0 p-2 py-9"
              aria-label="Bridge"
              href="/bridge"
            >
              {/* <FolderCopyIcon /> */}
              <FolderCopyOutlinedIcon />
              <p className='text-xs font-thin font-mono'>Bridge</p>
            </Button>

            <Button
              variant="light"
              className="rounded-lg flex flex-col justify-center gap-0 min-w-0 p-2 py-9"
              aria-label="Bridge"
            >
              {/* <PeopleAltIcon /> */}
              <PeopleAltOutlinedIcon />
              <p className='text-xs font-thin font-mono'>Peers</p>
            </Button>

          </nav>
        </aside>
        <div className='items-center mx-12 my-8'>
          {children}
        </div>
      </div>
    );
}