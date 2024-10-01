"use client"
import {useState} from "react";
import {Button, Input} from "@nextui-org/react";
import {handleVideoUploadFormSubmit} from "../../../app/video/upload/actions";

export default function VideoUploadForm() {
    const [isInvalid, setIsInvalid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="flex flex-wrap ml-5 gap-3">
            <form action={(formData) => (handleVideoUploadFormSubmit(formData, setIsInvalid, setIsLoading))}>
                <Input
                    name="video_name"
                    placeholder="Video Name"
                    className="max-w-[500px]"
                    required={true}
                    errorMessage={"Please enter a video name"}
                />
                <Input
                    name="video"
                    className="max-w-[300px]"
                    type="file"
                    isInvalid={isInvalid}
                    errorMessage={"Please select a video file"}
                />
                <Button
                    className="px-8 py-3 text-white bg-blue-500 hover:bg-blue-600"
                    variant="solid"
                    size="md"
                    type="submit"
                    isLoading={isLoading}
                >
                    Upload Video
                </Button>
            </form>
        </div>
    );
}