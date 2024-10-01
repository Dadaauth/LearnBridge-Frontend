"use client"
import { useState } from 'react';
import { Button, Input, Textarea } from "@nextui-org/react";
import FileUploadIcon from '@mui/icons-material/FileUpload';



import ProtectedRoute from '../protected';
import SideBar from "../sidebar";
import upload from "./upload";

export default function Page() {
    const [formData, setFormData] = useState({
        "video_file": null,
        "title": null,
        "description": null,
        "thumbnail": null,
    });

    function handleChange(e) {
        const { name, value, files } = e.target;
        console.log(name, value, files);
        if (name === 'video_file' || name === 'thumbnail') {
            setFormData({
                ...formData,
                [name]: files[0],
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    }

    function handleVideoUpload(e) {
        e.preventDefault();
        
        const formDt = new FormData();
        for (let key in formData) formDt.append(key, formData[key]);        
        upload(formDt);
    }
    return (
        <ProtectedRoute>
            <SideBar>
                <h3 className='mb-10 font-bold text-lg'>Upload a New Video <FileUploadIcon /> </h3>
                <form onSubmit={handleVideoUpload} encType="multipart/form-data">
                    <div className='flex flex-col gap-4 max-w-[300px]'>
                        <Input
                            type='file'
                            name='video_file'
                            label="Video File"
                            onChange={handleChange}
                        />
                        <Input
                            type='text'
                            name='title'
                            placeholder='Title'
                            label="Video Title"
                            onChange={handleChange}
                        />
                        <Textarea
                            name='description'
                            placeholder='Description'
                            label="Video description"
                            onChange={handleChange}
                        />
                        <Input
                            type='file'
                            name='thumbnail'
                            label="Thumbnail"
                            onChange={handleChange}
                        />
                        {/* <Input
                            type="select"
                            name="course_id"
                            placeholder='Select Course'
                            label="Select Course"
                        /> */}
                        <Button type='submit'>Submit</Button>
                    </div>
                </form>
            </SideBar>
        </ProtectedRoute>
    );
}