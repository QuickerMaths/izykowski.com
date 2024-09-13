import React from 'react';

const images = [
  'https://st.depositphotos.com/1743476/55098/i/1600/depositphotos_550989304-stock-photo-smiling-young-boy-lying-hospital.jpg',
  'https://bi.im-g.pl/im/e6/5e/18/z25551078AMP,Noga-w-gipsie.jpg',
  'https://pliki.infodent24.pl/i/13/01/73/130173_r0_940.jpg',
  'http://www.izykowski.com.pl/wp-content/uploads/2014/03/znieczulenie_doroslych_1-300x225.jpg',
  'https://rankomat.pl/thumbs/header_bg/2020-06/badanie-rentgenem.jpg',
  'https://pliki2.portalsamorzadowy.pl/i/16/78/57/167857_r0_940.jpg',
];

const Gallery: React.FC = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Galeria</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
