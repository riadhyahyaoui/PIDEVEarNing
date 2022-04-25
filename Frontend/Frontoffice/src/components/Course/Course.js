import React from "react";

const Course = () => {
    let imgs = [
        'https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg',
        'https://res.cloudinary.com/stealthman22/image/upload/v1586308023/new-portfolio/hero/two-cargo-ships-sailing-near-city-2144905.jpg',
    ];


    return (
<div className="section layout_padding">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="full">
                    <div className="heading_main text_align_center">
                        <h2><span>Popular </span>Courses</h2>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="full blog_img_popular">
                    <img className="img-responsive" crossOrigin="anonymous"  src="http://i.pinimg.com/236x/41/8f/77/418f7742c4409f2b5688509b09be62fd--house-music-color-splash.jpg" alt="#"/>
                    <h4>Financial Accounting</h4>
                </div>
            </div>
            <div className="col-md-4">
                <div className="full blog_img_popular">
                    <img className="img-responsive" crossOrigin="anonymous" src="../../img/p2.png" alt="#"/>
                    <h4>Managerial Accounting</h4>
                </div>
            </div>
            <div className="col-md-4">
                <div className="full blog_img_popular">
                    <img className="img-responsive" crossOrigin="anonymous" src="../../img/p3.png" alt="#"/>
                    <h4>Intermediate Accounting</h4>
                </div>
            </div>
        </div>
    </div>
</div>

    );
};

export default Course;
