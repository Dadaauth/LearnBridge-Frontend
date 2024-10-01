"use client"
import FileUploadIcon from '@mui/icons-material/FileUpload';

import { Button, Image, Avatar } from "@nextui-org/react";
import Link from 'next/link';

import SideBar from "../sidebar";
import ProtectedRoute from '../protected';
import { getVideos } from "./utils";
import { useAuth } from "/lib/auth";
import { useEffect, useState } from 'react';

export default function Page() {
    const { loading, user }  = useAuth();
    const [videos, setVideos] = useState([]);

    useEffect(() => {

        const fetchVideos = async () => {
            if (!loading) setVideos(await getVideos(user.id));
        }

        fetchVideos();
    }, [loading]);

    return (
        <ProtectedRoute>
            <SideBar>
                <Button as={Link} href="/upload"><FileUploadIcon /> Upload</Button>
                <h3 className='text-lg my-4'>Your Videos</h3>

                <div className=' grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
                    {videos.map((vid, idx) => {
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
                                            className=''
                                            showFallback
                                        />
                                        </div>
                                        <div className=''>
                                            <p className='text-sm font-medium line-clamp-2'>{vid.title}</p>
                                            <p className='text-xs opacity-70'>{vid.status}</p>
                                            <p className='text-xs opacity-70'>{vid.views} • {vid.timeRange}</p>
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