import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://c.ndtvimg.com/2022-05/j0iu8lp8_ranveer_625x300_13_May_22.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle"> Jayeshbhai Jordaar</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue"> jayeshbhai@yashraj.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue"> +91 98676-76543</span>
                </div>
                <div className="detailItem">
                  <span aiclassName="itemKey">Address:</span>
                  <span className="itemValue">
                    {" "}
                    35 D, Phoenix Lands, Ahmedabad, Gujrat
                  </span>
                </div>
                <div className="d etailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue"> India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 5 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;

// import "./single.scss";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
// import List from "../../components/table/Table";

// const Single = () => {
//   return (
//     <div className="single">
//       <Sidebar />
//       <div className="singleContainer">
//         <Navbar />
//         <div className="top">
//           <div className="left">
//             <div className="editButton">Edit</div>
//             <h1 className="title">Information</h1>
//             <div className="item">
//               <img
//                 src="https://images.unsplash.com/photo-1589386417686-0d34b5903d23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
//                 alt=""
//                 className="itemImg"
//               />
//             </div>

// <div className="details">
//   <h1 className="itemTitle"> John Doe</h1>
//   <div className="detailItem">
//     <span className="itemKey">Email:</span>
//     <span className="itemValue"> johndoe@gmail.com</span>
//   </div>
//   <div className="detailItem">
//     <span className="itemKey">Phone:</span>
//     <span className="itemValue"> +91 98676-76543</span>
//   </div>
//   <div className="detailItem">
//     <span aiclassName="itemKey">Address:</span>
//     <span className="itemValue"> 35 D, Phoenix Lands, Mumbai</span>
//   </div>
//   <div className="d etailItem">
//     <span className="itemKey">Country:</span>
//     <span className="itemValue">India</span>
//   </div>
// </div>
//           </div>
//         </div>
//         <div className="right">
//           <Chart aspect={3 / 1} title="User Speding (Last 5 months)" />
//         </div>
//       </div>
//       <div className="bottom">
//         <h1 className="title">Last Transactions</h1>
//         <List />
//       </div>
//     </div>
//   );
// };

// export default Single;
