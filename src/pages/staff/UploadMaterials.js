import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaUpload } from "react-icons/fa";

export default function UploadMaterials() {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((accepted) => {
    setFiles((f) => [...f, ...accepted]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  const upload = () => {
    console.log("Uploading", files);
    alert(`${files.length} file(s) uploaded`);
    setFiles([]);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Upload Course Materials</h2>
      <div
        {...getRootProps()}
        className={`p-12 border-2 border-dashed rounded-lg text-center ${
          isDragActive ? "border-indigo-500 bg-indigo-50" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        <FaUpload className="mx-auto text-4xl text-indigo-500 mb-4" />
        {isDragActive ? (
          <p className="text-indigo-700">Drop your files here…</p>
        ) : (
          <p>Drag & drop files, or click to select.</p>
        )}
      </div>

      {files.length > 0 && (
        <div className="bg-white rounded-lg shadow p-4 space-y-2">
          <h3 className="font-medium">{files.length} file(s) ready:</h3>
          <ul className="list-disc list-inside">
            {files.map((f) => (
              <li key={f.path}>{f.path}</li>
            ))}
          </ul>
          <button
            onClick={upload}
            className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Upload Now
          </button>
        </div>
      )}
    </div>
  );
}
