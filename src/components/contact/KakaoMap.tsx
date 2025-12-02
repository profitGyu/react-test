import { useTranslation } from "react-i18next";
import { Map, CustomOverlayMap, useKakaoLoader } from "react-kakao-maps-sdk";

const KakaoMap = () => {

  const { t } = useTranslation();

  // ⚠️ NOTICE: Replace 'YOUR_KAKAO_MAP_JS_API_KEY' with your actual Kakao Maps JavaScript API Key.
  // Without a valid key, the map will not load properly.
  if (!process.env.NEXT_PUBLIC_KAKAO_MAP_JS_API_KEY) {
    throw new Error('KAKAO_MAP_JS_API_KEY is not set');
  }

  const [loading, error] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_MAP_JS_API_KEY || '',
  });

  if (loading) return (
    <div className="flex size-full items-center justify-center rounded-xl bg-muted text-muted-foreground animate-pulse">
      {t('contact.kakao_map_loading')}
    </div>
  );

  if (error) return (
    <div className="flex size-full items-center justify-center rounded-xl bg-muted text-destructive p-4 text-center">
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
      <CustomOverlayMap
        position={{ lat: 37.5528, lng: 126.9227 }}
        yAnchor={2}
      >
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              padding: "10px 16px",
              backgroundColor: "#ffffff",
              color: "#1a1a1a",
              fontWeight: "700",
              fontSize: "14px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              whiteSpace: "nowrap",
              letterSpacing: "0.5px",
            }}
          >
            <span style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              backgroundColor: "#3b82f6",
              borderRadius: "50%",
              marginRight: "8px",
              verticalAlign: "middle",
            }} />
            ENGINEER1
          </div>
          <div
            style={{
              width: "2px",
              height: "8px",
              backgroundColor: "#6b7280",
              marginTop: "-1px",
            }}
          />
          <div
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#3b82f6",
              borderRadius: "50%",
              marginTop: "-6px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>
      </CustomOverlayMap>
    </Map>
  );
};

export default KakaoMap;

