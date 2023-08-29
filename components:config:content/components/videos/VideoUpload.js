import { useState } from 'react';

function VideoUpload() {
  const [video, setVideo] = useState(null);

  const onFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };

  const onUpload = async () => {
    const formData = new FormData();
    formData.append('video', video);

    try {
      console.log('Video formData to be sent:', formData);
      alert('Video uploaded! (Check the console for formData)');
    } catch (error) {
      console.error('Error uploading the video:', error);
    }
  };

  return (
    <div className="p-4 mb-8 bg-white shadow-md rounded-xl">
      <h3 className="mb-4 text-xl font-semibold">Upload a Video</h3>
      <div className="flex gap-4">
        <input className="border p-2 rounded-md" type="file" accept="video/*" onChange={onFileChange} />
        <button onClick={onUpload} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-200">
          Upload Video
        </button>
      </div>
    </div>
  );
}

export default VideoUpload;
