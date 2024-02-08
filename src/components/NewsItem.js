import React from "react";

const NewsItem =(props)=> {
 
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className=" badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={
              imageUrl ===
                "https://i-invdn-com.investing.com/news/https://i-invdn-com.investing.com/akapi-images/800x450/cb92fdb333133c5a9a9c97aca8ae0004_w_800_h_450.jpg" ||
              imageUrl === null
                ? "https://static.toiimg.com/thumb/msid-107148671,width-1070,height-580,imgsize-1988472,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small class="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>

            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;




// export class NewsItem extends Component {
//   render() {
//     let { title, description, imageUrl, newsUrl, author, date, source } =
//       this.props;
//     return (
//       <div className="my-3">
//         <div className="card" style={{ width: "18rem" }}>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               position: "absolute",
//               right: "0",
//             }}
//           >
//             <span className=" badge rounded-pill bg-danger">{source}</span>
//           </div>
//           <img
//             src={
//               imageUrl ===
//                 "https://i-invdn-com.investing.com/news/https://i-invdn-com.investing.com/akapi-images/800x450/cb92fdb333133c5a9a9c97aca8ae0004_w_800_h_450.jpg" ||
//               imageUrl === null
//                 ? "https://static.toiimg.com/thumb/msid-107148671,width-1070,height-580,imgsize-1988472,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
//                 : imageUrl
//             }
//             className="card-img-top"
//             alt="..."
//           />
//           <div className="card-body">
//             <h5 className="card-title">{title} </h5>
//             <p className="card-text">{description}</p>
//             <p class="card-text">
//               <small class="text-muted">
//                 By {!author ? "Unknown" : author} on{" "}
//                 {new Date(date).toGMTString()}
//               </small>
//             </p>

//             <a
//               rel="noreferrer"
//               href={newsUrl}
//               target="_blank"
//               className="btn btn-sm btn-dark"
//             >
//               Read More
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default NewsItem;
