import { useState, useEffect } from "react";
import axios from "axios";

const useSpotifyRefresh = () => {
  const [userRefreshed, setUserRefreshed] = useState(false);
  const [freshAccessToken, setFreshAccessToken] = useState(undefined);
  useEffect(() => {
    const refresh_token = localStorage.getItem("spotify_refresh");
    axios
      .get("https://musicplug-backend.onrender.com/spotify/refresh_token", {
        params: { refresh_token },
      })
      .then((res) => {
        localStorage.setItem("spotify_access", res.data.access_token);
        setUserRefreshed(true);
        setFreshAccessToken(res.data.access_token);
        return res.data.access_token;
      })
      .catch((err) => console.log(err));
  }, []);

  return { userRefreshed, freshAccessToken };
};

export default useSpotifyRefresh;
