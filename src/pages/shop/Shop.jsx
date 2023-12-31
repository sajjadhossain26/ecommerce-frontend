import React from "react";
import banner1 from "../../assets/images/shop/banner1.jpg";
import ShopPageSideBar from "../../../components/shopPageSidebar/ShopPageSideBar";
import Product from "../../../components/Product/Product";

const Shop = () => {
  return (
    <>
      <main class="main">
        {/* <!-- Start of Breadcrumb --> */}
        <nav class="breadcrumb-nav">
          <div class="container">
            <ul class="breadcrumb bb-no">
              <li>
                <a href="demo1.html">Home</a>
              </li>
              <li>
                <a href="shop-banner-sidebar.html">Shop</a>
              </li>
              <li>3 Columns</li>
            </ul>
          </div>
        </nav>
        {/* <!-- End of Breadcrumb --> */}

        {/* <!-- Start of Page Content --> */}
        <div class="page-content">
          <div class="container">
            {/* <!-- Start of Shop Banner --> */}
            <div
              class="shop-default-banner banner d-flex align-items-center mb-5 br-xs"
              style={{
                backgroundImage: `url(${banner1})`,
                backgroundColor: "#FFC74E",
              }}
            >
              <div class="banner-content">
                <h4 class="banner-subtitle font-weight-bold">
                  Accessories Collection
                </h4>
                <h3 class="banner-title text-white text-uppercase font-weight-bolder ls-normal">
                  Smart Wrist Watches
                </h3>
                <a
                  href="shop-banner-sidebar.html"
                  class="btn btn-dark btn-rounded btn-icon-right"
                >
                  Discover Now<i class="w-icon-long-arrow-right"></i>
                </a>
              </div>
            </div>
            {/* <!-- End of Shop Banner --> */}

            {/* <!-- Start of Shop Content --> */}
            <div class="shop-content row gutter-lg mb-10">
              {/* <!-- Start of Sidebar, Shop Sidebar --> */}
              <ShopPageSideBar />
              {/* <!-- End of Shop Sidebar --> */}

              {/* <!-- Start of Shop Main Content --> */}
              <div class="main-content">
                <nav class="toolbox sticky-toolbox sticky-content fix-top">
                  <div class="toolbox-left">
                    <a
                      href="#"
                      class="btn btn-primary btn-outline btn-rounded left-sidebar-toggle 
                                        btn-icon-left d-block d-lg-none"
                    >
                      <i class="w-icon-category"></i>
                      <span>Filters</span>
                    </a>
                    <div class="toolbox-item toolbox-sort select-box text-dark">
                      <label>Sort By :</label>
                      <select name="orderby" class="form-control">
                        <option value="default" selected="selected">
                          Default sorting
                        </option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by latest</option>
                        <option value="price-low">
                          Sort by pric: low to high
                        </option>
                        <option value="price-high">
                          Sort by price: high to low
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="toolbox-right">
                    <div class="toolbox-item toolbox-show select-box">
                      <select name="count" class="form-control">
                        <option value="9">Show 9</option>
                        <option value="12" selected="selected">
                          Show 12
                        </option>
                        <option value="24">Show 24</option>
                        <option value="36">Show 36</option>
                      </select>
                    </div>
                    <div class="toolbox-item toolbox-layout">
                      <a
                        href="shop-banner-sidebar.html"
                        class="icon-mode-grid btn-layout active"
                      >
                        <i class="w-icon-grid"></i>
                      </a>
                      <a
                        href="shop-list.html"
                        class="icon-mode-list btn-layout"
                      >
                        <i class="w-icon-list"></i>
                      </a>
                    </div>
                  </div>
                </nav>
                <div class="product-wrapper row cols-md-3 cols-sm-2 cols-2">
                  <Product />
                  <Product />
                  <Product />
                  <Product />
                  <Product />
                  <Product />
                </div>

                <div class="toolbox toolbox-pagination justify-content-between">
                  <p class="showing-info mb-2 mb-sm-0">
                    Showing<span>1-12 of 60</span>Products
                  </p>
                  <ul class="pagination">
                    <li class="prev disabled">
                      <a
                        href="#"
                        aria-label="Previous"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        <i class="w-icon-long-arrow-left"></i>Prev
                      </a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="next">
                      <a href="#" aria-label="Next">
                        Next<i class="w-icon-long-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- End of Shop Main Content --> */}
            </div>
            {/* <!-- End of Shop Content --> */}
          </div>
        </div>
        {/* <!-- End of Page Content --> */}
      </main>
    </>
  );
};

export default Shop;
