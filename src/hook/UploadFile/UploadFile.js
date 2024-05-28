import React, { useState, useRef } from 'react';

const UploadFile = () => {
  const [file, setFile] = useState("");
  const inputFile = useRef(null);

  const handleFileUpload = e => {
    const { files } = e.target;
    if (files && files.length) {
      const filename = files[0].name;

      var parts = filename.split(".");
      const fileType = parts[parts.length - 1];
      console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.

      setFile(files[0]);
    }
  };

  const onButtonClick = () => {
    inputFile.current.click();
  };
};

export default UploadFile;
