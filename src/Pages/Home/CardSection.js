import React from 'react';
import Card from '../../Components/Card';
const CardSection = () =>{
    return(
        <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">
            We love new friends!
          </h2>
          <div className="row">
            <div className="col-4">
              <Card title="The Batman" subtitle="Story of batman" buttonName="Book now"/>
            </div>
            <div className="col-4">
              <div className="card" style={{width:"18rem"}}>
              <Card title="The Batman" subtitle="Story of batman" buttonName="Book now"/>
              </div>
            </div>
            <div className="col-4">
            <Card title="The Batman" subtitle="Story of batman" buttonName="Book now"/>
            </div>
          </div>
        </div>
      </section>
    )
}

export default CardSection;