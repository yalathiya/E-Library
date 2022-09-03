import React from "react";

const BookCard = ({ bookData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {bookData.map((curElem) => {
          const {
            id,
            name,
            category,
            image,
            language,
            link,
            author,
            pages,
            publisher,
            ISBM10,
            ISBN13,
          } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      Language: {language}
                    </span>
                    <br></br>
                    <span className="card-description subtle">
                      Author: {author}
                    </span>
                    <br></br>
                    <span className="card-description subtle">
                      Pages: {pages}
                    </span>
                    <br></br>
                    <span className="card-description subtle">
                      Publisher: {publisher}
                    </span>
                    <br></br>
                    <span className="card-description subtle">
                      ISBN10 : {ISBM10}
                    </span>
                    <br></br>
                    <span className="card-description subtle">
                      ISBN13 : {ISBN13}
                    </span>
                    <br></br>
                    <div className="card-read">Details</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />

                  <a
                    className="card-tag  subtle"
                    target="_blank"
                    rel="noreferrer"
                    href={link}
                  >
                    Read Now
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default BookCard;
