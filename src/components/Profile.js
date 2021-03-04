import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../atoms/userState";

function Profile() {
  const user = useRecoilValue(userState);
  return <div>I am the profile for {user?.name}</div>;
}

export default Profile;
