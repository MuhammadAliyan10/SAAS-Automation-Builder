import ProfileForm from "@/components/Forms/ProfileForm";
import React from "react";
import ProfilePicture from "./_components/ProfilePicture";
import { db } from "@/lib/db";

type Props = {};

export default function Settings({}: Props) {
  const removeProfileImage = async () => {
    // "use server";
    // const res = await db.automationUser.update({
    //   where: {
    //     clerkId: authuser.id,
    //   },
    //   data: {
    //     profileImage: null,
    //   },
    // });
    // return res;
  };
  const uploadProfileImage = async () => {};
  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 flex z-10 items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span>Setting</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        {/* <ProfilePicture
          onDelete={removeProfileImage}
          userImg={user?.profileImage || ""}
          onUpload={uploadProfileImage}
        /> */}
        <ProfileForm />
      </div>
    </div>
  );
}
