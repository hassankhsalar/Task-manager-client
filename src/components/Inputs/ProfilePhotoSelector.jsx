import React, { useRef, useState } from "react";

const ProfilePhotoSelector = ({ image, setImage }) => {


    const inputRef  = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if(file) {
            //update image state
            setImage(file);

            //generate preview of the url from the file
            const preview = URL.createObjectURL(file);
            setPreviewUrl(preview);
        }
    };


  return <div></div>;
};

export default ProfilePhotoSelector;
