import React from "react";
import { getImages } from "../api/getImages";
import Spinner from "@/components/Spinner";

const Gallery: React.FC = () => {
  const { data, isLoading } = getImages();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="bg-[#F5F5F5] min-h-screen py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Galeria</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data?.records.map(({ title, id }) => (
            <li
              key={id}
              className="relative overflow-hidden rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            >
              <img
                src={`https://s3-${import.meta.env.VITE_AWS_REGION}.amazonaws.com/${import.meta.env.VITE_AWS_BUCKET_NAME}/${title}`}
                alt={`Gallery image ${id}`}
                className="w-full h-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
