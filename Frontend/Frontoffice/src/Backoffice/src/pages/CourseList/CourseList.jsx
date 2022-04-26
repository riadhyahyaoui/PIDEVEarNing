import React, {useEffect} from "react";
import "./CourseList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function CourseList() {
  const [data, setData] = useState(productRows);
  useEffect(()=>{
      axios.get(`//localhost:5000/api/course/`)
          .then((response) => {
              for(let i=0 ;i<response.data.length;i++) {
                  response.data[i].id = response.data[i]._id
              }
              setData(response.data)
              console.log("response");
              //console.log(res);
              console.log(response.data);

          })
          .catch((e) => {
              console.log(e);
              console.log("response");
          });


  },[])

  const handleDelete = (id) => {


      axios.delete(`//localhost:5000/api/course/`+id)
          .then((response) => {

              console.log("response");

              console.log(response.data);

          })
          .catch((e) => {
              console.log(e);
              console.log("response");
          });
      setData(data.filter((item) => item.id !== id));

  };







  const handleFilter = (id) => {
    setData(data.filter((item) => item.name !== id));
  };

  const columns = [

    {
      field: "image",
      headerName: "Image",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" crossOrigin="anonymous" src={params.row.imgLink} alt="" />

          </div>
        );
      },
    },
      {
      field: "course",
      headerName: "Course",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">

            {params.row.name}
          </div>
        );
      },
    },

    /*{ field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },*/
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"../course/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <Link to="../../back/newcourse">
        <button className="productAddButton">Create</button>
      </Link>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        filterMode
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
