"use client"
import { useEffect, useState } from "react";
import { Image, Avatar, } from "@nextui-org/react";
import Link from 'next/link';

import SideBar from "./sidebar";
import ProtectedRoute from "./protected";
import { fetchVideos } from "./utils";
import { useAuth } from "/lib/auth";

export default function Page() {
  const { loading } = useAuth();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {setVideos(await fetchVideos());})();
  }, [loading]);

  return (
    <ProtectedRoute>
      <SideBar>
        <div className=' grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
          {videos.map((vid) => {
            return (
              <Link href={`/watch?v_id=${vid.id}&ob_name=${vid.object_name}`} key={vid.id}>
                <div className='flex flex-col gap-3 cursor-pointer'>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_STATIC}/images/uploads/${vid.thumbnail}`}
                    alt={vid.title}
                    width={300}
                    height={170}
                    isZoomed
                  />
                  <div className='flex flex-row gap-3 max-w-[300px]'>
                    <div className=''>
                    <Avatar
                        src={`${process.env.NEXT_PUBLIC_API_STATIC}/images/uploads/${vid.user.picture}`}
                        name={`${vid.user.first_name} ${vid.user.last_name}`}
                        size='sm'
                        showFallback
                    />
                    </div>
                    <div className=''>
                      <p className='text-sm font-medium line-clamp-2'>{vid.title}</p>
                      <p className='text-xs opacity-70'>{vid.user.first_name} {vid.user.last_name}</p>
                      {/* <p className='text-xs opacity-70'>{vid.views} • {vid.timeRange}</p> */}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </SideBar>
    </ProtectedRoute>
  );
}
