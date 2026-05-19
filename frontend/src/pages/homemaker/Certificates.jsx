import React, {
  useEffect,
  useState
} from "react";

import "../../index.css";

const Certificates = () => {

  const [certificates,
    setCertificates] =
    useState([]);

  useEffect(() => {

    fetchCertificates();

  }, []);

  const fetchCertificates =
    () => {

      const savedCertificates =

        JSON.parse(
          localStorage.getItem(
            "certificates"
          )
        ) || [];

      setCertificates(
        savedCertificates
      );
    };

  return (

    <div className="dashboard-page">

      <div className="dashboard-header">

        <h1>
          My Certificates 🏆
        </h1>

        <p>
          Celebrate your achievements
          and learning milestones.
        </p>

      </div>

      <div className="courses-grid">

        {certificates.length === 0 ? (

          <p>
            No certificates earned yet.
          </p>

        ) : (

          certificates.map((certificate) => (

            <div
              key={certificate.id}
              className="certificate-card"
            >

              <div className="certificate-top">

                🌸 HER HUB 🌸

              </div>

              <h2>
                Certificate of Completion
              </h2>

              <p>
                This certificate is proudly awarded to
              </p>

              <h3>
                {certificate.userName}
              </h3>

              <p>
                for successfully completing
              </p>

              <h2>
                {certificate.courseName}
              </h2>

              <span>
                Empowering Homemakers Through Learning
              </span>

              <button
                onClick={() =>
                  window.print()
                }
              >
                Download Certificate
              </button>

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default Certificates;