import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import headerImage from "../../assets/header-image.jpg";
import { ProductContext } from "../../Contexts/ProductContext";
import { Footer } from "../../Component/Footer/Footer";
import productImage from '../../assets/product.png'
import "./HomeStyle.css";

const Home = () => {
  const { getProducts, productState, filtersDispatch } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <header>
        <div className="header-img">
          <img src={headerImage} alt="vectorImage" />
        </div>
        <div className="header-body">
          <NavLink to="/products">
            <button
              onClick={() => getProducts()}
            >
              Explore Now
            </button>
          </NavLink>
        </div>
      </header>
      <section className="category-section">
        <div className="category-head">
          <h1>Dairy Products</h1>
        </div>
        <div className="category-container">
          {productState?.products?.map(
            ({ _id, name, images, categoryName, description }) => (
              <div
                key={_id}
                className="category-card"
                onClick={() => {
                  filtersDispatch({ type: "setClear", payload: "" });
                  filtersDispatch({
                    type: "setCategoryFilter",
                    payload: categoryName,
                  });
                  navigate("/products");
                }}
              >{images?.length > 0 ? <div className="category-image">
                <img src={images[0]} alt={name} />
              </div> : <div className="category-image">
                <img src={productImage} alt={name} />
              </div>}

                <div className="category-body">
                  <h1>{name}</h1>
                  <p>{description}</p>
                  {/* <button>
                    see Collection <BsArrowRight />
                  </button> */}
                </div>
              </div>
            )
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};
export { Home };
