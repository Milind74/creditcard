import style from "./Dashboard.module.css";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
export const Dashboard = () => {
  const arr = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CpqrctE9K4G9sN-9HGYbzTgDjiXNyK03kA&usqp=CAU",
      name: "xyz company",
      price: 800,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CpqrctE9K4G9sN-9HGYbzTgDjiXNyK03kA&usqp=CAU",
      name: "ABC company",
      price: 600,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CpqrctE9K4G9sN-9HGYbzTgDjiXNyK03kA&usqp=CAU",
      name: "pqr company",
      price: 1200,
    },
  ];
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div
              style={{
                textAlign: "center",
                width: "90%",
                display: "flex",
                margin: "auto",
                alignItems: "center",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <p style={{ textAlign: "left", margin: "0px" }}>
                We have updated our T&C for Paisabazaar Credit Score Services,
                By continuing your use of Paisabazaar account, you agree with
                the updated Terms of Service - Paisabazaar Credit Score
              </p>
              <button
                type="button"
                class="btn btn-primary"
                style={{ width: "120px" }}
              >
                Ok got it!
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        style={{
          width: "90vw",
          padding: "20px",
          display: "flex",
          boxSizing: "border-box",
          margin: "auto",
          justifyContent: "space-between",
        }}
      >
        {" "}
        {/* dashboard */}
        <div>
          {" "}
          {/* sidebar */}
          <ProSidebar>
            <Menu iconShape="square">
              <MenuItem>Dashboard</MenuItem>
              <SubMenu title="Products">
                <MenuItem>Credit Report</MenuItem>
                <MenuItem>Personal Loan</MenuItem>
                <MenuItem>Business Loan</MenuItem>
                <MenuItem>Credit Card</MenuItem>
                <MenuItem>Savings Account</MenuItem>
              </SubMenu>
              <MenuItem>Support</MenuItem>
            </Menu>
          </ProSidebar>
          ;
        </div>
        <div className={style.DashboardBody}>
          {/* body */}
          <span className={` ${style.DashboardFirstHeading}`}>Dashboard</span>
          <div className={style.cardSpecification}></div>
          <span className={style.DashboardHeading}>My Applications</span>
          <div className={style.applicationDiv}>
            {arr.map((ele) => (
              <div className={style.cardBox}>
                <img src={ele.image} alt="" className={style.imageSize} />
                <div>
                  <span>{ele.name}</span>
                </div>
                <div>
                  <span className={style.priceStyle}>Price: ₹{ele.price}</span>
                </div>
                <div className={style.cardBoxButton}>
                  <button type="button" className="btn btn-primary">
                    See Status
                  </button>
                </div>
              </div>
            ))}
          </div>
          <span className={style.DashboardHeading}>My Recent Searches</span>
          <div className={style.applicationDiv}>
            {arr.map((ele) => (
              <div className={style.cardBox}>
                <img src={ele.image} alt="" className={style.imageSize} />

                <div>
                  <span>{ele.name}</span>
                </div>
                <div>
                  <span className={style.priceStyle}>Price: ₹{ele.price}</span>
                </div>
                <div className={style.cardBoxButton}>
                  <button type="button" className="btn btn-primary">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
