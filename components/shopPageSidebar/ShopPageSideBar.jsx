import "./ShopPageSidebar.css";

const ShopPageSideBar = () => {
  return (
    <>
      <aside class="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
        {/* <!-- Start of Sidebar Overlay --> */}
        <div class="sidebar-overlay"></div>
        <a class="sidebar-close" href="#">
          <i class="close-icon"></i>
        </a>

        <div class="sidebar-content scrollable">
          <div class="sticky-sidebar">
            <div class="filter-actions">
              <label>Filter :</label>
              <a href="#" class="btn btn-dark btn-link filter-clean">
                Clean All
              </a>
            </div>

            {/* <!-- Start of Collapsible Widget --> */}
            <div class="widget widget-collapsible">
              <h3 class="widget-title">
                <span>Search Product</span>
              </h3>
              <div class="widget-body">
                <form class="price-range">
                  <input
                    name="search"
                    class="search"
                    placeholder="Search...."
                    style={{ width: "100%" }}
                  />

                  <a href="#" class="btn btn-primary btn-rounded">
                    <i className="fa fa-search"></i>
                  </a>
                </form>
              </div>
            </div>
            {/* <!-- End of Collapsible Widget --> */}
            {/* <!-- Start of Collapsible widget --> */}
            <div class="widget widget-collapsible">
              <h3 class="widget-title">
                <span>All Categories</span>
              </h3>
              <ul class="widget-body filter-items search-ul">
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Babies</a>
                </li>
                <li>
                  <a href="#">Beauty</a>
                </li>
                <li>
                  <a href="#">Decoration</a>
                </li>
                <li>
                  <a href="#">Electronics</a>
                </li>
                <li>
                  <a href="#">Fashion</a>
                </li>
              </ul>
            </div>
            {/* <!-- End of Collapsible Widget --> */}

            {/* <!-- Start of Collapsible widget --> */}
            <div class="widget widget-collapsible">
              <h3 class="widget-title">
                <span>All Tags</span>
              </h3>
              <div className="tag_list">
                <a href="">Electronics</a>
                <a href="">Man</a>
                <a href="">Women</a>
                <a href="">Baby</a>
              </div>
            </div>
            {/* <!-- End of Collapsible Widget --> */}

            {/* <!-- Start of Collapsible Widget --> */}
            <div class="widget widget-collapsible">
              <h3 class="widget-title">
                <span>Price</span>
              </h3>
              <div class="widget-body">
                <form class="price-range">
                  <input
                    type="number"
                    name="min_price"
                    class="min_price text-center"
                    placeholder="$min"
                  />
                  <span class="delimiter">-</span>
                  <input
                    type="number"
                    name="max_price"
                    class="max_price text-center"
                    placeholder="$max"
                  />
                  <a href="#" class="btn btn-primary btn-rounded">
                    Go
                  </a>
                </form>
              </div>
            </div>
            {/* <!-- End of Collapsible Widget --> */}

            {/* <!-- Start of Collapsible Widget --> */}
            <div class="widget widget-collapsible">
              <h3 class="widget-title">
                <span>Size</span>
              </h3>
              <ul class="widget-body filter-items item-check mt-1">
                <li>
                  <a href="#">Extra Large</a>
                </li>
                <li>
                  <a href="#">Large</a>
                </li>
                <li>
                  <a href="#">Medium</a>
                </li>
                <li>
                  <a href="#">Small</a>
                </li>
              </ul>
            </div>
            {/* <!-- End of Collapsible Widget --> */}

            {/* <!-- Start of Collapsible Widget --> */}
            <div class="widget widget-collapsible">
              <h3 class="widget-title">
                <span>Brand</span>
              </h3>
              <ul class="widget-body filter-items item-check mt-1">
                <li>
                  <a href="#">Elegant Auto Group</a>
                </li>
                <li>
                  <a href="#">Green Grass</a>
                </li>
                <li>
                  <a href="#">Node Js</a>
                </li>
                <li>
                  <a href="#">NS8</a>
                </li>
                <li>
                  <a href="#">Red</a>
                </li>
                <li>
                  <a href="#">Skysuite Tech</a>
                </li>
                <li>
                  <a href="#">Sterling</a>
                </li>
              </ul>
            </div>
            {/* <!-- End of Collapsible Widget --> */}
          </div>
          {/* <!-- End of Sidebar Content --> */}
        </div>
      </aside>
    </>
  );
};

export default ShopPageSideBar;
