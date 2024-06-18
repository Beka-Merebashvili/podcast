import { podcastData } from "@/constants";
import PodcastCard from "../../components/PodcastCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
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
