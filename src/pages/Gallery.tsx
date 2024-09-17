import React from "react";

const images = [
  "https://st.depositphotos.com/1743476/55098/i/1600/depositphotos_550989304-stock-photo-smiling-young-boy-lying-hospital.jpg",
  "https://bi.im-g.pl/im/e6/5e/18/z25551078AMP,Noga-w-gipsie.jpg",
  "https://pliki.infodent24.pl/i/13/01/73/130173_r0_940.jpg",
  "http://www.izykowski.com.pl/wp-content/uploads/2014/03/znieczulenie_doroslych_1-300x225.jpg",
  "https://rankomat.pl/thumbs/header_bg/2020-06/badanie-rentgenem.jpg",
  "https://pliki2.portalsamorzadowy.pl/i/16/78/57/167857_r0_940.jpg",
  "https://alfa-clinic.pl/wp-content/uploads/2023/12/Alfa_Clinic_budynek-1024x683.webp",
  "https://jaw.pl/static/files/gallery/167/1559642_62487.jpg",
  "https://www.prawo.pl/gfx/prawopl/_thumbs/pl/wkdokumenty/000/526/430/1/pielegniarka_00010_istock,nICD62SaolTLo7bXW5mZ.jpg",
  "https://images.pb.pl/filtered/713801d1-a126-40ba-a6dc-1aa2a7c66e53/3f46c8d9-fb85-53f1-831b-21973596e9ec_w_830.jpg",
  "https://precisdent.pl/wp-content/uploads/2023/07/koferdam-dentystczny.webp",
  "https://zw.pl/multimedia/foto/icon_9f3f63ec524134ed7933a31be5601fc2.jpg",
  "https://novmed.com.pl/wp-content/uploads/2023/03/ile-odszkodowania-za-zlamana-noge-w-kostce-900x600.jpg",
  "https://static.ktomalek.pl/blog/zdjecie/aparat-ortodontyczny.jpg",
  "https://denticon.pl/wp-content/uploads/2023/06/caroline-lm-8BkF0sTC6Uo-unsplash-1024x768.jpg",
  "https://przychodniadental.pl/images/BLOG/przebieg-leczenia-zebow-pod-narkoza.webp",
  "https://endo-klinika.pl/wp-content/uploads/2020/12/Leczenie-zebow-u-dzieci-podczas-pandemii-koronawirusa-endo-klinika-lodz.jpg",
];

const Gallery: React.FC = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Galeria</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            >
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
