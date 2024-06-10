import { Languages } from "lucide-react";
import React from "react";

const ChangeLanguage: React.FC<{
  handleChangeLanguage: () => void;
}> = ({ handleChangeLanguage }) => {
  const [showChangeLanguage, setShowChangeLanguage] =
    React.useState<boolean>(false);
  const [clickCount, setClickCount] = React.useState<number>(0);
  const timeoutRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const handleBodyClick = () => {
      setClickCount((prevCount) => prevCount + 1);
    };

    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  React.useEffect(() => {
    if (clickCount === 3) {
      setShowChangeLanguage(!showChangeLanguage);
      setClickCount(0);
    }

    if (clickCount > 0 && clickCount < 3) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setClickCount(0);
      }, 1000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [clickCount, showChangeLanguage]);

  return (
    <div
      className={`fixed left-[50%] ${showChangeLanguage ? "top-3" : "-top-20"} z-10 translate-x-[-50%] transition-all duration-300`}
    >
      <div
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-AlmostWhite p-2 transition hover:scale-110"
        onClick={handleChangeLanguage}
      >
        <Languages color="#111" />

        {/* <div className="absolute top-16 w-24 rounded-md bg-AlmostWhite px-2 py-2 text-center text-AlmostBlack after:absolute after:left-1/2 after:top-[-5px] after:h-4 after:w-4 after:translate-x-[-50%] after:rotate-45 after:rounded after:bg-AlmostWhite after:content-['']">
          Click me
        </div> */}
      </div>
    </div>
  );
};

export default ChangeLanguage;
