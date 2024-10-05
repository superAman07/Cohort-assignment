import { useRouter } from "next/router";
import type { Video } from "@/videos";
import { Line } from "./Line";

// function YoutubeCard(props:any){
export const YoutubeCard=({video}:{video:Video})=>{
    const router = useRouter();
    return (
    <div onClick={()=>{
        router.push("/video/1");
    }}>
        <div className="pt-5 pl-2 pr-2 cursor-pointer overflow-hidden rounded-xl">
            <div>
                <img src={video.photo}/>
                <Line progress={10}/> 
            </div>
            <div className="grid grid-cols-12 pt-3 ">
                <div className="col-span-1 h-9 w-9">
                    <img className="rounded-[100px]" src={video.thumb}/>
                </div>
                <div className="col-span-11 pl-5">
                    <div className="text-base">
                        {video.title}
                    </div>
                    <div className="text-gray-400 text-base">
                        {video.author}
                    </div>
                    <div className="text-gray-400 text-base">
                        {video.views} views | {video.timeStamp}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
// export default YoutubeCard;