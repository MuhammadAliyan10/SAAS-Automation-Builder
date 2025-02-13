import ProfileForm from "@/components/Forms/ProfileForm";
import React from "react";

type Props = {};

export default function Settings({}: Props) {
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
        <ProfileForm />
      </div>
    </div>
  );
}
