import React from "react";
import Video from "@/app/_common/components/video"
import Detail from "@/app/_common/components/detail";
import Info from "@/app/_common/components/info";



export default function bandDetail ({params: {id},}: {params: {id :string};}) {
   
    return (
        <div>
        <div className="w-full h-full flex justify-center items-start flex-col gap-1">
        <Video />
        <div className="w-full aspect-[3/2] bg-gray-200">팀 사진</div>
        <Info />
        
        </div>
        </div>
    );
};