import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader" />
      <p
        style={{
          fontSize: 14,
          marginTop: 40,
        }}
        className="text-gray-700 dark:text-gray-200"  
      >
        {progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."}{" "}
      </p>
    </Html>
  );
};

export default CanvasLoader;
