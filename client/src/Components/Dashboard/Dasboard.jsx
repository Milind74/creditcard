import style from "./Dashboard.module.css";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import Cards from 'react-credit-cards';
//import swal from 'sweetalert';
import swal from '@sweetalert/with-react';
import 'react-credit-cards/es/styles-compiled.css';
export const Dashboard = () => {

  const [arr,setarr] = useState([]);
  const [apply,setApply] = useState([]);
  const [loading,setLoading] = useState(true);
  const [up,setup] = useState(false);
  const [ca,setca] = useState({
      cvc: '123',
      expiry: '12/23',
      focus: 'name',
      name: 'Digvijay Singh',
      number: '4901234556453456'
  })

  useEffect(async ()=>{
    await axios({
      method:'get',
      url:'http://localhost:8000/card'
    }).then(({data})=>{
      setarr((arr)=>[...data.cardGet]);
    }).catch(()=>{
    });

    await axios({
      method:'get',
      url:'http://localhost:8000/customer/616258688e4fba79fb7781f5'
    }).then(({data})=>{
      setApply((apply)=>[...data.student.card_apply]);
    }).catch(()=>{
    });


  },[up]);


  const handleApply = (id) => 
  {
    axios({
      method:'patch',
      url:'http://localhost:8000/card/apply/616258688e4fba79fb7781f5',
      data:[id]
    }).then(({data})=> {
      swal("Apply Successfully!", "Dear Digvijay Wait for next Notification", "success");
      setup(!up);
    }).catch((err)=>{
      swal("Error", "Something went Wrong !", "error");
    })    
  }


  const handleStatus = () => 
  {
    axios({
      method:'get',
      url:'http://localhost:8000/customer/616258688e4fba79fb7781f5',
    }).then(({data})=> {
        const {status} = data.student;

        const {card_limit,card_number,expiry_date,cvv} = data.student;
            
            const final = {
               'number':card_number.split("-").join(""),
               'cvc':cvv,
               'expiry':expiry_date,
               'limit':card_limit,
               'focus':"number",
               'name':"Digvijay Singh"
            }
            setca({final});
            if(status == 0)
            {
              swal("Application is under Process", "Wait for next Notification", "warning");
            }
          else if(status == 1)
          {


          swal({
            icon:'success',
            text: "Congratulations Digvijay Bank Alloted this Card to You",
            buttons: {
              cancel: "Close",
            },
            content: (
              <div>
              <Cards
                cvc={final.cvc}
                expiry={final.expiry}
                focused={final.focus}
                name={final.name}
                number={final.number}
              />
              <div>
               <h4>Your Credit limit is : {final.limit}</h4>
              </div>
              </div>
            )
          })
        }
      // swal("Apply Successfully!", "Dear Digvijay Wait for next Notification", "success");
      // setup(!up);
    }).catch((err)=>{
      swal("Error", "Something went Wrong !", "error");
    })  
  }





  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className={style.nav}>
              <p className={style.parawidth}>
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
      <div className={style.boxContainer}>
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
            {apply.map((ele) => (
              <div className={style.cardBox}>
                <img src={ele.card_img} alt="" className={style.imageSize} />
                <div>
                  <span>{ele.card_name}</span>
                </div>
                <div>
                  <span className={style.priceStyle}>Price: ₹{ele.card_fee}</span>
                </div>
                <div className={style.cardBoxButton}>
                 <button type="button" className="btn btn-primary" onClick={handleStatus}>
                    See Status
                  </button>
                </div>
              </div>
            ))}
          </div>
          <span className={style.DashboardHeading}>Card Avaliable</span>
          <div className={style.applicationDiv}>
            {arr.map((ele) => (
              <div className={style.cardBox}>
                <img src={ele.card_img} alt="" className={style.imageSize} />

                <div>
                  <span>{ele.card_name}</span>
                </div>
                <div>
                  <span className={style.priceStyle}>Price: ₹{ele.card_fee}</span>
                </div>
                <div className={style.cardBoxButton}>
                  <button type="button" className="btn btn-primary" onClick={()=>handleApply(ele._id)}>
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
