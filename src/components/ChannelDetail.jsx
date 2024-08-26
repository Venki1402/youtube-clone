import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard, Loading } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        // fetch channel details
        const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
        setChannelDetail(data?.items[0]);

        // fetch channel videos
        const videosData = await fetchFromAPI(
          `search?channelId=${id}&part=snippet%2Cid&order=date`
        );
        setVideos(videosData?.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchResults();
  }, [id]);

  if (!channelDetail || videos.length === 0) {
    return <Loading />;
  }

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background: "rgb(0,234,255)",
            background:
              "linear-gradient(90deg, rgba(0,234,255,1) 0%, rgba(244,20,51,1) 50%, rgba(235,240,7,1) 99%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
