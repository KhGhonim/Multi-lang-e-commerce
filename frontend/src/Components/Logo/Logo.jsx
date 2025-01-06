import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Logo() {
  const { t } = useTranslation();

  return (
    <div className="flex w-full text-center items-center justify-center oswald-EC font-bold text-2xl">
      <Link to="/" className="text-xl lg:text-3xl">
        {t("Khaled's E-Commerce")}
      </Link>
    </div>
  );
}

export default Logo;
