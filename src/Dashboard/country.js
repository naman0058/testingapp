import React from "react";
import Sliderbar from "Dashboard/slidebar";

import Nav from "Dashboard/navbar";
import Slider from "rc-slider";

class City extends React.PureComponent {


  state = {
    data: []
  }


  componentDidMount = async () => {


    
          var url = `http://172.20.10.3:4000/country/show`;
          
          fetch(url, {
           
            
            headers: new Headers({
              'Content-Type': 'application/json',
            }),
          })
            .then((res) => res.json())
            .catch((error) => console.error('Error', error))
            .then((result) => {
          console.log('result123',result)
              if (result[0]) {
                this.setState({
                  refreshing: false,
                  data: result, //setstate of data which is convert in to fetch data and pass them in to component see below
                });
  
             
                // alert(result[0].timeleft)
  
  
              } else {
                this.setState({
                  refreshing: false,
                  data: ['result'], //setstate of data which is convert in to fetch data and pass them in to component see below
                });
              }
            });
  
       
  };


  delete = (txt) => {
    // alert(txt)

    var url = `http://172.20.10.3:4000/country/delete?id=${txt}`;
          
    fetch(url, {
     
      
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error', error))
      .then((result) => {
    console.log('result123',result)
        if (result.msg == 'success') {
          this.componentDidMount()

       
          // alert(result[0].timeleft)


        } else {
        alert('An error occure...please try again later')
        }
      });


    
  }

  render(){

    let list = this.state.data  


if(list[0] == undefined){
return(
  <>
  <p style={{color:'red'}}>Loading...</p>
  </>
)
}

else if(list[0].id == undefined){
  return(
    <>
    <p style={{color:'red'}}>No Data Found</p>
    </>
  )
  }

else{
  return (
    <>
      <Nav />

      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="col-lg-10">
                
              </div>
              <div className="table-responsive">
                <table className="table align-middle table-nowrap mb-0">
                  <thead className="table-light">
                    <tr>
                     
                      <th className="align-middle">Name</th>
                      <th className="align-middle">Logo</th>
                      <th className="align-middle">Edit</th>
                      <th className="align-middle">Delete</th>
                 
                    </tr>
                  </thead>
                  <tbody>



{
  list.map(item=>(
    <tr>
 
  
    <td>{item.name}</td>
    <td><img src= {`http://172.20.10.3:4000/images/${item.logo}`}></img></td>
    
   
    <td>
      <button
        type="button"
        className="btn btn-primary"
        style={{backgroundColor:'#4F46E5'}}
      >
       Edit
      </button>
    </td>


     
    <td>
      <button
        type="button"
        className="btn btn-danger"
        style={{backgroundColor:'#CF5A5A'}}
        onClick={this.delete.bind(this,item.id)}
      >
        Delete
      </button>
    </td>
  </tr>
  ))
}

                   

                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
  }
};
export default City;
