
import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationMapProps {
  address?: string;
}

const LocationMap = ({
  address = "Av. Reino de Valencia, 12, 46005 Valencia"
}: LocationMapProps) => {
  return (
    <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-md">
      {/* Static map image that looks like Google Maps */}
      <div className="absolute inset-0 bg-[#e5e3df] overflow-hidden">
        {/* Map grid lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Main roads */}
        <div className="absolute left-0 top-1/2 w-full h-8 bg-[#fffbe5] transform -translate-y-1/2"></div>
        <div className="absolute left-1/2 top-0 w-10 h-full bg-[#fffbe5] transform -translate-x-1/2"></div>
        
        {/* Secondary roads */}
        <div className="absolute left-0 top-1/4 w-full h-4 bg-[#f8f8f8] transform -translate-y-1/2"></div>
        <div className="absolute left-1/4 top-0 w-4 h-full bg-[#f8f8f8] transform -translate-x-1/2"></div>
        <div className="absolute left-0 top-3/4 w-full h-4 bg-[#f8f8f8] transform -translate-y-1/2"></div>
        <div className="absolute left-3/4 top-0 w-4 h-full bg-[#f8f8f8] transform -translate-x-1/2"></div>
        
        {/* Buildings - random blocks to simulate city blocks */}
        <div className="absolute left-[25%] top-[20%] w-[60px] h-[40px] bg-[#d9d9d9] rounded-sm"></div>
        <div className="absolute left-[35%] top-[20%] w-[40px] h-[40px] bg-[#d9d9d9] rounded-sm"></div>
        <div className="absolute left-[25%] top-[32%] w-[50px] h-[50px] bg-[#d9d9d9] rounded-sm"></div>
        <div className="absolute left-[60%] top-[25%] w-[70px] h-[40px] bg-[#d9d9d9] rounded-sm"></div>
        <div className="absolute left-[60%] top-[35%] w-[40px] h-[40px] bg-[#d9d9d9] rounded-sm"></div>
        <div className="absolute left-[20%] top-[60%] w-[50px] h-[60px] bg-[#d9d9d9] rounded-sm"></div>
        <div className="absolute left-[65%] top-[60%] w-[60px] h-[50px] bg-[#d9d9d9] rounded-sm"></div>
        
        {/* Parks - green areas */}
        <div className="absolute left-[20%] top-[45%] w-[80px] h-[60px] bg-[#c8d7c5] rounded-md"></div>
        <div className="absolute left-[70%] top-[70%] w-[60px] h-[60px] bg-[#c8d7c5] rounded-md"></div>
        
        {/* Valencia Fincas location - highlighted building */}
        <div className="absolute left-[48%] top-[48%] w-[70px] h-[50px] bg-[#ff6b35] rounded-sm shadow-md"></div>
        
        {/* Location pin with shadow */}
        <div className="absolute left-1/2 top-1/2 -ml-6 -mt-16 text-white filter drop-shadow-lg">
          <div className="relative">
            <div className="absolute -inset-1 bg-valencia-blue opacity-25 rounded-full blur-sm"></div>
            <div className="relative bg-valencia-blue text-white p-2 rounded-full shadow-lg">
              <MapPin className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Address popup in Google Maps style */}
      <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 bg-white py-2 px-4 rounded shadow-lg max-w-[80%]">
        <h3 className="font-medium text-sm">ValenciaFincas</h3>
        <p className="text-gray-600 text-xs">{address}</p>
      </div>
    </div>
  );
};

export default LocationMap;
