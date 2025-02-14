"use client";
import React, { useEffect, useRef } from "react";

import * as LR from "@uploadcare/blocks";
import { useRouter } from "next/navigation";

type Props = {
  onUpload: (e: string) => any;
};

LR.registerBlocks(LR);

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();
  const ctxProviderRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const fileUrl = e.detail.cdnUrl;
      if (fileUrl) {
        await onUpload(fileUrl);
        router.refresh();
      }
    };

    const ctxProvider = ctxProviderRef.current;
    if (ctxProvider) {
      ctxProvider.addEventListener("file-upload-success", handleUpload);
    }

    return () => {
      if (ctxProvider) {
        ctxProvider.removeEventListener("file-upload-success", handleUpload);
      }
    };
  }, [onUpload, router]);

  return (
    <div>
      <lr-config ctx-name="my-uploader" pubkey="3eb0378777e9ed1fee00" />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css"
      />

      <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={(el) => {
          if (el) ctxProviderRef.current = el;
        }}
      />
    </div>
  );
};

export default UploadCareButton;
