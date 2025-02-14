import React from "react";
import UploadCareButton from "./UploadCareButton";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type Props = {
  userImg: string | any;
  onDelete: any;
  onUpload: any;
};

function ProfilePicture({ userImg, onDelete, onUpload }: Props) {
  const router = useRouter();
  const onRemoveProfileImage = async () => {
    const res = await onDelete();
    if (res) {
      router.refresh();
    }
  };
  return (
    <div className="flex flex-col">
      <p className="text-lg text-white">Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        {userImg ? (
          <>
            <div className="relative h-full w-2/12">
              <Image src={userImg} fill alt="userImage" />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X />
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  );
}

export default ProfilePicture;
