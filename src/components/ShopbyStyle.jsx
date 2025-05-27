import "../css/shopbystyle.css";
import { useNavigate } from "react-router-dom";

const ShopbyStyle = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="shopbystyle">
        <div className="shopbystyle-title">
          <p>Shop by Style</p>
        </div>
        <div className="shopbystyle-cards">
          <img
            src="https://www.crocs.in/media/wysiwyg/Category_Clog_2.png?auto=webp&format=png&quality=85"
            alt=""
            onClick={() => navigate("/clogs")}
          />
          <img
            src="https://www.crocs.in/media/wysiwyg/Category_Flip_2.png?auto=webp&format=png&quality=85"
            alt=""
            onClick={() => navigate("/flips")}
          />
          <img
            src="https://www.crocs.in/media/wysiwyg/Category_Platform_2.png?auto=webp&format=png&quality=85"
            alt=""
          />
          <img
            src="https://www.crocs.in/media/wysiwyg/Category_Sandal.png?auto=webp&format=png&quality=85"
            alt=""
          />
          <img
            src="https://www.crocs.in/media/wysiwyg/Category_Wedge_2.png?auto=webp&format=png&quality=85"
            alt=""
          />
          <img
            src="https://www.crocs.in/media/wysiwyg/Category_Slide_2.png?auto=webp&format=png&quality=85"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default ShopbyStyle;
