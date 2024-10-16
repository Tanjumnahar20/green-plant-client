import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import banner from "../../../assets/video/bg.jpg";
const Video = () => {
  return (
    <section
      className="py-5 text-white"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-offset="300"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="text-center my-5">
        <h3 className="text-uppercase h6">Welcome to Green Plant</h3>
        <p className="fs-1 font-bold">Garden From Our Heart.</p>
        <button
          className="btn btn-green text-white font-bold d-flex justify-content-center align-items-center mx-auto gap-2 px-3 py-2 fs-4"
          data-bs-toggle="modal"
          data-bs-target="#videoModal"
        >
          <FaPlayCircle />
          Play Video
        </button>
      </div>

      {/*------- This is Video Modal section-------  */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="videoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body w-100">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/AGcTCvn-a6g?start=18"
                title="YouTube video player"
                style={{ border: "none" }} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
