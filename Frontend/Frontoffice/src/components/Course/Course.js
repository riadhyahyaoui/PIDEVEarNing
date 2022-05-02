import React, {useEffect, useState} from "react";
import {FlippingCardBack, FlippingCardFront, FlippingCard} from 'react-ui-cards';
import axios from "axios";
import Karaoke from "../../img/backflip.jpg";
const Course = () => {
    const [courses,setCourses]=useState([])
    useEffect(()=>{

        axios.get(`//localhost:5000/api/course/`)
            .then((response) => {
                for(let i=0 ;i<response.data.length;i++) {
                    response.data[i].id = response.data[i]._id
                    response.data[i].beginner=response.data[i].beginner.length;
                    response.data[i].medium=response.data[i].medium.length;
                    response.data[i].advanced=response.data[i].advanced.length;
                }
                setCourses(response.data)
                console.log("response");
                //console.log(res);
                console.log(response.data);

            })
            .catch((e) => {
                console.log(e);
                console.log("response");
            });

    },[])


    return (
        <span>
<div style={{fontSize:'46px',marginLeft:'45%'}}>Our Courses</div>
            {courses.map((c)=>(
                <FlippingCard>
                    <FlippingCardBack >
                        <div style={{backgroundImage: `url(${Karaoke})`,backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'}}>
                            <div color='white'>{c.name} Course</div>
                            <div>Description : {c.description}</div>

                        </div>
                    </FlippingCardBack>
                    <FlippingCardFront>
                        <img style={{width:'100%'}} crossOrigin="anonymous" src={c.imgLink} alt=""  />

                    </FlippingCardFront>
                </FlippingCard>
            ))}
</span>
    );
};

export default Course;
