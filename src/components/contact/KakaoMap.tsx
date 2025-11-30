import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import { useTheme } from "@/components/theme-provider";
import { useTranslation } from "react-i18next";

const KakaoMap = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  
  // ⚠️ NOTICE: Replace 'YOUR_KAKAO_MAP_JS_API_KEY' with your actual Kakao Maps JavaScript API Key.
  // Without a valid key, the map will not load properly.
  // Get a key at https://developers.kakao.com/
  const [loading, error] = useKakaoLoader({
    appkey: "e1744d34b77ca698ecfc544a1661414c", 
  });

  if (loading) return (
    <div className="flex h-full w-full items-center justify-center rounded-xl bg-muted text-muted-foreground animate-pulse">
      {t('contact.kakao_map_loading')}
    </div>
  );
  
  if (error) return (
    <div className="flex h-full w-full items-center justify-center rounded-xl bg-muted text-destructive p-4 text-center">
        <div>
            <p className="font-bold mb-1">Map Load Error</p>
            <p className="text-sm">Please check your API Key.</p>
        </div>
    </div>
  );

  return (
    <Map
      // Coordinates for: Mapo-gu Wausan-ro 21-gil 20-11 (Approximate)
      center={{ lat: 37.5528, lng: 126.9227 }} 
      style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
      level={3}
    >
      <MapMarker position={{ lat: 37.5528, lng: 126.9227 }}>
        <div style={{ padding: "5px", color: "#000", fontWeight: "bold" }}>ENGINEER1</div>
      </MapMarker>
    </Map>
  );
};

export default KakaoMap;

