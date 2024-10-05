import { VIDEOS } from "@/videos";
import { YoutubeCard } from "./YoutubeCard";

export const  VideoGrid=()=>{
    return <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video=><div className="p-2">
            <YoutubeCard video={video}/></div> )}
    </div>
}