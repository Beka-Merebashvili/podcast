"use client"

import { podcastData } from "@/constants";
import PodcastCard from "../../components/PodcastCard";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  // const tasks = useQuery(api.tasks.get);
  return (
    <div>
      <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>


      {/* <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {tasks?.map(({ _id, text }:any) => <div key={_id}>{text}</div>)}
    </div> */}


      <div className="podcast_grid">
        {podcastData.map(({ id, title, description, imgURL }) => (
          <PodcastCard
            key={id}
            imgUrl={imgURL}
            title={title}
            description={description}
            podcastId={id}
          />
        ))}
      </div>
    </div>
  );
}
