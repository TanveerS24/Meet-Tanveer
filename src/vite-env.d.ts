/// <reference types="vite/client" />
/// <reference types="@react-three/fiber" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string;
  readonly VITE_ANALYTICS_ENDPOINT?: string;
  readonly VITE_OWNER_PASSCODE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// React Three Fiber JSX Intrinsic Elements type declaration for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      torusKnotGeometry: any;
      meshStandardMaterial: any;
      primitive: any;
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
    }
  }
}
