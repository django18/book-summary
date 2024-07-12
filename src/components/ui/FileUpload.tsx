"use client";

import React from "react";
import { useDropzone } from "react-dropzone";
import { Inbox } from "lucide-react";
import { uploadToS3 } from "@/lib/s3";

type Props = {};

const FileUpload = () => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    multiple: false,
    onDrop: async (accptedFiles) => {
      console.log({ accptedFiles });
      const file = accptedFiles[0];

      if (file.size > 10 * 1024 * 1025) {
        alert("Please uplaod smaller file");
        return;
      }
      try {
        const data = await uploadToS3(file);
        console.log({ data });
      } catch (error) {
        console.log({ error });
      }
    },
  });
  return (
    <div className="w-full bg-white rounded-xl mt-5 p-2 cursor-pointer">
      <div
        {...getRootProps()}
        className="border-dashed border-2 bg-gray flex flex-col items-center py-8 justify-center"
      >
        <input {...getInputProps()} />
        <Inbox className="w-10 h-10 text-blue-500" />
        <p>Drop PDF Here</p>
      </div>
    </div>
  );
};

export default FileUpload;
